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
              className="w-4 h-4 text-[#3B3CFF]"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>

            <span className="text-sm font-medium">Powered by Advanced AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight ">
            Create Amazing Content{" "}
            <span className="bg-gradient-to-r from-[#3B3CFF] to-[#FF6B6B] bg-clip-text text-transparent">
              10x Faster
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-slate-600">
            Your AI-powered workspace for creating, editing, and managing
            professional content with ease.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#3B3CFF] to-[#5B5CFF] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-1 flex items-center gap-2">
              Start Creating with AI
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
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>

            <button className="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-200 hover:-translate-y-1 border-slate-200 hover:border-slate-300 hover:bg-slate-50">
              See Features
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 ">50K+</div>
              <div className="text-sm text-slate-400">Active Users</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 ">2M+</div>
              <div className="text-sm text-slate-400">Content Generated</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 ">15+</div>
              <div className="text-sm text-slate-400">Languages</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 ">99.9%</div>
              <div className="text-sm text-slate-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
