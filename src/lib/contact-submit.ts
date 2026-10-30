import { topicLabel } from "@/content/contact";
import { bookingSites, isBookingService, siteConfig } from "@/lib/site";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  /** The booking site to continue to, when the form was sent from a "Book" button. */
  next?: string;
  /** What was typed, so a form that failed to send can show it again. */
  values?: Record<"name" | "email" | "phone" | "message", string>;
};

/**
 * Messages are emailed to the inbox by FormSubmit (https://formsubmit.co),
 * which needs no account or API key. The first message sent from a website
 * triggers a one-time "Activate Form" email to the inbox; messages are only
 * delivered once that link has been clicked.
 */
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${siteConfig.email}`;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string, maxLength: number) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

/** The contact form's action: emails the message, then says where to go next. */
export async function submitContactForm(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const topicValue = field(formData, "topic", 64);
  // A booking continues to the booking site for the topic that was sent,
  // looked up from a fixed list so the form can't send visitors anywhere else.
  const next =
    field(formData, "booking", 8) === "1" && isBookingService(topicValue)
      ? bookingSites[topicValue]
      : undefined;

  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "company", 256)) return { status: "success", next };

  const name = field(formData, "name", 256);
  const email = field(formData, "email", 256);
  const phone = field(formData, "phone", 64);
  const topic = topicLabel(topicValue) ?? "General enquiry";
  const message = field(formData, "message", 5000);
  const values = { name, email, phone, message };

  // A booking's message is optional; the booking site collects the details.
  if (!name || (!next && !message) || !EMAIL_PATTERN.test(email)) {
    return { status: "error", next, values };
  }

  const payload = {
    _subject: `${next ? "Booking request" : "Website enquiry"}: ${topic} (${name})`,
    _template: "table",
    // FormSubmit sets Reply-To from the `email` field.
    name,
    email,
    phone: phone || "Not given",
    service: topic,
    ...(next && { booking: `Sent on to ${next} to finish booking` }),
    message: message || "(No message)",
  };

  // Local development logs instead of emailing, so testing never reaches the inbox.
  if (process.env.NODE_ENV === "development") {
    console.info("[contact] Development: message logged instead of emailed:", payload);
    return { status: "success", next };
  }

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const result: { success?: boolean | string; message?: string } = await response
      .json()
      .catch(() => ({}));
    // FormSubmit answers `success: "true"` (a string) when the email is sent.
    const sent = response.ok && String(result.success) === "true";
    if (!sent) console.error("[contact] Message not sent:", response.status, result.message);
    return sent ? { status: "success", next } : { status: "error", next, values };
  } catch (error) {
    console.error("[contact] Failed to send message:", error);
    return { status: "error", next, values };
  }
}
