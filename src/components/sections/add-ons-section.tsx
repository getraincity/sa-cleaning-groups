import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRightIcon,
  BalconyIcon,
  BrickWallIcon,
  FridgeIcon,
  OvenIcon,
  PlusIcon,
  RugIcon,
  TilesIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { bookingLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const addOns: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <RugIcon />,
    title: "Carpet cleaning",
    text: "Carpets and rugs refreshed, lifting the dirt that everyday vacuuming leaves behind.",
  },
  {
    icon: <BalconyIcon />,
    title: "Balcony cleaning",
    text: "Floors, railings and glass washed by hand, so your outdoor space is ready to enjoy.",
  },
  {
    icon: <OvenIcon />,
    title: "Inside the oven",
    text: "Baked-on grease and spills cleaned from the racks, door and inside of your oven.",
  },
  {
    icon: <FridgeIcon />,
    title: "Inside the fridge",
    text: "Shelves, drawers and door seals wiped clean and sanitized.",
  },
  {
    icon: <BrickWallIcon />,
    title: "Wall cleaning",
    text: "Scuffs, fingerprints and marks washed from walls, doors and trim.",
  },
  {
    icon: <TilesIcon />,
    title: "Tile & grout cleaning and sealing",
    text: "Tile and grout scrubbed back to their true colour, then sealed to help keep them that way.",
  },
];

/** Specialized extras that can be added to any home clean. */
export function AddOnsSection() {
  return (
    <section className={cn("bg-brand-wash px-5", sectionSpacing.y)}>
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          align="center"
          eyebrow={{ icon: <PlusIcon />, label: "Add-ons" }}
          title="Add a Little Extra to Any Clean"
          description="Specialized cleaning for the jobs a regular visit doesn't cover. Add them to your booking, or ask us about anything you don't see here."
        />

        <div className="mt-12 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {addOns.map(({ icon, title, text }, index) => (
            <Reveal
              key={title}
              delay={(index % 3) * 100}
              className="flex items-start gap-4 rounded-[20px] bg-white p-6 ring-1 ring-black/[0.06]"
            >
              <span className="flex size-12 min-w-12 items-center justify-center rounded-xl bg-brand-tint text-[24px] text-brand">
                {icon}
              </span>
              <div>
                <h3 className="mt-0.5 mb-1 font-heading text-[17px] leading-6 text-ink-soft">
                  {title}
                </h3>
                <p className="mb-0 font-text text-[14px] leading-[22px] text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 max-sm:flex-col">
          <Link
            href={bookingLinks.homeCleaning}
            className="group/cta inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-[14px] font-text text-[16px] font-medium text-white no-underline transition-colors hover:bg-brand-alt"
          >
            Book a clean
            <ArrowRightIcon className="size-[18px] transition-transform group-hover/cta:translate-x-1" />
          </Link>
          <Link
            href="/contact-us?topic=home-cleaning"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-[14px] font-text text-[16px] font-medium text-ink-soft no-underline ring-1 ring-black/10 transition-colors hover:bg-white/80"
          >
            Ask about an add-on
          </Link>
        </div>
      </div>
    </section>
  );
}
