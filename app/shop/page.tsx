import type { Metadata } from "next";
import PageCover from "@/components/PageCover";
import DigitalProductsStore from "@/components/DigitalProductsStore";
import RecordedCourses from "@/components/RecordedCourses";
import { digitalProducts, digitalBundles, recordedCourses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Recorded courses, guides and templates from SF Digital Solutions — self-paced learning and premium resources, ready to buy.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <>
      <PageCover
        eyebrow="Shop"
        title="Learn at your own pace, or grab a guide"
        description="Recorded courses with lifetime access, plus premium guides and templates you can download today."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Recorded Courses
          </span>
          <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-brand-navy">
            Self-paced, lifetime access
          </h2>
          <p className="mt-3 text-brand-slate max-w-xl">
            Prefer to learn on your own schedule? Get the same course
            content as a recorded video course, delivered through our LMS.
          </p>
          <div className="mt-8">
            <RecordedCourses courses={recordedCourses} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-brand-tint/60">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Digital Products
          </span>
          <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-brand-navy">
            Guides and templates worth paying for
          </h2>
          <p className="mt-3 text-brand-slate max-w-xl">
            A step up from our free resources — premium, ready-to-use guides
            and templates you can download today.
          </p>
          <div className="mt-8">
            <DigitalProductsStore products={digitalProducts} bundle={digitalBundles[0]} />
          </div>
        </div>
      </section>
    </>
  );
}
