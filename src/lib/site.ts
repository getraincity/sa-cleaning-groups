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
  instagram: "",
  facebook: "",
};

/** Booking destinations. Car detailing is booked on a separate site. */
export const bookingLinks = {
  homeCleaning: "/book-home-cleaning",
  carDetailing: "https://saautodetailing.ca/book-now",
} as const;

/** Third-party embeds that survived the move off Webflow. */
export const embeds = {
  elfsightScript: "https://static.elfsight.com/platform/platform.js",
  reviewsHome: "e6307328-c81d-462c-84fd-94a54414d220",
  reviewsCarDetailing: "df9a2181-f8dd-4b8a-b63b-c412995b04a9",
  launch27Script: "https://akumalexecutivecleaning.launch27.com/jsbundle",
  launch27Widget: "https://akumalexecutivecleaning.launch27.com/?w_cleaning",
} as const;
