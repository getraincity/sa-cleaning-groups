import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import carBeforeAfterSeats from "@/assets/images/car-before-after-seats.webp";
import cleaningWindows from "@/assets/images/cleaning-windows.jpg";
import officeHallway from "@/assets/images/commercial/glass-hallway.jpg";
import kitchenCounter from "@/assets/images/kitchen-counter-02.jpg";
import { AboutSplit } from "@/components/sections/about-split";
import { BookingCta } from "@/components/sections/booking-cta";
import { FoundersQuote } from "@/components/sections/founders-quote";
import { GiftCardSection } from "@/components/sections/gift-card-section";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ReviewsProof } from "@/components/sections/reviews-proof";
import { SocialSection } from "@/components/sections/social-section";
import { ArrowRightIcon, BuildingIcon, CarIcon, HomeIcon, MapPinIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { pageMetadata } from "@/lib/metadata";
import { embeds } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({ title: "SA Cleaning Group", path: "/" });

type Service = {
  title: string;
  /** The service page's own colour scheme (see globals.css). */
  theme: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: StaticImageData;
  alt: string;
  /** Before/after collages have a white frame baked in; zoom past it. */
  framed?: boolean;
  text: string;
  href: string;
};

// The client's photo direction: a home detail, a car interior before/after
// and a tidy office or strata common area.
const services: Service[] = [
  {
    title: "Home Cleaning",
    theme: "theme-home",
    label: "Homes & condos",
    Icon: HomeIcon,
    image: kitchenCounter,
    alt: "A polished marble kitchen counter after an S&A home clean",
    text: "We offer quick, efficient home cleaning services throughout Vancouver, designed to give you more time for the things you enjoy. With a professional team and eco-friendly products, we ensure a spotless home while prioritizing your convenience and the environment.",
    href: "/home-cleaning",
  },
  {
    title: "Car Detailing",
    theme: "theme-car",
    label: "Cars, trucks & RVs",
    Icon: CarIcon,
    image: carBeforeAfterSeats,
    alt: "Car seats and floor mats before and after an S&A interior detail",
    framed: true,
    text: "We offer professional car detailing services in Vancouver, providing quick, efficient, and eco-friendly solutions. Our experienced team ensures your car looks its best, with customizable detailing packages to fit your needs.",
    href: "/car-detailing",
  },
  {
    title: "Custodian Services",
    theme: "theme-custodian",
    label: "Offices & stratas",
    Icon: BuildingIcon,
    image: officeHallway,
    alt: "A tidy, bright office corridor",
    text: "We keep offices, retail spaces, stratas and commercial buildings across Vancouver spotless with reliable custodial and janitorial cleaning. Our trained, background-checked team works around your schedule.",
    href: "/custodian-services",
  },
];

const steps = [
  {
    title: "Choose your service",
    text: "Home cleaning, car detailing or custodian services: tell us what needs a refresh.",
  },
  {
    title: "Book in minutes",
    text: "Pick a time online that suits you, or request a quote for your workplace.",
  },
  {
    title: "We arrive ready",
    text: "Our background-checked team brings professional equipment and eco-friendly products.",
  },
  {
    title: "Enjoy the results",
    text: "Come home to a spotless space, and get your time back for the things you love.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        image={cleaningWindows}
        className="py-[220px] max-md:py-[110px]"
        imageClassName="photo-calm"
        overlayClassName="bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.62)_100%)]"
        tagline={
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pr-4 pl-1.5 text-[16px] leading-6 text-white backdrop-blur-sm">
            <span className="flex size-7 items-center justify-center rounded-full bg-brand">
              <MapPinIcon className="size-4" />
            </span>
            Proudly serving Greater Vancouver
          </span>
        }
        title={
          <>
            Keeping Your Space Clean
            <br />
            Year-Round
          </>
        }
        description={
          <>
            Spending too much time cleaning? Start getting your time back with S&amp;A Cleaning
            <br className="max-lg:hidden" /> Group, trusted for home cleaning, car detailing and
            custodian services across Vancouver.
          </>
        }
      />

      <AboutSplit />

      <section className="bg-services-shape px-5 pb-[96px] max-lg:bg-none max-md:pb-16">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mt-0 text-center font-heading text-[40px] leading-[48px] text-body max-md:text-[32px] max-md:leading-10">
            Our Cleaning Services
          </h2>
          <p className="mx-auto mt-4 mb-0 max-w-[760px] text-center font-text text-[18px] leading-7 text-[#4a4a4a] max-md:text-[16px] max-md:leading-[26px]">
            From homes and vehicles to offices and commercial spaces, one trusted team keeps
            Vancouver spotless. Book your service today, in seconds.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 100}
                className={cn(service.theme, "max-lg:last:col-span-2 max-md:last:col-span-1")}
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white no-underline shadow-[0_1px_2px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.06] transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)]"
                >
                  <div
                    className={cn(
                      "relative aspect-[4/3] overflow-hidden max-lg:aspect-[16/10] max-md:aspect-[4/3]",
                      // The last card spans both tablet columns; keep its photo from towering.
                      index === services.length - 1 && "max-lg:aspect-[21/9]",
                    )}
                  >
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                      className={cn(
                        "object-cover photo-calm transition-transform duration-700 ease-out-quart",
                        service.framed
                          ? "scale-[1.08] group-hover:scale-[1.12]"
                          : "group-hover:scale-105",
                      )}
                    />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 py-1.5 pr-3.5 pl-1.5 font-text text-[13px] leading-5 font-semibold text-ink-soft shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                      <span className="flex size-6 items-center justify-center rounded-full bg-brand text-[14px] text-white">
                        <service.Icon />
                      </span>
                      {service.label}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7 max-sm:p-6">
                    <h3 className="mt-0 mb-3 font-heading text-[24px] leading-8 text-ink-soft">
                      {service.title}
                    </h3>
                    <p className="mb-6 font-text text-[15px] leading-[26px] text-muted">
                      {service.text}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 font-text text-[15px] font-semibold text-brand">
                      Learn More
                      <ArrowRightIcon className="size-[18px] transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        title="How It Works"
        description="Booking a cleaning with S&A takes just a few minutes. Here's what to expect."
        eyebrow="Simple from start to finish"
        steps={steps}
      />

      <ReviewsProof widgetId={embeds.reviewsHome} />
      <FoundersQuote />
      <SocialSection />
      <GiftCardSection />

      <BookingCta />
    </>
  );
}
