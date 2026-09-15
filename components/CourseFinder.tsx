"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  Clock,
  BarChart3,
} from "lucide-react";
import { courses } from "@/lib/data";

const goals = [
  { label: "Get an Office Job", courseSlug: "professional-computer-basics-course" },
  { label: "Improve Computer Skills", courseSlug: "professional-computer-basics-course" },
  { label: "Learn Design", courseSlug: "graphic-design" },
  { label: "Build Websites", courseSlug: "web-development" },
  { label: "Learn Digital Marketing", courseSlug: "digital-marketing" },
] as const;

export default function CourseFinder() {
  const [selected, setSelected] = useState<string | null>(null);

  const recommended = selected
    ? courses.find((c) => c.slug === goals.find((g) => g.label === selected)?.courseSlug)
    : null;

  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy to-brand-navy-light overflow-hidden p-8 sm:p-12">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-sky/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
              <Sparkles size={13} /> Course Finder
            </span>
            <h2 className="mt-4 font-display font-bold text-2xl sm:text-3xl text-white max-w-lg">
              What is your goal?
            </h2>
            <p className="mt-2 text-blue-100/75 max-w-lg">
              Pick what you&apos;re trying to achieve and we&apos;ll point you
              to the right course.
            </p>

            {/* Goal buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              {goals.map((g) => (
                <button
                  key={g.label}
                  onClick={() => setSelected(g.label)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    selected === g.label
                      ? "bg-gradient-to-r from-brand-blue to-brand-sky text-white shadow-md shadow-brand-blue/30"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>

            {/* Recommendation result */}
            {recommended && (
              <div className="mt-8 rounded-2xl bg-white p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <div className="relative h-24 w-full sm:w-32 sm:h-24 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={recommended.image}
                    alt={recommended.title}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                    Recommended for you
                  </p>
                  <h3 className="mt-1 font-display font-semibold text-lg text-brand-navy flex items-center gap-2 flex-wrap">
                    {recommended.title}
                    {recommended.comingSoon && (
                      <span className="rounded-full bg-brand-navy/90 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                        Coming Soon
                      </span>
                    )}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-4 text-xs text-brand-slate">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} /> {recommended.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <BarChart3 size={13} /> {recommended.level}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <Link
                    href={`/courses/${recommended.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-hover transition-colors"
                  >
                    {recommended.comingSoon ? "Learn More" : "View Course"}{" "}
                    <ArrowRight size={15} />
                  </Link>
                  <button
                    onClick={() => setSelected(null)}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-brand-slate hover:text-brand-ink"
                  >
                    <RotateCcw size={12} /> Try again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
