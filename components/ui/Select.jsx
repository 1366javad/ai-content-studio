import React from "react";
import { cn } from "@/app/lib/utils/utils";
import { ChevronDown } from "lucide-react";

const Select = React.forwardRef(
  ({ className, label, options = [], ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
              "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
              "transition-all duration-200 appearance-none cursor-pointer",
              className,
            )}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
        </div>
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
