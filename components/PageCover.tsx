import Image from "next/image";

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

      <div className="container-page relative py-16 sm:py-20">
        <span className="inline-block rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-sky uppercase">
          {eyebrow}
        </span>
        <h1 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-white max-w-2xl">
          {title}
        </h1>
        <p className="mt-4 text-blue-100/80 max-w-xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}