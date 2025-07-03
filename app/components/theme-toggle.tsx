"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "dark" ? "text-slate-500 scale-75" : "text-foreground scale-100"
        }`}
      />
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} aria-label="Toggle theme" />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "light" ? "text-slate-500 scale-75" : "text-foreground scale-100"
        }`}
      />
    </div>
  )
}
