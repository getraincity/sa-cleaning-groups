import Image from "next/image";
import Link from "next/link";
import carInteriorSeats from "@/assets/images/car-interior-seats.jpg";
import livingRoom from "@/assets/images/cleaning-living-room.jpg";
import cleaningWindows from "@/assets/images/cleaning-windows.jpg";
import kitchenIsland from "@/assets/images/kitchen-island.jpg";
import { AboutSplit } from "@/components/sections/about-split";
import { BookingCta } from "@/components/sections/booking-cta";
import { FoundersQuote } from "@/components/sections/founders-quote";
import { GiftCardSection } from "@/components/sections/gift-card-section";
import { PageHero } from "@/components/sections/page-hero";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { SocialSection } from "@/components/sections/social-section";
import { MapPinIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { pageMetadata } from "@/lib/metadata";
import { embeds } from "@/lib/site";

export const metadata = pageMetadata({ title: "SA Cleaning Group", path: "/" });

const services = [
  {
    title: "Home Cleaning",
    image: kitchenIsland,
    alt: "Home cleaning",
    text: "We offer quick, efficient home cleaning services throughout Vancouver, designed to give you more time for the things you enjoy. With a professional team and eco-friendly products, we ensure a spotless home or car while prioritizing your convenience and the environment.",
    cta: { label: "Learn More", href: "/home-cleaning" },
  },
  {
    title: "Car Detailing",
    image: carInteriorSeats,
    alt: "Car Detailing",
    text: "We offer professional car detailing services in Vancouver, providing quick, efficient, and eco-friendly solutions. Our experienced team ensures your car looks its best, with customizable detailing packages to fit your needs. Book online for hassle-free service and a spotless vehicle every time.",
    cta: { label: "Learn More", href: "/car-detailing" },
  },
  {
    title: "Custodian Services",
    image: cleaningWindows,
    alt: "Custodian Services",
    text: "We keep offices, retail spaces, stratas and commercial buildings across Vancouver spotless with reliable custodial and janitorial cleaning. Our trained, background-checked team works around your schedule, so your space is always ready for business.",
    cta: { label: "Learn More", href: "/custodian-services" },
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        image={livingRoom}
        alignImageTopLeft
        className="py-[220px]"
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

      <ReviewsSection widgetId={embeds.reviewsHome} />

      <section className="px-5 pt-[140px] max-md:pt-[60px]">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-center font-heading text-[40px] text-body">Our Cleaning Services</h2>
          <p className="mx-auto mt-5 max-w-[760px] text-center font-text text-[20px] leading-7 text-[#4a4a4a]">
            From homes and vehicles to offices and commercial spaces, one trusted team keeps
            Vancouver spotless. Book your service today, in seconds.
          </p>
        </div>
      </section>

      <section className="-mt-[100px] bg-services-shape px-5 pb-[100px] max-lg:mt-0 max-lg:bg-none">
        <div className="mx-auto max-w-[1440px] pt-[140px] max-md:pt-[60px]">
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {services.map((service) => (
              <Reveal
                key={service.title}
                className="relative flex min-h-[364px] flex-col overflow-hidden rounded-3xl bg-white p-[26px] max-lg:last:col-span-2 max-md:last:col-span-1"
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                  className="object-cover blur-[9px]"
                />
                <div className="absolute inset-0 bg-[#0006]" />
                <div className="relative z-[2] flex flex-1 flex-col items-start">
                  <h3 className="mb-0 font-heading text-[25px] leading-[34px] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-5 mb-10 font-text text-[16px] leading-[21px] text-white">
                    {service.text}
                  </p>
                  <Link
                    href={service.cta.href}
                    className="mt-auto inline-block rounded-xl bg-brand px-[50px] py-5 text-center font-text text-[16px] font-medium text-white no-underline max-sm:block max-sm:h-full max-sm:w-full max-sm:px-0"
                  >
                    {service.cta.label}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <AboutSplit />
        </div>
      </section>

      <FoundersQuote />
      <GiftCardSection />
      <SocialSection />

      <BookingCta />
    </>
  );
}
