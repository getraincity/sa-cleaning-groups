// "Products We Trust": the brands and tools our teams use.
//
// TO CONFIRM WITH THE CLIENT: the brand list below is a starting point modelled
// on the sample page the client sent (detailsbyladyt.ca/brands-&-trades).
// Replace, add or remove entries to match the products S&A actually uses.

import type { StaticImageData } from "next/image";
import cleaningLivingRoom from "@/assets/images/cleaning-living-room.jpg";
import lobbyCleaning from "@/assets/images/commercial/lobby-wet-floor.jpg";
import foamWash from "@/assets/images/detailing/foam-wash.jpg";

export type ProductBrand = {
  name: string;
  /** What we use it for. */
  text: string;
  href?: string;
};

export type ProductCategory = {
  id: string;
  title: string;
  description: string;
  /** Which service the category belongs to, for its label and colour. */
  service: "home" | "car" | "all";
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
    image: cleaningLivingRoom,
    alt: "An S&A cleaner vacuuming a bright living room",
    brands: [
      {
        name: "Nature Clean",
        text: "Canadian-made, plant-based household cleaners for everyday surfaces.",
        href: "https://natureclean.ca",
      },
      {
        name: "Allen's Cleaning Vinegar",
        text: "Aged, filtered cleaning vinegar that cuts grease and grime naturally.",
      },
      {
        name: "Mrs. Meyer's Clean Day",
        text: "Plant-derived cleaners for kitchens and bathrooms, with a fresh scent.",
        href: "https://www.mrsmeyers.com",
      },
      {
        name: "Bona",
        text: "Floor cleaners made for hardwood and hard-surface floors.",
        href: "https://www.bona.com",
      },
    ],
  },
  {
    id: "car",
    title: "Car Detailing",
    description:
      "Detailing products that lift grime safely and leave paint and interiors looking new.",
    service: "car",
    image: foamWash,
    alt: "A detailer hand-washing a black car covered in foam",
    brands: [
      {
        name: "Chemical Guys",
        text: "Car wash soaps, interior cleaners and detailing chemicals.",
        href: "https://www.chemicalguys.com",
      },
      {
        name: "Meguiar's",
        text: "Car care products for paint, wheels, tires and interiors.",
        href: "https://www.meguiars.com",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Equipment",
    description: "The equipment behind a deeper, healthier clean in every home, car and workplace.",
    service: "all",
    image: lobbyCleaning,
    alt: "A custodian in a mask cleaning the glass doors of an office building",
    brands: [
      {
        name: "The Rag Company",
        text: "Premium microfibre cloths and towels that trap dust and dirt instead of spreading it.",
        href: "https://theragcompany.com",
      },
      {
        name: "Hospital-grade disinfectants",
        text: "Eco-friendly disinfectants that target bacteria and viruses on high-contact surfaces.",
      },
    ],
  },
];
