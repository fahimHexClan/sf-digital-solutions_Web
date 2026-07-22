import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  PenTool,
  TrendingUp,
} from "lucide-react";
import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";

const iconMap = { Code2, Globe, PenTool, TrendingUp };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return {
    title: service ? `${service.title} — SF Digital Solutions` : "Service",
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <article>
      {/* Banner */}
      <section className="relative h-64 sm:h-80 w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/60 to-brand-navy/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-page pb-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white"
            >
              <ArrowLeft size={16} /> Back to Services
            </Link>
            <div className="mt-3 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue text-white shrink-0">
                <Icon size={22} />
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-16">
        <div className="container-page grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <p className="text-lg text-brand-ink leading-relaxed">
              {service.description}
            </p>

            <div>
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
                What&apos;s included
              </h2>
              <ul className="space-y-3">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex gap-3 text-brand-ink">
                    <CheckCircle2 size={20} className="shrink-0 text-brand-blue mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">
                How we work
              </h2>
              <ol className="space-y-4">
                {service.process.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold">
                      {i + 1}
                    </span>
                    <p className="text-brand-ink pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-brand-tint/60 border border-slate-100 p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white">
                <Icon size={24} />
              </span>
              <h3 className="mt-4 font-display font-semibold text-xl text-brand-navy">
                Interested in this service?
              </h3>
              <p className="mt-2 text-sm text-brand-slate leading-relaxed">
                Tell us about your project and we&apos;ll get back to you
                with a plan and a quote.
              </p>
              <Link
                href={`https://sf-digital-solutions-lk-registratio.vercel.app/?type=service&service=${service.slug}`}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3 font-semibold text-white hover:bg-brand-blue-hover transition-colors"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-brand-tint/60 py-16">
          <div className="container-page">
            <h2 className="font-display font-semibold text-2xl text-brand-navy mb-8">
              Other Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((s, i) => (
                <ServiceCard key={s.slug} service={s} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}