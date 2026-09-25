import Image from "next/image";
import Link from "next/link";
import logoSquare from "@/assets/images/brand/logo-square.png";
import { ContactDetails } from "@/components/sections/contact-details";
import { bookingLinks } from "@/lib/site";

type FooterLink = { label: string; href: string; external?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Home Cleaning", href: "/home-cleaning" },
      { label: "Car Detailing", href: "/car-detailing" },
      { label: "Snow Removal (coming soon)", href: "/" },
    ],
  },
  {
    title: "About us",
    links: [
      { label: "Home Cleaning Pricing", href: "/home-cleaning#book" },
      { label: "Car Detailing Pricing", href: "/car-detailing#book" },
      { label: "About us", href: "/about-us" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Book now",
    links: [
      { label: "Home Cleaning", href: bookingLinks.homeCleaning },
      { label: "Car Detailing", href: bookingLinks.carDetailing, external: true },
      { label: "Snow Removal", href: "/contact-us" },
    ],
  },
];

const linkClass =
  "mt-3 mb-[6px] font-text text-[16px] leading-4 text-ink no-underline hover:text-ink/75";

export function Footer() {
  return (
    <footer className="relative border-b border-footer-line bg-white px-5 pt-[100px] pb-[15px] max-md:px-[15px]">
      <div className="mx-auto w-full max-w-[1440px] max-lg:max-w-[728px] max-sm:max-w-none">
        <div className="mx-auto flex max-w-[1300px] items-start justify-between pb-10 max-lg:w-full max-lg:max-w-full max-md:flex-col max-md:items-center">
          <div className="w-[300px] max-lg:w-full max-sm:overflow-hidden">
            <Link href="/" className="inline-block max-w-full">
              <Image src={logoSquare} alt="SA Cleaning Group" width={140} />
            </Link>
            <p className="mt-5 font-text text-[16px] leading-6 text-body">
              SA Cleaning Group offers home cleaning and car detailing services in Vancouver.
            </p>
            <ContactDetails />
          </div>

          <div className="grid grid-cols-[auto_auto_1fr] gap-x-[70px] gap-y-10 max-lg:grid-cols-[auto_auto] max-lg:gap-x-[60px] max-md:mt-10 max-md:grid-cols-1">
            {columns.map((column) => (
              <div
                key={column.title}
                className="flex w-[130px] flex-col items-start justify-start max-md:w-full max-md:items-center"
              >
                <div className="mb-3 font-text text-[18px] leading-4 font-bold tracking-[1px] text-footer-title capitalize">
                  {column.title}
                </div>
                {column.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.label} href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[70px] mb-[15px] h-px w-full bg-footer-line max-md:mt-[60px]" />

      <div className="mx-auto flex max-w-[1000px] justify-center max-md:block max-md:pt-4 max-md:text-left">
        <div className="flex gap-[26px]">
          {/* Placeholders until the client supplies these pages. */}
          <a
            href="#"
            className="flex items-center justify-start font-text text-[15px] leading-4 text-ink no-underline hover:text-ink/75"
          >
            Terms and Conditions
          </a>
          <a
            href="#"
            className="flex items-center justify-start font-text text-[15px] leading-4 text-ink no-underline hover:text-ink/75"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
