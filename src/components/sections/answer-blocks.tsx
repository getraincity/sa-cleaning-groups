import Link from "next/link";
import { ArrowRightIcon, MessageIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import type { Answer } from "@/content/answers";
import { cn } from "@/lib/utils";

type AnswerBlocksProps = {
  items: Answer[];
  title?: string;
  description?: string;
  className?: string;
};

/**
 * Question headings with a short, self-contained answer underneath: the shape
 * search and answer engines quote. The copy lives in `src/content/answers.ts`.
 */
export function AnswerBlocks({
  items,
  title = "Quick Answers",
  description,
  className,
}: AnswerBlocksProps) {
  return (
    <section className={cn("px-5", sectionSpacing.y, className)}>
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          align="center"
          eyebrow={{ icon: <MessageIcon />, label: "Good to know" }}
          title={title}
          description={description}
        />
        <div className="mt-12 grid grid-cols-2 gap-4 max-lg:grid-cols-1">
          {items.map((item, index) => (
            <Reveal
              key={item.question}
              delay={(index % 2) * 100}
              className={cn(
                "flex flex-col rounded-[20px] border border-black/[0.08] bg-white p-7 max-sm:p-6",
                items.length % 2 === 1 && index === items.length - 1 && "lg:col-span-2",
              )}
            >
              <h3 className="mt-0 mb-3 font-heading text-[20px] leading-7 text-ink-soft">
                {item.question}
              </h3>
              <p className="mb-0 font-text text-[15px] leading-[26px] text-muted">{item.answer}</p>
              {item.links && item.links.length > 0 && (
                <ul className="mt-4 mb-0 flex list-none flex-wrap gap-x-5 gap-y-1 pl-0">
                  {item.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-8 items-center gap-1.5 font-text text-[14px] font-semibold text-brand no-underline hover:underline"
                      >
                        {link.label}
                        <ArrowRightIcon className="size-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
