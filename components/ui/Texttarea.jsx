import React from "react";
import { cn } from "@/app/lib/utils/utils";

const Textarea = React.forwardRef(
  ({ className, label, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={cn(
            "w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
            "transition-all duration-200 resize-none",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
