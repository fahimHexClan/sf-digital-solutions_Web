import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import PageCover from "@/components/PageCover";
import { courses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Courses — SF Digital Solutions",
};

export default function CoursesPage() {
  return (
    <>
      <PageCover
        eyebrow="What we teach"
        title="Our Courses"
        description="Six practical tracks, each built around real tools students will actually use at work. Pick one and start building."
        image="https://picsum.photos/seed/sfds-classroom-training-501/1600/700"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-tint/60">
        <div className="container-page py-16 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy max-w-xl mx-auto">
            Not sure which course fits you?
          </h2>
          <p className="mt-4 text-brand-slate max-w-lg mx-auto">
            Tell us your goals and we'll help you pick the right starting
            point.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-blue px-7 py-3.5 font-semibold text-white hover:bg-brand-blue-hover transition-colors"
          >
            Talk to Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}