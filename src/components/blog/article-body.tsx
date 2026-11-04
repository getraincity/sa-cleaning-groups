import Link from "next/link";
import type { ReactNode } from "react";
import { CheckIcon, SparklesIcon } from "@/components/ui/icons";
import { headingId, type Block } from "@/content/blog";

// Vertical padding on an inline link enlarges its tap area without changing the line height.
const linkClass = "py-[7px] font-medium text-brand underline underline-offset-2 hover:no-underline";

/** Turns `[text](/path)` and `[text](https://…)` in article copy into links. */
function inline(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
    const match = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (!match) return part;
    const [, label, href] = match;
    if (href.startsWith("/")) {
      return (
        <Link key={index} href={href} className={linkClass}>
          {label}
        </Link>
      );
    }
    return (
      <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {label}
      </a>
    );
  });
}

/** Renders an article's blocks with the blog's reading typography. */
export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="font-text text-[17px] leading-[30px] text-body max-sm:text-[16px] max-sm:leading-7">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p key={index} className="mb-6">
                {inline(block.text)}
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
                    {inline(item)}
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
                      {inline(item)}
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
                <p className="mb-0 text-[16px] leading-[26px]">{inline(block.text)}</p>
              </aside>
            );
          case "table":
            return (
              <div
                key={index}
                className="mb-8 overflow-x-auto rounded-2xl border border-black/[0.08] bg-[#fcfbfa]"
              >
                <table className="w-full border-collapse text-left text-[15px] leading-[24px]">
                  <caption className="px-5 pt-5 pb-3 text-left font-heading text-[17px] leading-6 font-bold text-ink-soft max-sm:px-4">
                    {block.caption}
                  </caption>
                  <thead>
                    <tr>
                      {block.columns.map((column) => (
                        <th
                          key={column}
                          scope="col"
                          className="border-b border-black/[0.08] px-5 py-3 text-[13px] font-semibold tracking-[0.08em] text-muted uppercase max-sm:px-4"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th
                              key={cellIndex}
                              scope="row"
                              className="border-b border-black/[0.06] px-5 py-3 align-top font-semibold text-ink-soft max-sm:px-4"
                            >
                              {inline(cell)}
                            </th>
                          ) : (
                            <td
                              key={cellIndex}
                              className="border-b border-black/[0.06] px-5 py-3 align-top max-sm:px-4"
                            >
                              {inline(cell)}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "sources":
            return (
              <div key={index} className="mb-8 border-t border-black/[0.08] pt-6">
                <p className="mb-3 font-heading text-[16px] leading-6 font-bold text-ink-soft">
                  {block.title}
                </p>
                <ul className="mb-0 grid list-none gap-2 pl-0 text-[15px] leading-6">
                  {block.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
        }
      })}
    </div>
  );
}
