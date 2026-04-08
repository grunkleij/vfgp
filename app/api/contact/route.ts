import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildTransporter() {
  const user = process.env.GMAIL_USER || process.env.SMTP_USER;
  const pass = process.env.GMAIL_PASSWORD || process.env.SMTP_PASS;
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 587);

  if (!host || !user || !pass || Number.isNaN(port)) {
    throw new Error("Missing SMTP environment configuration.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: String(body.name || "").trim(),
      email: String(body.email || "").trim(),
      phone: String(body.phone || "").trim(),
      message: String(body.message || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.message) {
      return NextResponse.json(
        { message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || process.env.GMAIL_USER || process.env.SMTP_USER;

    if (!to || !from) {
      throw new Error("Missing contact email environment configuration.");
    }

    const transporter = buildTransporter();
    const safeName = escapeHtml(payload.name);
    const safeEmail = escapeHtml(payload.email);
    const safePhone = escapeHtml(payload.phone);
    const safeMessage = escapeHtml(payload.message).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject: `New Contact Enquiry from ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        "",
        "Project Requirement:",
        payload.message,
      ].join("\n"),
      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Project Requirement:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ message: "Thanks. Your enquiry has been sent successfully." });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json(
      { message: "Unable to send your enquiry right now. Please try again later." },
      { status: 500 }
    );
  }
}