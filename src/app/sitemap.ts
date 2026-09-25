import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/about-us",
  "/home-cleaning",
  "/car-detailing",
  "/book-home-cleaning",
  "/contact-us",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${siteConfig.url}${route}` }));
}
