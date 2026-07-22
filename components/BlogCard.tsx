import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/lib/data";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <article className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-cover"
        />
        <span className="absolute top-4 left-4 rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold text-white">
          {post.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-brand-slate">{post.date}</p>
        <h3 className="mt-2 font-display font-semibold text-brand-navy text-lg leading-snug">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-brand-slate leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover"
        >
          Read More <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
