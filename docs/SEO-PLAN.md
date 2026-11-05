# SEO + AEO + GEO master plan (2026-11-04)

Builds on `docs/SEO.md` (audit and technical fixes, 2026-10-30). That file stays the record of what
the foundations are; this one is the growth plan. Site: https://sacleaninggroup.ca.

## Where we are

Done: titles/descriptions, sitewide LocalBusiness + WebSite schema, Service/Breadcrumb/BlogPosting/FAQ
schema, share image, sitemap lastmod, `/llms.txt`, 404 page, Search Console verification.

Thin spots (this is what ranks or doesn't):

1. **Only 2 service pages** (`/home-cleaning`, `/custodian-services`) trying to rank for ~10 distinct
   intents (deep clean, move-out, Airbnb, post-construction, office, strata…). One page cannot win all.
2. **4 blog posts**, all from Aug–Sep 2026. Topical authority and long-tail answers are missing.
3. **5 area pages** cover "Greater Vancouver" by quadrant. Suburbs people actually search (Burnaby,
   Richmond, Surrey…) need client confirmation before we claim them (see Rules).
4. **Entity signals** for AI engines are only the website: no GBP link, reviews, citations or
   third-party mentions in `sameAs`. These need the client (§ Client tasks).
5. **Answer coverage**: few question-form headings with 40–60 word direct answers (what AI Overviews,
   Perplexity and ChatGPT quote).

## Rules every specialist follows

- `docs/HANDOFF.md` §5 and §6 apply: **never invent facts** (no stats, reviews, ratings, hours, team
  sizes, awards, street addresses, "years in X area"). Approved claims only. No car detailing.
- Do **not** claim service areas the client hasn't confirmed. Only the five built areas are confirmed.
  Burnaby/Richmond/Surrey/etc. are drafted at most as unlinked proposals in docs, never published.
- Prices only from `src/content/pricing.ts`.
- Copy written by us is flagged for client review in the PR.
- New pages: `pageMetadata()`, breadcrumb `JsonLd`, one H1, FAQ via `FaqSection`, unique photos
  (run `node scripts/qa/inventory.mjs`; no photo on more than one page).
- Use the next 16 docs in `node_modules/next/dist/docs/` before using unfamiliar APIs.

## Search strategy

**Primary entities and intents (Greater Vancouver):**

| Cluster          | Money page                 | Intent                                       |
| ---------------- | -------------------------- | -------------------------------------------- |
| Residential core | `/home-cleaning`           | house cleaning / maid service Vancouver      |
| Deep clean       | `/deep-cleaning` (new)     | deep cleaning service Vancouver              |
| Move-out         | `/move-out-cleaning` (new) | move out / end of tenancy cleaning Vancouver |
| Rental           | `/airbnb-cleaning` (new)   | Airbnb / vacation rental turnover cleaning   |
| Build            | `/post-construction-cleaning` (new) | post construction cleaning Vancouver |
| Commercial core  | `/custodian-services`      | commercial cleaning / janitorial Vancouver   |
| Office           | `/office-cleaning` (new)   | office cleaning service Vancouver            |
| Strata           | `/strata-cleaning` (new)   | strata / condo common-area cleaning          |
| Local            | `/locations/*`             | cleaners in <area>, "near me"                |
| Brand            | `/`, `/about-us`           | S&A Cleaning Group, Akumal Executive Cleaning |

**Content moat:** pricing/cost explainers ("how much does a cleaner cost in Vancouver"), BC-specific
guides (rental deposits, strata rules), checklists, seasonal posts. Each post links to one money page
and each money page links to its supporting posts (hub and spoke).

**AEO (answer engines):** question headings, 40–60 word self-contained answers directly under them,
FAQ schema, HowTo/ItemList only where the page truly is one, tables for prices.

**GEO (generative engines):** a consistent entity (name, former name, phone, areas, services) repeated
identically across site, schema, `llms.txt`, and (client task) GBP and citations; quotable facts with
a stated source (our own price list); crawlable HTML (no content behind JS); allow AI crawlers in
`robots.txt` (GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Google-Extended, ClaudeBot, Bingbot);
`llms.txt` plus a fuller `llms-full.txt`; IndexNow for Bing, which feeds ChatGPT and Copilot.

## Phases and specialists

| Phase | Specialist                         | Owns (files)                                                                 | Output |
| ----- | ---------------------------------- | ---------------------------------------------------------------------------- | ------ |
| 1     | **Keyword researcher**             | `docs/seo/keywords.md`                                                       | Keyword map, clusters, page assignment, post backlog, gaps |
| 2A    | **Service-page content writer**    | new route folders for the six new service pages, `src/content/services.ts`  | Six new pages |
| 2B    | **Blog / editorial writer**        | `src/content/blog.ts`, blog images                                           | 8 new posts |
| 2C    | **Technical + schema engineer**    | `src/lib/schema.ts`, `src/lib/metadata.ts`, `src/app/layout.tsx`, `robots.ts`, `llms.txt/`, `next.config.ts`, `public/` | Schema, AI crawler rules, IndexNow, llms-full |
| 2D    | **AEO / on-page optimiser**        | existing pages: home, home-cleaning, custodian-services, about-us, locations (+ `locations.ts`), contact | Answer blocks, FAQs, internal links, E-E-A-T |
| 3     | **Integrator (me)**                | `sitemap.ts`, merge, QA, `docs/SEO.md` update                                | Build, QA sweep, PR, index list |

2A–2D run in isolated worktrees on disjoint files and are merged by the integrator.

## Client tasks (biggest local-pack levers; send via WhatsApp)

1. Google Business Profile: claim/verify as service-area business, categories House cleaning service +
   Commercial cleaning service + Janitorial service, rename from Akumal, add services, photos, hours.
   Send the GBP link; we add it to `sameAs`.
2. Ask every happy client for a Google review and reply to all.
3. Citations with identical name/phone/site: Yelp, Yellow Pages, HomeStars, BBB, Bing Places, Apple
   Business Connect, Nextdoor, Houzz.
4. Approve the extra suburbs actually served so area pages can be built (Burnaby, Richmond, Surrey…).
5. Privacy policy and terms text (footer links go nowhere).
6. Approve 4–6 real reviews to display (unlocks `AggregateRating` honestly; never before).

## Success measures (check in Search Console / Bing Webmaster)

Indexed pages = sitemap count; impressions for the cluster queries above; map-pack visibility once GBP
is live; brand citation in ChatGPT/Perplexity/AI Overviews for "cleaning company Vancouver" (manual
spot check monthly).
