"use server";
import { Resend } from 'resend';

export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  if (!process.env.EMAIL_FROM) {
    throw new Error("EMAIL_FROM environment variable is not set");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: to.toLowerCase().trim(),
      subject: subject.trim(),
      text: text.trim(),
    });

    return {
      success: true,
      messageId: data.id,
    };

  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}