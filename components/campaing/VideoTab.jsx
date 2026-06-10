import React from "react";
import { cn } from "@/app/lib/utils/utils";

import { Video, Film, Youtube, FileText, Play, Sparkles } from "lucide-react";

const baseCategories = [
  {
    key: "reel",
    label: "Reels",
    icon: Film,
    color: "bg-pink-50 text-pink-500 dark:bg-pink-900/20 dark:text-pink-400",
    desc: "Short-form vertical video",
  },
  {
    key: "tiktok",
    label: "TikTok",
    icon: Video,
    color:
      "bg-purple-50 text-purple-500 dark:bg-purple-900/20 dark:text-purple-400",
    desc: "Trending short content",
  },
  {
    key: "youtube_short",
    label: "YouTube Shorts",
    icon: Youtube,
    color: "bg-red-50 text-red-500 dark:bg-red-900/20 dark:text-red-400",
    desc: "60-second clips",
  },
  {
    key: "storyboard",
    label: "Storyboards",
    icon: FileText,
    color: "bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400",
    desc: "Visual planning frames",
  },
  {
    key: "video_script",
    label: "Video Scripts",
    icon: Play,
    color:
      "bg-emerald-50 text-emerald-500 dark:bg-emerald-900/20 dark:text-emerald-400",
    desc: "Full narration scripts",
  },
];

export default function VideoTab({ campaign, videos = [] }) {
  const categories = baseCategories.map((cat) => ({
    ...cat,
    count: videos.filter((item) => item.type === cat.key).length,
  }));
  return (
    <div className="space-y-5">
      <div className="p-5 rounded-2xl border bg-white border-gray-100 flex items-center justify-between dark:bg-white/[0.03] dark:border-white/[0.06]">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Video Generation
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Scripts, storyboards, and short-form video assets.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#3B3CFF] to-[#7B5CFF] text-white text-sm font-medium opacity-70 cursor-not-allowed">
          <Sparkles className="w-4 h-4" /> Generate Video
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.label}
              className="p-5 rounded-2xl border bg-white border-gray-100 cursor-pointer hover:shadow-md transition-all dark:bg-white/[0.03] dark:border-white/[0.06] dark:hover:bg-white/[0.06]"
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center mb-3",
                  cat.color,
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
                {cat.label}
              </h3>
              <p className="text-xs text-gray-500">{cat.desc}</p>
              <p className="text-[10px] text-gray-400 mt-3 border-t border-gray-100 dark:border-white/[0.06] pt-3">
                {cat.count} assets — Coming soon
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
