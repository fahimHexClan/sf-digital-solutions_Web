"use client";

import { Gift, Share2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function ReferralBanner() {
  function handleShare() {
    const message =
      "Hey! I'm learning practical computer skills at SF Digital Solutions and it's been great. " +
      "If you mention my name when you enroll, we both get Rs. 500 off the course! " +
      "Check it out: https://sfdigitalsolutions.lk";

    // No phone number in the wa.me link — this opens WhatsApp's contact
    // picker so the student can forward it to whichever friend they like.
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    trackEvent("referral_share_click");
  }

  return (
    <div className="rounded-2xl bg-gradient-to-br from-brand-blue to-brand-sky p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
        <Gift size={22} />
      </span>
      <div className="flex-1">
        <h3 className="font-display font-semibold text-white">
          Refer a friend, you both save Rs. 500
        </h3>
        <p className="mt-1 text-sm text-blue-50/90">
          Know someone who wants to learn? Share your name with them — when
          they mention it while enrolling, you both get Rs. 500 off.
        </p>
      </div>
      <button
        onClick={handleShare}
        className="shrink-0 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue hover:bg-blue-50 transition-colors"
      >
        <Share2 size={16} /> Share via WhatsApp
      </button>
    </div>
  );
}
