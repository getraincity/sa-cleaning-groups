import Image, { type StaticImageData } from "next/image";
import { SectionHeader, sectionSpacing } from "@/components/ui/section-header";
import { CameraIcon, FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { stock } from "@/content/stock-photos";
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
    image: stock.socialCarRinse,
    caption: "Pre-rinse before a hand wash",
    tag: "Auto",
    large: true,
  },
  { image: stock.socialMopping, caption: "Floors mopped, room by room", tag: "Home" },
  { image: stock.socialHomeWindow, caption: "Streak-free windows", tag: "Home" },
  { image: stock.socialHandWash, caption: "A careful hand wash and dry", tag: "Auto", large: true },
  { image: stock.socialKitchenCounter, caption: "Kitchen counters wiped down", tag: "Home" },
  { image: stock.socialWheels, caption: "Wheel and rim detailing", tag: "Auto" },
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
    <section className={cn("px-5", sectionSpacing.y)}>
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
          <SectionHeader
            className="max-w-[640px]"
            eyebrow={{ icon: <CameraIcon />, label: "Social" }}
            title="Follow Our Journey on Social"
            description={
              <>
                See our latest home transformations, auto detailing projects, and behind-the-scenes
                moments across Greater Vancouver.{" "}
                <strong className="font-semibold text-ink-soft">
                  Tag us in your spotless spaces!
                </strong>
              </>
            }
          />

          {profiles.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {profiles.map(({ label, href, Icon }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-6 py-[14px] font-text text-[16px] font-medium no-underline transition-colors",
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

        <Reveal className="mt-10 grid grid-cols-6 gap-3 max-lg:grid-cols-4 max-md:grid-cols-2 max-md:gap-3">
          {posts.map((post) => (
            <PostTile key={post.caption} post={post} href={profiles[0]?.href} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
