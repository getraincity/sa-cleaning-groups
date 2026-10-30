# SA Cleaning Group — website

Marketing site for [sacleaninggroup.ca](https://sacleaninggroup.ca): home cleaning and
custodian services in Vancouver.

Rebuilt from the original Webflow site in **Next.js 16 (App Router) · React 19 · TypeScript ·
Tailwind CSS v4**. The design is a 1:1 port: every page was checked element-by-element against the
Webflow version at 1440 / 1000 / 800 / 600 / 375px.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional locally, see "Contact form" below
npm run dev                  # http://localhost:3000
```

| Script           | What it does                            |
| ---------------- | --------------------------------------- |
| `npm run dev`    | Dev server with hot reload              |
| `npm run build`  | Production build (all pages are static) |
| `npm run start`  | Serve the production build              |
| `npm run lint`   | ESLint                                  |
| `npm run format` | Prettier (also sorts Tailwind classes)  |

QA scripts (Playwright, run against `npm run start` on port 3000) live in `scripts/qa/`:
`sweep.mjs` checks every page in the sitemap at seven widths for overflow, clipped text, small
tap targets and console errors; `sheet.mjs` and `element.mjs` take review screenshots;
`photos.mjs` makes a contact sheet of every photo. See `docs/HANDOFF.md` for the full workflow.

## Project structure

```
src/
├─ app/                    Routes — URLs match the old Webflow site
│  ├─ page.tsx             /
│  ├─ about-us/            /about-us
│  ├─ home-cleaning/       /home-cleaning
│  ├─ car-detailing/       /car-detailing (history only: S&A no longer offers car detailing)
│  ├─ custodian-services/  /custodian-services
│  ├─ locations/           /locations and /locations/[slug] (one page per area)
│  ├─ products-we-trust/   /products-we-trust (under About in the nav)
│  ├─ blog/                /blog and /blog/[slug]
│  ├─ contact-us/          /contact-us          (+ actions.ts: contact form server action)
│  ├─ globals.css          Design tokens (@theme) + Webflow base typography
│  ├─ sitemap.ts, robots.ts, icon.png, apple-icon.png
├─ components/
│  ├─ layout/              Navbar, AnnouncementBar (home only), Footer
│  ├─ sections/            Page sections shared across pages (hero, pricing, gallery…)
│  ├─ locations/           Real (Google Maps) area map, service-area photo strip
│  ├─ blog/                Post cards, filterable grid, article renderer
│  ├─ seo/                 JSON-LD structured data
│  └─ ui/                  Reveal (scroll animation), icons, Eyebrow, SectionHeader
├─ content/
│  ├─ pricing.ts           Plan prices and task lists — edit prices here
│  ├─ locations.ts         Service areas: copy, neighbourhoods, photos, FAQs per area
│  ├─ blog.ts              Blog posts (newest first) — add a post here to publish it
│  └─ contact.ts           Contact-form topics (`/contact-us?topic=…` preselects one)
├─ lib/site.ts             Phone, email, social profiles, booking links, embed IDs, GA ID
└─ assets/images/          Photos & icons (imported, optimised by next/image)
public/images/backgrounds/ CSS-only section backgrounds
legacy/                    Original Webflow export + asset library (reference only, not built)
```

### Styling conventions

- Breakpoints mirror Webflow's desktop-first ones. Use `max-lg:` (≤991px, tablet),
  `max-md:` (≤767px), `max-sm:` (≤479px). `max-xl:` (≤1199px) is only for the navbar, which
  switches to the menu button there.
- Brand colours and fonts are tokens in `globals.css` (`bg-brand`, `text-muted`, `font-heading`,
  `font-text`, …).
- Each service page has its own accent colour: wrap the page in `theme-home` (teal),
  `theme-car` (blue) or `theme-custodian` (navy). The wrapper re-points `brand` for that page
  only, so every `bg-brand` / `text-brand` inside it follows. The navbar and footer keep the S&A
  red. Red SVG icon files are drawn with `TintedIcon` so they follow the accent too.
- Use `text-[16px]` rather than `text-base`: Tailwind's named sizes also change line-height,
  while the design inherits Webflow's 20px body line-height.

## Third-party services

These were never part of Webflow and carry over unchanged:

- **Google Reviews** widgets: Elfsight (IDs in `src/lib/site.ts`)
- **Booking**: every "Book" button opens the contact form in booking mode
  (`/contact-us?book=home-cleaning`). Once the details are emailed, the visitor continues to
  `brightnestcleaning.ca/booknow`; see `bookingSites` in `src/lib/site.ts`. The old
  Launch27 page `/book-home-cleaning` redirects to the form.
- **Google Analytics 4**: `G-6KNKRNW2CL`, only loaded on the production deployment

## Contact form

The contact form (also used for bookings, see above) emails `info@sacleaninggroup.ca` through
[FormSubmit](https://formsubmit.co), straight from the visitor's browser
(`src/lib/contact-submit.ts`). It needs no account, API key or environment variables.

- **One-time activation:** the first message sent from a website makes FormSubmit email the inbox an
  "Activate Form" link. Messages are only delivered once someone clicks it, so send a test message
  from the live site after launch and click the link.
- In development (`next dev`) messages are logged to the browser console instead of emailed.
- If a booking's email can't be sent, the visitor is still taken on to the booking site.

## Deployment (Vercel)

1. Import the GitHub repo in Vercel. It detects Next.js, so no build settings are needed.
2. Add `NEXT_PUBLIC_SITE_URL` (see `.env.example`).
3. Add the domains `sacleaninggroup.ca` (primary) and `www.sacleaninggroup.ca` (redirects to the
   primary), then update DNS at the registrar as Vercel instructs. (The domains still point at Webflow, which no longer serves the
   site.)
4. Optionally add `akumalcleaning.com` and redirect it to `sacleaninggroup.ca` (old brand).

Old `*.html` URLs from the temporary Netlify copy redirect to the clean paths (`next.config.ts`).
