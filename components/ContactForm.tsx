"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { scoreLead } from "@/lib/leadScore";
import FormField, { fieldProps, submitClass } from "@/components/FormField";
import { deliverLead, type LeadResult } from "@/lib/forms";
import { whatsappLink } from "@/lib/site";
import { isEmail, isPhone } from "@/lib/validation";

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


type Errors = Partial<Record<"name" | "email" | "phone", string>>;

export default function ContactForm() {
  const [result, setResult] = useState<LeadResult | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [fallbackMessage, setFallbackMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() || "";
    const phone = data.get("phone")?.toString().trim() || "";
    const email = data.get("email")?.toString().trim() || "";
    const rawInterest = data.get("course")?.toString().trim() || "";
    const message = data.get("message")?.toString().trim() || "";

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email address.";
    else if (!isEmail(email)) next.email = "Please enter a valid email address, for example you@example.com.";
    if (phone && !isPhone(phone)) next.phone = "Please enter a valid phone number, for example 077 123 4567.";
    setErrors(next);
    const firstInvalid = (["name", "phone", "email"] as const).find((k) => next[k]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    const [kind, interestLabel] = rawInterest.includes(":")
      ? (rawInterest.split(":") as ["course" | "service", string])
      : (["course", rawInterest] as ["course" | "service", string]);

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
    ].filter(Boolean) as string[];
    const text = lines.join("\n");
    setFallbackMessage(text);

    setSending(true);
    const outcome = await deliverLead(
      { formType: "contact", name, phone, email, interest: interestLabel, message },
      text,
    );
    setSending(false);
    setResult(outcome);
    if (outcome === "whatsapp") trackWhatsAppClick("contact_form");
    if (outcome !== "error") form.reset();
  }

  if (result === "sent" || result === "whatsapp") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10" role="status">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-sky shadow-lg shadow-brand-blue/30">
          <CheckCircle2 size={32} className="text-white" />
        </span>
        <h3 className="mt-4 font-display font-semibold text-xl text-brand-navy">
          {result === "sent" ? "Message sent" : "Your message is ready in WhatsApp"}
        </h3>
        <p className="mt-2 text-sm text-brand-slate max-w-sm">
          {result === "sent"
            ? "Thank you. Our team will get back to you."
            : "Please press Send in WhatsApp to deliver it. Nothing is stored on this website, so we receive your message once you send it."}
        </p>
        {result === "whatsapp" && (
          <a
            href={whatsappLink(fallbackMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover"
          >
            WhatsApp didn&apos;t open? Tap here
          </a>
        )}
        <button
          onClick={() => setResult(null)}
          className="mt-5 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField id="name" label="Full Name" error={errors.name}>
          <input {...fieldProps("name", errors.name)} type="text" autoComplete="name" placeholder="Your name" />
        </FormField>
        <FormField id="phone" label="Phone Number" optional error={errors.phone}>
          <input {...fieldProps("phone", errors.phone)} type="tel" autoComplete="tel" placeholder="07X XXX XXXX" />
        </FormField>
      </div>

      <FormField id="email" label="Email Address" error={errors.email}>
        <input {...fieldProps("email", errors.email)} type="email" autoComplete="email" placeholder="you@example.com" />
      </FormField>

      <FormField id="course" label="What are you reaching out about?">
        <select {...fieldProps("course")}>
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
      </FormField>

      <FormField id="message" label="Message">
        <textarea {...fieldProps("message")} rows={4} placeholder="Tell us a bit about what you're looking for" />
      </FormField>

      {result === "error" && (
        <div role="alert" className="flex gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <p>
            Sorry, we couldn&apos;t send your message. Please try again, or{" "}
            <a href={whatsappLink(fallbackMessage)} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
              send it on WhatsApp instead
            </a>
            .
          </p>
        </div>
      )}

      <button type="submit" disabled={sending} className={submitClass}>
        {sending ? "Sending…" : "Send Message"} <Send size={16} />
      </button>
    </form>
  );
}
