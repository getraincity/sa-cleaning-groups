import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import logoSquare from "@/assets/images/brand/logo-square.png";
import { ArticleBody } from "@/components/blog/article-body";
import { PostCard, PostMeta } from "@/components/blog/post-card";
import { CtaBand, type CtaAction } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { ArrowRightIcon, ChevronRightIcon } from "@/components/ui/icons";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { getPost, headingId, posts, type BlogCategory } from "@/content/blog";
import { bookingLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: path,
      publishedTime: post.date,
      images: [{ url: post.image.src, width: post.image.width, height: post.image.height }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

// The call to action that fits each topic.
const nextStep: Record<BlogCategory, { text: string; action: CtaAction }> = {
  "Home Cleaning": {
    text: "Let our team take care of it. Book online in minutes.",
    action: { label: "Book home cleaning", href: bookingLinks.homeCleaning },
  },
  "Car Detailing": {
    text: "Our detailers will bring it back to showroom fresh.",
    action: { label: "Book car detailing", href: bookingLinks.carDetailing, external: true },
  },
  Commercial: {
    text: "Get a custodial plan built around your space.",
    action: { label: "Request a quote", href: "/contact-us?topic=custodian" },
  },
};

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const headings = post.body.flatMap((block) => (block.type === "h2" ? [block.text] : []));
  // Same topic first, then the most recent of the rest.
  const related = [
    ...posts.filter((other) => other.slug !== post.slug && other.category === post.category),
    ...posts.filter((other) => other.slug !== post.slug && other.category !== post.category),
  ].slice(0, 3);
  const step = nextStep[post.category];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          image: `${siteConfig.url}${post.image.src}`,
          author: { "@type": "Organization", name: siteConfig.name },
          publisher: { "@type": "Organization", name: siteConfig.name },
          mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
        }}
      />

      <article>
        <header className="bg-[#f6f4f2] px-5 pt-10 pb-[180px] max-md:pb-[120px]">
          <div className="mx-auto max-w-[860px] text-center">
            <nav aria-label="Breadcrumb" className="font-text text-[13px] text-muted">
              <ol className="mb-0 flex list-none flex-wrap items-center justify-center gap-1.5 pl-0">
                <li>
                  <Link href="/" className="text-muted no-underline hover:text-brand">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRightIcon className="size-3.5" />
                  <Link href="/blog" className="text-muted no-underline hover:text-brand">
                    Blog
                  </Link>
                </li>
                <li
                  aria-current="page"
                  className="flex items-center gap-1.5 font-semibold text-ink-soft"
                >
                  <ChevronRightIcon className="size-3.5" />
                  {post.category}
                </li>
              </ol>
            </nav>
            <h1 className="mt-8 mb-0 font-heading text-[44px] leading-[52px] text-ink-soft max-lg:text-[38px] max-lg:leading-[46px] max-sm:text-[30px] max-sm:leading-[38px]">
              {post.title}
            </h1>
            <p className="mx-auto mt-5 mb-0 max-w-[680px] font-text text-[18px] leading-[30px] text-muted max-sm:text-[16px] max-sm:leading-7">
              {post.excerpt}
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Image
                src={logoSquare}
                alt=""
                className="size-11 rounded-full bg-white object-contain p-1 ring-1 ring-black/5"
              />
              <div className="text-left">
                <p className="mb-0 font-text text-[14px] font-semibold text-ink-soft">
                  S&amp;A Cleaning Team
                </p>
                <PostMeta post={post} />
              </div>
            </div>
          </div>
        </header>

        <div className="px-5">
          <div className="relative mx-auto -mt-[140px] aspect-[16/8] max-w-[1200px] overflow-hidden rounded-3xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)] max-md:-mt-[90px] max-md:aspect-[16/10]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 1240px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>

        <div className={cn("px-5 pt-14", sectionSpacing.bottom)}>
          <div className="mx-auto grid max-w-[1100px] grid-cols-[minmax(0,1fr)_280px] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
            <ArticleBody blocks={post.body} />

            <aside className="max-lg:order-first">
              <div className="flex flex-col gap-5 lg:sticky lg:top-8">
                {headings.length > 0 && (
                  <nav
                    aria-label="On this page"
                    className="rounded-2xl border border-black/[0.08] p-5 max-lg:hidden"
                  >
                    <p className="mb-3 font-text text-[12px] font-semibold tracking-[0.2em] text-muted uppercase">
                      On this page
                    </p>
                    <ol className="mb-0 grid list-none gap-2 pl-0">
                      {headings.map((heading) => (
                        <li key={heading}>
                          <a
                            href={`#${headingId(heading)}`}
                            className="font-text text-[14px] leading-5 text-ink-soft no-underline hover:text-brand"
                          >
                            {heading}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
                <div className="rounded-2xl bg-[linear-gradient(135deg,#e81c1c_0%,#de0a0a_45%,#a80000_100%)] p-6 text-white max-lg:hidden">
                  <p className="mb-2 font-heading text-[19px] leading-6 font-bold">
                    Rather leave it to the pros?
                  </p>
                  <p className="mb-5 font-text text-[14px] leading-[22px] text-white/85">
                    {step.text}
                  </p>
                  {step.action.external ? (
                    <a
                      href={step.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-3 font-text text-[14px] font-medium text-brand no-underline"
                    >
                      {step.action.label}
                      <ArrowRightIcon className="size-4" />
                    </a>
                  ) : (
                    <Link
                      href={step.action.href}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-3 font-text text-[14px] font-medium text-brand no-underline"
                    >
                      {step.action.label}
                      <ArrowRightIcon className="size-4" />
                    </Link>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className={cn("bg-[#f6f4f2] px-5", sectionSpacing.y)}>
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
            <SectionHeader title="Keep Reading" description="More tips and guides from our team." />
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-1.5 font-text text-[15px] font-semibold text-brand no-underline hover:underline"
            >
              All articles
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {related.map((other) => (
              <PostCard key={other.slug} post={other} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={post.category}
        title="Ready for a Spotless Space?"
        text={step.text}
        primary={step.action}
        secondary={{ label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref }}
      />
    </>
  );
}
