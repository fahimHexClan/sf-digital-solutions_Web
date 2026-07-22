import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import CourseCategories from "@/components/CourseCategories";
import ServicesSection from "@/components/ServicesSection";
import TeacherCard from "@/components/TeacherCard";
import BlogCard from "@/components/BlogCard";
import { teachers, posts } from "@/lib/data";

const highlights = [
  "Small batch sizes so every student gets real attention",
  "Instructors who work in the field, not just teach it",
  "Hands-on projects you can show in an interview",
  "Flexible weekday and weekend batches",
];

export default function Home() {
  return (
    <>
      <Hero />
      <CourseCategories />
      <ServicesSection />

      {/* About snippet */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 sm:h-96">
            <div className="absolute left-0 top-0 w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/seed/sfds-classroom-students-301/800/700"
                alt="Students learning together"
                fill
                sizes="(max-width: 1024px) 60vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
              <Image
                src="https://picsum.photos/seed/sfds-teacher-mentor-302/800/700"
                alt="Instructor helping a student"
                fill
                sizes="(max-width: 1024px) 50vw, 320px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Why SF Digital Solutions
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-brand-navy">
              Skills you can actually use on day one of a job
            </h2>
            <p className="mt-4 text-brand-slate leading-relaxed">
              We started SF Digital Solutions to close the gap between
              classroom theory and what employers actually expect. Every
              course is built around real tools, real projects, and small
              class sizes.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-brand-ink">
                  <CheckCircle2 size={20} className="shrink-0 text-brand-blue" />
                  {h}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-navy px-6 py-3.5 font-semibold text-white hover:bg-brand-navy-light transition-colors"
            >
              Talk to Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Teachers preview */}
      <section className="py-20 sm:py-24 bg-brand-tint/60">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                Our Teachers
              </span>
              <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-brand-navy">
                Learn from people who do this for a living
              </h2>
            </div>
            <Link
              href="/teachers"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover shrink-0"
            >
              View All Teachers <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((t) => (
              <TeacherCard key={t.slug} teacher={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                From the Blog
              </span>
              <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-brand-navy">
                Tips, guides and updates
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover shrink-0"
            >
              View All Posts <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy">
        <div className="container-page py-16 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white max-w-xl mx-auto">
            Ready to learn a skill that actually pays off?
          </h2>
          <p className="mt-4 text-blue-100/80 max-w-lg mx-auto">
            Batches start every month. Reach out and we'll help you pick the
            right course to start with.
          </p>
          <Link
            href="https://sf-digital-solutions-lk-registratio.vercel.app"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-blue px-7 py-3.5 font-semibold text-white hover:bg-brand-blue-hover transition-colors"
          >
            Enroll Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}