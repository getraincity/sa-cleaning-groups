import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: { icon: ReactNode; label: ReactNode };
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** `dark` for sections with a dark background. */
  tone?: "light" | "dark";
  /** The page's main heading renders as an h1. */
  as?: "h1" | "h2";
  className?: string;
};

/** Eyebrow, heading and intro: the opening of every newer section. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  className,
}: SectionHeaderProps) {
  const center = align === "center";
  return (
    <div
      className={cn(
        center && "mx-auto flex max-w-[680px] flex-col items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow tone={tone} icon={eyebrow.icon}>
          {eyebrow.label}
        </Eyebrow>
      )}
      <Heading
        className={cn(
          "my-0 font-heading text-[36px] leading-[42px] max-md:text-[30px] max-md:leading-[36px]",
          tone === "light" ? "text-ink-soft" : "text-white",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "mt-4 mb-0 font-text text-[16px] leading-7",
            tone === "light" ? "text-muted" : "text-white/70",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Vertical rhythm shared by the newer sections. */
export const sectionSpacing = {
  y: "py-[96px] max-md:py-[64px]",
  top: "pt-[96px] max-md:pt-[64px]",
  bottom: "pb-[96px] max-md:pb-[64px]",
} as const;
