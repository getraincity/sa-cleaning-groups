import {
  BadgeCheckIcon,
  CarIcon,
  GloveIcon,
  MaskIcon,
  ShieldCheckIcon,
  SparklesIcon,
  SprayIcon,
  UserCheckIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const practices = [
  {
    Icon: MaskIcon,
    title: "Protective masks",
    text: "Our cleaners wear masks to help protect your family, and our team, from germs and allergens.",
  },
  {
    Icon: GloveIcon,
    title: "Fresh gloves",
    text: "Clean gloves on every job keep things hygienic and prevent cross-contamination between homes.",
  },
  {
    Icon: SprayIcon,
    title: "Hospital-grade products",
    text: "Eco-friendly disinfectants that eliminate up to 98.9% of bacteria on high-touch surfaces.",
  },
  {
    Icon: SparklesIcon,
    title: "Clean equipment",
    text: "Premium microfibre cloths and well-kept tools trap dirt and bacteria instead of spreading them.",
  },
];

const credentials = [
  {
    Icon: BadgeCheckIcon,
    title: "Fully licensed",
    text: "Licensed to operate across Greater Vancouver.",
  },
  {
    Icon: ShieldCheckIcon,
    title: "Fully insured",
    text: "Insured on every job, for your peace of mind.",
  },
  {
    Icon: CarIcon,
    title: "Valid garage policy",
    text: "Your vehicle is covered while it's in our care.",
  },
  {
    Icon: UserCheckIcon,
    title: "Background-checked",
    text: "Every team member completes a criminal and background check before employment.",
  },
];

/**
 * Health and safety: the routine on every visit beside the company's licences
 * and insurance, on two calm cards.
 */
export function SafetySection() {
  return (
    <section className={cn("px-5", sectionSpacing.bottom)}>
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          align="center"
          eyebrow={{ icon: <ShieldCheckIcon />, label: "Safety first" }}
          title="Your Safety Comes First"
          description="Your home, your family and your vehicle deserve a team that takes health and safety seriously. Every visit follows the same careful routine, so you can relax knowing the job is done cleanly, and safely."
        />

        <div className="mt-12 grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          <Reveal className="rounded-3xl bg-[#f7f5f4] p-10 max-sm:p-6">
            <p className="mb-6 font-text text-[12px] font-semibold tracking-[0.2em] text-muted uppercase">
              On every visit
            </p>
            <ul className="mb-0 grid list-none gap-6 pl-0">
              {practices.map(({ Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex size-11 min-w-11 items-center justify-center rounded-xl bg-white text-[22px] text-brand shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                    <Icon />
                  </span>
                  <span>
                    <span className="block font-heading text-[17px] leading-6 font-bold text-ink-soft">
                      {title}
                    </span>
                    <span className="mt-1 block font-text text-[14px] leading-[22px] text-muted">
                      {text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="flex flex-col rounded-3xl bg-[#1c1c1e] p-10 max-sm:p-6">
            <p className="mb-4 font-text text-[12px] font-semibold tracking-[0.2em] text-white/50 uppercase">
              Certified &amp; accountable
            </p>
            <h3 className="my-0 font-heading text-[26px] leading-[34px] text-white max-sm:text-[22px] max-sm:leading-[30px]">
              Fully Licensed, Insured &amp; Carry a Valid Garage Policy
            </h3>
            <p className="mt-3 mb-0 font-text text-[15px] leading-[26px] text-white/70">
              <strong className="font-semibold text-white">Security and safety matter:</strong> all
              of our staff are required to take a criminal and background check before employment.
            </p>

            <ul className="mt-8 mb-0 grid list-none grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 pl-0 max-sm:grid-cols-1">
              {credentials.map(({ Icon, title, text }) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-0.5 flex size-9 min-w-9 items-center justify-center rounded-full bg-white/10 text-[18px] text-white">
                    <Icon />
                  </span>
                  <span>
                    <span className="block font-heading text-[16px] leading-6 font-bold text-white">
                      {title}
                    </span>
                    <span className="block font-text text-[13px] leading-5 text-white/60">
                      {text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
