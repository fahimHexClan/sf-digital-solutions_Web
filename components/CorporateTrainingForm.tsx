"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { scoreLead } from "@/lib/leadScore";

const WHATSAPP_NUMBER = "94785194631";

export default function CorporateTrainingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const company = data.get("company")?.toString().trim() || "";
    const contact = data.get("contact")?.toString().trim() || "";
    const phone = data.get("phone")?.toString().trim() || "";
    const teamSize = data.get("teamSize")?.toString().trim() || "";
    const need = data.get("need")?.toString().trim() || "";

    const leadTag = scoreLead({ source: "corporate_training" });

    const lines = [
      `[${leadTag}]`,
      "Hi! We're interested in corporate / bulk training for our team.",
      `Company: ${company}`,
      `Contact Person: ${contact}`,
      `Phone: ${phone}`,
      `Team Size: ${teamSize}`,
      need && `Training Need: ${need}`,
    ].filter(Boolean);

    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(href, "_blank", "noopener,noreferrer");
    trackWhatsAppClick("corporate_training");

    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-sky shadow-lg shadow-brand-blue/30">
          <CheckCircle2 size={32} className="text-white" />
        </span>
        <h3 className="mt-4 font-display font-semibold text-xl text-brand-navy">
          Opening WhatsApp&hellip;
        </h3>
        <p className="mt-2 text-sm text-brand-slate max-w-sm">
          Your request is ready in WhatsApp — send it across and our team
          will get back to you with a custom quote.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-brand-ink mb-1.5">
            Company / Organization
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="w-full rounded-md border border-slate-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
          />
        </div>
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-brand-ink mb-1.5">
            Contact Person
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            className="w-full rounded-md border border-slate-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-ink mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="07X XXX XXXX"
            className="w-full rounded-md border border-slate-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
          />
        </div>
        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-brand-ink mb-1.5">
            Team Size
          </label>
          <input
            id="teamSize"
            name="teamSize"
            type="text"
            placeholder="e.g. 15 staff"
            className="w-full rounded-md border border-slate-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
          />
        </div>
      </div>
      <div>
        <label htmlFor="need" className="block text-sm font-medium text-brand-ink mb-1.5">
          What does your team need to learn?
        </label>
        <textarea
          id="need"
          name="need"
          rows={3}
          placeholder="e.g. MS Office basics for new hires, Excel reporting for the finance team..."
          className="w-full rounded-md border border-slate-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-7 py-3 font-semibold text-white hover:bg-brand-blue-hover transition-colors"
      >
        Request a Quote <Send size={16} />
      </button>
    </form>
  );
}
