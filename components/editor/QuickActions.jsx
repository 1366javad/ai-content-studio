import Link from "next/link";

function QuickActions({ emoji, title }) {
  return (
    <Link
      className="rounded-2xl transition-all duration-200  dark:hover:bg-slate-800 hover:bg-slate-600/5  backdrop-blur-xl p-3 flex items-center gap-3"
      href="/dashboard/promptbuilder"
    >
      <span className="text-xl">{emoji}</span>
      <div>
        <p className="text-sm font-medium ">{title}</p>
        <p className="text-[11px] text-slate-400">Create new</p>
      </div>
    </Link>
  );
}

export default QuickActions;
