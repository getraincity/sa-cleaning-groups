import { homeCleaningPlans } from "@/content/pricing";
import { locations } from "@/content/locations";
import { siteConfig, socialLinks } from "@/lib/site";

/**
 * Structured data (schema.org JSON-LD) shared across the site. The business
 * is described once, in the root layout, and every other block points at it
 * by `@id`, so search engines and AI assistants see one consistent entity.
 *
 * Rules: no AggregateRating or Review (no approved reviews yet), no opening
 * hours and no street address (the client has not published any).
 */

type JsonLdNode = Record<string, unknown>;

export const businessId = `${siteConfig.url}/#business`;
const websiteId = `${siteConfig.url}/#website`;
const founderIds = {
  alex: `${siteConfig.url}/#founder-alex`,
  shaida: `${siteConfig.url}/#founder-shaida`,
} as const;

/** Turns a site path or an external URL into an absolute URL. */
export function absoluteUrl(pathOrUrl: string) {
  return /^https?:\/\//.test(pathOrUrl) ? pathOrUrl : `${siteConfig.url}${pathOrUrl}`;
}

/**
 * The service pages the sitewide business offers, in menu order. Each page
 * must emit `serviceJsonLd({ path, ... })` with the same path, so the
 * `#service` ids in the offer catalog resolve to a real Service block.
 * TODO: derive this from src/content/services.ts once that file exists.
 */
export const catalogServices: { name: string; path: string }[] = [
  { name: "Home cleaning", path: "/home-cleaning" },
  { name: "Deep cleaning", path: "/deep-cleaning" },
  { name: "Move-in and move-out cleaning", path: "/move-out-cleaning" },
  { name: "Airbnb and vacation rental cleaning", path: "/airbnb-cleaning" },
  { name: "Post-construction cleaning", path: "/post-construction-cleaning" },
  { name: "Custodian (commercial and janitorial) services", path: "/custodian-services" },
  { name: "Office cleaning", path: "/office-cleaning" },
  { name: "Strata cleaning", path: "/strata-cleaning" },
];

const britishColumbia = {
  "@type": "AdministrativeArea",
  name: "British Columbia",
  containedInPlace: { "@type": "Country", name: "Canada" },
};

/**
 * North and West Vancouver are cities in their own right; Downtown, East and
 * South Vancouver are parts of the City of Vancouver.
 */
const separateCities = new Set<string>(["north-vancouver", "west-vancouver"]);
const vancouverCity = { "@type": "City", name: "Vancouver", containedInPlace: britishColumbia };

const areaServed: JsonLdNode[] = [
  { "@type": "AdministrativeArea", name: "Greater Vancouver", containedInPlace: britishColumbia },
  ...locations.map((location) =>
    separateCities.has(location.slug)
      ? { "@type": "City", name: location.name, containedInPlace: britishColumbia }
      : { "@type": "Place", name: location.name, containedInPlace: vancouverCity },
  ),
];

/** Turns area names into Place entries inside British Columbia. */
function placesFor(names: string | string[]): JsonLdNode | JsonLdNode[] {
  const places = (Array.isArray(names) ? names : [names]).map((name) => ({
    "@type": "Place",
    name,
    containedInPlace: britishColumbia,
  }));
  return places.length === 1 ? places[0] : places;
}

/** The business, its founders and the website, for the root layout. */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        // ProfessionalService is a LocalBusiness subtype that fits cleaning and
        // janitorial work. HomeAndConstructionBusiness covers trades (plumbers,
        // painters) and would mislabel the business.
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": businessId,
        name: siteConfig.brandName,
        alternateName: [siteConfig.name, siteConfig.formerName],
        description:
          "Home cleaning and custodian (commercial and janitorial) services across Greater Vancouver. Formerly Akumal Executive Cleaning, with over nine years in business. Fully licensed and insured, with background-checked staff and eco-friendly, pet-friendly products.",
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteConfig.url}/#logo`,
          url: absoluteUrl("/logo.png"),
          contentUrl: absoluteUrl("/logo.png"),
        },
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
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: siteConfig.phoneE164,
          email: siteConfig.email,
          areaServed: "CA",
          availableLanguage: "English",
          url: absoluteUrl("/contact-us"),
        },
        areaServed,
        founder: [{ "@id": founderIds.alex }, { "@id": founderIds.shaida }],
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
          itemListElement: catalogServices.map((service) => ({
            "@type": "Offer",
            name: service.name,
            itemOffered: { "@id": `${absoluteUrl(service.path)}#service` },
          })),
        },
      },
      // First names only: the client has not supplied full names, bios or photos.
      {
        "@type": "Person",
        "@id": founderIds.alex,
        name: "Alex",
        jobTitle: "Co-founder",
        worksFor: { "@id": businessId },
      },
      {
        "@type": "Person",
        "@id": founderIds.shaida,
        name: "Shaida",
        jobTitle: "Co-founder",
        worksFor: { "@id": businessId },
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

type WebPageOptions = {
  /** Page title as shown in search results. */
  name: string;
  path: string;
  description?: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  /** CSS selectors for the text a voice assistant should read aloud. */
  speakable?: string[];
};

/** The page itself, tied to the website and the business. */
export function webPageJsonLd({
  name,
  path,
  description,
  type = "WebPage",
  speakable,
}: WebPageOptions) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    name,
    url,
    ...(description && { description }),
    inLanguage: "en-CA",
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
    ...(speakable?.length && {
      speakable: { "@type": "SpeakableSpecification", cssSelector: speakable },
    }),
  };
}

/** An ordered list of pages, such as a hub's services or areas. */
export function itemListJsonLd(name: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

type ServiceOptions = {
  path: string;
  name: string;
  /** Defaults to the name. */
  serviceType?: string;
  description: string;
  /** One place name or several. Defaults to every area the business serves. */
  areaServed?: string | string[];
  /** Same as `areaServed` with one name (used by the area pages). */
  area?: string;
  offers?: Record<string, unknown>[];
};

/** A service the business offers, optionally limited to some areas. */
export function serviceJsonLd({
  path,
  name,
  serviceType = name,
  description,
  areaServed: servedAreas,
  area,
  offers,
}: ServiceOptions) {
  const places = servedAreas ?? area;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    provider: { "@id": businessId },
    areaServed: places ? placesFor(places) : areaServed,
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
