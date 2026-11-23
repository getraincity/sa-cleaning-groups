import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/** "Come see spaces we've worked on": the way into /our-work, under each photo gallery. */
export function OurWorkLink({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center", className)}>
      <Link
        href="/our-work"
        className="group/work inline-flex min-h-[48px] items-center gap-2 rounded-full border border-brand px-6 font-text text-[15px] leading-5 font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
      >
        Come see spaces we’ve worked on
        <ArrowRightIcon className="size-[18px] transition-transform group-hover/work:translate-x-1" />
      </Link>
    </div>
  );
}
