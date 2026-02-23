"use client";

import { Sparkles, X, Send } from "lucide-react";

export default function AIAssistantChat({ setIsOpen }) {
  return (
    <div
      className="
        fixed bottom-20 right-6 z-50 
        w-[380px] h-[520px] 
        rounded-2xl border flex flex-col overflow-hidden 
        bg-white/95  dark:bg-slate-900 border-base
        shadow-2xl 
       
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b shrink-0  border-base">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#3B3CFF] to-[#7B5CFF] flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-white dark:text-slate-600" />
          </div>
          <span className="text-sm font-semibold md:text-base">
            AI Assistant
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-slate-100 text-slate-500 dark:hover:bg-slate-700"
            onClick={() => setIsOpen(!open)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm md:text-base bg-slate-100 dark:bg-slate-800 dark:border-base rounded-bl-md">
            <div className="prose prose-sm max-w-none dark:prose-invert [&>p]:m-0">
              <p>
                Hi! I&apos;m your AI assistant. Ask me anything about content
                creation, writing tips, or how to use the studio.
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      {/* Input Area */}
      <div className="px-3 py-3 border-t shrink-0 border-slate-100 dark:border-base">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800">
          <input
            placeholder="Ask me anything..."
            className="
              flex-1 bg-transparent outline-none 
              text-sm  placeholder:text-slate-400
            "
            // value=""
          />
          <button
            disabled
            className="
              w-8 h-8 rounded-lg flex items-center justify-center 
              transition-all duration-200 
              bg-slate-200 text-slate- 400 dark:bg-slate-700
            "
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
