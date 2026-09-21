import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-brand-tint/60">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            What Students Say
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-brand-navy">
            Real feedback from real students
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-white border border-slate-100 shadow-sm p-6"
            >
              <Quote size={22} className="text-brand-sky shrink-0" />
              <p className="mt-3 text-sm text-brand-ink leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="font-display font-semibold text-brand-navy text-sm">
                  {t.name}
                </p>
                <p className="text-xs text-brand-slate mt-0.5">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
