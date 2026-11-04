import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { MessageIcon, PlusIcon } from "@/components/ui/icons";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

export type Faq = {
  question: string;
  answer: string;
  /** Optional related pages, shown under the answer (not part of the FAQ schema). */
  links?: { label: string; href: string }[];
};

type FaqSectionProps = {
  items: Faq[];
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
};

/** Questions and answers in native disclosure widgets, plus FAQPage data for search. */
export function FaqSection({
  items,
  title = "Frequently Asked Questions",
  description,
  className,
}: FaqSectionProps) {
  return (
    <section className={cn("px-5", sectionSpacing.y, className)}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <div className="mx-auto grid max-w-[1440px] grid-cols-[4fr_7fr] gap-16 max-lg:grid-cols-1 max-lg:gap-8">
        <div>
          <SectionHeader
            eyebrow={{ icon: <MessageIcon />, label: "FAQ" }}
            title={title}
            description={description}
          />
          <p className="mt-6 mb-0 font-text text-[15px] text-muted">
            Still have a question?{" "}
            <Link
              href="/contact-us"
              className="font-semibold text-brand no-underline hover:underline"
            >
              Get in touch
            </Link>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-black/[0.08] bg-white transition-colors open:border-brand/30 open:bg-[#fffafa]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-heading text-[17px] leading-6 font-bold text-ink-soft [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="flex size-8 min-w-8 items-center justify-center rounded-full bg-brand-tint text-[18px] text-brand transition-transform duration-300 group-open:rotate-45">
                  <PlusIcon />
                </span>
              </summary>
              <p
                className={cn(
                  "mb-0 px-6 font-text text-[15px] leading-[26px] text-muted",
                  item.links?.length ? "pb-2" : "pb-6",
                )}
              >
                {item.answer}
              </p>
              {item.links && item.links.length > 0 && (
                <ul className="mt-0 mb-0 flex list-none flex-wrap gap-x-5 gap-y-1 px-6 pb-5">
                  {item.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-8 items-center font-text text-[14px] font-semibold text-brand no-underline hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
