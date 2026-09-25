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
    "mt-10 inline-block w-full rounded-[5px] border border-[#666] px-[15px] py-[15px] text-center font-text text-[16px] font-medium text-[#111d15] no-underline hover:bg-brand-alt hover:text-white";

  return (
    <div className="rounded-[15px] bg-white px-[26px] py-[22px] hover:shadow-[0_4px_15px_#0000000d] max-lg:relative max-lg:flex max-lg:flex-col">
      <h3 className={cn("my-0 text-center font-heading text-body", plan.nameClassName)}>
        {plan.name}
      </h3>
      <div className="mt-[18px] rounded-lg bg-brand-alt px-[30px] py-[15px]">
        <p className="mb-0 text-center font-heading text-[25px] leading-7 text-white">
          <Price price={plan.price} />
        </p>
      </div>
      <ul className="mt-7 mb-0 flex flex-col gap-5 pl-5 font-text">
        {plan.features.map((feature, index) => (
          <li key={index}>
            {feature.startsWith("## ") ? (
              <p className="mb-0 text-[22px] font-semibold">{feature.slice(3)}</p>
            ) : (
              <p className="mb-0">{plan.boldFeatures ? <strong>{feature}</strong> : feature}</p>
            )}
          </li>
        ))}
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

/** Red "Our Pricing" band with the plan cards overlapping its bottom edge. */
export function PricingSection({ title, plans, booking }: PricingSectionProps) {
  return (
    <>
      <section id="book" className="overflow-hidden bg-pricing px-5 pt-[70px] pb-[220px]">
        <div className="mx-auto max-w-[960px]">
          <p className="mt-[10px] text-center font-text text-[20px] leading-7 text-mint max-lg:text-[16px]">
            Our Pricing
          </p>
          <h2 className="text-center font-heading text-[48px] leading-[52px] text-white">
            {title}
          </h2>
        </div>
      </section>
      <section className="-mt-[160px] overflow-hidden px-5 pb-[60px]">
        <div className="mx-auto max-w-[960px]">
          <Reveal className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-lg:gap-10 max-md:grid-cols-1">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} booking={booking} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
