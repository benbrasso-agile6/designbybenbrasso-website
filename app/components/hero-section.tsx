"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import HeroSectionBioBlock from "./hero-section-bio-block"

export default function HeroSection() {
  return (
    <section className="relative w-full -mt-16 pt-16 md:pt-24 lg:pt-32 pb-10 md:pb-16 lg:pb-20 overflow-hidden z-0">
      {/* Static gradient background */}
      <div className="absolute inset-0 w-full h-[calc(100%+4rem)]">
        <div className="absolute inset-0">
          <Image
            src="/abstract-blue-orange-gas-no-pink-background.jpg"
            alt=""
            fill
            className="object-cover opacity-85 dark:opacity-75 animate-[gasImageFlow_20s_ease-in-out_infinite]"
            priority
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-sky-100/75 to-blue-50/60 dark:from-slate-800/80 dark:via-sky-900/60 dark:to-blue-900/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-sky-25/50 via-cyan-100/55 to-white/80 dark:from-slate-900/60 dark:via-sky-900/40 dark:via-cyan-900/45 dark:to-slate-900/70"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent dark:from-slate-900/50 dark:via-transparent dark:to-transparent"></div>

      {/* Content */}
      <div className="relative z-1 max-w-[1000px] mx-auto px-8">
        {/* Flex column-reverse for small screens, grid for lg screens */}
        <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-[1fr_auto] lg:gap-16 items-start">
          {/* Text content - will appear below avatar on small screens due to flex-col-reverse */}
          <div className="space-y-6 text-left">
            <h1 className="text-[2.25rem] sm:text-4xl md:text-5xl xl:text-5xl font-semibold leading-snug sm:leading-snug md:leading-tight xl:leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="block text-sky-700 dark:text-sky-400"
              >
                Hey! 👋
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                className="inline-block text-black dark:text-white"
              >
                {"I’m\u00A0"}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                className="text-sky-700 dark:text-sky-400 inline-block"
              >
                Ben Brasso,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
                className="inline-block text-black dark:text-white"
              >
                {" "}
                UX product designer and navigator of the nebulous 🧭
              </motion.span>
            </h1>
          </div>
          {/* Avatar - will appear above text on small screens */}
          <motion.div
            initial={{ opacity: 0, x: -350 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-start lg:justify-center mt-12 lg:mt-0"
          >
            <Image
              src="/images/ben-brasso-avatar.png"
              alt="Ben Brasso - UX Designer"
              width={300}
              height={300}
              className="rounded-full object-cover aspect-square shadow-2xl border-4 border-sky-700/30 dark:border-sky-400/30"
              priority
              unoptimized
            />
          </motion.div>
        </div>
      </div>

      <div className="relative z-1 max-w-[1000px] mx-auto mt-20 md:mt-16 lg:mt-20 px-8">
        <HeroSectionBioBlock />
      </div>

      <style jsx>{`
        @keyframes gasImageFlow {
          0%, 100% { 
            transform: scale(1.0) rotate(0deg);
            filter: hue-rotate(0deg) brightness(1) contrast(1) saturate(1);
          }
          20% { 
            transform: scale(1.18) rotate(3deg);
            filter: hue-rotate(60deg) brightness(1.08) contrast(1.12) saturate(1.4);
          }
          40% { 
            transform: scale(1.03) rotate(-2deg);
            filter: hue-rotate(-20deg) brightness(0.92) contrast(0.88) saturate(1.2);
          }
          60% { 
            transform: scale(1.16) rotate(2.5deg);
            filter: hue-rotate(75deg) brightness(1.06) contrast(1.1) saturate(1.5);
          }
          80% { 
            transform: scale(1.05) rotate(-1.5deg);
            filter: hue-rotate(-15deg) brightness(0.94) contrast(0.92) saturate(1.15);
          }
        }
      `}</style>
    </section>
  )
}
