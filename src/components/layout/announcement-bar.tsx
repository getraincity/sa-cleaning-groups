"use client";

import { usePathname } from "next/navigation";

/** Dark strip above the navbar, shown on the home page only. */
export function AnnouncementBar() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <div className="flex h-10 items-center justify-center bg-body">
      <p className="mb-0 text-center font-heading text-white">
        Looking for Akumal Cleaning? We&apos;ve relocated here!
      </p>
    </div>
  );
}
