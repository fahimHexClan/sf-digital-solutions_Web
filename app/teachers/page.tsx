import type { Metadata } from "next";
import TeacherCard from "@/components/TeacherCard";
import PageCover from "@/components/PageCover";
import { teachers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Teachers — SF Digital Solutions",
};

export default function TeachersPage() {
  return (
    <>
      <PageCover
        eyebrow="The people behind the courses"
        title="Our Teachers"
        description="Every instructor at SF Digital Solutions works in the field they teach, so students learn how things are actually done, not just how they look in a textbook."
        image="https://picsum.photos/seed/sfds-teacher-mentor-503/1600/700"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((t) => (
              <TeacherCard key={t.slug} teacher={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}