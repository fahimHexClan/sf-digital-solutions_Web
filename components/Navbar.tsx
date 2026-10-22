"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, User, X } from "lucide-react";
import { trackEnrollClick } from "@/lib/analytics";
import { REGISTRATION_URL, LMS_URL } from "@/lib/site";
import { SUPABASE_ENABLED } from "@/lib/supabase";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resources", label: "Resources" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="container-page flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex items-center shrink-0" aria-label="SF Digital Solutions LK — home">
          <Image
            src="/images/brand/logo-landscape.png"
            alt="SF Digital Solutions LK"
            width={205}
            height={56}
            sizes="(min-width: 1024px) 205px, 161px"
            className="h-11 lg:h-14 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-5 xl:gap-8">
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

        <div className="flex items-center gap-3">
          {SUPABASE_ENABLED && (
            <Link
              href="/account"
              aria-label="My account"
              className="hidden lg:inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-navy hover:bg-brand-tint transition-colors"
            >
              <User size={20} />
            </Link>
          )}
          <Link
            href={LMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center rounded-md border border-brand-blue px-5 py-2.5 text-sm font-semibold text-brand-blue hover:bg-brand-tint transition-colors"
          >
            LMS Login
          </Link>
          <Link
            href={REGISTRATION_URL}
            onClick={() => trackEnrollClick("navbar_desktop")}
            className="hidden lg:inline-flex items-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-hover transition-colors"
          >
            Enroll Now
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
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
            {SUPABASE_ENABLED && (
              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-brand-ink border-b border-slate-50"
              >
                My Account
              </Link>
            )}
            <Link
              href={REGISTRATION_URL}
              onClick={() => {
                setOpen(false);
                trackEnrollClick("navbar_mobile");
              }}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white"
            >
              Enroll Now
            </Link>
            <Link
              href={LMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2.5 mb-2 inline-flex items-center justify-center rounded-md border border-brand-blue px-5 py-3 text-sm font-semibold text-brand-blue"
            >
              LMS Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}