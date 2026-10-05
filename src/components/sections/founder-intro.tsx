import Image from "next/image";
import teamPhoto from "@/assets/images/cleaning-window-view.jpg";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { HeartIcon, SparklesIcon, UsersIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { signature } from "@/lib/fonts";
import { cn } from "@/lib/utils";

// TO REPLACE: the client is sending a photo of Alex & Shaida. Until then this
// is a photo of the team at work, so nothing here names the people in it.
const photo = {
  image: teamPhoto,
  alt: "An S&A team member cleaning a floor-to-ceiling window with a view of the water",
};

const points = [
  {
    Icon: UsersIcon,
    title: "Who we are",
    text: "A Vancouver team looking after homes, vehicles and workplaces across the city. Trained, insured and background-checked, and proud of the work we do.",
  },
  {
    Icon: HeartIcon,
    title: "Why we started",
    text: "Because your time matters. We started out as Akumal Executive Cleaning over nine years ago so busy people could stop spending their weekends cleaning, and that is still why we do it.",
  },
];

/** About page opener: the co-founders introduce the company in their own words. */
export function FounderIntro() {
  return (
    <section className={cn("px-5", sectionSpacing.top)}>
      <div className="mx-auto grid max-w-[1240px] grid-cols-[5fr_6fr] items-center gap-20 max-lg:grid-cols-1 max-lg:gap-12">
        <Reveal className="relative mx-auto w-full max-w-[480px] max-lg:max-w-[560px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] max-lg:aspect-[4/3]">
            <Image
              src={photo.image}
              alt={photo.alt}
              fill
              sizes="(max-width: 991px) 100vw, 40vw"
              className="object-cover photo-calm"
            />
          </div>
          <div className="absolute -right-6 -bottom-6 flex items-center gap-3 rounded-2xl bg-white py-4 pr-6 pl-4 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.25)] max-lg:right-4 max-lg:-bottom-5">
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand text-[22px] text-white">
              <SparklesIcon />
            </span>
            <span>
              <span className="block font-heading text-[22px] leading-7 font-bold text-ink-soft">
                9+ years
              </span>
              <span className="block font-text text-[13px] leading-5 text-muted">
                Serving Vancouver
              </span>
            </span>
          </div>
        </Reveal>

        <div>
          <SectionHeader
            eyebrow={{ icon: <UsersIcon />, label: "Meet the founders" }}
            title="Hi, We're Alex & Shaida"
            description="We're the co-founders of S&A Cleaning Group. What began as a small, detail-obsessed cleaning team has grown into a company trusted with homes, vehicles and workplaces across Greater Vancouver, and we still care about every job like it's our own home."
          />

          <div className="mt-8 grid grid-cols-2 gap-6 max-sm:grid-cols-1">
            {points.map(({ Icon, title, text }) => (
              <div key={title} className="border-t border-black/10 pt-5">
                <div className="flex items-center gap-2.5">
                  <Icon className="size-5 text-brand" />
                  <h3 className="my-0 font-heading text-[18px] leading-6 text-ink-soft">{title}</h3>
                </div>
                <p className="mt-2 mb-0 font-text text-[15px] leading-[26px] text-muted">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span
              className={`${signature.className} text-[42px] leading-[48px] whitespace-nowrap text-ink-soft max-sm:text-[36px]`}
            >
              Alex &amp; Shaida
            </span>
            <span className="h-px w-10 bg-brand" />
            <span className="font-text text-[12px] font-semibold tracking-[0.18em] text-muted uppercase">
              Co-founders
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
