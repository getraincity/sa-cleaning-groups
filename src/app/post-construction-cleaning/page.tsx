import { ServicePage } from "@/components/sections/service-page";
import { servicePages } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

const data = servicePages["post-construction-cleaning"];

export const metadata = pageMetadata({
  title: data.metaTitle,
  path: data.path,
  description: data.metaDescription,
});

export default function Page() {
  return <ServicePage data={data} />;
}
