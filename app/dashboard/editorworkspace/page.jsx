import FloatingAIButton from "@/app/_components/FloatingAIButton";
import Projects from "@/app/_components/Projects";
import PromptRefiner from "@/app/_components/PromptRefiner";

function page() {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Projects */}
          <div className="lg:col-span-3 space-y-3">
            <Projects />
          </div>

          {/* Center: Editor */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border transition-all duration-200 border-base shadow-lg  hover:bg-white dark:hover:bg-slate-800/30 hover:border-slate-300/60 hover:shadow-xl backdrop-blur-xl p-6 min-h-[500px] flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-sm md:text-base">
                  AI in Healthcare 2026
                </h3>
                <span className="text-xs font-medium text-slate-400">
                  21 words
                </span>
              </div>

              <textarea
                placeholder="Start writing or generate content..."
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 border border-base resize-none hover:bg-white hover:border-slate-300/60  dark:bg-slate-900 dark:hover:bg-slate-800/30 focus:border-indigo-300 flex-1 min-h-[400px]"
                defaultValue="Artificial Intelligence is transforming healthcare in unprecedented ways. From diagnostic imaging to drug discovery, AI systems are augmenting medical professionals' capabilities..."
              />
            </div>
          </div>

          {/* Right: Tools */}
          <div className="lg:col-span-4 space-y-4">
            <PromptRefiner />
          </div>
        </div>

        {/* Floating action button */}
        <FloatingAIButton />
      </div>
    </main>
  );
}

export default page;
