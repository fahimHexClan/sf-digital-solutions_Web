import Image from "next/image";
import Link from "next/link";
import { Code2, Globe, PenTool, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import type { Service } from "@/lib/data";

const iconMap = { Code2, Globe, PenTool, TrendingUp };

// Rotating gradient + glow accents, cycling by index so each card gets a
// consistent but distinct shade within the blue brand palette.
const accents = [
  "from-brand-blue to-brand-sky",
  "from-brand-sky to-brand-navy",
  "from-brand-navy to-brand-blue",
  "from-brand-blue to-brand-navy",
];
const glows = [
  "group-hover:shadow-brand-blue/40",
  "group-hover:shadow-brand-sky/40",
  "group-hover:shadow-brand-navy/50",
  "group-hover:shadow-brand-blue/40",
];
const tints = [
  "bg-brand-blue/30",
  "bg-brand-sky/30",
  "bg-brand-navy/40",
  "bg-brand-blue/30",
];

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const accent = accents[index % accents.length];
  const glow = glows[index % glows.length];
  const tint = tints[index % tints.length];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col rounded-3xl bg-brand-navy overflow-visible shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ring-1 ring-white/5 hover:ring-brand-sky/30"
    >
      <div className="relative rounded-t-3xl h-36 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, 320px"
          className="object-cover scale-105 group-hover:scale-115 transition-transform duration-500"
        />
        {/* Duotone color wash matching the card's accent */}
        <div className={`absolute inset-0 ${tint} mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
      </div>

      {/* Icon straddles the image/content boundary for a layered, premium feel */}
      <div className="relative px-6">
        <span
          className={`absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg ring-4 ring-brand-navy transition-all duration-300 ${glow} group-hover:scale-110`}
        >
          <Icon size={24} />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-10">
        <h3 className="font-display font-semibold text-lg text-white">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-blue-100/75 leading-relaxed">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2.5 flex-1">
          {service.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2.5 text-sm text-blue-100/90">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-sky/15">
                <CheckCircle2 size={12} className="text-brand-sky" />
              </span>
              {d}
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-sky group-hover:gap-2.5 transition-all duration-300">
            View Service <ArrowRight size={14} />
          </span>
          <span
            className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          />
        </div>
      </div>
    </Link>
  );
}