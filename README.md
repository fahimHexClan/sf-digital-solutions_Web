# SF Digital Solutions LK — Website

Next.js (App Router) + React 19 + TypeScript + Tailwind CSS v4. Static site: no database
and no API routes. Training institute + website-development agency for Sri Lanka.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Where to edit things

| What | File |
| --- | --- |
| Phone, email, WhatsApp number, registration/LMS URLs | `lib/site.ts` |
| Courses, services, teachers, blog, products, testimonials, **portfolio** | `lib/data.ts` |
| Website packages, prices, support period, process, milestones, payment steps, terms | `lib/websiteConfig.ts` |
| Colours / brand | CSS variables in `app/globals.css` |

### Website packages and prices
`lib/websiteConfig.ts` holds the Basic / Business / E-commerce packages. Any field set to
`null` is shown to visitors as "Confirmed in your written quotation" (price shows
"Request a Quote"). Fill values in only when you can honour them.

### Portfolio
Add or edit entries in the `portfolio` array in `lib/data.ts`. Put screenshots in
`public/images/portfolio/` and set `image`. Mark sample work with `isDemo: true` so it is
labelled "Demo project". Only list real projects.

### Policy pages
`/terms`, `/payment-policy`, `/delivery-support` and `/privacy` are plain-language summaries.
**Have a qualified lawyer review them before relying on them as a formal contract.**

## Forms
The contact form and the website quote form validate input in the browser.

- **Default (no setup):** submitting opens WhatsApp with the message ready to send.
  Nothing is stored by the website; the enquiry reaches you when the visitor presses Send.
- **Direct delivery:** set `NEXT_PUBLIC_QUOTE_FORM_ENDPOINT` to a form service URL
  (for example a Formspree endpoint). The form then POSTs JSON there and the CSP is
  updated automatically. If delivery fails, the visitor is offered WhatsApp instead.

## Environment variables (all optional)
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=1234567890123456
NEXT_PUBLIC_QUOTE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

## Accounts (Supabase)
Optional. When `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set, the site shows
`/account`: email sign-in link, saved roadmaps and enrolment requests. When they are not set, none of
this appears and the rest of the site works as before.

Setup:
1. Supabase → SQL Editor → run `supabase/migrations/0001_accounts.sql` once.
2. Authentication → URL Configuration: Site URL `https://sfdigitalsolutions.lk`; add Redirect URLs
   `https://sfdigitalsolutions.lk/**` and `http://localhost:3000/**`.
3. Add the two env variables in Vercel (and `.env.local` for local use), then redeploy.
4. Sign in once on the site, then make yourself admin (SQL at the bottom of the migration file).
5. Authentication → SMTP: Supabase's built-in email is heavily rate-limited. Connect a real sender
   (for example Resend with `info@sfdigitalsolutions.lk`) before announcing accounts publicly.

Enrolment requests appear in Supabase → Table Editor → `enrolment_requests`; admins can change `status`.
The service_role key must never be added to this project or to any `NEXT_PUBLIC_` variable.

## Paid digital products — important
Never put paid files in `public/` or anywhere in this repository: everything in `public/`
is downloadable by URL, and a public GitHub repo exposes its files and history.
Keep paid files in private storage (for example private Google Drive links or your LMS) and
send them after payment is confirmed. `public/products/` and `/private-files/` are git-ignored.
The Shop is set up for manual delivery over WhatsApp after payment is confirmed.
