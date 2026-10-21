import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
import { termsItems } from "@/lib/websiteConfig";

export const metadata: Metadata = {
  title: "Project Terms",
  description:
    "How SF Digital Solutions website projects work: scope, payments, timelines, revisions, ownership, cancellation and support, confirmed in a written agreement.",
  alternates: { canonical: "/terms" },
};

// NOTE for the site owner: these terms are a plain-language summary. Have a
// qualified lawyer review them before using them as a formal contract.
export default function TermsPage() {
  return (
    <PolicyLayout
      current="/terms"
      title="Project Terms"
      intro="Every website project starts with a written quotation or agreement. This page explains what that document covers, so you know what to expect before you commit."
    >
      <section>
        <h2>What your written agreement will specify</h2>
        <p className="mb-3">
          The exact terms of your project are set out in your written quotation or
          agreement. They are confirmed with you in writing before work begins.
        </p>
        <ol>
          {termsItems.map((t) => (
            <li key={t.title}>
              <strong>{t.title}.</strong> {t.text}
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Work outside the agreed scope</h2>
        <p>
          If you ask for something that isn&apos;t in the agreed scope, we&apos;ll tell
          you first and agree the extra cost and timing with you in writing
          before we start.
        </p>
      </section>

      <section>
        <h2>If something in this page differs from your agreement</h2>
        <p>
          Your signed or written-confirmed agreement for the project always takes
          priority over this general summary.
        </p>
      </section>
    </PolicyLayout>
  );
}
