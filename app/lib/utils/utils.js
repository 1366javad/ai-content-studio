import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn = classNames
 * ترکیب کلاس‌های شرطی و Tailwind به صورت تمیز و بدون تکرار
 * نمونه استفاده:
 * <div className={cn("p-4", condition && "bg-red-500")} />
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
