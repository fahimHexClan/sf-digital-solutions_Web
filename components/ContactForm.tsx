"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

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
  "Website Design & Development",
  "Graphic Design (Business)",
  "Social Media Marketing",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: wire this up to your backend / email service (e.g. an API route,
    // Formspree, or a Laravel endpoint) to actually receive submissions.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-sky shadow-lg shadow-brand-blue/30">
          <CheckCircle2 size={32} className="text-white" />
        </span>
        <h3 className="mt-4 font-display font-semibold text-xl text-brand-navy">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-brand-slate max-w-sm">
          Thanks for reaching out. Our team will get back to you shortly.
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
              <option key={c}>{c}</option>
            ))}
          </optgroup>
          <optgroup label="A Service / Project">
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
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
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-blue to-brand-sky px-7 py-3 font-semibold text-white shadow-md shadow-brand-blue/25 hover:shadow-lg hover:shadow-brand-blue/35 transition-shadow"
      >
        Send Message
      </button>
    </form>
  );
}