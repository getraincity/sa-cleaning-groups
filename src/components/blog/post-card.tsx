import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { formatPostDate, readingMinutes, type Post } from "@/content/blog";
import { cn } from "@/lib/utils";

type PostCardProps = {
  post: Post;
  /** The wide, image-beside-text layout for the latest post. */
  featured?: boolean;
  className?: string;
};

export function PostMeta({ post, className }: { post: Post; className?: string }) {
  return (
    <p className={cn("mb-0 font-text text-[13px] text-muted", className)}>
      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
      <span aria-hidden className="mx-2">
        ·
      </span>
      {readingMinutes(post)} min read
    </p>
  );
}

export function CategoryChip({ category, className }: { category: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-white/95 px-3 py-1 font-text text-[12px] leading-4 font-semibold text-brand",
        className,
      )}
    >
      {category}
    </span>
  );
}

export function PostCard({ post, featured = false, className }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex h-full overflow-hidden rounded-3xl bg-white no-underline ring-1 ring-black/[0.07] transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)]",
        featured ? "grid grid-cols-[7fr_5fr] max-lg:grid-cols-1" : "flex-col",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          featured ? "min-h-[380px] max-lg:aspect-[16/9] max-lg:min-h-0" : "aspect-[16/10]",
        )}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={featured ? "(max-width: 991px) 100vw, 60vw" : "(max-width: 767px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
        />
        <CategoryChip category={post.category} className="absolute top-4 left-4" />
      </div>
      <div
        className={cn("flex flex-1 flex-col", featured ? "justify-center p-10 max-sm:p-6" : "p-6")}
      >
        {featured && (
          <p className="mb-3 font-text text-[12px] font-semibold tracking-[0.2em] text-brand uppercase">
            Latest article
          </p>
        )}
        <PostMeta post={post} />
        <h3
          className={cn(
            "mt-2 mb-3 font-heading text-ink-soft transition-colors group-hover:text-brand",
            featured
              ? "text-[30px] leading-[38px] max-sm:text-[24px] max-sm:leading-8"
              : "text-[19px] leading-[26px]",
          )}
        >
          {post.title}
        </h3>
        <p
          className={cn(
            "mb-0 font-text text-muted",
            featured ? "text-[16px] leading-7" : "text-[14px] leading-[22px]",
          )}
        >
          {post.excerpt}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-text text-[14px] font-semibold text-brand">
          Read article
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
