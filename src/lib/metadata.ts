import type { Metadata } from "next";

type PageMetadataOptions = {
  title: string;
  path: string;
  /** Search result snippet; also used for social previews. */
  description?: string;
};

/** Title plus matching social titles and a canonical URL for a page. */
export function pageMetadata({ title, path, description }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { title, description },
  };
}
