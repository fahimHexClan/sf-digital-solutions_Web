"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bot,
  X,
  ArrowRight,
  BookOpen,
  Wallet,
  Award,
  CalendarClock,
  MessagesSquare,
  ChevronLeft,
} from "lucide-react";
import { courses } from "@/lib/data";
import { trackEvent, trackWhatsAppClick } from "@/lib/analytics";
import { scoreLead } from "@/lib/leadScore";

type ViewId = "menu" | "courses" | "fees" | "certificate" | "classes";

const activeCourse = courses.find((c) => !c.comingSoon);
const upcomingCourses = courses.filter((c) => c.comingSoon);

const menuItems: { id: ViewId; label: string; icon: typeof BookOpen }[] = [
  { id: "courses", label: "Find a Course", icon: BookOpen },
  { id: "fees", label: "Course Fees", icon: Wallet },
  { id: "certificate", label: "Certificate Info", icon: Award },
  { id: "classes", label: "Class Details", icon: CalendarClock },
];

export default function AskSF() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<ViewId>("menu");

  function openWidget() {
    setOpen(true);
    setView("menu");
    trackEvent("ask_sf_open");
  }

  function goTo(id: ViewId) {
    setView(id);
    trackEvent("ask_sf_topic", { topic: id });
  }

  function talkToAdvisor() {
    const leadTag = scoreLead({ source: "contact_form", hasMessage: false });
    const message = `[${leadTag}]\nHi! I was chatting with the Ask SF widget on your website and would like to talk to an advisor.`;
    window.open(
      `https://wa.me/94785194631?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    trackWhatsAppClick("ask_sf_widget");
  }

  return (
    <>
      <button
        onClick={openWidget}
        aria-label="Ask SF — chat with our assistant"
        className={`fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-sky text-white shadow-lg shadow-brand-blue/30 hover:scale-105 transition-all duration-300 ${
          open ? "scale-0" : "scale-100"
        }`}
      >
        <Bot size={26} />
      </button>

      {open && (
        <div className="fixed bottom-5 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[75vh]">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-navy to-brand-navy-light px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand-sky">
                <Bot size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">
                  Ask SF
                </p>
                <p className="text-[11px] text-blue-200/70 leading-tight">
                  Usually replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:bg-white/10"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 overflow-y-auto flex-1 bg-brand-tint/40">
            {view !== "menu" && (
              <button
                onClick={() => goTo("menu")}
                className="mb-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blue-hover"
              >
                <ChevronLeft size={14} /> Back to menu
              </button>
            )}

            {/* Bot bubble */}
            <div className="rounded-2xl rounded-tl-sm bg-white border border-slate-100 shadow-sm p-4 text-sm text-brand-ink leading-relaxed">
              {view === "menu" && (
                <>Hi! I&apos;m here to help 👋 What can I help you with?</>
              )}

              {view === "courses" && activeCourse && (
                <div className="space-y-3">
                  <p>
                    Right now, <strong>{activeCourse.title}</strong> is open
                    for enrollment — {activeCourse.description}
                  </p>
                  <Link
                    href={`/courses/${activeCourse.slug}`}
                    className="inline-flex items-center gap-1.5 text-brand-blue font-semibold text-sm"
                  >
                    View course details <ArrowRight size={14} />
                  </Link>
                  {upcomingCourses.length > 0 && (
                    <p className="text-xs text-brand-slate pt-2 border-t border-slate-100">
                      Coming soon: {upcomingCourses.map((c) => c.title).join(", ")}.
                    </p>
                  )}
                </div>
              )}

              {view === "fees" && activeCourse && (
                <div className="space-y-2">
                  <p>
                    <strong>{activeCourse.title}</strong>:{" "}
                    {activeCourse.offerPrice} one-time
                    {activeCourse.originalPrice && (
                      <> (was {activeCourse.originalPrice})</>
                    )}
                    .
                  </p>
                  {activeCourse.installments && (
                    <p>
                      Or pay in 2 installments:{" "}
                      {activeCourse.installments
                        .map((i) => `${i.label} — ${i.amount}`)
                        .join(", ")}
                      .
                    </p>
                  )}
                  <p className="text-xs text-brand-slate pt-2 border-t border-slate-100">
                    Fees for other courses will be shared closer to launch.
                  </p>
                </div>
              )}

              {view === "certificate" && (
                <p>
                  Yes — students who complete a course receive a certificate
                  from SF Digital Solutions, which you can add to your CV or
                  job applications.
                </p>
              )}

              {view === "classes" && (
                <p>
                  Classes are conducted online, so you can join from
                  anywhere. {activeCourse?.title} runs for{" "}
                  {activeCourse?.duration}, and new batches open regularly —
                  message us on WhatsApp for the next available start date.
                </p>
              )}
            </div>

            {view === "menu" && (
              <div className="mt-3 space-y-2">
                {menuItems.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => goTo(id)}
                    className="w-full flex items-center gap-2.5 rounded-xl bg-white border border-slate-100 shadow-sm px-4 py-3 text-sm font-medium text-brand-navy hover:border-brand-blue/40 hover:shadow-md transition-all text-left"
                  >
                    <Icon size={16} className="text-brand-blue shrink-0" />
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer — always available escape hatch to a human */}
          <div className="p-4 border-t border-slate-100 bg-white shrink-0">
            <button
              onClick={talkToAdvisor}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-hover transition-colors"
            >
              <MessagesSquare size={16} /> Talk to an Advisor
            </button>
          </div>
        </div>
      )}
    </>
  );
}
