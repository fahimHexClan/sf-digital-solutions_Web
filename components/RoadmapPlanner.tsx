"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageSquare, RotateCcw, Save, Sparkles } from "lucide-react";
import { trackEvent, trackWhatsAppClick } from "@/lib/analytics";
import { getSupabase, PENDING_ROADMAP_KEY, SUPABASE_ENABLED } from "@/lib/supabase";
import { whatsappLink } from "@/lib/site";
import {
  buildRoadmap,
  goalOptions,
  hoursOptions,
  levelOptions,
  type Goal,
  type Level,
  type Roadmap,
} from "@/lib/roadmap";

type CourseInfo = {
  slug: string;
  title: string;
  duration: string;
  level: string;
  comingSoon: boolean;
};

const optionClass =
  "flex cursor-pointer flex-col rounded-xl border border-slate-200 bg-white p-4 text-sm transition-colors hover:border-brand-blue/50 has-[:checked]:border-brand-blue has-[:checked]:bg-brand-blue/5 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-blue";

export default function RoadmapPlanner({ courses }: { courses: CourseInfo[] }) {
  const [goal, setGoal] = useState<Goal | "">("");
  const [level, setLevel] = useState<Level | "">("");
  const [hours, setHours] = useState<number>(5);
  const [errors, setErrors] = useState<{ goal?: string; level?: string }>({});
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: { goal?: string; level?: string } = {};
    if (!goal) next.goal = "Please choose your learning goal.";
    if (!level) next.level = "Please choose your current level.";
    setErrors(next);
    if (next.goal || next.level || !goal || !level) return;
    setRoadmap(buildRoadmap({ goal, level, hoursPerWeek: hours }));
    setSaveState("idle");
    trackEvent("roadmap_created", { goal, level, hours });
    requestAnimationFrame(() =>
      document.getElementById("roadmap-result")?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  }

  async function saveToAccount() {
    if (!roadmap || !goal || !level) return;
    const payload = { goal, level, hoursPerWeek: hours, plan: roadmap };
    const supabase = getSupabase();
    if (!supabase) return;
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      // Keep the plan in this browser only until the person signs in.
      try {
        localStorage.setItem(PENDING_ROADMAP_KEY, JSON.stringify(payload));
      } catch {
        // storage unavailable: they will need to recreate the plan after signing in
      }
      router.push("/account");
      return;
    }
    setSaveState("saving");
    const { error } = await supabase.from("saved_roadmaps").insert({
      user_id: data.session.user.id,
      goal,
      level,
      hours_per_week: hours,
      plan: roadmap,
    });
    setSaveState(error ? "error" : "saved");
  }

  function reset() {
    setRoadmap(null);
    setGoal("");
    setLevel("");
    setHours(5);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const goalLabel = goalOptions.find((g) => g.value === goal)?.label ?? "";
  const levelLabel = levelOptions.find((l) => l.value === level)?.label ?? "";

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="space-y-8">
        <fieldset>
          <legend className="font-display font-semibold text-brand-navy">1. What do you want to learn?</legend>
          <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {goalOptions.map((g) => (
              <label key={g.value} className={optionClass}>
                <input
                  type="radio"
                  name="goal"
                  value={g.value}
                  checked={goal === g.value}
                  onChange={() => setGoal(g.value)}
                  className="sr-only"
                />
                <span className="font-semibold text-brand-ink">{g.label}</span>
                <span className="mt-0.5 text-xs text-brand-slate">{g.hint}</span>
              </label>
            ))}
          </div>
          {errors.goal && (
            <p role="alert" className="mt-2 text-xs font-medium text-red-600">{errors.goal}</p>
          )}
        </fieldset>

        <fieldset>
          <legend className="font-display font-semibold text-brand-navy">2. Where are you now?</legend>
          <div className="mt-3 grid sm:grid-cols-3 gap-3">
            {levelOptions.map((l) => (
              <label key={l.value} className={optionClass}>
                <input
                  type="radio"
                  name="level"
                  value={l.value}
                  checked={level === l.value}
                  onChange={() => setLevel(l.value)}
                  className="sr-only"
                />
                <span className="font-semibold text-brand-ink">{l.label}</span>
              </label>
            ))}
          </div>
          {errors.level && (
            <p role="alert" className="mt-2 text-xs font-medium text-red-600">{errors.level}</p>
          )}
        </fieldset>

        <fieldset>
          <legend className="font-display font-semibold text-brand-navy">3. How many hours per week can you study?</legend>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {hoursOptions.map((h) => (
              <label key={h} className={optionClass}>
                <input
                  type="radio"
                  name="hours"
                  value={h}
                  checked={hours === h}
                  onChange={() => setHours(h)}
                  className="sr-only"
                />
                <span className="font-semibold text-brand-ink">{h === 12 ? "12+ hours" : `${h} hours`}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-sky px-7 py-3 font-semibold text-white shadow-md shadow-brand-blue/25 hover:shadow-lg transition-shadow"
        >
          <Sparkles size={18} /> Create my roadmap
        </button>
        <p className="text-xs text-brand-slate max-w-xl">
          Your answers stay in your browser. We don&apos;t collect or store them.
        </p>
      </form>

      {roadmap && (
        <div id="roadmap-result" className="mt-14 scroll-mt-24" aria-live="polite">
          <div className="rounded-2xl bg-brand-navy p-6 sm:p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-sky">Your roadmap</p>
            <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl">{roadmap.title}</h2>
            <p className="mt-2 text-sm text-blue-100/80">
              {levelLabel} · {hours === 12 ? "12+" : hours} hours per week · about {roadmap.totalWeeks} weeks
              at this pace
            </p>
          </div>

          <ol className="mt-6 space-y-4">
            {roadmap.phases.map((p, i) => (
              <li key={p.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-brand-navy">{p.title}</h3>
                  <span className="ml-auto rounded-full bg-brand-tint px-3 py-1 text-xs font-semibold text-brand-blue">
                    ~{p.estWeeks} {p.estWeeks === 1 ? "week" : "weeks"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-brand-slate">{p.focus}</p>
                <ul className="mt-3 space-y-1.5">
                  {p.tasks.map((t) => (
                    <li key={t} className="flex gap-2 text-sm text-brand-ink">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-brand-tint/60 border border-slate-100 p-6">
              <h3 className="font-display font-semibold text-brand-navy">Practice projects</h3>
              <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-brand-ink">
                {roadmap.projects.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-brand-tint/60 border border-slate-100 p-6">
              <h3 className="font-display font-semibold text-brand-navy">Check yourself</h3>
              <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-brand-ink">
                {roadmap.checklist.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-display font-semibold text-xl text-brand-navy">Courses that match this roadmap</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {roadmap.courseSlugs
                .map((slug) => courses.find((c) => c.slug === slug))
                .filter((c): c is CourseInfo => Boolean(c))
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/courses/${c.slug}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-brand-blue/50 hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-display font-semibold text-brand-navy">{c.title}</h4>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          c.comingSoon ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                        }`}
                      >
                        {c.comingSoon ? "Coming soon" : "Open for enrolment"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-brand-slate">{c.duration} · {c.level}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                      View course <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink(
                `Hi! I used the Learning Roadmap Planner on your website.\nGoal: ${goalLabel}\nLevel: ${levelLabel}\nStudy time: ${hours === 12 ? "12+" : hours} hours per week\nCould you help me choose the right course?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("roadmap")}
              className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-6 py-3 font-semibold text-white hover:bg-brand-blue-hover transition-colors"
            >
              <MessageSquare size={18} /> Talk to us about this plan
            </a>
            {SUPABASE_ENABLED && (
              <button
                onClick={saveToAccount}
                disabled={saveState === "saving" || saveState === "saved"}
                className="inline-flex items-center gap-2 rounded-md border border-brand-blue px-5 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-tint transition-colors disabled:opacity-60"
              >
                <Save size={16} />
                {saveState === "saved" ? "Saved to your account" : saveState === "saving" ? "Saving…" : "Save to my account"}
              </button>
            )}
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-brand-ink hover:bg-slate-50 transition-colors"
            >
              <RotateCcw size={16} /> Start over
            </button>
          </div>

          {saveState === "error" && (
            <p role="alert" className="mt-3 text-sm font-medium text-red-600">
              We couldn&apos;t save your roadmap. You can keep up to 20 saved roadmaps; delete an old one in{" "}
              <Link href="/account" className="underline">your account</Link> and try again.
            </p>
          )}
          {saveState === "saved" && (
            <p role="status" className="mt-3 text-sm text-emerald-700">
              Saved. <Link href="/account" className="font-semibold underline">Open your dashboard</Link>
            </p>
          )}

          <p className="mt-6 text-xs text-brand-slate max-w-2xl leading-relaxed">
            This roadmap is a general planning guide built from your answers. It is not AI advice and
            not a guarantee of any job, income or result. Week estimates are rough and depend on how
            you learn. Course availability is shown as listed on this website.
          </p>
        </div>
      )}
    </div>
  );
}
