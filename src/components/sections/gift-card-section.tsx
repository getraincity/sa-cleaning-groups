import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/brand/logo-transparent.png";
import { Eyebrow } from "@/components/ui/eyebrow";
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
  tone: "red" | "light";
  className?: string;
};

/** A gift card drawn in CSS: brand logo, a ribbon wrapped around it and a bow. */
function GiftCard({ service, tone, className }: GiftCardProps) {
  const red = tone === "red";
  return (
    <div
      className={cn(
        "absolute aspect-[1.586] w-[360px] overflow-hidden rounded-[20px] p-6 transition-transform duration-700 ease-out-quart max-sm:w-[260px] max-sm:rounded-2xl max-sm:p-4",
        red
          ? "bg-[linear-gradient(135deg,#ff3b3b_0%,#de0a0a_45%,#9e0000_100%)] text-white shadow-[0_40px_70px_-20px_rgba(0,0,0,0.75)]"
          : "bg-[linear-gradient(135deg,#ffffff_0%,#f1efee_100%)] text-ink-soft shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      {/* Ribbon, wrapped across and down the card. */}
      <div
        className={cn(
          "absolute inset-x-0 top-[40%] h-6 max-sm:h-4",
          red ? "bg-white/20" : "bg-brand/85",
        )}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-[20%] w-6 max-sm:w-4",
          red ? "bg-white/20" : "bg-brand/85",
        )}
      />
      <Bow
        className={cn(
          "absolute top-[40%] right-[20%] w-[64px] translate-x-[20px] -translate-y-[19px] max-sm:w-[46px] max-sm:translate-x-[15px] max-sm:-translate-y-[14px]",
          red ? "fill-white" : "fill-brand",
        )}
      />
      {/* Soft sheen, as on a printed card. */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.22)_48%,transparent_62%)]" />

      <div className="relative flex h-full flex-col justify-between">
        <Image
          src={logo}
          alt=""
          sizes="(max-width: 479px) 44px, 64px"
          className={cn("h-[56px] w-auto self-start max-sm:h-10", red && "brightness-0 invert")}
        />
        <div>
          <p
            className={cn(
              "mb-1 font-text text-[12px] font-semibold tracking-[0.3em] uppercase max-sm:text-[9px]",
              red ? "text-white/80" : "text-muted",
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
    <section className={cn("px-5", sectionSpacing.y)}>
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-[#1c1c1e] px-14 pt-16 pb-10 max-lg:px-10 max-sm:rounded-3xl max-sm:px-5 max-sm:pt-10">
        {/* Background glow in the brand colour. */}
        <div className="pointer-events-none absolute top-1/2 left-[8%] size-[440px] -translate-y-1/2 rounded-full bg-brand/25 blur-[150px] max-lg:top-[20%] max-lg:left-1/2 max-lg:size-[380px] max-lg:-translate-x-1/2" />
        <div className="pointer-events-none absolute -right-40 -bottom-56 size-[480px] rounded-full bg-brand/15 blur-[140px]" />

        <div className="relative grid grid-cols-2 items-center gap-14 max-lg:grid-cols-1 max-lg:gap-10">
          <Reveal className="group relative mx-auto h-[340px] w-full max-w-[480px] max-sm:h-[260px] max-sm:max-w-[330px]">
            <GiftCard
              service="Car Detailing"
              tone="light"
              className="top-4 left-0 -rotate-[9deg] group-hover:-translate-x-3 group-hover:-rotate-[13deg] max-sm:top-2"
            />
            <GiftCard
              service="Home Cleaning"
              tone="red"
              className="right-0 bottom-4 rotate-[5deg] group-hover:translate-x-3 group-hover:rotate-[8deg] max-sm:bottom-2"
            />
          </Reveal>

          <div>
            <Eyebrow tone="dark" icon={<GiftIcon />}>
              Gift cards
            </Eyebrow>
            <h2 className="my-0 font-heading text-[38px] leading-[46px] text-white max-md:text-[30px] max-md:leading-[36px]">
              Give the Gift of a Spotless Space
            </h2>
            <p className="mt-4 mb-0 max-w-[500px] font-text text-[17px] leading-[30px] text-white/75 max-md:text-[16px] max-md:leading-7">
              Looking for the ultimate practical gift? Treat your friends, family, or colleagues to
              a professional home cleaning or car detailing package.
            </p>

            <p className="mt-7 mb-3 font-text text-[12px] font-semibold tracking-[0.2em] text-white/50 uppercase">
              Perfect for
            </p>
            <ul className="mb-0 flex list-none flex-wrap gap-2 pl-0">
              {occasions.map((occasion) => (
                <li
                  key={occasion}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-text text-[13px] leading-5 text-white/85"
                >
                  {occasion}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 max-sm:flex-col">
              <Link
                href="/contact-us?topic=gift-card"
                className="group/cta inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-[14px] font-text text-[16px] font-medium text-white no-underline transition-colors hover:bg-brand-alt"
              >
                Get a Gift Card
                <ArrowRightIcon className="size-[18px] transition-transform group-hover/cta:translate-x-1" />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-[14px] font-text text-[16px] font-medium text-white no-underline transition-colors hover:bg-white hover:text-ink"
              >
                <PhoneIcon className="size-[18px]" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

        <ol className="relative mt-12 mb-0 grid list-none grid-cols-3 gap-8 border-t border-white/10 pt-8 pl-0 max-md:mt-10 max-md:grid-cols-1 max-md:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex size-9 min-w-9 items-center justify-center rounded-full border border-brand/60 font-heading text-[15px] font-bold text-white">
                {index + 1}
              </span>
              <div>
                <p className="mb-1 font-text text-[15px] leading-6 font-semibold text-white">
                  {step.title}
                </p>
                <p className="mb-0 font-text text-[14px] leading-[22px] text-white/60">
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
