import Image from "next/image";
import carExteriorBranded from "@/assets/images/car-exterior-branded.webp";
import cleaningWindowView from "@/assets/images/cleaning-window-view.jpg";
import cleaningWindows from "@/assets/images/cleaning-windows.jpg";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { HeartIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const reasons = [
  {
    image: cleaningWindows,
    alt: "An S&A cleaner washing a large apartment window",
    title: "Our Team",
    text: "Our cleaners are fully trained, insured and background-checked, so you always know who's in your home. Friendly, reliable and proud of their work, they go the extra mile on every visit.",
  },
  {
    image: cleaningWindowView,
    alt: "An S&A cleaner polishing a floor-to-ceiling window",
    title: "Our Promise",
    text: "Quality, reliability and professionalism guide every job we take on. We aim to exceed expectations, not just meet them, and our 100% satisfaction guarantee means we're not done until you're happy.",
  },
  {
    image: carExteriorBranded,
    alt: "The S&A Auto Detailing truck",
    title: "Vehicle Detailing",
    text: "Pet hair, kids' snacks, coffee spilled across the console, or the mould our wet West Coast climate loves: we've seen it all, and cleaned it all. Your vehicle comes back looking its best.",
  },
];

/** Three photo cards on a dark band: the team, the promise, the vehicles. */
export function WhyChooseUs() {
  return (
    <section className={cn("mt-[120px] bg-[#1c1c1e] px-5 max-sm:mt-[64px]", sectionSpacing.y)}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          align="center"
          tone="dark"
          eyebrow={{ icon: <HeartIcon />, label: "Why S&A" }}
          title="Why Vancouver Chooses S&A"
          description="Real people, real standards and real results, for your home, your vehicle and your business."
        />

        <div className="mt-12 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-10">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 150} className="group">
              <div className="relative aspect-square overflow-hidden rounded-[20px] max-lg:aspect-[4/3]">
                <Image
                  src={reason.image}
                  alt={reason.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 flex size-10 items-center justify-center rounded-full bg-brand font-heading text-[14px] font-bold text-white">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 mb-2 font-heading text-[21px] leading-7 text-white">
                {reason.title}
              </h3>
              <p className="mb-0 font-text text-[15px] leading-[26px] text-white/70">
                {reason.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
