import Image from "next/image";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { HeartIcon } from "@/components/ui/icons";
import { stock } from "@/content/stock-photos";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const reasons = [
  {
    image: stock.aboutTeam,
    alt: stock.aboutTeam.alt,
    title: "Our Team",
    text: "Our cleaners are fully trained, insured and background-checked, so you always know who's in your home. Friendly, reliable and proud of their work, they go the extra mile on every visit.",
  },
  {
    image: stock.aboutPromise,
    alt: stock.aboutPromise.alt,
    title: "Our Promise",
    text: "Quality, reliability and professionalism guide every job we take on. We aim to exceed expectations, not just meet them, and our 100% satisfaction guarantee means we're not done until you're happy.",
  },
  {
    image: stock.aboutWorkplace,
    alt: stock.aboutWorkplace.alt,
    title: "Homes & Workplaces",
    text: "From condos and family homes to offices, retail spaces and stratas, the same trained team and the same standards look after every space we clean.",
  },
];

/** Three photo cards on a dark band: the team, the promise, the spaces we clean. */
export function WhyChooseUs() {
  return (
    <section className={cn("mt-[96px] bg-[#1c1c1e] px-5 max-md:mt-[64px]", sectionSpacing.y)}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          align="center"
          tone="dark"
          eyebrow={{ icon: <HeartIcon />, label: "Why S&A" }}
          title="Why Vancouver Chooses S&A"
          description="Real people, real standards and real results, for your home and your business."
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
