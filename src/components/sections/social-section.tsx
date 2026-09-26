import Image, { type StaticImageData } from "next/image";
import carBeforeAfterInterior from "@/assets/images/car-before-after-interior-01.webp";
import carBeforeAfterWheels from "@/assets/images/car-before-after-wheels.webp";
import carExteriorBranded from "@/assets/images/car-exterior-branded.webp";
import cleaningWindowView from "@/assets/images/cleaning-window-view.jpg";
import kitchenCounter from "@/assets/images/kitchen-counter-02.jpg";
import kitchenStove from "@/assets/images/kitchen-stove.jpg";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CameraIcon, FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { socialLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

type Post = {
  image: StaticImageData;
  caption: string;
  tag: "Home" | "Auto" | "Behind the scenes";
  /** Large tiles span two columns and two rows on desktop. */
  large?: boolean;
};

// Two large tiles bracket four small ones: 6 columns by 2 rows on desktop.
// On tablets the same order interlocks into a 4-column checkerboard.
const posts: Post[] = [
  {
    image: carBeforeAfterInterior,
    caption: "Interior detail, before and after",
    tag: "Auto",
    large: true,
  },
  { image: kitchenStove, caption: "Gas range, polished to a shine", tag: "Home" },
  {
    image: cleaningWindowView,
    caption: "Floor-to-ceiling window cleaning",
    tag: "Behind the scenes",
  },
  {
    image: carExteriorBranded,
    caption: "On the road with S&A Auto Detailing",
    tag: "Behind the scenes",
    large: true,
  },
  { image: kitchenCounter, caption: "Kitchen deep clean", tag: "Home" },
  { image: carBeforeAfterWheels, caption: "Wheel and rim detailing", tag: "Auto" },
];

const profiles = [
  { label: "Follow on Instagram", href: socialLinks.instagram, Icon: InstagramIcon },
  { label: "Follow on Facebook", href: socialLinks.facebook, Icon: FacebookIcon },
].filter((profile) => profile.href);

function PostTile({ post, href }: { post: Post; href?: string }) {
  const content = (
    <>
      <Image
        src={post.image}
        alt={post.caption}
        fill
        sizes={
          post.large
            ? "(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
            : "(max-width: 767px) 50vw, (max-width: 991px) 25vw, 17vw"
        }
        className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
      />
      <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 font-text text-[12px] leading-4 font-semibold text-ink-soft backdrop-blur-sm">
        {post.tag}
      </span>
      <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/55 p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <InstagramIcon className="size-7" />
        <span className="font-text text-[14px] leading-5 font-medium">{post.caption}</span>
      </span>
    </>
  );

  const className = cn(
    "group relative block overflow-hidden rounded-2xl bg-card",
    post.large ? "col-span-2 row-span-2 max-md:row-span-1 max-md:aspect-[2/1]" : "aspect-square",
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

export function SocialSection() {
  return (
    <section className="px-5 pb-[120px] max-md:pb-[72px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
          <div className="max-w-[640px]">
            <Eyebrow icon={<CameraIcon />}>Social</Eyebrow>
            <h2 className="my-0 font-heading text-[40px] leading-[46px] text-ink-soft max-md:text-[32px] max-md:leading-[38px]">
              Follow Our Journey on Social
            </h2>
            <p className="mt-5 mb-0 font-text text-[16px] leading-8 text-muted">
              See our latest home transformations, auto detailing projects, and behind-the-scenes
              moments across Greater Vancouver.{" "}
              <strong className="font-semibold text-ink-soft">
                Tag us in your spotless spaces!
              </strong>
            </p>
          </div>

          {profiles.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {profiles.map(({ label, href, Icon }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-6 py-4 font-text text-[16px] font-medium no-underline transition-colors",
                    index === 0
                      ? "bg-charcoal text-white hover:bg-ink"
                      : "border border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-white",
                  )}
                >
                  <Icon className="size-5" />
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>

        <Reveal className="mt-12 grid grid-cols-6 gap-4 max-lg:grid-cols-4 max-md:grid-cols-2 max-md:gap-3">
          {posts.map((post) => (
            <PostTile key={post.caption} post={post} href={profiles[0]?.href} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
