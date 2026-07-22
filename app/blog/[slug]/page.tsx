import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  BarChart3,
  CheckCircle2,
  Code2,
  PenTool,
  TrendingUp,
  Monitor,
  Network,
  LineChart,
} from "lucide-react";
import { courses } from "@/lib/data";
import CourseCard from "@/components/CourseCard";

const iconMap = { Code2, PenTool, TrendingUp, Monitor, Network, LineChart };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  return {
    title: course ? `${course.title} — SF Digital Solutions` : "Course",
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const Icon = iconMap[course.icon as keyof typeof iconMap];
  const related = courses.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <article>
      {/* Banner */}
      <section className="relative h-64 sm:h-80 w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-brand-navy/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-page pb-8">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white"
            >
              <ArrowLeft size={16} /> Back to Courses
            </Link>
            <h1 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-white">
              {course.title}
            </h1>
            <div className="mt-3 flex flex-wrap gap-5 text-sm text-blue-100">
              <span className="inline-flex items-center gap-1.5">
                <Clock size={16} /> {course.duration}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BarChart3 size={16} /> {course.level}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-16">
        <div className="container-page grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-lg text-brand-ink leading-relaxed">
                {course.description}
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
                Who this course is for
              </h2>
              <p className="text-brand-slate leading-relaxed">{course.whoFor}</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
                What you&apos;ll learn
              </h2>
              <ul className="space-y-3">
                {course.curriculum.map((item, i) => (
                  <li key={i} className="flex gap-3 text-brand-ink">
                    <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
                By the end, you&apos;ll be able to
              </h2>
              <ul className="space-y-3">
                {course.outcomes.map((item, i) => (
                  <li key={i} className="flex gap-3 text-brand-ink">
                    <CheckCircle2 size={20} className="shrink-0 text-brand-blue mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-brand-tint/60 border border-slate-100 p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white">
                <Icon size={24} />
              </span>
              <h3 className="mt-4 font-display font-semibold text-xl text-brand-navy">
                {course.title}
              </h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-brand-slate">Duration</dt>
                  <dd className="font-medium text-brand-ink">{course.duration}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-brand-slate">Level</dt>
                  <dd className="font-medium text-brand-ink">{course.level}</dd>
                </div>
              </dl>
              <Link
                href="/contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3 font-semibold text-white hover:bg-brand-blue-hover transition-colors"
              >
                Enroll Now <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related courses */}
      {related.length > 0 && (
        <section className="bg-brand-tint/60 py-16">
          <div className="container-page">
            <h2 className="font-display font-semibold text-2xl text-brand-navy mb-8">
              Other Courses
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}