import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import disinfecting from "@/assets/images/commercial/desk-disinfecting.jpg";
import microfibre from "@/assets/images/detailing/interior-wipe.jpg";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { ArrowRightIcon, CheckIcon, LeafIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Card = {
  title: string;
  image: StaticImageData;
  alt: string;
  text: string;
  points: string[];
};

const cards: Card[] = [
  {
    title: "Cleaning Products",
    image: disinfecting,
    alt: "Gloved hands disinfecting a desk with a spray bottle and cloth",
    text: "Our natural, eco-friendly disinfectants clean, disinfect and deodorize with a fresh scent. These hospital-grade solutions target bacteria and viruses such as E. coli, HIV-1, influenza and human coronavirus, for thorough protection on high-contact surfaces.",
    points: ["Eco-friendly", "Pet-friendly", "Hospital-grade"],
  },
  {
    title: "Cleaning Equipment",
    image: microfibre,
    alt: "A microfibre cloth wiping a car's steering wheel",
    text: "Top-quality tools paired with careful technique, including premium microfibre cloths that trap dirt, dust and bacteria instead of spreading them. The result is a deeper, healthier clean for your home, vehicle or business.",
    points: ["Premium microfibre", "Well-kept tools", "Homes, cars & offices"],
  },
];

/** About page: the products and equipment behind every clean, linking to Products We Trust. */
export function ProductsEquipment() {
  return (
    <section className={cn("px-5", sectionSpacing.y)}>
      <div className="mx-auto max-w-[1240px]">
        <div className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
          <SectionHeader
            className="max-w-[640px]"
            eyebrow={{ icon: <LeafIcon />, label: "What we use" }}
            title="Products & Equipment We Trust"
            description="Good results start with good products. Everything we bring into your space is chosen to be tough on dirt and gentle on people, pets and the planet."
          />
          <Link
            href="/products-we-trust"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-charcoal/20 px-5 py-3 font-text text-[15px] font-medium text-charcoal no-underline transition-colors hover:bg-charcoal hover:text-white"
          >
            See the brands we use
            <ArrowRightIcon className="size-[18px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 120}
              className="flex flex-col overflow-hidden rounded-3xl bg-[#f7f5f4]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover photo-calm"
                />
              </div>
              <div className="flex flex-1 flex-col p-8 max-sm:p-6">
                <h3 className="mt-0 mb-3 font-heading text-[24px] leading-8 text-ink-soft">
                  {card.title}
                </h3>
                <p className="mb-6 font-text text-[15px] leading-[26px] text-muted">{card.text}</p>
                <ul className="mt-auto mb-0 flex list-none flex-wrap gap-2 pl-0">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-text text-[13px] leading-5 font-medium text-ink-soft"
                    >
                      <CheckIcon className="size-3.5 text-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
