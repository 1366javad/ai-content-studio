import React from "react";
import { cn } from "@/app/lib/utils/utils";

const Button = React.forwardRef(
  (
    { className, variant = "primary", size = "default", children, ...props },
    ref,
  ) => {
    const variants = {
      primary:
        "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30",
      secondary:
        "bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white",
      outline:
        "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950",
      ghost:
        "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
      coral:
        "bg-coral-500 hover:bg-coral-600 text-white shadow-lg shadow-coral-500/30",
      danger: "bg-red-600 hover:bg-red-700 text-white",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      default: "px-6 py-2.5 text-base",
      lg: "px-8 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
