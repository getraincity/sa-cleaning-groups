import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The temporary Netlify copy linked pages as /about-us.html etc.
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/:page.html", destination: "/:page", permanent: true },
    ];
  },
};

export default nextConfig;
