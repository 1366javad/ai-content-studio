"use client";

import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/app/lib/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { setIsDark } = useThemeContext();
  function handelToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDark((isDark) => !isDark);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="p-3  rounded-xl hover:scale-105 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
      onClick={handelToggle}
    >
      <div className="relative w-12">
        {theme === "dark" ? (
          <Sun className="w-11 h-11" />
        ) : (
          <Moon className="w-11 h-11 " />
        )}
      </div>
    </Button>
  );
}
