import Image, { type StaticImageData } from "next/image";
import checkIcon from "@/assets/images/icons/check.svg";
import { TintedIcon } from "@/components/ui/tinted-icon";
import { Reveal } from "@/components/ui/reveal";

// Webflow staggered each checklist row slightly; these are its exact delays.
const STAGGER_MS = [0, 57, 95, 133, 152];

type ChecklistSectionProps = {
  title: string;
  items: string[];
  image: StaticImageData;
  imageAlt: string;
  /**
   * The home-cleaning page wraps the illustration in an extra block, which
   * changes how the flex row sizes it on desktop. Kept to match the original.
   */
  wrapImage?: boolean;
  /** Show a photo in an accent-coloured frame instead of the illustration file. */
  framed?: boolean;
};

export function ChecklistSection({
  title,
  items,
  image,
  imageAlt,
  wrapImage = false,
  framed = false,
}: ChecklistSectionProps) {
  const illustration = framed ? (
    <div className="relative h-[450px] w-[360px] min-w-[360px] max-lg:mx-auto max-sm:h-[340px] max-sm:w-full max-sm:min-w-0">
      <div
        className="absolute -bottom-3 -left-3 h-full w-full rounded-[14px] bg-brand"
        aria-hidden
      />
      <div className="relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.4)]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 479px) 100vw, 360px"
          className="object-cover"
        />
      </div>
    </div>
  ) : (
    <Image
      src={image}
      alt={imageAlt}
      sizes="(max-width: 479px) 100vw, 450px"
      className="h-[450px] w-full object-contain max-lg:block max-md:object-scale-down max-sm:h-[300px] max-sm:max-w-none"
    />
  );

  return (
    <section className="flex items-center justify-between overflow-hidden px-5 pt-[100px]">
      <div className="mx-auto max-w-[1178px] max-md:w-full">
        <div className="flex h-full w-[1178px] items-center justify-center gap-20 max-lg:grid max-lg:w-full max-lg:grid-cols-[.5fr] max-lg:overflow-visible max-sm:block">
          {wrapImage ? <div>{illustration}</div> : illustration}

          <div className="mt-0 flex h-full w-[600px] flex-col items-start justify-between gap-[13px] max-lg:w-full max-lg:items-center">
            <h2 className="mt-0 mb-[30px] w-[550px] pt-0 font-heading text-[40px] leading-[45px] max-md:w-full max-sm:mt-[60px] max-sm:min-w-full">
              {title}
            </h2>
            <div className="flex w-[450px] flex-col gap-[10px] rounded-lg border border-brand-border px-4 pt-[30px] pb-[10px] max-sm:w-full">
              {items.map((item, index) => (
                <Reveal
                  key={index}
                  from="right"
                  delay={STAGGER_MS[index]}
                  className="mb-5 flex items-center justify-start gap-3"
                >
                  <div className="flex size-[18px] min-h-[18px] min-w-[18px] items-center justify-center rounded-[4px] bg-brand-tint">
                    <TintedIcon
                      src={checkIcon}
                      label="checked icon"
                      className="size-3 min-h-3 min-w-3"
                    />
                  </div>
                  <p className="mb-0 font-text text-[16px] text-ink-soft">{item}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
