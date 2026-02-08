import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us on WhatsApp." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, phone, eventType, description, notes } = body;

    // Basic server-side validation
    if (!name || !phone || !eventType || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111827; color: #F1F5F9; padding: 32px; border-radius: 8px;">
        <h1 style="color: #F59E0B; font-size: 24px; margin-bottom: 24px;">New Enquiry from SunDown Website</h1>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #94A3B8; width: 140px;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #F1F5F9; font-weight: 600;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #94A3B8;">Phone</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #F1F5F9; font-weight: 600;">${escapeHtml(phone)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #94A3B8;">Event Type</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #F59E0B; font-weight: 600;">${escapeHtml(eventType)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #94A3B8; vertical-align: top;">Description</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #F1F5F9;">${escapeHtml(description)}</td>
          </tr>
          ${
            notes
              ? `<tr>
            <td style="padding: 12px 0; color: #94A3B8; vertical-align: top;">Notes</td>
            <td style="padding: 12px 0; color: #F1F5F9;">${escapeHtml(notes)}</td>
          </tr>`
              : ""
          }
        </table>

        <div style="margin-top: 24px; padding: 16px; background: rgba(245,158,11,0.1); border-left: 3px solid #F59E0B; border-radius: 4px;">
          <p style="margin: 0; color: #94A3B8; font-size: 14px;">Reply to this lead quickly — call <strong style="color: #F1F5F9;">${escapeHtml(phone)}</strong> or follow up on WhatsApp.</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "SunDown Website <onboarding@resend.dev>",
      to: process.env.ENQUIRY_EMAIL || "hello@sundownentertainment.in",
      subject: `New Enquiry: ${eventType} — ${name}`,
      html: emailHtml,
      replyTo: undefined, // No email collected from visitor
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry email error:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");
}
