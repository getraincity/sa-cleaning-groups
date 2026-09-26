import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AreaIllustration } from "@/components/locations/area-illustration";
import { AreaMap } from "@/components/locations/area-map";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import {
  ArrowRightIcon,
  BuildingIcon,
  CarIcon,
  ChevronRightIcon,
  HomeIcon,
  MapPinIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { getLocation, locations } from "@/content/locations";
import { pageMetadata } from "@/lib/metadata";
import { bookingLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

// Only the five areas exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props) {
  const location = getLocation((await params).slug);
  if (!location) return {};
  return pageMetadata({
    title: `House Cleaning & Car Detailing in ${location.name}`,
    path: `/locations/${location.slug}`,
    description: location.metaDescription,
  });
}

const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-[14px] font-text text-[16px] font-medium no-underline transition-colors max-sm:w-full";

export default async function LocationPage({ params }: Props) {
  const location = getLocation((await params).slug);
  if (!location) notFound();

  const others = locations.filter((other) => other.slug !== location.slug);
  const services = [
    {
      Icon: HomeIcon,
      title: "Home Cleaning",
      href: "/home-cleaning",
      text: location.services.home,
    },
    { Icon: CarIcon, title: "Car Detailing", href: "/car-detailing", text: location.services.car },
    {
      Icon: BuildingIcon,
      title: "Custodian Services",
      href: "/custodian-services",
      text: location.services.custodian,
    },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: siteConfig.name,
          url: `${siteConfig.url}/locations/${location.slug}`,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          areaServed: { "@type": "Place", name: `${location.name}, BC` },
        }}
      />

      {/* Hero: copy and photo, with the area's skyline along the bottom. */}
      <section className="overflow-hidden px-5 pt-10" style={{ backgroundColor: location.tint }}>
        <div className="mx-auto max-w-[1440px]">
          <nav aria-label="Breadcrumb" className="font-text text-[13px] text-muted">
            <ol className="mb-0 flex list-none flex-wrap items-center gap-1.5 pl-0">
              <li>
                <Link href="/" className="text-muted no-underline hover:text-brand">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRightIcon className="size-3.5" />
                <Link href="/locations" className="text-muted no-underline hover:text-brand">
                  Locations
                </Link>
              </li>
              <li
                aria-current="page"
                className="flex items-center gap-1.5 font-semibold text-ink-soft"
              >
                <ChevronRightIcon className="size-3.5" />
                {location.name}
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid grid-cols-[7fr_5fr] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-10 max-md:mt-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pr-4 pl-1.5 font-text text-[14px] text-ink-soft shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                <span className="flex size-6 items-center justify-center rounded-full bg-brand text-white">
                  <MapPinIcon className="size-3.5" />
                </span>
                {location.tagline}
              </span>
              <h1 className="mt-6 mb-0 font-heading text-[46px] leading-[54px] text-ink-soft max-lg:text-[40px] max-lg:leading-[48px] max-sm:text-[32px] max-sm:leading-[40px]">
                Home Cleaning &amp; Car Detailing in{" "}
                <span className="text-brand">{location.name}</span>
              </h1>
              <p className="mt-5 mb-0 max-w-[620px] font-text text-[17px] leading-[30px] text-muted max-sm:text-[16px] max-sm:leading-7">
                {location.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={bookingLinks.homeCleaning}
                  className={cn(buttonClass, "bg-brand text-white hover:bg-brand-alt")}
                >
                  Book home cleaning
                </Link>
                <a
                  href={bookingLinks.carDetailing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonClass, "bg-charcoal text-white hover:bg-ink")}
                >
                  Book car detailing
                </a>
              </div>

              <p className="mt-9 mb-3 font-text text-[12px] font-semibold tracking-[0.2em] text-muted uppercase">
                Neighbourhoods we serve
              </p>
              <ul className="mb-0 flex list-none flex-wrap gap-2 pl-0">
                {location.neighbourhoods.map((neighbourhood) => (
                  <li
                    key={neighbourhood}
                    className="rounded-full border border-black/10 bg-white/70 px-3.5 py-1.5 font-text text-[13px] leading-5 text-ink-soft"
                  >
                    {neighbourhood}
                  </li>
                ))}
              </ul>
            </div>

            <Reveal className="relative mx-auto w-full max-w-[480px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)] max-lg:aspect-[4/3]">
                <Image
                  src={location.hero.image}
                  alt={location.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 991px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.35)] max-sm:left-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-tint text-[20px] text-brand">
                  <ShieldCheckIcon />
                </span>
                <span className="font-text text-[13px] leading-[18px] text-ink-soft">
                  <strong className="block font-semibold">Licensed &amp; insured</strong>
                  Background-checked local team
                </span>
              </div>
              <span className="absolute top-5 -right-4 rounded-full bg-ink-soft px-4 py-2 font-text text-[13px] font-semibold text-white shadow-lg max-sm:right-3">
                9+ years in Vancouver
              </span>
            </Reveal>
          </div>
        </div>

        <AreaIllustration
          slug={location.slug}
          className="mx-auto mt-16 max-w-[1200px] text-brand/30 max-md:mt-12"
        />
      </section>

      {/* Local know-how, then a local tip. */}
      <section className={cn("px-5", sectionSpacing.y)}>
        <div className="mx-auto max-w-[1440px]">
          <SectionHeader
            eyebrow={{ icon: <SparklesIcon />, label: "Local know-how" }}
            title={location.knowHow.title}
            description={`What makes cleaning in ${location.short} different, and how our team handles it.`}
            className="max-w-[680px]"
          />
          <div className="mt-10 grid grid-cols-3 gap-4 max-lg:grid-cols-1">
            {location.knowHow.items.map(({ Icon, title, text }, index) => (
              <Reveal
                key={title}
                delay={index * 100}
                className="relative rounded-[20px] border border-black/[0.08] bg-white p-7"
              >
                <span className="absolute top-6 right-7 font-heading text-[40px] leading-none font-bold text-black/[0.05]">
                  0{index + 1}
                </span>
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-tint text-[24px] text-brand">
                  <Icon />
                </span>
                <h3 className="mt-5 mb-2 font-heading text-[19px] leading-[26px] text-ink-soft">
                  {title}
                </h3>
                <p className="mb-0 font-text text-[14px] leading-[22px] text-muted">{text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal
            className="mt-6 grid grid-cols-[5fr_7fr] overflow-hidden rounded-3xl max-md:grid-cols-1"
            from="bottom"
          >
            <div className="relative min-h-[260px] max-md:aspect-[16/10] max-md:min-h-0">
              <Image
                src={location.tip.image}
                alt={location.tip.alt}
                fill
                sizes="(max-width: 767px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div
              className="flex flex-col justify-center p-10 max-sm:p-7"
              style={{ backgroundColor: location.tint }}
            >
              <p className="mb-3 inline-flex items-center gap-2 font-text text-[12px] font-semibold tracking-[0.2em] text-brand uppercase">
                <SparklesIcon className="size-4" />
                Local tip
              </p>
              <h3 className="mt-0 mb-3 font-heading text-[26px] leading-8 text-ink-soft max-sm:text-[22px] max-sm:leading-7">
                {location.tip.title}
              </h3>
              <p className="mb-0 max-w-[560px] font-text text-[16px] leading-7 text-muted">
                {location.tip.text}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services, described for this area. */}
      <section className={cn("bg-[#1c1c1e] px-5", sectionSpacing.y)}>
        <div className="mx-auto max-w-[1440px]">
          <SectionHeader
            align="center"
            tone="dark"
            eyebrow={{ icon: <MapPinIcon />, label: location.name }}
            title={`Our Services in ${location.short}`}
          />
          <div className="mt-12 grid grid-cols-3 gap-4 max-lg:grid-cols-1">
            {services.map(({ Icon, title, href, text }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col rounded-[20px] bg-white/[0.04] p-7 no-underline ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/[0.08]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-[24px] text-white">
                  <Icon />
                </span>
                <h3 className="mt-5 mb-2 font-heading text-[19px] leading-[26px] text-white">
                  {title}
                </h3>
                <p className="mb-6 font-text text-[14px] leading-[22px] text-white/65">{text}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 font-text text-[14px] font-semibold text-white">
                  Learn more
                  <ArrowRightIcon className="size-4 text-brand transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The other areas, with the map. */}
      <section className={cn("px-5", sectionSpacing.top)}>
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHeader
              eyebrow={{ icon: <MapPinIcon />, label: "Service areas" }}
              title="Also Serving Greater Vancouver"
              description="Our team works across the city and the North Shore. Explore the other areas we serve."
            />
            <ul className="mt-8 mb-0 list-none divide-y divide-black/[0.08] border-y border-black/[0.08] pl-0">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/locations/${other.slug}`}
                    className="group flex items-center justify-between gap-4 py-4 no-underline"
                  >
                    <span>
                      <span className="block font-heading text-[17px] leading-6 font-bold text-ink-soft transition-colors group-hover:text-brand">
                        {other.name}
                      </span>
                      <span className="block font-text text-[13px] leading-5 text-muted">
                        {other.neighbourhoods.slice(0, 3).join(", ")}
                      </span>
                    </span>
                    <ArrowRightIcon className="size-5 min-w-5 text-brand transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/locations"
              className="mt-5 inline-flex items-center gap-1.5 font-text text-[15px] font-semibold text-brand no-underline hover:underline"
            >
              View all locations
            </Link>
          </div>
          <AreaMap active={location.slug} />
        </div>
      </section>

      <FaqSection
        items={location.faqs}
        title={`Questions from ${location.short}`}
        description={`Answers to what ${location.name} clients ask us most.`}
      />

      <CtaBand
        eyebrow={location.name}
        title={`Ready for a Spotless ${location.short} Home?`}
        text="Book your home cleaning online in minutes, or book a detail for your car, truck, RV or boat."
        primary={{ label: "Book home cleaning", href: bookingLinks.homeCleaning }}
        secondary={{ label: "Book car detailing", href: bookingLinks.carDetailing, external: true }}
      />
    </>
  );
}
