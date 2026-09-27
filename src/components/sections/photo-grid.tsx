import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

export type PhotoGridItem = {
  image: StaticImageData;
  alt: string;
  title: string;
  /** A short line under the title. */
  text?: string;
  /** A small label on the photo, e.g. "Residential". */
  tag?: string;
};

type PhotoGridProps = {
  eyebrow: { icon: ReactNode; label: ReactNode };
  title: ReactNode;
  description?: ReactNode;
  items: PhotoGridItem[];
  /** Section background. */
  className?: string;
};

/** A row of captioned photos: places, spaces or work, three or four across. */
export function PhotoGrid({ eyebrow, title, description, items, className }: PhotoGridProps) {
  return (
    <section className={cn("px-5", sectionSpacing.y, className)}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader align="center" eyebrow={eyebrow} title={title} description={description} />
        <div
          className={cn(
            "mt-12 grid gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1",
            items.length % 4 === 0
              ? "grid-cols-4"
              : items.length === 2
                ? "grid-cols-2"
                : "grid-cols-3",
          )}
        >
          {items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) * 90} className="group">
              <figure className="m-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                  />
                  {item.tag && (
                    <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 font-text text-[12px] font-semibold text-ink-soft backdrop-blur">
                      {item.tag}
                    </span>
                  )}
                </div>
                <figcaption className="mt-4">
                  <p className="mb-1 font-heading text-[18px] leading-6 font-bold text-ink-soft">
                    {item.title}
                  </p>
                  {item.text && (
                    <p className="mb-0 font-text text-[14px] leading-[22px] text-muted">
                      {item.text}
                    </p>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
