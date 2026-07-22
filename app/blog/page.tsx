import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import PageCover from "@/components/PageCover";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — SF Digital Solutions",
};

export default function BlogPage() {
  return (
    <>
      <PageCover
        eyebrow="Blog"
        title="Guides, tips & updates"
        description="Practical write-ups on the skills we teach and the industry around them."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}