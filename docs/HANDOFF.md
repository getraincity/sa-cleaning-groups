# Working on this project: a handoff guide for Claude

Read this before doing anything. It records how the earlier Claude sessions worked on this site,
so a new session (or a new account) carries on in exactly the same way.

---

## 1. The project and the people

- **The site:** S&A Cleaning Group (sacleaninggroup.ca). It offers home cleaning, car detailing
  ("S&A Auto Detailing") and custodian (commercial/janitorial) services across Greater Vancouver.
  - The company used to be called **Akumal Executive Cleaning** and has been running for 9+ years.
  - The co-founders are **Alex & Shaida**.
  - Phone, email and booking links live in `src/lib/site.ts`.
- **The user** (the person talking to you) runs the agency that builds the site; the GitHub org is
  `getraincity`. They pass on the client's feedback and review your work.
  - They write casually and in short messages. Answer clearly and without fluff.
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

Don't burn time retrying. Google Fonts and npm work. An **Unsplash connector** may be available;
earlier stock photos came from Unsplash and are listed in `src/assets/images/PHOTO-CREDITS.md`.
Keep that file updated when you add stock photos.

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
- **Images:** client job photos and Unsplash stock live in `src/assets/images/`, imported so
  `next/image` optimises them. Partner logos go in `public/partners/`.
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
npx next start -p 3000 &                        # then:
node scripts/qa/sweep.mjs                       # must print "no problems"
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
- **`prettier --check`** warns about `src/assets/images/PHOTO-CREDITS.md`. That warning predates
  round 3 and you can ignore it.

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

**Round 4 (PR #4, branch `claude/elegant-bell-ezj610`, open as of 2026-10-06)**

- Home Cleaning: checklist section removed; Airbnb, organizing and specialized cleaning added;
  Google Reviews replaced by an Add-Ons section.
- About: Google Reviews moved here; partner logos and links (from the RainCity site, per the
  client) and the general Rotary logo.
- Car Detailing: vehicle types now include buses and trailers.
- Instagram link added. "Restoration cleaning" is worded after the client's other company,
  RainCity (raincitypms.com); its site's source is the `getraincity/raincity-website` repo.
- Not done yet (photos): Home Cleaning gallery variety, everyday cars instead of luxury cars,
  a photos-only section on Custodian, and new blog images. Stock photo hosts were blocked.

## 9. Waiting on the client (as of round 4)

- **Photos:**
  - Alex & Shaida, for the About founder intro (`src/components/sections/founder-intro.tsx`);
    the client will send it later;
  - a cleaner in a bright condo, for the home hero;
  - buses, trailers and work vehicles; everyday cars; custodian jobs; home jobs that aren't
    kitchens (round 4 photo items above).
- **Add-ons:** whether to show prices.
- **Products We Trust:** the real brand list (client will send later). `src/content/products.ts`
  is a placeholder modelled on a sample page the client sent.
- **Social:** the Facebook URL (`socialLinks` in `src/lib/site.ts`). Instagram is set.
- **Reviews:** approval to show 4–6 real Google reviews in our own layout instead of the Elfsight
  widget, which the client finds messy.
- **Locations:** which collabs go with each area.
- **Copy review:**
  - the founder intro, Custodian page, blog posts (and their dates) and area pages;
  - round 4's service, add-on and vehicle blurbs;
  - the doc lists a second set of areas; only the first set (Downtown, North, East, West and
    South Vancouver) was built.
