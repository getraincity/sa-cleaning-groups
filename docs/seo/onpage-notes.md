# On-page / AEO / E-E-A-T notes (phase 2D, 2026-11-04)

Scope: Home, Home Cleaning, Custodian Services, About, Contact, Locations hub and the five area pages.
All new copy below is written by us and **needs client review** (HANDOFF §5).

## What changed

- **Titles and descriptions** from `docs/seo/keywords.md` (base titles <= 60 chars; descriptions 138-156).
  Home keeps the recommended wording and now uses the title template (rendered 69 chars with the brand suffix;
  trim if Search Console shows truncation). "Free" was dropped from every new meta description (see below).
  Area titles are `House & Office Cleaning in <Area>, BC`.
- **Answer blocks** (question heading + 40-60 word direct answer, word counts checked by script) in
  `src/content/answers.ts`, rendered by the new `AnswerBlocks` section: Home (4), Home Cleaning (4), Custodian (4),
  About (4), Locations hub (2), each area (2, written per area). Answers use only approved claims and `pricing.ts`
  (the cost answer is built from the pricing data).
- **FAQs**: Home Cleaning 12, Custodian 11, About 6 (new section), Contact 8, areas 6-7 each, all distinct per area.
  `FaqSection` items accept optional `links` (shown under the answer, not in FAQ JSON-LD).
- **Internal links**: Home page pill row + answer links; Home Cleaning cards and FAQ link to the four new residential
  pages; Custodian space cards and FAQs link to /office-cleaning and /strata-cleaning; every area page has "More
  Cleaning Services in <Area>" (all six new pages) and "Helpful Guides" (existing posts), plus links inside answers/FAQs.
- **De-cannibalised /home-cleaning**: meta description, Service JSON-LD description and the Deep / Move-in-out /
  Airbnb / Post-construction cards are now short summaries linking out.
- **About E-E-A-T**: H1 "About S&A Cleaning Group", former name and BC in the hero, new "At a glance" facts panel
  (name, former name, co-founders, 9+ years, services, area, credentials, phone/email as links), "Quick answers",
  and an FAQ. No bios, addresses, team sizes or hours were added.
- **Contact**: H1 "Contact S&A Cleaning Group in Vancouver, BC", NAP line (name, former name, service area), phone and
  email were already links, service area tile reads "Greater Vancouver, BC", 4 more FAQs (quote, message content,
  Akumal = former name). The meta description said "SA Cleaning Group"; now "S&A".

## Links that 404 until the new service pages merge

`/deep-cleaning`, `/move-out-cleaning`, `/airbnb-cleaning`, `/post-construction-cleaning`, `/office-cleaning`,
`/strata-cleaning` (Home, Home Cleaning, Custodian, About FAQ none, all five area pages and the answers file).
No links to planned blog posts were added because their slugs are unknown; after the blog merge add:
cost guide -> Home Cleaning FAQ/answer; deposit post -> East Van; strata contract post -> Custodian and Downtown;
condo hiring post -> Downtown; mould/rainy-season post -> North Van; how-to-choose post -> About answer.
Only existing posts are linked now.

## Needs the client / integrator

1. **Privacy and Terms**: footer links (`src/components/layout/footer.tsx`, not touched) are `href="#"`. Needs the
   client's text and pages; none invented. Add both to the sitemap once they exist.
2. **"Free quote"** is still on the page in existing copy (Custodian hero CTA, "Get a Free Custodial Cleaning Quote",
   "How is pricing worked out?", area FAQs). keywords.md says to verify it. Confirm with the client or remove.
3. **Schema.ts not edited** (not mine): `homeCleaningOffers()` still lists deep, move-in/out, Airbnb and
   post-construction offers on /home-cleaning; consider trimming once the new pages carry them.
4. **Home H1** ("Keeping Your Space Clean Year-Round") is client-approved branding and carries no keyword;
   BC/Greater Vancouver is in the tagline and intro instead. Consider a keyword H1 if the client agrees.
5. About's "Our story" still says the company expanded into auto detailing (history only, links to /car-detailing).
   Confirm with the client that this wording is fine.
6. Hero copy changed on Home Cleaning ("Looking for a trusted house cleaning or maid service in Vancouver?") and
   About (former name + BC); flagged as copy to approve.

## Copy flagged for review (claims worth a second look)

- "Licensed and insured means the business holds the licence it needs to operate and carries insurance for its work."
- Janitorial vs commercial cleaning definition (general industry wording).
- Downtown: "Many strata buildings ask residents to reserve the elevator for a move."
- North Van: City and District of North Vancouver both served; wet-season tip (Oct-Apr, from existing copy).
- East Van: laneway houses, suites, move-out between tenants; South Van: Canada Line, multi-generational homes.
- West Van: parking and access for hillside homes; marble and stone wording follows existing know-how copy.
- Diamond-plan facts (oven/fridge/microwave/range hood inside, interior windows) are taken from `pricing.ts`.
- "How do I choose a cleaning company" answer on About (general advice plus our approved claims).
