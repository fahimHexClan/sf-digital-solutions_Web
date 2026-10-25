import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { courses, services, posts } from "@/lib/data";
import { toIsoDate } from "@/lib/format";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/courses`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/teachers`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/resources`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/shop`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/corporate-training`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/roadmap`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/ecosystem`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/portfolio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/payment-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/delivery-support`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = courses.map((c) => ({
    url: `${SITE_URL}/courses/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(toIsoDate(p.date)),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes, ...serviceRoutes, ...blogRoutes];
}
