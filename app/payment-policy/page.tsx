import type { Metadata } from "next";
import Link from "next/link";
import PolicyLayout from "@/components/PolicyLayout";
import { paymentSteps } from "@/lib/websiteConfig";

export const metadata: Metadata = {
  title: "Payment Policy",
  description:
    "How payments work at SF Digital Solutions LK: bank transfer only, written quotation first, receipts for every payment, and never any request for banking passwords, PINs or OTPs.",
  alternates: { canonical: "/payment-policy" },
};

export default function PaymentPolicyPage() {
  return (
    <PolicyLayout
      current="/payment-policy"
      title="Payment Policy"
      intro="We currently accept payments for website projects by bank transfer. This page explains the steps, so you always know what to expect and how to stay safe."
    >
      <section>
        <h2>How payment works</h2>
        <ol>
          {paymentSteps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Keeping your money and details safe</h2>
        <ul>
          <li>We will <strong>never</strong> ask for your online banking password, PIN, OTP or login details.</li>
          <li>Our bank account details are not published on this website. We share them with you privately after the written quotation is confirmed.</li>
          <li>Please use the payment reference we give you, so we can match your transfer to your project.</li>
          <li>If anything about a payment request looks unusual, contact us on a number or email shown on this website before paying.</li>
        </ul>
      </section>

      <section>
        <h2>Receipts and confirmation</h2>
        <p>
          We confirm every payment we receive and provide a receipt. Work starts
          after the agreed advance payment is confirmed, and deliverables are
          handed over after the final payment is confirmed, as set out in your
          agreement.
        </p>
      </section>

      <section>
        <h2>No online payment gateway</h2>
        <p>
          Payments are not processed automatically on this website. A payment is
          counted once we have confirmed that it has arrived in our account.
        </p>
      </section>

      <section>
        <h2>Refunds and cancellations</h2>
        <p>
          Cancellation and refund terms are written into each project agreement.
          See our <Link href="/terms">Project Terms</Link>.
        </p>
      </section>
    </PolicyLayout>
  );
}
