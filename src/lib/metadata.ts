import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  path: string;
  /** Search result snippet; also used for social previews. */
  description?: string;
  /** Use the title as-is instead of adding " | S&A Cleaning Group" (the home page). */
  absoluteTitle?: boolean;
};

const ogImage = {
  url: siteConfig.ogImage,
  width: 1200,
  height: 630,
  alt: `${siteConfig.brandName}: home and office cleaning in Greater Vancouver`,
};

/**
 * Open Graph fields every page shares. Next.js merges metadata shallowly, so
 * a page that sets `openGraph` must repeat these or it loses them.
 */
export const openGraphBase: NonNullable<Metadata["openGraph"]> = {
  siteName: siteConfig.brandName,
  locale: "en_CA",
  type: "website",
  images: [ogImage],
};

/** Title plus matching social titles and a canonical URL for a page. */
export function pageMetadata({
  title,
  path,
  description,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { ...openGraphBase, title, description, url: path },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}
