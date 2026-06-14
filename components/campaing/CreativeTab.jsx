"use client";

import React, { useState } from "react";

import { cn } from "@/app/lib/utils/utils";
import Image from "next/image";

import {
  Image as image,
  Share2,
  Megaphone,
  Package,
  Layout,
  Sparkles,
  Loader2,
  Download,
  RefreshCw,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";

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
    icon: image,
    count: 0,
    color:
      "bg-orange-50 text-orange-500 dark:bg-orange-900/20 dark:text-orange-400",
  },
];

export default function CreativeTab({ campaign, creatives = [] }) {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState({});

  const categories = baseCategories.map((cat) => ({
    ...cat,
    count: creatives.filter((item) => item.type === cat.key).length,
  }));

  const generateCreative = async (category) => {
    setLoading((prev) => ({
      ...prev,
      [category]: true,
    }));

    try {
      const response = await fetch(
        `/api/campaigns/${campaign.id}/creative/generate`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            category,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setImages((prev) => ({
        ...prev,
        [category]: data.imageUrl || data.output?.imageUrl,
      }));
    } finally {
      setLoading((prev) => ({
        ...prev,
        [category]: false,
      }));
    }
  };

  return (
    <div className="space-y-5">
      <div className="p-5 rounded-2xl flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Image Generation
          </h3>

          <p className="text-xs text-gray-500 mt-0.5">
            Create on-brand visuals for every channel.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map((cat) => {
          const Icon = cat.icon;

          const image = images[cat.key];

          const isLoading = loading[cat.key];

          return (
            <GlassCard key={cat.key} className="p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center",
                    cat.color,
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {cat.label}
                  </p>

                  <p className="text-[10px] text-gray-400">
                    {cat.count} images
                  </p>
                </div>
              </div>

              {isLoading ? (
                <div
                  className="
        h-40
        rounded-xl
        flex
        flex-col
        items-center
        justify-center
        gap-2
        border-2
        border-dashed
        border-slate-200
        dark:border-white/[0.06]
        bg-slate-50
        dark:bg-white/[0.02]
      "
                >
                  <Loader2 className="w-5 h-5 animate-spin text-purple-400" />

                  <p className="text-xs text-slate-400">Generating image...</p>
                </div>
              ) : image ? (
                <div className="relative group rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={cat.label}
                    className="w-full h-40 object-cover rounded-xl"
                  />

                  <div
                    className="
          absolute inset-0
          bg-black/50
          opacity-0
          group-hover:opacity-100
          transition-opacity
          flex
          items-center
          justify-center
          gap-2
        "
                  >
                    <a
                      href={image}
                      target="_blank"
                      rel="noreferrer"
                      className="
            flex items-center gap-1
            px-3 py-1.5
            rounded-lg
            bg-white
            text-slate-900
            text-xs
            font-medium
          "
                    >
                      <Download className="w-3 h-3" />
                      Download
                    </a>

                    <button
                      onClick={() => generateCreative(cat.key)}
                      className="
            flex items-center gap-1
            px-3 py-1.5
            rounded-lg
            bg-purple-500
            text-white
            text-xs
            font-medium
          "
                    >
                      <RefreshCw className="w-3 h-3" />
                      Regenerate
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="
        h-40
        rounded-xl
        flex
        items-center
        justify-center
        border-2
        border-dashed
        border-slate-200
        dark:border-white/[0.06]
        bg-slate-50
        dark:bg-white/[0.02]
      "
                >
                  <button
                    onClick={() => generateCreative(cat.key)}
                    className="
          flex items-center gap-2
          px-4 py-2
          rounded-xl
          bg-gradient-to-r
          from-purple-500
          to-pink-500
          text-white
          text-xs
          font-medium
        "
                  >
                    <Sparkles className="w-3 h-3" />
                    Generate Image
                  </button>
                </div>
              )}
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
