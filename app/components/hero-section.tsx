"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import HeroSectionBioBlock from "./hero-section-bio-block"

export default function HeroSection() {
  return (
    <section className="relative w-full pt-20 md:pt-32 lg:pt-40 pb-10 md:pb-16 lg:pb-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated gradient base with custom keyframes */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-neutral-50 to-slate-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-100/40 via-transparent to-blue-100/40 dark:from-sky-900/30 dark:via-transparent dark:to-blue-900/30 animate-[drift_15s_ease-in-out_infinite]"></div>
        </div>

        {/* Floating cinematic particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-sky-300/30 dark:bg-sky-400/20 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-blue-300/25 dark:bg-blue-400/15 rounded-full blur-xl animate-[float_12s_ease-in-out_infinite_reverse]"></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-slate-300/30 dark:bg-slate-400/20 rounded-full blur-xl animate-[float_10s_ease-in-out_infinite]"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/6 w-24 h-24 bg-sky-200/35 dark:bg-sky-500/15 rounded-full blur-lg animate-[float_14s_ease-in-out_infinite]"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Moving light rays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-sky-300/20 to-transparent dark:via-sky-400/10 animate-[sway_20s_ease-in-out_infinite] transform-gpu"></div>
          <div
            className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-blue-300/15 to-transparent dark:via-blue-400/8 animate-[sway_25s_ease-in-out_infinite_reverse] transform-gpu"
            style={{ animationDelay: "5s" }}
          ></div>
        </div>
      </div>

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 via-neutral-800/5 to-neutral-900/15 dark:from-neutral-950/20 dark:via-neutral-950/10 dark:to-neutral-950/25"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/20 to-white/10 dark:from-neutral-950/40 dark:via-neutral-950/20 dark:to-neutral-950/10"></div>

      {/* Subtle animated light effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-pulse"
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

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) scale(1.05); }
          50% { transform: translateY(-10px) translateX(-15px) scale(0.95); }
          75% { transform: translateY(-30px) translateX(5px) scale(1.02); }
        }
        @keyframes drift {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(30px); }
        }
        @keyframes sway {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          25% { transform: translateX(15px) rotate(1deg); }
          50% { transform: translateX(-10px) rotate(-0.5deg); }
          75% { transform: translateX(20px) rotate(0.8deg); }
        }
      `}</style>
    </section>
  )
}
