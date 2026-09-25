# SA Cleaning Group — Website Backup

Full backup of the Webflow site **sacleaninggroup.ca**, taken 23 Sep 2026 before the hosting plan expires.

## What's inside

```
sa-cleaning-group-backup/
├─ site/                     ← the complete website code (HTML + CSS), exactly as published
│  ├─ index.html             Home
│  ├─ about-us.html
│  ├─ home-cleaning.html
│  ├─ car-detailing.html
│  ├─ book-home-cleaning.html
│  ├─ contact-us.html
│  └─ css/sa-cleaning-group.webflow.css   (all styles, incl. responsive breakpoints)
├─ download-assets.ps1       ← run once: saves all images/scripts locally
├─ REBUILD-GUIDE.md          ← design system + page specs for the Next.js rebuild
└─ README.md
```

## Step 1 — Save the images (do this before the plan expires)

The HTML/CSS is already saved here. Images are still loaded from Webflow's CDN, so run the downloader once:

1. Right-click `download-assets.ps1` → **Run with PowerShell**
   (or in a terminal: `powershell -ExecutionPolicy Bypass -File .\download-assets.ps1`)
2. It creates:
   - `site/assets/` — every image, icon and script the pages use, with the HTML/CSS rewired to them
   - `asset-library/` — all 52 original uploads at full resolution (including unused ones)
3. Double-click `site/index.html` — the site now works fully offline.

## Step 2 — Rebuild in Next.js

Open the folder in Claude Code and use the prompt at the bottom of `REBUILD-GUIDE.md`.

## Notes

- No CMS collections, so there was no blog or dynamic content to export.
- Contact form submissions live in Webflow (Site settings → Forms). Export them to CSV before the plan ends if the client wants them.
- Reviews (Elfsight), booking (Launch27) and car-detailing booking (saautodetailing.ca) are third-party services and keep working after the move.
