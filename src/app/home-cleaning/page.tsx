import checklistIllustration from "@/assets/images/home-cleaning-checklist.png";
import livingRoomWide from "@/assets/images/cleaning-living-room.jpg";
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
import { BookingCta } from "@/components/sections/booking-cta";
import { CareSection } from "@/components/sections/care-section";
import { ChecklistSection } from "@/components/sections/checklist-section";
import { Gallery, type GalleryImage } from "@/components/sections/gallery";
import { HomeServiceTypes } from "@/components/sections/home-service-types";
import { PageHero } from "@/components/sections/page-hero";
import { PricingSection } from "@/components/sections/pricing-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { homeCleaningPlans } from "@/content/pricing";
import { pageMetadata } from "@/lib/metadata";
import { bookingLinks, embeds } from "@/lib/site";

export const metadata = pageMetadata({ title: "Service", path: "/home-cleaning" });

const gallery: GalleryImage[] = [
  { image: kitchenSink, alt: "Kitechen image", span: 2 },
  { image: kitchenIsland, alt: "Pet friendly", span: 2 },
  { image: kitchenStove, alt: "", span: 2 },
  { image: kitchenAppliances, alt: "Local eco-friendly green products", span: 2 },
  { image: livingRoomWide, alt: "", span: 4 },
  { image: kitchenMicrowave, alt: "", span: 3, tabletSpan: 2 },
  { image: kitchenCounter01, alt: "", span: 1, tabletSpan: 2 },
  { image: kitchenCounter02, alt: "", span: 1, tabletSpan: 2 },
  { image: livingRoom, alt: "", span: 1, tabletSpan: 2 },
];

export default function HomeCleaningPage() {
  return (
    <>
      <PageHero
        image={cleaningWindows}
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

      <ChecklistSection
        title="Get your time back with every clean."
        image={checklistIllustration}
        imageAlt="Get your time back with every clean"
        wrapImage
        items={[
          "Our team is professional and experienced.",
          "Quick and efficient cleaning service.",
          "100% satisfaction guaranteed.",
          "Eco-friendly, pet-friendly products.",
          "Highly disciplined in the workplace.",
        ]}
      />

      <HomeServiceTypes />

      <CareSection
        layout="home-cleaning"
        booking={{ href: bookingLinks.homeCleaning }}
        photos={{
          ecoFriendly: { image: kitchenAppliances, alt: "Local eco-friendly green products" },
          professionals: { image: cleaningWindowView, alt: "Hand Picked Professionals" },
          petFriendly: { image: kitchenIsland, alt: "Pet friendly" },
        }}
      />

      <Gallery images={gallery} />

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

      <ReviewsSection widgetId={embeds.reviewsHome} />

      <BookingCta />
    </>
  );
}
