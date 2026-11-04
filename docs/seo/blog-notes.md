# Blog guides, phase 2B (2026-11-04)

Eight new posts from the backlog in `docs/seo/keywords.md` §4, in `src/content/blog-guides.ts`
(merged ahead of the older posts by `src/content/blog.ts`). Newest first. Each post has
question-style H2s whose first paragraph is a 40-60 word direct answer, internal links to the
money pages and sibling posts, and a unique photo.

| Date | Slug | Backlog # | Links to |
| --- | --- | --- | --- |
| 2026-11-03 | `house-cleaning-cost-vancouver` | 1 | /home-cleaning, /deep-cleaning, deep-clean-vs-regular-clean, how-to-choose |
| 2026-10-30 | `move-out-cleaning-damage-deposit-bc` | 2 | /move-out-cleaning, /home-cleaning, move-out-cleaning-checklist-vancouver |
| 2026-10-26 | `strata-cleaning-contract-bc` | 5 | /strata-cleaning, /custodian-services, office-cleaning-checklist, post-construction-cleaning-guide |
| 2026-10-22 | `airbnb-turnover-cleaning-checklist-vancouver` | 4 | /airbnb-cleaning, /deep-cleaning |
| 2026-10-19 | `deep-cleaning-cost-vancouver` | 3 | /deep-cleaning, /home-cleaning, deep-clean-vs-regular-clean, house-cleaning-cost |
| 2026-10-15 | `prevent-mould-damp-vancouver-winter` | 8 | /home-cleaning, /deep-cleaning |
| 2026-10-11 | `how-to-choose-a-cleaning-company-vancouver` | 9 | /home-cleaning, /about-us, /custodian-services, /products-we-trust, house-cleaning-cost |
| 2026-10-07 | `commercial-cleaning-cost-vancouver` | 10 | /custodian-services, /office-cleaning, /post-construction-cleaning, /strata-cleaning, office-cleaning-checklist, strata post |

Skipped on purpose: wildfire smoke (summer, out of season), spring checklist (publish by end of
Feb), Airbnb vs regular (thin next to #4), condo guide (#12, later). The mould post is the only
seasonal one and fits Nov 2026.

**Pages that must exist** (another agent is building them; links are plain paths): `/deep-cleaning`,
`/move-out-cleaning`, `/airbnb-cleaning`, `/post-construction-cleaning`, `/office-cleaning`,
`/strata-cleaning`. Until they ship those links 404.

**For whoever owns the other files:** add the 8 slugs to `src/app/llms.txt/route.ts`. The sitemap
already iterates `posts`, so it picks them up. Consider reciprocal links from the money pages to
these posts (hub and spoke).

## Format changes (blog.ts and `src/components/blog/article-body.tsx`)

- Inline links in paragraphs, lists, checklists, tips and table cells: `[text](/path)` (internal,
  next/link) or `[text](https://...)` (new tab). Existing posts are unchanged.
- New `table` block (caption, columns, rows) and `sources` block (official links at the end of the
  posts that quote BC or Health Canada guidance).
- `readingMinutes` handles both and strips link syntax.
- The renderer lives in `article-body.tsx`, not `page.tsx`; `page.tsx` is untouched.

## Facts checked (WebSearch, 2026-11-04) and what the posts say

- **Move-out:** Residential Tenancy Act and gov.bc.ca "Moving out of rental units": tenant leaves the
  unit reasonably clean, undamaged apart from reasonable wear and tear, returns keys; landlord and
  tenant inspect together, report completed, copy to tenant; missing the inspection can affect
  deposit rights. No fees, deadlines or deduction rules are stated. "Not legal advice" is in the
  excerpt and intro. Re-check the sources before publishing.
- **Strata:** Strata Property Act s.72 (strata corporation repairs and maintains common property,
  with exceptions; bylaws can shift limited common property). Stated only in general terms.
- **Airbnb:** BC's provincial short-term rental registry requires hosts to register (gov.bc.ca).
  No fees, no principal-residence detail, no municipal licence detail (vancouver.ca was not read).
- **Mould:** Health Canada: relative humidity about 30-50% (lower in cold weather), exhaust fans
  vented outdoors during and after showers and cooking, avoid indoor laundry drying, fix the
  moisture source, small areas with soap and water, painting over mould does not kill it.
- Pexels photographer credits for 3769711 (Andrea Piacquadio), 3867613 (Gustavo Fring), 7641484
  (MART PRODUCTION), 4107278 (cottonbro studio), 4440608 (Polina Tankilevitch), 29006838 (Ken
  Mwaura), 9462229 and 6195121 (Liliana Drew, Tima Miroshnichenko) came from search listings because
  pexels.com pages return 403 here. Please spot-check them on the Photo Credits page.

## Flag for client review (HANDOFF §5: copy we wrote ourselves)

- All eight posts, and their dates (spread honestly between 2026-10-07 and 2026-11-03).
- **Prices** quoted only from `pricing.ts`: Silver $150, Gold $235, Diamond $280 "per month" and
  hourly "from $130+, 3-hour minimum". Please confirm that wording, especially that $130+ is not
  read as an hourly rate (the posts never say "per hour").
- No market price ranges were used (none could be verified). The deep-clean and commercial posts
  say so openly.
- Claims used: licensed and insured, background checks, eco-friendly/pet-friendly/hospital-grade
  products, 100% satisfaction guarantee, 9+ years, formerly Akumal, co-founders Alex and Shaida,
  custodian services cover strata common areas (existing approved copy).
- Not claimed (unconfirmed): Airbnb linen or restocking, whether move-out cleans include inside
  appliances, any strata clients or WorkSafeBC clearance, cancellation policy (the choose-a-company
  post tells readers to ask us), medical sectors, after-hours work.
- The commercial post says commercial visits can be planned around business hours (existing
  custodian copy). The strata post says S&A cleans strata common areas (existing copy).
- Photos: stock only, none showing another company's logo. 4107278 and 4440608 show hands or a
  person from the side rather than a uniformed crew; 6195121 is a posed crew shot.
