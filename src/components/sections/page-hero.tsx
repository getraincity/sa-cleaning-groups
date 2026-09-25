import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  image: StaticImageData;
  tagline: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  /** Pin the photo to the top-left corner instead of centring it. */
  alignImageTopLeft?: boolean;
  /** Vertical padding; each page's hero had its own. */
  className?: string;
};

const textClass =
  "mt-[10px] text-center font-text text-[20px] leading-7 text-mint max-lg:text-[16px]";

/** Full-width photo banner with a dark overlay and centred heading. */
export function PageHero({
  image,
  tagline,
  title,
  description,
  alignImageTopLeft = false,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative px-5 py-[250px] max-md:py-[100px]", className)}>
      <Image
        src={image}
        alt=""
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className={cn("object-cover", alignImageTopLeft && "object-[0_0]")}
      />
      <div className="absolute inset-0 bg-[#000000ba]" />
      <div className="relative z-[2] mx-auto flex max-w-[1440px] flex-col items-center justify-between">
        <p className={textClass}>{tagline}</p>
        <h1 className="text-center font-heading text-[80px] leading-[80px] tracking-[3px] text-white max-lg:text-[48px] max-lg:leading-[52px] max-sm:text-[36px] max-sm:leading-[40px]">
          {title}
        </h1>
        {description && <p className={textClass}>{description}</p>}
      </div>
    </section>
  );
}
