import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { heroHighlights } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"
          alt="Students working together at SF Digital Solutions"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      {/* Dark gradient overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-brand-navy/30" />
      <div className="absolute inset-0 connector-dots opacity-10" />
      {/* Decorative glow accents */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-brand-sky/15 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 py-20 sm:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-sky px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase shadow-md shadow-brand-blue/30">
              <Sparkles size={13} /> Computer Training Institute
            </span>
            <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-white">
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
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-blue to-brand-sky px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-shadow"
              >
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 backdrop-blur px-6 py-3.5 font-semibold text-white border border-white/20 hover:bg-white/20 transition-colors"
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
      </div>
    </section>
  );
}
