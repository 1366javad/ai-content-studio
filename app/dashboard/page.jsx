"use client";

import { useState } from "react";
import QuickActions from "@/components/editor/QuickActions";
import FloatingAIButton from "@/components/layout/FloatingAIButton";
import ProjectCard from "@/components/projects/ProjectCard";
import StatCard from "@/components/projects/StatCard";

import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Filtrs from "@/components/templates/Filtest";
import { DropdownMenuRadioGroupDemo } from "@/components/dashboard/DropdownMenuRadioGroupDemo";

const carts = [
  {
    id: 20,
    title: "AI in Healthcare 2026",
    desc: "Blog post exploring AI applications in healthcare",
    status: "completed",
    time: "7 hours ago",
  },
  {
    id: 21,
    title: "Product Launch Email",
    desc: "5-part email sequence for new SaaS product launch",
    status: "completed",
    time: "12 days ago",
  },
  {
    id: 22,
    title: "Social Media Posts",
    desc: "Series of social media posts for summer campaign",
    status: "draft",
    time: "12 days ago",
  },
  {
    id: 23,
    title: "Company Culture Report",
    desc: "Annual report on company culture and values",
    status: "completed",
    time: "12 days ago",
  },
];

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <main className="flex-1 p-6 max-w-7xl mx-auto space-y-8 ">
        <div className="flex items-center justify-between">
          {/* header */}
          <div className="flex justify-between items-center w-full">
            <div>
              <h1 className="text-2xl font-bold tracking-tight ">
                Welcome back
              </h1>
              <p className="text-sm md:text-base font-semibold mt-1 text-slate-500">
                Here&apos;s what&apos;s happening with your content today.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button className="flex items-center gap-2 md:px-3 md:py-2.5 lg:mr-28 rounded-xl bg-gradient-to-r from-primary-500 to-primary-400  text-sm md:font-semibold font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-[1px]">
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
                      className="w-8 h-8 md:w-4 md:h-4"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <span className="hidden md:block"> Quick Create</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-[700px] md:max-w-6xl mx-auto  max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>
                      <h2 className="text-3xl font-bold">
                        Quick Create Content
                      </h2>
                    </DialogTitle>
                  </DialogHeader>

                  {/* اینجا محتوای QuickCreate رو بذار بدون <main> و بدون back button */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {/* Content Settings */}
                      <div className="rounded-2xl border transition-all duration-200 border-base shadow-lg  dark:hover:bg-gray-800/30 hover:bg-white hover:border-slate-400/60 hover:shadow-xl backdrop-blur-xl p-6 space-y-4">
                        <h3 className="font-semibold text-sm  flex items-center gap-2 ">
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
                            className="lucide lucide-file-text w-4 h-4 text-[#3B3CFF]"
                          >
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                            <path d="M10 9H8" />
                            <path d="M16 13H8" />
                            <path d="M16 17H8" />
                          </svg>
                          Content Settings
                        </h3>

                        <input
                          placeholder="Content title"
                          className="w-full rounded-xl px-4 py-3 text-sm  outline-none transition-all duration-200 border border-base dark:bg-indigo-400/5 placeholder:text-slate-400 focus:border-indigo-300 focus:shadow-sm"
                          defaultValue=""
                        />

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
                            className={"dark:bg-indigo-400/5 py-2 text-sm "}
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
                            className={"dark:bg-indigo-400/5 py-2 text-sm"}
                          />
                        </div>

                        <textarea
                          placeholder="Content instructions (optional)..."
                          rows={2}
                          className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 border border-base dark:bg-indigo-400/5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-300 focus:shadow-sm resize-none"
                        />
                      </div>

                      {/* Prompt */}
                      <div className="rounded-2xl border transition-all duration-200 border-base shadow-lg dark:hover:bg-gray-800/30 hover:border-slate-400/60 hover:shadow-xl backdrop-blur-xl p-6 space-y-4">
                        <h3 className="font-semibold text-sm md:text- lg flex items-center gap-2 ">
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
                            className="lucide lucide-sparkles w-4 h-4 text-[#FF6B6B]"
                          >
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                            <path d="M20 3v4" />
                            <path d="M22 5h-4" />
                            <path d="M4 17v2" />
                            <path d="M5 18H3" />
                          </svg>
                          Prompt
                        </h3>

                        <textarea
                          placeholder="Write your prompt here... Be specific about what you want the AI to generate."
                          rows={6}
                          className="w-full rounded-xl px-4 py-3 text-sm  outline-none transition-all duration-200 border border-base dark:bg-indigo-400/5  placeholder:text-slate-400 focus:border-indigo-300 focus:shadow-sm resize-none"
                        />

                        <div className="flex items-center gap-3">
                          <button
                            disabled
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 bg-slate-300  dark:bg-cyan-950 cursor-not-allowed"
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
                              className="lucide lucide-sparkles w-4 h-4"
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

                    {/* Output Preview */}
                    <div>
                      <div className="rounded-2xl border transition-all duration-200 border-base shadow-lg /50 dark:hover:bg-gray-800/30 hover:border-slate-400/60 hover:shadow-xl backdrop-blur-xl p-6 min-h-[500px] flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-sm md:text-xl flex items-center gap-2">
                            Output Preview
                          </h3>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 ">
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
                                className="lucide lucide-file-text w-8 h-8 text-blue-700/60"
                              >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M10 9H8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                              </svg>
                            </div>

                            <p className="text-sm md:text-lg font-medium mb-1 ">
                              Your AI output will appear here
                            </p>
                            <p className="text-xs md:text-base">
                              Write a prompt and hit Generate to get started
                            </p>
                          </div>
                        </div>
                      </div>
                      <DropdownMenuRadioGroupDemo />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Projects"
            value="4"
            change="↑ 12% this week"
            icon={
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
                className="w-5 h-5 text-[#3B3CFF]"
              >
                {" "}
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />{" "}
                <path d="M14 2v4a2 2 0 0 0 2 2h4" /> <path d="M10 9H8" />{" "}
                <path d="M16 13H8" /> <path d="M16 17H8" />{" "}
              </svg>
            }
          />
          <StatCard
            title="Completed"
            value="3"
            change="↑ 8% this week"
            icon={
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
                className="w-5 h-5 text-[#3B3CFF]"
              >
                {" "}
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />{" "}
              </svg>
            }
          />
          <StatCard
            title="Words Generated"
            value="4,240"
            change="↑ 24% this week"
            icon={
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
                className="w-5 h-5 text-[#3B3CFF]"
              >
                {" "}
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />{" "}
                <polyline points="16 7 22 7 22 13" />{" "}
              </svg>
            }
          />
          <StatCard
            title="Templates"
            value="4"
            change="↑ 5% this week"
            icon={
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
                className="w-5 h-5 text-[#3B3CFF]"
              >
                {" "}
                <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />{" "}
                <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />{" "}
                <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />{" "}
              </svg>
            }
          />
        </section>

        {/* quick actions */}
        <section className="rounded-2xl border border-base shadow-lg p-6 backdrop-blur-xl">
          <h3 className="font-semibold text-sm mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <QuickActions emoji="📝" title="Blog Post" />
            <QuickActions emoji="✉️" title="Email Copy" />
            <QuickActions emoji="📱" title="Social Media" />
            <QuickActions emoji="🛍️" title="Product Copy" />
          </div>
        </section>

        {/* recent projects */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm ">Recent Projects</h3>
            <Link
              href="/dashboard/projects"
              className="text-base font-medium flex items-center gap-1 text-muted hover:text-slate-500"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {carts.map((cart) => (
              <ProjectCard
                key={cart.id}
                title={cart.title}
                desc={cart.desc}
                status={cart.section}
                time={cart.time}
              />
            ))}
          </div>
        </section>

        {/* floating AI button */}
        <FloatingAIButton />
      </main>
    </>
  );
}

export default Dashboard;
