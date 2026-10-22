import kitchenAppliances from "@/assets/images/kitchen-appliances.jpg";
import kitchenIsland from "@/assets/images/kitchen-island.jpg";
import kitchenMicrowave from "@/assets/images/kitchen-microwave.jpg";
import kitchenSink from "@/assets/images/kitchen-sink.jpg";
import kitchenStove from "@/assets/images/kitchen-stove.jpg";
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
import { homeCleaningPlans } from "@/content/pricing";
import { stock } from "@/content/stock-photos";
import { pageMetadata } from "@/lib/metadata";
import { bookingLinks } from "@/lib/site";

export const metadata = pageMetadata({ title: "Service", path: "/home-cleaning" });

// Every photo here appears nowhere else on the site (client feedback: the
// home-cleaning pictures were too similar to the rest of the site).
const gallery: GalleryImage[] = [
  {
    image: kitchenSink,
    alt: "A cleaned double sink and counter in an open-plan condo kitchen",
    span: 2,
  },
  {
    image: kitchenIsland,
    alt: "A wiped-down kitchen island and white appliances in a condo",
    span: 2,
  },
  { image: kitchenStove, alt: "A clean gas cooktop with polished grates", span: 2 },
  {
    image: kitchenAppliances,
    alt: "A tidy galley kitchen with a clean stove, fridge and microwave",
    span: 2,
  },
  { image: stock.homeDishwasher, alt: stock.homeDishwasher.alt, span: 4 },
  {
    image: kitchenMicrowave,
    alt: "A clean stainless steel microwave beside the stove",
    span: 3,
    tabletSpan: 2,
  },
  { image: stock.homeMirror, alt: stock.homeMirror.alt, span: 1, tabletSpan: 2 },
  { image: stock.homeBed, alt: stock.homeBed.alt, span: 1, tabletSpan: 2 },
  { image: stock.homeCabinet, alt: stock.homeCabinet.alt, span: 1, tabletSpan: 2 },
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
    image: stock.homeLivingMop,
    alt: stock.homeLivingMop.alt,
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
    image: stock.homeWindow,
    alt: stock.homeWindow.alt,
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
    question: "Is your team insured and background-checked?",
    answer:
      "Yes. S&A Cleaning Group is fully licensed and insured, and every member of our team completes a criminal and background check before employment.",
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
];

export default function HomeCleaningPage() {
  return (
    <div className="theme-home">
      <PageHero
        image={stock.homeHero}
        className="overflow-hidden pt-[200px] max-md:pt-[200px]"
        tagline="We value your time as much as you do."
        title={
          <>
            Professional Home Cleaning
            <br />
            Services in Vancouver
          </>
        }
        description={
          <>
            Spending too much time cleaning your home? Start getting your time back with <br />
            S&amp;A Cleaning Group! Book your service today, in seconds.
          </>
        }
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
        layout="home-cleaning"
        booking={{ href: bookingLinks.homeCleaning }}
        photos={{
          ecoFriendly: { image: stock.homeEcoProducts, alt: stock.homeEcoProducts.alt },
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
