import React from "react";

import { cn } from "@/app/lib/utils/utils";
import { Megaphone, Sparkles } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";

const PLATFORMS = [
  {
    emoji: "🔍",
    label: "Google Ads",
    desc: "Search, Display, and Performance Max ad copy.",
    outputs: [
      "Headlines (30 char)",
      "Descriptions (90 char)",
      "CTAs",
      "Ad Extensions",
    ],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    emoji: "👥",
    label: "Meta Ads",
    desc: "Facebook and Instagram ad creatives and copy.",
    outputs: [
      "Primary Text",
      "Headlines",
      "Ad Copy Variations",
      "Creative Brief",
    ],
    color: "from-indigo-500/10 to-blue-500/10",
  },
  {
    emoji: "💼",
    label: "LinkedIn Ads",
    desc: "Professional B2B advertising copy.",
    outputs: [
      "Headline",
      "Introductory Text",
      "Description",
      "Sponsored Content",
    ],
    color: "from-blue-600/10 to-blue-400/10",
  },
  {
    emoji: "🎵",
    label: "TikTok Ads",
    desc: "Engaging TikTok video ad scripts and copy.",
    outputs: ["Hook (3 sec)", "Script", "Caption", "Hashtags"],
    color: "from-pink-500/10 to-red-500/10",
  },
];

export default function AdsView({ platforms = [] }) {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2
            className="text-2xl font-bold tracking-tight
              dark:text-white text-slate-900"
          >
            Ads
          </h2>
          <p
            className="text-sm mt-1
              dark:text-slate-400 text-slate-500"
          >
            Multi-platform advertising assets powered by AI
          </p>
        </div>
        <Link
          href="/dashboard/campaings"
          className="text-xs font-medium px-4 py-2 rounded-xl border transition-colors
            dark:border-white/[0.08] dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.06] border-slate-200 text-slate-600 hover:bg-slate-50"
        >
          ← Open a Campaign to Generate Ads
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {platforms.map((p) => (
          <GlassCard
            key={p.id}
            className={cn("p-5 bg-gradient-to-br", p.gradient_class)}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{p.emoji}</span>
              <div>
                <p
                  className="text-sm font-bold
                    dark:text-white text-slate-900"
                >
                  {p.name}
                </p>
                <p
                  className="text-xs
                    dark:text-slate-500 text-slate-400"
                >
                  {p.description}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {p.ad_output_types
                ?.sort((a, b) => a.sort_order - b.sort_order)
                .map((o) => (
                  <div
                    key={o.id}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs border
                    dark:bg-white/[0.04] dark:border-white/[0.06]
                     bg-white/80 border-slate-100"
                  >
                    <span
                      className="font-medium
                      dark:text-slate-300 text-slate-700"
                    >
                      {o.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full
                        dark:bg-white/[0.06] dark:text-slate-400
                         bg-slate-100 text-slate-400"
                      >
                        Not generated
                      </span>
                      <button className="text-[#3B3CFF] hover:underline text-[10px] font-medium">
                        Generate
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
