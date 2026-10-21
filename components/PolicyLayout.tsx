import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { CONTACT_EMAIL, whatsappLink } from "@/lib/site";
import { websitePolicy } from "@/lib/websiteConfig";

const related = [
  { href: "/terms", label: "Project Terms" },
  { href: "/payment-policy", label: "Payment Policy" },
  { href: "/delivery-support", label: "Delivery & Support Policy" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function PolicyLayout({
  title,
  intro,
  current,
  children,
}: {
  title: string;
  intro: string;
  current: string;
  children: React.ReactNode;
}) {
  return (
    <article className="py-14 sm:py-16">
      <div className="container-page max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          SF Digital Solutions LK
        </p>
        <h1 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-brand-navy">
          {title}
        </h1>
        <p className="mt-2 text-xs text-brand-slate">Last updated: {websitePolicy.lastUpdated}</p>
        <p className="mt-5 text-lg text-brand-ink leading-relaxed">{intro}</p>

        <div className="mt-10 space-y-8 text-brand-ink leading-relaxed [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-xl [&_h2]:text-brand-navy [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1.5 [&_a]:text-brand-blue [&_a]:font-medium [&_a:hover]:underline">
          {children}
        </div>

        <aside className="mt-12 rounded-2xl bg-brand-tint/60 border border-slate-100 p-6">
          <h2 className="font-display font-semibold text-brand-navy">Questions?</h2>
          <p className="mt-1 text-sm text-brand-slate">
            Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brand-blue hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            or message us on WhatsApp.
          </p>
          <a
            href={whatsappLink("Hi! I have a question about your policies.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover"
          >
            <MessageSquare size={16} /> Chat on WhatsApp
          </a>
          <nav aria-label="Related policies" className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-200 pt-4 text-sm">
            {related
              .filter((r) => r.href !== current)
              .map((r) => (
                <Link key={r.href} href={r.href} className="font-medium text-brand-blue hover:underline">
                  {r.label}
                </Link>
              ))}
          </nav>
        </aside>
      </div>
    </article>
  );
}
