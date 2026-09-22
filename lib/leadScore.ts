// Lightweight, honest "lead scoring" — no real CRM/backend involved.
// This tags the WhatsApp message itself so the team can triage at a
// glance, without needing any external CRM integration or API keys.
import { courses, services } from "@/lib/data";

export type LeadSource = "contact_form" | "free_resources" | "course_finder";

export function scoreLead(opts: {
  source: LeadSource;
  interest?: string; // course/service title the person selected
  kind?: "course" | "service"; // disambiguates names shared by a course and a service
  hasMessage?: boolean;
}): string {
  const { source, interest, kind, hasMessage } = opts;

  const matchedCourse =
    interest && kind !== "service"
      ? courses.find((c) => c.title === interest || c.slug === interest)
      : undefined;
  const matchedService =
    interest && kind !== "course"
      ? services.find((s) => s.title === interest || s.slug === interest)
      : undefined;

  if (source === "free_resources") {
    return "🌱 Warm Lead — Free Resource Download";
  }

  if (matchedService) {
    return "🏢 Business Lead — Services Inquiry";
  }

  if (matchedCourse) {
    if (!matchedCourse.comingSoon) {
      return hasMessage
        ? "🔥 High Intent — Ready to Enroll (wrote a message)"
        : "🔥 High Intent — Ready to Enroll";
    }
    return "📅 Future Interest — Notify When Course Opens";
  }

  return "📋 General Inquiry";
}
