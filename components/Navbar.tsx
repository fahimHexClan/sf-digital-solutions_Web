"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/services", label: "Services" },
  { href: "/teachers", label: "Teachers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-navy text-white">
            <GraduationCap size={20} />
          </span>
          <span className="font-display font-bold text-brand-navy text-lg leading-tight">
            SF Digital
            <span className="block text-xs font-sans font-normal text-brand-slate -mt-0.5">
              Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-ink hover:text-brand-blue transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://sf-digital-solutions-lk-registratio.vercel.app"
          className="hidden md:inline-flex items-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-hover transition-colors"
        >
          Enroll Now
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <nav className="container-page flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-brand-ink border-b border-slate-50 last:border-none"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="https://sf-digital-solutions-lk-registratio.vercel.app"
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 inline-flex items-center justify-center rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white"
            >
              Enroll Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}