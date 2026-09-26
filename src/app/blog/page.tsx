import { BlogGrid } from "@/components/blog/blog-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { NewspaperIcon } from "@/components/ui/icons";
import { sectionSpacing } from "@/components/ui/section-header";
import { posts } from "@/content/blog";
import { pageMetadata } from "@/lib/metadata";
import { bookingLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Blog: Cleaning & Detailing Tips",
  path: "/blog",
  description:
    "Cleaning checklists, car detailing advice and practical tips for Vancouver homes, vehicles and workplaces, from the S&A Cleaning Group team.",
});

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#f6f4f2] px-5 pt-16 pb-14 max-md:pt-10 max-md:pb-10">
        <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
          <div className="max-w-[720px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pr-4 pl-1.5 font-text text-[14px] text-ink-soft shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              <span className="flex size-6 items-center justify-center rounded-full bg-brand text-white">
                <NewspaperIcon className="size-3.5" />
              </span>
              The S&amp;A Blog
            </span>
            <h1 className="mt-6 mb-0 font-heading text-[46px] leading-[54px] text-ink-soft max-lg:text-[40px] max-lg:leading-[48px] max-sm:text-[32px] max-sm:leading-[40px]">
              Tips, Guides and <span className="text-brand">Spotless Ideas</span>
            </h1>
          </div>
          <p className="mb-1 max-w-[440px] font-text text-[17px] leading-[30px] text-muted max-sm:text-[16px] max-sm:leading-7">
            Practical cleaning checklists, car care advice and seasonal tips for Vancouver homes,
            vehicles and workplaces, from our team to you.
          </p>
        </div>
      </section>

      <section className={cn("px-5 pt-10", sectionSpacing.bottom)}>
        <div className="mx-auto max-w-[1440px]">
          <BlogGrid posts={posts} />
        </div>
      </section>

      <CtaBand
        eyebrow="Rather leave it to us?"
        title="Book a Professional Clean"
        text="Book your home cleaning online in minutes, or book a detail for your car, truck, RV or boat."
        primary={{ label: "Book home cleaning", href: bookingLinks.homeCleaning }}
        secondary={{ label: "Book car detailing", href: bookingLinks.carDetailing, external: true }}
      />
    </>
  );
}
