function StatCard({ title, value, change, icon }) {
  return (
    <div className="rounded-2xl border transition-all duration-200  border-base shadow-lg  hover:border-slate-300/60  backdrop-blur-xl p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider mb-2 text-slate-400">
            {title}
          </p>
          <p className="text-2xl font-bold tracking-tight ">{value}</p>
          <p className="text-xs mt-1 font-medium text-emerald-500">{change}</p>
        </div>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-indigo-500/10">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;
