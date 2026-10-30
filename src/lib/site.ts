const DEFAULT_SITE_URL = "https://www.sacleaninggroup.ca";

/**
 * Reads NEXT_PUBLIC_SITE_URL, tolerating an empty value, a missing protocol
 * or a trailing slash, and falls back to the live domain if it is unusable.
 */
function resolveSiteUrl(value = process.env.NEXT_PUBLIC_SITE_URL?.trim()): string {
  if (!value) return DEFAULT_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    return new URL(withProtocol).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteConfig = {
  name: "SA Cleaning Group",
  url: resolveSiteUrl(),
  email: "info@sacleaninggroup.ca",
  phone: "(778) 558-8715",
  phoneHref: "tel:(778)558-8715",
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
  carDetailing: "/contact-us?book=car-detailing#message",
} as const;

/** Where a booking continues once the visitor's details are sent. */
export const bookingSites = {
  // The client asked for home cleaning bookings to go here (2026-10-30).
  "home-cleaning": "https://brightnestcleaning.ca/booknow",
  "car-detailing": "https://saautodetailing.ca/book-now",
} as const;

export type BookingService = keyof typeof bookingSites;

export function isBookingService(value: unknown): value is BookingService {
  return typeof value === "string" && Object.hasOwn(bookingSites, value);
}

/** Third-party embeds that survived the move off Webflow. */
export const embeds = {
  elfsightScript: "https://static.elfsight.com/platform/platform.js",
  reviewsHome: "e6307328-c81d-462c-84fd-94a54414d220",
  reviewsCarDetailing: "df9a2181-f8dd-4b8a-b63b-c412995b04a9",
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
