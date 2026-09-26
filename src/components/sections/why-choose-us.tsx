import Image from "next/image";
import carExteriorBranded from "@/assets/images/car-exterior-branded.webp";
import cleaningWindowView from "@/assets/images/cleaning-window-view.jpg";
import cleaningWindows from "@/assets/images/cleaning-windows.jpg";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeartIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

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
    <section className="mt-[140px] bg-[#1c1c1e] px-5 py-[120px] max-sm:mt-[72px] max-sm:py-[72px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <Eyebrow tone="dark" icon={<HeartIcon />}>
            Why S&amp;A
          </Eyebrow>
          <h2 className="my-0 font-heading text-[40px] leading-[46px] text-white max-md:text-[32px] max-md:leading-[38px]">
            Why Vancouver Chooses S&amp;A
          </h2>
          <p className="mt-5 mb-0 font-text text-[16px] leading-8 text-white/70">
            Real people, real standards and real results, for your home, your vehicle and your
            business.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-12">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 150} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] max-lg:aspect-[4/3]">
                <Image
                  src={reason.image}
                  alt={reason.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 flex size-11 items-center justify-center rounded-full bg-brand font-heading text-[15px] font-bold text-white">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-7 mb-3 font-heading text-[24px] leading-[30px] text-white">
                {reason.title}
              </h3>
              <p className="mb-0 font-text text-[16px] leading-7 text-white/70">{reason.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
