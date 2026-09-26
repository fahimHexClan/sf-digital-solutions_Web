import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageCover from "@/components/PageCover";
import FreeResources from "@/components/FreeResources";
import { freeResources } from "@/lib/data";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "Free downloadable guides on Excel, Word, keyboard shortcuts and computer basics from SF Digital Solutions.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageCover
        eyebrow="Free Learning Resources"
        title="Practical guides you can download today"
        description="No sign-up hassle — just tell us where to send it. Simple, practical PDFs to help you get better with computers, one skill at a time."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FreeResources resources={freeResources} />

          <div className="mt-14 rounded-2xl bg-gradient-to-r from-brand-navy to-brand-navy-light p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-sky">
                Want more?
              </p>
              <h3 className="mt-1 font-display font-semibold text-lg text-white">
                Check out our premium guides &amp; templates
              </h3>
              <p className="mt-1 text-sm text-blue-100/75">
                The Complete Office Skills Handbook, plus a ready-to-use CV
                template.
              </p>
            </div>
            <Link
              href="/shop"
              className="shrink-0 inline-flex items-center gap-1.5 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue hover:bg-blue-50 transition-colors"
            >
              Visit the Shop <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
