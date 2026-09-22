import { ArrowUpRight, Globe } from "lucide-react";
import { portfolio } from "@/lib/data";

export default function Portfolio() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Our Work
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-brand-navy">
            Recent projects
          </h2>
          <p className="mt-4 text-brand-slate leading-relaxed">
            A look at websites and platforms we&apos;ve built for real
            clients.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {portfolio.map((p) => (
            <a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-brand-navy overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Browser-chrome style preview since no screenshot is set yet */}
              <div className="relative h-44 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-blue/40 flex flex-col">
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

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-semibold text-lg text-white">
                    {p.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-brand-sky shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
                <p className="mt-1 text-sm text-blue-100/70">{p.tagline}</p>
                <p className="mt-3 text-sm text-blue-100/80 leading-relaxed">
                  {p.description}
                </p>
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
