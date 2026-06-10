import React from "react";

import { cn } from "@/app/lib/utils/utils";
import {
  Search,
  Hash,
  FileText,
  TrendingUp,
  AlignLeft,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";
import CampaignPicker from "../campaigns/CampaignPicker";

const TOOLS = [
  {
    icon: Search,
    label: "Keyword Research",
    desc: "Find high-volume, low-competition keywords.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Hash,
    label: "Keyword Clusters",
    desc: "Group keywords into semantic clusters.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: FileText,
    label: "Topic Clusters",
    desc: "Build pillar pages and supporting content topics.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: TrendingUp,
    label: "SEO Strategy",
    desc: "Full SEO roadmap and on-page recommendations.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: AlignLeft,
    label: "Meta Descriptions",
    desc: "AI-optimized meta titles and descriptions.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    icon: HelpCircle,
    label: "FAQs",
    desc: "Generate FAQs to capture featured snippets.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
];

export default function SEO({ campaigns }) {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2
            className="text-2xl font-bold tracking-tight
              dark:text-white text-slate-900"
          >
            SEO
          </h2>
          <p className="text-sm mt-1 dark:text-slate-400 text-slate-500">
            AI-powered SEO planning and optimization
          </p>
        </div>
        <Link
          href="/campaigns"
          className="text-xs font-medium px-4 py-2 rounded-xl border transition-colors
            dark:border-white/[0.08] dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.06]
              border-slate-200 text-slate-600 hover:bg-slate-50"
        >
          ← Open a Campaign to Start
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TOOLS.map((t) => {
          const Icon = t.icon;
          return (
            <GlassCard
              key={t.label}
              className="p-5 hover:-translate-y-[2px] transition-all cursor-pointer"
            >
              <div className="flex justify-between gap-2 mb-2">
                <div
                  className={cn(
                    "w-7 h-7 rounded-xl flex items-center justify-center mb-4",
                    t.bg,
                  )}
                >
                  <Icon className={cn("w-5 h-5", t.color)} />
                </div>
                <div>
                  <CampaignPicker campaigns={campaigns} tab="SEO" />
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
