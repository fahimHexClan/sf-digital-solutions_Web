import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageCover from "@/components/PageCover";

export const metadata: Metadata = {
  title: "Contact — SF Digital Solutions",
};

const info = [
  {
    icon: MapPin,
    label: "Address",
    value: "Kalutara, Western Province, Sri Lanka",
  },
  { icon: Phone, label: "Phone", value: "+94 XX XXX XXXX" },
  { icon: Mail, label: "Email", value: "hello@sfdigitalsolutions.lk" },
  { icon: Clock, label: "Hours", value: "Mon – Sat, 9:00 AM – 6:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      <PageCover
        eyebrow="Get in touch"
        title="Contact Us"
        description="Have a question about a course or a batch schedule? Send us a message and we'll get back to you."
        image="https://picsum.photos/seed/sfds-office-phone-505/1600/700"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 rounded-2xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-5">
              {info.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex gap-4 rounded-2xl bg-brand-tint/60 border border-slate-100 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}