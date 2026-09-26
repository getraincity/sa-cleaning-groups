"use client";

import { useSearchParams } from "next/navigation";
import { useActionState, useId } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact-us/actions";
import { ArrowRightIcon, CheckIcon, PhoneIcon } from "@/components/ui/icons";
import { contactTopics, topicLabel } from "@/content/contact";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const labelClass = "mb-1.5 block font-text text-[13px] font-semibold text-ink-soft";
const inputClass =
  "block h-12 w-full rounded-xl border border-black/15 bg-[#fafafa] px-4 font-text text-[15px] text-body transition-colors placeholder:text-[#9a9a9a] hover:border-black/25 focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10";

const initialState: ContactFormState = { status: "idle" };

type ContactFormProps = {
  /** Topic to preselect, e.g. from a "Get a gift card" link. */
  defaultTopic?: string;
};

export function ContactForm({ defaultTopic }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const id = useId();
  const selectedTopic = defaultTopic && topicLabel(defaultTopic) ? defaultTopic : "home-cleaning";

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-center py-10 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-brand-tint text-[30px] text-brand">
          <CheckIcon />
        </span>
        <h3 className="mt-6 mb-2 font-heading text-[24px] leading-8 text-ink-soft">
          Thank you! Your message is on its way.
        </h3>
        <p className="mb-0 max-w-[380px] font-text text-[15px] leading-[26px] text-muted">
          We&apos;ll get back to you as soon as possible. If it&apos;s urgent, give us a call on{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-brand no-underline">
            {siteConfig.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-5">
      {/* Honeypot for spam bots, hidden from people and screen readers. */}
      <div aria-hidden className="hidden">
        <label>
          Leave empty: <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <fieldset className="m-0 min-w-0 border-0 p-0">
        <legend className={labelClass}>What can we help with?</legend>
        <div className="flex flex-wrap gap-2">
          {contactTopics.map((topic) => (
            <label key={topic.value} className="cursor-pointer">
              <input
                type="radio"
                name="topic"
                value={topic.value}
                defaultChecked={topic.value === selectedTopic}
                className="peer sr-only"
              />
              <span className="inline-block rounded-full border border-black/15 bg-white px-4 py-2 font-text text-[14px] leading-5 text-ink-soft transition-colors peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand/20 hover:border-black/30">
                {topic.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            className={inputClass}
            maxLength={256}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            className={inputClass}
            maxLength={256}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-phone`} className={labelClass}>
          Phone <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          className={inputClass}
          maxLength={64}
          placeholder="(604) 000-0000"
          autoComplete="tel"
        />
      </div>

      <div>
        <label htmlFor={`${id}-message`} className={labelClass}>
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          className={cn(inputClass, "h-auto min-h-[140px] resize-y py-3")}
          maxLength={5000}
          placeholder="Tell us a little about your home, vehicle or space, and when works for you."
          required
        />
      </div>

      {state.status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl bg-[#fff1f1] px-4 py-3 font-text text-[14px] leading-[22px] text-[#a40808]"
        >
          <PhoneIcon className="mt-0.5 size-4 min-w-4" />
          <span>
            Sorry, your message couldn&apos;t be sent. Please check your details and try again, or
            call us on{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-[#a40808]">
              {siteConfig.phone}
            </a>
            .
          </span>
        </div>
      )}

      <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-stretch">
        <p className="mb-0 font-text text-[12px] leading-[18px] text-muted">
          We&apos;ll only use your details to reply to your message.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group/cta inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand px-7 py-[14px] font-text text-[16px] font-medium text-white transition-colors hover:bg-brand-alt disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Sending…" : "Send message"}
          {!pending && (
            <ArrowRightIcon className="size-[18px] transition-transform group-hover/cta:translate-x-1" />
          )}
        </button>
      </div>
    </form>
  );
}

/** The form with its topic preselected from `?topic=` in the URL. */
export function ContactFormFromUrl() {
  const topic = useSearchParams().get("topic") ?? undefined;
  return <ContactForm key={topic} defaultTopic={topic} />;
}
