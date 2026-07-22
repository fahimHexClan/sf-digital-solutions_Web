import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
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
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
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

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy to-brand-navy-light overflow-hidden px-6 py-14 sm:py-16 text-center">
            <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-brand-blue/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-brand-sky/20 blur-3xl" />
            <div className="absolute inset-0 connector-dots opacity-10" />

            <div className="relative">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-sky text-white shadow-lg shadow-brand-blue/30 mx-auto">
                <MessageSquare size={26} />
              </span>
              <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-white max-w-xl mx-auto">
                Have a project in mind?
              </h2>
              <p className="mt-4 text-blue-100/75 max-w-lg mx-auto">
                Tell us what you&apos;re building and we&apos;ll get back to
                you with a plan and a quote.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-blue to-brand-sky px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-shadow"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}