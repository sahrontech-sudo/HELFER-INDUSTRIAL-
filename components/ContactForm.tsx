"use client";
import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [kind, setKind] = useState<"success" | "error" | "">("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true); setStatus(""); setKind("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send your enquiry. Please try again.");
      setKind("success");
      setStatus("Thank you. Your enquiry has been submitted successfully. Our team will get back to you.");
      form.reset();
    } catch (error) {
      setKind("error");
      setStatus(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field"><label htmlFor="name">Full name *</label><input id="name" name="name" autoComplete="name" minLength={2} maxLength={80} required placeholder="Enter your name" /></div>
      <div className="field"><label htmlFor="phone">Phone number *</label><input id="phone" name="phone" autoComplete="tel" inputMode="tel" maxLength={20} required placeholder="+91 ..." /></div>
      <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" maxLength={120} placeholder="name@company.com" /></div>
      <div className="field"><label htmlFor="subject">Enquiry type</label><select id="subject" name="subject" defaultValue="Product enquiry"><option>Product enquiry</option><option>Service requirement</option><option>Spare parts</option><option>Request a quotation</option><option>Other</option></select></div>
      <div className="field"><label htmlFor="message">Your message *</label><textarea id="message" name="message" minLength={10} maxLength={3000} required placeholder="Tell us about your product or service requirement..." /></div>
      <div className="field" aria-hidden="true" style={{position:"absolute",left:"-10000px",width:1,height:1,overflow:"hidden"}}><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <label className="checkbox-row"><input type="checkbox" name="consent" value="yes" required /> I agree that Helfer Industrial Solutions may contact me regarding this enquiry.</label>
      <button className="btn btn-primary" type="submit" disabled={busy}>{busy ? "Sending..." : "Submit Enquiry"} <Send size={15}/></button>
      {status && <p className={`form-status ${kind}`} role="status" aria-live="polite">{status}</p>}
      <p className="form-note">Please do not include passwords, payment card details or other sensitive information.</p>
    </form>
  );
}
