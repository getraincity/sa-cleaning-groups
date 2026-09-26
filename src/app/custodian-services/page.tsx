import Link from "next/link";
import cleaningWindows from "@/assets/images/cleaning-windows.jpg";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection, type Faq } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import {
  ArrowRightIcon,
  BuildingIcon,
  CalendarIcon,
  CheckIcon,
  ClipboardCheckIcon,
  DumbbellIcon,
  KeyIcon,
  LeafIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StethoscopeIcon,
  StoreIcon,
  UtensilsIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Custodian & Commercial Cleaning Services in Vancouver",
  path: "/custodian-services",
});

const quoteHref = "/contact-us?topic=custodian";

const highlights = [
  "Cleaning plans built around your space and schedule",
  "Trained, background-checked custodial staff",
  "Hospital-grade, eco-friendly products",
  "Fully licensed and insured",
];

const reasons = [
  {
    Icon: ClipboardCheckIcon,
    title: "A plan for your space",
    text: "We walk through your space and build a cleaning checklist around how it's actually used.",
  },
  {
    Icon: CalendarIcon,
    title: "Scheduled around you",
    text: "Daily, weekly or one-time visits, planned around your business hours.",
  },
  {
    Icon: ShieldCheckIcon,
    title: "Licensed and insured",
    text: "Fully licensed and insured, with background-checked staff on every visit.",
  },
  {
    Icon: LeafIcon,
    title: "Healthier products",
    text: "Hospital-grade, eco-friendly disinfectants that are tough on germs, not on people.",
  },
];

const spaces = [
  {
    Icon: BuildingIcon,
    title: "Offices & co-working",
    text: "Desks, meeting rooms, reception and shared kitchens kept fresh for your team and visitors.",
  },
  {
    Icon: StoreIcon,
    title: "Retail & showrooms",
    text: "Spotless floors, glass and fitting rooms that make a great first impression.",
  },
  {
    Icon: KeyIcon,
    title: "Strata common areas",
    text: "Lobbies, hallways, elevators, amenity rooms and gyms that residents are proud of.",
  },
  {
    Icon: StethoscopeIcon,
    title: "Clinics & wellness studios",
    text: "Careful cleaning and disinfection of waiting rooms, treatment rooms and washrooms.",
  },
  {
    Icon: UtensilsIcon,
    title: "Restaurants & cafés",
    text: "Dining areas, washrooms and front-of-house spaces, ready for your guests.",
  },
  {
    Icon: DumbbellIcon,
    title: "Gyms & fitness studios",
    text: "Equipment, change rooms and high-touch surfaces disinfected with care.",
  },
];

const checklists = [
  {
    title: "Work areas",
    items: [
      "Dust desks, shelves and surfaces",
      "Disinfect handles, switches and phones",
      "Empty garbage and recycling",
      "Clean glass, mirrors and partitions",
      "Tidy meeting and reception areas",
    ],
  },
  {
    title: "Washrooms",
    items: [
      "Clean and disinfect toilets and sinks",
      "Polish mirrors and fixtures",
      "Refill soap and paper supplies",
      "Mop and disinfect floors",
      "Empty all bins",
    ],
  },
  {
    title: "Kitchens & break rooms",
    items: [
      "Wipe counters, tables and cabinet fronts",
      "Clean sinks and taps",
      "Wipe microwaves and appliance exteriors",
      "Empty garbage, recycling and compost",
      "Sweep and mop floors",
    ],
  },
  {
    title: "Floors & entrances",
    items: [
      "Vacuum carpets and rugs",
      "Sweep and mop hard floors",
      "Clean entrance glass and doors",
      "Wipe baseboards and ledges",
      "Spot-clean marks on walls",
    ],
  },
];

const steps = [
  {
    title: "Walkthrough & free quote",
    text: "Tell us about your space. We'll take a look and send a clear, no-obligation quote.",
  },
  {
    title: "Your cleaning plan",
    text: "We agree on what's cleaned, how often and when, and write it into your checklist.",
  },
  {
    title: "Consistent, careful cleans",
    text: "Our team follows your checklist on every visit, with the same attention to detail.",
  },
  {
    title: "Ongoing check-ins",
    text: "We keep in touch and adjust the plan as your space and your needs change.",
  },
];

const faqs: Faq[] = [
  {
    question: "What types of businesses do you clean?",
    answer:
      "Offices, co-working spaces, retail stores, strata common areas, clinics, restaurants, gyms and more. If you're not sure whether we're the right fit for your space, just ask.",
  },
  {
    question: "Can you clean outside our business hours?",
    answer:
      "Tell us your hours when you request a quote and we'll plan visits around them, so cleaning never gets in the way of your team or your customers.",
  },
  {
    question: "Do you bring your own products and equipment?",
    answer:
      "Our team arrives with professional equipment and our hospital-grade, eco-friendly products. If your building has specific product requirements, let us know and we'll work with them.",
  },
  {
    question: "Are your custodial staff insured and background-checked?",
    answer:
      "Yes. S&A Cleaning Group is fully licensed and insured, and every member of our team completes a criminal and background check before employment.",
  },
  {
    question: "How is pricing worked out?",
    answer:
      "Every space is different, so we quote after learning about yours: its size, how often you'd like us to visit and what you'd like included. Quotes are free and there's no obligation.",
  },
];

export default function CustodianServicesPage() {
  return (
    <>
      <PageHero
        image={cleaningWindows}
        className="py-[200px] max-md:py-[100px]"
        tagline="Commercial & janitorial cleaning"
        title={
          <>
            Custodian Services
            <br />
            in Vancouver
          </>
        }
        description={
          <>
            Clean, healthy workplaces for offices, stores, stratas and commercial
            <br className="max-lg:hidden" /> buildings across Greater Vancouver.
          </>
        }
      />

      {/* Introduction, with the reasons businesses choose S&A. */}
      <section className={cn("px-5", sectionSpacing.y)}>
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHeader
              eyebrow={{ icon: <BuildingIcon />, label: "Custodian services" }}
              title="A Cleaner Workplace, Without the Hassle"
              description="Your workplace says a lot about your business. Our custodian team keeps offices, stores and shared spaces spotless, healthy and ready for the day ahead, with the same attention to detail that built our name in homes across Vancouver."
            />
            <ul className="mt-7 mb-0 grid list-none gap-3 pl-0">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-3 font-text text-[15px] text-ink-soft"
                >
                  <span className="flex size-6 min-w-6 items-center justify-center rounded-md bg-brand-tint text-[14px] text-brand">
                    <CheckIcon />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3 max-sm:flex-col">
              <Link
                href={quoteHref}
                className="group/cta inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-[14px] font-text text-[16px] font-medium text-white no-underline transition-colors hover:bg-brand-alt"
              >
                Request a free quote
                <ArrowRightIcon className="size-[18px] transition-transform group-hover/cta:translate-x-1" />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-charcoal/20 px-6 py-[14px] font-text text-[16px] font-medium text-charcoal no-underline transition-colors hover:bg-charcoal hover:text-white"
              >
                <PhoneIcon className="size-[18px]" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <Reveal className="relative overflow-hidden rounded-3xl bg-[#1c1c1e] p-10 max-sm:p-7">
            <div className="pointer-events-none absolute -top-24 -right-24 size-[320px] rounded-full bg-brand/25 blur-[110px]" />
            <p className="relative mb-6 font-text text-[12px] font-semibold tracking-[0.2em] text-white/60 uppercase">
              Why businesses choose S&amp;A
            </p>
            <ul className="relative mb-0 grid list-none gap-6 pl-0">
              {reasons.map(({ Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex size-11 min-w-11 items-center justify-center rounded-xl bg-white/10 text-[22px] text-white">
                    <Icon />
                  </span>
                  <div>
                    <p className="mb-1 font-heading text-[17px] leading-6 font-bold text-white">
                      {title}
                    </p>
                    <p className="mb-0 font-text text-[14px] leading-[22px] text-white/65">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Spaces we look after. */}
      <section className={cn("bg-[#f7f5f4] px-5", sectionSpacing.y)}>
        <div className="mx-auto max-w-[1440px]">
          <SectionHeader
            align="center"
            eyebrow={{ icon: <StoreIcon />, label: "Spaces we clean" }}
            title="Commercial Spaces We Look After"
            description="From a single office floor to a busy strata building, we tailor every visit to the way your space is used."
          />
          <div className="mt-12 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {spaces.map(({ Icon, title, text }, index) => (
              <Reveal
                key={title}
                delay={(index % 3) * 100}
                className="group rounded-[20px] bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
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
          </div>
        </div>
      </section>

      {/* What's included. */}
      <section className={cn("px-5", sectionSpacing.y)}>
        <div className="mx-auto max-w-[1440px]">
          <SectionHeader
            align="center"
            eyebrow={{ icon: <SparklesIcon />, label: "What's included" }}
            title="A Thorough Clean, Every Visit"
            description="A typical checklist. Yours is built around your space, so you can add, remove or adjust anything."
          />
          <div className="mt-12 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {checklists.map((list) => (
              <div key={list.title} className="rounded-[20px] border border-black/[0.08] p-6">
                <h3 className="mt-0 mb-4 border-b border-brand-line pb-4 font-heading text-[18px] leading-6 text-ink-soft">
                  {list.title}
                </h3>
                <ul className="mb-0 grid list-none gap-3 pl-0">
                  {list.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 font-text text-[14px] leading-5 text-body"
                    >
                      <CheckIcon className="mt-0.5 size-4 min-w-4 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works. */}
      <section className={cn("bg-[#1c1c1e] px-5", sectionSpacing.y)}>
        <div className="mx-auto max-w-[1440px]">
          <SectionHeader
            align="center"
            tone="dark"
            eyebrow={{ icon: <ClipboardCheckIcon />, label: "How it works" }}
            title="Getting Started Is Simple"
          />
          <ol className="relative mt-12 mb-0 grid list-none grid-cols-4 gap-6 pl-0 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {/* Connector line behind the step numbers on desktop. */}
            <span
              aria-hidden
              className="absolute top-6 right-[12.5%] left-[12.5%] h-px bg-white/15 max-lg:hidden"
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

      <FaqSection
        items={faqs}
        description="Everything you need to know about custodial cleaning with S&A."
      />

      <CtaBand
        eyebrow="Custodian services"
        title="Get a Free Custodial Cleaning Quote"
        text="Tell us about your space and we'll put together a cleaning plan and a clear, no-obligation quote."
        primary={{ label: "Request a quote", href: quoteHref }}
        secondary={{ label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref }}
      />
    </>
  );
}
