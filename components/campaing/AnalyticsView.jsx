import React from "react";

import { cn } from "@/app/lib/utils/utils";
import { BarChart2, TrendingUp, Target, DollarSign, Clock } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const CARDS = [
  {
    icon: TrendingUp,
    label: "Traffic",
    desc: "Organic & paid traffic analytics",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: BarChart2,
    label: "SEO Performance",
    desc: "Rankings, impressions, and clicks",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Target,
    label: "Campaign Performance",
    desc: "Conversion rates and ROI by campaign",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: DollarSign,
    label: "ROI",
    desc: "Revenue attribution and cost metrics",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export default function AnalyticsView() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h2
          className="text-2xl font-bold tracking-tight
            dark:text-white text-slate-900"
        >
          Analytics
        </h2>
        <p
          className="text-sm mt-1
            dark:text-slate-400 text-slate-500"
        >
          Campaign performance insights and marketing ROI
        </p>
      </div>

      {/* Coming Soon Banner */}
      <GlassCard className="p-10 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B3CFF]/10 to-purple-500/10 flex items-center justify-center mx-auto mb-4">
          <BarChart2 className="w-8 h-8 text-[#3B3CFF]" />
        </div>
        <h3
          className="text-lg font-bold mb-2
            dark:text-white text-slate-900"
        >
          Analytics Coming Soon
        </h3>
        <p
          className="text-sm max-w-md mx-auto
            dark:text-slate-400 text-slate-500"
        >
          Advanced marketing analytics with campaign performance tracking, SEO
          insights, and ROI measurement are on the way.
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <Clock
            className="w-4 h-4
              dark:text-slate-500 text-slate-400"
          />
          <span
            className="text-xs
              dark:text-slate-500 text-slate-400"
          >
            In development
          </span>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CARDS.map((c) => {
          const Icon = c.icon;
          return (
            <GlassCard key={c.label} className="p-5 opacity-60">
              <div
                className={cn(
                  "w-9 h-9 rounded-xl flex items-center justify-center mb-3",
                  c.bg,
                )}
              >
                <Icon className={cn("w-4.5 h-4.5", c.color)} />
              </div>
              <p
                className="text-sm font-semibold mb-1
                  dark:text-white text-slate-900"
              >
                {c.label}
              </p>
              <p
                className="text-xs
                  dark:text-slate-500 text-slate-400"
              >
                {c.desc}
              </p>
              <div
                className="mt-3 text-[10px] px-2.5 py-1 rounded-full inline-block font-medium
                  dark:bg-white/[0.06] dark:text-slate-500
                    bg-slate-100 text-slate-400"
              >
                Coming Soon
              </div>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
