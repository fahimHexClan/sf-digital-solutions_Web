"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { scoreLead } from "@/lib/leadScore";

const courseOptions = [
  "Web Development",
  "Graphic Design",
  "Digital Marketing",
  "Professional Computer Basics Course",
  "Networking & Hardware",
  "IT Diploma",
];

const serviceOptions = [
  "Software Development",
  "Website Design",
  "Graphic Design",
  "Social Media Marketing",
  "SEO",
];

// Update this if the WhatsApp number is different from the contact phone.
const WHATSAPP_NUMBER = "94785194631";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() || "";
    const phone = data.get("phone")?.toString().trim() || "";
    const email = data.get("email")?.toString().trim() || "";
    const rawInterest = data.get("course")?.toString().trim() || "";
    const [kind, interestLabel] = rawInterest.includes(":")
      ? (rawInterest.split(":") as ["course" | "service", string])
      : (["course", rawInterest] as ["course" | "service", string]);
    const message = data.get("message")?.toString().trim() || "";

    const leadTag = scoreLead({
      source: "contact_form",
      interest: interestLabel,
      kind,
      hasMessage: message.length > 0,
    });

    const lines = [
      `[${leadTag}]`,
      "Hi! I'd like to get in touch with SF Digital Solutions.",
      `Name: ${name}`,
      phone && `Phone: ${phone}`,
      `Email: ${email}`,
      `Reaching out about: ${interestLabel}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(href, "_blank", "noopener,noreferrer");
    trackWhatsAppClick("contact_form");

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
          Your message is ready in WhatsApp — just hit send there and our
          team will get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-ink mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm transition-colors hover:border-brand-blue/40 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-ink mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="07X XXX XXXX"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm transition-colors hover:border-brand-blue/40 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-ink mb-1.5">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm transition-colors hover:border-brand-blue/40 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="course" className="block text-sm font-medium text-brand-ink mb-1.5">
          What are you reaching out about?
        </label>
        <select
          id="course"
          name="course"
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm transition-colors hover:border-brand-blue/40 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
        >
          <optgroup label="A Course">
            {courseOptions.map((c) => (
              <option key={`course:${c}`} value={`course:${c}`}>
                {c}
              </option>
            ))}
          </optgroup>
          <optgroup label="A Service / Project">
            {serviceOptions.map((s) => (
              <option key={`service:${s}`} value={`service:${s}`}>
                {s}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-ink mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a bit about what you're looking for"
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm transition-colors hover:border-brand-blue/40 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-sky px-7 py-3 font-semibold text-white shadow-md shadow-brand-blue/25 hover:shadow-lg hover:shadow-brand-blue/35 transition-shadow"
      >
        Send Message <Send size={16} />
      </button>
    </form>
  );
}