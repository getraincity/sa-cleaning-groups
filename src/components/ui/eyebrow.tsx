import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  icon: ReactNode;
  children: ReactNode;
  /** `dark` for sections with a dark background. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Small label above a section heading: a tinted icon chip plus a word or two,
 * the pattern "The S&A Way" introduced.
 */
export function Eyebrow({ icon, children, tone = "light", className }: EyebrowProps) {
  return (
    <div className={cn("mb-4 flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex size-9 min-w-9 items-center justify-center rounded-lg text-[20px]",
          tone === "light" ? "bg-brand-tint text-brand" : "bg-white/10 text-white",
        )}
      >
        {icon}
      </div>
      <p
        className={cn(
          "mb-0 font-text text-[18px]",
          tone === "light" ? "text-ink-soft" : "text-white/85",
        )}
      >
        {children}
      </p>
    </div>
  );
}
