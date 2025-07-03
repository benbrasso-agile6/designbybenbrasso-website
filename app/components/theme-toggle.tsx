"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <div className="h-[1.2rem] w-[1.2rem]" />
        <Switch checked={false} onCheckedChange={() => {}} aria-label="Toggle theme" />
        <div className="h-[1.2rem] w-[1.2rem]" />
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2 group hover:scale-110 transition-transform duration-300 ease-out cursor-pointer">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-out ${
          theme === "dark" ? "text-slate-500 scale-75 opacity-60" : "text-foreground scale-100 opacity-100"
        } ${mounted ? "animate-in fade-in duration-700" : ""}`}
      />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
        className="transition-all duration-300 ease-out group-hover:shadow-lg"
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-out ${
          theme === "light" ? "text-slate-500 scale-75 opacity-60" : "text-foreground scale-100 opacity-100"
        } ${mounted ? "animate-in fade-in duration-700 delay-150" : ""}`}
      />
    </div>
  )
}
