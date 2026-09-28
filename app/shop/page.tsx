import type { Metadata } from "next";
import PageCover from "@/components/PageCover";
import DigitalProductsStore from "@/components/DigitalProductsStore";
import { digitalProducts, digitalBundles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Premium digital products from SF Digital Solutions — the Complete Office Skills Handbook and a Professional CV Template, ready to download.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <>
      <PageCover
        eyebrow="Digital Products"
        title="Guides and templates worth paying for"
        description="A step up from our free resources — premium, ready-to-use guides and templates you can download today."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <DigitalProductsStore products={digitalProducts} bundle={digitalBundles[0]} />
        </div>
      </section>
    </>
  );
}
