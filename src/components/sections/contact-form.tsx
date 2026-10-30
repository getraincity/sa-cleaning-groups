"use client";

import { useSearchParams } from "next/navigation";
import { useActionState, useEffect, useId, useState } from "react";
import { submitContactForm, type ContactFormState } from "@/lib/contact-submit";
import { ArrowRightIcon, CheckIcon, PhoneIcon } from "@/components/ui/icons";
import { contactTopics, topicLabel } from "@/content/contact";
import { isBookingService, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const labelClass = "mb-1.5 block font-text text-[13px] font-semibold text-ink-soft";
const inputClass =
  "block h-12 w-full rounded-xl border border-black/15 bg-[#fafafa] px-4 font-text text-[15px] text-body transition-colors placeholder:text-[#9a9a9a] hover:border-black/25 focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10";

const initialState: ContactFormState = { status: "idle" };

const buttonClass =
  "group/cta inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand px-7 py-[14px] font-text text-[16px] font-medium text-white no-underline transition-colors hover:bg-brand-alt disabled:cursor-wait disabled:opacity-70";

type ContactFormProps = {
  /** Topic to preselect, e.g. from a "Get a gift card" link. */
  defaultTopic?: string;
  /**
   * Set by the "Book" buttons: once sent, the form takes the visitor on to the
   * booking site for the chosen service (see `bookingSites`).
   */
  booking?: boolean;
};

export function ContactForm({ defaultTopic, booking = false }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const id = useId();
  const [topic, setTopic] = useState(
    defaultTopic && topicLabel(defaultTopic) ? defaultTopic : "home-cleaning",
  );
  // Switching to a topic without a booking site (e.g. a gift card) makes this
  // a plain message again.
  const isBooking = booking && isBookingService(topic);

  // After a booking is sent, continue to the booking site. If the email
  // couldn't be sent, continue anyway, after the notice, so the customer can
  // still book.
  const { status, next } = state;
  useEffect(() => {
    if (!next) return;
    const timer = setTimeout(
      () => window.location.assign(next),
      status === "success" ? 1500 : 4000,
    );
    return () => clearTimeout(timer);
  }, [status, next]);

  if (status === "success" && next) {
    return (
      <div role="status" className="flex flex-col items-center py-10 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-brand-tint text-[30px] text-brand">
          <CheckIcon />
        </span>
        <h3 className="mt-6 mb-2 font-heading text-[24px] leading-8 text-ink-soft">
          Thank you! Your details are on their way.
        </h3>
        <p className="mb-6 max-w-[380px] font-text text-[15px] leading-[26px] text-muted">
          Taking you to our booking form to finish your booking…
        </p>
        <a href={next} className={buttonClass}>
          Continue to booking form
          <ArrowRightIcon className="size-[18px] transition-transform group-hover/cta:translate-x-1" />
        </a>
      </div>
    );
  }

  if (status === "success") {
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
    <>
      <h2 className="mt-0 mb-2 font-heading text-[26px] leading-8 text-ink-soft">
        {isBooking ? `Book ${topicLabel(topic)?.toLowerCase()}` : "Send us a message"}
      </h2>
      <p className="mb-7 font-text text-[15px] leading-6 text-muted">
        {isBooking
          ? "Step 1 of 2: share your details. Next, we'll take you to our booking form to finish your booking."
          : "Share a few details and we'll get back to you as soon as possible."}
      </p>
      <form action={formAction} className="grid gap-5">
        {isBooking && <input type="hidden" name="booking" value="1" />}
        {/* Honeypot for spam bots, hidden from people and screen readers. */}
        <div aria-hidden className="hidden">
          <label>
            Leave empty: <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <fieldset className="m-0 min-w-0 border-0 p-0">
          <legend className={labelClass}>What can we help with?</legend>
          <div className="flex flex-wrap gap-2">
            {contactTopics.map((option) => (
              <label key={option.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="topic"
                  value={option.value}
                  checked={option.value === topic}
                  onChange={() => setTopic(option.value)}
                  className="peer sr-only"
                />
                <span className="inline-block rounded-full border border-black/15 bg-white px-4 py-2 font-text text-[14px] leading-5 text-ink-soft transition-colors peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand/20 hover:border-black/30">
                  {option.label}
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
              defaultValue={state.values?.name}
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
              defaultValue={state.values?.email}
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
            defaultValue={state.values?.phone}
            type="tel"
            className={inputClass}
            maxLength={64}
            placeholder="(604) 000-0000"
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor={`${id}-message`} className={labelClass}>
            Message {isBooking && <span className="font-normal text-muted">(optional)</span>}
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            defaultValue={state.values?.message}
            className={cn(inputClass, "h-auto min-h-[140px] resize-y py-3")}
            maxLength={5000}
            placeholder={
              isBooking
                ? "Anything we should know before you book?"
                : "Tell us a little about your home, vehicle or space, and when works for you."
            }
            required={!isBooking}
          />
        </div>

        {status === "error" && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-xl bg-[#fff1f1] px-4 py-3 font-text text-[14px] leading-[22px] text-[#a40808]"
          >
            <PhoneIcon className="mt-0.5 size-4 min-w-4" />
            {next ? (
              <span>
                Sorry, we couldn&apos;t send your details. Taking you to the{" "}
                <a href={next} className="font-semibold text-[#a40808]">
                  booking form
                </a>{" "}
                so you can still book…
              </span>
            ) : (
              <span>
                Sorry, your message couldn&apos;t be sent. Please check your details and try again,
                or call us on{" "}
                <a href={siteConfig.phoneHref} className="font-semibold text-[#a40808]">
                  {siteConfig.phone}
                </a>
                .
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-stretch">
          <p className="mb-0 font-text text-[12px] leading-[18px] text-muted">
            {isBooking
              ? "We'll only use your details for your booking."
              : "We'll only use your details to reply to your message."}
          </p>
          <button type="submit" disabled={pending} className={buttonClass}>
            {pending ? "Sending…" : isBooking ? "Continue to booking" : "Send message"}
            {!pending && (
              <ArrowRightIcon className="size-[18px] transition-transform group-hover/cta:translate-x-1" />
            )}
          </button>
        </div>
      </form>
    </>
  );
}

/**
 * The form set up from the URL: `?topic=` preselects a topic, and `?book=`
 * (from the "Book" buttons) preselects that service in booking mode.
 */
export function ContactFormFromUrl() {
  const params = useSearchParams();
  const book = params.get("book");
  const booking = isBookingService(book);
  const topic = (booking ? book : params.get("topic")) ?? undefined;
  return <ContactForm key={`${topic}-${booking}`} defaultTopic={topic} booking={booking} />;
}
