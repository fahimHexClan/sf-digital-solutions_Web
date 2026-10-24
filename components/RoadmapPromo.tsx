import Link from "next/link";
import { ArrowRight, Map } from "lucide-react";

export default function RoadmapPromo() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-center gap-8 rounded-3xl border border-brand-blue/15 bg-brand-tint/60 p-8 sm:p-10">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-blue text-white">
            <Map size={30} />
          </span>
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">Free tool</p>
            <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-brand-navy">
              Not sure where to start? Get a free learning roadmap
            </h2>
            <p className="mt-2 text-brand-slate max-w-2xl">
              Choose your goal, your level and how many hours you can study each week. You get a step-by-step
              plan, practice projects and the courses that match. No sign-up needed.
            </p>
          </div>
          <Link
            href="/roadmap"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3 font-semibold text-white hover:bg-brand-blue-hover transition-colors"
          >
            Plan My Roadmap <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
