"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";

// داده نمونه (می‌تونی از API بگیری)
const mockData = [
  { name: "Mon", tokens: 50, requests: 8 },
  { name: "Tue", tokens: 90, requests: 14 },
  { name: "Wed", tokens: 65, requests: 10 },
  { name: "Thu", tokens: 110, requests: 18 },
  { name: "Fri", tokens: 80, requests: 12 },
  { name: "Sat", tokens: 30, requests: 5 },
  { name: "Sun", tokens: 55, requests: 9 },
];

export default function UsageChart() {
  const [activeTab, setActiveTab] = useState("tokens");

  const currentDataKey = activeTab === "tokens" ? "tokens" : "requests";

  return (
    <div className="rounded-2xl border p-6 transition-all duration-200 bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            Usage Over Time
          </h3>
          <p className="text-xs mt-0.5 text-slate-400 dark:text-slate-500">
            Daily breakdown
          </p>
        </div>

        {/* Tabs */}
        <div className="flex rounded-xl p-1 gap-1 bg-slate-100 dark:bg-gray-800">
          <button
            onClick={() => setActiveTab("tokens")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              activeTab === "tokens"
                ? "bg-[#3B3CFF] text-white shadow"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            }`}
          >
            Tokens
          </button>
          <button
            onClick={() => setActiveTab("requests")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              activeTab === "requests"
                ? "bg-[#3B3CFF] text-white shadow"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            }`}
          >
            Requests
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={mockData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B3CFF" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#3B3CFF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(0,0,0,0.05)"
              vertical={false}
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11 }}
              tickFormatter={(value) => `${value}`}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255,255,255,0.95)",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              labelStyle={{ color: "#1e293b", fontWeight: "bold" }}
              itemStyle={{ color: "#3B3CFF" }}
            />

            <Area
              type="monotone"
              dataKey={currentDataKey}
              stroke="#3B3CFF"
              strokeWidth={2.5}
              fill="url(#colorGrad)"
              fillOpacity={0.6}
              dot={{ r: 4, stroke: "#fff", strokeWidth: 2 }}
              activeDot={{ r: 6, stroke: "#3B3CFF", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
