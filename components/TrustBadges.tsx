import { ShieldCheck, Award, Laptop, Headset } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Secure Registration" },
  { icon: Award, label: "Certificate on Completion" },
  { icon: Laptop, label: "Online Learning" },
  { icon: Headset, label: "Student Support" },
];

export default function TrustBadges() {
  return (
    <div className="border-y border-slate-100 bg-white">
      <div className="container-page py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {badges.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2.5 text-sm font-medium text-brand-navy"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand-blue shrink-0">
              <Icon size={17} />
            </span>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
