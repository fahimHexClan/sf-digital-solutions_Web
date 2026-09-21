import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import { posts } from "@/lib/data";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import BlogCard from "@/components/BlogCard";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* Banner */}
      <section className="relative h-64 sm:h-80 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-brand-navy/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-page pb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <span className="mt-4 inline-block rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold text-white">
              {post.category}
            </span>
            <h1 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-white max-w-3xl">
              {post.title}
            </h1>
            <div className="mt-3 flex flex-wrap gap-5 text-sm text-blue-100">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={16} /> {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <User size={16} /> {post.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-16">
        <div className="container-page max-w-3xl">
          <div className="space-y-5">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-brand-ink leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-6 py-3 font-semibold text-white hover:bg-brand-blue-hover transition-colors"
            >
              Talk to Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-brand-tint/60 py-16">
          <div className="container-page">
            <h2 className="font-display font-semibold text-2xl text-brand-navy mb-8">
              More From the Blog
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
