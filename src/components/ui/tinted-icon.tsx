import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

/**
 * A single-colour SVG drawn in the current accent colour. The icon files are
 * red, so on a service page with its own colour scheme they are used as a mask
 * over a block of `bg-brand` instead of as an image.
 */
export function TintedIcon({
  src,
  label,
  className,
}: {
  src: StaticImageData;
  label: string;
  className?: string;
}) {
  const url = `url("${src.src}")`;
  return (
    <span
      role="img"
      aria-label={label}
      className={cn("inline-block bg-brand", className)}
      style={{
        maskImage: url,
        WebkitMaskImage: url,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
