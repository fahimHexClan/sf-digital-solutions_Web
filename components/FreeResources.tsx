"use client";

import { useState } from "react";
import {
  FileSpreadsheet,
  FileText,
  Keyboard,
  Monitor,
  Download,
  X,
  Send,
} from "lucide-react";
import type { Resource } from "@/lib/data";
import { trackWhatsAppClick, trackEvent } from "@/lib/analytics";

const iconMap = { FileSpreadsheet, FileText, Keyboard, Monitor };

// Update this if the WhatsApp number is different from the contact phone.
const WHATSAPP_NUMBER = "94785194631";

export default function FreeResources({
  resources,
  limit,
}: {
  resources: Resource[];
  limit?: number;
}) {
  const [activeResource, setActiveResource] = useState<Resource | null>(null);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const shown = limit ? resources.slice(0, limit) : resources;

  function closeModal() {
    setActiveResource(null);
    setName("");
    setWhatsapp("");
    setEmail("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!activeResource) return;

    const message = [
      `Hi! I'd like the free resource: ${activeResource.title}`,
      `Name: ${name}`,
      `WhatsApp: ${whatsapp}`,
      `Email: ${email}`,
    ].join("\n");

    // Trigger the real file download immediately...
    const link = document.createElement("a");
    link.href = activeResource.fileUrl;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // ...and also let the team know via WhatsApp who downloaded it.
    const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waHref, "_blank", "noopener,noreferrer");
    trackEvent("resource_download", { resource: activeResource.slug });
    trackWhatsAppClick("free_resources");
    closeModal();
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {shown.map((r) => {
          const Icon = iconMap[r.icon as keyof typeof iconMap] ?? FileText;
          return (
            <div
              key={r.slug}
              className="rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow p-6 flex flex-col"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky text-white shadow-md shadow-brand-blue/20">
                <Icon size={20} />
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-brand-blue">
                {r.fileType}
              </p>
              <h3 className="mt-1 font-display font-semibold text-brand-navy">
                {r.title}
              </h3>
              <p className="mt-2 text-sm text-brand-slate leading-relaxed flex-1">
                {r.description}
              </p>
              <button
                onClick={() => setActiveResource(r)}
                className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-md bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy-light transition-colors"
              >
                Download Free <Download size={15} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Lead-capture modal */}
      {activeResource && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy/60 backdrop-blur-sm p-4"
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
              {activeResource.fileType}
            </p>
            <h3 className="mt-1 font-display font-semibold text-lg text-brand-navy">
              {activeResource.title}
            </h3>
            <p className="mt-2 text-sm text-brand-slate">
              Share your details and we&apos;ll send it to you on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label htmlFor="rf-name" className="block text-sm font-medium text-brand-ink mb-1.5">
                  Name
                </label>
                <input
                  id="rf-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-slate-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                />
              </div>
              <div>
                <label htmlFor="rf-whatsapp" className="block text-sm font-medium text-brand-ink mb-1.5">
                  WhatsApp Number
                </label>
                <input
                  id="rf-whatsapp"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+94 7X XXX XXXX"
                  className="w-full rounded-md border border-slate-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                />
              </div>
              <div>
                <label htmlFor="rf-email" className="block text-sm font-medium text-brand-ink mb-1.5">
                  Email
                </label>
                <input
                  id="rf-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-slate-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3 font-semibold text-white hover:bg-brand-blue-hover transition-colors"
              >
                Download Now <Send size={16} />
              </button>
              <p className="text-[11px] text-brand-slate text-center">
                Your download starts right away — we&apos;ll also open
                WhatsApp so our team knows to follow up.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
