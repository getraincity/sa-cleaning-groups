"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@/components/ui/icons";

/** Dark strip above the navbar, shown on the home page only. */
export function AnnouncementBar() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <div className="flex min-h-10 items-center justify-center bg-body px-5 py-2">
      <p className="mb-0 text-center font-heading text-[15px] leading-5 text-white max-sm:text-[13px] max-sm:leading-[18px]">
        Akumal Executive Cleaning is now S&amp;A Cleaning Group.{" "}
        <Link
          href="/about-us#our-story"
          className="inline-flex items-center gap-1 whitespace-nowrap text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          Our story
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </p>
    </div>
  );
}
