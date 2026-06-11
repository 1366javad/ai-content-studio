"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UseTemplateModal({ template, onClose, campaigns }) {
  const router = useRouter();

  const [projects, setProjects] = useState([]);
  const [selectedCampaignsId, setSelectedCampaignsId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();

        if (active) {
          setProjects(data.projects || []);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    fetchProjects();

    return () => {
      active = false;
    };
  }, []);

  const handleContinue = () => {
    const campaign = campaigns.find((c) => c.id === selectedCampaignsId);
    if (!campaign) return;

    // دقیقاً مثل CampaignPicker
    const url = `/dashboard/campaings/${campaign.id}?tab=content`;
    // اگر tab خاص می‌خوای، prop اضافه کن: tab="research" و اینجا استفاده کن

    router.push(url);
    onClose(); // بستن مودال بعد از رفتن
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-gray-900 dark:text-white">
          Loading projects...
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Use Template
        </h2>

        {campaigns.length === 0 ? (
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              No campaign found.
            </p>

            <button
              onClick={() => router.push("/dashboard/campaings")}
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl"
            >
              Create Campaign First
            </button>
          </div>
        ) : (
          <>
            <select
              value={selectedCampaignsId}
              onChange={(e) => setSelectedCampaignsId(e.target.value)}
              className="w-full border rounded-xl p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="">Select Campaigns</option>

              {campaigns.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={onClose}
                className="px-4 py-2 border rounded-xl text-gray-900 dark:text-white"
              >
                Cancel
              </button>

              <button
                disabled={!selectedCampaignsId}
                onClick={handleContinue}
                className="px-4 py-2 bg-indigo-600 text-white rounded-xl disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
