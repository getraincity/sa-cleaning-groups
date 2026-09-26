import { Allura } from "next/font/google";
import { QuoteIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

// Handwritten signature, echoing the script lettering in the logo.
const signature = Allura({ subsets: ["latin"], weight: "400" });

/** Pull quote from the co-founders on what the company stands for. */
export function FoundersQuote() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f4] px-5 py-[96px] max-md:py-[64px]">
      <Reveal className="relative mx-auto max-w-[900px]">
        <figure className="m-0 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand text-[22px] text-white shadow-[0_12px_30px_-8px_rgba(222,10,10,0.55)]">
            <QuoteIcon />
          </div>

          <blockquote className="mx-0 mt-8 mb-0">
            <p className="mb-0 font-heading text-[28px] leading-[42px] font-normal text-ink-soft max-lg:text-[24px] max-lg:leading-9 max-sm:text-[20px] max-sm:leading-[30px]">
              At S&amp;A Cleaning Group, we believe that cleanliness isn&apos;t just about what you
              can see &mdash; it&apos;s about the precision in every corner. From hospital-grade
              eco-disinfectants to meticulous car detailing,{" "}
              <strong className="bg-[linear-gradient(transparent_62%,rgba(222,10,10,0.16)_62%)] font-bold text-brand">
                details are our specialty
              </strong>
              , and your peace of mind is our standard.
            </p>
          </blockquote>

          <figcaption className="mt-8 flex flex-col items-center">
            <span
              className={`${signature.className} text-[44px] leading-[52px] text-ink-soft max-sm:text-[38px]`}
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
