import Image from "next/image";
import Link from "next/link";
import itemIcon from "@/assets/images/icons/item.svg";
import livingRoom from "@/assets/images/cleaning-living-room.jpg";
import { sectionSpacing } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

/** "The S&A Way": the home page's about section, photo on the left, intro copy on the right. */
export function AboutSplit() {
  return (
    <section className={cn("px-5", sectionSpacing.y)}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 items-center gap-20 max-lg:grid-cols-1 max-lg:gap-10">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
          <Image
            src={livingRoom}
            alt="An S&A cleaner vacuuming a bright living room with floor-to-ceiling windows"
            fill
            sizes="(max-width: 991px) 100vw, 50vw"
            className="object-cover photo-calm"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="mb-5 flex items-center justify-start gap-3">
            <div className="flex size-9 min-h-9 min-w-9 items-center justify-center rounded-lg bg-brand-tint">
              <Image src={itemIcon} alt="" className="size-5 object-contain" />
            </div>
            <p className="mb-0 font-text text-[18px] text-ink-soft">About us</p>
          </div>
          <h2 className="my-0 font-heading text-[36px] leading-[42px] text-ink-soft max-md:text-[30px] max-md:leading-[36px]">
            The S&amp;A Way
          </h2>
          <p className="mt-5 mb-0 font-text text-[16px] leading-8 text-muted">
            At S&amp;A Cleaning Group, we specialize in eco-friendly home cleaning services that
            prioritize your health and the environment. Using natural, bactericidal disinfectants,
            we effectively remove harmful bacteria and viruses, creating a safe and spotless space
            for you and your family. Our hospital-grade cleaning products eliminate up to 98.9% of
            bacteria, targeting high-touch areas for maximum protection. With our green cleaning
            solutions, we ensure your home feels fresh, sanitized, and free from harsh chemicals.
          </p>
          <Link
            href="/about-us"
            className="mt-6 inline-block rounded-xl border border-brand px-6 py-4 font-text text-[16px] font-medium text-brand no-underline transition-colors hover:bg-brand hover:text-white max-sm:w-full max-sm:text-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
