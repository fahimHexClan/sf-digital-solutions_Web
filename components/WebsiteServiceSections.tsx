import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  LifeBuoy,
  MessageSquare,
  PackageCheck,
  ShieldAlert,
} from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { whatsappLink } from "@/lib/site";
import {
  CONFIRMED_IN_QUOTATION,
  handoverItems,
  milestones,
  paidExtras,
  paymentSteps,
  processSteps,
  websiteOfferings,
  websitePackages,
  websitePolicy,
} from "@/lib/websiteConfig";

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display font-bold text-3xl text-brand-navy">{title}</h2>
      {intro && <p className="mt-3 text-brand-slate leading-relaxed">{intro}</p>}
    </div>
  );
}

const ctaClass =
  "inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-hover transition-colors";

export default function WebsiteServiceSections() {
  return (
    <>
      {/* What we build */}
      <section id="website-services" className="py-16 bg-brand-tint/60 scroll-mt-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we build"
            title="Website services"
            intro="Choose the kind of website you need. Every project starts with a conversation and a written quotation."
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {websiteOfferings.map((o) => (
              <div key={o.title} className="flex flex-col rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
                <h3 className="font-display font-semibold text-brand-navy">{o.title}</h3>
                <p className="mt-2 flex-1 text-sm text-brand-slate leading-relaxed">{o.description}</p>
                <Link
                  href="#quote"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover"
                >
                  Request a Quote <ArrowRight size={15} />
                  <span className="sr-only"> for {o.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 scroll-mt-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Pricing"
            title="Website packages"
            intro="Every website is different, so we confirm the price in a written quotation after we understand your needs. Packages show what each option is designed for."
          />
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {websitePackages.map((pkg) => {
              const rows: [string, string][] = [
                ["Pages / scope", pkg.scope],
                ["Responsive design", pkg.responsive ? "Included (mobile, tablet, desktop)" : "Not included"],
                ["Delivery timeline", pkg.timeline ?? CONFIRMED_IN_QUOTATION],
                ["Revisions", pkg.revisions ?? CONFIRMED_IN_QUOTATION],
                ["Domain & hosting", pkg.domainHosting ?? "Not included unless your quotation says so"],
                ["Support period", pkg.support ?? websitePolicy.supportPeriod ?? CONFIRMED_IN_QUOTATION],
              ];
              return (
                <div key={pkg.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-display font-bold text-xl text-brand-navy">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-brand-slate">{pkg.forWhom}</p>
                  <p className="mt-4 font-display font-bold text-2xl text-brand-blue">
                    {pkg.price ?? "Request a Quote"}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-brand-ink">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-blue" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-sm flex-1">
                    {rows.map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-brand-slate">{k}</dt>
                        <dd className="mt-0.5 text-brand-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <Link href="#quote" className={`${ctaClass} mt-6`}>
                    Request a Quote<span className="sr-only"> for the {pkg.name}</span>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-brand-tint/60 border border-slate-100 p-6">
              <h3 className="font-display font-semibold text-brand-navy">Included in every project</h3>
              <ul className="mt-3 space-y-2 text-sm text-brand-ink">
                {[
                  "Everything listed in your written quotation",
                  "Responsive design that works on phones, tablets and computers",
                  "Testing before delivery",
                  "Progress updates at the agreed milestones",
                  "Handover and the agreed support",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-blue" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6">
              <h3 className="font-display font-semibold text-brand-navy">Paid extras (not included unless your quotation says so)</h3>
              <ul className="mt-3 space-y-2 text-sm text-brand-ink list-disc pl-5">
                {paidExtras.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 bg-brand-tint/60 scroll-mt-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our process"
            title="How a website project works"
            intro="Five clear steps from your first message to a finished website."
          />
          <ol className="mt-8 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {processSteps.map((s, i) => (
              <li key={s.title} className="rounded-2xl bg-white border border-slate-100 p-5 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-white text-sm font-bold">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display font-semibold text-brand-navy">{s.title}</h3>
                <p className="mt-1.5 text-sm text-brand-slate leading-relaxed">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Project updates */}
      <section id="updates" className="py-16 scroll-mt-20">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeading
              eyebrow="Staying informed"
              title="Regular project updates"
              intro="We keep you updated through WhatsApp or email, depending on the method we agree with you. At each milestone you can review the work and give feedback."
            />
            <p className="mt-4 text-sm text-brand-slate leading-relaxed">
              How often you hear from us, and how quickly we reply, is agreed with
              you at the start of the project.
            </p>
            <a
              href={whatsappLink("Hi! I have a question about my website project.")}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaClass} mt-6`}
            >
              <MessageSquare size={16} /> Ask About Your Project
            </a>
          </div>
          <ol className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
            {milestones.map((m, i) => (
              <li key={m} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-brand-ink">{m}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Payment */}
      <section id="payment" className="py-16 bg-brand-tint/60 scroll-mt-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Payments"
            title="Secure bank transfer payments"
            intro="We currently accept payments by bank transfer. We don't use an online payment gateway, and payments are confirmed by us after the transfer."
          />
          <div className="mt-8 grid lg:grid-cols-5 gap-6">
            <ol className="lg:col-span-3 rounded-2xl bg-white border border-slate-100 p-6 shadow-sm space-y-3">
              {paymentSteps.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm text-brand-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{s}</span>
                </li>
              ))}
            </ol>
            <div className="lg:col-span-2 space-y-4">
              <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
                <h3 className="flex items-center gap-2 font-display font-semibold text-red-800">
                  <ShieldAlert size={18} /> Stay safe
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-red-900 list-disc pl-5">
                  <li>We will never ask for your online banking password, PIN or OTP.</li>
                  <li>Our bank details are not published on this website. We share them privately once your quotation is confirmed.</li>
                  <li>Always use the payment reference we give you.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-display font-semibold text-brand-navy">
                  <Banknote size={18} /> Payment policy
                </h3>
                <p className="mt-2 text-sm text-brand-slate">Read the full details of how payments, receipts and milestones work.</p>
                <Link href="/payment-policy" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover">
                  View Payment Policy <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery & support */}
      <section id="delivery" className="py-16 scroll-mt-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="After the build"
            title="Delivery & support"
            intro="What you receive when your website is finished, and what support covers."
          />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-display font-semibold text-brand-navy">
                <PackageCheck size={18} className="text-brand-blue" /> Website handover
              </h3>
              <p className="mt-2 text-xs text-brand-slate">Depending on the agreed scope, handover may include:</p>
              <ul className="mt-3 space-y-2 text-sm text-brand-ink list-disc pl-5">
                {handoverItems.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-display font-semibold text-brand-navy">
                <LifeBuoy size={18} className="text-brand-blue" /> Bug-fix support
              </h3>
              <p className="mt-3 text-sm text-brand-slate leading-relaxed">
                Eligible defects in the agreed deliverables can be reported during the support period.
                Support period: <strong className="text-brand-ink">{websitePolicy.supportPeriod ?? "specified in your quotation"}</strong>.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="font-display font-semibold text-brand-navy">Maintenance is separate</h3>
              <p className="mt-3 text-sm text-brand-slate leading-relaxed">
                Ongoing maintenance, content updates, new features and hosting charges are different from bug-fix
                support and are quoted separately.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-brand-slate">
            Source code, third-party licences and account transfers are included only when your agreement says so.{" "}
            <Link href="/delivery-support" className="font-semibold text-brand-blue hover:text-brand-blue-hover">
              Read the Delivery &amp; Support Policy
            </Link>
            {" · "}
            <Link href="/terms" className="font-semibold text-brand-blue hover:text-brand-blue-hover">
              Project Terms
            </Link>
          </p>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="py-16 bg-brand-tint/60 scroll-mt-20">
        <div className="container-page grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Get started"
              title="Request a quote"
              intro="Tell us about your website. We'll reply with questions and a written quotation. There's no obligation."
            />
            <p className="mt-4 text-sm text-brand-slate">
              Prefer to talk? <Link href="/contact" className="font-semibold text-brand-blue hover:text-brand-blue-hover">Contact us</Link>
              {" "}or{" "}
              <a href={whatsappLink("Hi! I'd like to discuss a website project.")} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-blue hover:text-brand-blue-hover">
                discuss your project on WhatsApp
              </a>.
            </p>
          </div>
          <div className="lg:col-span-3 rounded-2xl bg-white border border-slate-100 shadow-lg p-6 sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
