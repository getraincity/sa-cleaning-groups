import Image from "next/image";
import Link from "next/link";
import logoSquare from "@/assets/images/brand/logo-square.png";
import { ContactDetails } from "@/components/sections/contact-details";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { locations } from "@/content/locations";
import { bookingLinks, socialLinks } from "@/lib/site";

type FooterLink = { label: string; href: string; external?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Home Cleaning", href: "/home-cleaning" },
      { label: "Car Detailing", href: "/car-detailing" },
      { label: "Custodian Services", href: "/custodian-services" },
    ],
  },
  {
    title: "About us",
    links: [
      { label: "Home Cleaning Pricing", href: "/home-cleaning#book" },
      { label: "Car Detailing Pricing", href: "/car-detailing#book" },
      { label: "About us", href: "/about-us" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Locations",
    links: locations.map((location) => ({
      label: location.name,
      href: `/locations/${location.slug}`,
    })),
  },
  {
    title: "Book now",
    links: [
      { label: "Home Cleaning", href: bookingLinks.homeCleaning },
      { label: "Car Detailing", href: bookingLinks.carDetailing, external: true },
      { label: "Custodian Services", href: "/contact-us" },
    ],
  },
];

const linkClass =
  "mt-3 mb-[6px] font-text text-[16px] leading-4 text-ink no-underline hover:text-ink/75";

const socials = [
  { label: "Instagram", href: socialLinks.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: socialLinks.facebook, Icon: FacebookIcon },
].filter((social) => social.href);

function SocialIcons() {
  if (socials.length === 0) return null;
  return (
    <div className="mt-6 flex gap-3 max-md:justify-center">
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`SA Cleaning Group on ${label}`}
          className="flex size-10 items-center justify-center rounded-full bg-brand-tint text-[20px] text-brand transition-colors hover:bg-brand hover:text-white"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

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
              SA Cleaning Group offers home cleaning, car detailing and custodian services across
              Greater Vancouver.
            </p>
            <ContactDetails />
            <SocialIcons />
          </div>

          <div className="grid grid-cols-[auto_auto_auto_auto] gap-x-[56px] gap-y-10 max-xl:grid-cols-[auto_auto] max-lg:gap-x-[60px] max-md:mt-10 max-md:grid-cols-1">
            {columns.map((column) => (
              <div
                key={column.title}
                className="flex w-[160px] flex-col items-start justify-start max-md:w-full max-md:items-center"
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
