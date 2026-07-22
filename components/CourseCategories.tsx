import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  PenTool,
  TrendingUp,
  Monitor,
  Network,
  LineChart,
  GraduationCap,
  Clock,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { courses } from "@/lib/data";

const iconMap = {
  Code2,
  PenTool,
  TrendingUp,
  Monitor,
  Network,
  LineChart,
  GraduationCap,
};

// Rotating gradient accents so the grid doesn't feel monotone, while
// staying inside the blue brand palette.
const accents = [
  "from-brand-blue to-brand-sky",
  "from-brand-navy to-brand-blue",
  "from-brand-sky to-brand-blue",
  "from-brand-blue to-brand-navy",
  "from-brand-navy to-brand-sky",
  "from-brand-sky to-brand-navy",
];

export default function CourseCategories() {
  return (
    <section
      id="courses"
      className="relative py-20 sm:py-24 bg-gradient-to-b from-white via-brand-tint/50 to-white overflow-hidden"
    >
      <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-brand-sky/10 blur-3xl" />

      <div className="container-page relative">
        <div className="max-w-xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            What we teach
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-brand-navy">
            Course Categories
          </h2>
          <p className="mt-4 text-brand-slate">
            Six practical tracks, each built around real tools students will
            actually use at work.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => {
            const Icon = iconMap[course.icon as keyof typeof iconMap];
            const accent = accents[i % accents.length];
            return (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group relative rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Top accent bar, revealed on hover */}
                <span
                  className={`absolute inset-x-0 top-0 h-1 z-10 bg-gradient-to-r ${accent} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
                />

                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
                  <span
                    className={`absolute bottom-3 left-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-md`}
                  >
                    <Icon size={20} />
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="font-display font-semibold text-lg text-brand-navy">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-slate leading-relaxed">
                    {course.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-tint px-2.5 py-1 text-brand-navy font-medium">
                      <Clock size={13} /> {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-tint px-2.5 py-1 text-brand-navy font-medium">
                      <BarChart3 size={13} /> {course.level}
                    </span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                    View Course{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover"
          >
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}