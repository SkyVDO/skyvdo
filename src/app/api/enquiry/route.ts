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
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FFFFFF; color: #1C1917; padding: 32px; border-radius: 8px;">
        <h1 style="color: #B45309; font-size: 24px; margin-bottom: 24px;">New Enquiry from SkyVDO Website</h1>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.1); color: #57534E; width: 140px;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.1); color: #1C1917; font-weight: 600;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.1); color: #57534E;">Phone</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.1); color: #1C1917; font-weight: 600;">${escapeHtml(phone)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.1); color: #57534E;">Event Type</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.1); color: #B45309; font-weight: 600;">${escapeHtml(eventType)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.1); color: #57534E; vertical-align: top;">Description</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.1); color: #1C1917;">${escapeHtml(description)}</td>
          </tr>
          ${
            notes
              ? `<tr>
            <td style="padding: 12px 0; color: #57534E; vertical-align: top;">Notes</td>
            <td style="padding: 12px 0; color: #1C1917;">${escapeHtml(notes)}</td>
          </tr>`
              : ""
          }
        </table>

        <div style="margin-top: 24px; padding: 16px; background: rgba(180,83,9,0.06); border-left: 3px solid #B45309; border-radius: 4px;">
          <p style="margin: 0; color: #57534E; font-size: 14px;">Reply to this lead quickly — call <strong style="color: #1C1917;">${escapeHtml(phone)}</strong> or follow up on WhatsApp.</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "SkyVDO Entertainment <onboarding@resend.dev>",
      to: process.env.ENQUIRY_EMAIL || "hello@skyvdo.com",
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
