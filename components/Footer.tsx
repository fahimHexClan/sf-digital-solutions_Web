import Link from "next/link";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";
import { courses, services } from "@/lib/data";

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
    <footer className="bg-brand-navy text-blue-100">
      <div className="container-page py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue text-white">
              <GraduationCap size={20} />
            </span>
            <span className="font-display font-bold text-white text-lg">
              SF Digital Solutions
            </span>
          </div>
          <p className="text-sm text-blue-200/80 leading-relaxed">
            A training institute and digital agency — teaching job-ready
            skills, and building software, websites and marketing for
            businesses.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-blue transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-blue transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-blue transition-colors"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white mb-4">Courses</h3>
          <ul className="space-y-2.5 text-sm text-blue-200/80">
            {courses.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="hover:text-white transition-colors">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2.5 text-sm text-blue-200/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href="/services" className="hover:text-white transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-blue-200/80">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/teachers" className="hover:text-white transition-colors">Our Teachers</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-blue-200/80">
            <li className="flex gap-2.5">
              <MapPin size={18} className="shrink-0 text-brand-sky" />
              <span>Kalutara, Western Province, Sri Lanka</span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={18} className="shrink-0 text-brand-sky" />
              <span>+94 XX XXX XXXX</span>
            </li>
            <li className="flex gap-2.5">
              <Mail size={18} className="shrink-0 text-brand-sky" />
              <span>hello@sfdigitalsolutions.lk</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-blue-200/60 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} SF Digital Solutions. All rights reserved.</p>
          <p>Built for students who mean business.</p>
        </div>
      </div>
    </footer>
  );
}