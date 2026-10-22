# Project Atlas: architecture and delivery plan

Status at the time of writing: the site is a **static Next.js 16 App Router app** with
no database, no authentication, no server routes and no payment integration. Everything in
Atlas that stores user data, takes payment or calls an AI model therefore needs new
infrastructure first. This document says what that is and what must be decided.

## Done (P0 / P1 slice)
- Canonical domain `https://sfdigitalsolutions.lk` (metadata, sitemap, robots), www redirect to apex.
- Official email `info@sfdigitalsolutions.lk` in the site config (`lib/site.ts`).
- `security.txt`, security headers/CSP (already present), shared constants, lint/typecheck/build clean.
- Website packages, portfolio, quote form with validation, policy pages, Terms/Payment/Delivery/Privacy.
- `/ecosystem` page (Campus / Technologies / Media) linking only to pages that exist.
- Paid product files removed from `public/`.

## Decisions needed from you before P2+
| Decision | Options (verify current terms yourself) | Why it blocks |
| --- | --- | --- |
| Database + auth | Postgres on Supabase or Neon, with Supabase Auth or Auth.js | Accounts, orders, portfolios, certificates, leads |
| Payment provider | Sri Lankan gateways such as PayHere or Genie; needs merchant approval | Checkout, enrolment, deposits |
| Email delivery | Resend / Postmark / Zoho with SPF, DKIM, DMARC | Receipts, proposals, certificates |
| AI provider | Any (adapter keeps it swappable); budget per user per month | Career Navigator, Growth Scanner |
| File storage for paid downloads | Private bucket with signed, expiring URLs | Protected downloads |
| Hosting plan | Vercel plan that supports server routes and cron | Webhooks, rate limits |

## Recommended order
1. **P2: payments and orders.** Server-created orders, server-side prices, signed callbacks,
   idempotent processing, reconciliation, audit log, access granted only after verified payment.
   Do not announce live payments until a sandbox and then a small live transaction both pass.
2. **P3: Skill-to-Income Engine, SkillProof Passport, Proposal Studio.** Build on P2 accounts.
   Certificates issued only by staff, unique verification IDs, revocation, public/private controls.
3. **P4: digital asset market and Growth Scanner.** The scanner needs an SSRF-safe fetcher
   (public http/https only, DNS re-resolution, block private/link-local ranges, redirect revalidation, size/time limits).
4. **P5: AI Career Navigator and one or two toolkit tools** (quotation or invoice generator first).
5. **P6: affiliates, revenue dashboard, subscriptions.** Subscriptions only after cancellation,
   refund and payment-provider recurring support are defined.

## Ground rules carried from the brief
- No invented statistics, testimonials, accreditation, partnerships or earnings claims.
- AI output is labelled as AI and possibly wrong; automated estimates are never shown as verified findings.
- No raw card data; secrets only in server environment variables.
- Role checks on the server for every protected operation.
- Revenue dashboard shows real data only; sample data only in development mode.
