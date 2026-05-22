import { Button } from "@/components/ui/button";

function PromptRefiner() {
  return (
    <div>
      {/* Action Buttons */}
      <div className="rounded-2xl border transition-all duration-200 border-base shadow-lg dark:hover:bg-slate-800/30 hover:bg-white hover:border-slate-300/60 hover:shadow-xl backdrop-blur-xl p-4">
        <div className="grid grid-cols-2 gap-2">
          <Button className="dark:bg-primary-600 bg-primary-500">
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
          </Button>

          <Button variant="outline">
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
              className="lucide lucide-rotate-ccw w-4 h-4"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            Regenerate
          </Button>

          <Button variant="outline">
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
              className="lucide lucide-save w-4 h-4"
            >
              <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
              <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
              <path d="M7 3v4a1 1 0 0 0 1 1h7" />
            </svg>
            Save Draft
          </Button>

          <Button variant="outline">
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
            Export
          </Button>
        </div>
      </div>

      {/* Prompt Refiner */}
      <div className="rounded-2xl border transition-all mt-4 md:mt-8 duration-200 border-base shadow-lg dark:hover:bg-slate-800/30 hover:bg-white hover:border-slate-300/60 hover:shadow-xl backdrop-blur-xl p-6">
        <h3 className="font-semibold text-sm md:text-base mb-3 flex items-center gap-2 ">
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
          Prompt Refiner
        </h3>

        <textarea
          placeholder="Refine your prompt..."
          rows={4}
          className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 border resize-none border-base dark:bg-slate-900 dark:hover:bg-slate-800/30  placeholder:text-slate-400 focus:border-indigo-300"
          defaultValue="Write a comprehensive blog post about AI applications in healthcare in 2026"
        />

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="px-3 py-2 rounded-lg text-xs md:text-sm border-base dark:bg-slate-800 bg-slate-200">
            <span className="font-medium">Language:</span> English
          </div>
          <div className="px-3 py-2 rounded-lg text-xs md:text-sm border-base dark:bg-slate-800 bg-slate-200">
            <span className="font-medium">Tone:</span> Professional
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromptRefiner;
