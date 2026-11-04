import { stock, type StockPhoto } from "@/content/stock-photos";

/**
 * Copy and photos for the six service pages added for SEO. The pages render
 * from this data through `ServicePage`
 * (src/components/sections/service-page.tsx).
 *
 * Rules (docs/HANDOFF.md section 5, docs/seo/keywords.md): no invented facts, prices only
 * from src/content/pricing.ts or the hourly rate the site already shows (from $130+,
 * 3-hour minimum), never claim after-hours work, and always say Vancouver, BC.
 * Everything marked TO CONFIRM was written by us and needs the client's
 * approval (listed in docs/seo/service-pages-notes.md).
 */

export type IconName =
  | "home"
  | "building"
  | "key"
  | "calendar"
  | "box"
  | "hardhat"
  | "luggage"
  | "repeat"
  | "users"
  | "store"
  | "sparkles"
  | "clock"
  | "clipboard"
  | "brush";

export type ServiceSlug =
  | "deep-cleaning"
  | "move-out-cleaning"
  | "airbnb-cleaning"
  | "post-construction-cleaning"
  | "office-cleaning"
  | "strata-cleaning";

export type ServicePageData = {
  slug: ServiceSlug;
  path: string;
  /** Home theme (teal) for residential pages, custodian theme (navy) for commercial. */
  theme: "home" | "custodian";
  /** Page title before the " | S&A Cleaning Group" suffix. */
  metaTitle: string;
  /** 110-160 characters. */
  metaDescription: string;
  breadcrumbName: string;
  schema: { name: string; serviceType: string; description: string };
  hero: {
    image: StockPhoto;
    /** Extra classes for the hero photo, e.g. to keep a face in frame. */
    imageClassName?: string;
    tagline: string;
    title: [string, string];
    description: string;
  };
  intro: {
    eyebrow: string;
    /** A question, so the direct answer below it can be quoted. */
    title: string;
    /** The 40-60 word direct answer. */
    answer: string;
    highlights: string[];
  };
  photoRows: {
    icon: IconName;
    eyebrow: string;
    title: string;
    text: string;
    points: string[];
    image: StockPhoto;
  }[];
  audience: {
    title: string;
    description: string;
    items: { icon: IconName; title: string; text: string }[];
  };
  scope: {
    title: string;
    description: string;
    groups: { title: string; items: string[] }[];
  };
  steps: { title: string; text: string }[];
  pricing: {
    kind: "hourly" | "quote";
    title: string;
    text: string;
    note: string;
  };
  /** Related service pages, from `servicePages` or the two existing ones. */
  relatedPaths: string[];
  /** Blog post slugs that exist in src/content/blog.ts. */
  relatedPosts: string[];
  faqs: { question: string; answer: string }[];
  cta: { title: string; text: string; primaryLabel: string };
};

/** Short names and blurbs for the "related services" cards. */
export const serviceLinks: Record<string, { name: string; blurb: string }> = {
  "/home-cleaning": {
    name: "Home Cleaning",
    blurb: "Recurring plans from $150 a month, or hourly from $130+.",
  },
  "/deep-cleaning": {
    name: "Deep Cleaning",
    blurb: "A top-to-bottom clean for the places a regular visit skips.",
  },
  "/move-out-cleaning": {
    name: "Move-Out Cleaning",
    blurb: "An empty-home clean for your last day, or your first.",
  },
  "/airbnb-cleaning": {
    name: "Airbnb Cleaning",
    blurb: "Cleaning between guests for short-term rental hosts.",
  },
  "/post-construction-cleaning": {
    name: "Post-Construction Cleaning",
    blurb: "Fine dust and residue cleared after a renovation or build.",
  },
  "/custodian-services": {
    name: "Commercial & Custodian Cleaning",
    blurb: "Offices, retail, strata and other commercial spaces.",
  },
  "/office-cleaning": {
    name: "Office Cleaning",
    blurb: "Desks, kitchens, washrooms and floors on your schedule.",
  },
  "/strata-cleaning": {
    name: "Strata & Condo Building Cleaning",
    blurb: "Lobbies, hallways, stairwells and amenity rooms.",
  },
};

// Answers to "is this Vancouver, Washington?" and the quote hand-off are shared, so every
// page words them the same way.
const notWashington = {
  question: "Is S&A in Vancouver, BC or Vancouver, Washington?",
  answer:
    "Vancouver, British Columbia, Canada. S&A Cleaning Group serves Greater Vancouver, including Downtown, North, East, West and South Vancouver. We do not serve Vancouver, Washington. If you're nearby and not sure we cover your address, send us a message.",
};

const trustedTeam = {
  question: "Are your cleaners insured and background-checked?",
  answer:
    "Yes. S&A Cleaning Group is fully licensed and insured, and every member of our team completes a criminal and background check before employment.",
};

export const servicePages: Record<ServiceSlug, ServicePageData> = {
  // ---------------------------------------------------------------- deep cleaning
  "deep-cleaning": {
    slug: "deep-cleaning",
    path: "/deep-cleaning",
    theme: "home",
    metaTitle: "Deep Cleaning Service in Vancouver, BC",
    // TO CONFIRM: "inside appliances" matches the Home Cleaning page and Diamond plan,
    // but the client should confirm the deep-clean checklist.
    metaDescription:
      "Top-to-bottom deep cleaning for Vancouver homes: baseboards, inside appliances, bathrooms and kitchens. Hourly from $130, 3-hour minimum. Request a quote.",
    breadcrumbName: "Deep Cleaning",
    schema: {
      name: "Deep Cleaning in Vancouver, BC",
      serviceType: "Deep cleaning",
      description:
        "Top-to-bottom deep cleaning for homes, condos and apartments across Greater Vancouver, BC: baseboards, inside cabinets and appliances, bathrooms and kitchens, with eco-friendly, pet-friendly products.",
    },
    hero: {
      image: stock.deepHero,
      tagline: "A fresh start for your whole home",
      title: ["Deep Cleaning Service", "in Vancouver, BC"],
      description:
        "Baseboards to bathrooms, inside the oven to the tops of the doors, for homes across Greater Vancouver.",
    },
    intro: {
      eyebrow: "Deep cleaning",
      title: "What Does a Deep Clean Include?",
      answer:
        "A deep clean goes beyond a regular visit into the places that collect grime slowly: baseboards, door frames, light switches, inside cabinets, ovens and fridges, and detailed scrubbing of bathrooms and kitchens. S&A deep cleans homes, condos and apartments across Vancouver, BC and Greater Vancouver.",
      highlights: [
        "Hourly cleaning from $130+ with a 3-hour minimum",
        "Inside cabinets, oven and fridge, not just the surfaces",
        "Eco-friendly, pet-friendly products",
        "Fully licensed and insured",
      ],
    },
    photoRows: [
      {
        icon: "sparkles",
        eyebrow: "Kitchens",
        title: "The Hardest-Working Room, Reset",
        text: "Kitchens collect grease and grime in places a regular clean doesn't reach. A deep clean works through them one by one.",
        points: [
          "Inside the oven, racks and range hood",
          "Inside and outside cabinets and drawers",
          "Fridge, freezer and microwave cleaned inside",
          "Sinks, taps and backsplash scrubbed",
        ],
        image: stock.deepKitchen,
      },
      {
        icon: "home",
        eyebrow: "Appliances & details",
        title: "The Spots Everyone Skips",
        text: "Ovens, trim, doors and switches are what make a home feel properly clean, and what a quick wipe leaves behind.",
        points: [
          "Oven interior sprayed and wiped down",
          "Baseboards, door frames and doors wiped",
          "Light switches and door handles cleaned",
          "Window ledges and sills dusted and wiped",
        ],
        image: stock.deepOven,
      },
    ],
    audience: {
      title: "When a Deep Clean Makes Sense",
      description: "Most homes benefit from one deep clean to reset everything.",
      items: [
        {
          icon: "sparkles",
          title: "A seasonal reset",
          text: "Spring cleaning, or a fresh start before the holidays.",
        },
        {
          icon: "repeat",
          title: "Starting with a cleaner",
          text: "A deep clean first, then regular visits to keep it that way.",
        },
        {
          icon: "key",
          title: "Moving in",
          text: "Start in a new condo, apartment or house that has been properly cleaned.",
        },
        {
          icon: "users",
          title: "Before or after guests",
          text: "Get ready for a big gathering, or reset your home afterwards.",
        },
      ],
    },
    scope: {
      title: "A Typical Deep Cleaning Checklist",
      description:
        "A guide to what we cover. Tell us what matters most in your home and we'll plan the time around it.",
      groups: [
        {
          title: "Kitchen",
          items: [
            "Clean inside the oven and racks",
            "Wipe inside the fridge and freezer",
            "Degrease the range hood and stove top",
            "Wipe inside and outside cabinets",
            "Scrub sinks, taps and backsplash",
          ],
        },
        {
          title: "Bathrooms",
          items: [
            "Scrub tubs, showers and tiles",
            "Disinfect toilets, inside and out",
            "Polish chrome fixtures and mirrors",
            "Wipe vanities and sinks",
            "Mop floors",
          ],
        },
        {
          title: "Bedrooms & living areas",
          items: [
            "Dust furniture, lampshades and frames",
            "Wipe baseboards and door frames",
            "Clean light switches and door handles",
            "Dust window ledges and sills",
            "Vacuum and mop floors",
          ],
        },
        {
          title: "Throughout the home",
          items: [
            "Clean interior windows",
            "Dust light fixtures within reach",
            "Empty garbage and recycling",
            "Tidy as we go",
          ],
        },
      ],
    },
    steps: [
      {
        title: "Tell us about your home",
        text: "Share its size, condition and what you'd like us to focus on.",
      },
      {
        title: "Book your time",
        text: "Choose a day that suits you. Deep cleans are booked by the hour.",
      },
      {
        title: "We clean top to bottom",
        text: "Our background-checked team arrives with professional equipment and eco-friendly products.",
      },
      {
        title: "Stay fresh",
        text: "Add regular visits afterwards, so your home stays that way.",
      },
    ],
    pricing: {
      kind: "hourly",
      title: "Deep Cleaning Is Booked by the Hour",
      text: "Book our team by the hour and put the time where your home needs it most. Bigger or busier homes simply take more hours.",
      note: "Prefer regular visits afterwards? Silver, Gold and Diamond plans are on the Home Cleaning page.",
    },
    relatedPaths: ["/home-cleaning", "/move-out-cleaning", "/post-construction-cleaning"],
    relatedPosts: ["deep-clean-vs-regular-clean"],
    faqs: [
      {
        question: "How much does deep cleaning cost in Vancouver?",
        answer:
          "S&A books deep cleans by the hour, from $130+ with a 3-hour minimum. The total depends on how large your home is, how long since it was last cleaned top to bottom and what you want included. Send us the details and we'll quote the time it needs.",
      },
      {
        question: "What is the difference between a deep clean and a regular clean?",
        answer:
          "A regular clean maintains a home that is already in good shape: floors, surfaces, kitchens and bathrooms. A deep clean adds the slow-to-build-up places, such as baseboards, inside cabinets, ovens and fridges, and detailed scrubbing of tubs, showers and tiles.",
      },
      {
        question: "Do you clean inside the oven and fridge?",
        // TO CONFIRM: matches the Home Cleaning page and Diamond plan wording.
        answer:
          "Yes, inside the oven and fridge are part of a deep clean. If there is anything you would like us to leave alone, or spend extra time on, tell us when you book.",
      },
      {
        question: "How often should I book a deep clean?",
        answer:
          "Many households book one when they start with a cleaner, then once or twice a year as a seasonal reset, with regular cleans in between. Your home, family and routines decide the rhythm, and we are happy to talk it through.",
      },
      {
        question: "Do I need to be home during a deep clean?",
        answer:
          "No. Many clients are at work while we clean. Let us know how you would like to handle access when you book, and come home to a fresh space.",
      },
      {
        question: "Do you bring your own supplies and equipment?",
        answer:
          "Yes. Our team arrives with professional equipment and our local, eco-friendly products, which are also pet-friendly. If you would like us to use a product of your own, just let us know.",
      },
      trustedTeam,
      notWashington,
    ],
    cta: {
      title: "Ready for a Deep Clean?",
      text: "Tell us about your home and book a time that suits you.",
      primaryLabel: "Book a deep clean",
    },
  },

  // ---------------------------------------------------------------- move-out cleaning
  "move-out-cleaning": {
    slug: "move-out-cleaning",
    path: "/move-out-cleaning",
    theme: "home",
    metaTitle: "Move-Out Cleaning in Vancouver, BC",
    // Does not promise a deposit refund (docs/seo/keywords.md).
    metaDescription:
      "Move-out and move-in cleaning for Vancouver apartments, condos and houses. Help leave your rental clean for the final inspection. Hourly from $130.",
    breadcrumbName: "Move-Out Cleaning",
    schema: {
      name: "Move-Out and Move-In Cleaning in Vancouver, BC",
      serviceType: "Move-out cleaning",
      description:
        "Move-out and move-in cleaning for apartments, condos and houses across Greater Vancouver, BC: an empty-home clean including inside cabinets, closets and appliances.",
    },
    hero: {
      image: stock.moveOutHero,
      tagline: "Hand over the keys with confidence",
      title: ["Move-Out Cleaning", "in Vancouver, BC"],
      description:
        "An empty-home clean for apartments, condos and houses, on your last day or your first.",
    },
    intro: {
      eyebrow: "Move-out cleaning",
      title: "What Is Move-Out Cleaning?",
      answer:
        "Move-out cleaning is a thorough clean of an empty home, done after the movers leave: inside cabinets, closets and appliances, bathrooms, floors and every room. S&A cleans empty apartments, condos and houses across Vancouver, BC and Greater Vancouver, and also cleans for move-ins.",
      highlights: [
        "Inside cabinets, closets and appliances",
        "Hourly cleaning from $130+ with a 3-hour minimum",
        "Move-in cleans too, before you unpack",
        "Fully licensed and insured",
      ],
    },
    photoRows: [
      {
        icon: "box",
        eyebrow: "Empty-home clean",
        title: "Every Corner, Once the Movers Have Gone",
        text: "An empty home is faster to clean and much easier to get right. We work room by room, from top to bottom.",
        points: [
          "Floors vacuumed and mopped, including where furniture stood",
          "Inside closets and shelves wiped",
          "Baseboards, door frames and light switches cleaned",
          "Window sills and tracks wiped",
        ],
        image: stock.moveOutRug,
      },
      {
        icon: "sparkles",
        eyebrow: "Kitchens & bathrooms",
        title: "The Rooms Inspectors Look At Closely",
        text: "Kitchens and bathrooms take the most time at the end of a tenancy, so we spend the most time there.",
        points: [
          "Inside the oven, fridge and cabinets",
          "Range hood and stove top degreased",
          "Tubs, tiles, sinks and taps scrubbed",
          "Toilets cleaned inside and out",
        ],
        image: stock.moveOutSweeping,
      },
    ],
    audience: {
      title: "Who Move-Out Cleaning Is For",
      description: "Anyone handing over a space, or about to move into one.",
      items: [
        {
          icon: "key",
          title: "Renters",
          text: "Leave your apartment or condo clean for the final inspection.",
        },
        {
          icon: "home",
          title: "Homeowners selling",
          text: "Hand a clean house to its next owners.",
        },
        {
          icon: "box",
          title: "People moving in",
          text: "Start in a home that has been cleaned before the boxes arrive.",
        },
        {
          icon: "building",
          title: "Landlords & property managers",
          text: "Turn a unit over between tenants.",
        },
      ],
    },
    scope: {
      title: "A Typical Move-Out Cleaning Checklist",
      description:
        "A guide to what we cover. Tell us anything specific, such as a storage locker or balcony.",
      groups: [
        {
          title: "Kitchen",
          items: [
            "Clean inside the oven, racks and drawer",
            "Empty and wipe out the fridge and freezer",
            "Degrease the range hood and stove top",
            "Wipe inside and outside every cabinet and drawer",
            "Scrub the sink, taps and backsplash",
          ],
        },
        {
          title: "Bathrooms",
          items: [
            "Descale taps, showerheads and glass",
            "Scrub the tub, tiles and grout",
            "Clean the toilet inside and out",
            "Wipe inside the vanity and medicine cabinet",
            "Polish mirrors",
          ],
        },
        {
          title: "Every room",
          items: [
            "Wipe inside closets and shelves",
            "Clean baseboards, door frames and switches",
            "Wipe window sills and tracks",
            "Gently spot-clean marks on walls",
            "Vacuum and mop all floors",
          ],
        },
        {
          title: "Easy to forget",
          items: [
            "Sweep the balcony and wipe railings",
            "Wipe the inside of the front door",
            "Dust light fixtures within reach",
            "Entryway closet",
            "Garbage and recycling emptied",
          ],
        },
      ],
    },
    steps: [
      {
        title: "Tell us about the home",
        text: "Share its size, your move date and anything that needs extra attention.",
      },
      {
        title: "Pick a time",
        text: "Book for after the movers leave and before your inspection or handover.",
      },
      {
        title: "We clean it empty",
        text: "Our background-checked team cleans every room, top to bottom.",
      },
      {
        title: "Hand over the keys",
        text: "Walk out knowing the home has been properly cleaned.",
      },
    ],
    pricing: {
      kind: "hourly",
      title: "Move-Out Cleaning Is Booked by the Hour",
      text: "A larger home or a longer tenancy takes more time. Tell us the size and condition and we'll help you plan the hours.",
      note: "A thorough clean helps you leave the home in good order. It can't guarantee what your landlord decides about your deposit.",
    },
    relatedPaths: ["/deep-cleaning", "/home-cleaning", "/post-construction-cleaning"],
    relatedPosts: ["move-out-cleaning-checklist-vancouver"],
    faqs: [
      {
        question: "How much does move-out cleaning cost in Vancouver?",
        answer:
          "S&A books move-out cleans by the hour, from $130+ with a 3-hour minimum. The total depends on the size of the home, its condition and what you need included, such as inside appliances and cabinets. Send us the details and we'll estimate the time.",
      },
      {
        question: "What does a move-out cleaning include?",
        answer:
          "A move-out clean covers every room of the empty home: inside the oven, fridge and cabinets, bathrooms, closets, baseboards, window sills, doors and floors. Our checklist above is a guide, and you can ask us to add or focus on anything specific.",
      },
      {
        question: "When should I book my move-out clean?",
        answer:
          "After the movers have gone, and before your move-out inspection or handover. An empty home is faster to clean and easier to get right.",
      },
      {
        question: "Will cleaning get my damage deposit back?",
        answer:
          "We can't promise that. Your landlord decides what happens with your deposit. In BC, landlords and tenants inspect the unit together at the end of a tenancy and record its condition, and a thorough clean helps you leave the home in good order.",
      },
      {
        question: "Do you also do move-in cleaning?",
        answer:
          "Yes. A move-in clean gets a new apartment, condo or house properly cleaned before you unpack, so you start in a fresh space. Book it for after the previous occupants leave and before your furniture arrives.",
      },
      {
        question: "Do I need to be there while you clean?",
        answer:
          "No. Let us know how you would like to handle access, for example a lockbox or concierge, when you book. We'll plan it with you.",
      },
      trustedTeam,
      notWashington,
    ],
    cta: {
      title: "Moving Out Soon?",
      text: "Tell us your move date and the size of your home, and we'll help you plan the clean.",
      primaryLabel: "Book a move-out clean",
    },
  },

  // ---------------------------------------------------------------- airbnb cleaning
  "airbnb-cleaning": {
    slug: "airbnb-cleaning",
    path: "/airbnb-cleaning",
    theme: "home",
    metaTitle: "Airbnb & Short-Term Rental Cleaning in Vancouver, BC",
    // TO CONFIRM: linen changes and restocking are NOT mentioned until the client
    // confirms them.
    metaDescription:
      "Turnover cleaning for Airbnb and short-term rentals in Vancouver. Reliable, insured cleaners between guests, on a schedule that fits your bookings.",
    breadcrumbName: "Airbnb Cleaning",
    schema: {
      name: "Airbnb and Short-Term Rental Cleaning in Vancouver, BC",
      serviceType: "Short-term rental cleaning",
      description:
        "Turnover cleaning between guests for Airbnb and vacation rental hosts across Greater Vancouver, BC, on a schedule that fits your bookings.",
    },
    hero: {
      image: stock.airbnbHero,
      tagline: "Every guest arrives to a spotless home",
      title: ["Airbnb & Short-Term", "Rental Cleaning in Vancouver, BC"],
      description:
        "Reliable, insured cleaners between guests, planned around your booking calendar.",
    },
    intro: {
      eyebrow: "Airbnb cleaning",
      title: "What Is Airbnb Turnover Cleaning?",
      answer:
        "Airbnb turnover cleaning is the clean between one guest leaving and the next arriving, so every stay starts in a spotless, welcoming home. S&A cleans Airbnb and short-term rentals across Vancouver, BC and Greater Vancouver, with a licensed, insured, background-checked team.",
      highlights: [
        "Cleans planned around your bookings",
        "Hourly cleaning from $130+ with a 3-hour minimum",
        "Licensed, insured and background-checked team",
        "Eco-friendly, pet-friendly products",
      ],
    },
    photoRows: [
      {
        icon: "luggage",
        eyebrow: "Beds & bedrooms",
        title: "Fresh Rooms for the Next Check-In",
        text: "Guests judge a stay by the bedroom first. We reset each one so it feels cared for.",
        // TO CONFIRM: whether S&A supplies or washes linen. Bed-making is on the Silver plan;
        // linen laundry and restocking are not claimed.
        points: [
          "Beds made with the linen you provide",
          "Furniture and surfaces dusted",
          "Floors vacuumed and mopped",
          "Mirrors and glass cleaned streak-free",
        ],
        image: stock.airbnbSheet,
      },
      {
        icon: "sparkles",
        eyebrow: "Kitchens & bathrooms",
        title: "Guest-Ready From Door to Counter",
        text: "Kitchens and bathrooms get the most attention between stays, since that's where guests look first.",
        points: [
          "Counters, sinks and appliance fronts wiped",
          "Bathrooms disinfected top to bottom",
          "Toilets, tubs and showers cleaned",
          "Garbage and recycling emptied",
        ],
        image: stock.airbnbKitchen,
      },
    ],
    audience: {
      title: "Who Airbnb Cleaning Is For",
      description: "Hosts who would rather spend time on their guests than on cleaning.",
      items: [
        {
          icon: "luggage",
          title: "Airbnb hosts",
          text: "A condo, suite or house you rent out to guests.",
        },
        {
          icon: "building",
          title: "Property managers",
          text: "Several units that need cleaning on a schedule.",
        },
        {
          icon: "home",
          title: "Occasional hosts",
          text: "A spare suite or a home you rent for part of the year.",
        },
        {
          icon: "calendar",
          title: "Co-hosts",
          text: "People looking after a rental on behalf of its owner.",
        },
      ],
    },
    scope: {
      title: "A Typical Turnover Checklist",
      description:
        "A guide to what we cover between guests. Tell us what your rental needs and we'll agree a checklist.",
      groups: [
        {
          title: "Bedrooms",
          items: [
            "Make the beds with your linen",
            "Dust furniture and surfaces",
            "Wipe light switches and door handles",
            "Vacuum and mop floors",
            "Mirrors cleaned and polished",
          ],
        },
        {
          title: "Kitchen",
          items: [
            "Wipe counters and backsplash",
            "Clean and polish sinks and taps",
            "Wipe appliance exteriors",
            "Wipe oven front and stove top",
            "Empty garbage and recycling",
          ],
        },
        {
          title: "Bathrooms",
          items: [
            "Disinfect and clean toilets",
            "Wipe vanities, sinks and taps",
            "Wipe and scrub tub and shower",
            "Mirrors and fixtures polished",
            "Mop floors",
          ],
        },
        {
          title: "Living areas",
          items: [
            "Dust furniture and electronics",
            "Vacuum sofas",
            "Tidy and organize the space",
            "Entryway swept and wiped",
            "Floors vacuumed and mopped",
          ],
        },
      ],
    },
    steps: [
      {
        title: "Tell us about your rental",
        text: "Share its size, location and how often it turns over.",
      },
      {
        title: "Plan around your bookings",
        text: "We agree a schedule that fits your calendar and your check-out times.",
      },
      {
        title: "We clean between guests",
        text: "Our team resets the space to your checklist.",
      },
      {
        title: "Repeat as bookings come",
        text: "The same team, the same standard, stay after stay.",
      },
    ],
    pricing: {
      kind: "hourly",
      title: "Booked by the Hour",
      // TO CONFIRM: that hourly pricing and the 3-hour minimum apply to turnovers, and
      // whether a recurring turnover rate exists.
      text: "Book our team by the hour for each turnover. Larger rentals take more hours, so tell us the number of bedrooms and bathrooms and we'll help plan the time.",
      note: "Hosting several units or a regular calendar? Send us your schedule and we'll plan it with you.",
    },
    relatedPaths: ["/home-cleaning", "/deep-cleaning", "/move-out-cleaning"],
    relatedPosts: [],
    faqs: [
      {
        question: "How much does Airbnb cleaning cost in Vancouver?",
        answer:
          "S&A books cleaning by the hour, from $130+ with a 3-hour minimum. Your total depends on the size of the rental and how it has been left. Tell us the number of bedrooms and bathrooms and we'll help you plan the time for each turnover.",
      },
      {
        question: "What is included in an Airbnb turnover clean?",
        answer:
          "Bedrooms, kitchen, bathrooms and living areas are reset between guests: beds made, surfaces dusted, kitchens and bathrooms cleaned and disinfected, floors vacuumed and mopped, and garbage taken out. Tell us if your rental needs anything else, and we'll agree a checklist.",
      },
      {
        question: "Can you work around my check-out and check-in times?",
        answer:
          "Yes. Share your booking calendar and your usual check-out and check-in times, and we'll plan visits to fit between guests. Tell us about tight turnarounds when you book, so we can plan the time properly.",
      },
      {
        question: "Do you handle linens and restocking?",
        // TO CONFIRM with the client before offering laundry or restocking.
        answer:
          "Our turnover clean includes making the beds with the linen you provide. If you'd like help beyond that, such as laundry or restocking supplies, please ask us when you enquire and we'll let you know what we can do.",
      },
      {
        question: "Do I need to be there for each turnover?",
        answer:
          "No. Many hosts use a lockbox or smart lock. Tell us how you handle access when you book, and we'll plan it with you.",
      },
      {
        question: "Do you clean short-term rentals across Greater Vancouver?",
        answer:
          "We clean homes across Greater Vancouver, including Downtown, North, East, West and South Vancouver. Send us your rental's neighbourhood and we'll confirm.",
      },
      trustedTeam,
      notWashington,
    ],
    cta: {
      title: "Hosting in Vancouver?",
      text: "Tell us about your rental and how often it turns over, and we'll plan the cleans around your bookings.",
      primaryLabel: "Book a turnover clean",
    },
  },

  // ---------------------------------------------------------------- post-construction
  "post-construction-cleaning": {
    slug: "post-construction-cleaning",
    path: "/post-construction-cleaning",
    theme: "home",
    metaTitle: "Post-Construction Cleaning in Vancouver, BC",
    metaDescription:
      "Post-construction and post-renovation cleaning in Vancouver. Dust, debris residue and detail cleaning so the space is ready to hand over or move into.",
    breadcrumbName: "Post-Construction Cleaning",
    schema: {
      name: "Post-Construction Cleaning in Vancouver, BC",
      serviceType: "Post-construction cleaning",
      description:
        "Post-construction and post-renovation cleaning for homes, new condos and commercial spaces across Greater Vancouver, BC: fine dust, debris and residue cleared so the space is ready to live in.",
    },
    hero: {
      image: stock.postConstructionHero,
      tagline: "From finished build to move-in ready",
      title: ["Post-Construction Cleaning", "in Vancouver, BC"],
      description:
        "Fine dust, debris and residue cleared after your renovation or new build, across Greater Vancouver.",
    },
    intro: {
      eyebrow: "Post-construction cleaning",
      title: "What Is Post-Construction Cleaning?",
      answer:
        "Post-construction cleaning is the detailed clean after renovation or building work: fine drywall and sawdust dust, debris residue and marks, cleared from every surface so the space is ready to hand over or move into. S&A cleans renovated homes, new condos and commercial spaces in Vancouver, BC and Greater Vancouver.",
      highlights: [
        "For renovated homes, new condos and commercial spaces",
        "Fine dust wiped from every surface, not smeared around",
        "Hourly cleaning from $130+ with a 3-hour minimum",
        "Fully licensed and insured",
      ],
    },
    photoRows: [
      {
        icon: "hardhat",
        eyebrow: "Dust & debris",
        title: "Fine Dust Gets Everywhere",
        text: "Drywall and sawdust are much finer than everyday dust. We take more passes, with the right tools, so it's removed rather than moved.",
        points: [
          "Surfaces dusted top to bottom, including ledges and trim",
          "Floors vacuumed and washed, with extra passes where needed",
          "Vents, light fixtures and switches wiped down",
          "Stickers, labels and residue removed from fixtures and appliances",
        ],
        image: stock.postConstructionMop,
      },
      {
        icon: "sparkles",
        eyebrow: "Detail cleaning",
        title: "Ready to Live In",
        text: "The detailed clean is a separate step from the builder's sweep. It's what makes a finished space feel finished.",
        points: [
          "Inside cabinets, drawers and closets wiped",
          "Window glass, frames and tracks cleaned",
          "Kitchen and bathroom fixtures cleaned and polished",
          "Final wipe of surfaces before you move in",
        ],
        image: stock.postConstructionKitchen,
      },
    ],
    audience: {
      title: "Who Post-Construction Cleaning Is For",
      description: "Anyone handing over, or moving into, a freshly built or renovated space.",
      items: [
        {
          icon: "home",
          title: "Homeowners after a renovation",
          text: "Kitchen, bathroom or whole-home projects.",
        },
        {
          icon: "hardhat",
          title: "Builders & renovators",
          text: "A clean finish before you hand over the keys.",
        },
        {
          icon: "building",
          title: "New condo owners",
          text: "A fresh new unit that needs a proper first clean.",
        },
        {
          icon: "store",
          title: "Commercial spaces",
          text: "Offices and shops finished or refitted.",
        },
      ],
    },
    scope: {
      title: "A Typical Post-Construction Checklist",
      description:
        "A guide to what we cover. Every project is different, so we plan the checklist with you.",
      groups: [
        {
          title: "Dust control",
          items: [
            "Dust every surface, top to bottom",
            "Wipe ledges, trim and baseboards",
            "Wipe down vents and light fixtures",
            "Wipe switches and outlets",
            "Wipe doors and door frames",
          ],
        },
        {
          title: "Kitchens & bathrooms",
          items: [
            "Wipe inside cabinets and drawers",
            "Clean counters, sinks and fixtures",
            "Clean tubs, showers and tiles",
            "Remove stickers and residue from appliances",
            "Polish mirrors and glass",
          ],
        },
        {
          title: "Windows & glass",
          items: [
            "Clean window glass and frames",
            "Clean window tracks and sills",
            "Wipe glass doors and partitions",
            "Wipe glass shower doors",
            "Final polish",
          ],
        },
        {
          title: "Floors",
          items: [
            "Vacuum all floors",
            "Wash hard floors",
            "Extra passes where dust is heavy",
            "Edges and corners detailed",
            "Final check before handover",
          ],
        },
      ],
    },
    steps: [
      {
        title: "Tell us about the project",
        text: "Share the size of the space, what was built and your handover date.",
      },
      {
        title: "Time it after the trades",
        text: "We plan the clean for after the trades finish and before the furniture arrives.",
      },
      {
        title: "We clean top to bottom",
        text: "Dust comes down first, then surfaces, then floors.",
      },
      {
        title: "Ready to hand over",
        text: "The space is ready to hand over or move into.",
      },
    ],
    pricing: {
      kind: "hourly",
      title: "Priced by the Size and Condition",
      // TO CONFIRM: there is no verified local price for post-construction cleaning. Only the
      // hourly rate the site already shows is used; whether it applies to builds needs the client.
      text: "Post-construction cleans depend on the size of the space, how much dust there is and how easy the access is. Book by the hour, or send us the details and we'll help you plan the time.",
      note: "Large builds and commercial spaces: tell us about the project and we'll talk it through.",
    },
    relatedPaths: ["/deep-cleaning", "/move-out-cleaning", "/custodian-services"],
    relatedPosts: ["post-construction-cleaning-guide"],
    faqs: [
      {
        question: "What is post-construction cleaning?",
        answer:
          "It is the detailed clean after renovation or building work. The builder clears debris, and we remove what is left: fine drywall and sawdust dust, residue and marks, from every surface, cabinet, window and floor, so the space is ready to move into.",
      },
      {
        question: "How much does post-construction cleaning cost in Vancouver?",
        answer:
          "It depends on the size of the space, how dusty it is and how easy the access is. S&A books by the hour, from $130+ with a 3-hour minimum. Send us the details of the project and we'll help you estimate the time.",
      },
      {
        question: "When should the final clean happen?",
        answer:
          "Once the trades have finished, and before you move furniture in. Empty rooms mean every corner gets done, and your new furniture won't start life covered in drywall dust. We'll plan the timing around your project.",
      },
      {
        question: "How do you get drywall dust out of a house?",
        answer:
          "Drywall dust is very fine, so a quick wipe tends to smear it and an ordinary vacuum can put it back in the air. We work top to bottom with microfibre cloths and vacuums with fine filters, and make extra passes where the dust is heavy.",
      },
      {
        question: "Do you clean after commercial renovations too?",
        answer:
          "Yes. We clean renovated homes, new condos and commercial spaces. Tell us about the space and what was done, and we'll plan the clean.",
      },
      {
        question: "Will you damage my new finishes?",
        answer:
          "We choose products to suit each surface, because the wrong product can damage natural stone or new hardwood. If you have a surface that needs special care, tell us when you book.",
      },
      trustedTeam,
      notWashington,
    ],
    cta: {
      title: "Renovation Finished?",
      text: "Tell us about your project and handover date, and we'll plan the clean.",
      primaryLabel: "Book a post-construction clean",
    },
  },

  // ---------------------------------------------------------------- office cleaning
  "office-cleaning": {
    slug: "office-cleaning",
    path: "/office-cleaning",
    theme: "custodian",
    metaTitle: "Office Cleaning Services in Vancouver, BC",
    metaDescription:
      "Reliable office cleaning in Vancouver: desks, kitchens, washrooms and floors on a daily, weekly or custom schedule. Request a quote from S&A.",
    breadcrumbName: "Office Cleaning",
    schema: {
      name: "Office Cleaning in Vancouver, BC",
      serviceType: "Office cleaning",
      description:
        "Office cleaning across Greater Vancouver, BC: desks, meeting rooms, kitchens, washrooms and floors, on a daily, weekly or custom schedule, quoted for each space.",
    },
    hero: {
      image: stock.officeHero,
      tagline: "Clean, healthy workplaces",
      title: ["Office Cleaning Services", "in Vancouver, BC"],
      description:
        "Desks, kitchens, washrooms and floors, cleaned on a schedule that fits your business.",
    },
    intro: {
      eyebrow: "Office cleaning",
      title: "What Is Included in Office Cleaning?",
      answer:
        "Office cleaning covers the spaces your team and visitors use every day: desks and work areas, meeting rooms, reception, shared kitchens, washrooms and floors, plus garbage and recycling. S&A cleans offices across Vancouver, BC and Greater Vancouver on a daily, weekly or custom schedule.",
      highlights: [
        "A checklist built around your space",
        "Daily, weekly or custom visits",
        "Hospital-grade, eco-friendly products",
        "Fully licensed and insured, background-checked team",
      ],
    },
    photoRows: [
      {
        icon: "building",
        eyebrow: "Work areas",
        title: "Workspaces Your Team Enjoys",
        text: "A clean office is a more comfortable, more productive one. Desks, meeting rooms and reception are kept fresh, so your team can focus.",
        points: [
          "Desks, shelves and meeting tables dusted and wiped",
          "Glass partitions and doors kept smudge-free",
          "Garbage, recycling and compost emptied",
          "Carpets vacuumed and hard floors mopped",
        ],
        image: stock.officeVacuum,
      },
      {
        icon: "sparkles",
        eyebrow: "Kitchens & washrooms",
        title: "Shared Spaces, Done Properly",
        text: "Break rooms and washrooms are where people notice a missed clean first. We disinfect them with hospital-grade, eco-friendly products.",
        points: [
          "Kitchen counters, tables and sinks wiped",
          "Washrooms cleaned and disinfected",
          "Soap and paper supplies refilled",
          "High-touch surfaces disinfected",
        ],
        image: stock.officeMop,
      },
    ],
    audience: {
      title: "Offices We Clean",
      description: "From a single floor to a busy shared workspace.",
      items: [
        {
          icon: "building",
          title: "Small and mid-sized offices",
          text: "Regular cleaning for teams of any size.",
        },
        {
          icon: "users",
          title: "Co-working spaces",
          text: "Shared desks, meeting rooms and kitchens.",
        },
        {
          icon: "store",
          title: "Studios & showrooms",
          text: "Spaces where first impressions matter.",
        },
        {
          icon: "clipboard",
          title: "Property & facility managers",
          text: "A consistent clean across your offices.",
        },
      ],
    },
    scope: {
      title: "A Typical Office Cleaning Checklist",
      description:
        "Your checklist is built around your space, so you can add, remove or adjust anything.",
      groups: [
        {
          title: "Work areas",
          items: [
            "Dust desks, shelves and surfaces",
            "Disinfect handles, switches and phones",
            "Empty garbage and recycling",
            "Clean glass, mirrors and partitions",
            "Tidy meeting and reception areas",
          ],
        },
        {
          title: "Washrooms",
          items: [
            "Clean and disinfect toilets and sinks",
            "Polish mirrors and fixtures",
            "Refill soap and paper supplies",
            "Mop and disinfect floors",
            "Empty all bins",
          ],
        },
        {
          title: "Kitchens & break rooms",
          items: [
            "Wipe counters, tables and cabinet fronts",
            "Clean sinks and taps",
            "Wipe microwaves and appliance exteriors",
            "Empty garbage, recycling and compost",
            "Sweep and mop floors",
          ],
        },
        {
          title: "Floors & entrances",
          items: [
            "Vacuum carpets and rugs",
            "Sweep and mop hard floors",
            "Clean entrance glass and doors",
            "Wipe baseboards and ledges",
            "Spot-clean marks on walls",
          ],
        },
      ],
    },
    steps: [
      {
        title: "Walkthrough & quote",
        text: "Tell us about your office. We'll take a look and send a clear quote.",
      },
      {
        title: "Your cleaning plan",
        text: "We agree what's cleaned, how often and when, and write it into your checklist.",
      },
      {
        title: "Consistent, careful cleans",
        text: "Our team follows your checklist on every visit.",
      },
      {
        title: "Ongoing check-ins",
        text: "We keep in touch and adjust the plan as your needs change.",
      },
    ],
    pricing: {
      kind: "quote",
      title: "Quoted for Your Space",
      text: "Every office is different, so we quote after learning about yours: its size, how often you'd like us to visit and what you'd like included.",
      note: "We don't publish a flat office cleaning rate, because it would be wrong for most spaces.",
    },
    relatedPaths: ["/custodian-services", "/strata-cleaning", "/post-construction-cleaning"],
    relatedPosts: ["office-cleaning-checklist"],
    faqs: [
      {
        question: "How much does office cleaning cost in Vancouver?",
        answer:
          "It depends on the size of the office, how often you want us to visit and what you want included, so we quote for each space. Tell us about yours, and we'll send you a clear quote with no obligation.",
      },
      {
        question: "What is included in office cleaning services?",
        answer:
          "Typically desks and work areas, meeting rooms and reception, shared kitchens, washrooms, entrances and floors, plus garbage and recycling. Your checklist is built around your space, so you can add, remove or adjust anything.",
      },
      {
        question: "How often should an office be cleaned?",
        answer:
          "Washrooms, kitchens and high-touch surfaces need attention every day or after each working day, floors weekly, and detail work like baseboards and vents monthly. We'll recommend a schedule for your space and adjust it as your needs change.",
      },
      {
        question: "Can you work around our business hours?",
        // Existing custodian page wording; no after-hours claim (HANDOFF section 5).
        answer:
          "Tell us your hours when you request a quote, and we'll plan visits around them, so cleaning never gets in the way of your team or your customers.",
      },
      {
        question: "Do you bring your own products and equipment?",
        answer:
          "Yes. Our team arrives with professional equipment and our hospital-grade, eco-friendly products. If your building has specific product requirements, let us know and we'll work with them.",
      },
      {
        question: "What is the difference between office cleaning and janitorial services?",
        answer:
          "Office cleaning is the regular clean of an office's desks, kitchens, washrooms and floors. Janitorial or custodian services is the wider term, covering other commercial spaces like retail stores and building common areas. Both are quoted for your space.",
      },
      trustedTeam,
      notWashington,
    ],
    cta: {
      title: "Need a Cleaner Office?",
      text: "Tell us about your space and how often you'd like us to visit. We'll send a clear quote.",
      primaryLabel: "Request a quote",
    },
  },

  // ---------------------------------------------------------------- strata cleaning
  "strata-cleaning": {
    slug: "strata-cleaning",
    path: "/strata-cleaning",
    theme: "custodian",
    metaTitle: "Strata & Condo Building Cleaning in Vancouver, BC",
    metaDescription:
      "Common-area cleaning for Vancouver strata and condo buildings: lobbies, hallways, stairwells and amenity spaces. Request a quote for your council.",
    breadcrumbName: "Strata Cleaning",
    schema: {
      name: "Strata and Condo Building Cleaning in Vancouver, BC",
      serviceType: "Strata common area cleaning",
      description:
        "Common-area cleaning for strata and condo buildings across Greater Vancouver, BC: lobbies, hallways, stairwells, elevators and amenity rooms, quoted for each building.",
    },
    hero: {
      image: stock.strataHero,
      tagline: "Common property, kept clean",
      title: ["Strata & Condo Building", "Cleaning in Vancouver, BC"],
      description: "Lobbies, hallways, stairwells and amenity rooms that residents are proud of.",
    },
    intro: {
      eyebrow: "Strata cleaning",
      title: "What Is Strata Cleaning?",
      answer:
        "Strata cleaning is the regular cleaning of a strata or condo building's common property: lobbies, hallways, stairwells, elevators, amenity rooms and gyms. S&A cleans common areas for strata councils and strata managers across Vancouver, BC and Greater Vancouver, with a quote based on your building.",
      highlights: [
        "Lobbies, hallways, elevators, amenity rooms and gyms",
        "Quotes for strata councils and strata managers",
        "Fully licensed and insured",
        "Background-checked staff on every visit",
      ],
    },
    photoRows: [
      {
        icon: "key",
        eyebrow: "Lobbies & hallways",
        title: "First Impressions That Last",
        text: "Entrances, lobbies and hallways are the first thing residents and visitors see. We keep them clean, safe and welcoming.",
        points: [
          "Entrance glass and doors cleaned",
          "Hard floors swept and mopped, carpets vacuumed",
          "Elevators, handrails and buttons wiped down",
          "Wet-floor signage used whenever floors are drying",
        ],
        image: stock.strataFloor,
      },
      {
        icon: "building",
        eyebrow: "Amenity spaces",
        title: "Shared Rooms Residents Use",
        text: "Amenity rooms and gyms are used by many people, so we clean them with hospital-grade, eco-friendly products.",
        points: [
          "Surfaces and high-touch points disinfected",
          "Floors vacuumed and mopped",
          "Glass and mirrors cleaned",
          "Garbage and recycling emptied",
        ],
        image: stock.strataVacuum,
      },
    ],
    audience: {
      title: "Who We Clean For",
      description: "The people who look after a building's common property.",
      items: [
        {
          icon: "users",
          title: "Strata councils",
          text: "Volunteer councils that need a reliable cleaner for the building.",
        },
        {
          icon: "clipboard",
          title: "Strata managers",
          text: "Managers arranging cleaning for the buildings they look after.",
        },
        {
          icon: "building",
          title: "Condo & apartment buildings",
          text: "Mid-rise and high-rise buildings across Greater Vancouver.",
        },
        {
          icon: "key",
          title: "Townhouse complexes",
          text: "Shared entrances, paths and amenity rooms.",
        },
      ],
    },
    // TO CONFIRM: scope for strata buildings. Based on the Custodian page's "Strata common
    // areas" description. Do not add garbage-room, parkade or window scope until the client
    // confirms it.
    scope: {
      title: "A Typical Common-Area Checklist",
      description:
        "Your checklist is built around your building and your strata's needs, so you can add, remove or adjust anything.",
      groups: [
        {
          title: "Lobbies & entrances",
          items: [
            "Clean entrance glass and doors",
            "Sweep and mop hard floors",
            "Vacuum carpets and mats",
            "Wipe mailboxes and ledges",
            "Empty bins",
          ],
        },
        {
          title: "Hallways & stairwells",
          items: [
            "Vacuum or mop hallway floors",
            "Sweep and mop stairs",
            "Wipe handrails and door handles",
            "Dust ledges and vents within reach",
            "Spot-clean marks on walls",
          ],
        },
        {
          title: "Elevators",
          items: [
            "Wipe buttons and handrails",
            "Clean mirrors and walls",
            "Vacuum or mop floors",
            "Clean door tracks",
            "Wipe panels",
          ],
        },
        {
          title: "Amenity rooms & gyms",
          items: [
            "Disinfect high-touch surfaces",
            "Wipe equipment and tables",
            "Clean glass and mirrors",
            "Vacuum or mop floors",
            "Empty garbage and recycling",
          ],
        },
      ],
    },
    steps: [
      {
        title: "Walkthrough & quote",
        text: "Tell us about your building. We'll take a look and send a quote you can share with your council.",
      },
      {
        title: "Your cleaning plan",
        text: "We agree what's cleaned, how often and when, and write it into a checklist.",
      },
      {
        title: "Regular cleans",
        text: "Our team follows the checklist on every visit.",
      },
      {
        title: "Ongoing check-ins",
        text: "We keep in touch and adjust the plan as your building's needs change.",
      },
    ],
    pricing: {
      kind: "quote",
      title: "Quoted for Your Building",
      text: "Every building is different, so we quote after learning about yours: its size, the common areas to be cleaned and how often you'd like us to visit.",
      note: "We can put the quote in a form your strata council can review.",
    },
    relatedPaths: ["/custodian-services", "/office-cleaning", "/post-construction-cleaning"],
    relatedPosts: ["office-cleaning-checklist"],
    faqs: [
      {
        question: "What areas do you clean in a strata building?",
        answer:
          "Common property such as lobbies and entrances, hallways, stairwells, elevators, amenity rooms and gyms. We agree the areas and the checklist with you before we start, and adjust them as your building's needs change.",
      },
      {
        question: "How much does strata cleaning cost in Vancouver?",
        answer:
          "It depends on the size of the building, the common areas to be cleaned and how often you want us to visit, so we quote for each building. Send us the details, and we'll prepare a quote for your strata council or manager.",
      },
      {
        question: "Can you quote for a strata council or a strata manager?",
        answer:
          "Yes. We're happy to send a quote to your strata council, or to the strata manager acting for it, so it can be reviewed and shared. Tell us the building's address area and the common areas you'd like cleaned.",
      },
      {
        question: "How often do strata common areas need cleaning?",
        answer:
          "It depends on the building. A busy lobby, hallways and elevators typically need more regular visits than a quiet amenity room. We'll recommend a schedule when we learn about your building and adjust it as needed.",
      },
      {
        question: "Do you work with strata councils or buildings in my area?",
        answer:
          "We clean across Greater Vancouver, including Downtown, North, East, West and South Vancouver. Send us your building's neighbourhood and we'll confirm.",
      },
      {
        question: "Do you bring your own products and equipment?",
        answer:
          "Yes. Our team arrives with professional equipment and our hospital-grade, eco-friendly products. If your building has specific product requirements, let us know and we'll work with them.",
      },
      trustedTeam,
      {
        question: "Is S&A in Vancouver, BC or Vancouver, Washington?",
        answer:
          "Vancouver, British Columbia, Canada. We serve Greater Vancouver, including Downtown, North, East, West and South Vancouver, and use BC terms such as strata council and strata manager. We do not serve Vancouver, Washington.",
      },
    ],
    cta: {
      title: "Looking After a Building?",
      text: "Tell us about your strata or condo building, and we'll send a quote for your council.",
      primaryLabel: "Request a quote",
    },
  },
};

export const servicePageList = Object.values(servicePages);
