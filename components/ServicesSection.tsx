import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-24 bg-brand-navy overflow-hidden">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-brand-sky/10 blur-3xl" />
      <div className="container-page relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-sky">
              For Businesses
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-white">
              Our Services
            </h2>
            <p className="mt-4 text-blue-100/75">
              Beyond training, we also work as your digital team — building
              software, websites and marketing campaigns for real businesses.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-sky hover:text-white shrink-0"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}