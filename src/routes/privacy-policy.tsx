import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <PageShell eyebrow="Legal" title="Privacy Policy">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>Last updated: June 2026</p>
        <h3>1. Information We Collect</h3>
        <p>
          When you contact us via the contact form, we collect your name, email, and message to
          respond to your inquiry.
        </p>
        <h3>2. How We Use Your Information</h3>
        <p>
          Your information is used strictly to provide the services requested. We do not sell or
          share your information with third parties.
        </p>
        <h3>3. Analytics</h3>
        <p>
          We may use basic analytics to understand website traffic, but we do not track individuals
          across the internet.
        </p>
        <h3>4. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us via the contact
          page.
        </p>
      </div>
    </PageShell>
  );
}
