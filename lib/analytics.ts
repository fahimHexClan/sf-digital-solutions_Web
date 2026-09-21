"use client";

// Small wrapper so components don't need to know whether GA / Meta Pixel
// are actually configured. Safe to call even if neither is set up yet.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", name, params);
  } catch {
    // no-op if GA isn't loaded
  }
  try {
    window.fbq?.("trackCustom", name, params);
  } catch {
    // no-op if Meta Pixel isn't loaded
  }
}

export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", { source });
}

export function trackEnrollClick(source: string) {
  trackEvent("enroll_click", { source });
}
