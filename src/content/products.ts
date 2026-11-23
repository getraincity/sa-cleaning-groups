// "Products We Trust": the brands and tools our teams use.
//
// The brand list started from the sample page the client sent (detailsbyladyt.ca/brands-&-trades).
// The client's feedback doc (2026-11-22) added Dawn, Lysol bathroom cleaner, Windex, Pine-Sol,
// a Shark vacuum, an Atrix backpack vacuum and a Vileda mop and bucket, and removed Bona.

import type { StaticImageData } from "next/image";
import allensVinegar from "@/assets/images/products/allens-cleaning-vinegar.jpg";
import atrixBackpack from "@/assets/images/products/atrix-backpack-vacuum.jpg";
import dawnDishSoap from "@/assets/images/products/dawn-dish-soap.jpg";
import lysolBathroom from "@/assets/images/products/lysol-bathroom-cleaner.jpg";
import mrsMeyers from "@/assets/images/products/mrs-meyers-multi-surface.jpg";
import natureClean from "@/assets/images/products/nature-clean-multi-surface.jpg";
import pineSol from "@/assets/images/products/pine-sol-original.jpg";
import ragCompany from "@/assets/images/products/rag-company-microfibre.jpg";
import sharkVacuum from "@/assets/images/products/shark-navigator-vacuum.jpg";
import viledaMop from "@/assets/images/products/vileda-mop-bucket.jpg";
import { jobs } from "@/content/job-photos";

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
      "Natural, eco-friendly products and the trusted household brands our team reaches for every day.",
    service: "home",
    image: jobs.productsSpray,
    alt: jobs.productsSpray.alt,
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
        name: "Dawn Dish Soap",
        text: "Cuts through grease on dishes, sinks, stovetops and range hoods.",
        href: "https://dawn-dish.com",
        image: dawnDishSoap,
        imageAlt: "A bottle of Dawn Ultra original dishwashing liquid",
      },
      {
        name: "Lysol Bathroom Cleaner",
        text: "Lifts soap scum and disinfects tubs, tiles, sinks and fixtures.",
        href: "https://www.lysol.com",
        image: lysolBathroom,
        imageAlt: "A spray bottle of Lysol Power Bathroom Foamer",
      },
      {
        name: "Windex",
        text: "A streak-free shine on windows, mirrors and glass doors.",
        href: "https://www.windex.com",
        // TO REPLACE: no picture yet (windex.com blocks automated downloads).
      },
      {
        name: "Pine-Sol",
        text: "Cleans and deodorizes floors and hard surfaces with its classic pine scent.",
        href: "https://www.pinesol.com",
        image: pineSol,
        imageAlt: "A bottle of Pine-Sol Original multi-surface cleaner with pine cones",
      },
      {
        name: "Fresh Lemon",
        text: "Real lemons: a natural way to cut grease, lift stains and leave a fresh scent.",
        image: jobs.productsLemon,
        imageAlt: jobs.productsLemon.alt,
        imageFit: "cover",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Equipment",
    description: "The equipment behind a deeper, healthier clean in every home and workplace.",
    service: "all",
    image: jobs.productsTools,
    alt: jobs.productsTools.alt,
    brands: [
      {
        name: "The Rag Company",
        text: "Premium microfibre cloths and towels that trap dust and dirt instead of spreading it.",
        href: "https://theragcompany.com",
        image: ragCompany,
        imageAlt: "Three grey microfibre towels from The Rag Company",
      },
      {
        name: "Shark Vacuums",
        text: "Upright vacuums with a lift-away pod for carpets, hard floors and stairs.",
        href: "https://www.sharkninja.ca",
        image: sharkVacuum,
        imageAlt: "A Shark Navigator Lift-Away upright vacuum",
      },
      {
        name: "Atrix Backpack Vacuum",
        text: "A lightweight backpack vacuum with HEPA filtration for quick, thorough passes.",
        href: "https://atrix.com",
        image: atrixBackpack,
        imageAlt: "An Atrix Ergo Pro cordless backpack vacuum",
      },
      {
        name: "Vileda Mop & Bucket",
        text: "A spin mop and bucket that wrings hands-free, for streak-free hard floors.",
        href: "https://www.vileda.ca",
        image: viledaMop,
        imageAlt: "A Vileda EasyWring spin mop and bucket beside its box",
      },
      {
        name: "Hospital-grade disinfectants",
        text: "Eco-friendly disinfectants that target bacteria and viruses on high-contact surfaces.",
      },
    ],
  },
];
