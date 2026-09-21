import type { Metadata } from "next";
import TeacherCard from "@/components/TeacherCard";
import PageCover from "@/components/PageCover";
import { teachers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Instructor",
  description:
    "Meet the instructor behind SF Digital Solutions' practical, beginner-friendly computer and digital skills training.",
  alternates: { canonical: "/teachers" },
};

export default function TeachersPage() {
  return (
    <>
      <PageCover
        eyebrow="The person behind the courses"
        title="Our Instructor"
        description="SF Digital Solutions is led by an instructor who works in the field being taught, so students learn how things are actually done, not just how they look in a textbook."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xs sm:max-w-2xl mx-auto">
            {teachers.map((t) => (
              <TeacherCard key={t.slug} teacher={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}