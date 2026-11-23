import Image from "next/image";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { SparklesIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { portfolioGroups, portfolioPhotoCount } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import { bookingLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Our Work: Cleaning Photos, Room by Room",
  path: "/our-work",
  description:
    "Photos of homes, condos, offices and shops after a professional clean, room by room. See the results S&A Cleaning Group delivers across Vancouver.",
});

const isBeforeAfter = (alt: string) => alt.startsWith("Before and after");

/**
 * Every photo we have: homes room by room, then commercial spaces by type (client feedback,
 * WhatsApp 2026-11-21 and the doc, 2026-11-22). Not in the main menu: the "Come see spaces
 * we've worked on" buttons under the galleries lead here.
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
            title="Spaces We've Worked On"
            description={`${portfolioPhotoCount} photos of homes, condos, offices and shops after a professional clean. Pick a room or a type of space to jump straight to it.`}
          />
          <nav
            aria-label="Photo categories"
            className="mx-auto mt-8 flex max-w-[1100px] flex-col gap-4"
          >
            {portfolioGroups.map((group) => (
              <div
                key={group.id}
                className="flex items-center justify-center gap-3 max-md:flex-col max-md:gap-2"
              >
                <a
                  href={`#${group.id}`}
                  className="inline-flex min-h-[40px] shrink-0 items-center font-text text-[13px] leading-5 font-semibold tracking-[0.06em] text-ink-soft uppercase no-underline hover:text-brand"
                >
                  {group.title}
                </a>
                <ul className="m-0 flex list-none flex-wrap justify-center gap-2 p-0">
                  {group.categories.map((category) => (
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
              </div>
            ))}
          </nav>
        </div>
      </section>

      {portfolioGroups.map((group, groupIndex) => (
        <div key={group.id} id={group.id} className="scroll-mt-[90px]">
          <div
            className={cn(
              "px-5",
              groupIndex === 0 ? "pt-[64px] max-md:pt-[48px]" : "pt-[112px] max-md:pt-[72px]",
            )}
          >
            <div className="mx-auto max-w-[1440px]">
              <h2 className="my-0 font-heading text-[36px] leading-[44px] text-ink-soft max-md:text-[30px] max-md:leading-[38px]">
                {group.title}
              </h2>
              <p className="mt-2 mb-0 font-text text-[16px] leading-[26px] text-muted">
                {group.description}
              </p>
            </div>
          </div>

          {group.categories.map((category, index) => (
            <section
              key={category.id}
              id={category.id}
              aria-labelledby={`${category.id}-title`}
              className={cn(
                "scroll-mt-[110px] px-5",
                index === 0 ? "pt-[40px] max-md:pt-[32px]" : "pt-[72px] max-md:pt-[56px]",
                groupIndex === portfolioGroups.length - 1 &&
                  index === group.categories.length - 1 &&
                  sectionSpacing.bottom,
              )}
            >
              <div className="mx-auto max-w-[1440px]">
                <div className="flex items-end justify-between gap-6 border-b border-black/10 pb-4 max-sm:flex-col max-sm:items-start max-sm:gap-1">
                  <h3
                    id={`${category.id}-title`}
                    className="my-0 font-heading text-[26px] leading-[32px] text-ink-soft max-md:text-[22px] max-md:leading-[28px]"
                  >
                    {category.title}
                  </h3>
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
        </div>
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
