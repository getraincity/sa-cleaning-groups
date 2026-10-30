import Image from "next/image";
import Link from "next/link";
import beforeAfterInterior01 from "@/assets/images/car-before-after-interior-01.webp";
import beforeAfterInterior02 from "@/assets/images/car-before-after-interior-02.webp";
import beforeAfterWheels from "@/assets/images/car-before-after-wheels.webp";
import { ArrowRightIcon, BuildingIcon, HistoryIcon, HomeIcon } from "@/components/ui/icons";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

// Kept as a record only: S&A Cleaning Group doesn't offer car detailing. The
// previous company did, so the page stays (linked from Our Story on About)
// but is left out of the menus, the footer and the sitemap.
// TO CONFIRM: the client's wording for who did car detailing.
export const metadata = pageMetadata({
  title: "Car Detailing: Our History",
  path: "/car-detailing",
  description:
    "Car detailing was offered by the previous company. S&A Cleaning Group doesn't offer it: we focus on home cleaning and custodian services in Vancouver.",
});

const archive = [
  {
    image: beforeAfterInterior01,
    alt: "Before and after: a muddy truck floor and driver's seat, cleaned",
  },
  {
    image: beforeAfterInterior02,
    alt: "Before and after: a car's back seat and carpets, cleaned",
  },
  {
    image: beforeAfterWheels,
    alt: "Before and after: a dirty truck wheel and tire, cleaned",
  },
];

const today = [
  {
    Icon: HomeIcon,
    title: "Home Cleaning",
    text: "Recurring, deep and move-in/out cleans for homes and condos.",
    href: "/home-cleaning",
  },
  {
    Icon: BuildingIcon,
    title: "Custodian Services",
    text: "Cleaning for offices and commercial spaces.",
    href: "/custodian-services",
  },
];

export default function CarDetailingHistoryPage() {
  return (
    <>
      <section className="bg-[#f6f4f2] px-5 pt-16 pb-14 max-md:pt-10">
        <div className="mx-auto max-w-[820px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pr-4 pl-1.5 font-text text-[14px] text-ink-soft shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
            <span className="flex size-6 items-center justify-center rounded-full bg-brand text-white">
              <HistoryIcon className="size-3.5" />
            </span>
            Our history
          </span>
          <h1 className="mt-6 mb-0 font-heading text-[40px] leading-[48px] text-ink-soft max-sm:text-[32px] max-sm:leading-[40px]">
            Car Detailing
          </h1>
          <p className="mt-5 mb-0 font-text text-[17px] leading-[30px] text-muted max-sm:text-[16px] max-sm:leading-7">
            Car detailing was offered by the previous company. S&amp;A Cleaning Group doesn&apos;t
            offer car detailing: today we focus on home cleaning and custodian services across
            Greater Vancouver. We&apos;ve kept a few photos from those years here as part of our
            story.
          </p>
        </div>
      </section>

      <section className={cn("px-5", sectionSpacing.top)}>
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            eyebrow={{ icon: <HistoryIcon />, label: "From the archive" }}
            title="Past Car Detailing Work"
            description="Before-and-after photos from the previous company's car detailing."
          />
          <ul className="mt-10 mb-0 grid list-none grid-cols-3 gap-4 pl-0 max-md:grid-cols-1">
            {archive.map(({ image, alt }) => (
              <li key={image.src}>
                <Image
                  src={image}
                  alt={alt}
                  sizes="(max-width: 767px) 100vw, 400px"
                  className="aspect-square h-auto w-full rounded-2xl object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={cn("px-5", sectionSpacing.y)}>
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            align="center"
            eyebrow={{ icon: <ArrowRightIcon />, label: "What we do today" }}
            title="Our Services"
          />
          <div className="mx-auto mt-10 grid max-w-[960px] grid-cols-2 gap-4 max-md:grid-cols-1">
            {today.map(({ Icon, title, text, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex items-center gap-5 rounded-[20px] border border-black/[0.08] p-6 no-underline transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
              >
                <span className="flex size-14 min-w-14 items-center justify-center rounded-2xl bg-brand text-[26px] text-white">
                  <Icon />
                </span>
                <span>
                  <span className="block font-heading text-[18px] leading-6 font-bold text-ink-soft">
                    {title}
                  </span>
                  <span className="mt-1 block font-text text-[14px] leading-[22px] text-muted">
                    {text}
                  </span>
                </span>
                <ArrowRightIcon className="ml-auto size-5 min-w-5 text-brand transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
