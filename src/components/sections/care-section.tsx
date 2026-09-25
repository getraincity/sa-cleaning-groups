import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import groupIcon from "@/assets/images/icons/group.svg";
import leafIcon from "@/assets/images/icons/leaf.svg";
import petIcon from "@/assets/images/icons/pet.svg";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type FeaturePhotos = {
  ecoFriendly: { image: StaticImageData; alt: string };
  professionals: { image: StaticImageData; alt: string };
  petFriendly: { image: StaticImageData; alt: string };
};

type CareSectionProps = {
  photos: FeaturePhotos;
  booking: { href: string; external?: boolean };
  /**
   * The two service pages lay out the intro copy slightly differently:
   * home cleaning uses a fixed-width block, car detailing a flex column.
   */
  layout: "home-cleaning" | "car-detailing";
};

export function CareSection({ photos, booking, layout }: CareSectionProps) {
  const features = [
    {
      ...photos.ecoFriendly,
      icon: leafIcon,
      iconAlt: "lead icon",
      title: "Local, eco-friendly, green products",
      text: "Our cleaning products are thoughtfully researched and picked by our team in order to provide you with sustainable, efficient and local solutions. From Canada for Canadians, and a minimal use of chemicals to protect our planet.",
    },
    {
      ...photos.professionals,
      icon: groupIcon,
      iconAlt: "group of people icon",
      title: "Hand-Picked Professionals",
      text: "Our team of professionals have years of experience and they have been selected to join our team and provide you with guaranteed and efficient services.",
    },
    {
      ...photos.petFriendly,
      icon: petIcon,
      iconAlt: "pet icon (cat)",
      title: "Pet-friendly",
      text: "Our team of professionals is great at working around your furry family member. All of our products are pet-friendly.",
    },
  ];

  const bookingClass =
    "mt-[18px] inline-block rounded-xl bg-brand px-6 py-4 text-center font-text text-[16px] font-medium text-white no-underline max-md:w-[250px] max-sm:mx-auto";

  return (
    <section className="mt-[39px] overflow-hidden px-5 pt-[120px]">
      <div className="mx-auto max-w-[1200px] max-md:w-full">
        <div className="flex w-[1178px] items-start justify-between gap-20 max-lg:w-full max-md:flex-col">
          <h2 className="mt-0 font-heading text-[40px] leading-[42px]">
            Professional Care
            <br />
            and services
          </h2>
          <div
            className={cn(
              layout === "home-cleaning"
                ? "w-[650px] max-lg:w-full"
                : "flex flex-col items-start justify-center gap-[7px]",
            )}
          >
            <h3 className="mt-0 font-text text-[30px]">From Vancouverites, for Vancouverites</h3>
            <p className="font-text text-[14px]">
              We know how busy life can get in the city. That’s why at S&amp;A cleaning,
              <br />
              we’ve built our services and experience around the Vancouver lifestyle.
              <br />
              whether you have a family, or are working 24/7 - S&amp;A has a cleaning
              <br />
              solution for you.
            </p>
            {booking.external ? (
              <a
                href={booking.href}
                target="_blank"
                rel="noopener noreferrer"
                className={bookingClass}
              >
                Book online
              </a>
            ) : (
              <Link href={booking.href} className={bookingClass}>
                Book online
              </Link>
            )}
          </div>
        </div>

        <div className="mt-9 h-px min-h-px w-full bg-brand-line" />

        <div className="mt-9 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          {features.map((feature) => (
            <Reveal
              key={feature.title}
              className="relative flex h-[350px] items-center justify-center overflow-hidden rounded-[20px] bg-card px-6 pt-9 pb-5 shadow-[0_2px_5px_#0003]"
            >
              <Image
                src={feature.image}
                alt={feature.alt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                className="object-cover opacity-28"
              />
              <div className="absolute inset-0 bg-[#ffffff70]" />
              <div className="relative z-[2] flex flex-col items-center justify-start">
                <div className="flex size-16 min-h-16 min-w-16 items-center justify-center rounded-full bg-[#ffffff7d]">
                  <Image
                    src={feature.icon}
                    alt={feature.iconAlt}
                    className="size-[26px] object-contain"
                  />
                </div>
                <h4 className="text-center font-heading text-[18px]">{feature.title}</h4>
                <p className="text-center font-text text-[14px]">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
