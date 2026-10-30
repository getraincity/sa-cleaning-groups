import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Stock photos are served from Unsplash's CDN (see src/content/stock-photos.ts).
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-*" }],
  },
  async redirects() {
    return [
      // The temporary Netlify copy linked pages as /about-us.html etc.
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/:page.html", destination: "/:page", permanent: true },
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
