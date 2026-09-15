import Link from "next/link";
import {
  ArrowRight,
  Target,
  GraduationCap,
  Laptop,
  BookOpen,
  Award,
  Rocket,
  Briefcase,
  TrendingUp,
  Building2,
} from "lucide-react";
import Hero from "@/components/Hero";
import CourseCategories from "@/components/CourseCategories";
import ServicesSection from "@/components/ServicesSection";
import TeacherCard from "@/components/TeacherCard";
import BlogCard from "@/components/BlogCard";
import { teachers, posts } from "@/lib/data";

const audiences = [
  {
    icon: GraduationCap,
    title: "I'm a Student",
    description: "Build practical IT skills for your future.",
    href: "/courses/professional-computer-basics-course",
  },
  {
    icon: Briefcase,
    title: "I'm Looking for a Job",
    description: "Learn workplace-ready digital skills.",
    href: "/courses/professional-computer-basics-course",
  },
  {
    icon: TrendingUp,
    title: "I'm a Professional",
    description: "Upgrade your skills and productivity.",
    href: "/courses/professional-computer-basics-course",
  },
  {
    icon: Building2,
    title: "I Own a Business",
    description: "Get websites, software & digital solutions.",
    href: "/services",
  },
];

const whyUs = [
  {
    icon: Target,
    title: "Practical Learning",
    description: "Learn skills through practical examples and real-world tasks.",
  },
  {
    icon: GraduationCap,
    title: "Beginner Friendly",
    description: "Our training is designed for beginners with step-by-step guidance.",
  },
  {
    icon: Laptop,
    title: "Online Learning",
    description: "Learn from anywhere through online classes and recorded learning materials.",
  },
  {
    icon: BookOpen,
    title: "Learning Support",
    description: "Students receive learning resources and guidance throughout the course.",
  },
  {
    icon: Award,
    title: "Certificate",
    description: "Course completion certificate for eligible students.",
  },
  {
    icon: Rocket,
    title: "Career Focused",
    description: "Build practical skills that can support your education, job search and career growth.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* What are you looking for? — persona quick nav */}
      <section className="py-16 sm:py-20 bg-brand-tint/60">
        <div className="container-page">
          <h2 className="text-center font-display font-bold text-2xl sm:text-3xl text-brand-navy">
            What are you looking for?
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky text-white shadow-md shadow-brand-blue/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-display font-semibold text-brand-navy">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm text-brand-slate leading-relaxed">
                  {description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CourseCategories />
      <ServicesSection />

      {/* About / Why SF Digital Solutions */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              About SF Digital Solutions
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-brand-navy">
              Why Choose SF Digital Solutions?
            </h2>
            <p className="mt-4 text-brand-slate leading-relaxed">
              SF Digital Solutions is an online-based IT education and digital
              solutions brand in Sri Lanka, helping students, job seekers and
              professionals develop practical digital skills while providing
              affordable digital solutions for businesses.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-brand-tint/60 border border-slate-100 p-6 hover:shadow-md transition-shadow"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky text-white shadow-md shadow-brand-blue/20">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-display font-semibold text-brand-navy">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm text-brand-slate leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-brand-navy px-6 py-3.5 font-semibold text-white hover:bg-brand-navy-light transition-colors"
          >
            Talk to Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Teacher preview */}
      <section className="py-20 sm:py-24 bg-brand-tint/60">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                Our Instructor
              </span>
              <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-brand-navy">
                Learn from someone who does this for a living
              </h2>
            </div>
            <Link
              href="/teachers"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover shrink-0"
            >
              Meet the Instructor <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xs sm:max-w-2xl">
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