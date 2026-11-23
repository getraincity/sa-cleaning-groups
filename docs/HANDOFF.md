# Working on this project: a handoff guide for Claude

Read this before doing anything. It records how the earlier Claude sessions worked on this site,
so a new session (or a new account) carries on in exactly the same way.

## 0. Start here: where things stand (2026-11-23)

- **Live site:** https://sacleaninggroup.ca, deployed by Vercel from `main` about a minute after
  each merge. The last feature merge was PR #21 (2026-11-20). All work is on `main`.
- **Photos:** every cleaning photo is the client's own or a permitted job photo
  (`src/content/job-photos.ts`, 122 slots, each used at most once outside `/our-work`). Don't add
  Unsplash, Pexels or AI _cleaning_ photos; only the sources in `docs/image-permissions.md`.
  The one exception: neighbourhood scenery on the Locations cards and area heroes is Unsplash
  (`src/content/area-photos.ts`, 2026-11-22, the user's choice).
- **Our Work page (`/our-work`, 2026-11-22):** every photo: Homes & Condos room by room, then
  Commercial Spaces by type (offices, shops, stairwells & common areas, new builds)
  (`src/content/portfolio.ts`). Not in the menus; reached from "Come see spaces we've worked on"
  buttons under the galleries. Indexed. Add every new job photo to it too.
- **Discounts page (`/discounts`, 2026-11-23):** under About. Seven groups, **no amounts** (the
  client's rule): visitors mention it and get a better price. Content in `src/content/discounts.ts`.
- **Network:** this repo has its own cloud environment, "sa-cleaning-groups", which allows
  docs.google.com (+ its export host), sacleaninggroup.ca, OnePro/Wix and the product brands'
  sites. The feedback doc can be read with `curl -L .../export?format=zip` (§2).
- **Images are served unoptimized** (`images.unoptimized: true`) because the Vercel image
  quota ran out. Don't turn the optimizer back on; prepare photos at final size (§8, "Blank
  photos on the live site").
- **Last checks (2026-11-20, after the merge):** tsc, eslint, prettier (src), build, sweep
  ("no problems", 31 pages × 7 widths), inventory, and `images.mjs` both locally and on the
  live site ("All 328 images load").
- **Most recent asks from the user, in order:** fix blank live photos (PR #20) → audit how many
  stock photos were left (34) → replace all 34 with real job photos (PR #21) → "push and merge
  as main".
- **Waiting on the client:** §9. The main photo gap is **commercial/office job photos**: the
  permitted sources are used up, so some commercial tiles were reworded to show homes (§8, "No
  stock photos left").
- **How the user works:** they say "merge" (or "push and merge as main") when they want a PR
  merged; until then, leave it as a draft PR. After a merge, check the live site (§7).
- **First steps in a new session:** read this file, then run
  `git fetch origin && git log --oneline -10 origin/main`, check the doc for new feedback (§2),
  and report before building (§3).

---

## 1. The project and the people

- **The site:** S&A Cleaning Group (sacleaninggroup.ca). It offers home cleaning and custodian
  (commercial/janitorial) services across Greater Vancouver. **It does not offer car detailing**
  (2026-10-30): the previous company did. Never present car detailing as an S&A service.
  - The company used to be called **Akumal Executive Cleaning** and has been running for 9+ years.
  - The co-founders are **Alex & Shaida**.
  - Phone, email and booking links live in `src/lib/site.ts`.
- **The user** (the person talking to you) runs the agency that builds the site; the GitHub org is
  `getraincity`. They pass on the client's feedback and review your work.
  - They write casually and in short messages. Answer clearly and without fluff.
  - **Always reply in English** (2026-11-13), even when they write in Roman Urdu or Hindi.
  - They expect agency-grade quality: "be sure, don't hurry, each and everything should be perfect".
- **The client** writes feedback in a Google Doc (§2). The client often lacks assets (photos,
  logos, links). When something is blocked on the client, the user wants a **ready-to-send WhatsApp
  message** listing exactly what is needed (§4.4).

## 2. Where the feedback lives, and how to read it properly

**Feedback doc:** `https://docs.google.com/document/d/1HnxmLEqSOfdal-GY7RvAzQuTYoJXr4t4BgBkqKbzdc4/edit`
(Drive file ID `1HnxmLEqSOfdal-GY7RvAzQuTYoJXr4t4BgBkqKbzdc4`). The same doc grows every round;
the client adds to it and edits it.

Read **all** of it, **including every screenshot**. Half the meaning is in the images: a comment
like "above section doesn't look nice" only makes sense next to its screenshot.

1. **Text:** call the Google Drive connector's `read_file_content` with the file ID and
   `includeComments: true`.
2. **Images:** call `download_file_content` with `exportMimeType: "application/zip"`.
   - The result is too large to show inline, so it is saved to a file. That file is JSON whose
     `content` field is base64:
     ```bash
     jq -r .content <saved-result-file> | base64 -d > doc.zip && unzip -o doc.zip
     ```
   - This gives `<Name>.html` plus an `images/` folder.
   - Map each image to its place in the text by walking the HTML in order (for example, replace each
     `<img src=…>` with an `[IMG …]` marker and strip the remaining tags with a short Python script).
   - Then **open every image with the Read tool** and look at it.
3. **What's new:** `get_file_metadata` shows the doc's `modifiedTime`.
   - Compare the doc against §8 (round history) and `git log origin/main` to separate new requests
     from ones already done. Earlier rounds' feedback stays in the doc.
   - A heading with nothing under it (for example "Contact", "Blog") means no changes there.
4. **Repo state:** `git fetch origin` and check `git log origin/main` before starting. Another
   session may have merged work in the meantime; that happened once (PR #2).

## 3. The workflow for each round

1. **Read and understand** (§2), then **report back** in plain language: what the client asked for,
   section by section, matched to the actual page or component.
   - Say what's already done, what's ambiguous, and what is blocked on assets.
   - If the user asks "check and be sure what he asked for", stop there and report; don't start
     building.
2. **Write the WhatsApp message** for anything blocked on the client (§4.4) and send it as a file
   with `SendUserFile`.
3. **Implement** everything that isn't blocked.
   - Where an asset is missing, build the section so it works now and is easy to swap later. Use
     `// TO CONFIRM` / `// TO REPLACE` comments, and never fake content (§5).
4. **Verify** (§7). Look at the screenshots yourself and fix what you see before you report.
5. **Commit, push and open a draft PR.** Merge only when the user says "merge".
   - Commit messages: a title line like `Client feedback round N: …`, then a body grouped by page.
   - The PR description repeats that grouping and adds "Waiting on the client" and "Checks"
     sections.
6. **Report:** a short summary grouped by page, what is waiting on the client, and anything you
   could not do. Send screenshots (`SendUserFile`) of the main pages on desktop and mobile.

## 4. Environment notes (cloud sandbox)

### 4.1 Network

The egress proxy blocks a lot:

- the client's live sites, competitor sites, Instagram/Facebook and most stock-photo hosts;
- partner sites (Hello Gubby, CFIB…);
- Elfsight, so the Google Reviews widget is invisible locally;
- Google Tag Manager.

Don't burn time retrying. Google Fonts and npm work.

- **The site has no stock photos (2026-11-20)** and the client has rejected them three times: don't
  add Unsplash, Pexels or AI images. New photos come from the client or the permitted sources in
  `docs/image-permissions.md` (see "Real job photos" in §8).
- Start the local server with `NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt`
  so the QA scripts can reach outside hosts through the proxy.
- When choosing photos, build contact sheets of the thumbnails and look at them before picking:
  `node scripts/photos/contact-sheet.mjs <dir> <scratchpad>/sheets` (then open each sheet with
  Read). `node scripts/photos/find-dupes.mjs <candidates-dir>` flags straight re-uploads of
  photos already used (it compares against `assets-incoming/raw/`, which is git-ignored, so in a
  fresh checkout re-download the originals listed in `assets-incoming/SOURCES.md` first, or
  compare against `src/assets/images/jobs/` by eye).
- **Adding a job photo:** download the original into `assets-incoming/raw/`, add a slot to
  `scripts/photos/job-photos.json` (`slot`, `page`, `section`, `src`, `mode`
  `full`/`framed`/`ba`, `size` `WxH`, `alt`, optional `crop` `[x, y, w, h]` as fractions, `pos`,
  `hero`), run `node scripts/photos/build-job-photos.mjs`, import the WebP in
  `src/content/job-photos.ts`, and log it in `assets-incoming/SOURCES.md`,
  `scripts/photos/sources.json` and `docs/image-replacements.md`. Wix originals are
  `https://static.wixstatic.com/media/<id>`; thumbnails `…/<id>/v1/fit/w_300,h_300,q_70/a.jpg`.

### 4.2 Processes and tools

- **Stopping the dev server:** `pkill -f "next dev"` kills your own shell. Use
  `fuser -k 3000/tcp` instead.
- **Playwright:** use `waitUntil: "load"`, never `"networkidle"`. Google Analytics is blocked and
  the page never goes idle.
- The QA scripts in `scripts/qa/` already handle finding Playwright and Chromium (§7).

### 4.3 GitHub

- **Push fails with 403 while reads work:** the user's GitHub connection lacks write access. Ask
  them to reconnect at https://claude.ai/connect-github. They're happy to; just say so.
- **GitHub MCP tools fail with "invalid session"** (seen right after a reconnect): use
  `gh api …` (REST) if it's available.
  - Otherwise give the user a compare link:
    `https://github.com/getraincity/sa-cleaning-groups/compare/main...<branch>?expand=1`
- **When your branch's earlier PR is already merged:** restart the branch from `origin/main`. The
  push then needs `--force-with-lease=<branch>:<old sha>`; that's fine because the old tip is
  already in main.
- **Vercel** deploys previews for every push.

### 4.4 WhatsApp message style (for the client)

The user forwards this to the client as-is:

- Friendly, short and in plain English; it goes to a business owner, not a developer.
- Starts with "Hi 👋". Don't guess a name; the client could be Alex or Shaida.
- Thanks them, then says in one line what is already being worked on.
- Groups the asks under emoji headers in WhatsApp bold (`📸 *Photos*`, `🤝 *Partners*`,
  `🧴 *Products*`, `📱 *Social*`, `⭐ *Reviews*`).
- Numbers the asks and says why each one is needed. Mentions that phone photos are fine.
- Ends with "send here or drop in a Google Drive folder".
- Never asks for anything the repo already has. Check first.

## 5. Content rules (important)

- **Never invent facts.** That means no made-up statistics, guarantees, opening hours ("after
  hours"), team sizes, partner relationships or customer quotes.
- Claims already approved and used on the site:
  - 9+ years in business; formerly Akumal Executive Cleaning;
  - fully licensed and insured, and carries a valid garage policy;
  - every staff member completes a criminal and background check before employment;
  - eco-friendly, pet-friendly, hospital-grade products ("up to 98.9% of bacteria");
  - "100% satisfaction guarantee" (in the client's original copy);
  - 5-star (Google) reviews;
  - hourly cleaning: 3-hour minimum, from $130+;
  - prices in `src/content/pricing.ts`.
- **Don't name people in photos** unless you know who they are. The About page's founder intro
  shows a team photo until the client sends a photo of Alex & Shaida, and nothing names the person
  in it.
- **Alt text must describe what's actually in the image.** Open the image and check. One earlier
  mistake: `kitchen-island.jpg` is an apartment kitchen with a dark island, not marble.
- **Partner and brand blurbs:** only describe a partner the way it describes itself, and only link
  to URLs you're sure of.
- **Copy you wrote yourself** (founder intro, blog posts, area pages) gets flagged to the user for
  client review.

## 6. Codebase conventions

- **Stack:** Next.js 16 App Router, React 19, TypeScript and Tailwind v4. **Next 16 differs from
  older versions:** read `node_modules/next/dist/docs/` before using an API you're not sure of
  (see AGENTS.md).
  - `params` is a Promise.
  - Dynamic routes use `generateStaticParams` with `dynamicParams = false`.
  - `useSearchParams` on a static page needs a `<Suspense>` boundary.
  - `next/image`'s `priority` prop is deprecated: use `loading="eager" fetchPriority="high"`.
- **Breakpoints** are desktop-first: `max-lg` ≤991, `max-md` ≤767, `max-sm` ≤479. `max-xl` ≤1199
  is used for the navbar and dense grids.
- **Tokens** live in `src/app/globals.css`: `bg-brand` (S&A red), `text-muted`, `text-ink-soft`,
  `font-heading` (Be Vietnam Pro), `font-text` (Montserrat).
  - Write sizes like `text-[16px]`; don't use named sizes.
  - Classes are sorted by `prettier-plugin-tailwindcss`.
- **Service colour themes:** `theme-home` (teal), `theme-car` (blue) and `theme-custodian` (navy).
  Wrapping an element in one re-points `brand` inside it. The navbar and footer stay red.
- **Section building blocks:**
  - `SectionHeader` (eyebrow, title, description) with `sectionSpacing.y/top/bottom`
    (96px, or 64px on mobile). h2s are 36px (30px on mobile).
  - `Eyebrow`.
  - `Reveal`, the scroll-in animation. `<main>` has `overflow-x-clip` so slide-ins can't widen
    the page.
  - `PageHero`, which takes `imageClassName` and `overlayClassName`.
  - `CtaBand`, `FaqSection` (which also emits FAQ JSON-LD), `ProcessSteps` and `photo-calm`, a
    shared colour grade for photos shown side by side.
- **Content lives in data files under `src/content/`:**
  - `locations.ts`, `blog.ts`, `pricing.ts`, `products.ts`, `partners.ts`, `contact.ts`;
  - social URLs are in `socialLinks` in `src/lib/site.ts`. They're empty until the client gives
    them, and every social button stays hidden while they are.
- **Images:** the client's own photos live in `src/assets/images/` and the permitted job photos in
  `src/assets/images/jobs/` (via `src/content/job-photos.ts`), imported with `next/image`, which
  serves them as-is (see "Blank photos on the live site"). Partner logos go in `public/partners/`.
- **SEO:** use `pageMetadata()` for every page, add new routes to `src/app/sitemap.ts`, and
  escape `<` in JSON-LD (`JsonLd` already does).

### Design lessons from client feedback (keep to these)

- **Clean, not decorative.** The client called sketch-style line art and watermarks "messy", so
  they were removed everywhere. Use real photos and simple shapes.
- **Moderate sizes.** New sections once felt oversized and were compacted. Match the existing
  scale.
- **No big red areas.** Red is only for the brand accent. The client called the red pricing band
  "ugly"; it and the red safety band were removed.
- **Don't repeat the same photos across Home and About.** The client noticed.
  `node scripts/qa/photos.mjs` shows every photo so you can pick distinct ones.
- **Check tablet widths for orphan grid items.** Make the last card span the row, or similar.

## 7. Verification (do all of it before reporting)

```bash
npx tsc --noEmit && npx eslint src --quiet && npx prettier --check src
npx next build
NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt npx next start -p 3000 &
node scripts/qa/sweep.mjs                       # must print "no problems"
node scripts/qa/inventory.mjs                   # must end "No photo appears on more than one page."
node scripts/qa/images.mjs                      # must end "All N images load."
node scripts/qa/sheet.mjs /about-us 1440 <scratchpad>/about-desktop
node scripts/qa/sheet.mjs /about-us 390  <scratchpad>/about-mobile
node scripts/qa/element.mjs / 1440 "section:has(h2:text('Give the Gift'))" <scratchpad>/gift.png
fuser -k 3000/tcp                               # stop the server afterwards
```

- **`sweep.mjs`** takes every page from `/sitemap.xml` and checks it at 360, 414, 768, 1024, 1280,
  1440 and 1920px for:
  - horizontal overflow;
  - text spilling out of its box;
  - tap targets under 32px on phones;
  - console errors.
- **`sheet.mjs`** cuts a full-page screenshot into side-by-side strips. Open each sheet with Read
  and actually look, at 1440, about 820 and 390 widths, for every page you changed.
- **`element.mjs`** takes a full-resolution close-up of one section.
- **`images.mjs`** checks that every image on every sitemap page actually loads. **Also run it
  against the live site after each merge** (`BASE_URL=https://sacleaninggroup.ca`, plus the two
  proxy variables above): some failures only happen on Vercel (see "Blank photos on the live site").
- **`inventory.mjs`** lists the photos on every page and flags any photo used on more than one page
  (a post's own blog cards are expected and ignored).
- **`prettier --check src`** should pass cleanly. `prettier --check docs` warns about
  `docs/SEO-PLAN.md`, `docs/seo/blog-notes.md` and `docs/seo/keywords.md`; those warnings
  predate the photo rounds and can be ignored.
- **Live check after a merge** (wait about a minute for the Vercel deploy):
  ```bash
  BASE_URL=https://sacleaninggroup.ca NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt node scripts/qa/images.mjs
  ```

## 8. Round history

**Round 1 (PR #1, merged 2026-09-26)**

- Header nav: Home, About, Services, Blog, Locations, Contact. The hero says the site serves
  Vancouver.
- Snow Removal was replaced with Custodian Services.
- New home sections: gift card, follow on social, and a quote from Alex & Shaida.
- New About sections: company history (Akumal → S&A), why choose us, safety and credentials, and a
  work gallery.
- New pages:
  - Custodian Services;
  - vehicle types for car detailing (RVs, trucks, fleets, boats);
  - home cleaning types, including hourly (3-hour minimum, from $130+);
  - Locations hub plus 5 area pages;
  - a redesigned Contact page with a topic-aware form;
  - Blog index, single-post template and 6 posts.
- Then: compaction, removal of all sketch art, and an all-devices pass.

**Round 2 (PR #2, merged 2026-09-27, another session)**

- Services:
  - aligned pricing cards with no red band;
  - a colour scheme per service;
  - more sections on each service page;
  - commercial photos for Custodian.
- Locations:
  - a real Google map;
  - area photos;
  - a gallery, portfolio and community section per area.
- Products We Trust page (under About).
- Partners section with RainCity.
- Akumal logo in Our Story.

**Round 3 (PR #3, merged 2026-10-05)**

_Home:_

- Announcement bar: "Akumal Executive Cleaning is now S&A Cleaning Group".
- New section order: hero → about → services → how it works → reviews and proof strip → owners'
  quote → social → gift card.
- New hero photo; service card photos (home detail / car before-after / office).
- Gift card in ivory, black and gold.

_About:_

- "The S&A Way" removed. A founder intro opens the page.
- Products & equipment and safety sections redesigned.
- Six partners added.
- Homier gallery.

_Products We Trust:_ photos and brand links.

_Fix:_ slide-in overflow on phones.

**Round 4 (PR #4, branch `claude/elegant-bell-ezj610`, merged)**

- Home Cleaning: checklist section removed; Airbnb, organizing and specialized cleaning added;
  Google Reviews replaced by an Add-Ons section.
- About: Google Reviews moved here; partner logos and links (from the RainCity site, per the
  client) and the general Rotary logo.
- Car Detailing: vehicle types now include buses and trailers.
- Instagram link added. "Restoration cleaning" is worded after the client's other company,
  RainCity (raincitypms.com); its site's source is the `getraincity/raincity-website` repo.
- Not done yet (photos): Home Cleaning gallery variety, everyday cars instead of luxury cars,
  a photos-only section on Custodian, and new blog images. Stock photo hosts were blocked.

**Round 5 (2026-10-22)**

- The client added the Facebook page (https://www.facebook.com/sacleaninggroup) to the doc. It is
  set in `socialLinks`, which shows the Facebook buttons in the footer, the home social section and
  Contact, and both profiles are listed as `sameAs` in the area pages' LocalBusiness JSON-LD.
- Photo notes from the doc (unique real photos per page) are handled on the branch
  `claude/unique-real-photos`.

**Booking flow (2026-10-30)**

- The Launch27 booking page stopped working ("premium booking form feature is not available on
  your current plan"). Per the client, every Book button now opens the contact form in booking
  mode; sending it emails info@sacleaninggroup.ca, then the visitor goes on to
  https://brightnestcleaning.ca/booknow (home cleaning) or saautodetailing.ca/book-now (car
  detailing). `/book-home-cleaning` redirects to the form.
- There is no Resend key, so the form emails through FormSubmit (no account or key; see README →
  Contact form). FormSubmit needs a one-time "Activate Form" click in the info@ inbox after the
  first live message. If the email fails, a booking still continues to the booking site.

**No car detailing; unique photos (2026-10-30)**

- The client bought the company; car detailing was the previous company's and S&A doesn't offer
  it. It is gone from the menus, footer, booking, contact topics, Home, About, locations, blog (two
  car posts removed and redirected to /blog), Products We Trust and the "garage policy" claims.
  `/car-detailing` stays as a quiet history page (before/after photos from the previous company),
  out of the sitemap and linked only from Our Story on About. The second header button is now
  "Request a quote" (custodian).
- Photo pass: one Unsplash photographer's shoot (silverkblack) had been used on 11 slots across
  the site, beds were being made on four pages and Home Cleaning had five near-identical kitchen
  shots. They were replaced so no photo, and almost no shoot, repeats between pages. The areas
  strip on service pages no longer shows photos. Re-run the inventory before adding photos.

**SEO (2026-10-30)**

- Audit, fixes and plan are in `docs/SEO.md`: title template, descriptions, share image,
  sitewide LocalBusiness/WebSite schema (`src/lib/schema.ts`), Service and breadcrumb schema,
  `/llms.txt`, sitemap dates, the Search Console file in `public/`, and a 404 page. New pages need
  `pageMetadata()`, a breadcrumb `JsonLd`, a sitemap entry and a line in `src/app/llms.txt/route.ts`.

**Real-looking photos (2026-11-02, PR #12)**

- The client: keep all of our own photos, and "for pic i notice many stock pics. If u can take some
  from other companies mayb in America that would be good". Photos are **not** copied from other
  companies' websites (copyright, and it would pass their staff and jobs off as S&A's).
- All 11 of the client's own job photos are on the site, each once: three were brought back (About
  "Our work" gallery, move-out blog post).
- 21 posed or pandemic-looking stock photos were replaced with documentary-style ones: real North
  American homes (Clay Banks, Boston, CDC's real-home series), real janitors and porters (Burbank,
  New York), real offices and washrooms. No models, hazmat suits or gloved-hand close-ups.
- Avoid photos showing another company's logo, phone number or a recognisable landmark.

**Cleaners at work (2026-11-03)**

- The user clarified the client's point: stock is fine if it looks like a real cleaning company at
  work. Empty rooms and posed models read as stock. 26 slots now show cleaners working.
- Pexels is now allowed in the environment (`images.pexels.com`; search pages and the API are not).
  Find photos with WebSearch (`allowed_domains: ["pexels.com"]`), then look at thumbnails by ID:
  `https://images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg?auto=compress&cs=tinysrgb&w=240`.
  Neighbouring IDs are usually the same shoot.
- `pexels()` in `src/content/stock-photos.ts` adds them; Photo Credits links each photo's page.
- Shoots used: Tima Miroshnichenko's red-overalls crew (Home social, About van shots, Custodian),
  Liliana Drew's housekeepers (Home Cleaning, one Custodian card), RDNE (About gallery),
  Kaboompics (Products We Trust). The connected Unsplash account has no Unsplash+.

**SEO growth round (2026-11-04)**

- Plan in `docs/SEO-PLAN.md`; keyword research in `docs/seo/keywords.md`. Done by four specialist agents:
  six new service pages (`/deep-cleaning`, `/move-out-cleaning`, `/airbnb-cleaning`,
  `/post-construction-cleaning`, `/office-cleaning`, `/strata-cleaning`; data in
  `src/content/services.ts`), eight new blog posts (`src/content/blog-guides.ts`), answer blocks and
  longer FAQs on existing pages (`src/content/answers.ts`), and technical/schema work
  (AI-crawler robots rules, `/llms-full.txt`, IndexNow, www redirect, richer schema).
- `/car-detailing` is now `noindex`. Footer lists the new service pages.
- Notes for the client's review are in `docs/seo/*-notes.md`. Needs the client: Google Business
  Profile, reviews, citations, which extra suburbs are served, privacy/terms text, "free quote" wording.
- `npm run build` before `tsc --noEmit` in a fresh checkout (image types are generated by the build).

**Photos that look like S&A's own team (2026-11-13)**

- The doc was rewritten: it now holds only this round. The client's point, with marked screenshots:
  the people in the photos "don't look like us". S&A's team wears **black, short sleeves, long
  pants**, and the company is residential first. Orange/red overalls, beige maid uniforms and
  commercial crews were all rejected. "Stock" was never the real problem; the wrong look was.
- Every photo of a person now matches that: Liliana Drew's Pexels shoot of two cleaners in black
  (IDs 9462100 to 9462206) for homes, and Morfin Cleaning Services' own Unsplash photo (a real
  Chicago company, cleaner in a black T-shirt) for the Custodian hero. Close-ups of hands are fine.
- Home "Follow our journey" shows only the client's own job photos. They asked for their Instagram
  pictures; Instagram could not be read from the sandbox (the tool policy blocks it), so the
  originals were requested. Swap them into `social-section.tsx` when they arrive.
- Products We Trust: each brand card shows a picture of the product; "Fresh Lemon" was added.
- The client also said to copy pictures and SEO text from oneprocleaning.ca and other companies.
  That was not done: those photos and that text belong to a competitor. Licensed photos that match
  S&A's look were used instead, and the user was told.
- The sandbox network is now open (Instagram, Pexels' image CDN, brand sites), but connections
  reset now and then: use `curl --retry 5 --retry-all-errors`. There was no Google Drive connector;
  the doc was read with `https://docs.google.com/document/d/<id>/export?format=zip`.

**Real job photos from permitted companies (2026-11-19, PRs #16, #17, #19; Instagram review #18)**

- The client rejected stock photos a third time and wants real job photos. The agency has
  **permission** from 10 cleaning companies to use their photos, edited and with logos and
  branding removed: `docs/image-permissions.md` (only those sources; no Pexels, Unsplash or AI).
  This replaces the earlier "don't copy from oneprocleaning.ca" rule.
- 84 slots now use photos from oneprocleaning.ca and detailsbyladyt.ca/residential, each once:
  `src/content/job-photos.ts` (`jobs.*`), files in `src/assets/images/jobs/`. They are built by
  `node scripts/photos/build-job-photos.mjs` from `scripts/photos/job-photos.json` (slot, source,
  crop mode, alt). The script cuts the white frame, BEFORE/AFTER labels and the corner logo,
  crops to the slot, applies one light grade and exports WebP. Raw files go in
  `assets-incoming/raw/` (git-ignored); `assets-incoming/SOURCES.md` logs each file's source.
  Full table: `docs/image-replacements.md`; the before-state inventory: `docs/image-inventory.md`.
- Job photos aren't credited anywhere. Alt text describes the room or task only; it never
  says the photo shows S&A staff.
- The user confirmed (2026-11-19) that the client is fine with this: no credit to the source
  companies anywhere on the site.
- Skipped on purpose: photos with another company's staff in branded shirts, DeWalt-branded gear,
  floor-protection board printed with a logo, appliance brand names, text overlays and screenshots.
- The 10 slots left on stock then were all replaced on 2026-11-20 (see "No stock photos left").
- `node scripts/qa/slots.mjs` prints every photo slot (page, section, file, alt).
- **Instagram review (2026-11-19, built-in browser, signed in, read-only):** all 8 Instagram
  sources were looked through and **none of the 10 stock slots was filled**. The accounts are
  almost entirely residential, and none has an office, meeting room, corridor, clinic, shopfront,
  restaurant or lemon shot:
  - `caliber_cleaning` (68 posts): carpet extraction in empty homes, ovens, cars, a branded van;
  - `procarecleaning.service` (6): residential bathrooms;
  - `cleaned.by.her` (12+): homes, a promo graphic, two staff in branded tops;
  - `cleaner_things` (12): UK homes; one post (#8 on the grid) may be a salon;
  - `acleanslateee` (174): UK homes, many text graphics;
  - `emscleanco` (930): Melbourne end-of-lease homes;
  - `thecleanerdetail._` (21): UK homes;
  - `cleaningsolutionltd` (1,252; ~220 checked): serviced-apartment collages. The only
    commercial post is a reel of steam-cleaning a commercial kitchen hood
    (`/cleaningsolutionltd/reel/DS4_sOhiCqG/`): a blurry, grimy video frame, not usable as a hero.
  - The cloud sandbox can't reach Instagram or its CDN (proxy 403), so any photo picked later has
    to come through the user's computer (a connected folder) or be sent by the client.
  - Those 10 slots were filled from oneprocleaning.ca's blog on 2026-11-20 (below).

**Blank photos on the live site (2026-11-19, PR #20)**

- Right after the job photos went live, most photos on sacleaninggroup.ca were blank (147 of 349
  images, on every page). Cause: Vercel's image optimizer (`/_next/image`) answered
  `402 OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED`. The project had used up its plan's
  image-optimization quota, so only images optimized and cached earlier still showed. The files
  themselves were fine.
- Fix: `images.unoptimized: true` in `next.config.ts`. Images are now served as-is, so they are
  prepared at their final size ahead of time:
  - job photos by `scripts/photos/build-job-photos.mjs`;
  - other local photos by `scripts/photos/compress-images.mjs`, which caps the long side and
    recompresses;
  - The navbar logo and the Crystal Clear partner logo were resized to 3× their display size.
- **Don't turn the optimizer back on** unless the Vercel plan includes enough image
  optimization. Add new photos already sized (about 1600px, or 2400px for full-width heroes;
  WebP or mozjpeg) and run `node scripts/qa/images.mjs` against the live site after deploying.

**Matthew's WhatsApp feedback (2026-11-22)**

- The client contact (Matthew Cheah, on WhatsApp) said the pictures are "much much better" and
  more feedback will go in the doc. Three asks, all done:
  - Custodian "Clean Spaces, Ready for Business": the labels didn't match the photos
    ("Workstations" showed fitting rooms, "Entrances" showed a ceiling). The ceiling photo was
    removed from the site; the cards now read Rental suites, Shop floors, Fitting rooms, Back
    rooms & storage, matching their photos. Put Workstations/Entrances back when commercial photos
    arrive.
  - Locations: "these are locations so can't put cleaning pics". Hub cards and area heroes now
    show neighbourhood scenery from Unsplash (user's choice), `src/content/area-photos.ts`. The
    room-by-room galleries on the area pages keep job photos.
  - A page with all our work, organised by area of the home, commercial, etc.: `/our-work`, with a
    "See all our work" button under the About gallery, Home Cleaning and Custodian galleries and
    the area-page room grids. `inventory.mjs` skips `/our-work` (it repeats photos on purpose).
- For commercial photos the user gave four new sources (3 Instagram accounts and a Google Maps
  profile, `docs/image-permissions.md` 11–14). The sandbox can't reach Instagram or Google Maps,
  so they still need to be looked through, from the user's computer or downloaded by the user.

**Feedback doc round (2026-11-23)**

- Read from the doc with the zip export (the environment now allows it). Done:
  - About "Cleaning Products" card and the Products We Trust hero show the products themselves
    (line-ups of the makers' own product pictures, `src/assets/images/products/`).
  - Products: added Dawn, Lysol bathroom cleaner, Windex, Pine-Sol, a Shark vacuum, an Atrix
    backpack vacuum and a Vileda mop & bucket; removed Bona. Windex has no picture (windex.com
    has a bot checkpoint; don't try to get around it), so its card shows a "W" tile.
  - New `/discounts` page (menu: About → Discounts & Promotions; footer; contact topic
    `discount`).
  - Home Cleaning: "Rooms You Can Relax In" shows a made bed; "Let the Light In" shows window
    glass (OnePro blog photos; a mattress brand tag was cloned out).
  - Custodian: the Offices and Lobbies rows and the Clean Spaces cards now show offices, a
    hallway, shop floors, fitting rooms and a stairwell (unused photos from OnePro's Burnaby
    office post). Nothing residential is left in those sections.
  - Our Work regrouped by type of space; the button now says "Come see spaces we've worked on".
- Not done, needs photos: About "Our Team" card with people cleaning (no permitted source has
  any, and Instagram can't be read from the cloud sandbox); gyms, restaurants and daycares for
  Our Work; a Windex photo.

**No stock photos left (2026-11-20, PR #21)**

- The audit found 34 stock photos still live: 24 neighbourhood scenery shots on the area pages and
  10 cleaning/commercial ones. The user asked for all of them to be real job photos.
- oneprocleaning.ca's **blog** (about 50 case-study posts, `/post/...`) holds ~740 job photos the
  first round never looked at. All 34 slots came from there (`onepro-x###.jpg` in `raw/`, logged
  in `assets-incoming/SOURCES.md` and `docs/image-replacements.md`).
- **Check for re-uploads before picking:** OnePro posts the same photo on several pages under
  different media IDs, so an "unused" ID can be a photo already on the site (e.g. the Airbnb and
  Home Cleaning heroes). Compare candidates against the `jobs/` contact sheet by eye.
- Area pages: hero, hub card and the room-by-room gallery (was the "Life in …" landmark gallery,
  now "Every Room, Cleaned Top to Bottom") are job photos; the hero captions describe the clean,
  never the place. The community section still names local spots in text.
- **Commercial photos are used up.** OnePro's one office job (5,000 sq ft, Burnaby) is on the site
  8 times; the other sources have none. So, as the user chose, Custodian "Open offices" became
  "Rental suites", the office-checklist cover is a compact kitchen, and the Downtown, North, East
  and West commercial tiles became furnished suites, townhouses, basement & laneway suites and
  condos (South keeps an office). When the client sends commercial job photos, put offices back.
- The Fresh Lemon card on Products We Trust shows a clean sink (no source has a lemon photo).
- `stock-photos.ts`, the Photo Credits page and the Unsplash/Pexels image hosts were removed;
  `/photo-credits` redirects home.

## 9. Waiting on the client (as of 2026-11-23)

- **Photos:**
  - **people cleaning** (black shirts, not looking at the camera) for the About "Our Team" card,
    from the client or the Instagram sources (the sandbox can't read Instagram);
  - **gyms, restaurants, daycares, hotels** jobs, to add those types to `/our-work`;
  - a **Windex** bottle photo for Products We Trust;
  - **photos from the four new commercial sources** (image-permissions 11–14): blocked in the
    sandbox. Use them for the Custodian "Clean Spaces" cards (workstations, entrances, hallways),
    the office-checklist cover and the commercial area tiles, and add them to `/our-work`;
  - **commercial job photos** (offices, meeting rooms, corridors, washrooms, clinics). The
    permitted sources have none left, so Custodian "Open offices" shows "Rental suites", the
    office-checklist blog cover is a compact kitchen, and the Downtown, North, East and West
    commercial tiles show homes. Put offices back when these arrive;
  - Alex & Shaida, for the About founder intro (`src/components/sections/founder-intro.tsx`);
    the client will send it later;
  - a cleaner in a bright condo, for the home hero. The old Webflow site has exactly this
    (`legacy/asset-library/66e19b5fd546081a57b50bcc_Group 162769.png`, an S&A-shirt cleaner by a
    yellow chair) but only ~300px wide; the full-size original was requested;
  - their Instagram pictures for Home "Follow our journey" (`social-section.tsx`); the sandbox
    can't read Instagram;
  - a real lemon/product photo for the Fresh Lemon card (it shows a clean sink for now).
  - (Car, bus and trailer photos are no longer needed: S&A doesn't offer car detailing.)
- **Review by the client:** the reworded commercial tiles and area-page galleries from PR #21,
  and the sink photo on the Fresh Lemon card.
- **Add-ons:** whether to show prices.
- **Products We Trust:** the real brand list (client will send later). `src/content/products.ts`
  is a placeholder modelled on a sample page the client sent.
- **Reviews:** approval to show 4–6 real Google reviews in our own layout instead of the Elfsight
  widget, which the client finds messy.
- **Locations:** which collabs go with each area.
- **SEO:** Google Business Profile, reviews, citations, extra suburbs, privacy/terms text and
  "free quote" wording (see "SEO growth round").
- **Copy review:**
  - the founder intro, Custodian page, blog posts (and their dates) and area pages;
  - round 4's service and add-on blurbs;
  - the doc lists a second set of areas; only the first set (Downtown, North, East, West and
    South Vancouver) was built.
