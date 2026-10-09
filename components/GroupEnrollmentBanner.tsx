"use client";

import { Users2 } from "lucide-react";
import { trackWhatsAppClick, trackEvent } from "@/lib/analytics";
import { scoreLead } from "@/lib/leadScore";

export default function GroupEnrollmentBanner({
  courseTitle,
}: {
  courseTitle: string;
}) {
  function handleClick() {
    const leadTag = scoreLead({ source: "group_enrollment" });
    const message = `[${leadTag}]\nHi! We'd like to enroll as a group (3 or more) in ${courseTitle} for the group discount. Here are our names:`;
    window.open(
      `https://wa.me/94785194631?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    trackEvent("group_enrollment_click");
    trackWhatsAppClick("group_enrollment");
  }

  return (
    <div className="rounded-2xl bg-brand-tint/60 border border-slate-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky text-white shadow-md shadow-brand-blue/20">
        <Users2 size={22} />
      </span>
      <div className="flex-1">
        <h3 className="font-display font-semibold text-brand-navy">
          Enrolling with friends? Save more as a group
        </h3>
        <p className="mt-1 text-sm text-brand-slate">
          3 or more people enrolling together get a discount for everyone —
          message us the names and we&apos;ll set up group pricing.
        </p>
      </div>
      <button
        onClick={handleClick}
        className="shrink-0 inline-flex items-center gap-2 rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-hover transition-colors"
      >
        Message Us on WhatsApp
      </button>
    </div>
  );
}
