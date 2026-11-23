import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { GiftIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { discounts } from "@/content/discounts";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Cleaning Discounts & Promotions",
  path: "/discounts",
  description:
    "Discounts on home cleaning in Vancouver for seniors, military, students, first responders, healthcare workers, bundles, friends and family, and recurring customers.",
});

const quoteHref = "/contact-us?topic=discount#message";

const steps = [
  "Tell us which discount applies when you book or ask for a quote.",
  "We confirm the details with you and put together your quote.",
  "You get a better price on your clean.",
];

/** Under About in the menu (client feedback doc, 2026-11-22). No amounts, on purpose. */
export default function DiscountsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "About Us", path: "/about-us" },
          { name: "Discounts & Promotions", path: "/discounts" },
        ])}
      />

      <section
        className={cn("bg-[#f7f5f2] px-5", sectionSpacing.top, "pb-[64px] max-md:pb-[48px]")}
      >
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            as="h1"
            align="center"
            eyebrow={{ icon: <GiftIcon />, label: "Discounts & promotions" }}
            title="A Better Price, Just for Asking"
            description="We like to say thank you. If one of these applies to you, tell us when you book or ask for a quote, and we'll offer you a better price."
          />
        </div>
      </section>

      <section className={cn("px-5", sectionSpacing.y)}>
        <div className="mx-auto max-w-[1240px]">
          <ul className="m-0 grid list-none grid-cols-3 gap-5 p-0 max-lg:grid-cols-2 max-md:grid-cols-1">
            {discounts.map(({ id, title, who, text, Icon }, index) => (
              <li
                key={id}
                id={id}
                className="scroll-mt-[110px] lg:[&:last-child:nth-child(3n+1)]:col-start-2 md:max-lg:[&:last-child:nth-child(odd)]:col-span-2"
              >
                <Reveal
                  delay={(index % 3) * 90}
                  className="flex h-full flex-col rounded-[20px] bg-[#f7f5f4] p-7 max-sm:p-6"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand-tint text-[24px] text-brand">
                    <Icon />
                  </span>
                  <h2 className="mt-5 mb-1 font-heading text-[20px] leading-7 text-ink-soft">
                    {title}
                  </h2>
                  <p className="m-0 font-text text-[13px] leading-5 font-semibold tracking-[0.02em] text-brand">
                    {who}
                  </p>
                  <p className="mt-3 mb-0 font-text text-[15px] leading-[24px] text-muted">
                    {text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={cn("px-5", sectionSpacing.bottom)}>
        <div className="mx-auto max-w-[1240px] rounded-3xl bg-[#1c1c1e] px-10 py-10 max-sm:px-6">
          <h2 className="mt-0 mb-6 font-heading text-[26px] leading-8 text-white">How it works</h2>
          <ol className="m-0 grid list-none grid-cols-3 gap-6 p-0 max-md:grid-cols-1">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex size-9 min-w-9 items-center justify-center rounded-full bg-brand font-heading text-[15px] font-bold text-white">
                  {index + 1}
                </span>
                <span className="pt-1.5 font-text text-[15px] leading-6 text-white/80">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        eyebrow="Discounts & promotions"
        title="Ask About Your Better Price"
        text="Tell us which discount applies and what you'd like cleaned. We'll get back to you with a quote."
        primary={{ label: "Ask for a quote", href: quoteHref }}
        secondary={{ label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref }}
      />
    </>
  );
}
