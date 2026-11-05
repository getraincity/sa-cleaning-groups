import kitchenSink from "@/assets/images/kitchen-sink.jpg";
import kitchenStove from "@/assets/images/kitchen-stove.jpg";
import { AnswerBlocks } from "@/components/sections/answer-blocks";
import { BookingCta } from "@/components/sections/booking-cta";
import { CareSection } from "@/components/sections/care-section";
import { FaqSection, type Faq } from "@/components/sections/faq-section";
import { PhotoFeatures, type PhotoFeatureRow } from "@/components/sections/photo-feature";
import { ProcessSteps } from "@/components/sections/process-steps";
import { AreasStrip } from "@/components/locations/areas-strip";
import { HomeIcon, SparklesIcon } from "@/components/ui/icons";
import { Gallery, type GalleryImage } from "@/components/sections/gallery";
import { HomeServiceTypes } from "@/components/sections/home-service-types";
import { PageHero } from "@/components/sections/page-hero";
import { PricingSection } from "@/components/sections/pricing-section";
import { AddOnsSection } from "@/components/sections/add-ons-section";
import { homeCleaningAnswers } from "@/content/answers";
import { homeCleaningPlans } from "@/content/pricing";
import { stock } from "@/content/stock-photos";
import { pageMetadata } from "@/lib/metadata";
import { bookingLinks } from "@/lib/site";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, homeCleaningOffers, serviceJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "House Cleaning Services in Vancouver, BC",
  path: "/home-cleaning",
  description:
    "Recurring and one-time house cleaning in Vancouver. Plans from $150 a month or hourly from $130 (3-hour minimum). Licensed, insured. Book online.",
});

// Every photo here appears nowhere else on the site (client feedback: the
// home-cleaning pictures were too similar to the rest of the site).
const gallery: GalleryImage[] = [
  {
    image: kitchenSink,
    alt: "A cleaned double sink and counter in an open-plan condo kitchen",
    span: 2,
  },
  { image: stock.homeOven, alt: stock.homeOven.alt, span: 2 },
  { image: kitchenStove, alt: "A clean gas cooktop with polished grates", span: 2 },
  { image: stock.homeUnloading, alt: stock.homeUnloading.alt, span: 2 },
  { image: stock.homeDishwasher, alt: stock.homeDishwasher.alt, span: 4 },
  { image: stock.homeDrawers, alt: stock.homeDrawers.alt, span: 3, tabletSpan: 2 },
  { image: stock.homeShowerHandle, alt: stock.homeShowerHandle.alt, span: 1, tabletSpan: 2 },
  { image: stock.homeDoorFrame, alt: stock.homeDoorFrame.alt, span: 1, tabletSpan: 2 },
  { image: stock.homeTable, alt: stock.homeTable.alt, span: 1, tabletSpan: 2 },
];

// Room by room: what a clean covers in the spaces people care about most.
const roomRows: PhotoFeatureRow[] = [
  {
    eyebrow: { icon: <SparklesIcon />, label: "Kitchens" },
    title: "The Heart of the Home, Spotless",
    text: "Kitchens work hardest, so they get the most attention. Counters, sinks and appliances are cleaned and polished until they shine.",
    points: [
      "Counters and backsplash wiped and disinfected",
      "Sinks and taps scrubbed and polished",
      "Appliance fronts, stove top and oven front cleaned",
      "Cabinet fronts wiped, inside and out on Diamond",
    ],
    image: stock.homeKitchenSink,
    alt: stock.homeKitchenSink.alt,
  },
  {
    eyebrow: { icon: <HomeIcon />, label: "Living spaces & bedrooms" },
    title: "Rooms You Can Relax In",
    text: "Come home to fresh floors, dust-free surfaces and made beds. We tidy as we go so every room feels calm and ready to enjoy.",
    points: [
      "Floors vacuumed and steam-mopped",
      "Furniture and reachable surfaces dusted",
      "Beds made and rooms organized",
      "Mirrors and glass cleaned streak-free",
    ],
    image: stock.homeBedroom,
    alt: stock.homeBedroom.alt,
  },
  {
    eyebrow: { icon: <SparklesIcon />, label: "Glass & windows" },
    title: "Let the Light In",
    text: "Clean glass makes a home feel brighter. Mirrors are polished on every plan, and our Gold and Diamond plans take care of ledges, sills and windows too.",
    points: [
      "Mirrors cleaned and polished on every visit",
      "Window ledges and sills dusted on Gold and Diamond",
      "Windows cleaned inside on Diamond",
      "Bathrooms disinfected top to bottom on every plan",
    ],
    image: stock.homeWindowSpray,
    alt: stock.homeWindowSpray.alt,
  },
];

const homeSteps = [
  {
    title: "Book online",
    text: "Choose your plan and a time that works for you. It only takes a few seconds.",
  },
  {
    title: "We arrive ready",
    text: "Our background-checked team brings professional equipment and eco-friendly products.",
  },
  {
    title: "A thorough clean",
    text: "We follow your plan's checklist room by room, with attention to every detail.",
  },
  {
    title: "Your time back",
    text: "Relax in a clean home. Set up recurring cleans and never think about it again.",
  },
];

const homeFaqs: Faq[] = [
  {
    question: "How much does house cleaning cost in Vancouver?",
    // Built from the pricing data, so it always matches the pricing cards.
    answer: `Our recurring plans are ${homeCleaningPlans
      .map((plan) => `${plan.name} at $${plan.price.amount} a month`)
      .join(", ")
      .replace(
        /, (?=[^,]*$)/,
        " and ",
      )}. You can also book our team by the hour, from $130+ with a 3-hour minimum. Each plan's checklist is listed in the pricing section above.`,
  },
  {
    question: "Which areas do you clean?",
    answer:
      "Homes across Greater Vancouver, BC, including Downtown, North, East, West and South Vancouver. If you're nearby and not sure we cover your area, send us a message.",
    links: [{ label: "See all service areas", href: "/locations" }],
  },
  {
    question: "Do you clean condos and apartments?",
    answer:
      "Yes. We clean condos, lofts, townhomes and family houses. Downtown Vancouver has its own page covering Yaletown, Coal Harbour, the West End and Gastown, including how we handle building and suite access.",
    links: [
      { label: "House cleaning in Downtown Vancouver", href: "/locations/downtown-vancouver" },
    ],
  },
  {
    question: "Do you offer deep cleaning, move-out cleaning and Airbnb cleaning?",
    answer:
      "Yes. Each has its own page with the details: deep cleaning for a top-to-bottom reset, move-out and move-in cleaning for empty homes, Airbnb cleaning for turnovers between guests, and post-construction cleaning after a renovation or new build.",
    links: [
      { label: "Deep cleaning", href: "/deep-cleaning" },
      { label: "Move-out cleaning", href: "/move-out-cleaning" },
      { label: "Airbnb cleaning", href: "/airbnb-cleaning" },
      { label: "Post-construction cleaning", href: "/post-construction-cleaning" },
    ],
  },
  {
    question: "Can I book hourly instead of a monthly plan?",
    answer:
      "Yes. Hourly cleaning starts at $130+ with a 3-hour minimum, and you tell the team where to focus. It suits one-off jobs, larger homes and anything outside a plan's checklist. Recurring plans suit routine upkeep.",
  },
  {
    question: "Do I need to be home during the clean?",
    answer:
      "No. Many clients are at work while we clean. Let us know how you'd like to handle access when you book, and come home to a fresh space.",
  },
  {
    question: "Do you bring your own supplies?",
    answer:
      "Yes. Our team arrives with professional equipment and our local, eco-friendly products. If you'd like us to use a product of your own, just let us know.",
  },
  {
    question: "Do you clean inside the oven and fridge?",
    answer:
      "Yes, on our Diamond plan, which includes the inside of the oven, fridge and microwave and the range hood. Silver and Gold wipe the oven front and stove top. If you're on another plan and want the inside done, ask and we'll let you know what we can add.",
  },
  {
    question: "Is your team insured and background-checked?",
    answer:
      "Yes. S&A Cleaning Group is fully licensed and insured, and every member of our team completes a criminal and background check before employment.",
    links: [{ label: "About S&A Cleaning Group", href: "/about-us" }],
  },
  {
    question: "Are your products safe for pets and children?",
    answer:
      "Our products are carefully chosen to be eco-friendly and pet-friendly, with a minimal use of chemicals.",
  },
  {
    question: "What is the difference between Silver, Gold and Diamond?",
    answer:
      "Each plan builds on the one before it. Gold adds details like baseboards, light switches and doors, and Diamond adds the inside of cabinets, windows (inside), the fridge and oven, and your balcony. See the full lists in the pricing section.",
  },
  {
    question: "How do I book a house cleaning?",
    answer:
      "Use any Book button on our site. Share your name and contact details and we'll take you straight to our online booking form to finish. You can also call or email us if you'd rather talk it through first.",
    links: [{ label: "Contact S&A Cleaning Group", href: "/contact-us" }],
  },
];

export default function HomeCleaningPage() {
  return (
    <div className="theme-home">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home Cleaning", path: "/home-cleaning" }])} />
      <JsonLd
        data={serviceJsonLd({
          path: "/home-cleaning",
          name: "Home Cleaning in Vancouver",
          serviceType: "House cleaning",
          description:
            "Recurring, hourly and one-time home cleaning across Greater Vancouver, BC, with eco-friendly, pet-friendly products.",
          offers: homeCleaningOffers(),
        })}
      />
      <PageHero
        image={stock.homeHero}
        className="overflow-hidden pt-[200px] max-md:pt-[200px]"
        tagline="We value your time as much as you do."
        title={
          <>
            Professional Home Cleaning
            <br />
            Services in Vancouver, BC
          </>
        }
        description={
          <>
            Looking for a trusted house cleaning or maid service in Vancouver? Start getting your
            time back with <br />
            S&amp;A Cleaning Group! Book your service today, in seconds.
          </>
        }
      />

      <AnswerBlocks
        items={homeCleaningAnswers}
        title="House Cleaning in Vancouver: Quick Answers"
        description="Prices, plans and what to expect, in plain terms."
      />

      <HomeServiceTypes />

      <PhotoFeatures
        rows={roomRows}
        header={{
          eyebrow: { icon: <HomeIcon />, label: "Room by room" },
          title: "Every Room, Done Right",
          description: "Here's what our team takes care of in the rooms you use most.",
        }}
      />

      <CareSection
        booking={{ href: bookingLinks.homeCleaning }}
        photos={{
          ecoFriendly: { image: stock.homeStove, alt: stock.homeStove.alt },
          professionals: { image: stock.homePro, alt: stock.homePro.alt },
          petFriendly: { image: stock.homePets, alt: stock.homePets.alt },
        }}
      />

      <Gallery images={gallery} />

      <ProcessSteps title="How Home Cleaning Works" steps={homeSteps} />

      <PricingSection
        title={
          <>
            Custom Home Cleaning
            <br />
            Plans to Fit Your Lifestyle
          </>
        }
        plans={homeCleaningPlans}
        booking={{ href: bookingLinks.homeCleaning }}
      />

      <AddOnsSection />

      <AreasStrip service="home cleaning" />

      <FaqSection
        items={homeFaqs}
        description="Everything you need to know about home cleaning with S&A."
      />

      <BookingCta />
    </div>
  );
}
