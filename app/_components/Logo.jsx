import { Sparkles } from "lucide-react";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/Home" className="flex items-center gap-3 group">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B3CFF] to-[#7B5CFF] flex items-center justify-center group-hover:scale-105 transition-transform">
        <Sparkles className="w-6 h-6 text-white" />
      </div>
      <span className="text-xl font-bold text-slate-900 dark:text-blue-100">
        AI Content Studio
      </span>
    </Link>
  );
}

export default Logo;
