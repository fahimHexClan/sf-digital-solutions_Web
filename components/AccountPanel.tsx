"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Session } from "@supabase/supabase-js";
import { AlertCircle, CheckCircle2, LogOut, Mail, Trash2 } from "lucide-react";
import FormField, { fieldProps, submitClass } from "@/components/FormField";
import { getSupabase, PENDING_ROADMAP_KEY, SUPABASE_ENABLED } from "@/lib/supabase";
import { isEmail } from "@/lib/validation";
import type { Roadmap } from "@/lib/roadmap";

type CourseOption = { slug: string; title: string };

type SavedRoadmap = {
  id: string;
  goal: string;
  level: string;
  hours_per_week: number;
  plan: Roadmap;
  created_at: string;
};

type EnrolmentRequest = {
  id: string;
  course_slug: string;
  note: string | null;
  status: "new" | "contacted" | "enrolled" | "declined";
  created_at: string;
};

const statusLabel: Record<EnrolmentRequest["status"], string> = {
  new: "Received",
  contacted: "We've contacted you",
  enrolled: "Enrolled",
  declined: "Closed",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function AccountPanel({
  openCourses,
  courseTitles,
}: {
  openCourses: CourseOption[];
  courseTitles: Record<string, string>;
}) {
  const supabase = getSupabase();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(SUPABASE_ENABLED);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, [supabase]);

  if (!SUPABASE_ENABLED || !supabase) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <h2 className="font-display font-semibold text-xl text-brand-navy">Accounts are not switched on yet</h2>
        <p className="mt-2 text-sm text-brand-slate">
          You can still use the free <Link href="/roadmap" className="font-semibold text-brand-blue">roadmap planner</Link> without an account.
        </p>
      </div>
    );
  }

  if (loading) return <p className="text-sm text-brand-slate" role="status">Loading…</p>;
  if (!session) return <SignIn />;
  return <Dashboard session={session} openCourses={openCourses} courseTitles={courseTitles} />;
}

/* ----------------------------------------------------------------- sign in */
function SignIn() {
  const supabase = getSupabase()!;
  const [error, setError] = useState<string | undefined>();
  const [sentTo, setSentTo] = useState("");
  const [sending, setSending] = useState(false);
  const [failure, setFailure] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (new FormData(e.currentTarget).get("email")?.toString() || "").trim();
    if (!isEmail(email)) {
      setError("Please enter a valid email address, for example you@example.com.");
      return;
    }
    setError(undefined);
    setFailure("");
    setSending(true);
    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/account` },
    });
    setSending(false);
    if (authError) {
      setFailure(
        authError.status === 429
          ? "Too many sign-in emails were requested. Please wait a few minutes and try again."
          : "We couldn't send the sign-in email. Please try again in a moment.",
      );
      return;
    }
    setSentTo(email);
  }

  if (sentTo) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm" role="status">
        <Mail className="mx-auto text-brand-blue" size={32} />
        <h2 className="mt-3 font-display font-semibold text-xl text-brand-navy">Check your email</h2>
        <p className="mt-2 text-sm text-brand-slate">
          We sent a sign-in link to <strong className="text-brand-ink">{sentTo}</strong>. Open it on this
          device to continue. If you don&apos;t see it, check your spam folder.
        </p>
        <button onClick={() => setSentTo("")} className="mt-4 text-sm font-semibold text-brand-blue">
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
      <h2 className="font-display font-semibold text-xl text-brand-navy">Sign in or create your account</h2>
      <p className="mt-1 text-sm text-brand-slate">
        Enter your email and we&apos;ll send you a sign-in link. No password to remember.
      </p>
      <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
        <FormField id="email" label="Email address" error={error}>
          <input {...fieldProps("email", error)} type="email" autoComplete="email" placeholder="you@example.com" />
        </FormField>
        {failure && (
          <div role="alert" className="flex gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            <AlertCircle size={18} className="shrink-0 mt-0.5" /> {failure}
          </div>
        )}
        <button type="submit" disabled={sending} className={submitClass}>
          {sending ? "Sending…" : "Email me a sign-in link"}
        </button>
        <p className="text-xs text-brand-slate">
          We use your email only for your account and to reply to your enrolment requests. See our{" "}
          <Link href="/privacy" className="font-medium text-brand-blue">Privacy Policy</Link>.
        </p>
      </form>
    </div>
  );
}

/* --------------------------------------------------------------- dashboard */
function Dashboard({
  session,
  openCourses,
  courseTitles,
}: {
  session: Session;
  openCourses: CourseOption[];
  courseTitles: Record<string, string>;
}) {
  const supabase = getSupabase()!;
  const userId = session.user.id;
  const [displayName, setDisplayName] = useState("");
  const [nameError, setNameError] = useState<string | undefined>();
  const [nameSaved, setNameSaved] = useState(false);
  const [roadmaps, setRoadmaps] = useState<SavedRoadmap[]>([]);
  const [requests, setRequests] = useState<EnrolmentRequest[]>([]);
  const [message, setMessage] = useState("");
  const [loadError, setLoadError] = useState("");
  const [reqError, setReqError] = useState<string | undefined>();
  const [submittingReq, setSubmittingReq] = useState(false);

  const load = useCallback(async () => {
    const [p, r, e] = await Promise.all([
      supabase.from("profiles").select("display_name").eq("id", userId).maybeSingle(),
      supabase.from("saved_roadmaps").select("*").eq("user_id", userId).order("created_at", { ascending: false }),
      supabase.from("enrolment_requests").select("*").eq("user_id", userId).order("created_at", { ascending: false }),
    ]);
    if (p.error || r.error || e.error) {
      setLoadError("We couldn't load your data. Please refresh the page.");
      return;
    }
    setLoadError("");
    setDisplayName(p.data?.display_name ?? "");
    setRoadmaps((r.data ?? []) as SavedRoadmap[]);
    setRequests((e.data ?? []) as EnrolmentRequest[]);
  }, [supabase, userId]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      // A roadmap created before signing in is saved once, then removed from this browser.
      try {
        const pending = localStorage.getItem(PENDING_ROADMAP_KEY);
        if (pending) {
          localStorage.removeItem(PENDING_ROADMAP_KEY);
          const parsed = JSON.parse(pending) as {
            goal: string; level: string; hoursPerWeek: number; plan: Roadmap;
          };
          const { error } = await supabase.from("saved_roadmaps").insert({
            user_id: userId,
            goal: parsed.goal,
            level: parsed.level,
            hours_per_week: parsed.hoursPerWeek,
            plan: parsed.plan,
          });
          if (!error && !cancelled) setMessage("Your roadmap was saved to your account.");
        }
      } catch {
        // ignore unreadable pending data
      }
      if (!cancelled) await load();
    })();
    return () => { cancelled = true; };
  }, [supabase, userId, load]);

  async function saveName(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = (new FormData(e.currentTarget).get("displayName")?.toString() || "").trim();
    setNameSaved(false);
    if (name.length < 2 || name.length > 60) {
      setNameError("Please enter a name between 2 and 60 characters.");
      return;
    }
    setNameError(undefined);
    const { error } = await supabase.from("profiles").update({ display_name: name }).eq("id", userId);
    if (error) setNameError("We couldn't save your name. Please try again.");
    else { setDisplayName(name); setNameSaved(true); }
  }

  async function deleteRoadmap(id: string) {
    const { error } = await supabase.from("saved_roadmaps").delete().eq("id", id);
    if (!error) setRoadmaps((list) => list.filter((r) => r.id !== id));
  }

  async function requestEnrolment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const course = data.get("course")?.toString() || "";
    const note = (data.get("note")?.toString() || "").trim();
    if (!course) { setReqError("Please choose a course."); return; }
    if (note.length > 500) { setReqError("Please keep your note under 500 characters."); return; }
    setReqError(undefined);
    setSubmittingReq(true);
    const { error } = await supabase
      .from("enrolment_requests")
      .insert({ user_id: userId, course_slug: course, note: note || null });
    setSubmittingReq(false);
    if (error) { setReqError("We couldn't send your request. Please try again."); return; }
    form.reset();
    setMessage("Your enrolment request was received. We'll contact you to confirm details and payment.");
    await load();
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-brand-slate">
          Signed in as <strong className="text-brand-ink">{session.user.email}</strong>
        </p>
        <button
          onClick={() => supabase.auth.signOut()}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover"
        >
          <LogOut size={15} /> Sign out
        </button>
      </div>

      {message && (
        <div role="status" className="flex gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <CheckCircle2 size={18} className="shrink-0 mt-0.5" /> {message}
        </div>
      )}
      {loadError && (
        <div role="alert" className="flex gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={18} className="shrink-0 mt-0.5" /> {loadError}
        </div>
      )}

      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="font-display font-semibold text-lg text-brand-navy">Your name</h2>
        <form onSubmit={saveName} noValidate className="mt-3 flex flex-col sm:flex-row gap-3 sm:items-start">
          <div className="flex-1">
            <FormField id="displayName" label="Display name" error={nameError}>
              <input key={displayName} {...fieldProps("displayName", nameError)} defaultValue={displayName} type="text" autoComplete="name" />
            </FormField>
          </div>
          <button type="submit" className={`${submitClass} sm:mt-7`}>Save</button>
        </form>
        {nameSaved && <p role="status" className="mt-2 text-xs font-medium text-emerald-700">Saved.</p>}
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="font-display font-semibold text-lg text-brand-navy">Saved roadmaps</h2>
        {roadmaps.length === 0 ? (
          <p className="mt-2 text-sm text-brand-slate">
            Nothing saved yet. Create one with the <Link href="/roadmap" className="font-semibold text-brand-blue">roadmap planner</Link>.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {roadmaps.map((r) => (
              <li key={r.id} className="rounded-xl border border-slate-100 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-brand-ink">{r.plan?.title ?? "Learning roadmap"}</h3>
                    <p className="text-xs text-brand-slate">
                      {formatDate(r.created_at)} · {r.hours_per_week} hrs/week · about {r.plan?.totalWeeks} weeks
                    </p>
                  </div>
                  <button
                    onClick={() => deleteRoadmap(r.id)}
                    aria-label={`Delete roadmap saved on ${formatDate(r.created_at)}`}
                    className="text-brand-slate hover:text-red-600"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
                <ol className="mt-3 list-decimal pl-5 text-sm text-brand-ink space-y-0.5">
                  {r.plan?.phases?.map((p) => (
                    <li key={p.title}>{p.title} <span className="text-brand-slate">(~{p.estWeeks} wk)</span></li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="font-display font-semibold text-lg text-brand-navy">Request enrolment</h2>
        <p className="mt-1 text-sm text-brand-slate">
          Send a request and we&apos;ll contact you to confirm the details and how to pay. Sending a request
          does not enrol you or charge you.
        </p>
        {openCourses.length === 0 ? (
          <p className="mt-3 text-sm text-brand-slate">No courses are open for enrolment right now.</p>
        ) : (
          <form onSubmit={requestEnrolment} noValidate className="mt-4 space-y-4">
            <FormField id="course" label="Course" error={reqError && !reqError.includes("note") ? reqError : undefined}>
              <select {...fieldProps("course")} defaultValue="">
                <option value="" disabled>Choose a course…</option>
                {openCourses.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.title}</option>
                ))}
              </select>
            </FormField>
            <FormField id="note" label="Note" optional error={reqError?.includes("note") ? reqError : undefined}>
              <textarea {...fieldProps("note")} rows={3} maxLength={600} placeholder="Anything we should know? Preferred time, questions…" />
            </FormField>
            <button type="submit" disabled={submittingReq} className={submitClass}>
              {submittingReq ? "Sending…" : "Send enrolment request"}
            </button>
          </form>
        )}

        {requests.length > 0 && (
          <div className="mt-6 border-t border-slate-100 pt-5">
            <h3 className="font-semibold text-brand-ink text-sm">Your requests</h3>
            <ul className="mt-3 space-y-2">
              {requests.map((r) => (
                <li key={r.id} className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="text-brand-ink">
                    {courseTitles[r.course_slug] ?? r.course_slug}
                    <span className="ml-2 text-xs text-brand-slate">{formatDate(r.created_at)}</span>
                  </span>
                  <span className="rounded-full bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand-blue">
                    {statusLabel[r.status]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
