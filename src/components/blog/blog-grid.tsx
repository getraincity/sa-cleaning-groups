"use client";

import { useState } from "react";
import { PostCard } from "@/components/blog/post-card";
import { blogCategories, type Post } from "@/content/blog";
import { cn } from "@/lib/utils";

const filters = ["All", ...blogCategories] as const;
type Filter = (typeof filters)[number];

/** The latest post as a feature, then every post filterable by category. */
export function BlogGrid({ posts }: { posts: Post[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [latest, ...rest] = posts;
  const visible = filter === "All" ? rest : posts.filter((post) => post.category === filter);

  return (
    <>
      <div role="group" aria-label="Filter articles by topic" className="flex flex-wrap gap-2">
        {filters.map((option) => {
          const count =
            option === "All"
              ? posts.length
              : posts.filter((post) => post.category === option).length;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 font-text text-[14px] leading-5 transition-colors",
                filter === option
                  ? "border-ink-soft bg-ink-soft text-white"
                  : "border-black/15 bg-white text-ink-soft hover:border-black/30",
              )}
            >
              {option}
              <span className={cn("ml-1.5", filter === option ? "text-white/60" : "text-muted")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {filter === "All" && latest && <PostCard post={latest} featured className="mt-8" />}

      <div className="mt-6 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {visible.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
