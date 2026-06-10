import React from "react";
import { cn } from "@/app/lib/utils/utils";

import {
  Image,
  Share2,
  Megaphone,
  Package,
  Layout,
  Sparkles,
  Plus,
} from "lucide-react";
import EmptyState from "../ui/EmptyState";

const baseCategories = [
  {
    key: "blog_cover",
    label: "Blog Covers",
    icon: Layout,
    count: 0,
    color: "bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400",
  },
  {
    key: "social_media",
    label: "Social Media",
    icon: Share2,
    count: 0,
    color: "bg-pink-50 text-pink-500 dark:bg-pink-900/20 dark:text-pink-400",
  },
  {
    key: "ad_creative",
    label: "Ad Creatives",
    icon: Megaphone,
    count: 0,
    color:
      "bg-purple-50 text-purple-500 dark:bg-purple-900/20 dark:text-purple-400",
  },
  {
    key: "product_mockup",
    label: "Product Mockups",
    icon: Package,
    count: 0,
    color:
      "bg-emerald-50 text-emerald-500 dark:bg-emerald-900/20 dark:text-emerald-400",
  },
  {
    key: "banner",
    label: "Banners",
    icon: Image,
    count: 0,
    color:
      "bg-orange-50 text-orange-500 dark:bg-orange-900/20 dark:text-orange-400",
  },
];

export default function CreativeTab({ campaign, creatives = [] }) {
  const categories = baseCategories.map((cat) => ({
    ...cat,
    count: creatives.filter((item) => item.type === cat.key).length,
  }));

  return (
    <div className="space-y-5">
      <div
        className="p-5 rounded-2xl border flex items-center justify-between
     
           dark:bg-white/[0.03] dark:border-white/[0.06]
            bg-white border-gray-100"
      >
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Image Generation
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Create on-brand visuals for every channel.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#3B3CFF] to-[#7B5CFF] text-white text-sm font-medium opacity-70 cursor-not-allowed">
          <Sparkles className="w-4 h-4" /> Generate Image
        </button>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.label}
              className="p-4 rounded-2xl border text-center cursor-pointer hover:shadow-md transition-all group dark:bg-white/[0.03] dark:border-white/[0.06] dark:hover:bg-white/[0.06]
                  bg-white border-gray-100 hover:border-[#3B3CFF]/20"
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2",
                  cat.color,
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {cat.label}
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">
                {cat.count} images
              </p>
            </div>
          );
        })}
      </div>

      {/* Empty canvas */}
      <EmptyState
        icon={Image}
        title={"No images generated yet"}
        description="Image generation coming soon — your brand visuals will appear here."
      />
    </div>
  );
}
