"use client";

import React, { useState } from "react";

import { cn } from "@/app/lib/utils/utils";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus, Search, SlidersHorizontal, FolderKanban } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import CampaignCard from "@/components/campaigns/CampaignCard";
import CreateCampaignModal from "@/components/campaigns/CreateCampaignModal";
import EmptyState from "@/components/ui/EmptyState"; // ← اضافه شد

const STATUS_FILTERS = ["All", "active", "draft", "paused", "completed"];

export default function Campaigns({ campaigns = [] }) {
  const qc = useQueryClient();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showCreate, setShowCreate] = useState(false);
  const [isLoading, setIsLoaading] = useState(false);

  const filtered = campaigns.filter((c) => {
    const matchSearch =
      !search ||
      c.name?.toLowerCase().includes(search.toLowerCase()) ||
      c.industry?.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight dark:text-white text-slate-900">
            Campaigns
          </h2>
          <p className="text-sm mt-1 dark:text-slate-400 text-slate-500">
            {campaigns.length} campaign{campaigns.length !== 1 ? "s" : ""} total
          </p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3B3CFF] to-[#5B5CFF] text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:-translate-y-[1px]"
        >
          <Plus className="w-4 h-4" /> New Campaign
        </button>
      </div>

      {/* Filters */}
      <GlassCard className="p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border outline-none transition-all
                dark:bg-white/[0.05] dark:border-white/[0.08] dark:text-white dark:placeholder-slate-500 dark:focus:border-[#3B3CFF]/50
                  bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#3B3CFF]/50 focus:ring-2 focus:ring-[#3B3CFF]/10"
            />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 dark:text-slate-500 text-slate-400" />
            <div className="flex gap-1">
              {STATUS_FILTERS.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize",
                    statusFilter === s
                      ? "bg-[#3B3CFF] text-white"
                      : "dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.06] text-slate-500 hover:text-slate-900 hover:bg-slate-100",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Grid / Empty / Loading */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-48 rounded-2xl animate-pulse dark:bg-white/[0.04] bg-slate-100"
            />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={FolderKanban}
          title={
            campaigns.length === 0 ? "No campaigns yet" : "No results found"
          }
          description={
            campaigns.length === 0
              ? "Create your first AI-powered marketing campaign"
              : "Try adjusting your filters or search term"
          }
          ctaLabel={campaigns.length === 0 ? "New Campaign" : undefined}
          onClick={
            campaigns.length === 0 ? () => setShowCreate(true) : undefined
          }
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c) => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>
      )}

      {showCreate && (
        <CreateCampaignModal
          onClose={() => setShowCreate(false)}
          onCreated={() => {
            qc.invalidateQueries({ queryKey: ["campaigns"] });
            setShowCreate(false);
          }}
        />
      )}
    </div>
  );
}
