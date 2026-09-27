import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";
import downtownCoalHarbour from "@/assets/images/areas/downtown-coal-harbour.jpg";
import downtownCondos from "@/assets/images/areas/downtown-condos.jpg";
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
import northHouse from "@/assets/images/areas/north-house.jpg";
import northLonsdaleQuay from "@/assets/images/areas/north-lonsdale-quay.jpg";
import northLowerLonsdale from "@/assets/images/areas/north-lower-lonsdale.jpg";
import northShoreView from "@/assets/images/areas/north-shore-view.jpg";
import southCityView from "@/assets/images/areas/south-city-view.jpg";
import southConservatory from "@/assets/images/areas/south-conservatory.jpg";
import southFamilyHome from "@/assets/images/areas/south-family-home.jpg";
import southPorchHome from "@/assets/images/areas/south-porch-home.jpg";
import southQePark from "@/assets/images/areas/south-qe-park-view.jpg";
import westAmbleside from "@/assets/images/areas/west-ambleside.jpg";
import westBlossomStreet from "@/assets/images/areas/west-blossom-street.jpg";
import westHillsideHomes from "@/assets/images/areas/west-hillside-homes.jpg";
import westHorseshoeBay from "@/assets/images/areas/west-horseshoe-bay.jpg";
import westHoweSound from "@/assets/images/areas/west-howe-sound-sunset.jpg";
import westLighthouse from "@/assets/images/areas/west-lighthouse.jpg";
import glassHallway from "@/assets/images/commercial/glass-hallway.jpg";
import meetingRoom from "@/assets/images/commercial/meeting-room.jpg";
import modernOffice from "@/assets/images/commercial/modern-office.jpg";
import openOffice from "@/assets/images/commercial/open-office.jpg";
import carBeforeAfterInterior from "@/assets/images/car-before-after-interior-01.webp";
import carBeforeAfterSeats from "@/assets/images/car-before-after-seats.webp";
import cleaningLivingRoom from "@/assets/images/cleaning-living-room.jpg";
import cleaningWindowView from "@/assets/images/cleaning-window-view.jpg";
import cleaningWindows from "@/assets/images/cleaning-windows.jpg";
import kitchenCounter from "@/assets/images/kitchen-counter-01.jpg";
import marbleIsland from "@/assets/images/kitchen-counter-02.jpg";
import kitchenSink from "@/assets/images/kitchen-sink.jpg";
import kitchenStove from "@/assets/images/kitchen-stove.jpg";
import livingRoom from "@/assets/images/living-room.jpg";
import type { Faq } from "@/components/sections/faq-section";
import {
  BoatIcon,
  BuildingIcon,
  CarIcon,
  ClockIcon,
  HardHatIcon,
  HomeIcon,
  KeyIcon,
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
  hero: { image: StaticImageData; alt: string };
  /** A recognisable photo of the area itself, used on its card and page. */
  area: { image: StaticImageData; alt: string; caption: string };
  /** More pictures of the area: landmarks and views. */
  gallery: AreaPhoto[];
  /** The kinds of homes and workplaces we clean here. */
  portfolio: (AreaPhoto & { tag: "Residential" | "Commercial" })[];
  /** Small community section: local places, described factually. */
  community: { intro: string; spots: { name: string; text: string }[] };
  knowHow: { title: string; items: { Icon: Icon; title: string; text: string }[] };
  tip: { title: string; text: string; image: StaticImageData; alt: string };
  services: { home: string; car: string; custodian: string };
  faqs: Faq[];
};

export const locations: Location[] = [
  {
    slug: "downtown-vancouver",
    name: "Downtown Vancouver",
    short: "Downtown",
    tagline: "Condos, lofts and offices in the heart of the city",
    intro:
      "From Yaletown lofts to Coal Harbour high-rises and Gastown storefronts, we keep downtown homes, cars and workplaces spotless, so you can spend more time enjoying the city and less time cleaning it.",
    metaDescription:
      "Condo cleaning, car detailing and office cleaning in Downtown Vancouver: Yaletown, Coal Harbour, the West End and Gastown. Licensed, insured and eco-friendly.",
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
        image: downtownCondos,
        alt: "Downtown condo towers",
        title: "High-rise condos",
        text: "Suites in concierge and strata buildings.",
      },
      {
        tag: "Residential",
        image: downtownTowers,
        alt: "Residential towers near False Creek",
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
    hero: {
      image: cleaningWindows,
      alt: "An S&A cleaner washing a window in a downtown apartment",
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
      image: kitchenCounter,
      alt: "A polished counter in a downtown condo kitchen",
    },
    services: {
      home: "Recurring and deep cleans for condos, lofts and townhomes.",
      car: "Interior and exterior detailing for city cars and weekend getaway vehicles.",
      custodian: "Office suites, retail and strata common areas across the core.",
    },
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
    ],
  },
  {
    slug: "north-vancouver",
    name: "North Vancouver",
    short: "North Van",
    tagline: "Mountain views, rainy days and busy family homes",
    intro:
      "Between the North Shore rain, trail-day mud and family life, homes and cars in North Vancouver work hard. From Lower Lonsdale condos to Lynn Valley family homes, we bring them back to spotless.",
    metaDescription:
      "House cleaning and car detailing in North Vancouver: Lonsdale, Lynn Valley, Deep Cove and Edgemont. Eco-friendly products, background-checked team.",
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
        image: northLowerLonsdale,
        alt: "Condo towers in Lower Lonsdale",
        title: "Lonsdale condos",
        text: "Waterfront and high-rise suites near the Quay.",
      },
      {
        tag: "Residential",
        image: northHouse,
        alt: "A North Vancouver family home among trees",
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
    hero: {
      image: cleaningLivingRoom,
      alt: "An S&A cleaner vacuuming a living room with forest and mountain views",
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
          Icon: CarIcon,
          title: "Cars after the trailhead",
          text: "After a day at Lynn Canyon or on the ski hill, our interior detailing lifts mud, sand and dog hair out of mats, seats and carpets.",
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
      image: carBeforeAfterInterior,
      alt: "Muddy truck floor mats before and after an S&A interior detail",
    },
    services: {
      home: "Recurring, deep and move-in/out cleans from Lonsdale to Deep Cove.",
      car: "Interior detailing that tackles trail mud, sand and pet hair.",
      custodian: "Clean, welcoming offices and stores along Lonsdale and beyond.",
    },
    faqs: [
      {
        question: "Can you get trail mud and dog hair out of my car?",
        answer:
          "That's exactly what our interior detailing is for. We vacuum and deep-clean mats, carpets and seats to lift out mud, sand and pet hair. See our car detailing packages for pricing.",
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
      "House cleaning, move-out cleaning and car detailing in East Vancouver: Commercial Drive, Mount Pleasant, Strathcona and Hastings-Sunrise.",
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
        image: eastCharacterHouse,
        alt: "A character home among the trees",
        title: "Character homes",
        text: "Heritage houses, suites and laneway homes.",
      },
      {
        tag: "Residential",
        image: southPorchHome,
        alt: "A classic Vancouver house with a porch",
        title: "Family houses",
        text: "Detached homes with basement and garden suites.",
      },
      {
        tag: "Commercial",
        image: modernOffice,
        alt: "A clean modern workspace",
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
    hero: { image: livingRoom, alt: "A bright, freshly cleaned East Vancouver living space" },
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
      image: kitchenStove,
      alt: "A gas range polished during an S&A deep clean",
    },
    services: {
      home: "Deep and recurring cleans for character homes, suites and apartments.",
      car: "Detailing for commuter cars, work vans and family vehicles.",
      custodian: "Cafés, studios and small businesses from the Drive to Main Street.",
    },
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
      "Luxury home cleaning, window cleaning and boat and car detailing in West Vancouver: Ambleside, Dundarave, British Properties and Horseshoe Bay.",
    neighbourhoods: ["Ambleside", "Dundarave", "British Properties", "Caulfeild", "Horseshoe Bay"],
    tint: "#eef3f6",
    area: {
      image: westLighthouse,
      alt: "The lighthouse at Point Atkinson in West Vancouver",
      caption: "Point Atkinson Lighthouse in Lighthouse Park",
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
        image: westHillsideHomes,
        alt: "Homes on a forested West Vancouver hillside",
        title: "Hillside view homes",
        text: "Large homes with lots of glass to keep clear.",
      },
      {
        tag: "Residential",
        image: westBlossomStreet,
        alt: "A quiet residential street lined with blossoming trees",
        title: "Quiet residential streets",
        text: "Family homes in British Properties and Caulfeild.",
      },
      {
        tag: "Commercial",
        image: glassHallway,
        alt: "A bright office hallway with glass walls",
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
    hero: {
      image: cleaningWindowView,
      alt: "An S&A cleaner polishing floor-to-ceiling glass overlooking the ocean",
    },
    knowHow: {
      title: "Detail for View Homes",
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
          Icon: BoatIcon,
          title: "Boats, RVs and weekend toys",
          text: "Our detailers go beyond cars, with boat, RV and truck detailing to keep your weekends looking as good as your home.",
        },
      ],
    },
    tip: {
      title: "Salt air, clear views",
      text: "Living by the ocean means salt and moisture build up on glass, railings and vehicles faster. Regular cleans and detailing keep that film from dulling your view and your paintwork.",
      image: marbleIsland,
      alt: "A polished marble kitchen island after an S&A clean",
    },
    services: {
      home: "Deep and recurring cleans for view homes of every size.",
      car: "Detailing for cars and SUVs, plus boats, RVs and trucks.",
      custodian: "Offices, clinics and shops in Ambleside, Dundarave and Park Royal.",
    },
    faqs: [
      {
        question: "Do you clean interior windows?",
        answer:
          "Yes. Interior window cleaning is included in our Diamond plan. On other plans, just ask about adding it to your clean.",
      },
      {
        question: "Can you detail my boat?",
        answer:
          "Yes, we detail boats as well as cars, trucks and RVs. Get in touch with a few details about your boat and we'll send you a quote.",
      },
      {
        question: "Do you clean larger homes?",
        answer:
          "Absolutely. For larger homes we'll recommend a plan or an hourly booking (from $130+, with a 3-hour minimum) based on your home and what you'd like done.",
      },
    ],
  },
  {
    slug: "south-vancouver",
    name: "South Vancouver",
    short: "South Van",
    tagline: "Family homes, new condos and busy commutes",
    intro:
      "From family homes in Sunset and Killarney to the new towers at Oakridge and Marine Gateway, South Vancouver is growing fast. We help households keep up, with cleaning and detailing that fits busy family life.",
    metaDescription:
      "House cleaning, post-construction cleaning and car detailing in South Vancouver: Marpole, Oakridge, Sunset, Victoria-Fraserview and Killarney.",
    neighbourhoods: ["Marpole", "Oakridge", "Sunset", "Victoria-Fraserview", "Killarney"],
    tint: "#f5f3f7",
    area: {
      image: southQePark,
      alt: "Downtown Vancouver and the mountains seen from Queen Elizabeth Park",
      caption: "The view from Queen Elizabeth Park",
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
        image: southFamilyHome,
        alt: "A family home with a hedge and garden",
        title: "Family homes",
        text: "Detached homes in Kerrisdale, Oakridge and Marpole.",
      },
      {
        tag: "Residential",
        image: downtownCondos,
        alt: "A modern condo building",
        title: "New condos",
        text: "New developments near the Canada Line.",
      },
      {
        tag: "Commercial",
        image: meetingRoom,
        alt: "A clean meeting room",
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
    hero: { image: kitchenSink, alt: "A spotless South Vancouver kitchen with garden views" },
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
          Icon: CarIcon,
          title: "Commuter and family cars",
          text: "From daily commuters to the family minivan, our interior and exterior detailing brings cars back to showroom fresh.",
        },
      ],
    },
    tip: {
      title: "Getting the keys to a new build?",
      text: "New homes come with construction dust in vents, cupboards and window tracks. Book a post-construction clean before your furniture arrives: it's far easier to reach every corner in an empty home.",
      image: carBeforeAfterSeats,
      alt: "Car seats before and after an S&A interior detail",
    },
    services: {
      home: "Recurring, deep and post-construction cleans for homes and condos.",
      car: "Detailing for commuter cars, SUVs and family minivans.",
      custodian: "Offices, clinics and shops along Cambie, Fraser and Victoria Drive.",
    },
    faqs: [
      {
        question: "Do you clean new condos before move-in?",
        answer:
          "Yes. Our post-construction and move-in cleans remove construction dust from floors, cabinets, window tracks and fixtures, so your new home is ready to live in.",
      },
      {
        question: "Can you detail a family minivan?",
        answer:
          "Of course. Our detailing packages are priced by vehicle size, including large SUVs and minivans. See the car detailing page for current prices.",
      },
      {
        question: "Do you offer recurring cleaning plans?",
        answer:
          "Yes. Choose from our Silver, Gold and Diamond plans, or book hourly cleaning from $130+ with a 3-hour minimum.",
      },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
