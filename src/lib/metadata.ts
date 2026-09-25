import type { Metadata } from "next";

/** Title plus matching social titles and a canonical URL for a page. */
export function pageMetadata({ title, path }: { title: string; path: string }): Metadata {
  return {
    title,
    alternates: { canonical: path },
    openGraph: { title, url: path },
    twitter: { title },
  };
}
