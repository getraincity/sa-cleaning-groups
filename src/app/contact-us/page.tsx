import Image from "next/image";
import contactHero from "@/assets/images/contact-hero.jpg";
import logoSquare from "@/assets/images/brand/logo-square.png";
import { ContactDetails } from "@/components/sections/contact-details";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Contact Us", path: "/contact-us" });

const headingClass = "my-0 font-heading text-[35px] leading-[38px] text-ink-soft";
const underlineClass = "mt-5 h-[6px] w-[200px] rounded-lg bg-brand-line";
const bodyClass = "mt-5 mb-0 font-text text-[16px] leading-8 text-muted";

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={contactHero}
        tagline="We value your time as much as you do."
        title={<strong>Contact Us</strong>}
      />

      <section className="px-5 pt-[140px] pb-[100px] max-md:pt-[60px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 gap-20 max-md:grid-cols-1">
            <div>
              <div className="rounded-[20px] bg-white px-5 py-10 shadow-[0_4px_10px_#0003]">
                <h2 className={headingClass}>
                  <strong>Drop us a message!</strong>
                </h2>
                <div className={underlineClass} />
                <p className={bodyClass}>
                  For any questions, share your details, and we’ll get back to you as soon as
                  possible.
                </p>
                <ContactForm />
              </div>
            </div>
            <div className="pt-10">
              <h2 className={headingClass}>
                <strong>Call or Email</strong>
              </h2>
              <div className={underlineClass} />
              <p className={bodyClass}>Contact us below</p>
              <ContactDetails />
              <Image src={logoSquare} alt="SA Cleaning Group" className="mt-10 h-[150px] w-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
