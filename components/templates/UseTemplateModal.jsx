"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UseTemplateModal({ template, onClose }) {
  const router = useRouter();

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
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

  function handleContinue() {
    if (!selectedProject) return;

    router.push(
      `/dashboard/projects/${selectedProject}?template=${template.id}`,
    );
  }

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

        {projects.length === 0 ? (
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              No projects found.
            </p>

            <button
              onClick={() => router.push("/dashboard/projects")}
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl"
            >
              Create Project First
            </button>
          </div>
        ) : (
          <>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full border rounded-xl p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="">Select Project</option>

              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
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
                disabled={!selectedProject}
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
