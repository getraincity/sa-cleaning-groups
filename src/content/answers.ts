import type { LocationSlug } from "@/content/locations";
import { homeCleaningPlans } from "@/content/pricing";

// Answer-engine blocks: a question heading with a short, self-contained answer
// (40-60 words) that search and AI engines can quote on its own. Facts come
// only from the approved claims in docs/HANDOFF.md §5 and from pricing.ts.
// All of this copy is flagged for client review (docs/seo/onpage-notes.md).

export type AnswerLink = { label: string; href: string };
export type Answer = { question: string; answer: string; links?: AnswerLink[] };

/** "Silver at $150 a month, Gold at $235 a month and Diamond at $280 a month". */
const planPrices = homeCleaningPlans
  .map((plan) => `${plan.name} at $${plan.price.amount} a month`)
  .join(", ")
  .replace(/, (?=[^,]*$)/, " and ");

export const homeAnswers: Answer[] = [
  {
    question: "What cleaning services does S&A Cleaning Group offer in Vancouver?",
    answer:
      "S&A Cleaning Group is a licensed, insured cleaning company serving Greater Vancouver, BC. We offer home cleaning, including recurring plans, hourly cleaning, deep cleans and move-in or move-out cleans, and custodian services for offices, retail spaces, strata buildings and other commercial properties, using eco-friendly products.",
    links: [
      { label: "Home cleaning in Vancouver", href: "/home-cleaning" },
      { label: "Custodian services", href: "/custodian-services" },
    ],
  },
  {
    question: "What happened to Akumal Executive Cleaning?",
    answer:
      "Akumal Executive Cleaning is now S&A Cleaning Group. We began under the Akumal name more than nine years ago, and today we serve homes and businesses across Greater Vancouver, BC as S&A Cleaning Group. Alex and Shaida are our co-founders, and our standards of care have not changed with the name.",
    links: [{ label: "Read our story", href: "/about-us#our-story" }],
  },
  {
    question: "Are S&A Cleaning Group's cleaners background-checked and insured?",
    answer:
      "Yes. S&A Cleaning Group is fully licensed and insured, and every member of our team completes a criminal and background check before employment. Our team arrives with professional equipment and eco-friendly, pet-friendly, hospital-grade products, so you know who is entering your home or workplace and what is being used.",
    links: [{ label: "About our team and credentials", href: "/about-us" }],
  },
  {
    question: "Which areas of Greater Vancouver does S&A Cleaning Group serve?",
    answer:
      "We serve Downtown, North, East, West and South Vancouver, BC, including Yaletown, Lonsdale, Commercial Drive, Ambleside and Marpole. Each area has its own page with local details. If you are nearby and not sure we cover your address, send us a message and we will let you know.",
    links: [{ label: "See all service areas", href: "/locations" }],
  },
];

export const homeCleaningAnswers: Answer[] = [
  {
    question: "How much does house cleaning cost in Vancouver?",
    answer: `S&A Cleaning Group's recurring home cleaning plans are ${planPrices}, each with a published room-by-room checklist. You can also book our team by the hour from $130+, with a 3-hour minimum, which suits one-off jobs and larger homes.`,
    links: [{ label: "See plans and pricing", href: "/home-cleaning#book" }],
  },
  {
    question: "What is the difference between a recurring plan and hourly cleaning?",
    answer:
      "Recurring plans (Silver, Gold and Diamond) follow a fixed checklist, and each tier adds detail such as baseboards, inside windows, or the oven and fridge. Hourly cleaning is booked by time, from $130+ with a 3-hour minimum, so you choose where the team focuses. Plans suit routine upkeep; hourly suits custom or one-off tasks.",
  },
  {
    question: "Do I need to be home during a house cleaning?",
    answer:
      "No. Many clients are at work while we clean. When you book, tell us how you would like to handle access and we will plan the visit around it. Every cleaner is background-checked and the company is fully licensed and insured, so you can come home to a finished clean with confidence.",
  },
  {
    question: "Are your cleaning products safe for pets and children?",
    answer:
      "Our products are carefully chosen to be eco-friendly and pet-friendly, with minimal use of chemicals. We use natural, hospital-grade disinfectants that remove up to 98.9% of bacteria, focused on high-touch areas. If anyone in your household has allergies or sensitivities, tell us when you book and we will plan around them.",
  },
];

export const custodianAnswers: Answer[] = [
  {
    question: "What is the difference between janitorial and commercial cleaning?",
    answer:
      "The terms overlap, and many companies use them interchangeably. Janitorial or custodial service usually means routine upkeep on a schedule: bins, washrooms, floors and restocking. Commercial cleaning is the broader label for cleaning any business property, including periodic or one-time jobs. S&A Cleaning Group provides both across Greater Vancouver, BC.",
  },
  {
    question: "How much does commercial cleaning cost in Vancouver?",
    answer:
      "S&A Cleaning Group quotes each commercial space individually, because the price depends on the size of the space, how often you want visits and what you want included. We do not publish a flat rate. Tell us about your space and we will take a look and send you a clear quote.",
    links: [{ label: "Request a quote", href: "/contact-us?topic=custodian#message" }],
  },
  {
    question: "What is included in commercial cleaning from S&A?",
    answer:
      "A typical checklist covers work areas, washrooms, kitchens and break rooms, and floors and entrances: dusting surfaces, disinfecting high-touch points, cleaning and restocking washrooms, emptying bins, and sweeping, mopping or vacuuming. Your plan is built around your space, so tasks can be added, removed or adjusted.",
    links: [
      { label: "Read the office cleaning checklist", href: "/blog/office-cleaning-checklist" },
    ],
  },
  {
    question: "How often can S&A clean our office or building?",
    answer:
      "Visits can be daily, weekly, bi-weekly or one-time, planned around your business hours. Daily visits suit busy offices, clinics and storefronts, while weekly or bi-weekly visits suit smaller offices and quieter spaces. We agree the schedule with you and write it into your cleaning checklist before we start.",
  },
];

export const aboutAnswers: Answer[] = [
  {
    question: "Who is S&A Cleaning Group?",
    answer:
      "S&A Cleaning Group is a licensed, insured cleaning company serving Greater Vancouver, BC, formerly known as Akumal Executive Cleaning. Co-founders Alex and Shaida lead the company, which has been in business for more than nine years and offers home cleaning and custodian services for offices, retail spaces and strata buildings.",
  },
  {
    question: "What happened to Akumal Executive Cleaning?",
    answer:
      "Akumal Executive Cleaning is now S&A Cleaning Group. We started under the Akumal name more than nine years ago and now operate as S&A Cleaning Group in Vancouver, BC. If you knew us as Akumal Executive Cleaning, you are in the right place, and our phone number and email are listed on this page.",
  },
  {
    question: "Is S&A Cleaning Group licensed and insured?",
    answer:
      "Yes. S&A Cleaning Group is fully licensed and insured. That means the business holds the licence it needs to operate and carries insurance for its work. Every team member also completes a criminal and background check before employment, so you know who is working in your home or workplace.",
  },
  {
    question: "How do I choose a cleaning company in Vancouver?",
    answer:
      "Ask whether the company is licensed and insured, whether staff are background-checked, which products it uses, how pricing works and what each visit includes. At S&A you can see ours: licensed and insured, background-checked staff, eco-friendly products, a published checklist for each home plan, and hourly cleaning from $130+.",
  },
];

export const locationsHubAnswers: Answer[] = [
  {
    question: "Where does S&A Cleaning Group provide cleaning services?",
    answer:
      "We serve Greater Vancouver, BC through five area pages: Downtown, North, East, West and South Vancouver. Each covers the neighbourhoods we know best, with home cleaning and custodian services for offices, shops and strata buildings. Not sure we cover your address? Send us a message and we will let you know.",
    links: [{ label: "Contact us", href: "/contact-us" }],
  },
  {
    question: "Do you offer home and commercial cleaning in every area?",
    answer:
      "Yes. In all five areas we offer home cleaning, with recurring plans from $150 a month or hourly cleaning from $130+, and custodian services for offices, retail, strata common areas and clinics. Home cleaning can be booked online in minutes, and commercial work is quoted for each space.",
    links: [
      { label: "Home cleaning", href: "/home-cleaning" },
      { label: "Custodian services", href: "/custodian-services" },
    ],
  },
];

/** Two answers per area page, each written for that area. */
export const areaAnswers: Record<LocationSlug, Answer[]> = {
  "downtown-vancouver": [
    {
      question: "Does S&A Cleaning Group clean condos and offices in Downtown Vancouver, BC?",
      answer:
        "Yes. We clean condos, lofts and townhomes in Yaletown, Coal Harbour, the West End, Gastown and False Creek North, as well as offices, shops and strata common areas across the downtown core. We are fully licensed and insured with background-checked staff, and home plans start at $150 a month.",
      links: [
        { label: "Home cleaning", href: "/home-cleaning" },
        { label: "Office cleaning", href: "/office-cleaning" },
      ],
    },
    {
      question: "Can I book a move-out clean for a downtown condo?",
      answer:
        "Yes. Move-in and move-out cleans are available for downtown condos, lofts and apartments. Many strata buildings ask residents to reserve the elevator for a move, so check your building's rules and tell us your move time. We plan the clean for when the unit is empty and every corner is easy to reach.",
      links: [{ label: "Move-out cleaning", href: "/move-out-cleaning" }],
    },
  ],
  "north-vancouver": [
    {
      question: "Does S&A Cleaning Group provide house cleaning in North Vancouver, BC?",
      answer:
        "Yes. We clean homes and condos from Lower and Central Lonsdale to Lynn Valley, Deep Cove, Edgemont Village and Seymour, across both the City and the District of North Vancouver, plus offices and shops along Lonsdale. Our team is licensed, insured and background-checked, and uses eco-friendly, pet-friendly products.",
      links: [{ label: "Home cleaning", href: "/home-cleaning" }],
    },
    {
      question: "How can I keep a North Vancouver entryway clean through the wet months?",
      answer:
        "Wet months bring muddy boots, paws and dripping gear. Take shoes off at the door, keep a tray or mat for wet footwear and wipe paws quickly. Many North Shore homes also benefit from more frequent professional cleans between October and April, and we can adjust your plan by season.",
      links: [{ label: "Compare cleaning plans", href: "/home-cleaning#book" }],
    },
  ],
  "east-vancouver": [
    {
      question: "Does S&A Cleaning Group clean homes and businesses in East Vancouver?",
      answer:
        "Yes. We clean character homes, suites, laneway houses and apartments in East Van, from Commercial Drive and Mount Pleasant to Strathcona, Hastings-Sunrise, Renfrew-Collingwood and Kensington-Cedar Cottage, plus cafés, studios and small offices. We are fully licensed and insured, and hourly cleaning starts at $130+ with a 3-hour minimum.",
      links: [{ label: "Custodian services", href: "/custodian-services" }],
    },
    {
      question: "Can I book a move-out clean for my East Vancouver rental suite?",
      answer:
        "Yes. Our move-in and move-out cleans suit suites, laneway homes and apartments, including inside cabinets, closets and appliances. Book it after the movers have left so every corner is empty and easy to reach, and read our checklist to see what a move-out clean covers before your final walkthrough.",
      links: [
        { label: "Move-out cleaning", href: "/move-out-cleaning" },
        { label: "Move-out checklist", href: "/blog/move-out-cleaning-checklist-vancouver" },
      ],
    },
  ],
  "west-vancouver": [
    {
      question: "Does S&A Cleaning Group clean homes in West Vancouver, BC?",
      answer:
        "Yes. We clean homes in Ambleside, Dundarave, the British Properties, Caulfeild and Horseshoe Bay, plus offices, clinics and shops. Recurring plans start at $150 a month, and larger homes can be booked by the hour from $130+ with a 3-hour minimum. We are fully licensed and insured and use eco-friendly products.",
      links: [{ label: "Home cleaning", href: "/home-cleaning" }],
    },
    {
      question: "How do you keep large windows clear in a West Vancouver view home?",
      answer:
        "Interior window cleaning is included in our Diamond plan, and mirrors are polished on every plan. Living by the ocean means salt and moisture can build up a film on glass and railings, so regular cleans help keep the view clear. For a custom list of windows, book by the hour and tell us your priorities.",
      links: [{ label: "Deep cleaning", href: "/deep-cleaning" }],
    },
  ],
  "south-vancouver": [
    {
      question: "Does S&A Cleaning Group serve South Vancouver, BC?",
      answer:
        "Yes. We clean family homes and condos in Marpole, Oakridge, Sunset, Victoria-Fraserview and Killarney, plus offices, clinics and shops along corridors like Cambie, Fraser and Victoria Drive. Choose a Silver, Gold or Diamond plan, or book hourly cleaning from $130+ with a 3-hour minimum. Our team is licensed, insured and background-checked.",
      links: [{ label: "Home cleaning", href: "/home-cleaning" }],
    },
    {
      question: "Can you clean a new South Vancouver condo or renovated home before I move in?",
      answer:
        "Yes. Post-construction and move-in cleans clear fine construction dust from floors, cabinets, window tracks and fixtures. Book it before your furniture arrives, when every corner of the empty home is easy to reach. It suits new condos near the Canada Line as well as renovated family homes.",
      links: [
        { label: "Post-construction cleaning", href: "/post-construction-cleaning" },
        {
          label: "Post-construction cleaning guide",
          href: "/blog/post-construction-cleaning-guide",
        },
      ],
    },
  ],
};
