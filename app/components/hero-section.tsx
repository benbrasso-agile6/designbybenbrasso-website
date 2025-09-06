"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import HeroSectionBioBlock from "./hero-section-bio-block"

export default function HeroSection() {
  return (
    <section className="relative w-full pt-20 md:pt-32 lg:pt-40 pb-10 md:pb-16 lg:pb-20 overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Cinematic background image */}
        <div className="absolute inset-0">
          <Image
            src="/cinematic-atmospheric-clouds-and-mist-in-dark-mood.jpg"
            alt=""
            fill
            className="object-cover opacity-40 dark:opacity-30"
            priority
          />
        </div>

        <div className="absolute inset-0">
          {/* Large moving atmospheric overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-blue-600/15 to-purple-600/20 dark:from-sky-400/15 dark:via-blue-500/10 dark:to-purple-500/15 animate-[atmosphericDrift_20s_ease-in-out_infinite]"></div>

          {/* Floating light particles */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-sky-400/30 dark:bg-sky-300/20 rounded-full blur-xl animate-[floatUp_15s_ease-in-out_infinite]"></div>
          <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-blue-400/25 dark:bg-blue-300/15 rounded-full blur-lg animate-[floatUp_18s_ease-in-out_infinite] delay-[5s]"></div>
          <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-purple-400/20 dark:bg-purple-300/12 rounded-full blur-md animate-[floatUp_22s_ease-in-out_infinite] delay-[10s]"></div>

          {/* Drifting mist layers */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-sky-300/10 to-transparent dark:via-sky-200/5 animate-[mistDrift_25s_linear_infinite]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-blue-300/8 to-transparent dark:via-blue-200/4 animate-[mistDrift_30s_linear_infinite_reverse] delay-[8s]"></div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 via-neutral-800/10 to-neutral-900/25 dark:from-neutral-950/30 dark:via-neutral-950/15 dark:to-neutral-950/35"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/5 to-white/2 dark:from-neutral-950/15 dark:via-neutral-950/8 dark:to-neutral-950/5"></div>

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
        @keyframes atmosphericDrift {
          0%, 100% { transform: translateX(0px) translateY(0px) scale(1); opacity: 0.6; }
          25% { transform: translateX(-50px) translateY(-30px) scale(1.05); opacity: 0.8; }
          50% { transform: translateX(30px) translateY(-20px) scale(0.95); opacity: 0.4; }
          75% { transform: translateX(-20px) translateY(-40px) scale(1.02); opacity: 0.7; }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
          25% { transform: translateY(-60px) translateX(20px) scale(1.2); opacity: 0.6; }
          50% { transform: translateY(-100px) translateX(-15px) scale(0.8); opacity: 0.8; }
          75% { transform: translateY(-80px) translateX(30px) scale(1.1); opacity: 0.4; }
        }
        @keyframes mistDrift {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}
