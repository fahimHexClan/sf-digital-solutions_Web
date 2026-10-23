import type { Metadata } from "next";
import AdminPanel from "@/components/AdminPanel";
import { courses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Admin: Enrolment Requests",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  const courseTitles = Object.fromEntries(courses.map((c) => [c.slug, c.title]));
  return (
    <section className="py-12 sm:py-16">
      <div className="container-page max-w-5xl">
        <h1 className="font-display font-extrabold text-3xl text-brand-navy">Enrolment requests</h1>
        <p className="mt-2 text-sm text-brand-slate">Staff only.</p>
        <div className="mt-8">
          <AdminPanel courseTitles={courseTitles} />
        </div>
      </div>
    </section>
  );
}
