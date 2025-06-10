"use client"

import {
  PaletteIcon,
  TriangleIcon,
  GithubIcon,
  CodeIcon,
  WindIcon,
  ClipboardCheckIcon,
  BrainCircuitIcon,
  SparklesIcon,
  CodepenIcon,
  LibraryIcon,
  LayoutDashboardIcon,
  BarChart3Icon,
  LineChartIcon,
  ActivityIcon,
  UsersIcon,
  RefreshCwIcon,
  LightbulbIcon,
  SearchIcon,
  SmileIcon,
  WorkflowIcon,
} from "lucide-react"
import type React from "react"
import { motion } from "framer-motion"

interface ToolItem {
  icon: React.ElementType
  text: string
}

export default function ToolsIUseSection() {
  const tools: ToolItem[] = [
    { icon: PaletteIcon, text: "Figma" },
    { icon: TriangleIcon, text: "Vercel" },
    { icon: GithubIcon, text: "GitHub" },
    { icon: CodeIcon, text: "VS Code IDE" },
    { icon: WindIcon, text: "Tailwind CSS" },
    { icon: GithubIcon, text: "GitHub Copilot" },
    { icon: ClipboardCheckIcon, text: "Optimal Workshop" },
    { icon: BrainCircuitIcon, text: "ChatGPT" },
    { icon: SparklesIcon, text: "Google Gemini" },
    { icon: CodepenIcon, text: "CodePen" },
    { icon: WorkflowIcon, text: "Mermaid" },
    { icon: LibraryIcon, text: "U.S. Web Design System" },
    { icon: LayoutDashboardIcon, text: "Mural" },
    { icon: BrainCircuitIcon, text: "VA GPT (Beta)" },
    { icon: BarChart3Icon, text: "Looker Studio" },
    { icon: LineChartIcon, text: "Google Analytics 4" },
    { icon: ActivityIcon, text: "Datadog" },
    { icon: UsersIcon, text: "HCD Methodologies" },
    { icon: RefreshCwIcon, text: "Agile" },
    { icon: LightbulbIcon, text: "An open mind" },
    { icon: SearchIcon, text: "Curiosity" },
    { icon: SmileIcon, text: "An abundance mindset" },
    { icon: LightbulbIcon, text: "Optimism" },
  ]

  const getItemVariants = (index: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      x: [0, -5, 5, -4, 4, 0],
      rotate: [0, -3, 3, -2, 2, 0],
      transition: {
        delay: index * 0.03, // Changed from 0.07 to 0.03 for faster population
        duration: 0.45, // Decreased duration for a faster animation
        ease: "easeOut",
      },
    },
  })

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white dark:bg-neutral-950">
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900 dark:text-neutral-100">
            What tools I use to <span className="text-sky-600 dark:text-sky-500">design</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {tools.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                className="flex items-center gap-2.5 px-5 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl text-lg font-semibold text-neutral-800 dark:text-neutral-200 shadow-sm cursor-default"
                variants={getItemVariants(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <IconComponent className="h-5 w-5 text-sky-700 dark:text-sky-600 flex-shrink-0" aria-hidden="true" />
                <span>{item.text}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
