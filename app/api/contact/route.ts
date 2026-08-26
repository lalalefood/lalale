import { NextResponse } from "next/server";
import { Resend } from "resend";


const CONTACT_RECIPIENT = "llalalefoodsandevents@gmail.com";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const body = await request.json();
  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const eventDetails = typeof body.eventDetails === "string" ? body.eventDetails.trim() : "";

  if (!fullName || !email || !eventDetails) {
    return NextResponse.json(
      { error: "Please fill in your name, email and event details." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "LALALE Foods & Events <onboarding@resend.dev>",
    to: CONTACT_RECIPIENT,
    replyTo: email,
    subject: `New event enquiry from ${fullName}`,
    text: `New enquiry from the LALALE website contact form.\n\nName: ${fullName}\nEmail: ${email}\n\nEvent details:\n${eventDetails}`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>New event enquiry from the website</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Event details:</strong></p>
        <p>${escapeHtml(eventDetails).replace(/\n/g, "<br />")}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "We could not send your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
