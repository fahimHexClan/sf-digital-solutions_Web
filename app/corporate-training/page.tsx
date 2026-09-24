import type { Metadata } from "next";
import { Users, Clock, MapPin, FileCheck } from "lucide-react";
import PageCover from "@/components/PageCover";
import CorporateTrainingForm from "@/components/CorporateTrainingForm";

export const metadata: Metadata = {
  title: "Corporate Training",
  description:
    "Bulk computer and digital skills training for your team — custom-fit sessions for offices and businesses across Sri Lanka.",
  alternates: { canonical: "/corporate-training" },
};

const benefits = [
  {
    icon: Users,
    title: "Train Your Whole Team",
    description:
      "One session, many staff — bulk pricing that works out cheaper per person than individual enrollment.",
  },
  {
    icon: Clock,
    title: "Scheduled Around You",
    description:
      "Sessions timed around your team's work hours, not a fixed public batch schedule.",
  },
  {
    icon: MapPin,
    title: "Online or On-Site",
    description:
      "Delivered online for remote teams, or arranged on-site if your team prefers in-person training.",
  },
  {
    icon: FileCheck,
    title: "Certificate for Every Employee",
    description:
      "Each participant receives a completion certificate they can keep for their own record and CV.",
  },
];

export default function CorporateTrainingPage() {
  return (
    <>
      <PageCover
        eyebrow="For Businesses"
        title="Corporate & Bulk Training for Your Team"
        description="Bring your staff up to speed on computer basics, office software, or digital skills — with training built around your team's schedule and needs, not a generic course."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-brand-tint/60 border border-slate-100 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky text-white shadow-md shadow-brand-blue/20">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-display font-semibold text-brand-navy">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm text-brand-slate leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-brand-tint/60">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              How It Works
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl text-brand-navy">
              Simple, from request to certificate
            </h2>
            <ol className="mt-6 space-y-5">
              {[
                ["Tell us about your team", "Fill in the form — team size, and what they need to learn."],
                ["Get a custom quote", "We'll reply with a training plan and bulk pricing for your team size."],
                ["We schedule the sessions", "Training is arranged online or on-site, around your team's availability."],
                ["Your team gets certified", "Each participant receives a completion certificate at the end."],
              ].map(([title, desc], i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white text-sm font-semibold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-brand-navy">{title}</p>
                    <p className="text-sm text-brand-slate mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-7">
            <h3 className="font-display font-semibold text-lg text-brand-navy mb-1">
              Request a Quote
            </h3>
            <p className="text-sm text-brand-slate mb-6">
              We usually reply within one business day.
            </p>
            <CorporateTrainingForm />
          </div>
        </div>
      </section>
    </>
  );
}
