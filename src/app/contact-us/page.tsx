import Link from "next/link";
import { Suspense } from "react";
import { AreaMap } from "@/components/locations/area-map";
import { ContactForm, ContactFormFromUrl } from "@/components/sections/contact-form";
import { FaqSection, type Faq } from "@/components/sections/faq-section";
import {
  ArrowRightIcon,
  BuildingIcon,
  CarIcon,
  FacebookIcon,
  HomeIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  MessageIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { locations } from "@/content/locations";
import { pageMetadata } from "@/lib/metadata";
import { bookingLinks, siteConfig, socialLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Contact Us",
  path: "/contact-us",
  description:
    "Get in touch with SA Cleaning Group for home cleaning, car detailing, custodian services and gift cards across Greater Vancouver.",
});

const channels = [
  {
    Icon: PhoneIcon,
    label: "Call us",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    Icon: MailIcon,
    label: "Email us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    Icon: MapPinIcon,
    label: "Service area",
    value: "Greater Vancouver",
    href: "/locations",
  },
];

const socials = [
  { label: "Instagram", href: socialLinks.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: socialLinks.facebook, Icon: FacebookIcon },
].filter((social) => social.href);

const shortcuts = [
  {
    Icon: HomeIcon,
    title: "Book home cleaning",
    text: "Pick your plan and time online in minutes.",
    href: bookingLinks.homeCleaning,
    external: false,
  },
  {
    Icon: CarIcon,
    title: "Book car detailing",
    text: "Choose a package on our detailing booking site.",
    href: bookingLinks.carDetailing,
    external: true,
  },
  {
    Icon: BuildingIcon,
    title: "Request a custodial quote",
    text: "Tell us about your workplace or building.",
    href: "/contact-us?topic=custodian#message",
    external: false,
  },
];

const faqs: Faq[] = [
  {
    question: "How do I book a cleaning?",
    answer:
      "The quickest way is online: booking a home cleaning takes just a few minutes, and car detailing is booked through our detailing site. You can also call us or send a message using the form on this page.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Downtown, North, East, West and South Vancouver. If you're nearby and not sure whether we cover your area, send us a message and we'll let you know.",
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Yes. Choose \"Gift card\" in the form above, tell us who it's for, and we'll help you pick a home cleaning or car detailing package.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. We're fully licensed, insured and carry a valid garage policy, and every member of our team completes a criminal and background check before employment.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Contact options beside the form, both above the fold. */}
      <section className="bg-[#f6f4f2] px-5 pt-16 pb-[96px] max-md:pt-10 max-md:pb-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[5fr_7fr] items-start gap-14 max-lg:grid-cols-1 max-lg:gap-10">
          <div className="lg:sticky lg:top-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pr-4 pl-1.5 font-text text-[14px] text-ink-soft shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              <span className="flex size-6 items-center justify-center rounded-full bg-brand text-white">
                <MessageIcon className="size-3.5" />
              </span>
              Contact us
            </span>
            <h1 className="mt-6 mb-0 font-heading text-[46px] leading-[54px] text-ink-soft max-lg:text-[40px] max-lg:leading-[48px] max-sm:text-[32px] max-sm:leading-[40px]">
              Let&apos;s Make Your Space <span className="text-brand">Spotless</span>
            </h1>
            <p className="mt-5 mb-0 max-w-[480px] font-text text-[17px] leading-[30px] text-muted max-sm:text-[16px] max-sm:leading-7">
              Questions, quotes or gift cards: send us a message, give us a call, or book online in
              minutes. We&apos;re here to help.
            </p>

            <ul className="mt-9 mb-0 grid list-none gap-3 pl-0">
              {channels.map(({ Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex size-12 min-w-12 items-center justify-center rounded-xl bg-brand-tint text-[22px] text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-text text-[13px] text-muted">{label}</span>
                      <span className="block truncate font-heading text-[18px] leading-6 font-bold text-ink-soft">
                        {value}
                      </span>
                    </span>
                    <ArrowRightIcon className="ml-auto size-5 min-w-5 text-brand opacity-0 transition-opacity group-hover:opacity-100" />
                  </>
                );
                const className =
                  "group flex items-center gap-4 rounded-2xl bg-white p-4 no-underline shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.25)]";
                return (
                  <li key={label}>
                    {href.startsWith("/") ? (
                      <Link href={href} className={className}>
                        {content}
                      </Link>
                    ) : (
                      <a href={href} className={className}>
                        {content}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            {socials.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                <span className="font-text text-[13px] text-muted">Follow us</span>
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`SA Cleaning Group on ${label}`}
                    className="flex size-10 items-center justify-center rounded-full bg-white text-[20px] text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div
            id="message"
            className="scroll-mt-8 rounded-3xl bg-white p-10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] max-sm:p-6"
          >
            <h2 className="mt-0 mb-2 font-heading text-[26px] leading-8 text-ink-soft">
              Send us a message
            </h2>
            <p className="mb-7 font-text text-[15px] leading-6 text-muted">
              Share a few details and we&apos;ll get back to you as soon as possible.
            </p>
            {/* The topic comes from the URL, which static pages only know in the browser. */}
            <Suspense fallback={<ContactForm />}>
              <ContactFormFromUrl />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Book online instead. */}
      <section className={cn("px-5", sectionSpacing.top)}>
        <div className="mx-auto max-w-[1440px]">
          <SectionHeader
            align="center"
            eyebrow={{ icon: <ArrowRightIcon />, label: "Skip the wait" }}
            title="Prefer to Book Online?"
            description="Most bookings take just a few minutes. Pick where you'd like to start."
          />
          <div className="mt-10 grid grid-cols-3 gap-4 max-lg:grid-cols-1">
            {shortcuts.map(({ Icon, title, text, href, external }) => {
              const className =
                "group flex items-center gap-5 rounded-[20px] border border-black/[0.08] p-6 no-underline transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]";
              const content = (
                <>
                  <span className="flex size-14 min-w-14 items-center justify-center rounded-2xl bg-brand text-[26px] text-white">
                    <Icon />
                  </span>
                  <span>
                    <span className="block font-heading text-[18px] leading-6 font-bold text-ink-soft">
                      {title}
                    </span>
                    <span className="mt-1 block font-text text-[14px] leading-[22px] text-muted">
                      {text}
                    </span>
                  </span>
                  <ArrowRightIcon className="ml-auto size-5 min-w-5 text-brand transition-transform group-hover:translate-x-1" />
                </>
              );
              return external ? (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <Link key={title} href={href} className={className}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Where we work. */}
      <section className={cn("px-5", sectionSpacing.top)}>
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHeader
              eyebrow={{ icon: <MapPinIcon />, label: "Where we work" }}
              title="Serving Homes and Businesses Across Greater Vancouver"
              description="Our team travels to you, from downtown condos to North Shore family homes."
            />
            <ul className="mt-7 mb-0 flex list-none flex-wrap gap-2 pl-0">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 font-text text-[14px] text-ink-soft no-underline transition-colors hover:border-brand hover:text-brand"
                  >
                    <MapPinIcon className="size-4 text-brand" />
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <AreaMap />
        </div>
      </section>

      <FaqSection items={faqs} description="Quick answers to the questions we hear most." />
    </>
  );
}
