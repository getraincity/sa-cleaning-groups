import { AnswerBlocks } from "@/components/sections/answer-blocks";
import { BookingCta } from "@/components/sections/booking-cta";
import { CompanyFacts } from "@/components/sections/company-facts";
import { CompanyHistory } from "@/components/sections/company-history";
import { FaqSection, type Faq } from "@/components/sections/faq-section";
import { FounderIntro } from "@/components/sections/founder-intro";
import { PageHero } from "@/components/sections/page-hero";
import { ReviewsProof } from "@/components/sections/reviews-proof";
import { ProductsEquipment } from "@/components/sections/products-equipment";
import { SafetySection } from "@/components/sections/safety-section";
import { TrustedPartners } from "@/components/sections/trusted-partners";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { WorkGallery } from "@/components/sections/work-gallery";
import { aboutAnswers } from "@/content/answers";
import { stock } from "@/content/stock-photos";
import { pageMetadata } from "@/lib/metadata";
import { embeds, siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "About S&A Cleaning Group, Vancouver BC",
  path: "/about-us",
  description:
    "S&A Cleaning Group, formerly Akumal Executive Cleaning, is a licensed, insured Greater Vancouver cleaning company co-founded by Alex & Shaida. 9+ years.",
});

const aboutFaqs: Faq[] = [
  {
    question: "Where does S&A Cleaning Group work?",
    answer:
      "We serve homes and businesses across Greater Vancouver, BC: Downtown, North, East, West and South Vancouver. Our team travels to you. If you're nearby and not sure we cover your address, send us a message.",
    links: [{ label: "See all service areas", href: "/locations" }],
  },
  {
    question: "How long has S&A Cleaning Group been in business?",
    answer:
      "More than nine years. We began as Akumal Executive Cleaning and now operate as S&A Cleaning Group, with co-founders Alex and Shaida.",
  },
  {
    question: "What services does S&A Cleaning Group offer?",
    answer:
      "Home cleaning, with recurring Silver, Gold and Diamond plans and hourly cleaning, and custodian services (commercial and janitorial cleaning) for offices, retail spaces, strata buildings and other commercial properties.",
    links: [
      { label: "Home cleaning", href: "/home-cleaning" },
      { label: "Custodian services", href: "/custodian-services" },
    ],
  },
  {
    question: "Are your team members background-checked?",
    answer:
      "Yes. Every member of our team completes a criminal and background check before employment, and the company is fully licensed and insured.",
  },
  {
    question: "What products do you use?",
    answer:
      "Eco-friendly, pet-friendly, hospital-grade products, including natural disinfectants that eliminate up to 98.9% of bacteria, used with professional equipment.",
    links: [{ label: "Products we trust", href: "/products-we-trust" }],
  },
  {
    question: "How can I contact S&A Cleaning Group?",
    answer: `Call ${siteConfig.phone}, email ${siteConfig.email}, or use the form on our contact page. For home cleaning you can also use any Book button on the site.`,
    links: [{ label: "Contact us", href: "/contact-us" }],
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About Us", path: "/about-us" }])} />
      <PageHero
        image={stock.aboutHero}
        tagline="We value your time as much as you do."
        title="About S&A Cleaning Group"
        description={
          <>
            Formerly Akumal Executive Cleaning, a licensed and insured cleaning company{" "}
            <br className="max-md:hidden" />
            serving homes and businesses across Greater Vancouver, BC.
          </>
        }
      />

      <FounderIntro />
      <CompanyFacts />
      <CompanyHistory />
      <WhyChooseUs />
      <ProductsEquipment />
      <SafetySection />
      <AnswerBlocks
        items={aboutAnswers}
        title="Who We Are: Quick Answers"
        description="The basics about S&A Cleaning Group, in plain terms."
      />
      <TrustedPartners />
      <WorkGallery />
      <ReviewsProof widgetId={embeds.reviewsHome} withProof={false} />
      <FaqSection items={aboutFaqs} description="More about S&A Cleaning Group." />

      <BookingCta />
    </>
  );
}
