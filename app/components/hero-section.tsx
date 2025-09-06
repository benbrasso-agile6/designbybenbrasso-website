"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import HeroSectionBioBlock from "./hero-section-bio-block"

export default function HeroSection() {
  return (
    <section className="relative w-full pt-20 md:pt-32 lg:pt-40 pb-10 md:pb-16 lg:pb-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-neutral-50 to-slate-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-200/60 via-blue-100/40 to-purple-100/50 dark:from-sky-800/50 dark:via-blue-900/40 dark:to-purple-900/40 animate-[drift_12s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-emerald-100/40 via-transparent to-teal-100/30 dark:from-emerald-900/30 dark:via-transparent dark:to-teal-900/25 animate-[driftReverse_18s_ease-in-out_infinite]"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-60 h-60 bg-sky-400/50 dark:bg-sky-400/35 rounded-full blur-2xl animate-[floatLarge_10s_ease-in-out_infinite]"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-400/45 dark:bg-blue-400/30 rounded-full blur-xl animate-[floatLarge_14s_ease-in-out_infinite_reverse]"></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-purple-400/40 dark:bg-purple-400/25 rounded-full blur-xl animate-[floatLarge_12s_ease-in-out_infinite]"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/6 w-36 h-36 bg-emerald-400/45 dark:bg-emerald-400/30 rounded-full blur-lg animate-[floatLarge_16s_ease-in-out_infinite]"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/6 right-1/2 w-32 h-32 bg-teal-400/40 dark:bg-teal-400/25 rounded-full blur-lg animate-[floatLarge_11s_ease-in-out_infinite_reverse]"
            style={{ animationDelay: "6s" }}
          ></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-sky-500/60 dark:bg-sky-400/40 rounded-full blur-md animate-[orbit_20s_linear_infinite] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div
            className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-500/50 dark:bg-blue-400/35 rounded-full blur-sm animate-[orbitReverse_25s_linear_infinite] transform -translate-x-1/2 -translate-y-1/2"
            style={{ animationDelay: "5s" }}
          ></div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/5 via-neutral-800/2 to-neutral-900/8 dark:from-neutral-950/15 dark:via-neutral-950/5 dark:to-neutral-950/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-white/10 to-white/5 dark:from-neutral-950/20 dark:via-neutral-950/10 dark:to-neutral-950/5"></div>

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

      <style jsx>{`
        @keyframes floatLarge {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-40px) translateX(30px) scale(1.1); }
          50% { transform: translateY(-20px) translateX(-40px) scale(0.9); }
          75% { transform: translateY(-60px) translateX(20px) scale(1.05); }
        }
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(60px) translateY(-20px); }
        }
        @keyframes driftReverse {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(-50px) translateY(15px); }
        }
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg); }
        }
        @keyframes orbitReverse {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg) translateX(120px) rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
