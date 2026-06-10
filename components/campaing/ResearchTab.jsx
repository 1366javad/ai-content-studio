import React from "react";

import {
  Globe,
  Users,
  TrendingUp,
  Lightbulb,
  AlertCircle,
  Search,
  Sparkles,
} from "lucide-react";
import PlaceholderCard from "./shared/PlaceholderCard";

export default function ResearchTab({ campaign, research }) {
  const hasResearch = !!research;

  return (
    <div className="space-y-5">
      {/* CTA */}
      <div className="p-5 rounded-2xl border flex items-center bg-white border-gray-100 justify-between dark:bg-white/[0.03] dark:border-white/[0.06]">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Market Intelligence
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            AI-powered research across market, competitors, audience, and
            trends.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#3B3CFF] to-[#7B5CFF] text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition-all">
          <Sparkles className="w-4 h-4" /> Generate Research
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PlaceholderCard
          icon={Globe}
          title="Market Research"
          color="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
          desc="Market size, trends, and opportunities."
          items={[1, 2, 3, 4]}
        />

        <PlaceholderCard
          icon={Search}
          title="Competitor Analysis"
          color="bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
          desc="Top competitors and their positioning."
          items={[1, 2, 3]}
        />
        <PlaceholderCard
          icon={Users}
          title="Audience Analysis"
          color="bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
          desc="Demographics, psychographics, pain points."
          items={[1, 2, 3, 4]}
        />
        <PlaceholderCard
          icon={TrendingUp}
          title="Trend Analysis"
          color="bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
          desc="Current and emerging market trends."
          items={[1, 2, 3]}
        />
        <PlaceholderCard
          icon={AlertCircle}
          title="Pain Points"
          color="bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
          desc="Key customer pain points to address."
          items={[1, 2, 3, 4, 5]}
        />
        <PlaceholderCard
          icon={Lightbulb}
          title="Opportunities"
          color="bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
          desc="Growth and differentiation opportunities."
          items={[1, 2, 3]}
        />
      </div>
    </div>
  );
}
