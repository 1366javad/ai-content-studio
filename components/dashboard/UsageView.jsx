"use client";

import { useState } from "react";
import {
  Zap,
  Activity,
  Cpu,
  BrainCircuit,
  Clock,
  ChevronDown,
  Moon,
  RefreshCw,
  Download,
  FileText,
  Mail,
  Megaphone,
  Globe,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import UsageChart from "./UsageChart";

function getActivityIcon(action = "") {
  const text = action.toLowerCase();

  if (text.includes("blog")) return FileText;
  if (text.includes("email")) return Mail;
  if (text.includes("newsletter")) return Mail;
  if (text.includes("social")) return Megaphone;
  if (text.includes("ad")) return Megaphone;
  if (text.includes("product")) return Globe;
  if (text.includes("landing")) return Globe;

  return FileText;
}
const timeRanges = ["Last 7 days", "Last 30 days", "Last 90 days", "All time"];

function UsageView({ usage, stats }) {
  const [timeRange, setTimeRange] = useState("Last 7 days");
  const [isTimeRangeOpen, setIsTimeRangeOpen] = useState(false);

  function getStartDate(range) {
    const date = new Date();

    if (range === "Last 7 days") date.setDate(date.getDate() - 7);
    if (range === "Last 30 days") date.setDate(date.getDate() - 30);
    if (range === "Last 90 days") date.setDate(date.getDate() - 90);

    return range === "All time" ? null : date;
  }

  const startDate = getStartDate(timeRange);

  const filteredUsage = startDate
    ? usage.filter((item) => new Date(item.created_at) >= startDate)
    : usage;

  const filteredStats = {
    totalRequests: filteredUsage.length,
    totalTokens: filteredUsage.reduce(
      (sum, item) => sum + (item.tokens_used || 0),
      0,
    ),
    totalCost: filteredUsage.reduce(
      (sum, item) => sum + Number(item.cost || 0),
      0,
    ),
  };

  const statsCards = [
    {
      icon: Activity,
      color: "from-[#3B3CFF] to-[#7B5CFF]",
      value: filteredStats.totalRequests,
      label: "Total Requests",
      desc: "AI generations",
    },

    {
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      value: filteredStats.totalTokens,
      label: "Tokens Used",
      desc: "Total tokens",
    },

    {
      icon: BrainCircuit,
      color: "from-[#FF6B6B] to-[#FF8E53]",
      value: filteredUsage.length,
      label: "Usage Events",
      desc: "Tracked activities",
    },

    {
      icon: Clock,
      color: "from-emerald-500 to-teal-500",
      value: `${Math.round(filteredStats.totalTokens / 200)} min`,
      label: "Time Saved",
      desc: "Estimated",
    },
  ];

  const recentActivity = filteredUsage || [];

  function handleExportCsv() {
    const headers = ["Date", "Action", "Model", "Tokens", "Cost"];

    const rows = recentActivity.map((item) => [
      new Date(item.created_at).toLocaleDateString(),
      item.action || "Content Generation",
      item.model || "Unknown",
      item.tokens_used || 0,
      item.cost || 0,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `usage-report-${new Date().toISOString().slice(0, 10)}.csv`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  return (
    <main className="flex-1 p-6">
      <div className="min-h-screen transition-colors duration-300 relative bg-[#F8FAFC] dark:bg-gray-800/70 text-slate-900 dark:text-slate-100">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3B3CFF]/[0.06] dark:bg-indigo-500/[0.08] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FF6B6B]/[0.04] dark:bg-rose-500/[0.06] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Usage Overview
              </h1>
              <p className="text-sm mt-1 text-slate-500 dark:text-slate-400">
                Track your AI activity, tokens, and plan usage
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Time range dropdown (placeholder) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsTimeRangeOpen((prev) => !prev)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-700 shadow-sm"
                >
                  {timeRange}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isTimeRangeOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isTimeRangeOpen && (
                  <div className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg z-20 overflow-hidden">
                    {timeRanges.map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => {
                          setTimeRange(range);
                          setIsTimeRangeOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          timeRange === range
                            ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-700"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Plan Card */}
          <div className="rounded-2xl border p-6 flex flex-col sm:flex-row sm:items-center gap-6 transition-all duration-200 bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 shadow-sm">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B3CFF] to-[#7B5CFF] flex items-center justify-center shadow-lg shadow-indigo-500/25 shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    Pro Plan
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-[#3B3CFF] to-[#7B5CFF] text-white">
                    ACTIVE
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Renews on March 25, 2026
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Credits Used
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  7,340 / 10,000
                </span>
              </div>
              <div className="h-2.5 rounded-full overflow-hidden bg-slate-100 dark:bg-gray-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#3B3CFF] to-[#7B5CFF]"
                  style={{ width: "73%" }}
                />
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                73% used · 2,660 credits remaining
              </p>
            </div>

            <button className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white text-sm font-semibold shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200">
              Upgrade Plan
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statsCards.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl border p-5 transition-all duration-200 cursor-default bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 hover:border-slate-300 dark:hover:border-gray-700 hover:shadow-lg shadow-sm"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-lg ${stat.color} shadow-indigo-500/20`}
                >
                  <stat.icon className="w-5 h-5 text-white " />
                </div>
                <p className="text-2xl font-bold mb-1 text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Usage Chart – placeholder (Recharts یا Chart.js رو باید جدا implement کنی) */}
          <div className="rounded-2xl border p-6 transition-all duration-200 bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 shadow-sm">
            {/* placeholder chart */}

            <UsageChart />
          </div>

          {/* Recent Activity Table */}
          <div className="rounded-2xl border overflow-hidden transition-all duration-200 bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 shadow-sm">
            <div className="px-6 py-4 border-b flex items-center justify-between border-slate-200 dark:border-gray-800">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Recent Activity
                </h3>
                <p className="text-xs mt-0.5 text-slate-400 dark:text-slate-500">
                  Last 8 AI generation events
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-gray-800/50">
                    <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      Date
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      Action
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      Model
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      Tokens
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      Cost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center">
                          <Clock className="w-10 h-10 text-slate-300 dark:text-slate-600 mb-3" />

                          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            No activity found
                          </h4>

                          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            No AI activity was recorded during {timeRange}.
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    recentActivity.map((item, index) => {
                      const Icon = getActivityIcon(item.action);

                      return (
                        <tr
                          key={index}
                          className={`group transition-colors duration-150 ${
                            index % 2 === 0
                              ? "bg-white dark:bg-gray-900"
                              : "bg-slate-50/60 dark:bg-gray-800/30"
                          } hover:bg-indigo-50/40 dark:hover:bg-indigo-950/30`}
                        >
                          <td className="px-6 py-3.5 whitespace-nowrap text-xs text-slate-500 dark:text-slate-400">
                            {new Date(item.created_at).toLocaleDateString()}
                          </td>

                          <td className="px-6 py-3.5">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-slate-100 dark:bg-gray-800">
                                <Icon className="w-3.5 h-3.5 text-indigo-500" />
                              </div>

                              <span className="font-medium text-xs text-slate-700 dark:text-slate-300">
                                {item.action || "Content Generation"}
                              </span>
                            </div>
                          </td>

                          <td className="px-6 py-3.5">
                            <span className="text-xs px-2.5 py-1 rounded-lg font-medium bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-slate-400">
                              {item.model || "Mock Model"}
                            </span>
                          </td>

                          <td className="px-6 py-3.5 text-xs font-medium tabular-nums text-slate-700 dark:text-slate-300">
                            {(item.tokens_used || 0).toLocaleString()}
                          </td>

                          <td className="px-6 py-3.5">
                            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                              ${Number(item.cost || 0).toFixed(2)}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 pb-4">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Usage data updates every 24 hours
              </p>
            </div>

            <button
              onClick={handleExportCsv}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-medium transition-all duration-200 bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-700 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Export Data
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default UsageView;
