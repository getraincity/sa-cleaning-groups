import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { locations } from "@/content/locations";
import { siteConfig } from "@/lib/site";

// Updated whenever the site is rebuilt; blog posts use their own dates.
const builtAt = new Date();

const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/home-cleaning", priority: 0.9 },
  { path: "/custodian-services", priority: 0.9 },
  { path: "/contact-us", priority: 0.8 },
  { path: "/about-us", priority: 0.7 },
  { path: "/locations", priority: 0.8 },
  ...locations.map((location) => ({ path: `/locations/${location.slug}`, priority: 0.8 })),
  { path: "/products-we-trust", priority: 0.5 },
  { path: "/blog", priority: 0.6 },
  { path: "/photo-credits", priority: 0.1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map(({ path, priority }) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: builtAt,
      priority,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      priority: 0.6,
    })),
  ];
}
