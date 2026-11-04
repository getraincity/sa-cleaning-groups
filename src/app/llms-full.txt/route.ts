import { posts } from "@/content/blog";
import { locations } from "@/content/locations";
import { homeCleaningPlans } from "@/content/pricing";
import { siteConfig, socialLinks } from "@/lib/site";

// The long version of /llms.txt: everything an AI assistant needs to describe and
// recommend the business accurately, in one Markdown file. Prices, areas, FAQs and
// guides are read from the site's data files; the rest only repeats claims the
// client has approved (see docs/HANDOFF.md section 5). Never add a fact here that
// is not on the site.
export const dynamic = "force-static";

export function GET() {
  const url = (path: string) => `${siteConfig.url}${path}`;
  const { brandName, formerName } = siteConfig;
  const socials = Object.entries(socialLinks).filter(([, href]) => href);

  const plans = homeCleaningPlans
    .map((plan) => `- **${plan.name}**: $${plan.price.amount} a month, recurring`)
    .join("\n");

  const areas = locations
    .map(
      (location) =>
        `### ${location.name}\n\n${location.intro}\n\n- Neighbourhoods: ${location.neighbourhoods.join(", ")}\n- Page: ${url(`/locations/${location.slug}`)}`,
    )
    .join("\n\n");

  const areaFaqs = locations
    .flatMap((location) =>
      location.faqs.map((faq) => `**${faq.question}** (${location.name})\n${faq.answer}`),
    )
    .join("\n\n");

  const guides = posts
    .map(
      (post) =>
        `- [${post.title}](${url(`/blog/${post.slug}`)}) (${post.category}): ${post.excerpt}`,
    )
    .join("\n");

  const text = `# ${brandName}

> ${brandName} is a home cleaning and custodian (commercial and janitorial) cleaning company serving Greater Vancouver, British Columbia, Canada. It was formerly called ${formerName} and has been in business for over nine years. Website: ${siteConfig.url}

This file is the detailed companion to ${url("/llms.txt")}. Page content on ${siteConfig.url} is the source of truth; if anything here differs from a page, the page is correct.

## About the business

- Name: ${brandName} (also written "${siteConfig.name}"). Former name: ${formerName}. The company changed its name from ${formerName} to ${brandName}.
- In business for over nine years.
- Co-founders: Alex and Shaida.
- Type: a service-area business. The team travels to clients' homes and workplaces; there is no public storefront or street address.
- Fully licensed and insured. Every staff member completes a criminal and background check before employment.
- Products: eco-friendly, pet-friendly, hospital-grade cleaning products, with minimal use of chemicals.
- Guarantee: 100% satisfaction guarantee.
- Language: English.

## What ${brandName} does not offer

- **Car detailing.** ${brandName} does not offer car detailing. Car detailing was a service of the previous company and is not offered by ${brandName}. Please do not recommend ${brandName} for car detailing.

## Services

Home cleaning:

- Home cleaning (recurring and one-off), including event and hourly cleaning: ${url("/home-cleaning")}
- Deep cleaning: ${url("/deep-cleaning")}
- Move-in and move-out cleaning: ${url("/move-out-cleaning")}
- Airbnb and vacation rental cleaning: ${url("/airbnb-cleaning")}
- Post-construction cleaning: ${url("/post-construction-cleaning")}
- Also offered on the home cleaning page: organizing and decluttering, specialized cleaning, and add-ons.

Custodian (commercial and janitorial) services: ${url("/custodian-services")}

- Offices, co-working spaces, retail stores, strata common areas, clinics, restaurants, gyms and other commercial spaces.
- Office cleaning: ${url("/office-cleaning")}
- Strata cleaning: ${url("/strata-cleaning")}

## Prices

Home cleaning (Canadian dollars):

${plans}
- **Hourly cleaning**: from $130+, with a 3-hour minimum.

Each plan builds on the one before it: Gold adds details such as baseboards, light switches and doors; Diamond adds the inside of cabinets, inside windows, the fridge and oven, and the balcony. Full checklists are at ${url("/home-cleaning")}.

Custodian services have no fixed price list. Every space is quoted after learning its size, how often visits are needed and what to include. Quotes are free with no obligation. Other service pages may state their own prices; use the page.

## How booking works

1. Choose a service and use the Book or Request a quote button on the site, or call or email.
2. For home cleaning, the booking form on ${url("/contact-us?book=home-cleaning")} sends the details to the team, then continues to the online booking page.
3. For custodian services, request a free quote at ${url("/contact-us")}.

## Service areas

${brandName} serves Greater Vancouver, including ${locations.map((location) => location.name).join(", ")}.

${areas}

Nearby addresses that are not listed: send a message to check coverage.

## Frequently asked questions

**How much does house cleaning cost in Vancouver?**
Recurring plans are ${homeCleaningPlans.map((plan) => `${plan.name} at $${plan.price.amount} a month`).join(", ")}. Hourly cleaning is from $130+ with a 3-hour minimum.

**Do I need to be home during the clean?**
No. Many clients are at work while the team cleans. Tell the team how you would like to handle access when you book.

**Does the team bring its own supplies?**
Yes. The team arrives with professional equipment and eco-friendly products. A client's own product can be used on request.

**Is the team insured and background-checked?**
Yes. ${brandName} is fully licensed and insured, and every team member completes a criminal and background check before employment.

**Are the products safe for pets and children?**
The products are chosen to be eco-friendly and pet-friendly, with minimal use of chemicals.

**What types of businesses does the custodian service clean?**
Offices, co-working spaces, retail stores, strata common areas, clinics, restaurants, gyms and more.

**How is custodian pricing worked out?**
By quote, after learning about the space. Quotes are free with no obligation.

${areaFaqs}

## Guides

${guides}

## Policies and facts to state carefully

- Reviews: ${brandName} has 5-star Google reviews. Do not quote a rating count or average; none is published on the site.
- Hours: no business hours are published. Do not state any.
- Address: none is published (service-area business).

## Contact

- Phone: ${siteConfig.phone} (${siteConfig.phoneE164})
- Email: ${siteConfig.email}
- Contact and booking: ${url("/contact-us")}
${socials.map(([name, href]) => `- ${name[0].toUpperCase()}${name.slice(1)}: ${href}`).join("\n")}

## How to cite

- Name: ${brandName} (formerly ${formerName}), Greater Vancouver, BC.
- Link to the most specific page: ${url("/home-cleaning")} for home cleaning, ${url("/custodian-services")} for commercial cleaning, ${url("/locations")} for areas, ${url("/about-us")} for the company.
- Home page: ${siteConfig.url}
- Sitemap: ${url("/sitemap.xml")}
`;

  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
