import type { NextConfig } from "next";

// The live site's host, for the www redirect. Only that exact host redirects, so
// previews and local servers are untouched.
const apexHost = "sacleaninggroup.ca";

// Safe for every page: none of these can break the third-party embeds (Google
// Analytics, the Google map, the chat widget). No CSP or Permissions-Policy on
// purpose, see docs/seo/technical-notes.md.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
];

// Files in /public keep their names when replaced, so cache them for a day and
// let browsers reuse a stale copy for a week while revalidating.
const publicAssetCache = {
  key: "Cache-Control",
  value: "public, max-age=86400, stale-while-revalidate=604800",
};

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Serve every image as-is instead of through Vercel's Image Optimization (/_next/image).
    // On 2026-11-19 the project ran out of its Vercel image-optimization quota and every image
    // that wasn't already cached came back "402 OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED", so
    // most photos on the live site were blank. Images are therefore prepared at their final size
    // ahead of time: job photos by scripts/photos/build-job-photos.mjs and the other local ones
    // by scripts/photos/compress-images.mjs.
    unoptimized: true,
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      ...["/logo.png", "/og-image.jpg", "/brand/:path*", "/partners/:path*", "/images/:path*"].map(
        (source) => ({ source, headers: [publicAssetCache] }),
      ),
    ];
  },
  async redirects() {
    return [
      // www is not the canonical host (canonical URLs, sitemap and schema all use the apex).
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: `www.${apexHost}` }],
        destination: `https://${apexHost}/:path*`,
        permanent: true,
      },
      // The temporary Netlify copy linked pages as /about-us.html etc.
      { source: "/index.html", destination: "/", permanent: true },
      // Not Google's Search Console verification file, which must stay at its .html URL.
      {
        source: "/:page((?!google)[^/]+).html",
        destination: "/:page",
        permanent: true,
      },
      // Car-care posts, removed when car detailing left S&A's services.
      ...["rv-and-boat-detailing-end-of-season", "car-interior-rainy-season"].map((slug) => ({
        source: `/blog/${slug}`,
        destination: "/blog",
        permanent: true,
      })),
      // The Photo Credits page listed stock photos; the site has none left (2026-11-20).
      { source: "/photo-credits", destination: "/", permanent: true },
      // The old Launch27 booking page; bookings now start at the contact form.
      {
        source: "/book-home-cleaning",
        destination: "/contact-us?book=home-cleaning#message",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
