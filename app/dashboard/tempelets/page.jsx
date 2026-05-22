import Filtrs from "@/components/templates/Filtest";
import CreateTemplateButton from "@/components/templates/CreateTemplatButton";
import Link from "next/link";

export default function TemplatesPage() {
  const templates = [
    {
      title: "Engaging Email Campaign",
      description:
        "Compelling email copy that drives opens, clicks, and conversions.",
      category: "Email",
      tone: "Persuasive",
      used: 38,
    },
    {
      title: "Social Media Thread",
      description:
        "A viral-worthy social media thread with hooks and engagement tactics.",
      category: "Social Media",
      tone: "Casual",
      used: 55,
    },
    {
      title: "Product Description",
      description:
        "SEO-optimized product descriptions that sell features and benefits.",
      category: "Product Description",
      tone: "Friendly",
      used: 31,
    },
  ];

  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Template Library</h1>
            <p className="text-gray-500">
              Reusable templates for faster content creation
            </p>
          </div>
          <CreateTemplateButton />
        </div>

        {/* Filters */}
        <div className="rounded-2xl bg-white dark:bg-gray-800/30 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 mb-6">
          <div className="p-6 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center">
              {/* Search */}
              <div className="md:col-span-2">
                <div className=" relative  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>

                  <input
                    placeholder="Search templates..."
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-gray-900 dark:text-white placeholder-gray-500 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Language Filter */}

              <Filtrs
                options={[
                  "All Categories",
                  "Blog Post",
                  "Email",
                  "Social Media",
                  "Product Description ",
                  ,
                  "Landing Page",
                  "Newsletter",
                  "Report",
                  "Other",
                ]}
                className="py-3"
              />
            </div>
          </div>
        </div>
        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((t) => (
            <Link
              href="/dashboard/projects/create"
              key={t.title}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all p-5 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600">
                  📄
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-1">{t.title}</h3>

              <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                {t.description}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                  {t.category}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                  {t.tone}
                </span>
              </div>

              <div className="mt-3 text-xs text-gray-400">
                Used {t.used} times
              </div>
            </Link>
          ))}
        </div>

        {/* Floating Action Button */}
        <Link
          href="/dashboard/projects/create"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all"
        >
          ✨
        </Link>
      </div>
    </main>
  );
}
