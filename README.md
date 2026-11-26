# Helfer Industrial Solutions — Website

A multi-page Next.js 15 + TypeScript website based on the supplied 5-page PDF reference.

## Pages included

- `/` — Home
- `/about` — About Us
- `/products` — Product catalogue
- `/products/[slug]` — Individual product detail pages (8)
- `/services` — Industrial services
- `/infrastructure` — Infrastructure/support information
- `/testimonials` — Customer feedback
- `/contact` — Contact details and enquiry form
- `/helfer-enterprise` — Navigation page; requires approved division content
- `/marjan-traders` — Navigation page; requires approved division content

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open http://localhost:3000

On macOS/Linux, use `cp .env.example .env.local` instead of `copy`.

## Configure the enquiry form

The form sends enquiries through Resend. Before it can send real email:

1. Create a Resend account.
2. Verify a domain you control in Resend.
3. Create an API key.
4. Set `RESEND_API_KEY`.
5. Set `CONTACT_FROM_EMAIL` to an address on the verified domain.
6. Set `CONTACT_TO_EMAIL=helfer.solution@gmail.com`.
7. Set `SITE_URL` to the final website origin.

For production, configure an Upstash Redis database and set:
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

The API intentionally returns a service-unavailable response in production if rate limiting is not configured. This avoids deploying a public enquiry endpoint without distributed rate limiting. Local development uses a process-memory fallback.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Add all variables from `.env.example` in Vercel Project Settings → Environment Variables.
4. Deploy.
5. Test the form on the production domain.

## Before publishing

- Confirm the phone numbers, email, address and website URL.
- Confirm permission to publish the Ramesh Patel / Shreeji Engineering testimonial from the PDF.
- Add official social profile URLs in `components/Footer.tsx`. Current social links are generic platform links and should be replaced or removed.
- Supply official content for Helfer Enterprise and Marjan Traders. Their names appear in the PDF navigation, but their detailed profiles do not.
- Replace stock image URLs with approved company/product photography where available.
- Confirm product specifications and availability before adding technical claims.

## Security notes

- API keys are read only on the server; never prefix secrets with `NEXT_PUBLIC_`.
- The contact API validates fields on the server, limits body size, checks same-site origin when `SITE_URL` is configured, uses a honeypot field and rate limits submissions.
- Production rate limiting uses Upstash Redis. Do not remove this requirement for deployment.
- Do not collect passwords, payment details or sensitive personal information in this form.
- Keep dependencies updated and review Vercel/Resend/Upstash access regularly.

## Customise content

- Business contact details and product/service content: `lib/site.ts`
- Navigation: `lib/site.ts`
- Header: `components/Header.tsx`
- Footer/social URLs: `components/Footer.tsx`
- Main styling: `app/globals.css`
- Contact email delivery: `app/api/contact/route.ts`
