import type { StaticImageData } from "next/image";
import carBeforeAfterInterior from "@/assets/images/car-before-after-interior-01.webp";
import carExteriorBranded from "@/assets/images/car-exterior-branded.webp";
import cleaningWindows from "@/assets/images/cleaning-windows.jpg";
import kitchenAppliances from "@/assets/images/kitchen-appliances.jpg";
import kitchenIsland from "@/assets/images/kitchen-island.jpg";
import kitchenStove from "@/assets/images/kitchen-stove.jpg";

export const blogCategories = ["Home Cleaning", "Car Detailing", "Commercial"] as const;
export type BlogCategory = (typeof blogCategories)[number];

/** A piece of an article. Headings (h2) also feed the table of contents. */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "checklist"; title: string; items: string[] }
  | { type: "tip"; title: string; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  image: StaticImageData;
  imageAlt: string;
  body: Block[];
};

// Newest first.
const allPosts: Post[] = [
  {
    slug: "office-cleaning-checklist",
    title: "The Office Cleaning Checklist: Daily, Weekly and Monthly Tasks",
    excerpt:
      "A clean workplace makes a better first impression and a healthier place to work. Here's what should be cleaned, and how often, to keep your office in shape.",
    category: "Commercial",
    date: "2026-09-22",
    image: cleaningWindows,
    imageAlt: "An S&A cleaner washing a large office window",
    body: [
      {
        type: "p",
        text: "Clients notice a smudged glass door. Your team notices an overflowing recycling bin and a sticky break-room counter. A clean workplace isn't just about appearances: it helps limit the spread of germs, makes shared spaces pleasant to use, and shows people that the details matter to you.",
      },
      {
        type: "p",
        text: "The trick is knowing what needs attention every day and what can wait for a weekly or monthly clean. Here's the rhythm we recommend for most offices.",
      },
      { type: "h2", text: "Every day" },
      {
        type: "p",
        text: "Daily tasks focus on the areas people touch and see the most. Skipping them is what makes an office feel neglected.",
      },
      {
        type: "checklist",
        title: "Daily tasks",
        items: [
          "Empty garbage, recycling and compost bins",
          "Clean and disinfect washroom toilets, sinks and counters",
          "Refill soap, paper towel and toilet paper",
          "Wipe break-room counters, tables and sinks",
          "Disinfect high-touch points: door handles, light switches, elevator buttons",
          "Spot-clean entrance glass and reception surfaces",
        ],
      },
      { type: "h2", text: "Every week" },
      {
        type: "p",
        text: "Weekly cleaning handles the build-up that daily tasks don't reach, especially floors and the surfaces everyone forgets.",
      },
      {
        type: "checklist",
        title: "Weekly tasks",
        items: [
          "Vacuum carpets and mop all hard floors",
          "Dust desks, shelves, monitors and window ledges",
          "Wipe meeting-room tables and chairs",
          "Clean the microwave inside and out, and wipe appliance fronts",
          "Polish washroom mirrors and fixtures",
        ],
      },
      { type: "h2", text: "Every month" },
      {
        type: "p",
        text: "Monthly tasks keep dust and grime from settling in for good. They're also a chance to spot anything that needs repair.",
      },
      {
        type: "checklist",
        title: "Monthly tasks",
        items: [
          "Wipe baseboards, door frames and vents",
          "Clean interior windows and glass partitions",
          "Empty and clean out the office fridge",
          "Dust light fixtures and high ledges",
          "Spot-clean upholstered chairs and marks on walls",
        ],
      },
      {
        type: "tip",
        title: "Make the clean easier for everyone",
        text: "A simple clear-desk habit at the end of each week lets your cleaning team dust and disinfect work surfaces properly, instead of working around piles of paper.",
      },
      { type: "h2", text: "When to bring in a professional" },
      {
        type: "p",
        text: "If cleaning is falling to whoever has a spare minute, it's usually time to hand it over. A custodial team follows a set checklist on a set schedule, so nothing gets missed and your team can focus on their work.",
      },
      {
        type: "p",
        text: "S&A's custodian services cover offices, retail stores, strata common areas and more across Greater Vancouver. We'll build a checklist around your space and plan visits around your business hours.",
      },
    ],
  },
  {
    slug: "rv-and-boat-detailing-end-of-season",
    title: "End-of-Season RV and Boat Detailing: Clean Before You Store",
    excerpt:
      "Putting your RV or boat away dirty is an open invitation to mould, stains and odours. A thorough clean now means an easy start next season.",
    category: "Car Detailing",
    date: "2026-09-18",
    image: carExteriorBranded,
    imageAlt: "The S&A Auto Detailing truck parked on a sunny day",
    body: [
      {
        type: "p",
        text: "As the camping and boating season winds down in BC, it's tempting to park the RV, cover the boat and forget about them until spring. But whatever you leave behind, from crumbs and damp towels to salt spray and road grime, has months to settle in.",
      },
      {
        type: "p",
        text: "In our damp coastal climate, that's a recipe for musty smells, mildew and stains that are much harder to remove later. A proper end-of-season clean is one of the easiest ways to protect your investment.",
      },
      { type: "h2", text: "Your RV or camper" },
      {
        type: "checklist",
        title: "Inside",
        items: [
          "Remove all food, and wipe out cupboards, drawers and the fridge",
          "Prop the fridge door open so it can air out",
          "Vacuum and shampoo carpets and upholstery",
          "Wash or remove bedding, cushions and curtains",
          "Clean the bathroom and kitchen surfaces thoroughly",
          "Wipe down windows, blinds and screens",
        ],
      },
      {
        type: "checklist",
        title: "Outside",
        items: [
          "Wash off road grime, bugs and tree sap",
          "Clean the awning and let it dry completely before rolling it up",
          "Clean wheels and wheel wells",
          "Do a visual check of seals and seams while everything is clean",
        ],
      },
      {
        type: "tip",
        title: "Dry means safe",
        text: "Never store anything damp. Towels, awnings, mats and cushions should be completely dry first, or you may come back to mildew in the spring.",
      },
      { type: "h2", text: "Your boat" },
      {
        type: "p",
        text: "Salt water and sun are hard on boats. Before storage, give yours a thorough clean from deck to cabin.",
      },
      {
        type: "list",
        items: [
          "Scrub the deck and rinse away salt residue",
          "Clean and condition vinyl upholstery so it doesn't crack or mildew",
          "Empty and air out the cabin, lockers and storage compartments",
          "Wipe down all hard surfaces and windows inside the cabin",
        ],
      },
      {
        type: "p",
        text: "Cleaning is just one part of winterizing. For engines, water systems and anything mechanical, follow your manufacturer's guidance or have a qualified technician take care of it.",
      },
      { type: "h2", text: "Let us do the heavy lifting" },
      {
        type: "p",
        text: "S&A detailers work on much more than cars. We clean RVs, campers, trucks, work vehicles and boats inside and out, so they're ready to go the moment the season starts again. Get in touch for a quote.",
      },
    ],
  },
  {
    slug: "car-interior-rainy-season",
    title: "How to Keep Your Car Interior Fresh Through Vancouver's Rainy Season",
    excerpt:
      "Wet boots, dripping umbrellas and foggy windows: the rainy season is tough on car interiors. Here's how to keep yours dry, clean and smelling fresh.",
    category: "Car Detailing",
    date: "2026-09-12",
    image: carBeforeAfterInterior,
    imageAlt: "Muddy truck floor mats before and after an S&A interior detail",
    body: [
      {
        type: "p",
        text: "Anyone who's lived through a Vancouver winter knows the drill: rain for days, wet jackets, soggy shoes and windows that fog up the moment you get in. All that moisture ends up in your car's carpets and upholstery, and if it doesn't dry out, musty smells and mildew follow.",
      },
      {
        type: "p",
        text: "The good news is that a few simple habits make a big difference.",
      },
      { type: "h2", text: "Keep water out in the first place" },
      {
        type: "list",
        items: [
          "Switch to deep, all-weather rubber mats for the season. They trap water and mud so your carpet doesn't.",
          "Keep a small bin or bag for wet umbrellas instead of dropping them on the floor.",
          "Knock off mud and gravel before getting in, especially after a hike on the North Shore trails.",
        ],
      },
      { type: "h2", text: "Help your car dry out" },
      {
        type: "list",
        items: [
          "Run your air conditioning with the defroster. A/C pulls moisture out of the air and clears foggy windows faster.",
          "Take the mats out to drain and dry after particularly wet days.",
          "Don't leave wet gym clothes, towels or jackets in the car overnight.",
          "On dry days, open the doors for a few minutes to let fresh air through.",
        ],
      },
      {
        type: "tip",
        title: "Check for hidden leaks",
        text: "If your carpets stay damp no matter what, water may be getting in through a worn door seal or a blocked sunroof drain. It's worth having it checked before mould has a chance to take hold.",
      },
      { type: "h2", text: "Vacuum more often than you think" },
      {
        type: "p",
        text: "Sand and grit act like sandpaper on carpets and seats, and they hold on to moisture. A quick vacuum every couple of weeks keeps them from grinding in and makes your next detail far easier.",
      },
      { type: "h2", text: "When it's time for a professional detail" },
      {
        type: "p",
        text: "If there's a musty smell that won't go away, carpets that feel damp, or visible spots of mildew, masking it with an air freshener won't fix it. A professional interior detail deep-cleans carpets, mats and upholstery to lift out the dirt and moisture at the source.",
      },
      {
        type: "p",
        text: "S&A interior detailing is priced by vehicle size, from passenger cars to large SUVs and minivans. Book online or check our detailing page for current packages.",
      },
    ],
  },
  {
    slug: "deep-clean-vs-regular-clean",
    title: "Deep Clean vs. Regular Clean: Which Does Your Home Need?",
    excerpt:
      "Not sure whether to book a deep clean or a regular one? Here's the difference, when each makes sense, and how our Silver, Gold and Diamond plans compare.",
    category: "Home Cleaning",
    date: "2026-09-05",
    image: kitchenStove,
    imageAlt: "A gas range polished during an S&A deep clean",
    body: [
      {
        type: "p",
        text: "It's one of the most common questions we're asked: do I need a deep clean, or will a regular clean do? The answer depends on when your home was last cleaned thoroughly, and what you want it to feel like afterwards.",
      },
      { type: "h2", text: "What a regular clean covers" },
      {
        type: "p",
        text: "A regular clean is maintenance. It keeps a home that's already in good shape feeling fresh: floors vacuumed and mopped, kitchens and bathrooms wiped and disinfected, surfaces dusted and garbage taken out. It's designed to be repeated on a schedule.",
      },
      { type: "h2", text: "What a deep clean adds" },
      {
        type: "p",
        text: "A deep clean goes further, into the places that collect grime slowly and get skipped week to week.",
      },
      {
        type: "list",
        items: [
          "Baseboards, door frames, light switches and doors",
          "Inside cabinets and drawers",
          "Inside the oven, fridge and microwave",
          "The range hood, walls and interior windows",
          "Detailed scrubbing of tubs, showers, tiles and fixtures",
        ],
      },
      { type: "h2", text: "When to book a deep clean" },
      {
        type: "list",
        items: [
          "It's been a few months since your home was cleaned top to bottom",
          "You're starting with a new cleaning service",
          "You're moving in or out",
          "Before or after hosting guests or a big event",
          "As a seasonal reset, in spring or before the holidays",
        ],
      },
      {
        type: "tip",
        title: "Start deep, then stay regular",
        text: "The most cost-effective approach for most homes is one deep clean to reset everything, followed by regular visits that keep it that way.",
      },
      { type: "h2", text: "How our plans compare" },
      {
        type: "p",
        text: "Our three home cleaning plans are built around this idea, so you can choose exactly how deep each visit goes.",
      },
      {
        type: "checklist",
        title: "Silver, Gold and Diamond",
        items: [
          "Silver: the essentials, with floors, garbage, mirrors, dusting, kitchens, bathrooms and bedrooms",
          "Gold: everything in Silver, plus baseboards, doors, light switches, window ledges, chrome fixtures and vacuumed sofas",
          "Diamond: everything in Gold, plus inside cabinets, walls, interior windows, the inside of your oven, fridge and microwave, the range hood and your balcony",
        ],
      },
      {
        type: "p",
        text: "Prefer to direct the work yourself? Hourly cleaning starts from $130+ with a 3-hour minimum, and you choose where our team spends the time.",
      },
    ],
  },
  {
    slug: "move-out-cleaning-checklist-vancouver",
    title: "The Move-Out Cleaning Checklist for Vancouver Renters",
    excerpt:
      "Moving out? A thorough clean makes your final inspection smoother and helps protect your deposit. Here's everything to cover, room by room.",
    category: "Home Cleaning",
    date: "2026-08-28",
    image: kitchenAppliances,
    imageAlt: "A freshly cleaned apartment kitchen, ready for move-out",
    body: [
      {
        type: "p",
        text: "Moving is stressful enough without worrying about your security deposit. In BC, landlords and tenants inspect the unit together at the end of a tenancy and record its condition, so leaving your home properly clean is one of the simplest ways to make that inspection go smoothly.",
      },
      {
        type: "p",
        text: "Use this checklist to make sure nothing gets missed.",
      },
      { type: "h2", text: "Start with an empty home" },
      {
        type: "p",
        text: "Clean after the movers have gone, so you can reach every corner, cabinet and closet. Work room by room, from top to bottom, so dust falls onto floors you haven't cleaned yet.",
      },
      { type: "h2", text: "Kitchen" },
      {
        type: "checklist",
        title: "Kitchen",
        items: [
          "Clean inside the oven, racks and drawer",
          "Empty and wipe out the fridge and freezer",
          "Degrease the range hood and stovetop",
          "Wipe inside and outside every cabinet and drawer",
          "Scrub the sink, taps and backsplash",
          "Clean inside the microwave and the dishwasher door seals",
        ],
      },
      { type: "h2", text: "Bathrooms" },
      {
        type: "checklist",
        title: "Bathrooms",
        items: [
          "Descale taps, showerheads and glass",
          "Scrub the tub, tiles and grout",
          "Clean the toilet inside and out, including the base",
          "Wipe inside the vanity and medicine cabinet",
          "Polish mirrors and dust the exhaust fan cover",
        ],
      },
      { type: "h2", text: "Bedrooms and living areas" },
      {
        type: "checklist",
        title: "Every room",
        items: [
          "Wipe inside closets and shelves",
          "Clean baseboards, door frames and light switches",
          "Wipe window sills and tracks, and dust the blinds",
          "Gently spot-clean marks on walls",
          "Vacuum and mop, including where furniture used to stand",
        ],
      },
      { type: "h2", text: "Easy things to forget" },
      {
        type: "list",
        items: [
          "The balcony: sweep it and wipe the railings",
          "Your storage locker, if your building has one",
          "Light fixtures, which collect dust and bugs",
          "The inside of the front door and the entryway closet",
        ],
      },
      {
        type: "tip",
        title: "Timing is everything",
        text: "Book your clean for after the movers leave but before your move-out inspection. An empty home is faster to clean and much easier to get right.",
      },
      { type: "h2", text: "Or let us take care of it" },
      {
        type: "p",
        text: "S&A move-in and move-out cleans cover all of the above, including inside cabinets, closets and appliances, so you can focus on the move itself.",
      },
    ],
  },
  {
    slug: "post-construction-cleaning-guide",
    title: "Post-Construction Cleaning: What It Is and When You Need It",
    excerpt:
      "Renovation's done, but the dust isn't. Here's what a post-construction clean involves, why it's different from a regular clean, and when to book one.",
    category: "Home Cleaning",
    date: "2026-08-20",
    image: kitchenIsland,
    imageAlt: "A marble kitchen island after a post-renovation clean",
    body: [
      {
        type: "p",
        text: "Finishing a renovation or moving into a brand-new build is exciting, right up until you run a finger along a shelf. Construction leaves behind a layer of fine dust that settles on every surface, drifts into cupboards and vents, and keeps reappearing for weeks.",
      },
      { type: "h2", text: "Why it's different from a regular clean" },
      {
        type: "p",
        text: "Drywall and sawdust are much finer than everyday household dust. A quick wipe tends to smear it around, and ordinary vacuums can push it back into the air. Post-construction cleaning takes more time, more passes and the right tools, such as microfibre cloths and vacuums with fine filters.",
      },
      {
        type: "p",
        text: "Contractors typically clear away debris and give floors a sweep when the job is done, but that's usually where their clean ends. The detailed clean that makes a space liveable is a separate step.",
      },
      { type: "h2", text: "What a post-construction clean covers" },
      {
        type: "checklist",
        title: "Post-construction checklist",
        items: [
          "Dust every surface, top to bottom, including ledges and trim",
          "Wipe inside cabinets, drawers and closets",
          "Clean window glass, frames and tracks",
          "Remove stickers, labels and residue from fixtures and appliances",
          "Wipe down vents, light fixtures and switches",
          "Vacuum and wash all floors, with extra passes where needed",
        ],
      },
      {
        type: "tip",
        title: "Clean before the furniture arrives",
        text: "Book your post-construction clean once the trades have finished but before you move furniture in. Empty rooms mean every corner gets done, and your new sofa doesn't start life covered in drywall dust.",
      },
      { type: "h2", text: "Protecting your new finishes" },
      {
        type: "p",
        text: "New countertops, floors and fixtures deserve gentle treatment. Using the wrong product on natural stone or new hardwood can do real damage, so it pays to have a team that chooses products to suit each surface.",
      },
      {
        type: "p",
        text: "S&A post-construction cleans are available across Greater Vancouver for renovated homes, new condos and commercial spaces. Get in touch and we'll help you plan the timing around your project.",
      },
    ],
  },
];

export const posts = allPosts;

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

/** Minutes to read at roughly 220 words a minute, rounded up. */
export function readingMinutes(post: Post) {
  const words = post.body
    .flatMap((block) => {
      switch (block.type) {
        case "p":
        case "h2":
          return [block.text];
        case "tip":
          return [block.title, block.text];
        case "list":
          return block.items;
        case "checklist":
          return [block.title, ...block.items];
      }
    })
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

/** "September 22, 2026", fixed to UTC so the date never shifts by timezone. */
export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

/** URL-safe id for a heading, used by the table of contents. */
export function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
