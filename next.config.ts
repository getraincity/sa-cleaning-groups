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
    // Stock photos are served from Unsplash's and Pexels' CDNs (see src/content/stock-photos.ts).
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-*" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**" },
    ],
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
