"use server";

import { sendContactEmail } from "@/lib/email";

export type ContactFormState = { status: "idle" | "success" | "error" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string, maxLength: number) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function submitContactForm(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "company", 256)) return { status: "success" };

  const submission = {
    name: field(formData, "name", 256),
    email: field(formData, "email", 256),
    subject: field(formData, "subject", 256),
    message: field(formData, "message", 5000),
  };

  if (!submission.name || !submission.subject || !EMAIL_PATTERN.test(submission.email)) {
    return { status: "error" };
  }

  try {
    const sent = await sendContactEmail(submission);
    return { status: sent ? "success" : "error" };
  } catch (error) {
    console.error("[contact] Failed to send message:", error);
    return { status: "error" };
  }
}
