import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { courses, services } from "@/lib/data";
import { CONTACT_EMAIL, LEGAL_NAME, PHONE_DISPLAY } from "@/lib/site";
import { SUPABASE_ENABLED } from "@/lib/supabase";

function Facebook(props: { size?: number }) {
  return (
    <svg width={props.size ?? 16} height={props.size ?? 16} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.9.25-1.5 1.5-1.5h1.6V4.3c-.28-.04-1.24-.13-2.36-.13-2.34 0-3.94 1.43-3.94 4.05V10.5H8v3h2.3V21h3.2Z" />
    </svg>
  );
}

function Instagram(props: { size?: number }) {
  return (
    <svg width={props.size ?? 16} height={props.size ?? 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Youtube(props: { size?: number }) {
  return (
    <svg width={props.size ?? 16} height={props.size ?? 16} viewBox="0 0 24 24" fill="currentColor">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 9.7v4.6l4-2.3-4-2.3Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-brand-navy text-blue-100 overflow-hidden">
      {/* Decorative glow accents */}
      <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-sky/10 blur-3xl" />

      <div className="relative container-page py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href="/"
            aria-label="SF Digital Solutions LK — home"
            className="mb-4 inline-flex rounded-xl bg-white px-3 py-2 shadow-sm"
          >
            <Image
              src="/images/brand/logo-landscape.png"
              alt="SF Digital Solutions LK"
              width={146}
              height={40}
              sizes="146px"
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm text-blue-200/80 leading-relaxed">
            A training institute and digital agency — teaching job-ready
            skills, and building software, websites and marketing for
            businesses.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.facebook.com/profile.php?id=61588815615416"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-brand-blue hover:to-brand-sky transition-all"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/sfdigitalsolutions_lk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-brand-blue hover:to-brand-sky transition-all"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.youtube.com/@SfDigitalSolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-brand-blue hover:to-brand-sky transition-all"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white mb-1">Courses</h3>
          <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-sky mb-4" />
          <ul className="space-y-2.5 text-sm text-blue-200/80">
            {courses.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/courses/${c.slug}`}
                  className="hover:text-white hover:translate-x-0.5 inline-block transition-all"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white mb-1">Services</h3>
          <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-sky mb-4" />
          <ul className="space-y-2.5 text-sm text-blue-200/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="hover:text-white hover:translate-x-0.5 inline-block transition-all"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white mb-1">Quick Links</h3>
          <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-sky mb-4" />
          <ul className="space-y-2.5 text-sm text-blue-200/80">
            <li><Link href="/" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Home</Link></li>
            {SUPABASE_ENABLED && (
              <li><Link href="/account" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">My Account</Link></li>
            )}
            <li><Link href="/roadmap" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Free Learning Roadmap</Link></li>
            <li><Link href="/ecosystem" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Our Divisions</Link></li>
            <li><Link href="/portfolio" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Portfolio</Link></li>
            <li><Link href="/teachers" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Our Instructor</Link></li>
            <li><Link href="/resources" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Free Resources</Link></li>
            <li><Link href="/shop" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Shop</Link></li>
            <li><Link href="/corporate-training" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Corporate Training</Link></li>
            <li><Link href="/blog" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white mb-1">Contact</h3>
          <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-sky mb-4" />
          <ul className="space-y-3 text-sm text-blue-200/80">
            <li className="flex gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 text-brand-sky">
                <MapPin size={13} />
              </span>
              <span className="pt-0.5">Online-Based — Sri Lanka</span>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 text-brand-sky">
                <Phone size={13} />
              </span>
              <span className="pt-0.5">{PHONE_DISPLAY}</span>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 text-brand-sky">
                <Mail size={13} />
              </span>
              <span className="pt-0.5">{CONTACT_EMAIL}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page py-5 text-xs text-blue-200/60 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} {LEGAL_NAME}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/payment-policy" className="hover:text-white transition-colors">Payment Policy</Link>
            <Link href="/delivery-support" className="hover:text-white transition-colors">Delivery &amp; Support</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}