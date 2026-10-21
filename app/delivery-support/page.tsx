import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
import { handoverItems, websitePolicy } from "@/lib/websiteConfig";

export const metadata: Metadata = {
  title: "Delivery & Support Policy",
  description:
    "What you receive when SF Digital Solutions LK delivers your website, how bug-fix support works, and how maintenance differs from support.",
  alternates: { canonical: "/delivery-support" },
};

export default function DeliverySupportPage() {
  return (
    <PolicyLayout
      current="/delivery-support"
      title="Delivery & Support Policy"
      intro="This page explains what happens when your website is finished, what support covers, and what counts as separate paid work."
    >
      <section>
        <h2>Website handover</h2>
        <p className="mb-3">Depending on the scope in your agreement, handover may include:</p>
        <ul>
          {handoverItems.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p className="mt-3">
          Source code, third-party licences and account transfers are provided only
          when they are included in your agreement.
        </p>
      </section>

      <section>
        <h2>Bug-fix support</h2>
        <p>
          If something in the agreed deliverables doesn&apos;t work as agreed, you can
          report it during the support period and we&apos;ll fix eligible defects. Support period:{" "}
          <strong>{websitePolicy.supportPeriod ?? "specified in your written quotation"}</strong>.
        </p>
      </section>

      <section>
        <h2>Maintenance and other paid work</h2>
        <p className="mb-3">
          Bug-fix support is different from ongoing maintenance. The following are
          quoted separately unless your agreement says otherwise:
        </p>
        <ul>
          <li>Ongoing maintenance and technical upkeep</li>
          <li>Content updates (text, images, products)</li>
          <li>New features or pages added after delivery</li>
          <li>Hosting, domain renewals and other third-party charges</li>
          <li>Problems caused by changes made by others, or by third-party services</li>
        </ul>
      </section>

      <section>
        <h2>How to ask for help</h2>
        <p>
          Contact us by WhatsApp or email and describe the problem, including the
          page and what you expected to happen. Screenshots help.
        </p>
      </section>
    </PolicyLayout>
  );
}
