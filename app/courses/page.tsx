import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
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
        image="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1600&auto=format&fit=crop"
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

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy to-brand-navy-light overflow-hidden px-6 py-14 sm:py-16 text-center">
            <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-brand-blue/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-brand-sky/20 blur-3xl" />
            <div className="absolute inset-0 connector-dots opacity-10" />

            <div className="relative">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-sky text-white shadow-lg shadow-brand-blue/30 mx-auto">
                <HelpCircle size={26} />
              </span>
              <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-white max-w-xl mx-auto">
                Not sure which course fits you?
              </h2>
              <p className="mt-4 text-blue-100/75 max-w-lg mx-auto">
                Tell us your goals and we&apos;ll help you pick the right
                starting point.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-blue to-brand-sky px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-shadow"
              >
                Talk to Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}