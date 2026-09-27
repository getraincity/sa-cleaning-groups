import type { ReactNode } from "react";
import { ClipboardCheckIcon } from "@/components/ui/icons";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

export type ProcessStep = { title: string; text: string };

type ProcessStepsProps = {
  title: ReactNode;
  steps: ProcessStep[];
  eyebrow?: string;
  description?: ReactNode;
};

/** Numbered steps on a dark band, joined by a line on desktop. */
export function ProcessSteps({
  title,
  steps,
  eyebrow = "How it works",
  description,
}: ProcessStepsProps) {
  return (
    <section className={cn("bg-[#1c1c1e] px-5", sectionSpacing.y)}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          align="center"
          tone="dark"
          eyebrow={{ icon: <ClipboardCheckIcon />, label: eyebrow }}
          title={title}
          description={description}
        />
        <ol
          className={cn(
            "relative mt-12 mb-0 grid list-none gap-6 pl-0 max-lg:grid-cols-2 max-sm:grid-cols-1",
            steps.length === 3 ? "grid-cols-3" : "grid-cols-4",
          )}
        >
          <span
            aria-hidden
            className={cn(
              "absolute top-6 h-px bg-white/15 max-lg:hidden",
              steps.length === 3 ? "right-[16.7%] left-[16.7%]" : "right-[12.5%] left-[12.5%]",
            )}
          />
          {steps.map((step, index) => (
            <li key={step.title} className="relative text-center">
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand font-heading text-[18px] font-bold text-white ring-8 ring-[#1c1c1e]">
                {index + 1}
              </span>
              <h3 className="mt-5 mb-2 font-heading text-[18px] leading-6 text-white">
                {step.title}
              </h3>
              <p className="mx-auto mb-0 max-w-[260px] font-text text-[14px] leading-[22px] text-white/65">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
