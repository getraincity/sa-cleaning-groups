# SA Cleaning Group — Rebuild Guide (Webflow → Next.js)

Hand this file + the `site/` folder to Claude Code. It contains everything needed to rebuild the site 1:1 in Next.js (App Router) + Tailwind, with no Webflow dependency.

Source: Webflow site `SA Cleaning Group` (site ID `66db22c5d9cc6c931e7f70bb`), last published 14 Jan 2025. Backed up 23 Sep 2026.

---

## 1. Site facts

| Item | Value |
|---|---|
| Live domains | sacleaninggroup.ca, www.sacleaninggroup.ca, akumalcleaning.com, www.akumalcleaning.com (old brand — redirect to sacleaninggroup.ca) |
| Webflow staging | sa-cleaning-group.webflow.io |
| Pages | 6 static pages (no CMS collections, no blog, no custom fonts uploaded) |
| Email / phone | info@sacleaninggroup.ca · (778) 558-8715 |
| Analytics | Google Analytics 4 — `G-6KNKRNW2CL` (site-wide `<head>`) |
| Search Console | `google-site-verification` = `SBpvTW9tCpxRUvQ9ATXCrtw3k1X38LAzxZjl5ocU6TE` |
| Timezone | America/Vancouver |

## 2. Pages & SEO

| Route | File in backup | `<title>` (current) | Notes |
|---|---|---|---|
| `/` | `site/index.html` | SA Cleaning Group | Top banner “Looking for Akumal Cleaning? We've relocated here!” |
| `/about-us` | `site/about-us.html` | About Us | |
| `/home-cleaning` | `site/home-cleaning.html` | **Service** (weak — fix to “Home Cleaning Services in Vancouver”) | Pricing anchor `#book` |
| `/car-detailing` | `site/car-detailing.html` | Car Detailing Services | Pricing anchor `#book` |
| `/book-home-cleaning` | `site/book-home-cleaning.html` | Book Home Cleaning | Launch27 booking iframe |
| `/contact-us` | `site/contact-us.html` | Contact Us | Contact form |

No meta descriptions or OG images are set on any page — add them in the rebuild (easy SEO win to mention to the client).

## 3. Design tokens

### Colours
| Token | Hex | Used for |
|---|---|---|
| `brand-red` | `#DE0A0A` | Primary buttons, hover, accents |
| `brand-red-alt` | `#DB1111` | Pricing band background, price boxes, pricing button hover |
| `red-tint` | `#DE0A0A40` (25%) | Icon badges (`.item-before`) |
| `red-line` | `#F300004D` (30%) | Dividers, heading underline bar |
| `dark` | `#383838` | “Book car detailing” header button |
| `ink` | `#1F1F1F` / `#1A1B1F` / `#333333` | Headings, nav links, body |
| `muted` | `#666C89` | Long body copy (`.paragraph-5`) |
| `gray` | `#4A4A4A`, `#666666`, `#999999` | Secondary text, input borders |
| `topbar` | `#333333` | 40px announcement bar |
| `cta-bg` | `#242424` + image `Background.png` | “Book Your Cleaning Online” CTA |
| `card-gray` | `#E4E4E4` | Feature cards |
| `silver` / `gold` / `diamond` | `#979797` / `#E4B016` / `#34CED6` | Home-cleaning package names |
| Overlays | `#000000BA` (hero), `#00000066` (service cards), `#FFFFFF70` (feature cards) | |

### Typography (Google Fonts)
- **Be Vietnam Pro** — all headings (H1 80px/80px, letter-spacing 3px; section H2 40px; pricing H2 48px/52px; card H3 25px; H4 18px)
- **Montserrat** — nav, body, buttons (body 16px; hero sub 20px/28px; nav 16px weight 500)
- Open Sans is loaded but effectively unused.
- Use `next/font/google` for Be_Vietnam_Pro + Montserrat.

### Radii, shadows, spacing
- Buttons: radius **12px**, padding 16px 24px (large: 20px 50px), Montserrat 16px/500
- Cards: service cards 24px radius; feature cards 20px + `0 2px 5px #0003`; pricing cards 15px; form card 20px + `0 4px 10px #0003`
- Container max-width: **1440px** (sections 1178–1200px, pricing 960px), side padding 20px
- Section vertical rhythm: 100–140px desktop, 60px mobile

### Breakpoints (Webflow defaults)
- Desktop > 991px · Tablet ≤ 991px · Mobile landscape ≤ 767px · Mobile ≤ 479px
- Nav collapses to hamburger at ≤ 991px.

## 4. Shared components

1. **TopBar** (home only) — dark 40px strip, centered white text.
2. **Navbar** — logo (`S&A Cleaning Group.png`, 90px tall) · links Home / About / Services▾ (Home Cleaning, Car Detailing) / Contact · two buttons: “Book home cleaning” (red → `/book-home-cleaning`) + “Book car detailing” (dark → external `https://saautodetailing.ca/book-now`, new tab). Height 130px, transparent bg.
3. **Hero** — full-width bg image + black 73% overlay, centered: small tagline (20px), H1 (80px, 48px tablet, 36px mobile), sub-paragraph. Variants per page (see §5).
4. **ReviewsSection** — “Building Trust And Satisfaction / 5-star reviews from customers just like you” + **Elfsight Google Reviews widget** (`elfsight-app-e6307328-c81d-462c-84fd-94a54414d220`; car page uses `elfsight-app-df9a2181-f8dd-4b8a-b63b-c412995b04a9`). Needs the client's Elfsight account — keep embed or replace with static reviews.
5. **ServiceCard** (home) — 3-col grid, blurred bg image (blur 9px) + 40% dark overlay, white H3, text, red “Learn More” button. Cards fade in on scroll.
6. **AboutSplit** — image left, right: red icon badge + “About us”, H2 “The S&A Way”, copy, outlined red “Learn More” button.
7. **ChecklistBlock** — illustration left (`Group 162769.png`, 450px tall), right: H2 + bordered box (1px `#FFC3CF80`, radius 8) with 5 check items (red 18px badge + check icon).
8. **FeatureCards** — 3 cards (gray bg, 28%-opacity photo, white 44% overlay, round white icon badge, H4, text): Eco-friendly products (leaf.svg) / Hand-Picked Professionals (group.svg) / Pet-friendly (pet.svg).
9. **Gallery** — 6-column CSS grid, 300px tall rounded images with span patterns (see `#w-node-*` rules at bottom of CSS). 4 cols on ≤767px, 1 col on ≤479px.
10. **PricingSection** — red band (`#DB1111` + `Background (1).png`) with “Our Pricing” + H2, then 3 white pricing cards pulled up 160px over the band; each: coloured title, red price box, bullet list, outlined full-width “Book Now” (hover red).
11. **CTA** — dark bg image, “Contact us” / H1 “Book Your Cleaning Online” / text / red “Book Home Cleaning” + white “Book Car Detailing”.
12. **Footer** — logo (140px) + tagline + email + phone icons · 3 columns: Services / About us / Book now · divider · Terms / Privacy links (currently `#` — placeholders).

**Scroll animations:** elements with `data-w-id` + `style="opacity:0"` fade in via Webflow Interactions (webflow.js). In Next.js use Framer Motion `whileInView` (fade + slight rise) or plain IntersectionObserver.

## 5. Page content

All exact copy is in the HTML files — Claude Code should pull text from there verbatim. Summary:

- **Home** — TopBar → Nav → Hero (bg `WhatsApp Image 2024-07-29 at 21.35.12.jpeg`, “Keeping Your Space Clean / Year-Round”) → Reviews → “Our Cleaning Services” → 3 ServiceCards (Home Cleaning, Car Detailing, Snow Removal “Coming Soon!”) → AboutSplit → CTA → Footer.
- **About Us** — Hero (bg `IMG-20240821-WA0034.jpg`, “About US”) → AboutSplit → “Cleaning Products” (text + image) → “Cleaning Equipment” (image + text) → CTA → Footer.
- **Home Cleaning** — Hero (bg `IMG-20240821-WA0100.jpg`, “Professional Home Cleaning Services in Vancouver”) → ChecklistBlock → “Professional Care and services” + FeatureCards → Gallery (9 photos) → Pricing: **Silver $150/mo, Gold $235/mo, Diamond $280/mo** (full task lists by room in HTML) → Reviews → CTA → Footer.
- **Car Detailing** — Hero (bg `Untitled design (5).jpg`, “Car Detailing Services in Vancouver”) → ChecklistBlock (“Keep Your Car Clean Without The Hastle” — typo, fix to *Hassle*) → FeatureCards → Gallery (5 before/after webp) → Pricing: **Interior $130–250, Exterior $95–120, Complete Detail $250–425** (by vehicle size) → Reviews → CTA → Footer. All “Book” buttons go to `https://saautodetailing.ca/book-now`.
- **Book Home Cleaning** — Nav → Launch27 booking embed → Footer:
  ```html
  <script src="https://akumalexecutivecleaning.launch27.com/jsbundle"></script>
  <iframe id="booking-widget-iframe" src="https://akumalexecutivecleaning.launch27.com/?w_cleaning"
          style="border:none;width:100%;min-height:2739px;overflow:hidden" scrolling="no"></iframe>
  ```
- **Contact Us** — Hero (“Contact Us”) → 2 cols: form card (“Drop us a message!” — Name, Email, Subject, Message, Submit) + “Call or Email” block with logo → Footer.

## 6. Things that were Webflow-only (must be replaced)

| Feature | Replacement in Next.js |
|---|---|
| Contact form (Webflow Forms) | Server action / API route → Resend, Formspree, or email via SMTP. **Export past submissions from Webflow → Forms before the plan ends.** |
| Interactions (fade-ins, nav dropdown, mobile menu) | Framer Motion + a small React nav component |
| Image CDN & responsive `srcset` | `next/image` with files from `/public/images` |
| Hosting / SSL / domains | Vercel (free tier is fine) — repoint DNS for both domains, 301 akumalcleaning.com → sacleaninggroup.ca |
| Site-wide head code | GA4 via `@next/third-parties/google` `<GoogleAnalytics gaId="G-6KNKRNW2CL" />` + verification meta in `layout.tsx` metadata |

Third-party services to keep (they're not tied to Webflow): Elfsight reviews widgets, Launch27 booking (akumalexecutivecleaning.launch27.com), saautodetailing.ca booking link.

## 7. Suggested Claude Code prompt

> Rebuild the static site in `./site` as a Next.js 15 App Router project with Tailwind CSS and TypeScript. Follow `REBUILD-GUIDE.md` for tokens, components and routes. Copy every image from `./site/assets` into `/public/images` and use `next/image`. Reproduce each page pixel-close to the HTML/CSS (open the HTML files to compare), keep all copy verbatim (fix the "Hastle" typo), build reusable components for Navbar, Hero, ServiceCard, FeatureCards, Gallery, PricingSection, Reviews (Elfsight embed via next/script), CTA and Footer. Add a contact form server action, GA4, per-page metadata with descriptions, sitemap.xml and robots.txt. Make it fully responsive at 991/767/479px.
