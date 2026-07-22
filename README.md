# SF Digital Solutions — Website

A Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 website for SF Digital Solutions,
a computer training institute. Blue color system, fully responsive (mobile-first).

## Pages
- `/` — Home (hero, stats, course categories, about, teachers preview, blog preview, CTA)
- `/teachers` — Full teacher listing
- `/blog` — Blog listing
- `/blog/[slug]` — Individual blog post
- `/contact` — Contact form + info

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Notes
- All course, teacher and blog content is in `lib/data.ts` — edit that file to update text across the whole site.
- Colors are defined as CSS variables in `app/globals.css` (search for `--color-navy`, `--color-blue`, etc.) — change these to retheme the whole site.
- The contact form (`components/ContactForm.tsx`) currently only shows a success message on submit. Wire it up to a real backend (an API route, Formspree, or your Laravel API) to actually receive messages.
- This project was built in a sandboxed environment without access to Google Fonts, so it currently falls back to system fonts. To use Poppins/Inter as originally designed, uncomment/add back `next/font/google` in `app/layout.tsx` — it will work normally once you run this on a machine with regular internet access:

```tsx
import { Poppins, Inter } from "next/font/google";
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["500","600","700","800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
// add poppins.variable and inter.variable to the <html> className
```
