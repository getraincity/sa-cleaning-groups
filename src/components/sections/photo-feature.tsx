import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { CheckIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

export type PhotoFeatureRow = {
  eyebrow: { icon: ReactNode; label: string };
  title: string;
  text: string;
  points: string[];
  image: StaticImageData;
  alt: string;
};

type PhotoFeaturesProps = {
  rows: PhotoFeatureRow[];
  /** Optional heading above the rows. */
  header?: {
    eyebrow: { icon: ReactNode; label: string };
    title: ReactNode;
    description?: ReactNode;
  };
  className?: string;
};

/** Alternating photo-and-copy rows: a large photo beside a short story and a checklist. */
export function PhotoFeatures({ rows, header, className }: PhotoFeaturesProps) {
  return (
    <section className={cn("px-5", sectionSpacing.y, className)}>
      <div className="mx-auto max-w-[1240px]">
        {header && (
          <SectionHeader
            align="center"
            eyebrow={header.eyebrow}
            title={header.title}
            description={header.description}
            className="mb-14"
          />
        )}
        <div className="grid gap-20 max-md:gap-14">
          {rows.map((row, index) => (
            <div
              key={row.title}
              className="grid grid-cols-2 items-center gap-16 max-lg:gap-10 max-md:grid-cols-1"
            >
              <Reveal
                from={index % 2 ? "right" : "bottom"}
                className={cn(
                  "relative aspect-[5/4] overflow-hidden rounded-3xl shadow-[0_30px_60px_-34px_rgba(0,0,0,0.5)]",
                  index % 2 && "md:order-2",
                )}
              >
                <Image
                  src={row.image}
                  alt={row.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
              <div>
                <SectionHeader eyebrow={row.eyebrow} title={row.title} description={row.text} />
                <ul className="mt-7 mb-0 grid list-none gap-3 pl-0">
                  {row.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 font-text text-[15px] leading-6 text-ink-soft"
                    >
                      <span className="mt-0.5 flex size-6 min-w-6 items-center justify-center rounded-md bg-brand-tint text-[14px] text-brand">
                        <CheckIcon />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
