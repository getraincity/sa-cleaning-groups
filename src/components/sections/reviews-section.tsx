import Script from "next/script";
import { embeds } from "@/lib/site";
import { cn } from "@/lib/utils";

type ReviewsSectionProps = {
  /** Elfsight widget ID (each page embeds its own Google Reviews widget). */
  widgetId: string;
  /** Show the "Building Trust And Satisfaction" heading above the widget. */
  withHeading?: boolean;
};

export function ReviewsSection({ widgetId, withHeading = true }: ReviewsSectionProps) {
  return (
    <section
      className={cn(
        "overflow-hidden px-5",
        withHeading ? "pt-[100px] pb-7 max-md:pt-[60px]" : "pt-[60px] pb-[100px]",
      )}
    >
      <div className="mx-auto max-w-[1440px]">
        {withHeading && (
          <>
            <h2 className="text-center font-heading text-[40px] text-body">
              Building Trust And Satisfaction
            </h2>
            <p className="mt-5 text-center font-text text-[20px] leading-6 font-bold text-black">
              5-star reviews from customers just like you
            </p>
          </>
        )}
        <Script src={embeds.elfsightScript} strategy="lazyOnload" />
        <div className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy />
      </div>
    </section>
  );
}
