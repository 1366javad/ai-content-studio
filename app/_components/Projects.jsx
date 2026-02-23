const projects = [
  {
    id: "p1",
    title: "Company Culture Report",
    updatedAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
    starred: true,
    status: "completed",
    content: "Company culture summary...",
    prompt: "Write an annual culture report for 2026...",
    language: "English",
    tone: "Professional",
  },
  {
    id: "p2",
    title: "AI in Healthcare 2026",
    updatedAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
    starred: true,
    status: "completed",
    content:
      "Artificial Intelligence is transforming healthcare in unprecedented ways. From diagnostic imaging to drug discovery, AI systems are augmenting medical professionals' capabilities...",
    prompt:
      "Write a comprehensive blog post about AI applications in healthcare in 2026",
    language: "English",
    tone: "Professional",
  },
  {
    id: "p3",
    title: "Product Launch Email Sequence",
    updatedAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
    starred: false,
    status: "draft",
    content: "Email #1: Subject line ideas...\nEmail #2: ...",
    prompt: "Create a 5-part email sequence to launch a SaaS product...",
    language: "English",
    tone: "Persuasive",
  },
  {
    id: "p4",
    title: "Social Media Campaign - Summer Sale",
    updatedAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
    starred: false,
    status: "draft",
    content: "Post ideas: 1) ... 2) ...",
    prompt: "Create 10 short posts for a summer sale campaign...",
    language: "English",
    tone: "Friendly",
  },
];

function Projects() {
  return (
    <div>
      <h3 className="font-semibold text-sm mb-3 md:text-base ">Projects</h3>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.id}>
            <div className="p-3 hover:bg-slate-200/40 dark:hover:bg-slate-800/40 rounded-xl cursor-pointer transition-all duration-200 border border-base group">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate ">
                    {project.title}
                  </p>
                  <p className="text-xs mt-0.5 flex items-center gap-1 text-slate-400">
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
                      className="lucide lucide-clock w-3 h-3"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {project.ago}
                  </p>
                </div>

                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="p-1 rounded-lg hover:bg-white/10"
                    aria-label="Star"
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
                      className={[
                        "lucide lucide-star w-3.5 h-3.5",
                        project.starred
                          ? "text-amber-400 fill-amber-400"
                          : "text-slate-500",
                      ].join(" ")}
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </button>

                  <button
                    className="p-1 rounded-lg hover:bg-red-500/10"
                    aria-label="Delete"
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
                      className="lucide lucide-trash2 w-3.5 h-3.5 text-red-400"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
