import Script from "next/script";
import { pageMetadata } from "@/lib/metadata";
import { embeds } from "@/lib/site";

export const metadata = pageMetadata({ title: "Book Home Cleaning", path: "/book-home-cleaning" });

export default function BookHomeCleaningPage() {
  return (
    <section className="flex items-start justify-between pt-[100px]">
      {/* The Webflow version fixed this at 1200px wide, which made the page
          scroll sideways on phones; it now shrinks to fit. */}
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Launch27 booking widget; its script resizes the iframe to fit. */}
        <Script src={embeds.launch27Script} strategy="afterInteractive" />
        <iframe
          id="booking-widget-iframe"
          title="Book home cleaning"
          src={embeds.launch27Widget}
          scrolling="no"
          className="inline min-h-[2739px] w-full overflow-hidden border-none align-baseline"
        />
      </div>
    </section>
  );
}
