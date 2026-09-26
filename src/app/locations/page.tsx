import Image from "next/image";
import Link from "next/link";
import { AreaIllustration } from "@/components/locations/area-illustration";
import { AreaMap } from "@/components/locations/area-map";
import { CtaBand } from "@/components/sections/cta-band";
import { ArrowRightIcon, MapPinIcon, MessageIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { locations } from "@/content/locations";
import { pageMetadata } from "@/lib/metadata";
import { bookingLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Locations: Cleaning & Detailing Across Greater Vancouver",
  path: "/locations",
  description:
    "Home cleaning, car detailing and custodian services in Downtown, North, East, West and South Vancouver. Find your area and book online.",
});

const neighbourhoodCount = locations.reduce((total, area) => total + area.neighbourhoods.length, 0);

const stats = [
  { value: String(locations.length), label: "Service areas" },
  { value: `${neighbourhoodCount}+`, label: "Neighbourhoods" },
  { value: "3", label: "Services" },
];

// Two wide cards on top, three below, on a 6-column grid.
const cardSpans = ["col-span-3", "col-span-3", "col-span-2", "col-span-2", "col-span-2"];

export default function LocationsPage() {
  return (
    <>
      <section className={cn("bg-[#f6f4f2] px-5", sectionSpacing.y)}>
        <div className="mx-auto grid max-w-[1440px] grid-cols-[6fr_5fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pr-4 pl-1.5 font-text text-[14px] text-ink-soft shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              <span className="flex size-6 items-center justify-center rounded-full bg-brand text-white">
                <MapPinIcon className="size-3.5" />
              </span>
              Locations
            </span>
            <h1 className="mt-6 mb-0 font-heading text-[46px] leading-[54px] text-ink-soft max-lg:text-[40px] max-lg:leading-[48px] max-sm:text-[32px] max-sm:leading-[40px]">
              Proudly Serving <span className="text-brand">Greater Vancouver</span>
            </h1>
            <p className="mt-5 mb-0 max-w-[580px] font-text text-[17px] leading-[30px] text-muted max-sm:text-[16px] max-sm:leading-7">
              From downtown condos to North Shore family homes, our team brings home cleaning, car
              detailing and custodian services to neighbourhoods right across the city. Choose your
              area to see how we work there.
            </p>
            <dl className="mt-9 mb-0 flex flex-wrap gap-x-12 gap-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="font-text text-[13px] text-muted">{stat.label}</dt>
                  <dd className="m-0 font-heading text-[34px] leading-10 font-bold text-ink-soft">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <AreaMap />
        </div>
      </section>

      <section className={cn("px-5", sectionSpacing.y)}>
        <div className="mx-auto max-w-[1440px]">
          <SectionHeader
            align="center"
            eyebrow={{ icon: <MapPinIcon />, label: "Our areas" }}
            title="Find Your Neighbourhood"
            description="Every part of Vancouver lives a little differently. Here's how we help in each one."
          />
          <div className="mt-12 grid grid-cols-6 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {locations.map((location, index) => (
              <Reveal
                key={location.slug}
                delay={(index % 3) * 100}
                className={cn(cardSpans[index], "max-lg:col-span-1")}
              >
                <Link
                  href={`/locations/${location.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl no-underline ring-1 ring-black/[0.06] transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.35)]"
                  style={{ backgroundColor: location.tint }}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden",
                      index < 2 ? "h-[260px]" : "h-[200px]",
                    )}
                  >
                    <Image
                      src={location.hero.image}
                      alt={location.hero.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.55))]" />
                    <h3 className="absolute bottom-4 left-5 m-0 font-heading text-[24px] leading-7 text-white">
                      {location.name}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-4 font-text text-[14px] leading-[22px] text-muted">
                      {location.tagline}.
                    </p>
                    <ul className="mb-5 flex list-none flex-wrap gap-1.5 pl-0">
                      {location.neighbourhoods.slice(0, 4).map((neighbourhood) => (
                        <li
                          key={neighbourhood}
                          className="rounded-full bg-white px-3 py-1 font-text text-[12px] leading-5 text-ink-soft"
                        >
                          {neighbourhood}
                        </li>
                      ))}
                      {location.neighbourhoods.length > 4 && (
                        <li className="rounded-full bg-white px-3 py-1 font-text text-[12px] leading-5 text-muted">
                          +{location.neighbourhoods.length - 4} more
                        </li>
                      )}
                    </ul>
                    <AreaIllustration slug={location.slug} className="mt-auto text-brand/25" />
                    <span className="mt-4 inline-flex items-center gap-1.5 font-text text-[14px] font-semibold text-brand">
                      Explore {location.short}
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-6 rounded-3xl border border-dashed border-black/15 px-8 py-6 max-md:flex-col max-md:items-start">
            <div className="flex items-center gap-4">
              <span className="flex size-11 min-w-11 items-center justify-center rounded-xl bg-brand-tint text-[22px] text-brand">
                <MessageIcon />
              </span>
              <p className="mb-0 font-text text-[15px] leading-6 text-muted">
                <strong className="block font-heading text-[17px] text-ink-soft">
                  Don&apos;t see your neighbourhood?
                </strong>
                Get in touch and we&apos;ll let you know if we can help.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-charcoal/20 px-5 py-3 font-text text-[15px] font-medium text-charcoal no-underline transition-colors hover:bg-charcoal hover:text-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Book online"
        title="Ready When You Are"
        text="Book your home cleaning online in minutes, or book a detail for your car, truck, RV or boat."
        primary={{ label: "Book home cleaning", href: bookingLinks.homeCleaning }}
        secondary={{ label: "Book car detailing", href: bookingLinks.carDetailing, external: true }}
      />
    </>
  );
}
