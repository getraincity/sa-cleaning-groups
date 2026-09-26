import { CheckIcon, SparklesIcon } from "@/components/ui/icons";
import { headingId, type Block } from "@/content/blog";

/** Renders an article's blocks with the blog's reading typography. */
export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="font-text text-[17px] leading-[30px] text-body max-sm:text-[16px] max-sm:leading-7">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p key={index} className="mb-6">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={index}
                id={headingId(block.text)}
                className="mt-12 mb-4 scroll-mt-8 font-heading text-[26px] leading-8 text-ink-soft first:mt-0 max-sm:text-[22px] max-sm:leading-7"
              >
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul key={index} className="mb-6 grid list-none gap-3 pl-0">
                {block.items.map((item) => (
                  <li key={item} className="relative pl-6">
                    <span className="absolute top-[13px] left-1 size-1.5 rounded-full bg-brand max-sm:top-[11px]" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "checklist":
            return (
              <div
                key={index}
                className="mb-8 rounded-2xl border border-black/[0.08] bg-[#fcfbfa] p-6 max-sm:p-5"
              >
                <p className="mb-4 font-heading text-[17px] leading-6 font-bold text-ink-soft">
                  {block.title}
                </p>
                <ul className="mb-0 grid list-none gap-3 pl-0 text-[16px] leading-[26px]">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 flex size-[18px] min-w-[18px] items-center justify-center rounded-[5px] bg-brand-tint text-[12px] text-brand">
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          case "tip":
            return (
              <aside
                key={index}
                className="mb-8 rounded-2xl border-l-4 border-brand bg-[#fff5f5] px-6 py-5"
              >
                <p className="mb-1 inline-flex items-center gap-2 font-heading text-[16px] leading-6 font-bold text-brand">
                  <SparklesIcon className="size-4" />
                  {block.title}
                </p>
                <p className="mb-0 text-[16px] leading-[26px]">{block.text}</p>
              </aside>
            );
        }
      })}
    </div>
  );
}
