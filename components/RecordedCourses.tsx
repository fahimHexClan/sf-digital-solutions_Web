"use client";

import { useState } from "react";
import { PlayCircle, ShoppingCart, X, Send, CheckCircle2 } from "lucide-react";
import type { RecordedCourse } from "@/lib/data";
import { trackEvent, trackWhatsAppClick } from "@/lib/analytics";
import { scoreLead } from "@/lib/leadScore";

const WHATSAPP_NUMBER = "94785194631";

export default function RecordedCourses({
  courses,
}: {
  courses: RecordedCourse[];
}) {
  const [active, setActive] = useState<RecordedCourse | null>(null);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function closeModal() {
    setActive(null);
    setName("");
    setWhatsapp("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!active) return;

    const leadTag = scoreLead({ source: "recorded_course" });
    const message = [
      `[${leadTag}]`,
      `Hi! I'd like to buy the recorded course: ${active.title} (${active.price})`,
      `Name: ${name}`,
      `WhatsApp: ${whatsapp}`,
      "Please send me payment details and LMS access instructions.",
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    trackEvent("recorded_course_order", { course: active.slug });
    trackWhatsAppClick("recorded_courses");
    closeModal();
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-6">
        {courses.map((c) => (
          <div
            key={c.slug}
            className="rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow p-6 flex flex-col"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky text-white shadow-md shadow-brand-blue/20">
              <PlayCircle size={22} />
            </span>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-brand-blue">
              {c.duration}
            </p>
            <h3 className="mt-1 font-display font-semibold text-lg text-brand-navy">
              {c.title}
            </h3>
            <p className="mt-2 text-sm text-brand-slate leading-relaxed">
              {c.description}
            </p>
            <ul className="mt-3 space-y-1.5">
              {c.curriculum.slice(0, 4).map((item) => (
                <li key={item} className="flex gap-2 text-xs text-brand-ink">
                  <CheckCircle2 size={13} className="text-brand-blue shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center justify-between">
              <span className="font-display font-extrabold text-xl text-brand-navy">
                {c.price}
              </span>
              <span className="text-[11px] text-brand-slate">Lifetime access</span>
            </div>
            <button
              onClick={() => setActive(c)}
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-md bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-hover transition-colors"
            >
              <ShoppingCart size={15} /> Buy Now
            </button>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-navy/60 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={closeModal}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-brand-slate hover:bg-slate-100"
            >
              <X size={18} />
            </button>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
              {active.price}
            </p>
            <h3 className="mt-1 font-display font-semibold text-lg text-brand-navy">
              {active.title}
            </h3>
            <p className="mt-2 text-sm text-brand-slate">
              {active.deliveryNote}
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label htmlFor="rc-name" className="block text-sm font-medium text-brand-ink mb-1.5">
                  Name
                </label>
                <input
                  id="rc-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-slate-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                />
              </div>
              <div>
                <label htmlFor="rc-whatsapp" className="block text-sm font-medium text-brand-ink mb-1.5">
                  WhatsApp Number
                </label>
                <input
                  id="rc-whatsapp"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="07X XXX XXXX"
                  className="w-full rounded-md border border-slate-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3 font-semibold text-white hover:bg-brand-blue-hover transition-colors"
              >
                Order via WhatsApp <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
