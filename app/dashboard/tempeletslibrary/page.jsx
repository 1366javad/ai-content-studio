import Filtrs from "@/app/_components/Filtest";

function page() {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl flex-1 min-w-[200px] border transition-all border-base">
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
              className="lucide lucide-search w-4 h-4 text-slate-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>

            <input
              placeholder="Search templates..."
              className="bg-transparent outline-none text-sm md:text-lg flex-1 "
              defaultValue=""
            />
          </div>

          {/* Filter 1 */}
          <div className="relative w-36">
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
              className={"dark:bg-indigo-400/5 py-1.5"}
            />
          </div>
          {/* Filter 2 */}
          <div className="relative w-36 ">
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
              className={"dark:bg-gray-800 py-1.5"}
            />
          </div>
          {/* CTA */}
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#3B3CFF] to-[#5B5CFF] text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200">
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
              className="lucide lucide-plus w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            New Template
          </button>
        </div>

        {/* Templates grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="rounded-2xl border transition-all duration-200 border-base shadow-lg  hover:border-slate-400/60 hover:shadow-xl backdrop-blur-xl p-5 group">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center from-amber-500/10 to-amber-600/10 text-amber-500">
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
                  className="lucide lucide-mail w-5 h-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>

              <button
                className="w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity dark:hover:bg-slate-800"
                type="button"
                id="radix-:rk:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
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
                  className="lucide lucide-ellipsis w-6 h-6"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>

            <h3 className="font-semibold text-sm mb-1 ">
              Engaging Email Campaign
            </h3>
            <p className="text-sm font-medium mb-3 line-clamp-2 text-slate-400">
              Compelling email copy that drives opens, clicks, and conversions.
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[13px] font-medium px-2 py-0.5 bg-slate-200 rounded-full dark:bg-slate-800/70 ">
                Email
              </span>
              <span className="text-[13px] font-medium px-2 py-0.5 bg-slate-200 rounded-full dark:bg-slate-800/70">
                Persuasive
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border transition-all duration-200 border-base shadow-lg hover:border-slate-400/60 hover:shadow-xl backdrop-blur-xl p-5 group">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center from-pink-500/10 to-pink-600/10 text-pink-500">
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
                  className="lucide lucide-share2 w-5 h-5"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                </svg>
              </div>

              <button
                className="w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity dark:hover:bg-slate-800"
                type="button"
                id="radix-:rm:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
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
                  className="lucide lucide-ellipsis w-6 h-6"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>

            <h3 className="font-semibold text-sm mb-1 ">Social Media Thread</h3>
            <p className="text-sm font-medium mb-3 line-clamp-2 text-slate-400">
              A viral-worthy social media thread with hooks and engagement
              tactics.
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[13px] font-medium px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 ">
                Social Media
              </span>
              <span className="text-[13px] font-medium px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800">
                Casual
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border transition-all duration-200 border-base shadow-lg hover:border-slate-300/60 hover:shadow-xl backdrop-blur-xl p-5 group">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center from-emerald-500/10 to-emerald-600/10 text-emerald-500">
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
                  className="lucide lucide-shopping-bag w-5 h-5"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>

              <button
                className="w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity dark:hover:bg-slate-800"
                type="button"
                id="radix-:ro:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
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
                  className="lucide lucide-ellipsis w-6 h-6"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>

            <h3 className="font-semibold text-sm mb-1 ">Product Description</h3>
            <p className="text-sm font-medium mb-3 line-clamp-2 text-slate-400">
              SEO-optimized product descriptions that sell features and
              benefits.
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[13px] font-medium px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800">
                Product Description
              </span>
              <span className="text-[13px] font-medium px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800">
                Friendly
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border transition-all duration-200 border-base shadow-lg  hover:border-slate-300/60 hover:shadow-xl backdrop-blur-xl p-5 group">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center from-cyan-500/10 to-cyan-600/10 text-cyan-500">
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
                  className="lucide lucide-globe w-5 h-5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>

              <button
                className="w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity dark:hover:bg-slate-800"
                type="button"
                id="radix-:rq:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
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
                  className="lucide lucide-ellipsis w-6 h-6"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>

            <h3 className="font-semibold text-sm mb-1 ">
              Marketing Landing Page
            </h3>
            <p className="text-sm font-medium mb-3 line-clamp-2 text-slate-400">
              High-converting landing page copy with persuasive storytelling.
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[13px] font-medium px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800">
                Landing Page
              </span>
              <span className="text-[13px] font-medium px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800">
                Persuasive
              </span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="rounded-2xl border transition-all duration-200 border-base shadow-lg  hover:border-slate-300/60 hover:shadow-xl backdrop-blur-xl p-5 group">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center from-orange-500/10 to-orange-600/10 text-orange-500">
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
                  className="lucide lucide-newspaper w-5 h-5"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
              </div>

              <button
                className="w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity dark:hover:bg-slate-800"
                type="button"
                id="radix-:rs:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
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
                  className="lucide lucide-ellipsis w-6 h-6"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>

            <h3 className="font-semibold text-sm mb-1 ">Weekly Newsletter</h3>
            <p className="text-sm font-medium mb-3 line-clamp-2 text-slate-400">
              Engaging newsletter format with curated content sections.
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[13px] font-medium px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800">
                Newsletter
              </span>
              <span className="text-[13px] font-medium px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 ">
                Friendly
              </span>
            </div>
          </div>

          {/* Card 6 */}
          <div className="rounded-2xl border transition-all duration-200 border-base shadow-lg  hover:border-slate-300/60 hover:shadow-xl backdrop-blur-xl p-5 group">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center from-blue-500/10 to-blue-600/10 text-blue-500">
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
                  className="lucide lucide-file-text w-5 h-5"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              </div>

              <button
                className="w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity dark:hover:bg-slate-800"
                type="button"
                id="radix-:ru:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
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
                  className="lucide lucide-ellipsis w-6 h-6"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>

            <h3 className="font-semibold text-sm mb-1 ">
              Professional Blog Post
            </h3>
            <p className="text-sm font-medium mb-3 line-clamp-2 text-slate-400">
              A well-structured blog post for business audiences with clear
              sections and actionable insights.
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[13px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                Blog Post
              </span>
              <span className="text-[13px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                Professional
              </span>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B3CFF] to-[#7B5CFF] text-white flex items-center justify-center shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-200">
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
            className="lucide lucide-sparkles w-6 h-6"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
            <path d="M4 17v2" />
            <path d="M5 18H3" />
          </svg>
        </button>
      </div>
    </main>
  );
}

export default page;
