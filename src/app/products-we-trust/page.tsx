import Link from "next/link";
import kitchenAppliances from "@/assets/images/kitchen-appliances.jpg";
import { BookingCta } from "@/components/sections/booking-cta";
import { PageHero } from "@/components/sections/page-hero";
import {
  ArrowRightIcon,
  CarIcon,
  HeartIcon,
  HomeIcon,
  LeafIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { productCategories, type ProductCategory } from "@/content/products";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Products We Trust",
  path: "/products-we-trust",
  description:
    "The eco-friendly cleaning products, detailing supplies and equipment S&A Cleaning Group uses in Vancouver homes, cars and workplaces.",
});

// Each category takes the colour scheme of the service it belongs to.
const themeFor: Record<ProductCategory["service"], string> = {
  home: "theme-home",
  car: "theme-car",
  all: "theme-custodian",
};
const iconFor = { home: HomeIcon, car: CarIcon, all: SparklesIcon } as const;

const values = [
  {
    Icon: LeafIcon,
    title: "Eco-friendly",
    text: "Natural, low-chemical products chosen to protect our planet.",
  },
  {
    Icon: HeartIcon,
    title: "Pet-friendly",
    text: "Safe around your furry family members and your kids.",
  },
  {
    Icon: ShieldCheckIcon,
    title: "Hospital-grade",
    text: "Disinfectants that target germs on high-contact surfaces.",
  },
];

function initials(name: string) {
  return name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function ProductsWeTrustPage() {
  return (
    <>
      <PageHero
        image={kitchenAppliances}
        tagline="Good results start with good products."
        title="Products We Trust"
        description="The brands and tools our team relies on in homes, cars and workplaces across Vancouver."
      />

      {/* Values. */}
      <section className={cn("px-5", sectionSpacing.y)}>
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            align="center"
            eyebrow={{ icon: <LeafIcon />, label: "What we look for" }}
            title="Brands We Love"
            description="Every product we bring into your home or vehicle is chosen with care: effective on dirt, gentle on people, pets and the planet."
          />
          <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
            {values.map(({ Icon, title, text }, index) => (
              <Reveal
                key={title}
                delay={index * 100}
                className="flex gap-4 rounded-[20px] bg-[#f7f5f4] p-6"
              >
                <span className="flex size-12 min-w-12 items-center justify-center rounded-xl bg-brand-tint text-[24px] text-brand">
                  <Icon />
                </span>
                <span>
                  <strong className="block font-heading text-[18px] leading-6 text-ink-soft">
                    {title}
                  </strong>
                  <span className="font-text text-[14px] leading-[22px] text-muted">{text}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* One band per category. */}
      {productCategories.map((category, index) => {
        const Icon = iconFor[category.service];
        return (
          <section
            key={category.id}
            id={category.id}
            className={cn(
              themeFor[category.service],
              "px-5",
              sectionSpacing.y,
              index % 2 === 0 && "bg-brand-wash",
            )}
          >
            <div className="mx-auto max-w-[1240px]">
              <SectionHeader
                eyebrow={{ icon: <Icon />, label: category.title }}
                title={`For ${category.title}`}
                description={category.description}
                className="max-w-[680px]"
              />
              <div className="mt-10 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {category.brands.map((brand, i) => {
                  const body = (
                    <>
                      <span className="flex size-14 items-center justify-center rounded-2xl bg-brand font-heading text-[20px] font-bold text-white">
                        {initials(brand.name)}
                      </span>
                      <h3 className="mt-5 mb-2 font-heading text-[18px] leading-6 text-ink-soft">
                        {brand.name}
                      </h3>
                      <p className="mb-0 font-text text-[14px] leading-[22px] text-muted">
                        {brand.text}
                      </p>
                      {brand.href && (
                        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-text text-[14px] font-semibold text-brand">
                          Learn more
                          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </>
                  );
                  const cardClass =
                    "group flex h-full flex-col rounded-[20px] border border-black/[0.06] bg-white p-6 no-underline transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]";
                  return (
                    <Reveal key={brand.name} delay={(i % 4) * 90}>
                      {brand.href ? (
                        <a
                          href={brand.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cardClass}
                        >
                          {body}
                        </a>
                      ) : (
                        <div className={cardClass}>{body}</div>
                      )}
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Link across to the partners on the About page. */}
      <section className="px-5 pb-[96px] max-md:pb-16">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 rounded-3xl bg-[#1c1c1e] px-10 py-9 max-md:flex-col max-md:items-start max-sm:px-6">
          <div>
            <p className="mb-2 font-heading text-[24px] leading-8 font-bold text-white">
              Trusted Trades &amp; Local Partners
            </p>
            <p className="mb-0 font-text text-[15px] leading-6 text-white/70">
              Meet the local businesses we work alongside.
            </p>
          </div>
          <Link
            href="/about-us#partners"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand px-6 py-[14px] font-text text-[16px] font-medium text-white no-underline transition-colors hover:bg-brand-alt"
          >
            See our partners
            <ArrowRightIcon className="size-[18px]" />
          </Link>
        </div>
      </section>

      <BookingCta />
    </>
  );
}
