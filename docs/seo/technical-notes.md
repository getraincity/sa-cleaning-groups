# Technical SEO, schema and AI-search notes

Written 2026-11-04 (phase 2C). Complements `docs/SEO.md`. Site: https://sacleaninggroup.ca.

## What changed

| Area                          | Change                                                                                                                                                                                                                                                                                 |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/app/robots.ts`           | Named groups allowing Googlebot, Bingbot, OAI-SearchBot, GPTBot, ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot, Claude-SearchBot, Claude-User, Google-Extended, Applebot and Applebot-Extended, plus `*`. Nothing disallowed (there is no `/api`). `Host` and `Sitemap` set. |
| `src/lib/schema.ts`           | Entity graph reworked (below). New helpers `webPageJsonLd`, `itemListJsonLd`; `serviceJsonLd` accepts `areaServed` (string or list) and an optional `serviceType`.                                                                                                                     |
| `/llms.txt`                   | Adds entity facts (former name, founders), a Services list of all eight service pages and a pointer to `/llms-full.txt`.                                                                                                                                                               |
| `/llms-full.txt`              | New, `force-static`. Services, prices (from `pricing.ts`), booking, areas (from `locations.ts`), FAQs, guides, what is not offered (car detailing), facts not to state, contact and how to cite.                                                                                       |
| `next.config.ts`              | `www.sacleaninggroup.ca` to the apex (308, host-matched, so previews are untouched); `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options: SAMEORIGIN`; 1-day cache with 7-day stale-while-revalidate on unhashed `/public` images; `poweredByHeader` off.                    |
| `src/app/layout.tsx`          | `viewport` with `theme-color` (brand red `#de0a0a`); explicit `robots` meta (index, follow, large image previews).                                                                                                                                                                     |
| `src/app/manifest.ts`         | New web manifest at `/manifest.webmanifest`.                                                                                                                                                                                                                                           |
| IndexNow                      | Key file `public/807a137af7d96b66208f01b8761ca070.txt` and `scripts/indexnow.mjs`.                                                                                                                                                                                                     |
| `scripts/validate-jsonld.mjs` | Parses every JSON-LD block in the built pages and checks @id conflicts and banned types.                                                                                                                                                                                               |

## Entity graph (root layout)

One `@graph` on every page; every other block points at it by `@id`.

- `#business`: `["ProfessionalService", "LocalBusiness"]`. ProfessionalService is the closest schema.org
  subtype for cleaning and janitorial work. `HomeAndConstructionBusiness` is for trades (plumber,
  painter, roofer) and was not used. The `@id` is unchanged, so every existing reference still works.
  - `contactPoint` (customer service, phone, email, English, Canada), `founder` (two Person nodes),
    `logo` as an `ImageObject`, `areaServed`, `hasOfferCatalog`, `sameAs` (Instagram, Facebook).
  - `areaServed`: "Greater Vancouver" (AdministrativeArea in British Columbia), North and West
    Vancouver as `City`, Downtown, East and South Vancouver as `Place` contained in the City of Vancouver.
  - `hasOfferCatalog` lists `catalogServices` in `schema.ts`: home cleaning, deep cleaning,
    move-in/move-out, Airbnb, post-construction, custodian, office, strata. Each entry points at
    `<path>#service`.
- `#founder-alex`, `#founder-shaida`: first names only. **Ask the client for full names and a
  short approved bio, then extend them.**
- `#website`.

Deliberately left out:

- `AggregateRating` / `Review`: no approved reviews. (`validate-jsonld.mjs` fails the build check if
  they appear.)
- `openingHours`, `streetAddress`: none published. The city-level `PostalAddress` was already there
  (service-area business).
- `foundingDate`: "9+ years" does not give a date. Add it when the client confirms one.
- `priceRange: "$$"` was already there and is a rough guess; remove it if the client prefers.

### Helpers for the new service pages

```ts
serviceJsonLd({ name, path, description, areaServed?, serviceType?, offers? }); // @id = <path>#service
webPageJsonLd({ name, path, description?, type?, speakable? }); // @id = <path>#webpage
itemListJsonLd(name, [{ name, path }]);
breadcrumbJsonLd([{ name, path }]);
```

**Each new service page must call `serviceJsonLd` with exactly the path in `catalogServices`**
(`/deep-cleaning`, `/move-out-cleaning`, `/airbnb-cleaning`, `/post-construction-cleaning`,
`/office-cleaning`, `/strata-cleaning`), or the offer catalog points at a block that does not exist.
`node scripts/validate-jsonld.mjs` warns about every unresolved reference. Until those pages are
merged the six warnings are expected. `FaqSection` still emits `FAQPage`. Use `speakable` only if
you want voice assistants to read a page (for example `["h1"]`); it is optional and Google only
supports it for some content.

When `src/content/services.ts` exists, replace the `catalogServices` array in `schema.ts` (and use it
in `src/app/llms-full.txt/route.ts` for the Services section, which currently lists the paths by hand).

## Verification run

```bash
npx tsc --noEmit && npx eslint src --quiet && npx prettier --check <touched files>
npx next build
node scripts/validate-jsonld.mjs      # 20 pages, 55 blocks, no errors
```

Checked against `next start`: `/robots.txt`, `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`,
`/manifest.webmanifest`, the IndexNow key file, `www` redirect (keeps path and query), the
`.html` redirect, and that `/google807aab8c24a997b5.html` still returns 200.

## Metadata review

- `metadataBase`, per-page canonical (`pageMetadata`), title template, Open Graph and Twitter
  cards: fine.
- hreflang: not needed. The site is one language (en-CA) on one domain, so `alternates.languages`
  stays absent.
- Robots meta is now explicit in the layout. Pages that call `pageMetadata` do not override it.
- Icons: `src/app/icon.png` (32px) and `apple-icon.png` (256px). The manifest lists both. A 192px
  and a 512px square icon would be better for installable-app checks; the site is not a PWA, so low priority.
- **`/car-detailing` is indexable** (no `noindex`) although it is out of the sitemap and the company
  does not offer the service. Consider `robots: { index: false }` in that page's metadata (not done
  here: pages are outside this task).

## Headers, deliberately not added

- **CSP / Permissions-Policy:** the site loads Google Analytics, Google Maps, Elfsight and the Hello
  Gubby chat widget (which may use the microphone). A wrong policy would break them silently.
- **HSTS:** Vercel sends it on production domains already.

## Setup checklist (needs the client)

### Google Search Console

1. Verification is already in place (HTML file and meta tag). Confirm the property shows "Verified".
2. Add the property as a **Domain** property (DNS TXT) so `www` and apex are both covered.
3. Sitemaps, submit `https://sacleaninggroup.ca/sitemap.xml`.
4. URL Inspection, then Request indexing for `/`, `/home-cleaning`, `/custodian-services`, the six new
   service pages and the area pages.
5. Settings, Crawl stats, and Pages, "Not indexed", weekly for the first month. Look for old Webflow URLs.
6. Enhancements: Breadcrumbs, FAQ. (There is no Review snippet data on purpose.)
7. Test two pages in https://search.google.com/test/rich-results and the live HTML in
   https://validator.schema.org.

### Bing Webmaster Tools (also feeds ChatGPT search and Copilot)

1. Sign in, Import from Google Search Console.
2. Submit the sitemap. IndexNow is already supported by the key file below.
3. Confirm `robots.txt` shows as valid and Bingbot is allowed.

### IndexNow

- Key: `public/807a137af7d96b66208f01b8761ca070.txt` (served at the site root).
- After a production deploy that adds or changes pages:
  `node scripts/indexnow.mjs` (dry run, lists URLs), then `node scripts/indexnow.mjs --submit`.
  A single page: `node scripts/indexnow.mjs --submit /deep-cleaning`.
- Never run `--submit` against previews. The script defaults to the live site.
- IndexNow reaches Bing, Yandex, Naver and others, not Google.

### Google Business Profile (biggest local-search lever)

1. Claim or verify as a service-area business (hide the address) and set the areas served to match `areaServed`.
2. Primary category House cleaning service; add Commercial cleaning service and Janitorial service.
3. Name: S&A Cleaning Group (rename from Akumal Executive Cleaning if this is the old listing).
4. Website `https://sacleaninggroup.ca`, phone and email exactly as in `src/lib/site.ts` (NAP consistency).
5. Add each service with a description and the matching page link; add real job photos; add hours only when the client confirms them.
6. Send the GBP link, so it can be added to `sameAs` in `src/lib/site.ts`/`schema.ts`, and ask happy
   clients for reviews. Add `AggregateRating` only after the client approves showing real reviews on the site.

### Other

- Bing Places and Apple Business Connect (same name, phone, website). Update old Akumal listings.
- Confirm in Vercel, Domains that `www` is attached (the redirect rule in `next.config.ts` only works
  if the domain points at the project) and that production sets `NEXT_PUBLIC_SITE_URL` to the apex or leaves it unset.
- AI crawlers: `robots.txt` allows them. If the client later wants to opt out of AI training, remove
  `Google-Extended`, `Applebot-Extended` and `GPTBot` from the list in `src/app/robots.ts`; search
  crawlers (`OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot`) can stay.
