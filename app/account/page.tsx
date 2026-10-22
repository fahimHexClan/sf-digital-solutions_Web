import type { Metadata } from "next";
import PageCover from "@/components/PageCover";
import AccountPanel from "@/components/AccountPanel";
import { courses } from "@/lib/data";

export const metadata: Metadata = {
  title: "My Account",
  description: "Sign in to save your learning roadmaps and request course enrolment with SF Digital Solutions LK.",
  alternates: { canonical: "/account" },
  robots: { index: false, follow: true },
};

export default function AccountPage() {
  const openCourses = courses
    .filter((c) => !c.comingSoon)
    .map((c) => ({ slug: c.slug, title: c.title }));
  const courseTitles = Object.fromEntries(courses.map((c) => [c.slug, c.title]));

  return (
    <>
      <PageCover
        eyebrow="My account"
        title="Your learning dashboard"
        description="Save your roadmaps and request enrolment in one place."
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
      />
      <section className="py-12 sm:py-16">
        <div className="container-page max-w-3xl">
          <AccountPanel openCourses={openCourses} courseTitles={courseTitles} />
        </div>
      </section>
    </>
  );
}
