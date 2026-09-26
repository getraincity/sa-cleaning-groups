import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRightIcon, HistoryIcon, SparklesIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const milestones = [
  {
    label: "Where it started",
    title: "Akumal Executive Cleaning",
    text: "We began as Akumal Executive Cleaning, a detail-driven team built on reliable, thorough home cleaning for busy Vancouver households.",
  },
  {
    label: "Growing with our clients",
    title: "More services, same standards",
    text: "As word spread, our clients asked for more. We expanded into professional auto detailing and commercial custodian services, without ever compromising on the care that built our name.",
  },
  {
    label: "Today",
    title: "S&A Cleaning Group",
    text: "Now S&A Cleaning Group, we bring over nine years of experience to homes, vehicles and businesses across Greater Vancouver, and we're just getting started.",
  },
];

/** "Our story": nine years in business, from Akumal Executive Cleaning to S&A. */
export function CompanyHistory() {
  return (
    <section className="px-5 pt-[120px] max-sm:pt-[64px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[5fr_7fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <Reveal className="relative overflow-hidden rounded-3xl bg-[#f7f5f4] p-10 max-sm:p-7 lg:sticky lg:top-10">
          <div className="pointer-events-none absolute -top-24 -right-24 size-[280px] rounded-full bg-brand/10 blur-[80px]" />
          <p className="relative mb-0 font-heading text-[136px] leading-[120px] font-bold tracking-[-4px] text-brand max-sm:text-[104px] max-sm:leading-[96px]">
            9
            <span className="align-top text-[76px] leading-[90px] max-sm:text-[56px] max-sm:leading-[80px]">
              +
            </span>
          </p>
          <p className="relative mt-3 mb-0 font-heading text-[22px] leading-7 font-bold text-ink-soft">
            Years keeping Vancouver clean
          </p>

          <div className="relative mt-8 border-t border-black/10 pt-7">
            <p className="mb-3 font-text text-[12px] font-semibold tracking-[0.2em] text-muted uppercase">
              A new name, the same care
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-black/15 px-3.5 py-1.5 font-text text-[14px] text-muted line-through decoration-brand/60">
                Akumal Executive Cleaning
              </span>
              <ArrowRightIcon className="size-5 text-brand" />
              <span className="rounded-full bg-brand px-3.5 py-1.5 font-text text-[14px] font-semibold text-white">
                S&amp;A Cleaning Group
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeader
            eyebrow={{ icon: <HistoryIcon />, label: "Our story" }}
            title="From Akumal Executive Cleaning to S&A Cleaning Group"
            description="For over nine years, we've been helping Vancouver get its time back. What began as Akumal Executive Cleaning has grown into S&A Cleaning Group: more services, and the same obsession with the details."
          />

          <div className="relative mt-10">
            {/* The timeline's spine, running through the centre of each marker. */}
            <span className="absolute top-5 bottom-5 left-5 w-px bg-brand-line" aria-hidden />
            <ol className="relative mb-0 list-none pl-0">
              {milestones.map((milestone, index) => {
                const current = index === milestones.length - 1;
                return (
                  <li key={milestone.title} className="relative pb-8 pl-16 last:pb-0 max-sm:pl-14">
                    <span
                      className={cn(
                        "absolute top-0 left-0 flex size-10 items-center justify-center rounded-full border-2 border-brand font-heading text-[15px] font-bold",
                        current ? "bg-brand text-white" : "bg-white text-brand",
                      )}
                    >
                      {current ? <SparklesIcon className="size-5" /> : index + 1}
                    </span>
                    <p className="mb-1 font-text text-[12px] font-semibold tracking-[0.2em] text-brand uppercase">
                      {milestone.label}
                    </p>
                    <h3 className="mt-0 mb-1.5 font-heading text-[20px] leading-[26px] text-ink-soft">
                      {milestone.title}
                    </h3>
                    <p className="mb-0 font-text text-[15px] leading-[26px] text-muted">
                      {milestone.text}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
