import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export type CtaAction = { label: string; href: string; external?: boolean };

type CtaBandProps = {
  eyebrow?: string;
  title: ReactNode;
  text: ReactNode;
  primary: CtaAction;
  secondary?: CtaAction;
};

function ActionLink({ action, variant }: { action: CtaAction; variant: "primary" | "secondary" }) {
  const className = cn(
    "group/cta inline-flex items-center justify-center gap-2 rounded-xl px-6 py-[14px] text-center font-text text-[16px] font-medium no-underline transition-colors max-sm:w-full",
    variant === "primary"
      ? "bg-brand text-white hover:bg-brand-alt"
      : "bg-white text-charcoal hover:bg-white/90",
  );
  const content = (
    <>
      {action.label}
      {variant === "primary" && (
        <ArrowRightIcon className="size-[18px] transition-transform group-hover/cta:translate-x-1" />
      )}
    </>
  );
  if (action.external) {
    return (
      <a href={action.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }
  // tel: and mailto: links aren't pages, so they skip the client-side router.
  if (!action.href.startsWith("/")) {
    return (
      <a href={action.href} className={className}>
        {content}
      </a>
    );
  }
  return (
    <Link href={action.href} className={className}>
      {content}
    </Link>
  );
}

/** Dark call-to-action band above the footer, in the style of the booking band. */
export function CtaBand({
  eyebrow = "Get started",
  title,
  text,
  primary,
  secondary,
}: CtaBandProps) {
  return (
    <section className="bg-cta px-5">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-10 py-[72px] max-lg:flex-col max-lg:items-start max-md:py-14">
        <div className="max-w-[620px]">
          <p className="mb-3 font-text text-[15px] text-white/70">{eyebrow}</p>
          <h2 className="my-0 font-heading text-[34px] leading-10 text-white max-md:text-[28px] max-md:leading-[34px]">
            {title}
          </h2>
          <p className="mt-3 mb-0 font-text text-[16px] leading-7 text-white/80">{text}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3 max-sm:w-full max-sm:flex-col">
          <ActionLink action={primary} variant="primary" />
          {secondary && <ActionLink action={secondary} variant="secondary" />}
        </div>
      </div>
    </section>
  );
}
