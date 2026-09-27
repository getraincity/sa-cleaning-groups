import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export type PlanPrice =
  | { type: "monthly"; amount: number }
  | { type: "range"; from: number; to: number; plainCurrency?: boolean };

export type PricingPlan = {
  name: string;
  /** Tailwind text color for the plan name, e.g. the Silver/Gold/Diamond tints. */
  nameClassName?: string;
  price: PlanPrice;
  /** Feature rows. Lines starting with "## " render as a group heading. */
  features: string[];
  /** Render every feature row in bold (the car detailing cards do this). */
  boldFeatures?: boolean;
};

type PricingSectionProps = {
  title: ReactNode;
  plans: PricingPlan[];
  booking: { href: string; external?: boolean };
};

function Price({ price }: { price: PlanPrice }) {
  if (price.type === "monthly") {
    return (
      <>
        <span className="text-[16px]">$ </span>
        <strong>{`${price.amount}/`}</strong>
        <span className="text-[16px]"> Month</span>
      </>
    );
  }
  return (
    <>
      <span className="text-[16px]">{price.plainCurrency ? "$ " : <strong>$ </strong>}</span>
      <strong>{`${price.from}-`}</strong>
      <span className="text-[16px]">
        <strong>$</strong>
      </span>
      <strong>{price.to}</strong>
    </>
  );
}

function PlanCard({
  plan,
  booking,
}: {
  plan: PricingPlan;
  booking: PricingSectionProps["booking"];
}) {
  const bookClass =
    "mt-auto inline-flex w-full items-center justify-center rounded-xl border border-brand px-[15px] py-[14px] text-center font-text text-[16px] font-medium text-brand no-underline transition-colors hover:bg-brand hover:text-white";

  return (
    <div className="flex h-full flex-col rounded-[20px] border border-black/[0.07] bg-white p-7 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.35)] transition-shadow hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.35)] max-sm:p-6">
      {/* Fixed-height header, so prices line up even when a plan name wraps. */}
      <div className="flex min-h-[64px] items-center justify-center">
        <h3
          className={cn(
            "my-0 text-center font-heading text-[22px] leading-7 text-ink-soft",
            plan.nameClassName,
          )}
        >
          {plan.name}
        </h3>
      </div>
      <div className="mt-4 rounded-xl bg-brand px-5 py-4">
        <p className="mb-0 text-center font-heading text-[26px] leading-8 text-white">
          <Price price={plan.price} />
        </p>
      </div>
      <ul className="mt-7 mb-8 flex list-none flex-col gap-3 pl-0 font-text text-[14px] leading-[22px] text-body">
        {plan.features.map((feature, index) =>
          feature.startsWith("## ") ? (
            <li key={index} className="mt-3 first:mt-0">
              <p className="mb-0 font-heading text-[17px] font-semibold text-ink-soft">
                {feature.slice(3)}
              </p>
            </li>
          ) : (
            <li key={index} className="flex gap-2.5">
              <span className="mt-[7px] size-2 min-w-2 rounded-full bg-brand" aria-hidden />
              <p className="mb-0">{plan.boldFeatures ? <strong>{feature}</strong> : feature}</p>
            </li>
          ),
        )}
      </ul>
      {booking.external ? (
        <a href={booking.href} target="_blank" rel="noopener noreferrer" className={bookClass}>
          Book Now
        </a>
      ) : (
        <Link href={booking.href} className={bookClass}>
          Book Now
        </Link>
      )}
    </div>
  );
}

/** "Our Pricing": a pale accent-tinted band with the plan cards in one aligned row. */
export function PricingSection({ title, plans, booking }: PricingSectionProps) {
  return (
    <section id="book" className="bg-brand-wash px-5 py-[90px] max-md:py-16">
      <div className="mx-auto max-w-[1100px]">
        <p className="mx-auto mb-0 w-fit rounded-full bg-brand-tint px-4 py-1.5 text-center font-text text-[14px] font-semibold text-brand">
          Our Pricing
        </p>
        <h2 className="mt-5 mb-0 text-center font-heading text-[44px] leading-[52px] text-ink-soft max-lg:text-[36px] max-lg:leading-[44px] max-sm:text-[30px] max-sm:leading-[38px]">
          {title}
        </h2>
        <Reveal className="mt-12 grid grid-cols-3 items-stretch gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} booking={booking} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
