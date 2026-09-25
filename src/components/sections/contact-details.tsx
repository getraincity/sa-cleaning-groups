import Image from "next/image";
import emailIcon from "@/assets/images/icons/email.svg";
import phoneIcon from "@/assets/images/icons/phone.svg";
import { siteConfig } from "@/lib/site";

const rowClass = "mt-5 flex items-center justify-start gap-[10px] max-sm:text-[12px]";
const linkClass =
  "font-text text-[16px] font-medium text-body no-underline hover:font-bold max-sm:text-[14px]";

/** Email + phone rows used in the footer and on the contact page. */
export function ContactDetails() {
  return (
    <>
      <div className={rowClass}>
        <Image src={emailIcon} alt="" className="size-6 object-cover" />
        <a href={`mailto:${siteConfig.email}`} className={linkClass}>
          {siteConfig.email}
        </a>
      </div>
      <div className={rowClass}>
        <Image src={phoneIcon} alt="" className="-ml-[2px] size-7 object-cover" />
        <a href={siteConfig.phoneHref} className={linkClass}>
          {siteConfig.phone}
        </a>
      </div>
    </>
  );
}
