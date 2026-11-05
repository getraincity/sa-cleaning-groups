import Link from "next/link";
import type { ReactNode } from "react";
import { AreasStrip } from "@/components/locations/areas-strip";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { PhotoFeatures } from "@/components/sections/photo-feature";
import { ProcessSteps } from "@/components/sections/process-steps";
import { JsonLd } from "@/components/seo/json-ld";
import {
  ArrowRightIcon,
  BoxIcon,
  BuildingIcon,
  CalendarIcon,
  CheckIcon,
  ClipboardCheckIcon,
  ClockIcon,
  HardHatIcon,
  HistoryIcon,
  HomeIcon,
  KeyIcon,
  LeafIcon,
  LuggageIcon,
  NewspaperIcon,
  PaintRollerIcon,
  PhoneIcon,
  RepeatIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StoreIcon,
  UserCheckIcon,
  UsersIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { getPost } from "@/content/blog";
import { serviceLinks, type IconName, type ServicePageData } from "@/content/services";
import { bookingLinks, siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { cn } from "@/lib/utils";

const icons: Record<IconName, () => ReactNode> = {
  home: () => <HomeIcon />,
  building: () => <BuildingIcon />,
  key: () => <KeyIcon />,
  calendar: () => <CalendarIcon />,
  box: () => <BoxIcon />,
  hardhat: () => <HardHatIcon />,
  luggage: () => <LuggageIcon />,
  repeat: () => <RepeatIcon />,
  users: () => <UsersIcon />,
  store: () => <StoreIcon />,
  sparkles: () => <SparklesIcon />,
  clock: () => <ClockIcon />,
  clipboard: () => <ClipboardCheckIcon />,
  brush: () => <PaintRollerIcon />,
};

const quoteHref = "/contact-us?topic=custodian#message";

const buttonClass =
  "group/cta inline-flex items-center justify-center gap-2 rounded-xl px-6 py-[14px] text-center font-text text-[16px] font-medium no-underline transition-colors max-sm:w-full";

/** One of the six SEO service pages (deep, move-out, Airbnb, post-construction, office, strata). */
export function ServicePage({ data }: { data: ServicePageData }) {
  const commercial = data.theme === "custodian";
  const primaryHref = commercial ? quoteHref : bookingLinks.homeCleaning;
  const trust = [
    { Icon: ShieldCheckIcon, title: "Licensed and insured", text: "Fully licensed and insured." },
    {
      Icon: UserCheckIcon,
      title: "Background-checked",
      text: "Every team member completes a criminal and background check before employment.",
    },
    {
      Icon: LeafIcon,
      title: commercial ? "Healthier products" : "Eco-friendly products",
      text: commercial
        ? "Hospital-grade, eco-friendly disinfectants, tough on germs, not on people."
        : "Eco-friendly, pet-friendly products with minimal use of chemicals.",
    },
    {
      Icon: HistoryIcon,
      title: "9+ years in business",
      text: "Formerly Akumal Executive Cleaning, now S&A Cleaning Group.",
    },
  ];
  const related = data.relatedPaths.flatMap((path) => {
    const link = serviceLinks[path];
    return link ? [{ path, ...link }] : [];
  });
  const posts = data.relatedPosts.flatMap((slug) => {
    const post = getPost(slug);
    return post ? [post] : [];
  });

  return (
    <div className={commercial ? "theme-custodian" : "theme-home"}>
      <JsonLd data={breadcrumbJsonLd([{ name: data.breadcrumbName, path: data.path }])} />
      <JsonLd data={serviceJsonLd({ path: data.path, ...data.schema })} />

      <PageHero
        image={data.hero.image}
        imageClassName={data.hero.imageClassName}
        className="py-[200px] max-md:py-[100px]"
        tagline={data.hero.tagline}
        title={
          <>
            {data.hero.title[0]}
            <br />
            {data.hero.title[1]}
          </>
        }
        description={data.hero.description}
      />

      {/* The direct answer, then the reasons to choose S&A. */}
      <section className={cn("px-5", sectionSpacing.y)}>
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHeader
              eyebrow={{
                icon: icons[commercial ? "building" : "sparkles"](),
                label: data.intro.eyebrow,
              }}
              title={data.intro.title}
              description={data.intro.answer}
            />
            <ul className="mt-7 mb-0 grid list-none gap-3 pl-0">
              {data.intro.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-3 font-text text-[15px] text-ink-soft"
                >
                  <span className="flex size-6 min-w-6 items-center justify-center rounded-md bg-brand-tint text-[14px] text-brand">
                    <CheckIcon />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3 max-sm:flex-col">
              <Link
                href={primaryHref}
                className={cn(buttonClass, "bg-brand text-white hover:bg-brand-alt")}
              >
                {data.cta.primaryLabel}
                <ArrowRightIcon className="size-[18px] transition-transform group-hover/cta:translate-x-1" />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className={cn(
                  buttonClass,
                  "border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white",
                )}
              >
                <PhoneIcon className="size-[18px]" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <Reveal className="relative overflow-hidden rounded-3xl bg-[#1c1c1e] p-10 max-sm:p-7">
            <div className="pointer-events-none absolute -top-24 -right-24 size-[320px] rounded-full bg-brand/40 blur-[110px]" />
            <p className="relative mb-6 font-text text-[12px] font-semibold tracking-[0.2em] text-white/60 uppercase">
              Why choose S&amp;A
            </p>
            <ul className="relative mb-0 grid list-none gap-6 pl-0">
              {trust.map(({ Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex size-11 min-w-11 items-center justify-center rounded-xl bg-white/10 text-[22px] text-white">
                    <Icon />
                  </span>
                  <div>
                    <p className="mb-1 font-heading text-[17px] leading-6 font-bold text-white">
                      {title}
                    </p>
                    <p className="mb-0 font-text text-[14px] leading-[22px] text-white/65">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <PhotoFeatures
        className="pt-0"
        rows={data.photoRows.map((row) => ({
          eyebrow: { icon: icons[row.icon](), label: row.eyebrow },
          title: row.title,
          text: row.text,
          points: row.points,
          image: row.image,
          alt: row.image.alt,
        }))}
      />

      {/* Who it's for. */}
      <section className={cn("bg-[#f7f5f4] px-5", sectionSpacing.y)}>
        <div className="mx-auto max-w-[1440px]">
          <SectionHeader
            align="center"
            eyebrow={{ icon: icons.users(), label: "Who it's for" }}
            title={data.audience.title}
            description={data.audience.description}
          />
          <div className="mt-12 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {data.audience.items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 4) * 100}
                className="group rounded-[20px] bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-tint text-[24px] text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  {icons[item.icon]()}
                </span>
                <h3 className="mt-5 mb-2 font-heading text-[19px] leading-[26px] text-ink-soft">
                  {item.title}
                </h3>
                <p className="mb-0 font-text text-[14px] leading-[22px] text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included. */}
      <section className={cn("px-5", sectionSpacing.y)}>
        <div className="mx-auto max-w-[1440px]">
          <SectionHeader
            align="center"
            eyebrow={{ icon: icons.sparkles(), label: "What's included" }}
            title={data.scope.title}
            description={data.scope.description}
          />
          <div className="mt-12 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {data.scope.groups.map((group) => (
              <div key={group.title} className="rounded-[20px] border border-black/[0.08] p-6">
                <h3 className="mt-0 mb-4 border-b border-brand-line pb-4 font-heading text-[18px] leading-6 text-ink-soft">
                  {group.title}
                </h3>
                <ul className="mb-0 grid list-none gap-3 pl-0">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 font-text text-[14px] leading-5 text-body"
                    >
                      <CheckIcon className="mt-0.5 size-4 min-w-4 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps title={`How ${data.breadcrumbName} Works`} steps={data.steps} />

      {/* Price information: only the hourly rate the site already shows, or a quote. */}
      <section className={cn("px-5", sectionSpacing.y)}>
        <div className="mx-auto grid max-w-[1240px] grid-cols-[3fr_2fr] items-center gap-12 max-lg:grid-cols-1">
          <div>
            <SectionHeader
              eyebrow={{ icon: icons.clock(), label: "Pricing" }}
              title={data.pricing.title}
              description={data.pricing.text}
            />
            <p className="mt-4 mb-0 font-text text-[15px] leading-6 text-muted">
              {data.pricing.note}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 max-sm:flex-col">
              <Link
                href={primaryHref}
                className={cn(buttonClass, "bg-brand text-white hover:bg-brand-alt")}
              >
                {data.cta.primaryLabel}
                <ArrowRightIcon className="size-[18px] transition-transform group-hover/cta:translate-x-1" />
              </Link>
              {!commercial && (
                <Link
                  href="/home-cleaning"
                  className={cn(
                    buttonClass,
                    "border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white",
                  )}
                >
                  See home cleaning plans
                </Link>
              )}
            </div>
          </div>
          <Reveal className="rounded-3xl bg-brand-wash p-9 max-sm:p-7">
            {data.pricing.kind === "hourly" ? (
              <p className="mb-0 font-text text-ink-soft">
                <span className="block text-[12px] font-semibold tracking-[0.15em] text-muted uppercase">
                  Hourly cleaning from
                </span>
                <span className="font-heading text-[56px] leading-[60px] font-bold text-brand">
                  $130+
                </span>
                <span className="mt-1 block text-[15px] text-muted">3-hour minimum</span>
              </p>
            ) : (
              <p className="mb-0 font-text text-ink-soft">
                <span className="block text-[12px] font-semibold tracking-[0.15em] text-muted uppercase">
                  Priced by
                </span>
                <span className="mt-2 block font-heading text-[24px] leading-8 font-bold">
                  Size, frequency and what you want included
                </span>
                <span className="mt-2 block text-[15px] text-muted">Request a quote to start.</span>
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Related pages and posts, for internal links. */}
      <section className={cn("bg-[#f7f5f4] px-5", sectionSpacing.y)}>
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            align="center"
            eyebrow={{ icon: icons.clipboard(), label: "Related" }}
            title="More From S&A"
            description="Other services, and guides that go with this one."
          />
          <div className="mt-12 grid grid-cols-3 gap-4 max-lg:grid-cols-1">
            {related.map((link, index) => (
              <Reveal key={link.path} delay={index * 100}>
                <Link
                  href={link.path}
                  className="group flex h-full flex-col rounded-[20px] bg-white p-7 no-underline shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
                >
                  <span className="font-heading text-[19px] leading-[26px] font-bold text-ink-soft">
                    {link.name}
                  </span>
                  <span className="mt-2 font-text text-[14px] leading-[22px] text-muted">
                    {link.blurb}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-text text-[14px] font-semibold text-brand">
                    Learn more
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          {posts.length > 0 && (
            <ul className="mt-8 mb-0 grid list-none gap-3 pl-0">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-white px-6 py-4 font-text text-[15px] font-semibold text-ink-soft no-underline transition-colors hover:border-brand/30"
                  >
                    <span className="flex size-8 min-w-8 items-center justify-center rounded-full bg-brand-tint text-[16px] text-brand">
                      <NewspaperIcon />
                    </span>
                    {post.title}
                    <ArrowRightIcon className="ml-auto size-4 min-w-4 text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <AreasStrip service={data.schema.serviceType.toLowerCase()} />

      <FaqSection
        items={data.faqs}
        className="bg-[#f7f5f4]"
        description={`Everything you need to know about ${data.schema.serviceType.toLowerCase()} with S&A in Vancouver, BC.`}
      />

      <CtaBand
        eyebrow={commercial ? "Request a quote" : "Get started"}
        title={data.cta.title}
        text={data.cta.text}
        primary={{ label: data.cta.primaryLabel, href: primaryHref }}
        secondary={{ label: siteConfig.phone, href: siteConfig.phoneHref }}
      />
    </div>
  );
}
