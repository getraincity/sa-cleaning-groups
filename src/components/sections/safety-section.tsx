import { Eyebrow } from "@/components/ui/eyebrow";
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

/** Health and safety practices, then the company's licences and insurance. */
export function SafetySection() {
  return (
    <section className="px-5 pb-[140px] max-sm:pb-[72px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-[5fr_7fr] items-center gap-20 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <Eyebrow icon={<ShieldCheckIcon />}>Safety first</Eyebrow>
            <h2 className="my-0 font-heading text-[40px] leading-[46px] text-ink-soft max-md:text-[32px] max-md:leading-[38px]">
              Your Safety Comes First
            </h2>
            <p className="mt-5 mb-0 font-text text-[16px] leading-8 text-muted">
              Your home, your family and your vehicle deserve a team that takes health and safety
              seriously. Every visit follows the same careful routine, so you can relax knowing the
              job is done cleanly, and safely.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            {practices.map(({ Icon, title, text }, index) => (
              <Reveal
                key={title}
                delay={index * 100}
                className="rounded-[20px] border border-black/[0.07] bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-tint text-[24px] text-brand">
                  <Icon />
                </div>
                <h3 className="mt-5 mb-2 font-heading text-[20px] leading-[26px] text-ink-soft">
                  {title}
                </h3>
                <p className="mb-0 font-text text-[15px] leading-6 text-muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="relative mt-16 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#e81c1c_0%,#de0a0a_45%,#a80000_100%)] px-14 py-14 text-white max-lg:px-10 max-sm:rounded-3xl max-sm:px-6 max-sm:py-10">
          <ShieldCheckIcon className="pointer-events-none absolute -top-10 -right-10 size-[300px] text-white/[0.07] max-md:hidden" />

          <div className="relative max-w-[760px]">
            <p className="mb-3 font-text text-[13px] font-semibold tracking-[0.2em] text-white/75 uppercase">
              Certified &amp; accountable
            </p>
            <h2 className="my-0 font-heading text-[34px] leading-[42px] text-white max-md:text-[26px] max-md:leading-[34px]">
              Fully Licensed, Insured &amp; Carry a Valid Garage Policy
            </h2>
            <p className="mt-4 mb-0 font-text text-[16px] leading-7 text-white/85">
              <strong className="font-semibold text-white">Security and safety matter:</strong> all
              of our staff are required to take a criminal and background check before employment.
            </p>
          </div>

          <ul className="relative mt-12 mb-0 grid list-none grid-cols-4 gap-6 pl-0 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {credentials.map(({ Icon, title, text }) => (
              <li
                key={title}
                className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-sm"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-white text-[24px] text-brand">
                  <Icon />
                </div>
                <p className="mt-4 mb-1 font-heading text-[18px] leading-6 font-bold text-white">
                  {title}
                </p>
                <p className="mb-0 font-text text-[14px] leading-[22px] text-white/80">{text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
