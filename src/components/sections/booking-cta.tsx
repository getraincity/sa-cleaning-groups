import Link from "next/link";
import { bookingLinks } from "@/lib/site";

const buttonClass =
  "mt-10 inline-block rounded-xl px-6 py-4 text-center font-text text-[16px] font-medium no-underline max-md:w-[250px] max-sm:mx-auto";

/** Dark "Book Your Cleaning Online" band shown above the footer. */
export function BookingCta() {
  return (
    <section className="bg-cta px-5">
      <div className="mx-auto max-w-[1440px] py-20 pl-[250px] max-lg:pl-0 max-md:flex max-md:flex-col">
        <p className="font-text text-[18px] text-white">Contact us</p>
        <h2 className="font-heading text-[40px] leading-[44px] text-white">
          Book Your Cleaning Online
        </h2>
        <p className="w-[500px] font-text text-[16px] leading-6 font-normal text-white max-md:w-full">
          Book your cleaning directly online in minutes! Click below to book your home cleaning or
          car detailing service and if you have any questions, contact us today!
        </p>
        <Link href={bookingLinks.homeCleaning} className={`${buttonClass} bg-brand text-white`}>
          Book Home Cleaning
        </Link>
        <a
          href={bookingLinks.carDetailing}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} ml-[22px] bg-white text-charcoal max-md:ml-0`}
        >
          Book Car Detailing
        </a>
      </div>
    </section>
  );
}
