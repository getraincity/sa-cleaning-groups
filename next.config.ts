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
    ];
  },
};

export default nextConfig;
