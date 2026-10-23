"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Session } from "@supabase/supabase-js";
import { AlertCircle, Download, Mail } from "lucide-react";
import { getSupabase, SUPABASE_ENABLED } from "@/lib/supabase";

type Status = "new" | "contacted" | "enrolled" | "declined";

type Row = {
  id: string;
  user_id: string;
  course_slug: string;
  note: string | null;
  status: Status;
  created_at: string;
};

type Person = { id: string; display_name: string | null; email: string | null };

const statuses: { value: Status; label: string }[] = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "enrolled", label: "Enrolled" },
  { value: "declined", label: "Declined" },
];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

// Stops spreadsheet programs from running text that starts with = + - @ as a formula.
function csvCell(value: string) {
  const safe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
  return `"${safe.replace(/"/g, '""')}"`;
}

export default function AdminPanel({ courseTitles }: { courseTitles: Record<string, string> }) {
  const supabase = getSupabase();
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(SUPABASE_ENABLED);
  const [isAdmin, setIsAdmin] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [people, setPeople] = useState<Record<string, Person>>({});
  const [filter, setFilter] = useState<Status | "all">("all");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (!data.session) setChecking(false);
    });
    const { data } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      if (!s) { setIsAdmin(false); setChecking(false); }
    });
    return () => data.subscription.unsubscribe();
  }, [supabase]);

  useEffect(() => {
    if (!supabase || !session) return;
    let cancelled = false;
    (async () => {
      const me = await supabase.from("profiles").select("role").eq("id", session.user.id).maybeSingle();
      if (cancelled) return;
      if (me.error || me.data?.role !== "admin") {
        setIsAdmin(false);
        setChecking(false);
        return;
      }
      setIsAdmin(true);
      const reqs = await supabase
        .from("enrolment_requests")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(500);
      if (cancelled) return;
      if (reqs.error) {
        setError("We couldn't load the requests. Please refresh.");
        setChecking(false);
        return;
      }
      const list = (reqs.data ?? []) as Row[];
      setRows(list);
      const ids = Array.from(new Set(list.map((r) => r.user_id)));
      if (ids.length > 0) {
        const profs = await supabase.from("profiles").select("id, display_name, email").in("id", ids);
        if (cancelled) return;
        if (!profs.error) {
          setPeople(Object.fromEntries((profs.data as Person[]).map((p) => [p.id, p])));
        }
      }
      setError("");
      setChecking(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [supabase, session]);

  async function changeStatus(id: string, status: Status) {
    if (!supabase) return;
    const before = rows;
    setRows((list) => list.map((r) => (r.id === id ? { ...r, status } : r)));
    const { error: updateError } = await supabase.from("enrolment_requests").update({ status }).eq("id", id);
    if (updateError) {
      setRows(before);
      setError("We couldn't save that change. Please try again.");
    } else {
      setError("");
    }
  }

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: rows.length, new: 0, contacted: 0, enrolled: 0, declined: 0 };
    rows.forEach((r) => { c[r.status] += 1; });
    return c;
  }, [rows]);

  const visible = filter === "all" ? rows : rows.filter((r) => r.status === filter);

  function exportCsv() {
    const header = ["Date", "Name", "Email", "Course", "Status", "Note"];
    const lines = visible.map((r) => {
      const p = people[r.user_id];
      return [
        formatDate(r.created_at),
        p?.display_name ?? "",
        p?.email ?? "",
        courseTitles[r.course_slug] ?? r.course_slug,
        r.status,
        r.note ?? "",
      ].map(csvCell).join(",");
    });
    const blob = new Blob([[header.map(csvCell).join(","), ...lines].join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "enrolment-requests.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!SUPABASE_ENABLED) {
    return <p className="text-sm text-brand-slate">Accounts are not switched on for this site.</p>;
  }
  if (checking) return <p className="text-sm text-brand-slate" role="status">Loading…</p>;
  if (!session) {
    return (
      <p className="text-sm text-brand-slate">
        Please <Link href="/account" className="font-semibold text-brand-blue">sign in</Link> with your staff account.
      </p>
    );
  }
  if (!isAdmin) {
    return <p className="text-sm text-brand-slate">This page is for staff only.</p>;
  }

  return (
    <div>
      {error && (
        <div role="alert" className="mb-4 flex gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle size={18} className="shrink-0 mt-0.5" /> {error}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        {([{ value: "all", label: "All" }, ...statuses] as { value: Status | "all"; label: string }[]).map((s) => (
          <button
            key={s.value}
            onClick={() => setFilter(s.value)}
            aria-pressed={filter === s.value}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              filter === s.value ? "bg-brand-blue text-white" : "bg-brand-tint text-brand-blue hover:bg-brand-blue/10"
            }`}
          >
            {s.label} ({counts[s.value]})
          </button>
        ))}
        <button
          onClick={exportCsv}
          disabled={visible.length === 0}
          className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-slate-300 px-4 py-1.5 text-sm font-semibold text-brand-ink hover:bg-slate-50 disabled:opacity-50"
        >
          <Download size={15} /> Export CSV
        </button>
      </div>

      {visible.length === 0 ? (
        <p className="mt-8 text-sm text-brand-slate">No requests here yet.</p>
      ) : (
        <ul className="mt-6 space-y-3">
          {visible.map((r) => {
            const p = people[r.user_id];
            return (
              <li key={r.id} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display font-semibold text-brand-navy">
                      {courseTitles[r.course_slug] ?? r.course_slug}
                    </h2>
                    <p className="mt-0.5 text-xs text-brand-slate">{formatDate(r.created_at)}</p>
                  </div>
                  <label className="text-xs font-semibold text-brand-slate">
                    <span className="sr-only">Status for this request</span>
                    <select
                      value={r.status}
                      onChange={(e) => changeStatus(r.id, e.target.value as Status)}
                      className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                      {statuses.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="mt-3 text-sm text-brand-ink">
                  <p className="font-medium">{p?.display_name || "No name given"}</p>
                  {p?.email ? (
                    <a href={`mailto:${p.email}`} className="mt-0.5 inline-flex items-center gap-1.5 text-brand-blue hover:underline">
                      <Mail size={14} /> {p.email}
                    </a>
                  ) : (
                    <p className="text-xs text-brand-slate">Email not available (run migration 0002).</p>
                  )}
                </div>
                {r.note && <p className="mt-3 rounded-xl bg-brand-tint/60 p-3 text-sm text-brand-ink">{r.note}</p>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
