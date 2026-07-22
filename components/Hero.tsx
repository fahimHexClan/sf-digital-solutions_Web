import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, GraduationCap } from "lucide-react";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/sfds-classroom-students-77/1600/1200"
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

      <div className="container-page relative pt-14 pb-24 sm:pt-20 sm:pb-28">
        {/* Headline row */}
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-sky uppercase">
            Computer Training Institute
          </span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl leading-[1.12] text-white">
            Practical digital skills, taught by people who{" "}
            <span className="text-brand-sky">build for a living</span>
          </h1>
          <p className="mt-5 text-blue-100/80 text-base sm:text-lg max-w-xl">
            SF Digital Solutions trains students in Web Development, Graphic
            Design, Digital Marketing and more, and builds real software and
            websites for businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-6 py-3.5 font-semibold text-white hover:bg-brand-blue-hover transition-colors"
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
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white/10">
              <Image
                src="https://picsum.photos/seed/sfds-student-laptop-42/900/1100"
                alt="SF Digital Solutions student"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover"
              />
            </div>

            {/* Floating "students trained" card */}
            <div className="absolute bottom-5 right-4 sm:-right-6 rounded-2xl bg-white shadow-xl px-5 py-4 flex items-center gap-3">
              <div className="flex -space-x-3">
                {[11, 22, 33].map((lock) => (
                  <div
                    key={lock}
                    className="relative h-9 w-9 rounded-full overflow-hidden ring-2 ring-white"
                  >
                    <Image
                      src={`https://loremflickr.com/80/80/face,portrait?lock=${lock}`}
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
          <div className="rounded-2xl bg-white shadow-2xl p-7 sm:p-8">
            <div className="flex items-start gap-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
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
                className="inline-flex items-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-hover transition-colors"
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

      <div className="relative border-t border-white/10 bg-brand-navy">
        <div className="container-page grid grid-cols-2 sm:grid-cols-4 gap-6 py-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm text-blue-200/70 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}