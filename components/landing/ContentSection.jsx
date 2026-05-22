function ContentSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
            Beautiful Interface,{" "}
            <span className="bg-gradient-to-r from-[#3B3CFF] to-[#FF6B6B] bg-clip-text text-transparent">
              Powerful Results
            </span>
          </h2>
          <p className="text-xl font-semibold max-w-2xl mx-auto text-slate-600">
            Designed for creators who demand excellence
          </p>
        </div>

        <div className="relative rounded-2xl border p-4 overflow-hidden border-base">
          <div className="rounded-xl overflow-hidden border border-base">
            {/* fake window header */}
            <div className="h-12 border-b flex items-center px-4 gap-2  border-base">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>

            {/* preview body */}
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3B3CFF] to-[#7B5CFF] flex items-center justify-center mx-auto animate-pulse">
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
                    className="w-10 h-10 text-white"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                </div>

                <p className="text-lg font-medium text-slate-600">
                  Interactive workspace preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
