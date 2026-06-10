import React, { useState } from "react";
import { cn } from "@/app/lib/utils/utils";

import {
  FileText,
  Image,
  Video,
  Download,
  Grid3X3,
  List,
  FolderOpen,
} from "lucide-react";
import EmptyState from "../ui/EmptyState";

const mockAssets = [
  {
    id: 1,
    name: "Product Launch Blog Post.docx",
    type: "document",
    size: "24 KB",
    date: "2 days ago",
    icon: FileText,
    color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
  },
  {
    id: 2,
    name: "Hero Banner 1200x628.png",
    type: "image",
    size: "340 KB",
    date: "3 days ago",
    icon: Image,
    color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
  },
  {
    id: 3,
    name: "Email Campaign Copy.pdf",
    type: "document",
    size: "18 KB",
    date: "5 days ago",
    icon: FileText,
    color: "text-red-500 bg-red-50 dark:bg-red-900/20",
  },
  {
    id: 4,
    name: "Social Post Set x5.zip",
    type: "image",
    size: "1.2 MB",
    date: "1 week ago",
    icon: Image,
    color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    id: 5,
    name: "Campaign Brief Export.pdf",
    type: "export",
    size: "52 KB",
    date: "1 week ago",
    icon: Download,
    color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20",
  },
];

const tabs = ["All", "Documents", "Images", "Videos", "Exports"];

export default function AssetsTab({ campaign, assets = [] }) {
  const [activeType, setActiveType] = useState("All");
  const [viewMode, setViewMode] = useState("list");

  const filtered =
    activeType === "All"
      ? assets
      : assets.filter(
          (a) =>
            a.type === activeType.toLowerCase().slice(0, -1) ||
            a.type === activeType.toLowerCase(),
        );

  const getAssetUI = (type) => {
    if (type === "image")
      return {
        icon: Image,
        color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
      };
    if (type === "video")
      return {
        icon: Video,
        color: "text-pink-500 bg-pink-50 dark:bg-pink-900/20",
      };
    if (type === "export")
      return {
        icon: Download,
        color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20",
      };
    if (type === "document")
      return {
        icon: FileText,
        color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
      };
    return {
      icon: FileText,
      color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
    };
  };

  return (
    <div className="space-y-5">
      <div className="p-5 rounded-2xl border flex items-center bg-white border-gray-100 justify-between dark:bg-white/[0.03] dark:border-white/[0.06]">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Campaign Asset Library
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            All documents, images, videos, and exports for this campaign.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={cn(
              "p-2 rounded-lg transition-colors",
              viewMode === "grid"
                ? "bg-[#3B3CFF]/10 text-[#3B3CFF]"
                : "text-gray-400 hover:text-gray-600",
            )}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={cn(
              "p-2 rounded-lg transition-colors",
              viewMode === "list"
                ? "bg-[#3B3CFF]/10 text-[#3B3CFF]"
                : "text-gray-400 hover:text-gray-600",
            )}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Type filter */}
      <div className="flex gap-1.5 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveType(t)}
            className={cn(
              "px-3 py-1.5 rounded-xl text-xs font-medium transition-all",
              activeType === t
                ? "bg-[#3B3CFF]/10 text-[#3B3CFF] dark:bg-[#3B3CFF]/20 dark:text-indigo-400"
                : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 bg-gray-100 dark:bg-white/[0.04]",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Assets */}

      {filtered.length === 0 ? (
        <EmptyState
          icon={FolderOpen}
          title={`No ${activeType.toLowerCase()} found`}
          description="This campaign doesn't have any assets in this category yet."
        />
      ) : viewMode === "list" ? (
        <div className="rounded-2xl border bg-white border-gray-100 overflow-hidden dark:bg-white/[0.03] dark:border-white/[0.06]">
          {filtered.map((a, i) => {
            const { icon: Icon, color } = getAssetUI(a.type);
            return (
              <div
                key={a.id}
                className={cn(
                  "flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors cursor-pointer",
                  i > 0 && "border-t border-gray-100 dark:border-white/[0.04]",
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    color,
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                    {a.name}
                  </p>
                  <p className="text-[10px] text-gray-400">
                    {a.file_size} ·{" "}
                    {new Date(a.created_at).toLocaleDateString()}
                  </p>
                </div>
                <Download className="w-3.5 h-3.5 text-gray-400 hover:text-[#3B3CFF] cursor-pointer transition-colors" />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((a) => {
            const { icon: Icon, color } = getAssetUI(a.type);
            return (
              <div
                key={a.id}
                className="p-4 rounded-2xl border bg-white border-gray-100 cursor-pointer hover:shadow-md transition-all dark:bg-white/[0.03] dark:border-white/[0.06] dark:hover:bg-white/[0.06]"
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center mb-3",
                    color,
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs font-medium text-gray-800 dark:text-gray-200 truncate mb-1">
                  {a.name}
                </p>
                <p className="text-[10px] text-gray-400">{a.file_size}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
