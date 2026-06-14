import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";
import { getCanonicalLink, getBreadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact | ${site.name}` },
      {
        name: "description",
        content: `Get in touch with ${site.name} about freelance, consulting, or full-time engineering work.`,
      },
      { property: "og:title", content: `Contact | ${site.name}` },
      {
        property: "og:description",
        content: `Get in touch about freelance, consulting, or full-time work.`,
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [getCanonicalLink("/contact")],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getBreadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Contact", url: `${site.url}/contact` },
          ]),
        ),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      subject: String(fd.get("subject") ?? "").trim() || null,
      message: String(fd.get("message") ?? "").trim(),
    };
    const submitData = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      name: payload.name,
      email: payload.email,
      subject: payload.subject || "New Portfolio Contact Form Submission",
      message: payload.message,
    };

    console.log("--- Web3Forms Debug ---");
    console.log(
      "Environment variable VITE_WEB3FORMS_ACCESS_KEY:",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
    );
    console.log("Exact payload being sent:", submitData);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
        console.log("Web3Forms Raw JSON Response:", result);
      } catch (parseError) {
        console.error("Web3Forms Raw Text Response (Not JSON):", responseText);
        throw new Error("Web3Forms returned a non-JSON response. See console for details.");
      }

      if (!response.ok || !result.success) {
        console.error("Web3Forms Error Captured:", result.message || "Unknown Error");
        throw new Error(result.message || "Submission failed");
      }

      toast.success("Message sent successfully.");
      form.reset();
    } catch (err) {
      console.error("Form Submission Exception:", err);
      toast.error(
        "Unable to send message. Please email me directly at jsmahato.official@gmail.com",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <PageShell
      eyebrow="Contact"
      title="Let's build something good."
      intro="The fastest way to reach me is the form below, or email directly. I read everything and reply within two business days."
    >
      <div className="grid gap-12 md:grid-cols-12">
        <aside className="md:col-span-4">
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-3 rounded-lg border border-border/60 p-4 transition-colors hover:border-signal/60"
              >
                <Mail className="mt-0.5 size-4 text-muted-foreground group-hover:text-signal" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <p className="mt-1">{site.email}</p>
                </div>
              </a>
            </li>
            <li className="flex items-start gap-3 rounded-lg border border-border/60 p-4">
              <MapPin className="mt-0.5 size-4 text-muted-foreground" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Based in
                </p>
                <p className="mt-1">{site.location}</p>
              </div>
            </li>
          </ul>
          <div className="mt-6 flex gap-2">
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="rounded-md border border-border p-2 text-muted-foreground hover:text-foreground"
            >
              <Github className="size-5" />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="rounded-md border border-border p-2 text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="size-5" />
            </a>

          </div>
        </aside>

        <form
          onSubmit={handleSubmit}
          className="md:col-span-8 space-y-5 rounded-lg border border-border/60 bg-card p-6 sm:p-8"
          aria-label="Contact form"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required maxLength={120} autoComplete="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                autoComplete="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" maxLength={200} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required rows={6} maxLength={5000} />
          </div>
          <div className="flex items-center justify-end">
            <Button type="submit" size="lg" disabled={busy}>
              {busy ? "Sending..." : "Send message"}
            </Button>
          </div>
        </form>
      </div>

      <div className="mt-12 overflow-hidden rounded-xl border border-border/60 bg-card">
        <iframe
          title="Map of Ranchi, Jharkhand"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.77975815204!2d85.239322!3d23.3432048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d495cea7b2af!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        />
      </div>
    </PageShell>
  );
}
