import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function PageCover({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/95 via-brand-navy/90 to-brand-navy/95" />
      <div className="absolute inset-0 connector-dots opacity-10" />
      {/* Decorative glow accents */}
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-brand-sky/15 blur-3xl" />

      <div className="container-page relative py-16 sm:py-20">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-sky px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase shadow-md shadow-brand-blue/30">
          <Sparkles size={13} /> {eyebrow}
        </span>
        <h1 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-white max-w-2xl">
          {title}
        </h1>
        <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-brand-blue to-brand-sky" />
        <p className="mt-4 text-blue-100/80 max-w-xl leading-relaxed">
          {description}
        </p>
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