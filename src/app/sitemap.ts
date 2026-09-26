import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { locations } from "@/content/locations";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/about-us",
  "/home-cleaning",
  "/car-detailing",
  "/custodian-services",
  "/book-home-cleaning",
  "/locations",
  ...locations.map((location) => `/locations/${location.slug}`),
  "/blog",
  ...posts.map((post) => `/blog/${post.slug}`),
  "/contact-us",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${siteConfig.url}${route}` }));
}
