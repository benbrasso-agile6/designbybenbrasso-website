"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import HeroSectionBioBlock from "./hero-section-bio-block"

export default function HeroSection() {
  return (
    <section className="relative w-full pt-20 md:pt-32 lg:pt-40 pb-10 md:pb-16 lg:pb-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated gradient base */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-100 via-neutral-50 to-slate-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-slate-900 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>

        {/* Floating animated elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/6 w-32 h-32 bg-sky-200/20 dark:bg-sky-400/10 rounded-full blur-xl animate-bounce"
            style={{ animationDuration: "6s", animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-200/15 dark:bg-blue-400/8 rounded-full blur-lg animate-bounce"
            style={{ animationDuration: "8s", animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-slate-200/20 dark:bg-slate-400/10 rounded-full blur-lg animate-bounce"
            style={{ animationDuration: "7s", animationDelay: "4s" }}
          ></div>
        </div>

        {/* Subtle moving gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-50/30 to-transparent dark:via-sky-900/20 animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/60 via-neutral-800/40 to-neutral-900/70 dark:from-neutral-950/80 dark:via-neutral-950/60 dark:to-neutral-950/90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/85 to-white/75 dark:from-neutral-950/95 dark:via-neutral-950/85 dark:to-neutral-950/75"></div>

      {/* Subtle animated light effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-8">
        {/* Flex column-reverse for small screens, grid for lg screens */}
        <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-[1fr_auto] lg:gap-16 items-start">
          {/* Text content - will appear below avatar on small screens due to flex-col-reverse */}
          <div className="space-y-6 text-left">
            <h1 className="text-[2rem] sm:text-4xl md:text-5xl xl:text-5xl font-semibold leading-snug sm:leading-snug md:leading-tight xl:leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="block text-sky-600 dark:text-sky-400"
              >
                Hey! 👋
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                className="inline-block text-neutral-800 dark:text-neutral-100"
              >
                {"I'm\u00A0"}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                className="text-sky-600 dark:text-sky-400 inline-block"
              >
                Ben Brasso,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
                className="inline-block text-neutral-800 dark:text-neutral-100"
              >
                {" "}
                UX product designer, and navigator of the nebulous. 🧭
              </motion.span>
            </h1>
          </div>
          {/* Avatar - will appear above text on small screens */}
          <motion.div
            initial={{ opacity: 0, x: -350 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-start lg:justify-center" // justify-start for small screens, lg:justify-center for larger
          >
            <Image
              src="/images/ben-brasso-avatar.png"
              alt="Ben Brasso - UX Designer"
              width={300}
              height={300}
              className="rounded-full object-cover aspect-square shadow-2xl border-4 border-sky-600/30 dark:border-sky-400/30"
              priority
              unoptimized // Add this prop
            />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto mt-12 md:mt-16 lg:mt-20 px-8">
        <HeroSectionBioBlock />
      </div>
    </section>
  )
}
