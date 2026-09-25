"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact-us/actions";
import { cn } from "@/lib/utils";

const inputClass =
  "mb-[10px] block h-[38px] w-full rounded-lg border border-[#999] bg-white px-3 py-[10px] align-middle text-[16px] leading-[1.42857] text-body placeholder:text-[#999] focus:border-[#3898ec] focus:outline-0";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="bg-[#ddd] p-5 text-center">
        <div>Thank you! Your submission has been received!</div>
      </div>
    );
  }

  return (
    <>
      <form action={formAction} className="mt-5">
        {/* Honeypot for spam bots, hidden from people and screen readers. */}
        <div aria-hidden className="hidden">
          <label>
            Leave empty: <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <input
          className={inputClass}
          maxLength={256}
          name="name"
          placeholder="Name"
          type="text"
          aria-label="Name"
          required
        />
        <input
          className={inputClass}
          maxLength={256}
          name="email"
          placeholder="Email"
          type="email"
          aria-label="Email"
          required
        />
        <input
          className={inputClass}
          maxLength={256}
          name="subject"
          placeholder="Subject"
          type="text"
          aria-label="Subject"
          required
        />
        <textarea
          className={cn(inputClass, "h-auto max-h-[200px] min-h-[200px]")}
          maxLength={5000}
          name="message"
          placeholder="Message"
          aria-label="Message"
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-block cursor-pointer rounded-xl bg-brand px-10 py-4 font-text text-[16px] font-medium text-white"
        >
          {pending ? "Please wait..." : "Submit"}
        </button>
      </form>
      {state.status === "error" && (
        <div role="alert" className="mt-[10px] bg-[#ffdede] p-[10px]">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      )}
    </>
  );
}
