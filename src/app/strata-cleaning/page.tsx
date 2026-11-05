import { ServicePage } from "@/components/sections/service-page";
import { servicePages } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

const data = servicePages["strata-cleaning"];

export const metadata = pageMetadata({
  title: data.metaTitle,
  path: data.path,
  description: data.metaDescription,
});

export default function Page() {
  return <ServicePage data={data} />;
}
