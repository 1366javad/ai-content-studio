import React from "react";
import { cn } from "@/app/lib/utils/utils";

import {
  Search,
  Facebook,
  Linkedin,
  Video,
  Sparkles,
  FileText,
  Hash,
  MousePointer,
} from "lucide-react";

const basePlatforms = [
  {
    key: "google_ads",
    label: "Google Ads",
    icon: Search,
    color: "bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400",
    outputs: ["Headlines", "Descriptions", "Extensions"],
  },
  {
    key: "meta_ads",
    label: "Meta Ads",
    icon: Facebook,
    color:
      "bg-indigo-50 text-indigo-500 dark:bg-indigo-900/20 dark:text-indigo-400",
    outputs: ["Primary Text", "Headlines", "CTAs"],
  },
  {
    key: "linkedin_ads",
    label: "LinkedIn Ads",
    icon: Linkedin,
    color: "bg-sky-50 text-sky-500 dark:bg-sky-900/20 dark:text-sky-400",
    outputs: ["Intro Text", "Headlines", "Descriptions"],
  },
  {
    key: "tiktok_ads",
    label: "TikTok Ads",
    icon: Video,
    color: "bg-pink-50 text-pink-500 dark:bg-pink-900/20 dark:text-pink-400",
    outputs: ["Ad Text", "CTAs", "Script Ideas"],
  },
];

export default function AdsTab({ campaign, ads = [] }) {
  const adPlatforms = basePlatforms.map((platform) => ({
    ...platform,
    count: ads.filter((item) => item.type === platform.key).length,
  }));
  return (
    <div className="space-y-5">
      <div className="p-5 rounded-2xl bg-white border-gray-100 border flex items-center justify-between dark:bg-white/[0.03] dark:border-white/[0.06]">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Advertising Assets
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Generate high-converting ad copy for every platform.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#3B3CFF] to-[#7B5CFF] text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition-all">
          <Sparkles className="w-4 h-4" /> Generate Ad Campaign
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {adPlatforms.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.label}
              className="p-5 rounded-2xl border bg-white border-gray-100 dark:bg-white/[0.03] dark:border-white/[0.06]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center",
                    p.color,
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {p.label}
                </h3>
              </div>
              <div className="space-y-2">
                {p.outputs.map((o) => (
                  <div
                    key={o}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs
                     dark:bg-white/[0.04] bg-gray-50"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {o}
                    </span>
                    <span className="ml-auto text-[10px] text-gray-400">
                      {p.count} generated
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
