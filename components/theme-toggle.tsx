"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="btn"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      <span className="mono">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
