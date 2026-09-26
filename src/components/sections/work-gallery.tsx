import Image, { type StaticImageData } from "next/image";
import carBeforeAfterInterior from "@/assets/images/car-before-after-interior-02.webp";
import carBeforeAfterSeats from "@/assets/images/car-before-after-seats.webp";
import kitchenMicrowave from "@/assets/images/kitchen-microwave.jpg";
import kitchenSink from "@/assets/images/kitchen-sink.jpg";
import kitchenStove from "@/assets/images/kitchen-stove.jpg";
import livingRoom from "@/assets/images/living-room.jpg";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SparklesIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Photo = {
  image: StaticImageData;
  caption: string;
  /** Grid placement on the 4-column desktop and 2-column mobile layouts. */
  className: string;
  sizes: string;
  /** The before/after collages have a white frame baked in; zoom past it. */
  framed?: boolean;
};

const photos: Photo[] = [
  {
    image: kitchenStove,
    caption: "Kitchen deep clean",
    className: "col-span-2 row-span-2",
    sizes: "(max-width: 767px) 100vw, 50vw",
  },
  {
    image: carBeforeAfterSeats,
    caption: "Seat detailing, before and after",
    className: "row-span-2",
    sizes: "(max-width: 767px) 50vw, 25vw",
    framed: true,
  },
  {
    image: livingRoom,
    caption: "Living space, ready to relax",
    className: "row-span-2",
    sizes: "(max-width: 767px) 50vw, 25vw",
  },
  {
    image: kitchenMicrowave,
    caption: "Appliances inside and out",
    className: "",
    sizes: "(max-width: 767px) 50vw, 25vw",
  },
  {
    image: carBeforeAfterInterior,
    caption: "Interior detail, before and after",
    className: "",
    sizes: "(max-width: 767px) 50vw, 25vw",
    framed: true,
  },
  {
    image: kitchenSink,
    caption: "Counters and sinks that shine",
    className: "col-span-2",
    sizes: "(max-width: 767px) 100vw, 50vw",
  },
];

/** A bento grid of recent jobs, homes and vehicles, with short captions. */
export function WorkGallery() {
  return (
    <section className="px-5 pb-[140px] max-sm:pb-[72px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <Eyebrow icon={<SparklesIcon />}>Our work</Eyebrow>
          <h2 className="my-0 font-heading text-[40px] leading-[46px] text-ink-soft max-md:text-[32px] max-md:leading-[38px]">
            Spotless Results, Every Time
          </h2>
          <p className="mt-5 mb-0 font-text text-[16px] leading-8 text-muted">
            A look at a few of the homes and vehicles our team has brought back to life across
            Vancouver.
          </p>
        </div>

        <Reveal className="mt-12 grid auto-rows-[240px] grid-cols-4 gap-4 max-md:auto-rows-[170px] max-md:grid-cols-2 max-md:gap-3">
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
                className={cn(
                  "object-cover transition-transform duration-700 ease-out-quart",
                  photo.framed ? "scale-110 group-hover:scale-[1.15]" : "group-hover:scale-105",
                )}
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
