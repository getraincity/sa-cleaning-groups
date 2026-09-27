// Trusted Trades & Local Partners on the About page.
//
// Each blurb describes the partner as it describes itself; nothing here claims
// what S&A does with or for them. Add a partner by adding an entry. Logos live
// in public/partners/ (SVG, or a PNG/JPG at 1000px wide or more).

export type Partner = {
  name: string;
  /** What the partner does, in its own terms. */
  blurb: string;
  /** Short trade label printed on the card. */
  trade: string;
  href?: string;
  logo: {
    src: string;
    width: number;
    height: number;
    /** Logos drawn for a dark background sit on a charcoal plate. */
    dark?: boolean;
  };
};

export const partners: Partner[] = [
  {
    name: "RainCity Property Maintenance",
    trade: "Property maintenance",
    blurb:
      "Property maintenance across Greater Vancouver, from power washing and exterior care to commercial cleaning.",
    href: "https://raincitypms.com",
    logo: { src: "/partners/raincity-property-maintenance.svg", width: 234, height: 62 },
  },
];
