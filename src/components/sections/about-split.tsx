import Image from "next/image";
import Link from "next/link";
import itemIcon from "@/assets/images/icons/item.svg";
import livingRoom from "@/assets/images/cleaning-living-room.jpg";

/** "The S&A Way" — photo on the left, intro copy on the right. */
export function AboutSplit() {
  return (
    <div className="mt-[140px] grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-10 max-sm:mt-[60px]">
      <Image
        src={livingRoom}
        alt=""
        sizes="(max-width: 991px) 100vw, 50vw"
        className="h-full w-full rounded-[11px] object-contain max-lg:h-[450px] max-sm:h-full"
      />
      <div className="flex flex-col items-start justify-center">
        <div className="mb-5 flex items-center justify-start gap-3">
          <div className="flex size-9 min-h-9 min-w-9 items-center justify-center rounded-lg bg-brand-tint">
            <Image src={itemIcon} alt="" className="size-5 object-contain" />
          </div>
          <p className="mb-0 font-text text-[18px] text-ink-soft">About us</p>
        </div>
        <h2 className="my-0 font-heading text-[35px] leading-[38px] text-ink-soft">
          The S&amp;A Way
        </h2>
        <p className="mt-5 mb-0 font-text text-[16px] leading-8 text-muted">
          At S&amp;A Cleaning Group, we specialize in eco-friendly home cleaning services that
          prioritize your health and the environment. Using natural, bactericidal disinfectants, we
          effectively remove harmful bacteria and viruses, creating a safe and spotless space for
          you and your family. Our hospital-grade cleaning products eliminate up to 98.9% of
          bacteria, targeting high-touch areas for maximum protection. With our green cleaning
          solutions, we ensure your home feels fresh, sanitized, and free from harsh chemicals.
        </p>
        <Link
          href="/home-cleaning"
          className="mt-6 inline-block rounded-xl border border-brand px-6 py-4 font-text text-[16px] font-medium text-brand no-underline hover:bg-brand hover:text-white max-sm:w-full max-sm:text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
