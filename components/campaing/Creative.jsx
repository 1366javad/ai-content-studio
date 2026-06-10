import React from "react";

import { Image, Sparkles } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";

export default function Creative({ creativeTypes }) {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight dark:text-white text-slate-900">
            Creative Studio
          </h2>
          <p
            className="text-sm mt-1
              dark:text-slate-400 text-slate-500"
          >
            AI-generated visuals for your campaigns
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium opacity-60 cursor-not-allowed">
          <Sparkles className="w-4 h-4" /> Generate Image
        </button>
      </div>

      <GlassCard className="p-8 text-center mb-2">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center mx-auto mb-3">
          <Image className="w-7 h-7 text-purple-500" />
        </div>
        <h3
          className="text-base font-bold mb-1
            dark:text-white text-slate-900"
        >
          Image Generation Coming Soon
        </h3>
        <p className="text-sm dark:text-slate-400 text-slate-500">
          AI-powered image generation will be available shortly.{" "}
          <Link
            href="/dashboard/campaings"
            className="text-[#3B3CFF] hover:underline"
          >
            Open a campaign
          </Link>{" "}
          to get started.
        </p>
      </GlassCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {creativeTypes.map((s) => (
          <GlassCard key={s.id} className="p-5 opacity-70">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{s.emoji}</span>
              <p
                className="text-sm font-semibold
                  dark:text-white text-slate-900"
              >
                {s.name}
              </p>
              <span
                className="ml-auto text-[10px] px-2 py-0.5 rounded-full
                  dark:bg-white/[0.06] dark:text-slate-500
                    bg-slate-100 text-slate-400"
              >
                Soon
              </span>
            </div>
            <p
              className="text-xs
                dark:text-slate-500 text-slate-400"
            >
              {s.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
