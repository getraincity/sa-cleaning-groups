import Image from "next/image";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { SparklesIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { portfolio, portfolioPhotoCount } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import { bookingLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Our Work: Cleaning Photos, Room by Room",
  path: "/our-work",
  description:
    "Photos of kitchens, bathrooms, floors, windows, offices and more after a professional clean. See the results S&A Cleaning Group delivers across Vancouver.",
});

const isBeforeAfter = (alt: string) => alt.startsWith("Before and after");

/**
 * Every photo we have, grouped by room or type of space (client feedback, 2026-11-21).
 * Not in the main menu: the "See all our work" buttons on the galleries lead here.
 */
export default function OurWorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Our Work", path: "/our-work" }])} />

      <section className={cn("bg-[#f7f5f2] px-5", sectionSpacing.top, "pb-[56px]")}>
        <div className="mx-auto max-w-[1440px]">
          <SectionHeader
            as="h1"
            align="center"
            eyebrow={{ icon: <SparklesIcon />, label: "Our work" }}
            title="Spotless Results, Room by Room"
            description={`${portfolioPhotoCount} photos of kitchens, bathrooms, floors, windows and workplaces after a professional clean. Pick a room to jump straight to it.`}
          />
          <nav aria-label="Photo categories" className="mt-8">
            <ul className="m-0 flex list-none flex-wrap justify-center gap-2 p-0">
              {portfolio.map((category) => (
                <li key={category.id}>
                  <a
                    href={`#${category.id}`}
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-black/10 bg-white px-4 font-text text-[14px] leading-5 font-medium text-ink-soft transition-colors hover:border-brand hover:text-brand"
                  >
                    {category.title}
                    <span className="text-[12px] text-muted">{category.photos.length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {portfolio.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          aria-labelledby={`${category.id}-title`}
          className={cn(
            "scroll-mt-[110px] px-5",
            index === 0 ? "pt-[64px] max-md:pt-[48px]" : "pt-[80px] max-md:pt-[56px]",
            index === portfolio.length - 1 && sectionSpacing.bottom,
          )}
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="flex items-end justify-between gap-6 border-b border-black/10 pb-4 max-sm:flex-col max-sm:items-start max-sm:gap-1">
              <h2
                id={`${category.id}-title`}
                className="my-0 font-heading text-[30px] leading-[36px] text-ink-soft max-md:text-[26px] max-md:leading-[32px]"
              >
                {category.title}
              </h2>
              <p className="m-0 font-text text-[15px] leading-6 text-muted">
                {category.description}
              </p>
            </div>

            <Reveal className="mt-6 columns-4 gap-4 max-xl:columns-3 max-md:columns-2 max-sm:gap-3">
              {category.photos.map((photo) => (
                <figure
                  key={photo.src}
                  className="relative m-0 mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-card max-sm:mb-3"
                >
                  <Image
                    src={photo}
                    alt={photo.alt}
                    sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw"
                    className="block h-auto w-full"
                  />
                  {isBeforeAfter(photo.alt) && (
                    <figcaption className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 font-text text-[11px] leading-4 font-semibold tracking-[0.04em] text-ink-soft uppercase backdrop-blur-sm">
                      Before &amp; after
                    </figcaption>
                  )}
                </figure>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBand
        eyebrow="Like what you see?"
        title="Get the Same Results at Your Place"
        text="Tell us about your home or workplace and we'll put together a clear, no-obligation quote."
        primary={{ label: "Book a cleaning", href: bookingLinks.homeCleaning }}
        secondary={{ label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref }}
      />
    </>
  );
}
