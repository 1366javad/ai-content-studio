"use client";

import Filtrs from "@/components/templates/Filtest";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Loader2, AlertTriangle } from "lucide-react";
import { exportPdf } from "@/app/lib/export/exportPdf";

import { exportDocx } from "@/app/lib/export/exportDocx";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { getErrorMessage } from "@/app/lib/utils/helpers";
import { useToast } from "@/hooks/use-toast";

function ProjectWorkspace({ initialProject }) {
  const outputRef = useRef(null);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [running, setRunning] = useState(false);
  const [saving, setSaving] = useState(false);

  const [events, setEvents] = useState([]);
  const [outputs, setOutputs] = useState({});

  const [language, setLanguage] = useState("English");
  const [tone, setTone] = useState("Professional");
  const [showExportMenu, setShowExportMenu] = useState(false);

  const { register, reset, handleSubmit, watch } = useForm({
    defaultValues: {
      title: initialProject?.title || "",
      instructions: initialProject?.desc || "",
      prompt: "",
    },
  });

  const promptValue = watch("prompt") || "";

  async function onGenerate(formData) {
    setRunning(true);
    setEvents([]);
    setOutputs({});

    try {
      const response = await fetch("/api/ai/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          workflowId: "content_package",
          projectId: initialProject.id,
          input: {
            title: formData.title,
            instructions: formData.instructions,
            prompt: formData.prompt,
            language,
            tone,
          },
        }),
      });

      if (!response.body) {
        throw new Error("No stream response");
      }

      const reader = response.body.getReader();

      const decoder = new TextDecoder();

      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        buffer += decoder.decode(value, {
          stream: true,
        });

        const parts = buffer.split("\n\n");

        buffer = parts.pop() || "";

        for (const part of parts) {
          if (!part.startsWith("data: ")) continue;

          const json = part.replace("data: ", "");

          const event = JSON.parse(json);

          setEvents((prev) => [...prev, event]);

          if (event.type === "stream") {
            setOutputs((prev) => ({
              ...prev,
              live: (prev.live || "") + event.chunk,
            }));
          }

          if (event.type === "step_completed") {
            setOutputs((prev) => ({
              ...prev,
              [event.step]: event.output,
            }));
          }

          if (event.type === "final") {
            setOutputs((prev) => ({
              ...prev,
              ...event.outputs,
            }));
          }
        }
      }
    } catch (error) {
      console.error(error);

      setEvents((prev) => [
        ...prev,
        {
          type: "error",
          message: error.message,
        },
      ]);
    } finally {
      setRunning(false);
    }
  }

  async function handleSaveDocument() {
    try {
      setSaving(true);

      const response = await fetch("/api/documents", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          projectId: initialProject.id,
          title: watch("title") || initialProject.title,
          content: finalOutput,
          contentType: "generated_content",
          aiPrompt: watch("prompt") || "",
          status: "draft",
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error);
      }

      toast({
        title: "Document Saved",
        description: "Your document has been saved successfully.",
      });
    } catch (error) {
      console.error(error);

      toast({
        variant: "destructive",
        title: "Save Failed",
        description: error.message || "Failed to save document.",
      });
    } finally {
      setSaving(false);
    }
  }

  async function handleExport(type) {
    if (!finalOutput) {
      toast({
        variant: "destructive",
        title: "Nothing to export",
        description: "Generate content first.",
      });

      return;
    }

    const title = watch("title") || initialProject.title || "AI Content";

    if (type === "pdf") {
      exportPdf(title, finalOutput);
    }

    if (type === "docx") {
      await exportDocx(title, finalOutput);
    }

    setShowExportMenu(false);

    toast({
      title: "Export Complete",
      description: `${type.toUpperCase()} file downloaded.`,
    });
  }

  const finalOutput =
    outputs.live ||
    outputs?.repurpose ||
    outputs?.editor ||
    outputs?.writer ||
    outputs?.planner ||
    "";

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [finalOutput]);

  const activityEvents = events.filter(
    (event) =>
      event.type === "status" ||
      event.type === "step_started" ||
      event.type === "step_completed" ||
      event.type === "error",
  );

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/dashboard"
            className=" flex items-center px-1 rounded-sm bg-slate-100 dark:bg-purple-700 text-purple-600 dark:text-slate-200"
          >
            <HiOutlineArrowNarrowLeft />
            <span>Back</span>
          </Link>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              AI Editor Workspace
            </h1>

            <p className="text-gray-600 dark:text-gray-400">
              Refine and perfect your AI-generated content
            </p>
          </div>

          <div className="flex gap-3">
            <div className="relative">
              <button
                onClick={() => setShowExportMenu(!showExportMenu)}
                disabled={!finalOutput}
                className="border border-indigo-500/30 text-indigo-500 hover:bg-indigo-500/10 transition-all px-5 py-3 rounded-2xl disabled:opacity-50"
              >
                Export
              </button>

              {showExportMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl z-50">
                  <button
                    onClick={() => handleExport("pdf")}
                    className="w-full text-left px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Export as PDF
                  </button>

                  <button
                    onClick={() => handleExport("docx")}
                    className="w-full text-left px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Export as DOCX
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={handleSaveDocument}
              disabled={!finalOutput || saving}
              className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white px-5 py-3 rounded-2xl shadow-lg shadow-indigo-500/20 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Draft"}
            </button>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 2xl:grid-cols-[420px_minmax(600px,1fr)_320px] xl:grid-cols-[420px_1fr] gap-6">
          {/* LEFT PANEL */}
          <form
            onSubmit={handleSubmit(onGenerate)}
            className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] overflow-hidden"
          >
            <div className="border-b border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Prompt Configuration
              </h2>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Project Title
                </label>

                <input
                  {...register("title")}
                  placeholder="Project title"
                  className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A2332] px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Filtrs
                  value={language}
                  onChange={setLanguage}
                  options={["English", "Persian"]}
                  labels="Language"
                  className="py-3"
                />

                <Filtrs
                  value={tone}
                  onChange={setTone}
                  options={["Professional", "Creative", "Casual", "Luxury"]}
                  labels="Tone"
                  className="py-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Instructions
                </label>

                <textarea
                  {...register("instructions")}
                  rows={4}
                  placeholder="Additional instructions..."
                  className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A2332] px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Prompt
                </label>

                <textarea
                  {...register("prompt")}
                  rows={7}
                  maxLength={500}
                  placeholder={`Examples:
• Write a LinkedIn post about AI in healthcare
• Create a product description for a wireless keyboard
• Generate a blog outline about remote work
• Create an Instagram caption for a coffee brand`}
                  className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A2332] px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    Describe what you want the AI to create.
                  </span>

                  <span className="text-xs text-gray-500">
                    {promptValue.length}/500
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={!promptValue.trim() || running}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-white py-4 rounded-2xl font-semibold shadow-lg shadow-indigo-500/20"
              >
                {running ? "AI Agents Working..." : "Generate Content"}
              </button>
            </div>
          </form>

          {/* CENTER OUTPUT */}
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] overflow-hidden min-h-[700px] flex flex-col">
            <div className="border-b border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Live Output
              </h2>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Live Streaming
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-6">
              {running && !finalOutput && (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <Loader2 className="h-10 w-10 animate-spin text-indigo-500 mb-4" />

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Generating Content...
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 max-w-md">
                    Our AI agents are researching, writing, and refining your
                    content.
                  </p>
                </div>
              )}
              {!running && !finalOutput && (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-3xl bg-indigo-500/10 flex items-center justify-center mb-5">
                    ✨
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Waiting for generation
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 max-w-md">
                    Your AI-generated content will appear here in real-time.
                  </p>
                </div>
              )}

              {finalOutput && (
                <div
                  ref={outputRef}
                  className="prose dark:prose-invert min-h-[500px]
    max-h-[90vh]
    overflow-y-auto max-w-none whitespace-pre-wrap text-gray-800 dark:text-gray-100"
                >
                  <ReactMarkdown>{finalOutput}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="rounded-3xl border border-gray-200 dark:border-[#263041] bg-white dark:bg-[#111827] overflow-hidden min-h-[700px] xl:col-span-2 2xl:col-span-1">
            <div className="border-b border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                AI Agent Activity
              </h2>
            </div>

            <div className="p-4 space-y-3 max-h-[650px] overflow-auto">
              {events.length === 0 && (
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  No AI activity yet.
                </div>
              )}

              {activityEvents.map((event, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-4 ${event.type === "error" ? "border-red-300 bg-red-50 dark:bg-red-950/20" : "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B1120]"}  `}
                >
                  <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                    {event.type}
                  </div>

                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    {event.type === "error" && (
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    )
                      ? getErrorMessage(event)
                      : event.message ||
                        event.label ||
                        event.status ||
                        "Processing..."}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectWorkspace;
