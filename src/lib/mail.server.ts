import { createServerFn } from "@tanstack/react-start";

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; subject: string; message: string }) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY || import.meta.env.VITE_RESEND_API_KEY;
    const recipient = process.env.RESEND_RECIPIENT_EMAIL || import.meta.env.VITE_RESEND_RECIPIENT_EMAIL || "jsmahato.official@gmail.com";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured in environment variables.");
      throw new Error("Email service is not configured on the server.");
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: recipient,
        subject: `[Portfolio Contact] ${data.subject || "New Message"} from ${data.name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        `,
        reply_to: data.email,
      }),
    });

    const resultText = await response.text();
    let result;
    try {
      result = JSON.parse(resultText);
    } catch (e) {
      console.error("Resend non-JSON response:", resultText);
      throw new Error("Invalid response from Resend API");
    }

    if (!response.ok) {
      console.error("Resend API Error:", result);
      throw new Error(result.message || "Failed to send email via Resend");
    }

    return { success: true, id: result.id };
  });
