import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

// Toggle this when a batch is actively open for enrollment vs upcoming.
const BATCH_OPEN = true;

export default function BatchBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-blue to-brand-sky">
      <div className="container-page py-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center sm:text-left">
        <span className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white">
          {BATCH_OPEN ? (
            <>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              Next Batch Now Open — Limited Seats Available
            </>
          ) : (
            <>
              <Users size={16} /> Next Batch Coming Soon
            </>
          )}
        </span>
        <Link
          href={
            BATCH_OPEN
              ? "https://sf-digital-solutions-lk-registratio.vercel.app"
              : "/contact"
          }
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-blue hover:bg-blue-50 transition-colors shrink-0"
        >
          {BATCH_OPEN ? "Reserve My Seat" : "Notify Me"} <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
