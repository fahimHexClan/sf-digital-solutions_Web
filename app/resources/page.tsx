import type { Metadata } from "next";
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
        </div>
      </section>
    </>
  );
}
