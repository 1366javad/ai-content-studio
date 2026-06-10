import React from "react";

import { cn } from "@/app/lib/utils/utils";
import {
  Search,
  BarChart2,
  Users,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";
import CampaignPicker from "../campaigns/CampaignPicker";

const TOOLS = [
  {
    icon: BarChart2,
    label: "Market Research",
    desc: "Analyze market size, trends, and industry dynamics.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Search,
    label: "Competitor Analysis",
    desc: "Deep dive into competitor strategies and positioning.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Users,
    label: "Audience Analysis",
    desc: "Understand your target audience at a deeper level.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: TrendingUp,
    label: "Trend Analysis",
    desc: "Identify emerging trends and market opportunities.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: AlertCircle,
    label: "Pain Points",
    desc: "Uncover customer challenges and buying objections.",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: Lightbulb,
    label: "Opportunities",
    desc: "Spot market gaps and untapped growth areas.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
];

export default function Research({ campaigns }) {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2
            className="text-2xl font-bold tracking-tight
              dark :text-white text-slate-900"
          >
            Research
          </h2>
          <p
            className="text-sm mt-1
              dark:text-slate-400 text-slate-500"
          >
            AI-powered market intelligence for your campaigns
          </p>
        </div>
        <Link
          href="/dashboard/campaings"
          className="text-xs font-medium px-4 py-2 rounded-xl border transition-colors
            dark:border-white/[0.08] dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.06]
              border-slate-200 text-slate-600 hover:bg-slate-50"
        >
          ← Open a Campaign to Start Research
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TOOLS.map((t) => {
          const Icon = t.icon;
          return (
            <GlassCard
              key={t.label}
              className="p-5 hover:-translate-y-[2px] transition-all  group overflow-visible"
            >
              <div className="flex justify-between">
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center mb-4",
                    t.bg,
                  )}
                >
                  <Icon className={cn("w-5 h-5", t.color)} />
                </div>
                <div>
                  <CampaignPicker campaigns={campaigns} tab="Research" />
                </div>
              </div>
              <h3
                className="text-sm font-bold mb-1.5
                 dark:text-white text-slate-900"
              >
                {t.label}
              </h3>
              <p
                className="text-xs leading-relaxed mb-4
                  dark:text-slate-500 text-slate-400"
              >
                {t.desc}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
