import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { locations } from "@/content/locations";
import { cn } from "@/lib/utils";

/**
 * The five service areas as simple cards, for the bottom of a service page.
 * No photos: the area photos belong to the Locations pages, so they never
 * repeat across the site (client feedback, 2026-10-30).
 */
export function AreasStrip({ service, className }: { service: string; className?: string }) {
  return (
    <section className={cn("px-5", sectionSpacing.y, className)}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          align="center"
          eyebrow={{ icon: <MapPinIcon />, label: "Service areas" }}
          title="Across Greater Vancouver"
          description={`We bring ${service} to neighbourhoods right across the city and the North Shore.`}
        />
        <div className="mt-12 grid grid-cols-5 gap-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {locations.map((location, index) => (
            <Reveal
              key={location.slug}
              delay={index * 80}
              className="max-xl:last:col-span-2 max-xl:last:col-start-2 max-md:last:col-span-2 max-md:last:col-start-1 max-sm:last:col-span-1"
            >
              <Link
                href={`/locations/${location.slug}`}
                className="group flex h-full flex-col rounded-[20px] border border-black/[0.08] bg-white p-6 no-underline transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-[22px] text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <MapPinIcon />
                </span>
                <span className="mt-5 font-heading text-[18px] leading-6 font-bold text-ink-soft">
                  {location.name}
                </span>
                <span className="mt-1 font-text text-[14px] leading-[22px] text-muted">
                  {location.neighbourhoods.slice(0, 3).join(", ")}
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-text text-[14px] font-semibold text-brand">
                  View area
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
