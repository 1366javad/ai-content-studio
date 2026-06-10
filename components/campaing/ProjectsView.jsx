"use client";

import { useState } from "react";
import Filtrs from "@/components/templates/Filtest";
import NewProject from "@/components/campaing/NewProject";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import EmptyProjectsState from "@/components/dashboard/EmptyProjectsState";
import ProjectCard from "./CampaignCard";

function ProjectsView({ initialProjects }) {
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState(initialProjects || []);

  return (
    <main className="flex-1 p-6">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                All Projects
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Manage and organize your AI-generated content
              </p>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30 px-4 py-2.5 text-base flex">
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
                    className="lucide lucide-circle-plus w-5 h-5 mr-2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                  New Project
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[700px] md:max-w-6xl mx-auto max-h-[92vh] overflow-y-auto p-0">
                <DialogHeader className="px-6 pt-6 pb-4 border-b">
                  <DialogTitle>
                    {" "}
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      AI Prompt Builder
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      Describe what you want to create and let AI do the magic
                    </p>
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left: Content Details */}
                        <div>
                          <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200">
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
                                Content Details
                              </h3>
                            </div>

                            <div className="p-6 space-y-6">
                              <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                  Project Title{" "}
                                  <span className="text-red-600 text-lg">
                                    *
                                  </span>
                                </label>
                                <input
                                  required={true}
                                  type="text"
                                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                                  placeholder="e.g., Blog Post About AI"
                                  defaultValue=""
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <Filtrs
                                  options={[
                                    " English",
                                    "Spanish",
                                    "French",
                                    "German",
                                    "Portuguese",
                                    "Arabic",
                                    "Chinese",
                                  ]}
                                  labels="Language"
                                  className={"py-3 text-sm"}
                                />
                                <Filtrs
                                  options={[
                                    "Professional",
                                    "Casual",
                                    "Creative",
                                    "Academic",
                                    "Persuasive",
                                    "Friendly",
                                    "Formal",
                                  ]}
                                  labels="Tone"
                                  className={"py-3 text-sm"}
                                />
                              </div>

                              <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                  Content Instructions (Optional)
                                </label>
                                <textarea
                                  rows={3}
                                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                                  placeholder="Any specific requirements or guidelines..."
                                />
                              </div>

                              <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                  Your Prompt
                                </label>
                                <textarea
                                  rows={6}
                                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                                  placeholder="Describe what you want to create... Be specific and detailed for best results."
                                />
                              </div>

                              <div className="flex gap-3">
                                <button
                                  className="rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30 px-6 py-2.5 text-base flex-1"
                                  disabled
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
                                    className="lucide lucide-sparkles w-5 h-5 mr-2"
                                  >
                                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                    <path d="M20 3v4" />
                                    <path d="M22 5h-4" />
                                    <path d="M4 17v2" />
                                    <path d="M5 18H3" />
                                  </svg>
                                  Generate
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right: AI Output */}
                        <div>
                          <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 h-full flex flex-col">
                            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex-row items-center justify-between">
                              <div className="flex items-center gap-2">
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
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                  AI Output
                                </h3>
                              </div>

                              <div className="flex items-center gap-2">
                                <button
                                  className="rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 text-sm"
                                  disabled
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
                                    className="lucide lucide-copy w-4 h-4 mr-2"
                                  >
                                    <rect
                                      width="14"
                                      height="14"
                                      x="8"
                                      y="8"
                                      rx="2"
                                      ry="2"
                                    />
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                  </svg>
                                  Copy
                                </button>

                                <button
                                  className="rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 text-sm"
                                  disabled
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
                                    className="lucide lucide-download w-4 h-4"
                                  >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" x2="12" y1="15" y2="3" />
                                  </svg>
                                </button>
                              </div>
                            </div>

                            <div className="p-6 flex-1 overflow-auto">
                              <div className="flex flex-col items-center justify-center h-full text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 flex items-center justify-center mb-4">
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
                                    className="lucide lucide-sparkles w-8 h-8 text-indigo-600 dark:text-indigo-400"
                                  >
                                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                    <path d="M20 3v4" />
                                    <path d="M22 5h-4" />
                                    <path d="M4 17v2" />
                                    <path d="M5 18H3" />
                                  </svg>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-2">
                                  Your AI-generated content will appear here
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">
                                  Fill in the prompt details and click Generate
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 mb-6">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
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
                      className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>

                    <input
                      type="text"
                      placeholder="Search projects..."
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-gray-900 dark:text-white placeholder-gray-500 transition-all duration-200"
                      defaultValue=""
                    />
                  </div>
                </div>
                <Filtrs
                  options={["All Status", "Draft", "Completed", "Archived"]}
                  className="py-3"
                />
              </div>
            </div>
          </div>

          {cards.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  desc={project.desc}
                  status={project.status}
                  time={project.updated_at}
                />
              ))}
            </div>
          ) : (
            <EmptyProjectsState type="projects" open={open} setOpen={setOpen} />
          )}
        </div>
      </div>
    </main>
  );
}

export default ProjectsView;
