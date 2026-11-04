import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.brandName,
    short_name: siteConfig.name,
    description: "Home cleaning and custodian services across Greater Vancouver.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#de0a0a",
    icons: [
      { src: "/icon.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon.png", sizes: "256x256", type: "image/png" },
    ],
  };
}
