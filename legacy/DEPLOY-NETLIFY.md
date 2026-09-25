# Put the site live on Netlify (free, ~10 minutes)

The `site/` folder is a ready-to-host static website. Same design, same pages, same URLs (`/about-us`, `/home-cleaning`, etc. keep working, so Google rankings aren't affected).

## 1. Localise the images first
Run `download-assets.ps1` (right-click → Run with PowerShell). This copies every image/script into `site/assets` so nothing depends on Webflow any more.
Check: double-click `site/index.html` — it should look exactly like the live site.

## 2. Deploy
1. Create a free account at netlify.com (your agency account — you can transfer the project to the client later).
2. Go to **app.netlify.com/drop** and drag the **`site`** folder onto the page.
3. Netlify gives you a URL like `random-name-123.netlify.app` → open it and click through every page.
4. Project configuration → Change project name → e.g. `sacleaninggroup` → `sacleaninggroup.netlify.app`.

To update later: Deploys tab → drag the folder again.

## 3. Contact form (already converted)
The Webflow form has been switched to **Netlify Forms** (`data-netlify="true"`). After deploy:
- Forms tab → enable form detection, then redeploy once (drag the folder again).
- Forms → contact → Form notifications → add email notification → `info@sacleaninggroup.ca`.
- Send a test message; the page shows the "Thank you!" message after submitting.

## 4. Point the domain (only when the Webflow plan ends / client approves)
1. Netlify → Domain management → Add a domain → `sacleaninggroup.ca` (+ `www`).
2. At the client's domain registrar, replace the Webflow DNS records with the ones Netlify shows (A record `@` → Netlify load balancer IP, CNAME `www` → `sacleaninggroup.netlify.app`).
3. Netlify issues free HTTPS automatically once DNS propagates (minutes to a few hours).
4. Optional: add `akumalcleaning.com` as a domain alias so the old brand still redirects.

Do the DNS switch **before** the Webflow plan expires, so there is no downtime.

## What still works unchanged
Google reviews (Elfsight), home-cleaning booking (Launch27), car-detailing booking link, Google Analytics, mobile menu and scroll animations.
