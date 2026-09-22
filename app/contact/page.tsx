import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageCover from "@/components/PageCover";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SF Digital Solutions — ask about courses, batches, or business services. Reach us on WhatsApp, email, or the contact form.",
  alternates: { canonical: "/contact" },
};

const info = [
  {
    icon: MapPin,
    label: "Address",
    value: "Online-Based — Sri Lanka",
    accent: "from-brand-blue to-brand-sky",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 78 519 4631",
    accent: "from-brand-sky to-brand-navy",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sfdigitalsolutions.lk@gmail.com",
    accent: "from-brand-navy to-brand-blue",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageCover
        eyebrow="Get in touch"
        title="Contact Us"
        description="Have a question about a course or a batch schedule? Send us a message and we'll get back to you."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-brand-sky/10 blur-3xl" />

        <div className="container-page relative">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3 relative rounded-2xl bg-white border border-slate-100 shadow-lg p-6 sm:p-8 overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-sky to-brand-navy" />
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky text-white shadow-md">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <h2 className="font-display font-semibold text-lg text-brand-navy">
                    Send us a message
                  </h2>
                  <p className="text-xs text-brand-slate">
                    We usually reply within one business day
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>

            {/* Info column */}
            <div className="lg:col-span-2 space-y-5">
              {info.map(({ icon: Icon, label, value, accent }) => (
                <div
                  key={label}
                  className="group flex gap-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 p-5"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-brand-ink">{value}</p>
                  </div>
                </div>
              ))}

              {/* Fastest way to reach us */}
              <div className="relative rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-light p-6 overflow-hidden">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-sky/20 blur-2xl" />
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-sky">
                  <MessageCircle size={20} />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-blue-200/70">
                  Fastest Way to Reach Us
                </p>
                <p className="mt-1 font-display font-semibold text-white">
                  Message us on WhatsApp
                </p>
                <a
                  href="https://wa.me/94785194631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-sky hover:text-white transition-colors"
                >
                  Chat with SF Digital Solutions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}