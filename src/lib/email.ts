import "server-only";

type ContactMessage = {
  name: string;
  email: string;
  /** Optional; empty when the visitor left it blank. */
  phone: string;
  topic: string;
  message: string;
};

/**
 * Emails a contact-form submission to the business inbox via Resend
 * (https://resend.com). Configure RESEND_API_KEY in the environment; see
 * .env.example. Returns whether the message was accepted for delivery.
 */
export async function sendContactEmail(message: ContactMessage): Promise<boolean> {
  // `||` rather than `??` so a variable that exists but is blank still falls back.
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_FORM_TO?.trim() || "info@sacleaninggroup.ca";
  const from = process.env.CONTACT_FORM_FROM?.trim() || "SA Cleaning Group <onboarding@resend.dev>";

  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.info("[contact] RESEND_API_KEY not set; submission logged instead:", message);
      return true;
    }
    console.error("[contact] RESEND_API_KEY is not configured; message not sent.");
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: message.email,
      subject: `Website enquiry: ${message.topic} (${message.name})`,
      text: [
        `Name: ${message.name}`,
        `Email: ${message.email}`,
        `Phone: ${message.phone || "Not given"}`,
        `Topic: ${message.topic}`,
        "",
        message.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("[contact] Resend rejected the message:", response.status, await response.text());
  }
  return response.ok;
}
