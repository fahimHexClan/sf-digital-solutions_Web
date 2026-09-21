"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            FAQ
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-brand-navy">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 max-w-2xl mx-auto divide-y divide-slate-200 border-t border-b border-slate-200">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="font-medium text-brand-navy">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand-blue transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <p className="pb-5 text-sm text-brand-slate leading-relaxed pr-8">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
