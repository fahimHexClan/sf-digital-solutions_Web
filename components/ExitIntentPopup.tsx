"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X, Gift, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// Pages where this popup would be redundant (already selling/showing resources).
const SKIP_PATHS = ["/resources", "/shop"];

export default function ExitIntentPopup() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (SKIP_PATHS.includes(pathname)) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("exitIntentShown")) return;

    let armed = false;
    const armTimer = setTimeout(() => {
      armed = true;
    }, 6000); // ignore accidental cursor movement in the first few seconds

    function handleMouseLeave(e: MouseEvent) {
      if (!armed) return;
      if (e.clientY > 0) return; // only trigger when the cursor exits via the top
      if (sessionStorage.getItem("exitIntentShown")) return;

      sessionStorage.setItem("exitIntentShown", "1");
      setShow(true);
      trackEvent("exit_intent_shown");
      document.removeEventListener("mouseleave", handleMouseLeave);
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      clearTimeout(armTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pathname]);

  function close() {
    setShow(false);
  }

  function handleClick() {
    trackEvent("exit_intent_click");
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-navy/70 backdrop-blur-sm p-4"
      onClick={close}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl bg-white p-7 shadow-2xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-brand-slate hover:bg-slate-100"
        >
          <X size={18} />
        </button>
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-sky text-white shadow-lg shadow-brand-blue/30">
          <Gift size={26} />
        </span>
        <h3 className="mt-4 font-display font-semibold text-xl text-brand-navy">
          Before you go — grab this free
        </h3>
        <p className="mt-2 text-sm text-brand-slate leading-relaxed">
          Download our free Excel Formula Cheat Sheet, Computer Basics Guide
          and more — no cost, just useful.
        </p>
        <Link
          href="/resources"
          onClick={handleClick}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3 font-semibold text-white hover:bg-brand-blue-hover transition-colors w-full"
        >
          Get Free Resources <ArrowRight size={16} />
        </Link>
        <button
          onClick={close}
          className="mt-3 text-xs font-medium text-brand-slate hover:text-brand-ink"
        >
          No thanks, I&apos;ll keep browsing
        </button>
      </div>
    </div>
  );
}
