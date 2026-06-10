import React from "react";
import { cn } from "@/app/lib/utils/utils";

export default function EmptyState({
  icon: Icon,
  title,
  description,
  ctaLabel,
  onClick,
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center py-20 px-6 rounded-2xl border-2 border-dashed",
        "bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm",
        "border-slate-200/90 dark:border-white/[0.09]",
        className,
      )}
    >
      {Icon && (
        <div className="mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B3CFF]/10 to-[#7B5CFF]/10 dark:from-[#3B3CFF]/20 dark:to-[#7B5CFF]/20 border border-[#3B3CFF]/10 dark:border-[#3B3CFF]/20 flex items-center justify-center">
          <Icon className="w-7 h-7 text-[#3B3CFF] dark:text-indigo-400" />
        </div>
      )}

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed mb-6">
          {description}
        </p>
      )}

      {ctaLabel && onClick && (
        <button
          onClick={onClick}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#3B3CFF] to-[#5B5CFF] text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all"
        >
          {ctaLabel}
        </button>
      )}
    </div>
  );
}
