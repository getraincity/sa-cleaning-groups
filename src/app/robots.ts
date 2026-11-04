import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Search and AI crawlers that are named on purpose. A crawler with its own group
// ignores the "*" group, so each one repeats "allow everything". Nothing is
// disallowed: the site has no /api routes, admin area or private pages.
const crawlers = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "GPTBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...crawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
