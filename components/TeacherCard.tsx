import Image from "next/image";
import type { Teacher } from "@/lib/data";

export default function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-56 w-full">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          sizes="(max-width: 640px) 100vw, 300px"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-navy/70 to-transparent" />
      </div>
      <div className="p-5 text-center">
        <h3 className="font-display font-semibold text-brand-navy text-lg">
          {teacher.name}
        </h3>
        <p className="text-sm text-brand-blue font-medium mt-1">
          {teacher.role}
        </p>
        <p className="text-sm text-brand-slate mt-3 leading-relaxed">
          {teacher.bio}
        </p>
      </div>
    </div>
  );
}
