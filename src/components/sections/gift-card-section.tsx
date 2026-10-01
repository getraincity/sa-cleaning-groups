import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/brand/logo-transparent.png";
import { sectionSpacing } from "@/components/ui/section-header";
import { ArrowRightIcon, GiftIcon, PhoneIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const occasions = [
  "Birthdays",
  "Housewarmings",
  "New parents",
  "Holidays",
  "Thank-you gifts",
  "Corporate gifts",
];

const steps = [
  {
    title: "Tell us who it's for",
    text: "Get in touch and choose a home cleaning or car detailing package.",
  },
  {
    title: "We prepare the gift card",
    text: "We get your gift card ready, so all that's left is to give it.",
  },
  {
    title: "They book when it suits them",
    text: "Your recipient schedules their service at a time that works for them.",
  },
];

function Bow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" aria-hidden className={className}>
      <path d="M32 22C25 9 9 4 6 12s9 13 26 10Z" />
      <path d="M32 22c7-13 23-18 26-10s-9 13-26 10Z" />
      <path d="m29.5 25-8.5 18 6.5-2 4.5 5 .5-21Z" />
      <path d="m34.5 25 8.5 18-6.5-2-4.5 5-.5-21Z" />
      <circle cx="32" cy="23" r="5.5" />
    </svg>
  );
}

type GiftCardProps = {
  service: string;
  tone: "noir" | "ivory";
  className?: string;
};

// Champagne gold, used like foil: a soft gradient rather than a flat colour.
const foil = "bg-[linear-gradient(120deg,#a8834a_0%,#e9d5a6_45%,#b8935a_70%,#e3c98f_100%)]";

/** A gift card drawn in CSS: gold-foil logo, a ribbon wrapped around it and a bow. */
function GiftCard({ service, tone, className }: GiftCardProps) {
  const noir = tone === "noir";
  const logoMask = `url("${logo.src}")`;
  return (
    <div
      className={cn(
        "absolute aspect-[1.586] w-[360px] overflow-hidden rounded-[20px] p-6 transition-transform duration-700 ease-out-quart max-sm:w-[250px] max-sm:rounded-2xl max-sm:p-4",
        noir
          ? "bg-[linear-gradient(135deg,#2a2a2d_0%,#151517_55%,#0b0b0c_100%)] text-white shadow-[0_40px_70px_-24px_rgba(20,16,10,0.65)]"
          : "bg-[linear-gradient(135deg,#ffffff_0%,#f7f2ea_100%)] text-ink-soft shadow-[0_30px_60px_-24px_rgba(60,45,20,0.45)] ring-1 ring-[#e8dcc6]",
        className,
      )}
    >
      {/* Ribbon, wrapped across and down the card. */}
      <div className={cn("absolute inset-x-0 top-[40%] h-5 opacity-90 max-sm:h-3.5", foil)} />
      <div className={cn("absolute inset-y-0 right-[20%] w-5 opacity-90 max-sm:w-3.5", foil)} />
      <Bow className="absolute top-[40%] right-[20%] w-[60px] translate-x-[20px] -translate-y-[18px] fill-[#cfae72] drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)] max-sm:w-[42px] max-sm:translate-x-[14px] max-sm:-translate-y-[13px]" />
      {/* Soft sheen, as on a printed card. */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.14)_48%,transparent_62%)]" />

      <div className="relative flex h-full flex-col justify-between">
        {/* The logo, cut out of a gold-foil gradient on the dark card. */}
        {noir ? (
          <span
            aria-hidden
            className={cn("block h-[56px] w-[61px] max-sm:h-10 max-sm:w-[44px]", foil)}
            style={{
              maskImage: logoMask,
              WebkitMaskImage: logoMask,
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          />
        ) : (
          <Image
            src={logo}
            alt=""
            sizes="(max-width: 479px) 44px, 64px"
            className="h-[56px] w-auto self-start max-sm:h-10"
          />
        )}
        <div>
          <p
            className={cn(
              "mb-1 font-text text-[11px] font-semibold tracking-[0.32em] uppercase max-sm:text-[9px]",
              noir ? "text-[#d9bf8a]" : "text-[#9b7b45]",
            )}
          >
            Gift card
          </p>
          <p className="mb-0 font-heading text-[22px] leading-7 font-bold max-sm:text-[17px] max-sm:leading-5">
            {service}
          </p>
        </div>
      </div>
    </div>
  );
}

export function GiftCardSection() {
  return (
    <section className={cn("px-5", sectionSpacing.bottom)}>
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-[#f5efe6] px-14 pt-16 pb-10 ring-1 ring-[#ebe0cd] max-lg:px-10 max-sm:rounded-3xl max-sm:px-5 max-sm:pt-10">
        <div className="relative grid grid-cols-2 items-center gap-14 max-lg:grid-cols-1 max-lg:gap-10">
          <Reveal className="group relative mx-auto h-[340px] w-full max-w-[480px] max-sm:h-[250px] max-sm:max-w-[320px]">
            <GiftCard
              service="Car Detailing"
              tone="ivory"
              className="top-4 left-0 -rotate-[9deg] group-hover:-translate-x-3 group-hover:-rotate-[13deg] max-sm:top-2"
            />
            <GiftCard
              service="Home Cleaning"
              tone="noir"
              className="right-0 bottom-4 rotate-[5deg] group-hover:translate-x-3 group-hover:rotate-[8deg] max-sm:bottom-2"
            />
          </Reveal>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-9 min-w-9 items-center justify-center rounded-lg bg-[#1a1a1c] text-[20px] text-[#e3c98f]">
                <GiftIcon />
              </div>
              <p className="mb-0 font-text text-[18px] text-ink-soft">Gift cards</p>
            </div>
            <h2 className="my-0 font-heading text-[38px] leading-[46px] text-ink-soft max-md:text-[30px] max-md:leading-[36px]">
              Give the Gift of a Spotless Space
            </h2>
            <p className="mt-4 mb-0 max-w-[500px] font-text text-[17px] leading-[30px] text-[#5b5650] max-md:text-[16px] max-md:leading-7">
              Looking for the ultimate practical gift? Treat your friends, family, or colleagues to
              a professional home cleaning or car detailing package.
            </p>

            <p className="mt-7 mb-3 font-text text-[12px] font-semibold tracking-[0.2em] text-[#9b7b45] uppercase">
              Perfect for
            </p>
            <ul className="mb-0 flex list-none flex-wrap gap-2 pl-0">
              {occasions.map((occasion) => (
                <li
                  key={occasion}
                  className="rounded-full border border-[#e2d3b8] bg-white/70 px-3.5 py-1.5 font-text text-[13px] leading-5 text-[#4a4038]"
                >
                  {occasion}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 max-sm:flex-col">
              <Link
                href="/contact-us?topic=gift-card"
                className="group/cta inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a1a1c] px-6 py-[14px] font-text text-[16px] font-medium text-white no-underline transition-colors hover:bg-black"
              >
                Get a Gift Card
                <ArrowRightIcon className="size-[18px] text-[#e3c98f] transition-transform group-hover/cta:translate-x-1" />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1a1a1c]/25 px-6 py-[14px] font-text text-[16px] font-medium text-[#1a1a1c] no-underline transition-colors hover:bg-[#1a1a1c] hover:text-white"
              >
                <PhoneIcon className="size-[18px]" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

        <ol className="relative mt-12 mb-0 grid list-none grid-cols-3 gap-8 border-t border-[#e2d3b8] pt-8 pl-0 max-md:mt-10 max-md:grid-cols-1 max-md:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex size-9 min-w-9 items-center justify-center rounded-full border border-[#c9a96a] font-heading text-[15px] font-bold text-[#8a6a35]">
                {index + 1}
              </span>
              <div>
                <p className="mb-1 font-text text-[15px] leading-6 font-semibold text-ink-soft">
                  {step.title}
                </p>
                <p className="mb-0 font-text text-[14px] leading-[22px] text-[#6b645c]">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
