# Service pages (phase 2A) notes

## New routes (6)

`/deep-cleaning`, `/move-out-cleaning`, `/airbnb-cleaning`, `/post-construction-cleaning`
(home theme) and `/office-cleaning`, `/strata-cleaning` (custodian theme).

Data: `src/content/services.ts`. Template: `src/components/sections/service-page.tsx`.
Each page has breadcrumb + Service JSON-LD (`serviceJsonLd`, no `offers`), FAQ JSON-LD (7-8 FAQs
via `FaqSection`), a 40-60 word direct answer and `pageMetadata()`. Meta descriptions are 141-154
characters.

## For the integrator

- Add the six paths to `sitemap.ts`, `llms.txt` and the Service `hasOfferCatalog` in `schema.ts`.
- Photo Credits page: `src/app/photo-credits/page.tsx` maps key prefixes to page names. Add
  `deep` (Deep Cleaning), `moveOut`, `airbnb`, `postConstruction`, `office`, `strata`; until then
  the "page" column is blank for these 18 photos. `PHOTO-CREDITS.md` only points to
  `stock-photos.ts` for remote photos, so it needed no change.
- Link the new pages from the nav, footer, home-cleaning, custodian pages and blog posts. Blog
  slugs linked here are the four existing ones only. Airbnb has no related post yet; strata links
  the office checklist (it mentions strata common areas).
- Run `node scripts/qa/inventory.mjs` and `sweep.mjs` after the sitemap entries land (both read
  the sitemap). Run against these pages before that: sweep reported no problems and no photo
  repeats on any other page.
- Photos are Pexels frames from shoots used elsewhere (Tima Miroshnichenko, Liliana Drew; RDNE
  for `moveOutSweeping`, credited by ID neighbourhood, so verify on its Pexels page). Office and
  strata use red-overall and navy crew frames similar in style to Custodian and Home Cleaning;
  none is the same photo. Swap if the client minds.

## Copy flagged for client review (all written by us)

- Everything on the six pages. Scope checklists come from the existing blog posts, the
  Silver/Gold/Diamond lists and the Custodian page.
- Deep cleaning: inside the oven, fridge and cabinets (matches Home Cleaning and Diamond plan).
- Move-out: no deposit-refund promise; only says BC landlords and tenants inspect together (an
  existing blog sentence). No legal claims and no gov.bc.ca links (not verified).
- Airbnb: beds "made with the linen you provide"; laundry, linen supply and restocking are NOT
  claimed. Does the hourly rate and 3-hour minimum fit turnovers? Is there a recurring rate?
  Same-day turnovers are not promised.
- Post-construction: the hourly rate is the only price (no verified local figure); scope from the
  existing guide post. Commercial renovation cleans are claimed (already in that post).
- Office: sectors limited to offices, co-working, studios and showrooms, property managers (no
  medical or dental). No after-hours claim.
- Strata: scope from the Custodian page (lobbies, hallways, elevators, amenity rooms, gyms);
  stairwells added. No claim of existing strata clients, WCB letters or the Strata Property Act.
  "Quote for your council or manager" is our wording.
- Only "quote" is used; "free" is deliberately absent on the new pages (the existing Custodian
  page still says "free quote": the client should confirm).
- Every page has an FAQ "Vancouver, BC or Washington?" stating S&A does not serve Vancouver, WA.
- Approved claims used: 9+ years, formerly Akumal, licensed and insured, background-checked,
  eco-friendly and pet-friendly products, hourly from $130+ with a 3-hour minimum.
