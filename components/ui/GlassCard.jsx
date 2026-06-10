import React from "react";

export default function GlassCard({
  children,
  className,
  hover = true,
  ...props
}) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-200 dark:bg-white/[0.04] dark:border-white/[0.06] dark:shadow-xl dark:shadow-black/20 bg-white/80 border-slate-200/60 shadow-lg shadow-slate-200/50 hover:dark:bg-white/[0.06] hover:dark:border-white/[0.1] hover:dark:shadow-2xl hover:dark:shadow-black/30 hover:bg-white hover:border-slate-300/60 hover:shadow-xl backdrop-blur-xl ${className || ""} `}
      {...props}
    >
      {children}
    </div>
  );
}
