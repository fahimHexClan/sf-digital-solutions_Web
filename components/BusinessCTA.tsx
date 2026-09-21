import Link from "next/link";
import { ArrowRight, Globe, Code2, PenTool, TrendingUp, Search } from "lucide-react";

const items = [
  { icon: Globe, label: "Website Design" },
  { icon: Code2, label: "Custom Software" },
  { icon: PenTool, label: "Graphic Design" },
  { icon: TrendingUp, label: "Social Media Marketing" },
  { icon: Search, label: "SEO" },
];

export default function BusinessCTA() {
  return (
    <section className="py-20 sm:py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-sky/10 blur-3xl" />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-sky">
            For Businesses
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-white">
            Need a digital solution for your business?
          </h2>
          <p className="mt-4 text-blue-100/80 leading-relaxed">
            Alongside training, SF Digital Solutions helps Sri Lankan
            businesses build a stronger digital presence — from a new website
            to ongoing social media and SEO support.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {items.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm font-medium text-white"
              >
                <Icon size={15} className="text-brand-sky" />
                {label}
              </span>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-blue to-brand-sky px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-shadow"
          >
            Let&apos;s Build Your Solution <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
