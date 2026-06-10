import React from "react";
import { cn } from "@/app/lib/utils/utils";

import {
  TrendingUp,
  Hash,
  Layers,
  Map,
  FileText,
  HelpCircle,
  Sparkles,
} from "lucide-react";

const PlaceholderCard = ({ icon: Icon, title, desc, color, badge }) => {
  return (
    <div className="p-5 rounded-2xl border bg-white border-gray-100 dark:bg-white/[0.03] dark:border-white/[0.06]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "w-8 h-8 rounded-xl flex items-center justify-center",
              color,
            )}
          >
            <Icon className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        {badge && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/[0.06] text-gray-500">
            {badge}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-500 mb-4">{desc}</p>
      <div className="space-y-1.5">
        {[80, 65, 50, 70, 55].map((w, i) => (
          <div
            key={i}
            className="h-2.5 rounded-full bg-gray-100 dark:bg-white/[0.06]"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
      <p className="text-[10px] text-gray-400 mt-3 italic">
        Generate SEO plan to populate
      </p>
    </div>
  );
};

export default function SEOTab({ seo }) {
  const hasSEO = !!seo;
  return (
    <div className="space-y-5">
      <div className="p-5 rounded-2xl border flex items-center bg-white border-gray-100 justify-between dark:bg-white/[0.03] dark:border-white/[0.06]">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            SEO Planning
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Generate comprehensive SEO strategy with keywords, clusters, and
            meta content.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#3B3CFF] to-[#7B5CFF] text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition-all">
          <Sparkles className="w-4 h-4" /> Generate SEO Plan
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PlaceholderCard
          icon={Hash}
          title="Keyword Research"
          color="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
          desc="Target keywords with volume and difficulty."
          badge="0 keywords"
        />

        <PlaceholderCard
          icon={Layers}
          title="Keyword Clusters"
          color="bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
          desc="Grouped keywords by topic and intent."
          badge="0 clusters"
        />
        <PlaceholderCard
          icon={Map}
          title="Topic Clusters"
          color="bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
          desc="Pillar pages and supporting content map."
          badge="0 topics"
        />
        <PlaceholderCard
          icon={TrendingUp}
          title="SEO Strategy"
          color="bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
          desc="Prioritized action plan for organic growth."
        />
        <PlaceholderCard
          icon={FileText}
          title="Meta Descriptions"
          color="bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400"
          desc="Optimised meta titles and descriptions."
          badge="0 generated"
        />
        <PlaceholderCard
          icon={HelpCircle}
          title="FAQs"
          color="bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
          desc="AI-generated FAQ content for search."
          badge="0 FAQs"
        />
      </div>
    </div>
  );
}
