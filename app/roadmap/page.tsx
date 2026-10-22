import type { Metadata } from "next";
import PageCover from "@/components/PageCover";
import RoadmapPlanner from "@/components/RoadmapPlanner";
import { courses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Free Learning Roadmap Planner",
  description:
    "Tell us your goal, level and weekly study time and get a free step-by-step learning roadmap with practice projects and matching SF Digital Solutions LK courses.",
  alternates: { canonical: "/roadmap" },
};

export default function RoadmapPage() {
  const courseInfo = courses.map((c) => ({
    slug: c.slug,
    title: c.title,
    duration: c.duration,
    level: c.level,
    comingSoon: Boolean(c.comingSoon),
  }));

  return (
    <>
      <PageCover
        eyebrow="Free tool"
        title="Plan your learning roadmap"
        description="Choose your goal, level and weekly study time. Get a step-by-step plan, practice projects and matching courses."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1600&auto=format&fit=crop"
      />
      <section className="py-14 sm:py-16">
        <div className="container-page max-w-4xl">
          <RoadmapPlanner courses={courseInfo} />
        </div>
      </section>
    </>
  );
}
