function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-[#3B3CFF] to-[#FF6B6B] bg-clip-text text-transparent">
              Modern Creators
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-slate-600">
            Everything you need to create, manage, and scale your content
            production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="group p-8 rounded-2xl border dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg   hover:shadow-slate-600/50">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform from-indigo-500 to-purple-500">
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
                className="w-7 h-7 text-white"
              >
                <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
                <path d="m14 7 3 3" />
                <path d="M5 6v4" />
                <path d="M19 14v4" />
                <path d="M10 2v2" />
                <path d="M7 8H3" />
                <path d="M21 16h-4" />
                <path d="M11 3H9" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 ">AI Prompt Builder</h3>
            <p className="text-base font-semibold leading-relaxed text-slate-600">
              Create powerful prompts with intuitive tools and get high-quality
              content in seconds.
            </p>
          </div>

          {/* 2 */}
          <div className="group p-8 rounded-2xl border dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg   hover:shadow-slate-600/50">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform from-purple-500 to-pink-500">
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
                className="w-7 h-7 text-white"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 ">Live Output Preview</h3>
            <p className="text-base font-semibold leading-relaxed text-slate-600">
              See your AI-generated content in real-time with beautiful
              typography and formatting.
            </p>
          </div>

          {/* 3 (had inline opacity/translate in HTML) */}
          <div className="group p-8 rounded-2xl border dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg   hover:shadow-slate-600/50">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform from-pink-500 to-orange-500">
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
                className="w-7 h-7 text-white"
              >
                <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 ">Template Library</h3>
            <p className="text-base font-semibold leading-relaxed text-slate-600">
              Access pre-built templates for blogs, emails, social media, and
              more.
            </p>
          </div>

          {/* 4 (had inline opacity/translate in HTML) */}
          <div className="group p-8 rounded-2xl border dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg  hover:shadow-slate-600/50">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform from-orange-500 to-red-500">
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
                className="w-7 h-7 text-white"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 ">Collaboration Tools</h3>
            <p className="text-base font-semibold leading-relaxed text-slate-600">
              Work together with your team, share projects, and streamline your
              workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
