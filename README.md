# SA Cleaning Group — website

Marketing site for [sacleaninggroup.ca](https://www.sacleaninggroup.ca): home cleaning and car
detailing in Vancouver.

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

## Project structure

```
src/
├─ app/                    Routes — URLs match the old Webflow site
│  ├─ page.tsx             /
│  ├─ about-us/            /about-us
│  ├─ home-cleaning/       /home-cleaning
│  ├─ car-detailing/       /car-detailing
│  ├─ custodian-services/  /custodian-services
│  ├─ locations/           /locations and /locations/[slug] (one page per area)
│  ├─ blog/                /blog and /blog/[slug]
│  ├─ book-home-cleaning/  /book-home-cleaning  (Launch27 booking embed)
│  ├─ contact-us/          /contact-us          (+ actions.ts: contact form server action)
│  ├─ globals.css          Design tokens (@theme) + Webflow base typography
│  ├─ sitemap.ts, robots.ts, icon.png, apple-icon.png
├─ components/
│  ├─ layout/              Navbar, AnnouncementBar (home only), Footer
│  ├─ sections/            Page sections shared across pages (hero, pricing, gallery…)
│  ├─ locations/           Schematic map of the service areas
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
- Use `text-[16px]` rather than `text-base`: Tailwind's named sizes also change line-height,
  while the design inherits Webflow's 20px body line-height.

## Third-party services

These were never part of Webflow and carry over unchanged:

- **Google Reviews** widgets: Elfsight (IDs in `src/lib/site.ts`)
- **Home cleaning booking**: Launch27 (`akumalexecutivecleaning.launch27.com`)
- **Car detailing booking**: external link to `saautodetailing.ca/book-now`
- **Google Analytics 4**: `G-6KNKRNW2CL`, only loaded on the production deployment

## Contact form

Submissions are handled by a server action (`src/app/contact-us/actions.ts`) and emailed through
[Resend](https://resend.com). Set these in Vercel → Settings → Environment Variables:

| Variable            | Purpose                                                          |
| ------------------- | ---------------------------------------------------------------- |
| `RESEND_API_KEY`    | Resend API key                                                   |
| `CONTACT_FORM_TO`   | Inbox that receives messages (default `info@sacleaninggroup.ca`) |
| `CONTACT_FORM_FROM` | Sender on a Resend-verified domain                               |

Without `RESEND_API_KEY`, submissions are logged to the terminal in development and the form shows
its error message in production.

## Deployment (Vercel)

1. Import the GitHub repo in Vercel. It detects Next.js, so no build settings are needed.
2. Add the environment variables above.
3. Add the domains `sacleaninggroup.ca` and `www.sacleaninggroup.ca`, then update DNS at the
   registrar as Vercel instructs. (The domains still point at Webflow, which no longer serves the
   site.)
4. Optionally add `akumalcleaning.com` and redirect it to `www.sacleaninggroup.ca` (old brand).

Old `*.html` URLs from the temporary Netlify copy redirect to the clean paths (`next.config.ts`).
