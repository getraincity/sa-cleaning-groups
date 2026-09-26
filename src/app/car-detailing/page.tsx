import beforeAfterInterior01 from "@/assets/images/car-before-after-interior-01.webp";
import beforeAfterInterior02 from "@/assets/images/car-before-after-interior-02.webp";
import beforeAfterSeats from "@/assets/images/car-before-after-seats.webp";
import beforeAfterWheels from "@/assets/images/car-before-after-wheels.webp";
import checklistIllustration from "@/assets/images/car-detailing-checklist.png";
import carExterior from "@/assets/images/car-exterior-branded.webp";
import carInteriorDashboard from "@/assets/images/car-interior-dashboard.jpg";
import carInteriorSeats from "@/assets/images/car-interior-seats.jpg";
import detailingDashboard from "@/assets/images/detailing-dashboard.png";
import { BookingCta } from "@/components/sections/booking-cta";
import { CareSection } from "@/components/sections/care-section";
import { ChecklistSection } from "@/components/sections/checklist-section";
import { Gallery, type GalleryImage } from "@/components/sections/gallery";
import { PageHero } from "@/components/sections/page-hero";
import { PricingSection } from "@/components/sections/pricing-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { VehicleTypes } from "@/components/sections/vehicle-types";
import { carDetailingPlans } from "@/content/pricing";
import { pageMetadata } from "@/lib/metadata";
import { bookingLinks, embeds } from "@/lib/site";

export const metadata = pageMetadata({ title: "Car Detailing Services", path: "/car-detailing" });

const carBooking = { href: bookingLinks.carDetailing, external: true };

const gallery: GalleryImage[] = [
  { image: beforeAfterInterior01, alt: "before after car clean", span: 2 },
  { image: beforeAfterInterior02, alt: "before after car clean", span: 2 },
  { image: beforeAfterWheels, alt: "before after car clean", span: 2 },
  { image: beforeAfterSeats, alt: "before after car clean", span: 2 },
  { image: carExterior, alt: "Local eco-friendly green products", span: 4 },
];

export default function CarDetailingPage() {
  return (
    <>
      <PageHero
        image={carInteriorSeats}
        alignImageTopLeft
        className="py-[220px]"
        tagline="We value your time as much as you do."
        title="Car Detailing Services in Vancouver"
        description={
          <>
            Spending too much time cleaning your car? Get your time back with <br />
            S&amp;A Detailing! Book your service today in just seconds!
          </>
        }
      />

      <ChecklistSection
        title="Keep Your Car Clean Without The Hassle"
        image={checklistIllustration}
        imageAlt="Keep your car clean before after"
        items={[
          "Our team is professional and experienced.",
          "Quick and efficient cleaning service.",
          "100% satisfaction guaranteed.",
          "Eco-friendly, pet-friendly products.",
          "Highly disciplined in the workplace.",
        ]}
      />

      <VehicleTypes />

      <CareSection
        layout="car-detailing"
        booking={carBooking}
        photos={{
          ecoFriendly: { image: carExterior, alt: "Local eco-friendly green products" },
          professionals: { image: detailingDashboard, alt: "Detailing a car dashboard" },
          petFriendly: { image: carInteriorDashboard, alt: "Pet-friendly at car " },
        }}
      />

      <Gallery images={gallery} />

      <PricingSection
        title="Custom Car Detailing Plans to Fit Your Lifestyle"
        plans={carDetailingPlans}
        booking={carBooking}
      />

      <ReviewsSection widgetId={embeds.reviewsCarDetailing} withHeading={false} />

      <BookingCta />
    </>
  );
}
