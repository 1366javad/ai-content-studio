"use client";

import { useState } from "react";
import UseTemplateModal from "./UseTemplateModal";
import {
  FileText,
  Mail,
  Megaphone,
  Globe,
  BookOpen,
  Package,
  Search,
  Linkedin,
  Share2,
} from "lucide-react";
function getTemplateIcon(iconName, category) {
  const icons = {
    FileText,
    Mail,
    Megaphone,
    Globe,
    BookOpen,
    Package,
    Search,
    Share2,
    Linkedin,
  };
  if (category === "Social Media") return Share2;

  return icons[iconName] || FileText;
}
const categoryColors = {
  Blog: "from-blue-500/10 to-blue-600/10 text-blue-500",
  Email: "from-amber-500/10 to-amber-600/10 text-amber-500",
  "Social Media": "from-pink-500/10 to-pink-600/10 text-pink-500",
  Advertising: "from-purple-500/10 to-purple-600/10 text-purple-500",
  "Product Description":
    "from-emerald-500/10 to-emerald-600/10 text-emerald-500",
  "Landing Page": "from-cyan-500/10 to-cyan-600/10 text-cyan-500",
  Newsletter: "from-orange-500/10 to-orange-600/10 text-orange-500",
  "Case Study": "from-indigo-500/10 to-indigo-600/10 text-indigo-500",
  Search: "from-slate-500/10 to-slate-600/10 text-slate-500",
  LinkedIn: "from-sky-500/10 to-sky-600/10 text-sky-500",
};

export default function TemplateCard({ template, campaigns }) {
  const [openModal, setOpenModal] = useState(false);

  const Icon = getTemplateIcon(template.icon, template.category);

  const colors =
    categoryColors[template.category?.trim()] ||
    "from-slate-500/10 to-slate-600/10 text-slate-500";

  return (
    <>
      {openModal && (
        <UseTemplateModal
          template={template}
          campaigns={campaigns}
          onClose={() => setOpenModal(false)}
        />
      )}

      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all p-5 group">
        <div className="flex items-start justify-between mb-3">
          <div
            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors} flex items-center justify-center`}
          >
            <Icon className="w-5 h-5" />
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-1">{template.name}</h3>

        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {template.description}
        </p>

        <div className="flex items-center gap-2">
          <span
            className={`text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 ${colors}`}
          >
            {template.category}
          </span>

          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
            {template.tone}
          </span>
        </div>

        <div className="mt-3 text-xs text-gray-400">
          Used {template.usage_count || 0} times
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="mt-5 w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white py-2.5"
        >
          Use Template
        </button>
      </div>
    </>
  );
}
