# SEO, local SEO and AI search: audit and plan

Audit date: 2026-10-30. Site: https://sacleaninggroup.ca (Next.js on Vercel).

Goal: rank for home cleaning and commercial/custodian cleaning searches across Greater Vancouver,
and be the business AI assistants (Google AI Overviews, ChatGPT, Perplexity, Gemini, Copilot)
name when asked for a cleaner in Vancouver.

## 1. What the audit found

| Area                    | Finding                                                                                                                                                      | Severity |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| Titles and descriptions | Home had no meta description and the title "SA Cleaning Group". Home Cleaning's title was "Service", with no description. Custodian had no description.      | High     |
| Titles                  | No title template, so pages read "Contact Us" or "About Us" in search results, with no brand or location.                                                    | High     |
| Business schema         | No sitewide business entity. Area pages each declared a separate LocalBusiness, so search engines saw five unconnected businesses.                           | High     |
| Social previews         | No share image and no `og:site_name`/locale. Pages that set Open Graph data dropped the root values (Next.js merges metadata shallowly).                     | Medium   |
| Blog schema             | The BlogPosting image URL was broken (site URL glued to an Unsplash URL).                                                                                    | Medium   |
| Breadcrumbs             | No BreadcrumbList anywhere.                                                                                                                                  | Medium   |
| Service schema          | No Service markup or prices, although the prices are public on the page.                                                                                     | Medium   |
| Search Console          | The `/:page.html → /:page` redirect would have broken Google's HTML verification file.                                                                       | High     |
| Sitemap                 | No `lastmod` dates.                                                                                                                                          | Low      |
| 404 page                | Next.js default 404 with no way back into the site.                                                                                                          | Low      |
| AI search (GEO/AEO)     | No machine-readable summary of the business; pricing and service-area answers were not phrased as questions.                                                 | Medium   |
| Already good            | HTTPS, canonical URLs on every page, one H1 per page, FAQ schema on FAQ sections, descriptive alt text, fast static pages, mobile layout, robots allows all. | —        |

## 2. What was fixed in the code

- **Search Console:** `public/google807aab8c24a997b5.html` is served as uploaded (the `.html`
  redirect now skips `google*` files). The meta-tag verification in the root layout stays as well.
- **Titles:** template `%s | S&A Cleaning Group`. Every page has a keyword title of at most 70
  characters and a description of 70–165 characters, all unique.
  Blog posts use the post title alone.
- **Social:** one share image (`public/og-image.jpg`, 1200×630, the team's own photo with the logo).
  `og:site_name`, `en_CA`, and Twitter/X large cards on every page (`openGraphBase` in
  `src/lib/metadata.ts`).
- **Structured data** (`src/lib/schema.ts`):
  - **Sitewide (root layout):**
    - `LocalBusiness` with `@id`, name, the former name (Akumal Executive Cleaning) as an
      `alternateName`, phone, email, logo, Vancouver BC address (no street; it's a service-area
      business), area served, social profiles, `knowsAbout` and an offer catalog;
    - `WebSite`.
  - **Service pages:** `Service` on Home Cleaning, with the Silver/Gold/Diamond monthly prices and
    hourly from $130 (read from `src/content/pricing.ts`). `Service` on Custodian Services.
  - **Area pages:** a `Service` limited to that area, pointing back to the one business.
  - **Breadcrumbs:** `BreadcrumbList` on every inner page.
  - **Blog posts:** `BlogPosting` with a working image URL, author and publisher linked to the
    business, and `inLanguage`.
- **Sitemap:** `lastmod` on every URL (blog posts use their own dates), plus priorities.
  `/car-detailing` stays out on purpose.
- **AI engines:** `/llms.txt`, a plain-text summary (services, areas, prices, contact, key pages,
  and "does not offer car detailing"). It's generated from the site data, so it never goes stale.
- **Answer-style content:** Home Cleaning FAQs now answer "How much does house cleaning cost in
  Vancouver?" (generated from the pricing data) and "Which areas do you clean?". Both are also in
  FAQ schema.
- **404 page** with links to the services, areas and booking.

## 3. Keyword map (one main target per page)

| Page                  | Main keyword                  | Supporting keywords                                                                             |
| --------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------- |
| `/`                   | cleaning services Vancouver   | cleaning company Vancouver, house cleaning and commercial cleaning Vancouver                    |
| `/home-cleaning`      | house cleaning Vancouver      | home cleaning services, maid service, deep cleaning, move out cleaning, Airbnb cleaning, hourly |
| `/custodian-services` | commercial cleaning Vancouver | janitorial services, office cleaning, custodial services, strata cleaning                       |
| `/locations/<area>`   | house cleaning `<area>`       | office cleaning `<area>`, cleaners near me (local pack)                                         |
| `/about-us`           | S&A Cleaning Group            | Akumal Executive Cleaning (former name), licensed insured cleaners Vancouver                    |
| `/blog/*`             | the post's question           | long-tail "how to" and checklist searches                                                       |

## 4. Plan: next steps, in priority order

### Needs the client (biggest impact on local search)

1. **Google Business Profile (GBP).** This drives the map pack more than anything on the website.
   - Claim or verify it as a service-area business (hide the address) with the areas served.
   - Primary category "House cleaning service"; also "Commercial cleaning service" and "Janitorial
     service".
   - Add every service with a description, the website link, the booking link, real job photos and
     opening hours.
   - Rename it from Akumal Executive Cleaning to S&A Cleaning Group if it's the old listing.
   - Send us the GBP link and we'll add it to the site's `sameAs`.
2. **Reviews.** Ask every happy client for a Google review. Reply to all of them. Volume and
   recency both count.
3. **Citations (NAP consistency).** List the business with the same name, phone and website on
   Yelp, Yellow Pages, HomeStars, BBB, Houzz, Nextdoor, Bing Places and Apple Business Connect.
   Update any old Akumal listings to the new name, and point them at the new site.
4. **Privacy policy and terms.** The footer links go nowhere ("#"). The contact form collects
   personal details, so a privacy policy is expected (PIPEDA) and is a trust signal. The client
   should supply or approve the text.

### Content (each item needs client approval of the copy)

5. **One page per main service**, the biggest content opportunity:
   - Deep Cleaning, Move-In/Move-Out Cleaning, Post-Construction Cleaning, Airbnb & Vacation Rental
     Cleaning (residential);
   - Office Cleaning, Strata Cleaning (commercial).
     Each with its own keyword, checklist, prices where known, FAQs and Service schema.
6. **More area pages** for the second set of areas in the client's doc (e.g. Burnaby, Richmond,
   New Westminster), only where the client actually works, with real local detail rather than
   templated copy.
7. **Blog**, one useful post a month answering real questions, for example:
   - "How much does a cleaner cost in Vancouver?"
   - "How often should you deep clean?"
   - "What to clean before an Airbnb guest arrives"
   - "Strata common-area cleaning checklist"
   - "Rental move-out cleaning and your deposit in BC"
     Link each post to its service page.
8. **Real photos and named experts.** Photos of the team at work and an author line for the
   founders on blog posts. Both strengthen trust signals and AI citations.

### Technical (check after launch)

9. **Search Console:**
   - submit `https://sacleaninggroup.ca/sitemap.xml`;
   - request indexing for the URLs below;
   - check Pages → "Not indexed" weekly for the first month;
   - check the Enhancements reports (Breadcrumbs, FAQ, Review snippets);
   - check `site:sacleaninggroup.ca` for old Webflow URLs and redirect any that 404.
10. **Domain:** `www.sacleaninggroup.ca` must 301 to `https://sacleaninggroup.ca`, the
    canonical, in Vercel → Domains.
11. **Bing Webmaster Tools:** import from Search Console. Bing feeds ChatGPT and Copilot search.
12. **Validate the rich results** on a few pages with https://search.google.com/test/rich-results
    and https://validator.schema.org.

## 5. URLs to request indexing (Search Console → URL Inspection)

Highest value first:

1. https://sacleaninggroup.ca/
2. https://sacleaninggroup.ca/home-cleaning
3. https://sacleaninggroup.ca/custodian-services
4. https://sacleaninggroup.ca/locations
5. https://sacleaninggroup.ca/locations/downtown-vancouver
6. https://sacleaninggroup.ca/locations/north-vancouver
7. https://sacleaninggroup.ca/locations/east-vancouver
8. https://sacleaninggroup.ca/locations/west-vancouver
9. https://sacleaninggroup.ca/locations/south-vancouver
10. https://sacleaninggroup.ca/contact-us
11. https://sacleaninggroup.ca/about-us
12. https://sacleaninggroup.ca/products-we-trust
13. https://sacleaninggroup.ca/blog
14. https://sacleaninggroup.ca/blog/office-cleaning-checklist
15. https://sacleaninggroup.ca/blog/deep-clean-vs-regular-clean
16. https://sacleaninggroup.ca/blog/move-out-cleaning-checklist-vancouver
17. https://sacleaninggroup.ca/blog/post-construction-cleaning-guide

Not needed: `/photo-credits` (it's in the sitemap, low value), `/car-detailing` (kept quiet on
purpose) and `/llms.txt`.
