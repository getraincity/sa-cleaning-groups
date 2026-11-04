import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";
import downtownCoalHarbour from "@/assets/images/areas/downtown-coal-harbour.jpg";
import downtownFalseCreek from "@/assets/images/areas/downtown-false-creek.jpg";
import downtownSkyline from "@/assets/images/areas/downtown-skyline.jpg";
import downtownTowers from "@/assets/images/areas/downtown-towers.jpg";
import eastBlossomHouse from "@/assets/images/areas/east-blossom-house.jpg";
import eastCharacterHouse from "@/assets/images/areas/east-character-house.jpg";
import eastCityView from "@/assets/images/areas/east-city-view.jpg";
import eastSecondNarrows from "@/assets/images/areas/east-second-narrows.jpg";
import eastVanSign from "@/assets/images/areas/east-van-sign.jpg";
import northCapilano from "@/assets/images/areas/north-capilano-bridge.jpg";
import northDeepCove from "@/assets/images/areas/north-deep-cove.jpg";
import northLonsdaleQuay from "@/assets/images/areas/north-lonsdale-quay.jpg";
import northLowerLonsdale from "@/assets/images/areas/north-lower-lonsdale.jpg";
import northShoreView from "@/assets/images/areas/north-shore-view.jpg";
import southCityView from "@/assets/images/areas/south-city-view.jpg";
import southConservatory from "@/assets/images/areas/south-conservatory.jpg";
import southFamilyHome from "@/assets/images/areas/south-family-home.jpg";
import southPorchHome from "@/assets/images/areas/south-porch-home.jpg";
import southQePark from "@/assets/images/areas/south-qe-park-view.jpg";
import westAmbleside from "@/assets/images/areas/west-ambleside.jpg";
import westHillsideHomes from "@/assets/images/areas/west-hillside-homes.jpg";
import westHorseshoeBay from "@/assets/images/areas/west-horseshoe-bay.jpg";
import westHoweSound from "@/assets/images/areas/west-howe-sound-sunset.jpg";
import westLighthouse from "@/assets/images/areas/west-lighthouse.jpg";
import meetingRoom from "@/assets/images/commercial/meeting-room.jpg";
import modernOffice from "@/assets/images/commercial/modern-office.jpg";
import openOffice from "@/assets/images/commercial/open-office.jpg";
import kitchenCounter from "@/assets/images/kitchen-counter-01.jpg";
import livingRoom from "@/assets/images/living-room.jpg";
import { stock } from "@/content/stock-photos";
import type { Faq } from "@/components/sections/faq-section";
import {
  BuildingIcon,
  ClockIcon,
  HardHatIcon,
  HomeIcon,
  KeyIcon,
  LeafIcon,
  RepeatIcon,
  SparklesIcon,
  StoreIcon,
  UsersIcon,
} from "@/components/ui/icons";

export type LocationSlug =
  | "downtown-vancouver"
  | "north-vancouver"
  | "east-vancouver"
  | "west-vancouver"
  | "south-vancouver";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type AreaPhoto = { image: StaticImageData; alt: string; title: string; text: string };

export type Location = {
  slug: LocationSlug;
  name: string;
  /** Short form for tight spaces: "North Van", "Downtown". */
  short: string;
  tagline: string;
  intro: string;
  metaDescription: string;
  neighbourhoods: string[];
  /** Soft background tint that gives each area page its own mood. */
  tint: string;
  /** A recognisable photo of the area itself, shown on its page. */
  area: { image: StaticImageData; alt: string; caption: string };
  /** A different photo of the area for its card on the hub and service pages,
   *  so the card never repeats a photo on the page it links to. */
  card: { image: StaticImageData; alt: string };
  /** More pictures of the area: landmarks and views. */
  gallery: AreaPhoto[];
  /** The kinds of homes and workplaces we clean here. */
  portfolio: (AreaPhoto & { tag: "Residential" | "Commercial" })[];
  /** Small community section: local places, described factually. */
  community: { intro: string; spots: { name: string; text: string }[] };
  knowHow: { title: string; items: { Icon: Icon; title: string; text: string }[] };
  tip: {
    title: string;
    text: string;
    image: StaticImageData;
    alt: string;
    /** CSS object-position, for portrait photos shown in the wide tip frame. */
    position?: string;
  };
  services: { home: string; custodian: string };
  /** Existing blog posts worth reading for this area (linked from its page). */
  guides: { label: string; href: string }[];
  faqs: Faq[];
};

export const locations: Location[] = [
  {
    slug: "downtown-vancouver",
    name: "Downtown Vancouver",
    short: "Downtown",
    tagline: "Condos, lofts and offices in the heart of the city",
    intro:
      "From Yaletown lofts to Coal Harbour high-rises and Gastown storefronts, we keep downtown homes and workplaces spotless, so you can spend more time enjoying the city and less time cleaning it.",
    metaDescription:
      "Home and commercial cleaning in Downtown Vancouver: Yaletown, Coal Harbour, Gastown. Licensed and insured. Plans from $150 a month, hourly from $130.",
    neighbourhoods: [
      "Yaletown",
      "Coal Harbour",
      "West End",
      "Gastown",
      "False Creek North",
      "Chinatown",
    ],
    tint: "#f6f4f2",
    area: {
      image: downtownSkyline,
      alt: "The Downtown Vancouver skyline with the North Shore mountains behind",
      caption: "The downtown peninsula from across False Creek",
    },
    card: {
      image: downtownTowers,
      alt: "Residential towers near False Creek in Downtown Vancouver",
    },
    gallery: [
      {
        image: downtownCoalHarbour,
        alt: "Coal Harbour towers and marina from above",
        title: "Coal Harbour",
        text: "Waterfront towers, the marina and the seawall.",
      },
      {
        image: downtownFalseCreek,
        alt: "High-rise condos along False Creek",
        title: "False Creek & Yaletown",
        text: "Glass towers and lofts along the water.",
      },
      {
        image: eastCityView,
        alt: "Downtown Vancouver towers in front of the mountains",
        title: "The downtown core",
        text: "Offices, condos and shops in the heart of the city.",
      },
    ],
    portfolio: [
      {
        tag: "Residential",
        image: kitchenCounter,
        alt: "A polished counter in a downtown condo kitchen",
        title: "High-rise condos",
        text: "Suites in concierge and strata buildings.",
      },
      {
        tag: "Residential",
        image: stock.downtownLofts,
        alt: stock.downtownLofts.alt,
        title: "Lofts & townhomes",
        text: "Yaletown lofts and waterfront townhomes.",
      },
      {
        tag: "Commercial",
        image: meetingRoom,
        alt: "A clean downtown meeting room",
        title: "Office suites",
        text: "Meeting rooms, reception areas and workspaces.",
      },
    ],
    community: {
      intro:
        "Downtown is where the city comes together, and our team is proud to help keep it looking its best.",
      spots: [
        {
          name: "Stanley Park",
          text: "The city's great park and seawall, at the tip of the downtown peninsula.",
        },
        {
          name: "Gastown",
          text: "Cobblestone streets, heritage buildings and the famous steam clock.",
        },
        {
          name: "Roundhouse Community Centre",
          text: "Yaletown's community hub in a restored railway roundhouse.",
        },
      ],
    },
    knowHow: {
      title: "Made for Downtown Living",
      items: [
        {
          Icon: BuildingIcon,
          title: "Condo and strata ready",
          text: "Concierge desks, fob access and elevator bookings are part of downtown life. Tell us how your building works and we'll fit right in.",
        },
        {
          Icon: ClockIcon,
          title: "Cleans while you're at work",
          text: "Many downtown clients are at the office during their clean. Let us know how you'd like to handle access, and come home to a fresh space.",
        },
        {
          Icon: StoreIcon,
          title: "Offices and storefronts",
          text: "From Gastown boutiques to office suites in the core, our custodian team keeps downtown businesses looking their best.",
        },
      ],
    },
    tip: {
      title: "Balcony season, city-style",
      text: "Downtown balconies collect city dust and soot fast. Our Diamond plan includes sweeping the balcony and dusting the railings, so your outdoor space is as fresh as your living room.",
      image: stock.downtownTip,
      alt: stock.downtownTip.alt,
      position: "50% 20%",
    },
    services: {
      home: "Recurring and deep cleans for condos, lofts and townhomes.",
      custodian: "Office suites, retail and strata common areas across the core.",
    },
    guides: [
      {
        label: "Office cleaning checklist: daily, weekly and monthly",
        href: "/blog/office-cleaning-checklist",
      },
      { label: "Deep clean vs regular clean", href: "/blog/deep-clean-vs-regular-clean" },
    ],
    faqs: [
      {
        question: "Can you clean my condo while I'm at work?",
        answer:
          "Many of our downtown clients aren't home during their clean. When you book, let us know how you'd like to handle building and suite access, and we'll work around it.",
      },
      {
        question: "Do you clean balconies?",
        answer:
          "Balcony sweeping and railing dusting are included in our Diamond plan. If you're on another plan, just ask and we'll let you know what we can add.",
      },
      {
        question: "Do you offer commercial cleaning downtown?",
        answer:
          "Yes. Our custodian services cover offices, retail stores and strata common areas throughout Downtown Vancouver. Request a free quote to get started.",
      },
      {
        question: "Which downtown neighbourhoods do you clean in?",
        answer:
          "Yaletown, Coal Harbour, the West End, Gastown, False Creek North and Chinatown, covering condos, lofts, townhomes, offices and shops. If your building is nearby and you're not sure it's covered, send us a message and we'll let you know.",
      },
      {
        question: "Can you clean my condo after I move out?",
        answer:
          "Yes. Our move-out cleaning is made for empty condos, lofts and apartments. Many strata buildings ask residents to reserve the elevator for a move, so check your building's rules and tell us your move time. We'll plan the clean for when the unit is empty.",
        links: [{ label: "Move-out cleaning", href: "/move-out-cleaning" }],
      },
      {
        question: "How often can you clean a downtown office?",
        answer:
          "Daily, weekly, bi-weekly or one-time, planned around your business hours. We agree what's cleaned and when, then write it into your checklist so every visit follows the same plan.",
        links: [
          { label: "Office cleaning", href: "/office-cleaning" },
          { label: "Office cleaning checklist", href: "/blog/office-cleaning-checklist" },
        ],
      },
      {
        question: "Do you clean the common areas of downtown strata buildings?",
        answer:
          "Yes. Lobbies, hallways, elevators, amenity rooms and gyms are part of our custodian services. Tell us about the building, how often you'd like visits and what you'd like included, and we'll quote the property.",
        links: [{ label: "Strata cleaning", href: "/strata-cleaning" }],
      },
    ],
  },
  {
    slug: "north-vancouver",
    name: "North Vancouver",
    short: "North Van",
    tagline: "Mountain views, rainy days and busy family homes",
    intro:
      "Between the North Shore rain, trail-day mud and family life, North Vancouver homes work hard. From Lower Lonsdale condos to Lynn Valley family homes, we bring them back to spotless.",
    metaDescription:
      "Home and commercial cleaning in North Vancouver: Lonsdale, Lynn Valley, Deep Cove. Licensed and insured. Plans from $150 a month, hourly from $130.",
    neighbourhoods: [
      "Lower Lonsdale",
      "Central Lonsdale",
      "Lynn Valley",
      "Deep Cove",
      "Edgemont Village",
      "Seymour",
    ],
    tint: "#f1f5f2",
    area: {
      image: northLonsdaleQuay,
      alt: "Lonsdale Quay on the North Vancouver waterfront",
      caption: "Lonsdale Quay on the North Vancouver waterfront",
    },
    card: {
      image: northLowerLonsdale,
      alt: "Condo towers in Lower Lonsdale, North Vancouver",
    },
    gallery: [
      {
        image: northDeepCove,
        alt: "Boats in Deep Cove with forested mountains behind",
        title: "Deep Cove",
        text: "Kayaks, marinas and forested mountains.",
      },
      {
        image: northCapilano,
        alt: "A suspension bridge through tall rainforest trees",
        title: "Canyons & rainforest",
        text: "Suspension bridges and trails through the trees.",
      },
      {
        image: northShoreView,
        alt: "The city and mountains seen from the North Shore",
        title: "North Shore views",
        text: "City, harbour and mountain views from the slopes.",
      },
    ],
    portfolio: [
      {
        tag: "Residential",
        image: stock.northCondos,
        alt: stock.northCondos.alt,
        title: "Lonsdale condos",
        text: "Waterfront and high-rise suites near the Quay.",
      },
      {
        tag: "Residential",
        image: livingRoom,
        alt: "A tidy, freshly cleaned living room",
        title: "Family homes",
        text: "Detached homes in Lynn Valley and Edgemont.",
      },
      {
        tag: "Commercial",
        image: openOffice,
        alt: "A clean open-plan office",
        title: "Offices & studios",
        text: "Workspaces along Lonsdale and in the business parks.",
      },
    ],
    community: {
      intro:
        "The North Shore is a close-knit place between the mountains and the sea, and we love working here.",
      spots: [
        {
          name: "Lonsdale Quay Market",
          text: "The public market and SeaBus terminal on the waterfront.",
        },
        {
          name: "Lynn Canyon Park",
          text: "Rainforest trails and a suspension bridge over the canyon.",
        },
        {
          name: "Deep Cove",
          text: "A seaside village known for kayaking and the Quarry Rock hike.",
        },
      ],
    },
    knowHow: {
      title: "Built for North Shore Life",
      items: [
        {
          Icon: HomeIcon,
          title: "Entryways that take a beating",
          text: "Wet boots, muddy paws and dripping gear: we give floors, entryways and mudrooms the extra attention North Shore weather demands.",
        },
        {
          Icon: LeafIcon,
          title: "Safe for the dog, too",
          text: "Trail days usually include the family dog. We use eco-friendly, pet-friendly products that are tough on muddy paw prints and gentle on the pets who make them.",
        },
        {
          Icon: UsersIcon,
          title: "Family homes, top to bottom",
          text: "Multi-level homes and busy households are our speciality, with recurring plans that keep every floor under control.",
        },
      ],
    },
    tip: {
      title: "Rainy-season tip",
      text: "From October to April, North Shore floors see a lot more mud. Consider booking more frequent cleans through the wet months, then easing off in summer. We're happy to adjust your plan by season.",
      image: stock.northTip,
      alt: stock.northTip.alt,
    },
    services: {
      home: "Recurring, deep and move-in/out cleans from Lonsdale to Deep Cove.",
      custodian: "Clean, welcoming offices and stores along Lonsdale and beyond.",
    },
    guides: [{ label: "Deep clean vs regular clean", href: "/blog/deep-clean-vs-regular-clean" }],
    faqs: [
      {
        question: "Are your products safe for pets?",
        answer:
          "Yes. We use eco-friendly, pet-friendly products, so your home is clean without harsh chemicals left behind for your dog or cat.",
      },
      {
        question: "How often should I book during the rainy season?",
        answer:
          "It depends on your household, but with wet weather, kids and pets, many homes benefit from more frequent cleans between October and April. We can help you pick a plan that fits.",
      },
      {
        question: "Do you clean multi-level homes?",
        answer:
          "Yes. We clean homes of every size, from Lower Lonsdale condos to multi-level family homes. For larger homes, hourly cleaning or a custom quote is often the best fit.",
      },
      {
        question: "Do you serve both the City and the District of North Vancouver?",
        answer:
          "Yes. We clean in Lower and Central Lonsdale as well as Lynn Valley, Deep Cove, Edgemont Village and Seymour. If you're on the North Shore and not sure we cover your street, send us a message and we'll let you know.",
      },
      {
        question: "Do you give mudrooms and entryways extra attention?",
        answer:
          "Yes. Wet boots, muddy paws and dripping gear mean floors and entryways need more care on the North Shore. Tell us which areas matter most and we'll focus there, using eco-friendly, pet-friendly products.",
      },
      {
        question: "Is a deep clean worth booking after a muddy winter?",
        answer:
          "It's a good reset. A deep clean reaches the baseboards, corners and detail that a regular clean doesn't, so it suits a home that's had a wet, muddy season. Our guide explains how a deep clean differs from a regular one.",
        links: [
          { label: "Deep cleaning", href: "/deep-cleaning" },
          { label: "Deep clean vs regular clean", href: "/blog/deep-clean-vs-regular-clean" },
        ],
      },
      {
        question: "Do you clean offices and studios along Lonsdale?",
        answer:
          "Yes. Our custodian team cleans offices, studios and stores on a daily, weekly or one-time schedule that fits your hours. Request a quote and tell us about your space.",
        links: [{ label: "Office cleaning", href: "/office-cleaning" }],
      },
    ],
  },
  {
    slug: "east-vancouver",
    name: "East Vancouver",
    short: "East Van",
    tagline: "Character homes, laneway houses and neighbourhood shops",
    intro:
      "East Van is full of character, from heritage homes in Strathcona to laneway houses in Renfrew and the busy shops along Commercial Drive and Main Street. We clean them all with the care they deserve.",
    metaDescription:
      "Home and commercial cleaning in East Vancouver: Commercial Drive, Strathcona, Mount Pleasant. Licensed, insured. Plans from $150 a month, hourly from $130.",
    neighbourhoods: [
      "Commercial Drive",
      "Mount Pleasant",
      "Strathcona",
      "Hastings-Sunrise",
      "Renfrew-Collingwood",
      "Kensington-Cedar Cottage",
    ],
    tint: "#f8f4ee",
    area: {
      image: eastVanSign,
      alt: "The East Van cross sign lit up at dusk",
      caption: "The East Van cross, a neighbourhood landmark",
    },
    card: {
      image: eastCharacterHouse,
      alt: "A character home among the trees in East Vancouver",
    },
    gallery: [
      {
        image: eastSecondNarrows,
        alt: "The Second Narrows bridge seen from the East Vancouver shoreline",
        title: "New Brighton shoreline",
        text: "Parks and views along Burrard Inlet.",
      },
      {
        image: eastBlossomHouse,
        alt: "A cherry tree in bloom in front of an East Vancouver house",
        title: "Blossom-lined streets",
        text: "Spring cherry blossoms on residential blocks.",
      },
    ],
    portfolio: [
      {
        tag: "Residential",
        image: stock.eastCharacter,
        alt: stock.eastCharacter.alt,
        title: "Character homes",
        text: "Heritage houses, suites and laneway homes.",
      },
      {
        tag: "Residential",
        image: stock.eastFamily,
        alt: stock.eastFamily.alt,
        title: "Family houses",
        text: "Detached homes with basement and garden suites.",
      },
      {
        tag: "Commercial",
        image: stock.eastShops,
        alt: stock.eastShops.alt,
        title: "Shops & studios",
        text: "Storefronts, studios and small offices.",
      },
    ],
    community: {
      intro:
        "East Van is creative, diverse and full of character, just like the homes we clean here.",
      spots: [
        {
          name: "Commercial Drive",
          text: "Cafés, restaurants and shops on one of the city's liveliest streets.",
        },
        {
          name: "Trout Lake",
          text: "A neighbourhood park and beach, home to a popular farmers market.",
        },
        { name: "Main Street", text: "Independent shops and restaurants in Mount Pleasant." },
      ],
    },
    knowHow: {
      title: "Care for Character Homes",
      items: [
        {
          Icon: HomeIcon,
          title: "Older homes, gentle care",
          text: "Original hardwood, detailed trim and older fixtures need a careful touch. We use microfibre and eco-friendly products that clean thoroughly without harsh chemicals.",
        },
        {
          Icon: KeyIcon,
          title: "Suites and laneway houses",
          text: "Rental suites and laneway homes change hands often. Our move-in and move-out cleans help landlords and tenants hand over the keys with confidence.",
        },
        {
          Icon: StoreIcon,
          title: "Local businesses",
          text: "Cafés, studios and shops along the Drive and Main Street can count on our custodian team to keep them fresh for customers.",
        },
      ],
    },
    tip: {
      title: "Moving out of a rental?",
      text: "A move-out clean inside the oven, fridge, cabinets and closets makes the final walkthrough much smoother. Book it for after the movers leave, so every corner is empty and easy to reach.",
      image: stock.eastTip,
      alt: stock.eastTip.alt,
    },
    services: {
      home: "Deep and recurring cleans for character homes, suites and apartments.",
      custodian: "Cafés, studios and small businesses from the Drive to Main Street.",
    },
    guides: [
      {
        label: "Move-out cleaning checklist for Vancouver",
        href: "/blog/move-out-cleaning-checklist-vancouver",
      },
    ],
    faqs: [
      {
        question: "Do you do move-out cleans for rental suites?",
        answer:
          "Yes. Our move-in and move-out cleans are made for suites, laneway homes and apartments, including inside cabinets, closets and appliances.",
      },
      {
        question: "Can you clean an older home with original hardwood?",
        answer:
          "We use microfibre and eco-friendly products suited to delicate surfaces. Let us know about any special finishes when you book and we'll plan around them.",
      },
      {
        question: "Do you clean small businesses in East Vancouver?",
        answer:
          "Yes. Our custodian services cover cafés, studios, offices and retail spaces. Request a free quote and we'll build a plan around your hours.",
      },
      {
        question: "Do you clean laneway houses and basement suites?",
        answer:
          "Yes. Suites and laneway homes are common across East Van, and we clean them with the same checklists as any home. Recurring plans keep them fresh, and move-in and move-out cleans help when tenants change.",
      },
      {
        question: "Which East Van neighbourhoods do you cover?",
        answer:
          "Commercial Drive, Mount Pleasant, Strathcona, Hastings-Sunrise, Renfrew-Collingwood and Kensington-Cedar Cottage. If your street is nearby and you're not sure it's covered, send us a message and we'll let you know.",
      },
      {
        question: "Can you clean a rental between tenants?",
        answer:
          "Yes. A move-out clean, including inside cabinets, closets and appliances, helps landlords and tenants hand over the keys with confidence. Our checklist shows what a move-out clean covers, so you can compare it with your tenancy's requirements.",
        links: [
          { label: "Move-out cleaning", href: "/move-out-cleaning" },
          { label: "Move-out checklist", href: "/blog/move-out-cleaning-checklist-vancouver" },
        ],
      },
      {
        question: "What does it cost to clean a character home in East Van?",
        answer:
          "Recurring plans start at $150 a month, and hourly cleaning starts at $130+ with a 3-hour minimum. Older homes with detailed trim often suit hourly cleaning or a custom quote, so tell us about the home when you book.",
        links: [{ label: "See plans and pricing", href: "/home-cleaning#book" }],
      },
    ],
  },
  {
    slug: "west-vancouver",
    name: "West Vancouver",
    short: "West Van",
    tagline: "View homes, ocean air and weekends on the water",
    intro:
      "From Ambleside and Dundarave to the British Properties and Horseshoe Bay, West Vancouver homes are made for the view. We keep every surface, from marble counters to floor-to-ceiling glass, looking the way it should.",
    metaDescription:
      "Home and commercial cleaning in West Vancouver: Ambleside, Dundarave, British Properties. Licensed, insured. Plans from $150 a month, hourly from $130.",
    neighbourhoods: ["Ambleside", "Dundarave", "British Properties", "Caulfeild", "Horseshoe Bay"],
    tint: "#eef3f6",
    area: {
      image: westLighthouse,
      alt: "The lighthouse at Point Atkinson in West Vancouver",
      caption: "Point Atkinson Lighthouse in Lighthouse Park",
    },
    card: {
      image: westHillsideHomes,
      alt: "Homes on a forested West Vancouver hillside",
    },
    gallery: [
      {
        image: westAmbleside,
        alt: "Ambleside waterfront with homes on the hillside behind",
        title: "Ambleside & Dundarave",
        text: "The seawalk, beaches and village shops.",
      },
      {
        image: westHorseshoeBay,
        alt: "Horseshoe Bay marina and village",
        title: "Horseshoe Bay",
        text: "A seaside village at the edge of Howe Sound.",
      },
      {
        image: westHoweSound,
        alt: "Sunset over Howe Sound through the trees",
        title: "Howe Sound views",
        text: "Ocean and island views from the shore.",
      },
    ],
    portfolio: [
      {
        tag: "Residential",
        image: stock.westHillside,
        alt: stock.westHillside.alt,
        title: "Hillside view homes",
        text: "Large homes with lots of glass to keep clear.",
      },
      {
        tag: "Residential",
        image: stock.westStreets,
        alt: stock.westStreets.alt,
        title: "Quiet residential streets",
        text: "Family homes in British Properties and Caulfeild.",
      },
      {
        tag: "Commercial",
        image: stock.westClinics,
        alt: stock.westClinics.alt,
        title: "Offices & clinics",
        text: "Professional offices and wellness spaces.",
      },
    ],
    community: {
      intro:
        "West Vancouver's beaches, parks and village streets make it a special place to live and work.",
      spots: [
        {
          name: "Lighthouse Park",
          text: "Old-growth forest trails and the Point Atkinson Lighthouse.",
        },
        { name: "Dundarave Pier", text: "A local favourite for sunset walks by the water." },
        {
          name: "Ambleside Park",
          text: "Beaches, fields and the start of the Centennial Seawalk.",
        },
      ],
    },
    knowHow: {
      title: "Care for View Homes",
      items: [
        {
          Icon: SparklesIcon,
          title: "Floor-to-ceiling glass",
          text: "Big windows mean big views, and every smudge shows. Our Diamond plan includes interior window cleaning for a streak-free outlook.",
        },
        {
          Icon: HomeIcon,
          title: "Premium finishes",
          text: "Marble, natural stone and high-end fixtures get the gentle, careful cleaning they need, with products chosen for the surface.",
        },
        {
          Icon: ClockIcon,
          title: "Room for larger homes",
          text: "Book our team by the hour (from $130+, with a 3-hour minimum) and we'll focus on the rooms and finishes that matter most to you.",
        },
      ],
    },
    tip: {
      title: "Salt air, clear views",
      text: "Living by the ocean means salt and moisture build up on glass and railings faster. Regular cleans keep that film from dulling your view.",
      image: stock.westTip,
      alt: stock.westTip.alt,
    },
    services: {
      home: "Deep and recurring cleans for view homes of every size.",
      custodian: "Offices, clinics and shops in Ambleside, Dundarave and Park Royal.",
    },
    guides: [{ label: "Deep clean vs regular clean", href: "/blog/deep-clean-vs-regular-clean" }],
    faqs: [
      {
        question: "Do you clean interior windows?",
        answer:
          "Yes. Interior window cleaning is included in our Diamond plan. On other plans, just ask about adding it to your clean.",
      },
      {
        question: "Do you clean offices in West Vancouver?",
        answer:
          "Yes. Our custodian services cover offices, clinics and shops. Request a free quote and we'll build a plan around your hours.",
      },
      {
        question: "Do you clean larger homes?",
        answer:
          "Absolutely. For larger homes we'll recommend a plan or an hourly booking (from $130+, with a 3-hour minimum) based on your home and what you'd like done.",
      },
      {
        question: "Do you serve Horseshoe Bay and the British Properties?",
        answer:
          "Yes. We clean in Ambleside, Dundarave, the British Properties, Caulfeild and Horseshoe Bay. For hillside homes, tell us about parking and access when you book so we can plan the visit around it.",
      },
      {
        question: "Can you clean marble and natural stone surfaces?",
        answer:
          "We use products chosen for the surface and work gently on marble, natural stone and high-end fixtures. Tell us about the finishes in your home when you book and we'll plan around them.",
      },
      {
        question: "Can you do a deep clean for a larger West Vancouver home?",
        answer:
          "Yes. For larger homes, book by the hour (from $130+, with a 3-hour minimum) and tell us the rooms and finishes that matter most, or ask for a custom quote. A deep clean reaches the detail a regular clean doesn't.",
        links: [{ label: "Deep cleaning", href: "/deep-cleaning" }],
      },
    ],
  },
  {
    slug: "south-vancouver",
    name: "South Vancouver",
    short: "South Van",
    tagline: "Family homes, new condos and busy commutes",
    intro:
      "From family homes in Sunset and Killarney to the new towers at Oakridge and Marine Gateway, South Vancouver is growing fast. We help households keep up, with cleaning that fits busy family life.",
    metaDescription:
      "Home and commercial cleaning in South Vancouver: Marpole, Oakridge, Killarney. Licensed and insured. Plans from $150 a month, hourly from $130.",
    neighbourhoods: ["Marpole", "Oakridge", "Sunset", "Victoria-Fraserview", "Killarney"],
    tint: "#f5f3f7",
    area: {
      image: southQePark,
      alt: "Downtown Vancouver and the mountains seen from Queen Elizabeth Park",
      caption: "The view from Queen Elizabeth Park",
    },
    card: {
      image: southFamilyHome,
      alt: "A family home with a hedge and garden in South Vancouver",
    },
    gallery: [
      {
        image: southConservatory,
        alt: "Tropical plants inside a domed conservatory",
        title: "Bloedel Conservatory",
        text: "The tropical garden under the dome at Queen Elizabeth Park.",
      },
      {
        image: southCityView,
        alt: "The city and North Shore mountains seen from the south",
        title: "Views to the mountains",
        text: "Leafy streets with the North Shore on the horizon.",
      },
      {
        image: southPorchHome,
        alt: "A classic Vancouver house with a porch",
        title: "Classic Vancouver homes",
        text: "Tree-lined blocks of family houses.",
      },
    ],
    portfolio: [
      {
        tag: "Residential",
        image: stock.southFamily,
        alt: stock.southFamily.alt,
        title: "Family homes",
        text: "Detached homes in Kerrisdale, Oakridge and Marpole.",
      },
      {
        tag: "Residential",
        image: stock.southCondos,
        alt: stock.southCondos.alt,
        title: "New condos",
        text: "New developments near the Canada Line.",
      },
      {
        tag: "Commercial",
        image: modernOffice,
        alt: "A clean, modern open-plan office",
        title: "Offices & clinics",
        text: "Professional offices and medical clinics.",
      },
    ],
    community: {
      intro:
        "South Vancouver is full of families, gardens and local shops, and it's a pleasure to look after homes here.",
      spots: [
        {
          name: "Queen Elizabeth Park",
          text: "Gardens, city views and the Bloedel Conservatory at the city's highest point.",
        },
        {
          name: "The Punjabi Market",
          text: "Shops and restaurants along Main Street near 49th Avenue.",
        },
        { name: "Fraser River Park", text: "Trails and a boardwalk along the river in Marpole." },
      ],
    },
    knowHow: {
      title: "Helping Busy Households",
      items: [
        {
          Icon: UsersIcon,
          title: "Big, busy households",
          text: "Large families and multi-generational homes create a lot of cleaning. Recurring plans keep kitchens, bathrooms and living spaces under control, visit after visit.",
        },
        {
          Icon: HardHatIcon,
          title: "New builds and move-ins",
          text: "Moving into a new condo or a freshly renovated home? Our post-construction and move-in cleans clear the dust so you can settle in.",
        },
        {
          Icon: RepeatIcon,
          title: "A plan that fits your week",
          text: "Choose our Silver, Gold or Diamond plan, or book by the hour, and we'll keep your home on track, week after week.",
        },
      ],
    },
    tip: {
      title: "Getting the keys to a new build?",
      text: "New homes come with construction dust in vents, cupboards and window tracks. Book a post-construction clean before your furniture arrives: it's far easier to reach every corner in an empty home.",
      image: stock.southTip,
      alt: stock.southTip.alt,
    },
    services: {
      home: "Recurring, deep and post-construction cleans for homes and condos.",
      custodian: "Offices, clinics and shops along Cambie, Fraser and Victoria Drive.",
    },
    guides: [
      { label: "Post-construction cleaning guide", href: "/blog/post-construction-cleaning-guide" },
    ],
    faqs: [
      {
        question: "Do you clean new condos before move-in?",
        answer:
          "Yes. Our post-construction and move-in cleans remove construction dust from floors, cabinets, window tracks and fixtures, so your new home is ready to live in.",
      },
      {
        question: "Do you clean offices and shops in South Vancouver?",
        answer:
          "Yes. Our custodian services cover offices, clinics and shops. Request a free quote and we'll build a plan around your hours.",
      },
      {
        question: "Do you offer recurring cleaning plans?",
        answer:
          "Yes. Choose from our Silver, Gold and Diamond plans, or book hourly cleaning from $130+ with a 3-hour minimum.",
      },
      {
        question: "Which South Vancouver neighbourhoods do you cover?",
        answer:
          "Marpole, Oakridge, Sunset, Victoria-Fraserview and Killarney, including homes and condos near the Canada Line. If your street is nearby and you're not sure it's covered, send us a message and we'll let you know.",
      },
      {
        question: "Do you clean large or multi-generational households?",
        answer:
          "Yes. Large families create a lot of cleaning, so recurring plans keep kitchens, bathrooms and living spaces under control visit after visit. For bigger homes, hourly cleaning or a custom quote often fits best.",
      },
      {
        question: "What does a post-construction clean cover?",
        answer:
          "It clears fine construction dust and residue from floors, cabinets, window tracks and fixtures so a new or renovated space is ready to live in. Our guide explains the process in more detail.",
        links: [
          { label: "Post-construction cleaning", href: "/post-construction-cleaning" },
          {
            label: "Post-construction cleaning guide",
            href: "/blog/post-construction-cleaning-guide",
          },
        ],
      },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
