import Link from "next/link";
import {
  ArrowRightIcon,
  BoxIcon,
  ClockIcon,
  HardHatIcon,
  PartyIcon,
  RepeatIcon,
  SparklesIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { bookingLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const services = [
  {
    Icon: SparklesIcon,
    title: "Deep Cleaning",
    text: "A top-to-bottom clean for homes that need extra attention: baseboards, inside appliances and cabinets, and every corner a regular clean doesn't reach.",
  },
  {
    Icon: RepeatIcon,
    title: "Recurring Cleaning",
    text: "Regular visits on a schedule that suits you, with Silver, Gold and Diamond plans to choose from, so your home always feels fresh.",
  },
  {
    Icon: BoxIcon,
    title: "Move-In / Move-Out",
    text: "Hand over the keys with confidence, or start fresh in your new place. A thorough empty-home clean, inside cabinets, closets and appliances.",
  },
  {
    Icon: HardHatIcon,
    title: "Post-Construction",
    text: "Renovation dust gets everywhere. We clear fine dust, debris and residue so your newly finished space is ready to live in.",
  },
  {
    Icon: PartyIcon,
    title: "Event Cleaning",
    text: "Hosting? We'll get your home guest-ready before the party and put it back together afterwards, so you can simply enjoy the day.",
  },
];

/** The kinds of home cleaning on offer, with hourly cleaning as the featured card. */
export function HomeServiceTypes() {
  return (
    <section className={cn("px-5", sectionSpacing.top)}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          align="center"
          eyebrow={{ icon: <SparklesIcon />, label: "Our services" }}
          title="Home Cleaning for Every Need"
          description="Whether it's a one-off deep clean or a helping hand every week, there's a service that fits your home and your schedule."
        />

        <div className="mt-12 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {services.map(({ Icon, title, text }, index) => (
            <Reveal
              key={title}
              delay={(index % 3) * 100}
              className="group flex flex-col rounded-[20px] border border-black/[0.08] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-tint text-[24px] text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon />
              </span>
              <h3 className="mt-5 mb-2 font-heading text-[19px] leading-[26px] text-ink-soft">
                {title}
              </h3>
              <p className="mb-0 font-text text-[14px] leading-[22px] text-muted">{text}</p>
            </Reveal>
          ))}

          {/* Hourly cleaning carries a price, so it gets the featured card. */}
          <Reveal
            delay={200}
            className="relative flex flex-col overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#e81c1c_0%,#de0a0a_45%,#a80000_100%)] p-7 text-white"
          >
            <ClockIcon className="pointer-events-none absolute -right-8 -bottom-8 size-[150px] text-white/10" />
            <span className="relative flex size-12 items-center justify-center rounded-xl bg-white text-[24px] text-brand">
              <ClockIcon />
            </span>
            <h3 className="relative mt-5 mb-2 font-heading text-[19px] leading-[26px] text-white">
              Hourly Cleaning
            </h3>
            <p className="relative mb-0 font-text text-[14px] leading-[22px] text-white/85">
              Book our team by the hour and put us to work where you need it most.
            </p>
            <div className="relative mt-auto flex items-end justify-between gap-4 pt-6">
              <p className="mb-0 font-text text-white">
                <span className="block text-[12px] font-semibold tracking-[0.15em] text-white/75 uppercase">
                  From
                </span>
                <span className="font-heading text-[34px] leading-9 font-bold">$130+</span>
                <span className="mt-1 block text-[13px] text-white/80">3-hour minimum</span>
              </p>
              <Link
                href={bookingLinks.homeCleaning}
                className="group/cta inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-3 font-text text-[14px] font-medium text-brand no-underline transition-colors hover:bg-white/90"
              >
                Book now
                <ArrowRightIcon className="size-4 transition-transform group-hover/cta:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
