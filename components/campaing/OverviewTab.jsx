import React from "react";
import { cn } from "@/app/lib/utils/utils";

import {
  Target,
  Users,
  Megaphone,
  Star,
  Mic2,
  FileText,
  Sparkles,
} from "lucide-react";

const Section = ({ icon: Icon, title, value, placeholder, color }) => {
  return (
    <div
      className="p-5 rounded-2xl border
        dark:bg-white/[0.03] dark:border-white/[0.06]
        bg-white border-gray-100"
    >
      <div className="flex items-center gap-2 mb-3">
        <div
          className={cn(
            "w-7 h-7 rounded-lg flex items-center justify-center",
            color,
          )}
        >
          <Icon className="w-3.5 h-3.5" />
        </div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      {value ? (
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {value}
        </p>
      ) : (
        <div className="space-y-2">
          <div className="h-3 rounded-full bg-gray-100 dark:bg-white/[0.06] w-full" />
          <div className="h-3 rounded-full bg-gray-100 dark:bg-white/[0.06] w-4/5" />
          <div className="h-3 rounded-full bg-gray-100 dark:bg-white/[0.06] w-3/5" />
          <p className="text-xs text-gray-400 mt-2 italic">{placeholder}</p>
        </div>
      )}
    </div>
  );
};

export default function OverviewTab({ campaign }) {
  return (
    <div className="space-y-5">
      {/* Summary banner */}
      <div className="p-5 rounded-2xl border border-dashed border-[#3B3CFF]/20 bg-[#3B3CFF]/3 flex items-start gap-4 dark:border-[#3B3CFF]/30 dark:bg-[#3B3CFF]/5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3B3CFF] to-[#7B5CFF] flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
            Campaign Intelligence Center
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            The AI agent will analyze your campaign and generate a comprehensive
            summary including positioning, USP, brand voice, and strategy
            recommendations.
          </p>
          <button className="mt-3 text-xs font-medium text-[#3B3CFF] hover:underline">
            Generate Campaign Summary →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Section
          icon={Target}
          title="Campaign Goal"
          value={campaign.goal}
          placeholder="Generate with AI Agent"
          color="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
        />
        <Section
          icon={Users}
          title="Target Audience"
          value={campaign.target_audience}
          placeholder="Audience analysis pending"
          color="bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
        />
        <Section
          icon={FileText}
          title="Brand Description"
          value={campaign.brand_description}
          placeholder="Brand voice not configured"
          color="bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
        />
        <Section
          icon={Megaphone}
          title="Positioning"
          value={campaign.positioning}
          placeholder="AI-generated positioning"
          color="bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
        />
        <Section
          icon={Star}
          title="USP"
          value={campaign.usp}
          placeholder="Unique selling proposition"
          color="bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
        />
        <Section
          icon={Mic2}
          title="Brand Voice"
          value={campaign.brand_voice}
          placeholder="Tone and voice analysis"
          color="bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400"
        />
      </div>
    </div>
  );
}
