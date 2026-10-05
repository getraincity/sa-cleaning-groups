import Script from "next/script";
import type { ReactNode } from "react";
import { HistoryIcon, ShieldCheckIcon, StarIcon, UserCheckIcon } from "@/components/ui/icons";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { embeds } from "@/lib/site";
import { cn } from "@/lib/utils";

const proof: { icon: ReactNode; value: string; label: string }[] = [
  { icon: <HistoryIcon />, value: "9+ years", label: "Keeping Vancouver clean" },
  { icon: <ShieldCheckIcon />, value: "Licensed & insured", label: "With a valid garage policy" },
  { icon: <UserCheckIcon />, value: "Background-checked", label: "Every member of our team" },
  {
    icon: <StarIcon />,
    value: "5-star reviews",
    label: "From customers just like you",
  },
];

type ReviewsProofProps = {
  /** Elfsight widget ID for the Google Reviews feed. */
  widgetId: string;
  /** Show the proof strip. About leaves it out: its safety section says the same. */
  withProof?: boolean;
};

/**
 * Reviews: a short proof strip (years, licences, background checks) above the
 * Google Reviews widget, so the trust signals read at a glance.
 */
export function ReviewsProof({ widgetId, withProof = true }: ReviewsProofProps) {
  return (
    <section className={cn("overflow-hidden px-5", sectionSpacing.y)}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          align="center"
          eyebrow={{ icon: <StarIcon />, label: "Reviews" }}
          title="Building Trust and Satisfaction"
          description="Real reviews from Vancouver homeowners, drivers and businesses who trust S&A with their spaces."
        />

        {withProof && (
          <ul className="mx-auto mt-10 mb-0 grid max-w-[1240px] list-none grid-cols-4 gap-px overflow-hidden rounded-[20px] bg-black/[0.08] pl-0 ring-1 ring-black/[0.08] max-xl:grid-cols-2 max-sm:grid-cols-1">
            {proof.map(({ icon, value, label }) => (
              <li key={value} className="flex items-center gap-4 bg-white px-6 py-5 max-sm:px-5">
                <span className="flex size-11 min-w-11 items-center justify-center rounded-full bg-brand-tint text-[20px] text-brand">
                  {icon}
                </span>
                <span>
                  <span className="block font-heading text-[17px] leading-6 font-bold whitespace-nowrap text-ink-soft max-sm:whitespace-normal">
                    {value}
                  </span>
                  <span className="block font-text text-[13px] leading-5 text-muted">{label}</span>
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="mx-auto mt-10 max-w-[1240px]">
          <Script src={embeds.elfsightScript} strategy="lazyOnload" />
          <div className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  );
}
