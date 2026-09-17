import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, GraduationCap } from "lucide-react";
import { heroHighlights } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[640px] w-full overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-team.jpg"
          alt="Students learning practical digital skills together"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      {/* Dark gradient overlay so text stays readable, lighter toward the
          right where the photo's detail sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-brand-navy/20" />
      <div className="absolute inset-0 connector-dots opacity-10" />
      {/* Decorative glow accents */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-sky/20 blur-3xl" />
      <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 py-20 sm:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-sky px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase shadow-md shadow-brand-blue/30">
              <Sparkles size={13} /> Computer Training Institute
            </span>
            <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-white [text-shadow:0_2px_20px_rgba(11,37,69,0.5)]">
              Practical digital skills, taught by people who{" "}
              <span className="bg-gradient-to-r from-brand-sky to-blue-300 bg-clip-text text-transparent">
                build for a living
              </span>
            </h1>
            <p className="mt-5 text-blue-100/85 text-base sm:text-lg max-w-xl">
              SF Digital Solutions trains students in Web Development, Graphic
              Design, Digital Marketing and more, and builds real software and
              websites for businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-blue to-brand-sky px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-0.5 transition-all"
              >
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 backdrop-blur px-6 py-3.5 font-semibold text-white border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all"
              >
                Talk to Us
              </Link>
            </div>

            {/* Highlight badges — no unverified numbers, just what we offer */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {heroHighlights.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-50"
                >
                  <CheckCircle2 size={16} className="text-brand-sky shrink-0" />
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating badge card, echoing the photo's energy without fake numbers */}
        <div className="hidden lg:flex absolute bottom-10 right-10 xl:right-16 items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-5 py-4 shadow-xl">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky text-white shadow-md shrink-0">
            <GraduationCap size={20} />
          </span>
          <div className="max-w-[190px]">
            <p className="text-sm font-semibold text-white leading-snug">
              Learn. Build. Get Job-Ready.
            </p>
            <p className="text-xs text-blue-100/75 mt-0.5">
              Hands-on training, not just theory.
            </p>
          </div>
        </div>
      </div>

      {/* Soft curved divider into the section below */}
      <svg
        className="absolute bottom-0 left-0 w-full text-white"
        viewBox="0 0 1440 40"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M0 40C240 10 480 0 720 0C960 0 1200 10 1440 40H0Z" fill="currentColor" />
      </svg>
    </section>
  );
}
