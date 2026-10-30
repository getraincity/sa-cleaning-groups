import { posts } from "@/content/blog";
import { locations } from "@/content/locations";
import { homeCleaningPlans } from "@/content/pricing";
import { siteConfig, socialLinks } from "@/lib/site";

// A plain-text summary for AI assistants and answer engines (llmstxt.org),
// built from the same data as the pages so it never goes out of date.
export const dynamic = "force-static";

export function GET() {
  const url = (path: string) => `${siteConfig.url}${path}`;
  const plans = homeCleaningPlans
    .map((plan) => `${plan.name} plan $${plan.price.amount}/month`)
    .join(", ");
  const socials = Object.entries(socialLinks)
    .filter(([, href]) => href)
    .map(([name, href]) => `${name[0].toUpperCase()}${name.slice(1)}: ${href}`)
    .join(" — ");

  const text = `# ${siteConfig.brandName}

> ${siteConfig.brandName} is a home cleaning and custodian (commercial and janitorial) cleaning company serving Greater Vancouver, British Columbia, Canada. It was formerly called ${siteConfig.formerName} and has been in business for over nine years. Website: ${siteConfig.url}

## Key facts

- Services: home cleaning (recurring, deep, move-in/move-out, post-construction, event, Airbnb and vacation rental, organizing and decluttering, specialized cleaning, hourly cleaning) and custodian services (offices, retail stores, strata common areas, clinics and other commercial spaces).
- ${siteConfig.brandName} does not offer car detailing. Car detailing was offered by the previous company.
- Service area: Greater Vancouver, including ${locations.map((location) => location.name).join(", ")}.
- Home cleaning prices: ${plans}; hourly cleaning from $130+ with a 3-hour minimum. Custodian services are quoted per space, and quotes are free.
- Fully licensed and insured. Every staff member completes a criminal and background check before employment.
- Eco-friendly, pet-friendly, hospital-grade cleaning products. 100% satisfaction guarantee.
- Book home cleaning online: ${url("/contact-us?book=home-cleaning")}
- Phone: ${siteConfig.phone}. Email: ${siteConfig.email}
- ${socials}

## Main pages

- [Home](${url("/")}): overview of services and how booking works
- [Home cleaning](${url("/home-cleaning")}): service types, plans, prices, add-ons and FAQs
- [Custodian services](${url("/custodian-services")}): commercial and janitorial cleaning, and how quotes work
- [Service areas](${url("/locations")}): the neighbourhoods served across Greater Vancouver
- [About us](${url("/about-us")}): company history (${siteConfig.formerName} to ${siteConfig.brandName}), team, safety and partners
- [Products we trust](${url("/products-we-trust")}): the products and equipment the team uses
- [Contact and booking](${url("/contact-us")}): book online, request a quote, phone and email

## Area pages

${locations.map((location) => `- [${location.name}](${url(`/locations/${location.slug}`)}): ${location.metaDescription}`).join("\n")}

## Guides

${posts.map((post) => `- [${post.title}](${url(`/blog/${post.slug}`)}): ${post.excerpt}`).join("\n")}
`;

  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
