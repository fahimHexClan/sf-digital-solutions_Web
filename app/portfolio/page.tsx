import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageCover from "@/components/PageCover";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Websites and web apps built by SF Digital Solutions. Browse our live projects, then request a quote for your own website.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageCover
        eyebrow="Our Work"
        title="Websites we've built"
        description="Browse our live projects. When you're ready for your own website, we'll send you a written quotation."
        image="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1600&auto=format&fit=crop"
      />
      <Portfolio />
      <section className="pb-20">
        <div className="container-page">
          <div className="rounded-2xl bg-brand-tint/60 border border-slate-100 p-8 text-center">
            <h2 className="font-display font-bold text-2xl text-brand-navy">
              Want a website like these?
            </h2>
            <p className="mt-2 text-brand-slate max-w-lg mx-auto">
              Tell us about your project and we&apos;ll reply with questions and
              a written quotation.
            </p>
            <Link
              href="/services/website-design-development#quote"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-blue px-6 py-3 font-semibold text-white hover:bg-brand-blue-hover transition-colors"
            >
              Request a Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
