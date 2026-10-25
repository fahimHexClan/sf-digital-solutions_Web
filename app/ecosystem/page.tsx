import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Megaphone, Code2 } from "lucide-react";
import PageCover from "@/components/PageCover";
import { TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Three Divisions",
  description:
    "SF Digital Solutions LK brings IT training, website and software development, and digital marketing together under one team for students and businesses in Sri Lanka.",
  alternates: { canonical: "/ecosystem" },
};

const divisions = [
  {
    name: "SFDS Campus",
    icon: GraduationCap,
    summary: "Practical IT training for students and professionals.",
    items: [
      { label: "Browse courses", href: "/courses" },
      { label: "Free learning roadmap planner", href: "/roadmap" },
      { label: "Free learning resources", href: "/resources" },
      { label: "Digital products and study guides", href: "/shop" },
      { label: "Meet your instructor", href: "/teachers" },
    ],
  },
  {
    name: "SFDS Technologies",
    icon: Code2,
    summary: "Websites and software built around how your business works.",
    items: [
      { label: "Website design & development", href: "/services/website-design-development" },
      { label: "Software development", href: "/services/software-development" },
      { label: "See our work", href: "/portfolio" },
      { label: "Request a website quote", href: "/services/website-design-development#quote" },
    ],
  },
  {
    name: "SFDS Media",
    icon: Megaphone,
    summary: "Help for your business to be found and remembered online.",
    items: [
      { label: "SEO", href: "/services/seo" },
      { label: "Social media marketing", href: "/services/social-media-marketing" },
      { label: "Graphic design and branding", href: "/services/graphic-design" },
      { label: "Talk to us about your goals", href: "/contact" },
    ],
  },
];

export default function EcosystemPage() {
  return (
    <>
      <PageCover
        eyebrow="Learn. Build. Grow."
        title="One team for learning, building and growing"
        description={TAGLINE}
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
      />
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <p className="max-w-2xl text-brand-slate leading-relaxed">
            SF Digital Solutions LK works in three areas. They share one team and one way of
            working: clear scope, written quotations, and honest communication.
          </p>
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {divisions.map((d) => {
              const Icon = d.icon;
              return (
                <section key={d.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Icon size={24} />
                  </span>
                  <h2 className="mt-4 font-display font-bold text-xl text-brand-navy">{d.name}</h2>
                  <p className="mt-1 text-sm text-brand-slate">{d.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {d.items.map((i) => (
                      <li key={i.href}>
                        <Link
                          href={i.href}
                          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover"
                        >
                          {i.label}
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
