// "Products We Trust": the brands and tools our teams use.
//
// TO CONFIRM WITH THE CLIENT: the brand list below is a starting point modelled
// on the sample page the client sent (detailsbyladyt.ca/brands-&-trades).
// Replace, add or remove entries to match the products S&A actually uses.

import type { StaticImageData } from "next/image";
import allensVinegar from "@/assets/images/products/allens-cleaning-vinegar.jpg";
import bonaFloorCleaner from "@/assets/images/products/bona-hardwood-floor-cleaner.jpg";
import mrsMeyers from "@/assets/images/products/mrs-meyers-multi-surface.jpg";
import natureClean from "@/assets/images/products/nature-clean-multi-surface.jpg";
import ragCompany from "@/assets/images/products/rag-company-microfibre.jpg";
import { stock } from "@/content/stock-photos";

export type ProductBrand = {
  name: string;
  /** What we use it for. */
  text: string;
  href?: string;
  /**
   * A picture of the product itself (client feedback, 2026-11-13). The brand
   * photos are each maker's own product picture; see PHOTO-CREDITS.md.
   */
  image?: StaticImageData;
  imageAlt?: string;
  /** "cover" fills the frame (photos); "contain" shows a whole packshot. */
  imageFit?: "cover" | "contain";
};

export type ProductCategory = {
  id: string;
  title: string;
  description: string;
  /** Which service the category belongs to, for its label and colour. */
  service: "home" | "all";
  image: StaticImageData;
  alt: string;
  brands: ProductBrand[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "home",
    title: "Home Cleaning",
    description:
      "Natural, eco-friendly products that are tough on dirt and safe for families and pets.",
    service: "home",
    image: stock.productsSpray,
    alt: stock.productsSpray.alt,
    brands: [
      {
        name: "Nature Clean",
        text: "Canadian-made, plant-based household cleaners for everyday surfaces.",
        href: "https://natureclean.ca",
        image: natureClean,
        imageAlt: "A bottle of Nature Clean multi-surface cleaner",
      },
      {
        name: "Allen's Cleaning Vinegar",
        text: "Aged, filtered cleaning vinegar that cuts grease and grime naturally.",
        image: allensVinegar,
        imageAlt: "A jug of Allen's double-strength cleaning vinegar",
      },
      {
        name: "Mrs. Meyer's Clean Day",
        text: "Plant-derived cleaners for kitchens and bathrooms, with a fresh scent.",
        href: "https://www.mrsmeyers.com",
        image: mrsMeyers,
        imageAlt: "A bottle of Mrs. Meyer's Clean Day multi-surface everyday cleaner",
      },
      {
        name: "Fresh Lemon",
        text: "Real lemons: a natural way to cut grease, lift stains and leave a fresh scent.",
        image: stock.productsLemon,
        imageAlt: stock.productsLemon.alt,
        imageFit: "cover",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Equipment",
    description: "The equipment behind a deeper, healthier clean in every home and workplace.",
    service: "all",
    image: stock.productsTools,
    alt: stock.productsTools.alt,
    brands: [
      {
        name: "The Rag Company",
        text: "Premium microfibre cloths and towels that trap dust and dirt instead of spreading it.",
        href: "https://theragcompany.com",
        image: ragCompany,
        imageAlt: "Three grey microfibre towels from The Rag Company",
      },
      {
        name: "Bona",
        text: "Floor cleaners and mops made for hardwood and hard-surface floors.",
        href: "https://www.bona.com",
        image: bonaFloorCleaner,
        imageAlt: "A bottle of Bona hardwood floor cleaner beside a Bona mop on a wood floor",
        imageFit: "cover",
      },
      {
        name: "Hospital-grade disinfectants",
        text: "Eco-friendly disinfectants that target bacteria and viruses on high-contact surfaces.",
      },
    ],
  },
];
