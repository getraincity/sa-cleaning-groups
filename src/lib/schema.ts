import { homeCleaningPlans } from "@/content/pricing";
import { locations } from "@/content/locations";
import { siteConfig, socialLinks } from "@/lib/site";

/**
 * Structured data (schema.org JSON-LD) shared across the site. The business
 * is described once, in the root layout, and every other block points at it
 * by `@id`, so search engines and AI assistants see one consistent entity.
 */

export const businessId = `${siteConfig.url}/#business`;
const websiteId = `${siteConfig.url}/#website`;

/** Turns a site path or an external URL into an absolute URL. */
export function absoluteUrl(pathOrUrl: string) {
  return /^https?:\/\//.test(pathOrUrl) ? pathOrUrl : `${siteConfig.url}${pathOrUrl}`;
}

const areaServed = [
  { "@type": "AdministrativeArea", name: "Greater Vancouver, BC" },
  ...locations.map((location) => ({ "@type": "Place", name: `${location.name}, BC` })),
];

/** The business and the website, for the root layout. */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": businessId,
        name: siteConfig.brandName,
        alternateName: [siteConfig.name, siteConfig.formerName],
        description:
          "Home cleaning and custodian (commercial and janitorial) services across Greater Vancouver. Formerly Akumal Executive Cleaning, with over nine years in business. Fully licensed and insured, with background-checked staff and eco-friendly, pet-friendly products.",
        url: siteConfig.url,
        logo: absoluteUrl("/logo.png"),
        image: absoluteUrl(siteConfig.ogImage),
        telephone: siteConfig.phoneE164,
        email: siteConfig.email,
        priceRange: "$$",
        currenciesAccepted: "CAD",
        // A service-area business: the team travels to clients, so no street address.
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vancouver",
          addressRegion: "BC",
          addressCountry: "CA",
        },
        areaServed,
        sameAs: Object.values(socialLinks).filter(Boolean),
        knowsAbout: [
          "House cleaning",
          "Recurring home cleaning",
          "Deep cleaning",
          "Move-in and move-out cleaning",
          "Post-construction cleaning",
          "Airbnb and vacation rental cleaning",
          "Office cleaning",
          "Janitorial services",
          "Strata common area cleaning",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cleaning services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@id": `${absoluteUrl("/home-cleaning")}#service` },
            },
            {
              "@type": "Offer",
              itemOffered: { "@id": `${absoluteUrl("/custodian-services")}#service` },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.brandName,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        inLanguage: "en-CA",
        publisher: { "@id": businessId },
      },
    ],
  };
}

type ServiceOptions = {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  /** Defaults to every area the business serves. */
  area?: string;
  offers?: Record<string, unknown>[];
};

/** A service the business offers, optionally in one area. */
export function serviceJsonLd({
  path,
  name,
  serviceType,
  description,
  area,
  offers,
}: ServiceOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    provider: { "@id": businessId },
    areaServed: area ? { "@type": "Place", name: area } : areaServed,
    ...(offers && { offers }),
  };
}

/** Prices for home cleaning, from the same data as the pricing cards. */
export function homeCleaningOffers() {
  return [
    ...homeCleaningPlans.map((plan) => ({
      "@type": "Offer",
      name: `${plan.name} plan`,
      price: plan.price.amount,
      priceCurrency: "CAD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.price.amount,
        priceCurrency: "CAD",
        unitText: "month",
      },
    })),
    {
      "@type": "Offer",
      name: "Hourly cleaning (3-hour minimum)",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 130,
        priceCurrency: "CAD",
      },
    },
  ];
}

/** Breadcrumbs from the home page down to the current page. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
