import Image from "next/image";
import { CameraIcon } from "@/components/ui/icons";
import { sectionSpacing } from "@/components/ui/section-header";
import { stock } from "@/content/stock-photos";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Photo Credits",
  path: "/photo-credits",
  description: "Where the photos on the S&A Cleaning Group website come from, and who took them.",
});

// The page each stock photo appears on, from its key's prefix in stock-photos.ts.
const pages: [prefix: string, page: string][] = [
  ["social", "Home"],
  ["about", "About us"],
  ["home", "Home Cleaning"],
  ["car", "Car Detailing"],
  ["custodian", "Custodian Services"],
  ["products", "Products We Trust"],
  ["blog", "Blog"],
  ["downtown", "Downtown Vancouver"],
  ["north", "North Vancouver"],
  ["east", "East Vancouver"],
  ["west", "West Vancouver"],
  ["south", "South Vancouver"],
];

const credits = Object.entries(stock).map(([key, photo]) => ({
  ...photo,
  page: pages.find(([prefix]) => key.startsWith(prefix))?.[1] ?? "",
}));

const linkClass =
  "inline-block py-[2px] text-brand underline underline-offset-2 hover:text-brand-alt";

export default function PhotoCreditsPage() {
  return (
    <>
      <section className="bg-[#f6f4f2] px-5 pt-16 pb-14 max-md:pt-10 max-md:pb-10">
        <div className="mx-auto max-w-[1440px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pr-4 pl-1.5 font-text text-[14px] text-ink-soft shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
            <span className="flex size-6 items-center justify-center rounded-full bg-brand text-white">
              <CameraIcon className="size-3.5" />
            </span>
            Photo credits
          </span>
          <h1 className="mt-6 mb-0 font-heading text-[46px] leading-[54px] text-ink-soft max-lg:text-[40px] max-lg:leading-[48px] max-sm:text-[32px] max-sm:leading-[40px]">
            Where Our Photos Come From
          </h1>
          <div className="mt-6 max-w-[760px] font-text text-[17px] leading-[30px] text-muted max-sm:text-[16px] max-sm:leading-7">
            <p className="m-0">
              Photos of our own team, truck and finished jobs are S&amp;A Cleaning Group&apos;s. The
              other photos on this site are by independent photographers on{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Unsplash
              </a>{" "}
              and are used under the{" "}
              <a
                href="https://unsplash.com/license"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Unsplash License
              </a>
              . They show the kind of work we do, not S&amp;A staff or clients.
            </p>
            <p className="mt-4 mb-0">
              All rights in these photos remain with their photographers. If you are the author of a
              photo here and would like it credited differently or removed, please get in touch and
              we will update it promptly.
            </p>
          </div>
        </div>
      </section>

      <section className={cn("px-5 pt-14", sectionSpacing.bottom)}>
        <ul className="m-0 mx-auto grid max-w-[1440px] list-none grid-cols-4 gap-x-6 gap-y-10 p-0 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {credits.map((photo) => (
            <li key={photo.credit.id}>
              <a
                href={`https://unsplash.com/photos/${photo.credit.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={photo}
                  alt={photo.alt}
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                  className="aspect-[4/3] h-auto w-full rounded-[5px] object-cover"
                />
              </a>
              <p className="mt-3 mb-0 font-text text-[15px] leading-6 text-ink-soft">
                Photo by{" "}
                <a
                  href={`https://unsplash.com/@${photo.credit.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(linkClass, "py-1")}
                >
                  {photo.credit.photographer}
                </a>{" "}
                on Unsplash
              </p>
              <p className="mt-1 mb-0 font-text text-[14px] leading-[22px] text-muted">
                Used on: {photo.page}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-14 mb-0 max-w-[1440px] font-text text-[15px] leading-6 text-muted">
          The neighbourhood, office and detailing photos on our service and location pages are also
          from Unsplash, under the same licence.
        </p>
      </section>
    </>
  );
}
