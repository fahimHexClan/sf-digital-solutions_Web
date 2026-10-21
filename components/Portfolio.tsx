import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Globe } from "lucide-react";
import { portfolio } from "@/lib/data";

export default function Portfolio({
  showAllLink = false,
  headingLevel = "h2",
}: {
  /** Show a "View all projects" link (used where the section is a teaser). */
  showAllLink?: boolean;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Our Work
            </span>
            <Heading className="mt-3 font-display font-bold text-3xl sm:text-4xl text-brand-navy">
              Recent projects
            </Heading>
            <p className="mt-4 text-brand-slate leading-relaxed">
              Websites and web apps we&apos;ve built. Each one is live, so you
              can open it and see for yourself.
            </p>
          </div>
          {showAllLink && (
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover shrink-0"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          )}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {portfolio.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col rounded-2xl bg-brand-navy overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {p.image ? (
                <div className="relative h-44 bg-brand-navy-light">
                  <Image
                    src={p.image}
                    alt={`Screenshot of ${p.title}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                // Browser-style preview shown until a screenshot is added in lib/data.ts
                <div
                  aria-hidden="true"
                  className="relative h-44 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-blue/40 flex flex-col"
                >
                  <div className="flex items-center gap-1.5 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="ml-3 flex-1 rounded-full bg-white/10 h-5" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Globe size={26} />
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand-sky/20 px-2.5 py-1 text-[11px] font-semibold text-brand-sky">
                    {p.websiteType}
                  </span>
                  {p.isDemo && (
                    <span className="rounded-full bg-amber-400/20 px-2.5 py-1 text-[11px] font-semibold text-amber-200">
                      Demo project
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display font-semibold text-lg text-white">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-blue-100/70">{p.tagline}</p>
                <p className="mt-3 text-sm text-blue-100/80 leading-relaxed">
                  {p.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-blue-100/85">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-sky" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-blue-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-sky hover:text-white transition-colors"
                >
                  {p.isDemo ? "View demo" : "Visit live site"}
                  <ArrowUpRight size={16} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
