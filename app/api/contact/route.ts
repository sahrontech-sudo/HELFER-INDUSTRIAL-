import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20).regex(/^[+()\-\s\d]+$/),
  email: z.union([z.string().trim().email().max(120), z.literal("")]).optional(),
  subject: z.string().trim().min(2).max(80),
  message: z.string().trim().min(10).max(3000),
  consent: z.literal("yes"),
  website: z.string().max(200).optional()
});

const json = (body: object, status = 200) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

async function enforceRateLimit(ip: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    const redis = new Redis({ url, token });
    const key = `contact-rate:${ip}`;
    const count = await redis.incr(key);
    if (count === 1) await redis.expire(key, 600);
    return count <= 5;
  }

  // Local development fallback only. Configure Upstash before production deployment.
  if (process.env.NODE_ENV === "production") {
    throw new Error("Rate limiting is not configured.");
  }
  const globalForLimit = globalThis as typeof globalThis & { contactLimits?: Map<string, { count: number; reset: number }> };
  globalForLimit.contactLimits ??= new Map();
  const now = Date.now();
  const current = globalForLimit.contactLimits.get(ip);
  if (!current || current.reset < now) {
    globalForLimit.contactLimits.set(ip, { count: 1, reset: now + 600_000 });
    return true;
  }
  current.count += 1;
  return current.count <= 5;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const configuredSite = process.env.SITE_URL;
  if (configuredSite && origin) {
    try {
      if (new URL(origin).origin !== new URL(configuredSite).origin) return json({ error: "Request origin is not allowed." }, 403);
    } catch {
      return json({ error: "Invalid request origin." }, 403);
    }
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12_000) return json({ error: "Request is too large." }, 413);

  let body: unknown;
  try { body = await request.json(); } catch { return json({ error: "Invalid request body." }, 400); }

  const parsed = schema.safeParse(body);
  if (!parsed.success) return json({ error: "Please check the form fields and try again." }, 400);

  // Honeypot: silently accept automated submissions without sending email.
  if (parsed.data.website) return json({ ok: true });

  const forwarded = request.headers.get("x-forwarded-for");
  const ip = (forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown").slice(0, 64);

  try {
    const allowed = await enforceRateLimit(ip);
    if (!allowed) return json({ error: "Too many enquiries from this connection. Please try again later." }, 429);
  } catch {
    return json({ error: "The enquiry service is temporarily unavailable. Please contact us by phone or email." }, 503);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "helfer.solution@gmail.com";
  if (!apiKey || !from) return json({ error: "The enquiry form is not configured yet. Please contact us by phone or email." }, 503);

  try {
    const resend = new Resend(apiKey);
    const { name, phone, email, subject, message } = parsed.data;
    const safe = (value: string) => value.replace(/[<>&"]/g, (c) => { if (c === "<") return "&lt;"; if (c === ">") return "&gt;"; if (c === "&") return "&amp;"; return "&quot;"; });
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email || undefined,
      subject: `Website enquiry: ${subject}`,
      text: `New website enquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}\nEnquiry type: ${subject}\n\nMessage:\n${message}`,
      html: `<h2>New website enquiry</h2><p><strong>Name:</strong> ${safe(name)}</p><p><strong>Phone:</strong> ${safe(phone)}</p><p><strong>Email:</strong> ${safe(email || "Not provided")}</p><p><strong>Enquiry type:</strong> ${safe(subject)}</p><p><strong>Message:</strong><br/>${safe(message).replace(/\n/g, "<br/>")}</p>`
    });
    if (result.error) return json({ error: "We could not send your enquiry. Please try again later." }, 502);
    return json({ ok: true });
  } catch {
    return json({ error: "Unable to send your enquiry right now. Please try again later." }, 502);
  }
}
