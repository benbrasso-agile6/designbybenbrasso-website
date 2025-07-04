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
    // Render a placeholder on the server to prevent layout shift
    return (
      <div className="flex items-center space-x-2">
        <div className="h-[1.2rem] w-[1.2rem]" />
        <Switch checked={false} onCheckedChange={() => {}} aria-label="Toggle theme" />
        <div className="h-[1.2rem] w-[1.2rem]" />
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-in-out ${
          theme === "light" ? "text-foreground scale-100 opacity-100" : "text-muted-foreground scale-75 opacity-50"
        }`}
      />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
        className="hover:scale-110 transition-transform duration-200 ease-out"
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-in-out ${
          theme === "dark" ? "text-foreground scale-100 opacity-100" : "text-muted-foreground scale-75 opacity-50"
        }`}
      />
    </div>
  )
}
