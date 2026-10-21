import type { Metadata } from "next";
import Link from "next/link";
import PolicyLayout from "@/components/PolicyLayout";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SF Digital Solutions handles the information you share through this website: enquiry forms, WhatsApp, and analytics.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PolicyLayout
      current="/privacy"
      title="Privacy Policy"
      intro="This page explains what information we receive through this website and how we use it."
    >
      <section>
        <h2>Information you give us</h2>
        <p>
          When you use a form on this website (for example the contact, quote or
          download forms), you may give us your name, email address, phone or
          WhatsApp number and details about your enquiry. We use this only to reply
          to you, prepare quotations, and deliver what you asked for.
        </p>
      </section>

      <section>
        <h2>How your enquiry reaches us</h2>
        <p>
          Depending on how the site is set up, a form either sends your details to
          us through a form-submission service, or opens WhatsApp with your message
          ready to send. In the WhatsApp case, we receive your details only when
          you press Send, and this website does not store them.
        </p>
      </section>

      <section>
        <h2>Analytics</h2>
        <p>
          We may use Google Analytics and the Meta Pixel to understand how visitors
          use this website (for example which pages are visited and which buttons are
          clicked). These services may use cookies or similar technologies. You can
          block them in your browser settings.
        </p>
      </section>

      <section>
        <h2>Payments</h2>
        <p>
          This website does not collect card numbers or banking passwords. We
          never ask for your online banking password, PIN or OTP. See our{" "}
          <Link href="/payment-policy">Payment Policy</Link>.
        </p>
      </section>

      <section>
        <h2>Sharing your information</h2>
        <p>
          We do not sell your personal information. We share it only with service
          providers needed to run this website or reply to you (such as WhatsApp,
          email, hosting or analytics providers), or if the law requires it.
        </p>
      </section>

      <section>
        <h2>Your choices</h2>
        <p>
          You can ask us to correct or delete the information we hold about you by
          emailing <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>Links to other sites</h2>
        <p>
          This website links to other sites (for example our learning platform,
          social media and client projects). They have their own privacy practices.
        </p>
      </section>
    </PolicyLayout>
  );
}
