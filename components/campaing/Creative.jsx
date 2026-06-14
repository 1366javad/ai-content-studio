"use client";

import React, { useState } from "react";

import {
  Image,
  Share2,
  Megaphone,
  Package,
  Layout,
  Sparkles,
  Loader2,
  Download,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";

const SECTIONS = [
  {
    id: "blog_cover",
    emoji: "🖼️",
    label: "Blog Covers",
    desc: "Eye-catching cover images for blog posts.",
    prompt: "a professional blog cover image",
  },
  {
    id: "social",
    emoji: "📱",
    label: "Social Media Images",
    desc: "Branded images for all social platforms.",
    prompt: "a vibrant social media post image",
  },
  {
    id: "ad_creative",
    emoji: "📢",
    label: "Ad Creatives",
    desc: "High-converting visual ad creatives.",
    prompt: "a compelling advertisement creative",
  },
  {
    id: "product",
    emoji: "📦",
    label: "Product Mockups",
    desc: "Professional product mockup visuals.",
    prompt: "a clean product mockup image",
  },
  {
    id: "banner",
    emoji: "🎨",
    label: "Banners",
    desc: "Web banners and promotional graphics.",
    prompt: "a professional marketing banner",
  },
];

export default function Creative({ creativeTypes = [] }) {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState({});

  const [prompt, setPrompt] = useState("");
  const [customLoading, setCustomLoading] = useState(false);
  const [customImage, setCustomImage] = useState(null);

  const generateImage = async (sectionId, customPrompt = "") => {
    if (sectionId === "custom") {
      setCustomLoading(true);

      try {
        const response = await fetch("/api/creative/generate", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            type: "custom",
            prompt: customPrompt,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error);
        }

        setCustomImage(`data:image/png;base64,${data.imageData}`);
      } finally {
        setCustomLoading(false);
      }

      return;
    }

    const section = SECTIONS.find((x) => x.id === sectionId);

    setLoading((prev) => ({
      ...prev,
      [sectionId]: true,
    }));

    try {
      const response = await fetch("/api/creative/generate", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          type: sectionId,
          prompt: section?.prompt || "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setImages((prev) => ({
        ...prev,
        [sectionId]: `data:image/png;base64,${data.imageData}`,
      }));
    } finally {
      setLoading((prev) => ({
        ...prev,
        [sectionId]: false,
      }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight dark:text-white text-slate-900">
            Creative Studio
          </h2>

          <p className="text-sm mt-1 dark:text-slate-400 text-slate-500">
            AI-generated visuals for your campaigns
          </p>
        </div>
      </div>

      {/* Custom Prompt */}

      <GlassCard className="p-5">
        <p className="text-sm font-semibold mb-3 dark:text-white text-slate-900">
          ✨ Generate a Custom Image
        </p>

        <div className="flex gap-3">
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate..."
            className="
              flex-1
              px-4
              py-2.5
              rounded-xl
              text-sm
              border
              outline-none

              dark:bg-white/[0.05]
              dark:border-white/[0.08]
              dark:text-white

              bg-white
              border-slate-200
              text-slate-900
            "
          />

          <button
            onClick={() => prompt.trim() && generateImage("custom", prompt)}
            disabled={customLoading || !prompt.trim()}
            className="
              flex items-center gap-2
              px-5 py-2.5
              rounded-xl
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              text-white
              text-sm
              font-medium
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {customLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            Generate
          </button>
        </div>

        {customImage && (
          <div className="mt-4 relative group rounded-xl overflow-hidden inline-block">
            <img
              src={customImage}
              alt="Custom generated"
              className="max-h-64 rounded-xl object-contain"
            />

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <a
                href={customImage}
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
            </div>
          </div>
        )}
      </GlassCard>

      {/* Categories */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SECTIONS.map((section) => {
          const image = images[section.id];

          const isLoading = loading[section.id];

          return (
            <GlassCard key={section.id} className="p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{section.emoji}</span>

                <div>
                  <p className="text-sm font-semibold dark:text-white text-slate-900">
                    {section.label}
                  </p>

                  <p className="text-xs dark:text-slate-500 text-slate-400">
                    {section.desc}
                  </p>
                </div>
              </div>

              {isLoading ? (
                <div className="h-40 rounded-xl flex flex-col items-center justify-center gap-2 border-2 border-dashed dark:border-white/[0.06] dark:bg-white/[0.02] border-slate-200 bg-slate-50">
                  <Loader2 className="w-5 h-5 animate-spin text-purple-400" />

                  <p className="text-xs text-slate-400">Generating image...</p>
                </div>
              ) : image ? (
                <div className="relative group rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={section.label}
                    className="w-full h-40 object-cover rounded-xl"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <a
                      href={image}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white text-slate-900 text-xs font-medium"
                    >
                      <Download className="w-3 h-3" />
                      Download
                    </a>

                    <button
                      onClick={() => generateImage(section.id, "")}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-500 text-white text-xs font-medium"
                    >
                      <Sparkles className="w-3 h-3" />
                      Regenerate
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-40 rounded-xl flex items-center justify-center border-2 border-dashed dark:border-white/[0.06] dark:bg-white/[0.02] border-slate-200 bg-slate-50">
                  <button
                    onClick={() => generateImage(section.id, "")}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium"
                  >
                    <Sparkles className="w-3 h-3" />
                    Generate
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
