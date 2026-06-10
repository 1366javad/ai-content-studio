"use client";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useThemeContext } from "@/app/lib/context/ThemeContext";

function SettingsView({ settings }) {
  console.log(settings);
  const { isDark, setIsDark } = useThemeContext();

  const [temperature, setTemperature] = useState(
    settings.profile?.temperature ?? 0.7,
  );

  const [maxTokens, setMaxTokens] = useState(
    settings.profile?.max_tokens ?? 2000,
  );

  const [suggestionsEnabled, setSuggestionsEnabled] = useState(
    settings.profile?.ai_suggestions_enabled ?? true,
  );

  const [saving, setSaving] = useState(false);

  async function handleSaveSettings() {
    try {
      setSaving(true);

      const response = await fetch("/api/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          preferredModel: "google/gemini-3.5-flash",
          temperature,
          maxTokens,
          suggestionsEnabled,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save settings");
      }

      toast({
        title: "Settings Saved",
        description: "Your settings have been updated successfully.",
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Save Failed",
        description: "Unable to update settings.",
      });
    } finally {
      setSaving(false);
    }
  }
  return (
    <main className="flex-1 p-6">
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Settings
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Customize your AI Content Studio experience
            </p>
          </div>

          {/* Profile */}
          <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 mb-6">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Profile
              </h3>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <p className="text-gray-900 dark:text-white">
                  {settings?.full_name}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <p className="text-gray-900 dark:text-white">
                  {settings?.email}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Role
                </label>
                <p className="text-gray-900 dark:text-white capitalize">
                  {settings?.role || "User"}
                </p>
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 mb-6">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings w-5 h-5"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Appearance
              </h3>
            </div>

            <div className="p-6">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Theme
                </label>

                <div className="relative">
                  <select
                    value={isDark ? "dark" : "light"}
                    onChange={(e) => {
                      setIsDark(e.target.value === "dark");
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="light">Light Mode</option>
                    <option value="dark">Dark Mode</option>
                  </select>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* AI Configuration */}
          <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 mb-6">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles w-5 h-5 text-indigo-600 dark:text-indigo-400"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
                AI Configuration
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Model
                </label>

                <div className="relative">
                  <select
                    value={settings?.preferred_model}
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white opacity-70"
                  >
                    <option value="google/gemini-3.5-flash">
                      Gemini 3.5 Flash
                    </option>
                  </select>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Temperature: {temperature}
                </label>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600"
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                />

                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>More Focused</span>
                  <span>More Creative</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Max Tokens: {maxTokens}
                </label>

                <input
                  type="range"
                  min="100"
                  max="4000"
                  step="100"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600"
                  value={maxTokens}
                  onChange={(e) => setMaxTokens(Number(e.target.value))}
                />

                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>Shorter</span>
                  <span>Longer</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    AI Assistant Suggestions
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get real-time suggestions while creating content
                  </p>
                </div>

                <button
                  onClick={() => setSuggestionsEnabled((prev) => !prev)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    suggestionsEnabled ? "bg-indigo-600" : "bg-gray-400"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      suggestionsEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Save */}
          <div className="flex justify-end">
            <button
              onClick={handleSaveSettings}
              disabled={saving}
              className="rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30 px-8 py-3 text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-save w-5 h-5 mr-2"
              >
                <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                <path d="M7 3v4a1 1 0 0 0 1 1h7" />
              </svg>
              {saving ? "Saving..." : "Save Settings"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SettingsView;
