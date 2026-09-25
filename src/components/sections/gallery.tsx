import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type Span = 1 | 2 | 3 | 4;

export type GalleryImage = {
  image: StaticImageData;
  alt: string;
  /** Columns spanned on the 6-column desktop grid. */
  span: Span;
  /** Columns spanned on the 4-column grid (≤767px). Defaults to `span`. */
  tabletSpan?: Span;
};

// Full class names so Tailwind can see them at build time.
const desktopSpan: Record<Span, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
};
const tabletSpan: Record<Span, string> = {
  1: "max-md:col-span-1",
  2: "max-md:col-span-2",
  3: "max-md:col-span-3",
  4: "max-md:col-span-4",
};

export function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <section className="mt-[120px] overflow-hidden px-5 pb-[60px]">
      <div className="mx-auto max-w-[1440px]">
        {/* Three explicit rows, as in Webflow: a gallery that fills only two
            still gets the gap of the empty third row below it. */}
        <div className="grid grid-cols-6 grid-rows-[auto_auto_auto] gap-4 max-md:grid-cols-4 max-sm:grid-cols-1 max-sm:grid-rows-[auto]">
          {images.map(({ image, alt, span, tabletSpan: tablet = span }, index) => (
            <Image
              key={index}
              src={image}
              alt={alt}
              sizes={`(max-width: 479px) 100vw, (max-width: 767px) ${tablet * 25}vw, ${Math.round((span / 6) * 100)}vw`}
              className={cn(
                "h-[300px] min-h-[300px] w-full rounded-[5px] object-cover",
                desktopSpan[span],
                tabletSpan[tablet],
                "max-sm:col-span-1",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
