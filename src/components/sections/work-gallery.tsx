import Image, { type StaticImageData } from "next/image";
import kitchenAppliances from "@/assets/images/kitchen-appliances.jpg";
import kitchenCandle from "@/assets/images/kitchen-counter-01.jpg";
import kitchenMicrowave from "@/assets/images/kitchen-microwave.jpg";
import kitchenSink from "@/assets/images/kitchen-sink.jpg";
import livingRoom from "@/assets/images/living-room.jpg";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { SparklesIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Photo = {
  image: StaticImageData;
  caption: string;
  /** Grid placement on the 4-column desktop and 2-column mobile layouts. */
  className: string;
  sizes: string;
};

// Homes only, and none of the photos the home page already shows, so the
// About page has its own, homier set (client feedback, 2026-10-01).
const photos: Photo[] = [
  {
    image: livingRoom,
    caption: "Living space, ready to relax",
    className: "col-span-2 row-span-2",
    sizes: "(max-width: 767px) 100vw, 50vw",
  },
  {
    image: kitchenCandle,
    caption: "Little touches, done right",
    className: "row-span-2",
    sizes: "(max-width: 767px) 50vw, 25vw",
  },
  {
    image: kitchenAppliances,
    caption: "A fresh, bright kitchen",
    className: "row-span-2",
    sizes: "(max-width: 767px) 50vw, 25vw",
  },
  {
    image: kitchenSink,
    caption: "Counters and sinks that shine",
    className: "col-span-2",
    sizes: "(max-width: 767px) 100vw, 50vw",
  },
  {
    image: kitchenMicrowave,
    caption: "Appliances inside and out",
    className: "col-span-2",
    sizes: "(max-width: 767px) 100vw, 50vw",
  },
];

/** A bento grid of recent jobs, homes and vehicles, with short captions. */
export function WorkGallery() {
  return (
    <section className={cn("px-5", sectionSpacing.y)}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          align="center"
          eyebrow={{ icon: <SparklesIcon />, label: "Our work" }}
          title="Spotless Results, Every Time"
          description="A look inside a few of the Vancouver homes our team has brought back to life."
        />

        <Reveal className="mt-10 grid auto-rows-[210px] grid-cols-4 gap-3 max-md:auto-rows-[160px] max-md:grid-cols-2">
          {photos.map((photo) => (
            <figure
              key={photo.caption}
              className={cn(
                "group relative m-0 overflow-hidden rounded-2xl bg-card",
                photo.className,
              )}
            >
              <Image
                src={photo.image}
                alt={photo.caption}
                fill
                sizes={photo.sizes}
                className="object-cover photo-calm transition-transform duration-700 ease-out-quart group-hover:scale-105"
              />
              <figcaption className="absolute bottom-3 left-3 max-w-[calc(100%-24px)] rounded-full bg-white/90 px-3 py-1.5 font-text text-[13px] leading-4 font-medium text-ink-soft backdrop-blur-sm max-sm:rounded-lg max-sm:text-[11px]">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
