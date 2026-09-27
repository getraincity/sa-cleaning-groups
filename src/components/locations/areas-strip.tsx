import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { locations } from "@/content/locations";
import { cn } from "@/lib/utils";

/** The five service areas as photo cards, for the bottom of a service page. */
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
        <div className="mt-12 grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {locations.map((location, index) => (
            <Reveal key={location.slug} delay={index * 80}>
              <Link
                href={`/locations/${location.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-[20px] no-underline max-sm:aspect-[16/10]"
              >
                <Image
                  src={location.area.image}
                  alt={location.area.alt}
                  fill
                  sizes="(max-width: 479px) 100vw, (max-width: 991px) 33vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.65))]" />
                <span className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-2 font-heading text-[18px] leading-6 font-bold text-white">
                  {location.name}
                  <ArrowRightIcon className="size-5 min-w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
