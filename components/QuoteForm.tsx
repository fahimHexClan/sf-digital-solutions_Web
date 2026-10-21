"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import FormField, { fieldProps, submitClass } from "@/components/FormField";
import { trackWhatsAppClick } from "@/lib/analytics";
import { deliverLead, type LeadResult } from "@/lib/forms";
import { QUOTE_FORM_ENDPOINT, whatsappLink } from "@/lib/site";
import { isEmail, isEmailOrPhone } from "@/lib/validation";

const websiteTypes = [
  "Business website",
  "Personal / portfolio website",
  "Landing page",
  "E-commerce website",
  "Website redesign",
  "Maintenance & updates",
  "Not sure yet",
];

const timelines = ["As soon as possible", "Within 1 month", "1–3 months", "Flexible"];

type Errors = Partial<Record<"name" | "contact" | "websiteType" | "description", string>>;

export default function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<LeadResult | null>(null);
  const [sending, setSending] = useState(false);
  const [fallbackMessage, setFallbackMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => data.get(k)?.toString().trim() || "";

    const values = {
      name: get("name"),
      businessName: get("businessName"),
      contact: get("contact"),
      websiteType: get("websiteType"),
      budget: get("budget"),
      timeline: get("timeline"),
      description: get("description"),
    };

    // Spam trap: real visitors never see or fill this field.
    if (get("companyWebsite")) {
      setResult("sent");
      return;
    }

    const next: Errors = {};
    if (values.name.length < 2) next.name = "Please enter your name.";
    if (!values.contact) {
      next.contact = "Please enter your email address or WhatsApp number so we can reply.";
    } else if (!isEmailOrPhone(values.contact)) {
      next.contact =
        "That doesn't look right. Use a valid email address or a phone number, for example 077 123 4567.";
    }
    if (!values.websiteType) next.websiteType = "Please choose the type of website you need.";
    if (values.description.length < 20) {
      next.description =
        "Please describe your project in at least 20 characters so we can prepare an accurate quote.";
    }
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstId = (["name", "contact", "websiteType", "description"] as const).find(
        (k) => next[k],
      );
      if (firstId) document.getElementById(firstId)?.focus();
      return;
    }

    const isMail = isEmail(values.contact);
    const lines = [
      "[🏢 Website Quote Request]",
      "Hi! I'd like a quote for a website.",
      `Name: ${values.name}`,
      values.businessName && `Business: ${values.businessName}`,
      `${isMail ? "Email" : "WhatsApp / phone"}: ${values.contact}`,
      `Website type: ${values.websiteType}`,
      values.budget && `Estimated budget: ${values.budget}`,
      values.timeline && `Preferred timeline: ${values.timeline}`,
      `Project: ${values.description}`,
    ].filter(Boolean) as string[];
    const text = lines.join("\n");
    setFallbackMessage(text);

    setSending(true);
    const outcome = await deliverLead({ ...values, formType: "website_quote" }, text);
    setSending(false);
    setResult(outcome);
    if (outcome === "whatsapp") trackWhatsAppClick("quote_form");
    if (outcome !== "error") form.reset();
  }

  if (result === "sent" || result === "whatsapp") {
    return (
      <div className="flex flex-col items-center text-center py-8" role="status">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-sky shadow-lg shadow-brand-blue/30">
          <CheckCircle2 size={32} className="text-white" />
        </span>
        <h3 className="mt-4 font-display font-semibold text-xl text-brand-navy">
          {result === "sent" ? "Your request has been sent" : "Your request is ready in WhatsApp"}
        </h3>
        <p className="mt-2 text-sm text-brand-slate max-w-md">
          {result === "sent"
            ? "Thank you. We'll reply using the contact details you gave us with questions or a written quotation."
            : "We opened WhatsApp with your request filled in. Please press Send there to deliver it to us. Nothing is stored on this website, so the request only reaches us once you send it."}
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
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField id="name" label="Your name" error={errors.name}>
          <input {...fieldProps("name", errors.name)} type="text" autoComplete="name" placeholder="Your name" />
        </FormField>
        <FormField id="businessName" label="Business name" optional>
          <input {...fieldProps("businessName")} type="text" autoComplete="organization" placeholder="Your business" />
        </FormField>
      </div>

      <FormField id="contact" label="Email or WhatsApp number" error={errors.contact}>
        <input
          {...fieldProps("contact", errors.contact)}
          type="text"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com or 07X XXX XXXX"
        />
      </FormField>

      <div className="grid sm:grid-cols-2 gap-5">
        <FormField id="websiteType" label="Type of website" error={errors.websiteType}>
          <select {...fieldProps("websiteType", errors.websiteType)} defaultValue="">
            <option value="" disabled>
              Choose one…
            </option>
            {websiteTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </FormField>
        <FormField id="timeline" label="Preferred delivery timeline" optional>
          <select {...fieldProps("timeline")} defaultValue="">
            <option value="">No preference</option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField id="budget" label="Estimated budget" optional>
        <input {...fieldProps("budget")} type="text" placeholder="For example: Rs. 75,000, or “not sure yet”" />
      </FormField>

      <FormField id="description" label="Project description" error={errors.description}>
        <textarea
          {...fieldProps("description", errors.description)}
          rows={5}
          placeholder="What is the website for? Which pages or features do you need? Do you have examples you like?"
        />
      </FormField>

      {/* Honeypot: hidden from people, visible to bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="companyWebsite">Leave this field empty</label>
        <input id="companyWebsite" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {result === "error" && (
        <div role="alert" className="flex gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <p>
            Sorry, we couldn&apos;t send your request. Please try again, or{" "}
            <a
              href={whatsappLink(fallbackMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              send it on WhatsApp instead
            </a>
            .
          </p>
        </div>
      )}

      <div>
        <button type="submit" disabled={sending} className={submitClass}>
          {sending ? "Sending…" : QUOTE_FORM_ENDPOINT ? "Request a Quote" : "Request a Quote via WhatsApp"}{" "}
          <Send size={16} />
        </button>
        <p className="mt-3 text-xs text-brand-slate max-w-md">
          {QUOTE_FORM_ENDPOINT
            ? "Your details are used only to reply to your request."
            : "This opens WhatsApp with your request ready to send. We receive it when you press Send."}{" "}
          Prices are confirmed in a written quotation. We never ask for banking passwords, PINs or OTPs.
        </p>
      </div>
    </form>
  );
}
