import Link from "next/link";

function ProjectCard({ status, title, desc, time }) {
  return (
    <Link href="/dashboard/editor">
      <div className="rounded-2xl border border-base transition-all duration-200  shadow-lg dark:hover:bg-gray-800/80 hover:shadow-xl backdrop-blur-xl p-5 group cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-indigo-500/10">
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
              className="w-5 h-5 text-[#3B3CFF]"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
          </div>
        </div>

        <h3 className="font-semibold text-base mb-1 truncate ">{title}</h3>
        <p className="text-sm mb-3 line-clamp-2 text-slate-400">{desc}</p>

        <div className="flex items-center justify-between">
          <span
            className={`text-[13px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 ${status === "draft" ? " bg-amber-500/10 text-primary-960" : " text-emerald-500"}`}
          >
            {status}
          </span>
          <span className="text-[11px] flex items-center gap-1 text-slate-400">
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
              className="w-3 h-3"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {time}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
