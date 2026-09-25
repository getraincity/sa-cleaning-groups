import Image from "next/image";
import Link from "next/link";
import carInteriorSeats from "@/assets/images/car-interior-seats.jpg";
import livingRoom from "@/assets/images/cleaning-living-room.jpg";
import cleaningWindows from "@/assets/images/cleaning-windows.jpg";
import detailingDashboard from "@/assets/images/detailing-dashboard.png";
import { AboutSplit } from "@/components/sections/about-split";
import { BookingCta } from "@/components/sections/booking-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { Reveal } from "@/components/ui/reveal";
import { pageMetadata } from "@/lib/metadata";
import { embeds } from "@/lib/site";

export const metadata = pageMetadata({ title: "SA Cleaning Group", path: "/" });

const services = [
  {
    title: "Home Cleaning",
    image: cleaningWindows,
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
    title: "Snow Removal",
    image: detailingDashboard,
    alt: "Snow Removal",
    text: "We know how much a bad snow day can ruin your plans. That's why during the winter months, we offer snow removal for homes, stratas, and offices so you can get back to life as usual. Contact us today to learn more.",
    cta: { label: "Coming Soon!", href: "/contact-us" },
  },
];

const introCopy = (
  <>
    Spending too much time cleaning your home? Start getting your time back with <br />
    S&amp;A Cleaning Group! Book your service today, in seconds.
  </>
);

export default function HomePage() {
  return (
    <>
      <PageHero
        image={livingRoom}
        alignImageTopLeft
        className="py-[220px]"
        tagline="We value your time as much as you do"
        title={
          <>
            Keeping Your Space Clean
            <br />
            Year-Round
          </>
        }
        description={introCopy}
      />

      <ReviewsSection widgetId={embeds.reviewsHome} />

      <section className="px-5 pt-[140px] max-md:pt-[60px]">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-center font-heading text-[40px] text-body">Our Cleaning Services</h2>
          <p className="mt-5 text-center font-text text-[20px] leading-6 text-[#4a4a4a]">
            {introCopy}
          </p>
        </div>
      </section>

      <section className="-mt-[100px] bg-services-shape px-5 pb-[100px] max-lg:mt-0 max-lg:bg-none">
        <div className="mx-auto max-w-[1440px] pt-[140px] max-md:pt-[60px]">
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {services.map((service) => (
              <Reveal
                key={service.title}
                className="relative min-h-[364px] overflow-hidden rounded-3xl bg-white p-[26px]"
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                  className="object-cover blur-[9px]"
                />
                <div className="absolute inset-0 bg-[#0006]" />
                <div className="relative z-[2]">
                  <h3 className="mb-0 font-heading text-[25px] leading-[34px] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-5 mb-0 font-text text-[16px] leading-[21px] text-white">
                    {service.text}
                  </p>
                  <Link
                    href={service.cta.href}
                    className="mt-10 inline-block rounded-xl bg-brand px-[50px] py-5 text-center font-text text-[16px] font-medium text-white no-underline max-sm:block max-sm:h-full max-sm:w-full max-sm:px-0"
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

      <BookingCta />
    </>
  );
}
