import beforeAfterInterior01 from "@/assets/images/car-before-after-interior-01.webp";
import beforeAfterInterior02 from "@/assets/images/car-before-after-interior-02.webp";
import beforeAfterSeats from "@/assets/images/car-before-after-seats.webp";
import beforeAfterWheels from "@/assets/images/car-before-after-wheels.webp";
import carExterior from "@/assets/images/car-exterior-branded.webp";
import carInteriorDashboard from "@/assets/images/car-interior-dashboard.jpg";
import carInteriorSeats from "@/assets/images/car-interior-seats.jpg";
import detailingDashboard from "@/assets/images/detailing-dashboard.png";
import detailFoamWash from "@/assets/images/detailing/foam-wash.jpg";
import detailInteriorLeather from "@/assets/images/detailing/interior-leather.jpg";
import detailInteriorWipe from "@/assets/images/detailing/interior-wipe.jpg";
import detailMachinePolish from "@/assets/images/detailing/machine-polish.jpg";
import detailTireBrush from "@/assets/images/detailing/tire-brush.jpg";
import detailWheelFoam from "@/assets/images/detailing/wheel-foam.jpg";
import { BookingCta } from "@/components/sections/booking-cta";
import { CareSection } from "@/components/sections/care-section";
import { ChecklistSection } from "@/components/sections/checklist-section";
import { FaqSection, type Faq } from "@/components/sections/faq-section";
import { Gallery, type GalleryImage } from "@/components/sections/gallery";
import { PhotoFeatures, type PhotoFeatureRow } from "@/components/sections/photo-feature";
import { PhotoGrid } from "@/components/sections/photo-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { AreasStrip } from "@/components/locations/areas-strip";
import { PageHero } from "@/components/sections/page-hero";
import { PricingSection } from "@/components/sections/pricing-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { VehicleTypes } from "@/components/sections/vehicle-types";
import { CarIcon, SparklesIcon } from "@/components/ui/icons";
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

// Interior and exterior, one row each: what the two halves of a detail cover.
const detailRows: PhotoFeatureRow[] = [
  {
    eyebrow: { icon: <CarIcon />, label: "Interior detailing" },
    title: "A Cabin That Feels New Again",
    text: "Crumbs, coffee spills, pet hair and road grit work their way into every seam. We take the inside of your vehicle back to clean, seat by seat and panel by panel.",
    points: [
      "Thorough vacuum of seats, carpets, mats and trunk",
      "Dashboard, console, cup holders and door panels wiped down",
      "Seats and upholstery cleaned for your vehicle's materials",
      "Interior glass and mirrors left streak-free",
    ],
    image: detailInteriorLeather,
    alt: "A clean leather car interior after detailing",
  },
  {
    eyebrow: { icon: <SparklesIcon />, label: "Exterior detailing" },
    title: "A Finish That Turns Heads",
    text: "Vancouver rain, road spray and tree sap leave their mark on paint and wheels. Our exterior detail lifts the grime safely and brings back the shine.",
    points: [
      "Foam pre-wash to loosen dirt before it touches the paint",
      "Careful hand wash and dry",
      "Wheels, tires and wheel wells cleaned",
      "Exterior glass and mirrors polished clear",
    ],
    image: detailFoamWash,
    alt: "A car covered in foam during a hand wash",
  },
];

const detailSteps = [
  {
    title: "Book online",
    text: "Pick your service and a time that suits you in just a few clicks.",
  },
  {
    title: "Tell us about your vehicle",
    text: "Car, SUV, truck, RV or boat: let us know its size and what it needs most.",
  },
  {
    title: "We get to work",
    text: "Our detailers take care of every surface, inside and out, with eco-friendly products.",
  },
  {
    title: "Enjoy the drive",
    text: "Get your time back and a vehicle you're proud to drive again.",
  },
];

const carFaqs: Faq[] = [
  {
    question: "How long does a detail take?",
    answer:
      "It depends on the size of your vehicle, its condition and the service you choose. We'll give you a time estimate when you book.",
  },
  {
    question: "What size vehicles do you detail?",
    answer:
      "Passenger cars, medium SUVs and pickup trucks, and large SUVs and minivans, as well as RVs, work vans, fleets and boats. Pricing depends on the size of the vehicle.",
  },
  {
    question: "Can you remove pet hair?",
    answer:
      "Yes, pet hair is part of an interior detail. If there's a lot of it, let us know when you book so we can plan the time it needs.",
  },
  {
    question: "Are your products safe for kids and pets?",
    answer:
      "We use eco-friendly, pet-friendly products that are tough on dirt without leaving harsh chemicals behind in your vehicle.",
  },
  {
    question: "Do you detail fleets or work vehicles?",
    answer:
      "Yes. Get a quote for your vehicle or fleet and we'll put together a plan and a clear price.",
  },
];

export default function CarDetailingPage() {
  return (
    <div className="theme-car">
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
        image={carInteriorDashboard}
        framed
        imageAlt="Keep your car clean before after"
        items={[
          "Our team is professional and experienced.",
          "Quick and efficient cleaning service.",
          "100% satisfaction guaranteed.",
          "Eco-friendly, pet-friendly products.",
          "Highly disciplined in the workplace.",
        ]}
      />

      <PhotoFeatures
        rows={detailRows}
        header={{
          eyebrow: { icon: <SparklesIcon />, label: "What's included" },
          title: "Inside and Out, Every Detail",
          description:
            "Choose an interior detail, an exterior detail, or both together for a complete refresh.",
        }}
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

      <ProcessSteps title="Booking a Detail Is Easy" steps={detailSteps} />

      <PricingSection
        title="Custom Car Detailing Plans to Fit Your Lifestyle"
        plans={carDetailingPlans}
        booking={carBooking}
      />

      <PhotoGrid
        className="bg-brand-wash"
        eyebrow={{ icon: <CarIcon />, label: "Car care in Vancouver" }}
        title="Built for West Coast Weather"
        description="Rain, road spray and winter grime are hard on a vehicle. A regular detail keeps them from settling in."
        items={[
          {
            image: detailWheelFoam,
            alt: "Wheels being scrubbed with foam",
            title: "Wheels and tires",
            text: "Brake dust and road grime cleaned from wheels, tires and wheel wells.",
          },
          {
            image: detailTireBrush,
            alt: "A detailer brushing a tire",
            title: "Rainy-season mud",
            text: "Trail days and wet commutes leave mud behind. We clean it out before it stains.",
          },
          {
            image: detailInteriorWipe,
            alt: "A detailer wiping down a steering wheel",
            title: "High-touch surfaces",
            text: "Steering wheel, shifter, handles and buttons wiped down and refreshed.",
          },
          {
            image: detailMachinePolish,
            alt: "Polishing a car's paint",
            title: "Paint that shines",
            text: "A careful wash and dry that brings back your vehicle's shine.",
          },
        ]}
      />

      <AreasStrip service="car detailing" />

      <ReviewsSection widgetId={embeds.reviewsCarDetailing} withHeading={false} />

      <FaqSection
        items={carFaqs}
        description="Everything you need to know about detailing with S&A."
      />

      <BookingCta />
    </div>
  );
}
