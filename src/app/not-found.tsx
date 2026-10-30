import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { bookingLinks } from "@/lib/site";

const links = [
  { label: "Home cleaning", href: "/home-cleaning" },
  { label: "Custodian services", href: "/custodian-services" },
  { label: "Service areas", href: "/locations" },
  { label: "Contact us", href: "/contact-us" },
];

export default function NotFound() {
  return (
    <section className="bg-[#f6f4f2] px-5 py-24 max-md:py-16">
      <div className="mx-auto max-w-[680px] text-center">
        <p className="mb-3 font-text text-[14px] font-semibold tracking-[0.2em] text-brand uppercase">
          Page not found
        </p>
        <h1 className="mt-0 mb-4 font-heading text-[40px] leading-[48px] text-ink-soft max-sm:text-[32px] max-sm:leading-[40px]">
          This page has moved or no longer exists
        </h1>
        <p className="mb-8 font-text text-[17px] leading-[30px] text-muted">
          Here are a few good places to start instead.
        </p>
        <ul className="mb-8 flex list-none flex-wrap justify-center gap-2 pl-0">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 font-text text-[14px] text-ink-soft no-underline transition-colors hover:border-brand hover:text-brand"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={bookingLinks.homeCleaning}
          className="group/cta inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-[14px] font-text text-[16px] font-medium text-white no-underline transition-colors hover:bg-brand-alt"
        >
          Book home cleaning
          <ArrowRightIcon className="size-[18px] transition-transform group-hover/cta:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
