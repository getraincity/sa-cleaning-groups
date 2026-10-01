import Link from "next/link";
import { ArrowRightIcon, UsersIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { partners } from "@/content/partners";
import { cn } from "@/lib/utils";

/** "Bright Nest Cleaning" → "BN"; short acronyms ("CFIB") stay whole; "Rotary" → "R". */
function initials(name: string) {
  const words = name.split(" ").filter((word) => /^[A-Za-z0-9]/.test(word));
  if (words.length > 1)
    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join("");
  return name.length <= 4 ? name : name[0];
}

/** Trusted Trades & Local Partners: logo cards, plus an invitation to partner with us. */
export function TrustedPartners() {
  return (
    <section id="partners" className={cn("scroll-mt-24 bg-[#f7f5f4] px-5", sectionSpacing.y)}>
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          align="center"
          eyebrow={{ icon: <UsersIcon />, label: "Partners" }}
          title="Trusted Trades & Local Partners"
          description="We work alongside trusted local businesses, so our clients can count on good people for every job around their home or workplace."
        />
        <div className="mt-12 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {partners.map((partner, index) => {
            const card = (
              <>
                <div
                  className={cn(
                    "flex h-[120px] items-center justify-center rounded-2xl px-6 max-sm:h-[96px]",
                    partner.logo?.dark ? "bg-[#38393c]" : "bg-[#f7f5f4]",
                  )}
                >
                  {partner.logo ? (
                    // Partner marks are plain files: SVG or a small raster.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={partner.logo.src}
                      alt={`${partner.name} logo`}
                      width={partner.logo.width}
                      height={partner.logo.height}
                      className="max-h-[64px] w-auto max-w-full object-contain"
                    />
                  ) : (
                    // Until the partner's logo arrives: its initials, set like a seal.
                    <span
                      aria-hidden
                      className="flex size-16 items-center justify-center rounded-full bg-white font-heading text-[20px] font-bold tracking-[0.04em] text-ink-soft ring-1 ring-black/[0.08]"
                    >
                      {initials(partner.name)}
                    </span>
                  )}
                </div>
                <p className="mt-5 mb-1 font-text text-[12px] font-semibold tracking-[0.15em] text-brand uppercase">
                  {partner.trade}
                </p>
                <h3 className="mt-0 mb-2 font-heading text-[19px] leading-[26px] text-ink-soft">
                  {partner.name}
                </h3>
                {partner.blurb && (
                  <p className="mb-0 font-text text-[14px] leading-[22px] text-muted">
                    {partner.blurb}
                  </p>
                )}
                {partner.href && (
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-text text-[14px] font-semibold text-brand">
                    Visit site
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </>
            );
            const cardClass =
              "group flex h-full flex-col rounded-[20px] bg-white p-5 no-underline shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]";
            return (
              <Reveal key={partner.name} delay={(index % 4) * 100}>
                {partner.href ? (
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {card}
                  </a>
                ) : (
                  <div className={cardClass}>{card}</div>
                )}
              </Reveal>
            );
          })}

          <Reveal delay={(partners.length % 4) * 100}>
            <Link
              href="/contact-us"
              className="group flex h-full flex-col justify-center rounded-[20px] border border-dashed border-black/15 p-8 no-underline transition-colors hover:border-brand"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-tint text-[24px] text-brand">
                <UsersIcon />
              </span>
              <h3 className="mt-5 mb-2 font-heading text-[19px] leading-[26px] text-ink-soft">
                Become a partner
              </h3>
              <p className="mb-0 font-text text-[14px] leading-[22px] text-muted">
                Are you a local trade or business that shares our standards? We&apos;d love to hear
                from you.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-text text-[14px] font-semibold text-brand">
                Get in touch
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
