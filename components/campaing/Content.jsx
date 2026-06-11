import React from "react";

import { cn } from "@/app/lib/utils/utils";
import {
  FileText,
  Mail,
  Layout,
  Briefcase,
  Linkedin,
  Instagram,
  Newspaper,
  Sparkles,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";
import CampaignPicker from "../campaigns/CampaignPicker";

const CONTENT_TYPES = [
  {
    id: "blog",
    emoji: "📝",
    icon: FileText,
    label: "Blog Post",
    desc: "Long-form SEO-optimized blog content.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: "email",
    emoji: "✉️",
    icon: Mail,
    label: "Email",
    desc: "Conversion-focused email campaigns.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    id: "newsletter",
    emoji: "📰",
    icon: Newspaper,
    label: "Newsletter",
    desc: "Engaging newsletters for your audience.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    id: "landing",
    emoji: "🖥️",
    icon: Layout,
    label: "Landing Page",
    desc: "High-converting landing page copy.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: "case_study",
    emoji: "📊",
    icon: Briefcase,
    label: "Case Study",
    desc: "Compelling customer success stories.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    id: "linkedin",
    emoji: "💼",
    icon: Linkedin,
    label: "LinkedIn Post",
    desc: "Professional LinkedIn thought leadership.",
    color: "text-blue-600",
    bg: "bg-blue-600/10",
  },
  {
    id: "instagram",
    emoji: "📸",
    icon: Instagram,
    label: "Instagram Caption",
    desc: "Engaging Instagram captions and hooks.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
];
const ICONS = {
  FileText,
  Mail,
  Newspaper,
  Layout,
  Briefcase,
  Linkedin,
  Instagram,
};

export default function Content({ campaigns = [], contentTypes = [] }) {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2
            className="text-2xl font-bold tracking-tight
              dark:text-white text-slate-900"
          >
            Content Hub
          </h2>
          <p
            className="text-sm mt-1
              dark:text-slate-400 text-slate-500"
          >
            AI-powered content generation for every channel
          </p>
        </div>
        <Link
          href="/dashboard/campaings"
          className="text-xs font-medium px-4 py-2 rounded-xl border transition-colors
            dark:border-white/[0.08] dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.06]
              border-slate-200 text-slate-600 hover:bg-slate-50"
        >
          ← Open a Campaign to Create
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {contentTypes.map((t) => {
          const Icon = ICONS[t.icon_name];
          return (
            <GlassCard
              key={t.id}
              className="p-5 hover:-translate-y-[2px] transition-all cursor-pointer"
            >
              <div className="flex justify-between gap-2 mb-3">
                <span className="text-2xl">{t.emoji}</span>
                <div
                  className={cn(
                    "w-7 h-7 rounded-lg flex items-center justify-center gap-2",
                    t.bg_class,
                  )}
                >
                  <Icon className={cn("w-3.5 h-3.5", t.color_class)} />
                </div>
                <div>
                  <CampaignPicker
                    campaigns={campaigns}
                    tab="Content"
                    type={t.id}
                    label="Generate"
                  />
                </div>
              </div>

              <h3
                className="text-sm font-bold mb-1
                  dark:text-white text-slate-900"
              >
                {t.name}
              </h3>
              <p
                className="text-xs leading-relaxed mb-4
                  dark:text-slate-500 text-slate-400"
              >
                {t.description}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
