"use server";

import { topicLabel } from "@/content/contact";
import { sendContactEmail } from "@/lib/email";
import { bookingSites, isBookingService } from "@/lib/site";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  /** The booking site to continue to, when the form was sent from a "Book" button. */
  next?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string, maxLength: number) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function submitContactForm(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const topicValue = field(formData, "topic", 64);
  // A booking continues to the booking site for the topic that was sent,
  // looked up here so the form can't send visitors anywhere else.
  const next =
    field(formData, "booking", 8) === "1" && isBookingService(topicValue)
      ? bookingSites[topicValue]
      : undefined;

  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "company", 256)) return { status: "success", next };

  const submission = {
    name: field(formData, "name", 256),
    email: field(formData, "email", 256),
    phone: field(formData, "phone", 64),
    topic: topicLabel(topicValue) ?? "General enquiry",
    message: field(formData, "message", 5000),
    bookingSite: next,
  };

  // A booking's message is optional; the booking site collects the details.
  if (!submission.name || (!next && !submission.message) || !EMAIL_PATTERN.test(submission.email)) {
    return { status: "error", next };
  }

  try {
    const sent = await sendContactEmail(submission);
    return { status: sent ? "success" : "error", next };
  } catch (error) {
    console.error("[contact] Failed to send message:", error);
    return { status: "error", next };
  }
}
