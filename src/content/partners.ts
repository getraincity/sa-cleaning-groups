// Trusted Trades & Local Partners on the About page.
//
// Each blurb describes the partner as it describes itself; nothing here claims
// what S&A does with or for them. Add a partner by adding an entry. Logos live
// in public/partners/ (SVG, or a PNG/JPG at 1000px wide or more).
//
// Logos, links and blurbs for Hello Gubby, Bright Nest Cleaning, Crystal Clear
// Cleans, CF One and CFIB are the ones the RainCity site uses, at the client's
// instruction (2026-10-06): copied from getraincity/raincity-website
// public/partners/ with its blurbs. Rotary uses the general Rotary
// International logo, as the client asked; public/partners/rotary.png is the
// gold wheel lifted off the screenshot the client sent.

export type Partner = {
  name: string;
  /** What the partner does, in its own terms. */
  blurb?: string;
  /** Short trade label printed on the card. */
  trade: string;
  href?: string;
  logo?: {
    src: string;
    width: number;
    height: number;
    /** Logos drawn for a dark background sit on a charcoal plate. */
    dark?: boolean;
  };
};

export const partners: Partner[] = [
  {
    name: "Hello Gubby",
    trade: "Business support",
    blurb:
      "A Vancouver AI front desk for service businesses, answering calls and website chats and booking appointments.",
    href: "https://www.hellogubby.ai/",
    logo: { src: "/partners/hello-gubby.png", width: 436, height: 131 },
  },
  {
    name: "Bright Nest Cleaning",
    trade: "Cleaning",
    blurb:
      "Residential and commercial cleaning, from deep cleans to move-outs, across Greater Vancouver and the Tri-Cities.",
    href: "https://brightnestcleaning.ca/",
    logo: { src: "/partners/bright-nest-cleaning.webp", width: 308, height: 90 },
  },
  {
    name: "Crystal Clear Cleans",
    trade: "Cleaning",
    blurb:
      "Residential and commercial cleaning across Greater Vancouver, from Vancouver and Richmond out to Langley.",
    href: "https://crystalclearcleans.ca/",
    logo: { src: "/partners/crystal-clear-cleans-logo.png", width: 725, height: 927 },
  },
  {
    name: "RainCity Property Maintenance",
    trade: "Property maintenance",
    blurb:
      "Property maintenance across Greater Vancouver, from power washing and exterior care to commercial cleaning.",
    href: "https://raincitypms.com",
    logo: { src: "/partners/raincity-property-maintenance.svg", width: 234, height: 62 },
  },
  {
    name: "Rotary",
    trade: "Community service",
    blurb:
      "A global network of neighbours, friends and leaders who volunteer in their communities.",
    href: "https://www.rotary.org",
    logo: { src: "/partners/rotary.png", width: 380, height: 378 },
  },
  {
    name: "CF One",
    trade: "Military community",
    blurb:
      "The Canadian Armed Forces community card, giving serving members, Veterans and their families access to programs and partner discounts.",
    href: "https://cfmws.ca/about-us/cfone-registration",
    logo: { src: "/partners/cfone.png", width: 964, height: 368 },
  },
  {
    name: "CFIB",
    trade: "Small business",
    blurb:
      "The Canadian Federation of Independent Business, the voice of Canada's small businesses.",
    href: "https://www.cfib-fcei.ca",
    logo: { src: "/partners/cfib.svg", width: 323, height: 110 },
  },
];
