import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import PageCover from "@/components/PageCover";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — SF Digital Solutions",
};

export default function ServicesPage() {
  return (
    <>
      <PageCover
        eyebrow="For Businesses"
        title="Our Services"
        description="Alongside our training programs, SF Digital Solutions works directly with businesses — building software, websites, brand visuals and marketing campaigns."
        image="https://picsum.photos/seed/sfds-office-teamwork-502/1600/700"
      />

      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-brand-sky/10 blur-3xl" />
        <div className="container-page relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-tint/60">
        <div className="container-page py-16 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy max-w-xl mx-auto">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-brand-slate max-w-lg mx-auto">
            Tell us what you're building and we'll get back to you with a
            plan and a quote.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-blue px-7 py-3.5 font-semibold text-white hover:bg-brand-blue-hover transition-colors"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}