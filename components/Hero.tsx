import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
  Users,
  BookOpen,
  Award,
  Clock,
} from "lucide-react";
import { stats } from "@/lib/data";

const statIcons = [Users, BookOpen, Award, Clock];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/95 via-brand-navy/90 to-brand-navy/95" />
      <div className="absolute inset-0 connector-dots opacity-10" />
      {/* Decorative glow accents */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-brand-sky/15 blur-3xl" />

      <div className="container-page relative pt-14 pb-24 sm:pt-20 sm:pb-28">
        {/* Headline row */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-sky px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase shadow-md shadow-brand-blue/30">
            <Sparkles size={13} /> Computer Training Institute
          </span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl leading-[1.12] text-white">
            Practical digital skills, taught by people who{" "}
            <span className="bg-gradient-to-r from-brand-sky to-blue-300 bg-clip-text text-transparent">
              build for a living
            </span>
          </h1>
          <p className="mt-5 text-blue-100/80 text-base sm:text-lg max-w-xl">
            SF Digital Solutions trains students in Web Development, Graphic
            Design, Digital Marketing and more, and builds real software and
            websites for businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-blue to-brand-sky px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-shadow"
            >
              Explore Courses <ArrowRight size={18} />
            </Link>
            <Link
              href="/teachers"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 backdrop-blur px-6 py-3.5 font-semibold text-white border border-white/20 hover:bg-white/20 transition-colors"
            >
              Meet Our Teachers
            </Link>
          </div>
        </div>

        {/* Photo + info card row */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-80 sm:h-[26rem]">
            <div className="absolute -inset-1.5 rounded-[2.2rem] bg-gradient-to-br from-brand-blue via-brand-sky to-brand-navy opacity-50 blur-md" />
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white/10">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop"
                alt="SF Digital Solutions student"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover"
              />
            </div>

            {/* Floating "students trained" card */}
            <div className="absolute bottom-5 right-4 sm:-right-6 rounded-2xl bg-white shadow-2xl px-5 py-4 flex items-center gap-3">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
                ].map((src) => (
                  <div
                    key={src}
                    className="relative h-9 w-9 rounded-full overflow-hidden ring-2 ring-white"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-display font-bold text-brand-navy text-sm sm:text-base leading-none">
                  {stats[0].value}
                </p>
                <p className="text-xs text-brand-slate mt-1">{stats[0].label}</p>
              </div>
            </div>
          </div>

          {/* White info card */}
          <div className="relative rounded-2xl bg-white shadow-2xl p-7 sm:p-8 overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-sky to-brand-navy" />
            <div className="flex items-start gap-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky text-white shadow-md shadow-brand-blue/30">
                <GraduationCap size={28} />
              </span>
              <div>
                <p className="font-display font-extrabold text-3xl text-brand-navy leading-none">
                  {stats[1].value}
                </p>
                <p className="text-xs uppercase tracking-wide text-brand-slate mt-1.5">
                  {stats[1].label}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm text-brand-slate leading-relaxed">
              Every course is built around real tools and real projects, so
              what students learn in class is exactly what employers expect
              on day one.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://sf-digital-solutions-lk-registratio.vercel.app"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue to-brand-sky px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-blue/25 hover:shadow-lg transition-shadow"
              >
                Get Started
              </Link>
              <Link
                href="/courses"
                aria-label="Explore courses"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              >
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-brand-navy/60 backdrop-blur">
        <div className="container-page grid grid-cols-2 sm:grid-cols-4 gap-6 py-8">
          {stats.map((s, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <div key={s.label} className="flex items-center gap-3">
                <span className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-sky">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {s.value}
                  </p>
                  <p className="text-xs sm:text-sm text-blue-200/70 mt-1">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}