"use client";

import { useState } from "react";

export default function ContentBriefForm({ onRun, loading }) {
  const [topic, setTopic] = useState("");
  const [audience, setAudience] = useState("");
  const [tone, setTone] = useState("professional");
  const [goal, setGoal] = useState("");

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h3 className="mb-3 font-semibold">Content Brief</h3>

      <div className="space-y-3">
        <input
          className="w-full rounded-lg border p-2"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <input
          className="w-full rounded-lg border p-2"
          placeholder="Audience"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
        />

        <input
          className="w-full rounded-lg border p-2"
          placeholder="Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

        <select
          className="w-full rounded-lg border p-2"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option value="professional">Professional</option>
          <option value="friendly">Friendly</option>
          <option value="bold">Bold</option>
          <option value="luxury">Luxury</option>
          <option value="educational">Educational</option>
        </select>

        <button
          className="w-full rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50"
          disabled={loading || !topic}
          onClick={() => onRun({ topic, audience, tone, goal })}
        >
          {loading ? "Running Agent..." : "Generate Content Package"}
        </button>
      </div>
    </div>
  );
}
