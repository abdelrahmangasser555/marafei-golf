"use server";

import { sendEmail } from "@/utils/send_email";

const RECIPIENTS = [
  "admin@tailoredtech.tech",
  "golf@marafei.com",
"aly@marafei.com"
  
];

const SOURCE = "golf@tailoredtech.tech";

function buildEmailHtml({
  name,
  email,
  message,
  timestamp,
}: {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Inquiry — Marafei Golf</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#e8e0d0;">

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#111111;border-radius:16px;overflow:hidden;border:1px solid #2a2a2a;">

          <!-- Header bar -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a1a 0%,#0f0f0f 100%);padding:0;border-bottom:1px solid #2a2a2a;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:32px 40px 28px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <div style="font-size:22px;font-weight:700;letter-spacing:3px;color:#ffffff;text-transform:uppercase;">MARAFEI</div>
                          <div style="font-size:11px;letter-spacing:4px;color:#bfa36b;text-transform:uppercase;margin-top:4px;">Golf Technology</div>
                        </td>
                        <td align="right">
                          <div style="display:inline-block;background:#bfa36b;color:#0a0a0a;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:6px 14px;border-radius:20px;">New Inquiry</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider line gold -->
          <tr>
            <td style="height:2px;background:linear-gradient(90deg,#bfa36b 0%,#8a7245 50%,transparent 100%);"></td>
          </tr>

          <!-- Hero banner (image) -->
          <tr>
            <td style="padding:0;position:relative;">
              <img
                src="https://d1lzcclp79qvxc.cloudfront.net/2026-02-25T08-17-34.241Z-golf%20logo_white.png"
                alt="Marafei Golf Simulator"
                width="600"
                style="display:block;width:100%;height:220px;object-fit:cover;filter:brightness(0.55);"
              />
              <table width="100%" cellpadding="0" cellspacing="0" style="position:absolute;top:0;left:0;height:100%;">
                <tr>
                  <td style="padding:0 40px;vertical-align:middle;">
                    <div style="font-size:26px;font-weight:700;color:#ffffff;letter-spacing:1px;line-height:1.3;">
                      New Consultation Request
                    </div>
                    <div style="font-size:13px;color:#bfa36b;margin-top:8px;letter-spacing:1px;">
                      Received — ${timestamp}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="height:1px;background:#2a2a2a;"></td></tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 0;">

              <p style="margin:0 0 28px;font-size:14px;color:#9a9080;line-height:1.6;letter-spacing:0.3px;">
                A new inquiry has been submitted through the Marafei Golf website. The details are provided below.
              </p>

              <!-- Info cards -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                <tr>
                  <td style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:10px;padding:18px 24px;">
                    <div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#bfa36b;margin-bottom:6px;">Contact Name</div>
                    <div style="font-size:16px;font-weight:600;color:#ffffff;">${name}</div>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                <tr>
                  <td style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:10px;padding:18px 24px;">
                    <div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#bfa36b;margin-bottom:6px;">Email Address</div>
                    <div style="font-size:15px;color:#e8e0d0;">
                      <a href="mailto:${email}" style="color:#bfa36b;text-decoration:none;">${email}</a>
                    </div>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:10px;padding:18px 24px;">
                    <div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#bfa36b;margin-bottom:10px;">Message</div>
                    <div style="font-size:14px;color:#c8bfaf;line-height:1.7;white-space:pre-wrap;">${message}</div>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:40px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your Marafei Golf Inquiry"
                       style="display:inline-block;background:#bfa36b;color:#0a0a0a;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:14px 36px;border-radius:30px;text-decoration:none;">
                      Reply to Inquiry
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="height:1px;background:#2a2a2a;margin:0 40px;"></td></tr>

          <!-- Footer -->
          <tr>
            <td style="padding:28px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="font-size:11px;color:#4a4a4a;line-height:1.6;">
                      This notification was generated automatically by the Marafei Golf website.<br/>
                      Certified TrackMan Installer — Saudi Arabia &amp; GCC
                    </div>
                  </td>
                  <td align="right">
                    <div style="font-size:10px;letter-spacing:2px;color:#bfa36b;text-transform:uppercase;">marafei.com</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  const { name, email, message } = data;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return { success: false, error: "All fields are required." };
  }

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Riyadh",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const html = buildEmailHtml({ name, email, message, timestamp });

  try {
    await Promise.all(
      RECIPIENTS.map((destination) =>
        sendEmail({
          source: SOURCE,
          destination,
          subject: `New Golf Simulator Inquiry from ${name} — Marafei`,
          body_html: html,
          type: "contact-inquiry",
          notify: true,
          description: `Contact form submission from ${name} (${email})`,
        })
      )
    );

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return { success: false, error: "Failed to send your message. Please try again or contact us directly." };
  }
}
