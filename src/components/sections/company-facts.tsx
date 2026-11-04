import Link from "next/link";
import { ArrowRightIcon, BadgeCheckIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const linkClass = "inline-block py-1 font-semibold text-brand no-underline hover:underline";

// Every fact here is an approved claim (docs/HANDOFF.md §5): no street address,
// team size or opening hours, because none has been confirmed.
const facts: { label: string; value: React.ReactNode }[] = [
  { label: "Business name", value: siteConfig.brandName },
  { label: "Formerly", value: siteConfig.formerName },
  { label: "Co-founders", value: "Alex & Shaida" },
  { label: "In business", value: "9+ years" },
  {
    label: "Services",
    value: (
      <>
        <Link href="/home-cleaning" className={linkClass}>
          Home cleaning
        </Link>{" "}
        and{" "}
        <Link href="/custodian-services" className={linkClass}>
          custodian (commercial and janitorial) services
        </Link>
      </>
    ),
  },
  {
    label: "Service area",
    value: (
      <>
        <Link href="/locations" className={linkClass}>
          Greater Vancouver, BC
        </Link>
        : Downtown, North, East, West and South Vancouver
      </>
    ),
  },
  {
    label: "Credentials",
    value:
      "Fully licensed and insured. Every team member completes a criminal and background check before employment.",
  },
  {
    label: "Phone",
    value: (
      <a href={siteConfig.phoneHref} className={linkClass}>
        {siteConfig.phone}
      </a>
    ),
  },
  {
    label: "Email",
    value: (
      <a href={`mailto:${siteConfig.email}`} className={linkClass}>
        {siteConfig.email}
      </a>
    ),
  },
];

/** The About page's plain-facts panel: who we are, where we work and how to reach us. */
export function CompanyFacts() {
  return (
    <section className={cn("px-5", sectionSpacing.top)}>
      <div className="mx-auto grid max-w-[1240px] grid-cols-[5fr_7fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <div>
          <SectionHeader
            eyebrow={{ icon: <BadgeCheckIcon />, label: "At a glance" }}
            title="S&A Cleaning Group in Brief"
            description="A cleaning company serving homes and businesses across Greater Vancouver, BC, formerly known as Akumal Executive Cleaning. Here are the facts, and how to reach us."
          />
          <Link
            href="/contact-us"
            className="mt-6 inline-flex min-h-10 items-center gap-2 font-text text-[15px] font-semibold text-brand no-underline hover:underline"
          >
            Contact us
            <ArrowRightIcon className="size-[18px]" />
          </Link>
        </div>

        <Reveal>
          <dl className="mb-0 divide-y divide-black/[0.08] rounded-[20px] border border-black/[0.08] bg-white px-7 py-2 max-sm:px-5">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[150px_1fr] gap-4 py-4 max-sm:grid-cols-1 max-sm:gap-1"
              >
                <dt className="font-text text-[13px] font-semibold tracking-[0.12em] text-muted uppercase">
                  {fact.label}
                </dt>
                <dd className="m-0 font-text text-[15px] leading-6 text-ink-soft">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
