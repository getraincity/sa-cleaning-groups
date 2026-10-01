import vancouverSkyline from "@/assets/images/areas/downtown-skyline.jpg";
import { BookingCta } from "@/components/sections/booking-cta";
import { CompanyHistory } from "@/components/sections/company-history";
import { FounderIntro } from "@/components/sections/founder-intro";
import { PageHero } from "@/components/sections/page-hero";
import { ProductsEquipment } from "@/components/sections/products-equipment";
import { SafetySection } from "@/components/sections/safety-section";
import { TrustedPartners } from "@/components/sections/trusted-partners";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { WorkGallery } from "@/components/sections/work-gallery";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Us",
  path: "/about-us",
  description:
    "Meet Alex & Shaida and the S&A Cleaning Group team: 9+ years of home cleaning, car detailing and custodian services across Greater Vancouver.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={vancouverSkyline}
        tagline="We value your time as much as you do."
        title="About Us"
        description={
          <>
            Spending too much time cleaning your home? Start getting your time back with{" "}
            <br className="max-md:hidden" />
            S&amp;A Cleaning Group! Book your service today, in seconds.
          </>
        }
      />

      <FounderIntro />
      <CompanyHistory />
      <WhyChooseUs />
      <ProductsEquipment />
      <SafetySection />
      <TrustedPartners />
      <WorkGallery />

      <BookingCta />
    </>
  );
}
