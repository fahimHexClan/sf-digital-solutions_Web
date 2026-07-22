import Image from "next/image";
import Link from "next/link";
import { Clock, BarChart3, ArrowRight } from "lucide-react";
import type { Course } from "@/lib/data";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-brand-blue/40 transition-all flex flex-col"
    >
      <div className="relative h-44 w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-brand-navy">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-brand-slate leading-relaxed flex-1">
          {course.description}
        </p>
        <div className="mt-5 flex items-center gap-4 text-xs text-brand-slate">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BarChart3 size={14} /> {course.level}
          </span>
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
          View Course <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}