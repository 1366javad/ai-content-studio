import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3B3CFF]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6B6B]/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3B3CFF]/10 to-[#FF6B6B]/10 border border-[#3B3CFF]/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#3B3CFF]" />
            <span className="text-sm font-medium">
              Your entire marketing team, powered by AI
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight ">
            The AI{" "}
            <span className="bg-gradient-to-r from-[#3B3CFF] to-[#FF6B6B] bg-clip-text text-transparent">
              Marketing OS
            </span>
            for Modern Teams
          </h1>

          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-slate-600">
            Research, create, launch, and analyse campaigns — all in one
            AI-powered workspace built for marketers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#3B3CFF] to-[#5B5CFF] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-1 flex items-center gap-2">
              Start for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 rounded-xl font-semibold text-lg border transition-all duration-200 hover:-translate-y-1 border-base hover:border-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/30">
              See Features
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 ">10x</div>
              <div className="text-sm text-slate-400">
                Faster Campaign Creation
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 ">6+</div>
              <div className="text-sm text-slate-400">Marketing Modules</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 ">50+</div>
              <div className="text-sm text-slate-400">Content Formats</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 ">100%</div>
              <div className="text-sm text-slate-400">AI-Powered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
