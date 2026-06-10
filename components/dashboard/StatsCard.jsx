import React from "react";
import GlassCard from "../ui/GlassCard";
import { cn } from "@/app/lib/utils/utils";

export default function StatsCard({ icon: Icon, label, value, trend, color }) {
  return (
    <GlassCard className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p
            className="text-xs font-medium uppercase tracking-wider mb-2
             dark:text-slate-500 text-slate-400"
          >
            {label}
          </p>
          <p
            className="text-2xl font-bold tracking-tight
              dark:text-white text-slate-900"
          >
            {value}
          </p>
          {trend && (
            <p
              className={cn(
                "text-xs mt-1 font-medium",
                trend > 0 ? "text-emerald-500" : "text-red-400",
              )}
            >
              {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}% this week
            </p>
          )}
        </div>
        <div
          className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center",
            color || "bg-indigo-500/10",
          )}
        >
          <Icon
            className={cn("w-5 h-5", color ? "text-white" : "text-[#3B3CFF]")}
          />
        </div>
      </div>
    </GlassCard>
  );
}
