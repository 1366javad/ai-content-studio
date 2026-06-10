import React from "react";
import { cn } from "@/app/lib/utils/utils";

export const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "p-6 border-b border-gray-200 dark:border-gray-700",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ className, children, ...props }) => {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-gray-900 dark:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
};
