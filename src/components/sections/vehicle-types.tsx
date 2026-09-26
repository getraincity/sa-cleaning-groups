import Link from "next/link";
import {
  ArrowRightIcon,
  BoatIcon,
  CarIcon,
  FleetIcon,
  PickupIcon,
  RvIcon,
  SparklesIcon,
  VanIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { bookingLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const vehicles = [
  {
    Icon: RvIcon,
    title: "RVs & Campers",
    text: "Interior deep cleans and exterior washes to get your RV or camper road-trip ready, or cleaned up after the season.",
  },
  {
    Icon: PickupIcon,
    title: "Pickup Trucks",
    text: "Mud, gravel and job-site dust lifted out of cabs, seats and mats, finished with a gleaming exterior.",
  },
  {
    Icon: VanIcon,
    title: "Mobile Work Vehicles",
    text: "Vans and trades vehicles cleaned inside and out, so your mobile office looks as professional as your work.",
  },
  {
    Icon: FleetIcon,
    title: "Fleet Vehicles",
    text: "Keep every vehicle in your company fleet looking sharp, with detailing scheduled around your operations.",
  },
  {
    Icon: BoatIcon,
    title: "Boats",
    text: "Deck, cabin and upholstery cleaning to keep your boat looking its best, on and off the water.",
  },
  {
    Icon: SparklesIcon,
    title: "Something Else?",
    text: "Motorcycles, trailers or something a little unusual? Tell us what you have and we'll let you know how we can help.",
  },
];

/** Dark band listing the vehicles beyond cars that the team details. */
export function VehicleTypes() {
  return (
    <section className={cn("mt-[96px] bg-[#1c1c1e] px-5 max-md:mt-16", sectionSpacing.y)}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          align="center"
          tone="dark"
          eyebrow={{ icon: <CarIcon />, label: "Beyond cars" }}
          title="We Detail More Than Cars"
          description="From weekend campers to working vans and entire fleets, our detailers bring the same care to every vehicle."
        />

        <div className="mt-12 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {vehicles.map(({ Icon, title, text }, index) => (
            <Reveal
              key={title}
              delay={(index % 3) * 100}
              className="group rounded-[20px] bg-white/[0.04] p-7 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/[0.07]"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-[24px] text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                <Icon />
              </span>
              <h3 className="mt-5 mb-2 font-heading text-[19px] leading-[26px] text-white">
                {title}
              </h3>
              <p className="mb-0 font-text text-[14px] leading-[22px] text-white/65">{text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 max-sm:flex-col">
          <Link
            href="/contact-us?topic=car-detailing"
            className="group/cta inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-[14px] font-text text-[16px] font-medium text-white no-underline transition-colors hover:bg-brand-alt"
          >
            Get a quote for your vehicle
            <ArrowRightIcon className="size-[18px] transition-transform group-hover/cta:translate-x-1" />
          </Link>
          <a
            href={bookingLinks.carDetailing}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-[14px] font-text text-[16px] font-medium text-charcoal no-underline transition-colors hover:bg-white/90"
          >
            Book car detailing
          </a>
        </div>
      </div>
    </section>
  );
}
