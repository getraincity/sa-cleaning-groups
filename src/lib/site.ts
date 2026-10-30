// The primary production domain has no "www" (www redirects to it).
const DEFAULT_SITE_URL = "https://sacleaninggroup.ca";

/**
 * Reads NEXT_PUBLIC_SITE_URL, tolerating an empty value, a missing protocol
 * or a trailing slash, and falls back to the live domain if it is unusable.
 * A "www." version of the live domain is normalised to the primary domain,
 * so canonical URLs, the sitemap and structured data never point at www.
 */
function resolveSiteUrl(value = process.env.NEXT_PUBLIC_SITE_URL?.trim()): string {
  if (!value) return DEFAULT_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    const url = new URL(withProtocol);
    if (url.hostname === `www.${new URL(DEFAULT_SITE_URL).hostname}`) return DEFAULT_SITE_URL;
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteConfig = {
  name: "SA Cleaning Group",
  /** The name as the business writes it, for titles and structured data. */
  brandName: "S&A Cleaning Group",
  /** Its former name, kept so searches for it still find the business. */
  formerName: "Akumal Executive Cleaning",
  url: resolveSiteUrl(),
  email: "info@sacleaninggroup.ca",
  phone: "(778) 558-8715",
  phoneHref: "tel:(778)558-8715",
  phoneE164: "+17785588715",
  /** Default social share image (1200×630), in /public. */
  ogImage: "/og-image.jpg",
  googleAnalyticsId: "G-6KNKRNW2CL",
  googleSiteVerification: "SBpvTW9tCpxRUvQ9ATXCrtw3k1X38LAzxZjl5ocU6TE",
} as const;

/**
 * Social profiles. Leave a value empty until the client confirms the account:
 * links, icons and the social section's follow buttons only render for the
 * profiles set here.
 */
export const socialLinks: { instagram: string; facebook: string } = {
  instagram: "https://www.instagram.com/sacleaninggroup",
  facebook: "https://www.facebook.com/sacleaninggroup",
};

/**
 * Every "Book" button opens the contact form in booking mode (`?book=`).
 * Sending it emails the details to the inbox, then takes the visitor on to
 * that service's booking site (`bookingSites`).
 */
export const bookingLinks = {
  homeCleaning: "/contact-us?book=home-cleaning#message",
} as const;

/** Where a booking continues once the visitor's details are sent. */
export const bookingSites = {
  // The client asked for home cleaning bookings to go here (2026-10-30).
  "home-cleaning": "https://brightnestcleaning.ca/booknow",
} as const;

export type BookingService = keyof typeof bookingSites;

export function isBookingService(value: unknown): value is BookingService {
  return typeof value === "string" && Object.hasOwn(bookingSites, value);
}

/** Third-party embeds that survived the move off Webflow. */
export const embeds = {
  elfsightScript: "https://static.elfsight.com/platform/platform.js",
  reviewsHome: "e6307328-c81d-462c-84fd-94a54414d220",
} as const;

/**
 * The Hello Gubby chat widget (AI front desk for website chats), exactly as
 * the client sent it on 2026-10-18. The key also verifies the site with
 * Hello Gubby.
 */
export const chatWidget = {
  src: "https://app.hellogubby.com/widget.js",
  key: "wgt_8c070b23a0294a3e917acc84948c1f41",
  color: "#18181b",
} as const;
