import Image from "next/image";
import cleaningWindowView from "@/assets/images/cleaning-window-view.jpg";
import cleaningWindows from "@/assets/images/cleaning-windows.jpg";
import kitchenIsland from "@/assets/images/kitchen-island.jpg";
import { AboutSplit } from "@/components/sections/about-split";
import { BookingCta } from "@/components/sections/booking-cta";
import { PageHero } from "@/components/sections/page-hero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "About Us", path: "/about-us" });

const headingClass = "my-0 font-heading text-[35px] leading-[38px] text-ink-soft";
const underlineClass = "mt-5 h-[6px] w-[200px] rounded-lg bg-brand-line";
const bodyClass = "mt-5 mb-0 font-text text-[16px] leading-8 text-muted";
const textColumnClass = "flex flex-col items-start justify-center px-5 max-lg:mt-5 max-md:px-0";

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={kitchenIsland}
        tagline="We value your time as much as you do."
        title="About US"
        description={
          <>
            Spending too much time cleaning your home? Start getting your time back with <br />
            S&amp;A Cleaning Group! Book your service today, in seconds.
          </>
        }
      />

      <section className="px-5">
        <div className="mx-auto max-w-[1440px]">
          <AboutSplit />
          <div className="mt-9 h-px min-h-px w-full bg-brand-line" />
        </div>
      </section>

      <section className="px-5 pt-[140px] max-sm:pt-[60px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 max-lg:grid-cols-1">
            <div className={textColumnClass}>
              <h2 className={headingClass}>
                <strong>Cleaning Products</strong>
              </h2>
              <div className={underlineClass} />
              <p className={bodyClass}>
                Our natural, eco-friendly disinfectants are designed for versatile applications,
                combining powerful germicidal ingredients to clean, disinfect, and deodorize
                surfaces with a fresh scent. These hospital-grade solutions effectively target
                bacteria and viruses, such as E. coli, HIV-1, Influenza, human Coronavirus, and
                more, ensuring thorough protection for high-contact areas. Trust our disinfectants
                to create a safer, healthier environment with every use
              </p>
            </div>
            <Image
              src={cleaningWindows}
              alt="Home cleaning"
              sizes="(max-width: 991px) 100vw, 50vw"
              className="rounded-[5px] max-lg:mt-5"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-[140px] max-sm:py-[60px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 max-lg:grid-cols-1">
            <Image
              src={cleaningWindowView}
              alt="Hand Picked Professionals"
              sizes="(max-width: 991px) 75vw, 37vw"
              className="max-w-3/4 rounded-[5px]"
            />
            <div className={textColumnClass}>
              <h2 className={headingClass}>
                <strong>Cleaning Equipment</strong>
              </h2>
              <div className={underlineClass} />
              <p className={bodyClass}>
                At S&amp;A Cleaning Group, we use top-quality cleaning tools and products to ensure
                exceptional results every time. Our eco-friendly solutions are paired with advanced
                equipment, including premium microfiber cloths that effectively trap dirt, dust, and
                bacteria without spreading them. By combining industry-leading cleaning products
                with meticulous techniques, we deliver a deeper, healthier clean for your home or
                business. Trust us to provide a spotless, sanitized space with every service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingCta />
    </>
  );
}
