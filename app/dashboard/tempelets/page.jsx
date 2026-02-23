import CreateTemplatButton from "@/app/_components/CreateTemplatButton";
import Filtrs from "@/app/_components/Filtest";
import Link from "next/link";

function page() {
  const templates = [
    {
      title: "Engaging Email Campaign",
      description:
        "Compelling email copy that drives opens, clicks, and conversions.",
      category: "Email",
      used: 38,
      badge: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
      iconWrap: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
    },
    {
      title: "Social Media Thread",
      description:
        "A viral-worthy social media thread with hooks and engagement tactics.",
      category: "Social Media",
      used: 55,
      badge: "bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-400",
      iconWrap: "bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-400",
    },
    {
      title: "Product Description",
      description:
        "SEO-optimized product descriptions that sell features and benefits.",
      category: "Product Description",
      used: 31,
      badge:
        "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400",
      iconWrap:
        "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400",
    },
    {
      title: "Marketing Landing Page",
      description:
        "High-converting landing page copy with persuasive storytelling.",
      category: "Landing Page",
      used: 27,
      badge:
        "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400",
      iconWrap:
        "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400",
    },
    {
      title: "Weekly Newsletter",
      description: "Engaging newsletter format with curated content sections.",
      category: "Newsletter",
      used: 19,
      badge: "bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-400",
      iconWrap: "bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-400",
    },
    {
      title: "Professional Blog Post",
      description:
        "A well-structured blog post for business audiences with clear sections and actionable insights.",
      category: "Blog Post",
      used: 42,
      badge:
        "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400",
      iconWrap:
        "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400",
    },
  ];

  return (
    <main className="flex-1 p-6">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Template Library
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Reusable templates for faster content creation
              </p>
            </div>

            <CreateTemplatButton />
          </div>

          {/* Filters */}
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
                      placeholder="Search templates..."
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-gray-900 dark:text-white placeholder-gray-500 transition-all duration-200"
                      defaultValue=""
                    />
                  </div>
                </div>
                <Filtrs
                  options={[
                    "All Categories",
                    "Blog Post",
                    "Email",
                    "Social Media",
                    "Marketing",
                    "Marketing",
                    "Product Description",
                    "Landing Page",
                    "Newsletter",
                    "Other",
                  ]}
                  className={"py-3"}
                />
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((t) => (
              <Link href="/dashboard/create" key={t.title}>
                <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 group hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer relative">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${t.iconWrap}`}
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
                          className="lucide lucide-file-text w-6 h-6"
                        >
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                          <path d="M10 9H8" />
                          <path d="M16 13H8" />
                          <path d="M16 17H8" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {t.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {t.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-medium ${t.badge}`}
                      >
                        {t.category}
                      </span>

                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Used {t.used} times
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
