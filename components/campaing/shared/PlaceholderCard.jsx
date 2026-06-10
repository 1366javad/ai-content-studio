import { cn } from "@/app/lib/utils/utils";

function PlaceholderCard({ icon: Icon, title, desc, color, items }) {
  return (
    <div className="p-5 rounded-2xl border dark:bg-white/[0.03] dark:border-white/[0.06] bg-white border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <div
          className={cn(
            "w-8 h-8 rounded-xl flex items-center justify-center",
            color,
          )}
        >
          <Icon className="w-4 h-4" />
        </div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      <p className="text-xs text-gray-500 mb-4">{desc}</p>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-white/10 shrink-0" />
            <div
              className="h-2.5 rounded-full bg-gray-100 dark:bg-white/[0.06]"
              style={{ width: `${55 + i * 13}%` }}
            />
          </div>
        ))}
      </div>
      <p className="text-[10px] text-gray-400 mt-4 italic">
        Generate research to populate this section
      </p>
    </div>
  );
}

export default PlaceholderCard;
