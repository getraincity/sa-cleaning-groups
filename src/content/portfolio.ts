import type { StaticImageData } from "next/image";

import cleaningLivingRoom from "@/assets/images/cleaning-living-room.jpg";
import cleaningWindowView from "@/assets/images/cleaning-window-view.jpg";
import cleaningWindows from "@/assets/images/cleaning-windows.jpg";
import kitchenAppliances from "@/assets/images/kitchen-appliances.jpg";
import kitchenCounter01 from "@/assets/images/kitchen-counter-01.jpg";
import kitchenCounter02 from "@/assets/images/kitchen-counter-02.jpg";
import kitchenIsland from "@/assets/images/kitchen-island.jpg";
import kitchenMicrowave from "@/assets/images/kitchen-microwave.jpg";
import kitchenSink from "@/assets/images/kitchen-sink.jpg";
import kitchenStove from "@/assets/images/kitchen-stove.jpg";
import livingRoom from "@/assets/images/living-room.jpg";
import { jobs, type SitePhoto } from "@/content/job-photos";

const own = (image: StaticImageData, alt: string): SitePhoto => ({ ...image, alt });

/** The client's own job photos (used elsewhere on the site too). */
const ownPhotos = {
  kitchenIsland: own(
    kitchenIsland,
    "An apartment kitchen with a dark island counter and white tile floor, cleaned",
  ),
  kitchenSink: own(
    kitchenSink,
    "A double sink and dark counter in a bright apartment kitchen, wiped clean",
  ),
  kitchenCounter01: own(
    kitchenCounter01,
    "A gleaming white quartz counter with a candle, in front of dark green cabinets",
  ),
  kitchenCounter02: own(
    kitchenCounter02,
    "A polished white quartz island in a kitchen with dark green cabinets and a gas range",
  ),
  kitchenAppliances: own(
    kitchenAppliances,
    "An empty condo kitchen after a move-out clean, with white appliances and cabinets",
  ),
  kitchenMicrowave: own(
    kitchenMicrowave,
    "A stainless microwave above a white electric range, wiped down",
  ),
  kitchenStove: own(
    kitchenStove,
    "A five-burner gas cooktop with clean grates and a tiled backsplash",
  ),
  livingRoom: own(
    livingRoom,
    "A tidy living room with dark wood floors and a window onto the trees",
  ),
  cleaningLivingRoom: own(
    cleaningLivingRoom,
    "A cleaner vacuuming a living room with floor-to-ceiling windows over the water",
  ),
  cleaningWindows: own(
    cleaningWindows,
    "A cleaner in a black S&A T-shirt wiping a large corner window above a courtyard",
  ),
  cleaningWindowView: own(
    cleaningWindowView,
    "A cleaner wiping a floor-to-ceiling window that looks out over a deck and the water",
  ),
};

export type PortfolioCategory = {
  /** Anchor id, e.g. /our-work#kitchens. */
  id: string;
  title: string;
  description: string;
  photos: SitePhoto[];
};

/**
 * The Our Work page (client feedback, WhatsApp 2026-11-21): every photo we have, grouped by
 * room or type of space. Unlike the rest of the site, photos here repeat the ones on other
 * pages on purpose, so scripts/qa/inventory.mjs skips /our-work. New job photos go here too.
 * Add a category (hotels, clinics, restaurants...) once there are photos for it.
 */
export const portfolio: PortfolioCategory[] = [
  {
    id: "kitchens",
    title: "Kitchens",
    description: "Counters, islands, sinks and cabinets, wiped down and polished.",
    photos: [
      ownPhotos.kitchenIsland,
      jobs.aboutHero,
      jobs.homeKitchenSink,
      jobs.homeDishwasher,
      ownPhotos.kitchenCounter02,
      jobs.postConstructionHero,
      jobs.downtownCard,
      jobs.downtownKitchen,
      jobs.eastFamily,
      ownPhotos.kitchenSink,
      jobs.northKitchen,
      jobs.eastCard,
      jobs.eastKitchen,
      jobs.westHillside,
      jobs.westKitchen,
      ownPhotos.kitchenCounter01,
      jobs.southCard,
      jobs.southKitchen,
      jobs.southView,
      jobs.airbnbKitchen,
      jobs.eastSuites,
      jobs.westCondos,
      jobs.custodianSuites,
      jobs.blogOffice,
      ownPhotos.kitchenAppliances,
      jobs.productsLemon,
      jobs.postConstructionKitchen,
      jobs.homeTable,
    ],
  },
  {
    id: "appliances",
    title: "Ovens & Appliances",
    description: "Ovens, cooktops, fridges and microwaves, degreased inside and out.",
    photos: [
      jobs.homeOven,
      jobs.deepKitchen,
      ownPhotos.kitchenStove,
      jobs.homeMicrowave,
      jobs.deepOven,
      jobs.homeStove,
      jobs.blogDeepCost,
      jobs.productsSink,
      ownPhotos.kitchenMicrowave,
      jobs.homeCooktop,
      jobs.moveOutSweeping,
      jobs.blogAirbnb,
      jobs.productsTools,
      jobs.aboutProducts,
    ],
  },
  {
    id: "bathrooms",
    title: "Bathrooms",
    description: "Showers, tubs, vanities and tile, scrubbed and shining.",
    photos: [
      jobs.gallerySofa,
      jobs.galleryMirror,
      jobs.aboutSweeping,
      jobs.downtownBath,
      jobs.aboutCrew,
      jobs.homeShowerHandle,
      jobs.northBath,
      jobs.eastBath,
      jobs.blogDamp,
      jobs.westBath,
      jobs.southBath,
      jobs.productsSpray,
      jobs.blogCost,
      jobs.blogChoose,
      jobs.blogDeepClean,
    ],
  },
  {
    id: "living-spaces",
    title: "Living Rooms & Bedrooms",
    description: "Living rooms, bedrooms, closets and the little details in between.",
    photos: [
      jobs.homeHero,
      ownPhotos.livingRoom,
      jobs.deepHero,
      ownPhotos.cleaningLivingRoom,
      jobs.moveOutHero,
      jobs.homeBedroom,
      jobs.eastArea,
      jobs.westArea,
      jobs.westCard,
      jobs.downtownSuites,
      jobs.airbnbSheet,
      jobs.aboutWorkplace,
      jobs.downtownArea,
      jobs.downtownLofts,
      jobs.northArea,
      jobs.northCard,
      jobs.northLiving,
      jobs.eastCharacter,
      jobs.westBright,
      jobs.southArea,
      jobs.southCondos,
      jobs.homeDrawers,
      jobs.blogConstruction,
      jobs.homeDoorFrame,
    ],
  },
  {
    id: "floors",
    title: "Floors, Carpets & Stairs",
    description: "Hardwood, tile and carpet, vacuumed, mopped and extracted.",
    photos: [
      jobs.homePro,
      jobs.moveOutRug,
      jobs.homePets,
      jobs.aboutVacuuming,
      jobs.homeUnloading,
      jobs.aboutVan,
      jobs.locationsMop,
      jobs.locationsFloor,
      jobs.custodianVacuuming,
      jobs.postConstructionMop,
      jobs.aboutTeam,
      jobs.northTownhouses,
      jobs.westStreets,
      jobs.southTip,
      jobs.southFamily,
      jobs.northTip,
      jobs.eastTip,
      jobs.blogDepositMoveOut,
    ],
  },
  {
    id: "windows-balconies",
    title: "Windows, Glass & Balconies",
    description: "Windows, glass doors, railings and balconies, streak-free.",
    photos: [
      ownPhotos.cleaningWindows,
      ownPhotos.cleaningWindowView,
      jobs.airbnbHero,
      jobs.downtownView,
      jobs.homeWindowSpray,
      jobs.westTip,
      jobs.downtownTip,
      jobs.northCondos,
      jobs.aboutSideboard,
      jobs.strataVacuum,
      jobs.blogStrata,
    ],
  },
  {
    id: "commercial",
    title: "Offices, Shops & Common Areas",
    description: "Offices, retail spaces, stairwells and building common areas.",
    photos: [
      jobs.custodianHero,
      jobs.officeHero,
      jobs.officeVacuum,
      jobs.custodianTeam,
      jobs.officeHallway,
      jobs.southOffice,
      jobs.officeMop,
      jobs.custodianWindows,
      jobs.custodianDusting,
      jobs.custodianSteps,
      jobs.custodianLadder,
      jobs.custodianScrubber,
      jobs.custodianCart,
      jobs.strataHero,
      jobs.lobbyEntrance,
      jobs.blogCommercialCost,
      jobs.custodianGlassWall,
      jobs.strataFloor,
    ],
  },
];

export const portfolioPhotoCount = portfolio.reduce((n, c) => n + c.photos.length, 0);
