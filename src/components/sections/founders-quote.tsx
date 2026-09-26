import { Allura } from "next/font/google";
import { QuoteIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

// Handwritten signature, echoing the script lettering in the logo.
const signature = Allura({ subsets: ["latin"], weight: "400" });

/** Pull quote from the co-founders on what the company stands for. */
export function FoundersQuote() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f4] px-5 py-[120px] max-md:py-[72px]">
      {/* Oversized quote marks, just visible behind the text. */}
      <QuoteIcon className="pointer-events-none absolute -top-16 -left-6 size-[300px] text-brand/[0.035] max-md:size-[220px]" />
      <QuoteIcon className="pointer-events-none absolute -right-10 -bottom-16 size-[260px] rotate-180 text-brand/[0.035] max-md:hidden" />

      <Reveal className="relative mx-auto max-w-[1040px]">
        <figure className="m-0 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand text-[26px] text-white shadow-[0_12px_30px_-8px_rgba(222,10,10,0.55)]">
            <QuoteIcon />
          </div>

          <blockquote className="mx-0 mt-10 mb-0">
            <p className="mb-0 font-heading text-[34px] leading-[50px] font-normal text-ink-soft max-lg:text-[28px] max-lg:leading-[42px] max-sm:text-[22px] max-sm:leading-[34px]">
              At S&amp;A Cleaning Group, we believe that cleanliness isn&apos;t just about what you
              can see &mdash; it&apos;s about the precision in every corner. From hospital-grade
              eco-disinfectants to meticulous car detailing,{" "}
              <strong className="bg-[linear-gradient(transparent_62%,rgba(222,10,10,0.16)_62%)] font-bold text-brand">
                details are our specialty
              </strong>
              , and your peace of mind is our standard.
            </p>
          </blockquote>

          <figcaption className="mt-10 flex flex-col items-center">
            <span
              className={`${signature.className} text-[52px] leading-[60px] text-ink-soft max-sm:text-[44px]`}
            >
              Alex &amp; Shaida
            </span>
            <span className="mt-3 h-px w-16 bg-brand" />
            <span className="mt-3 font-text text-[13px] font-semibold tracking-[0.2em] text-muted uppercase">
              Co-Founders, S&amp;A Cleaning Group
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
