export const inputClass =
  "w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm transition-colors hover:border-brand-blue/40 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent";
export const inputErrorClass = "border-red-400 hover:border-red-400";
export const submitClass =
  "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-sky px-7 py-3 font-semibold text-white shadow-md shadow-brand-blue/25 hover:shadow-lg hover:shadow-brand-blue/35 transition-shadow disabled:opacity-60";

export function fieldProps(id: string, error?: string) {
  return {
    id,
    name: id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
    className: `${inputClass} ${error ? inputErrorClass : ""}`,
  } as const;
}

export default function FormField({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-brand-ink mb-1.5">
        {label}
        {optional && <span className="ml-1 font-normal text-brand-slate">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
