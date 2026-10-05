// Trusted Trades & Local Partners on the About page.
//
// Each blurb describes the partner as it describes itself; nothing here claims
// what S&A does with or for them. Add a partner by adding an entry. Logos live
// in public/partners/ (SVG, or a PNG/JPG at 1000px wide or more).
//
// TO CONFIRM WITH THE CLIENT (feedback doc, 2026-10-01): logos and website
// links for Hello Gubby, Bright Nest Cleaning, Crystal Clear Cleans and CF1,
// and which Rotary club. Until a logo arrives, the card shows the partner's
// initials, and a partner without a confirmed link isn't clickable.

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
    trade: "Local partner",
  },
  {
    name: "Bright Nest Cleaning",
    trade: "Cleaning",
  },
  {
    name: "Crystal Clear Cleans",
    trade: "Cleaning",
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
  },
  {
    name: "CF1",
    trade: "Military community",
  },
  {
    name: "CFIB",
    trade: "Small business",
    blurb:
      "The Canadian Federation of Independent Business, the voice of Canada's small businesses.",
    href: "https://www.cfib-fcei.ca",
  },
];
