"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import HeroSectionBioBlock from "./hero-section-bio-block"

export default function HeroSection() {
  return (
    <section className="relative w-full pt-20 md:pt-32 lg:pt-40 pb-10 md:pb-16 lg:pb-20 overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0">
          <Image
            src="/abstract-liquid-waves-dark-cinematic-background.jpg"
            alt=""
            fill
            className="object-cover opacity-50 dark:opacity-40"
            priority
          />
          {/* Animated liquid overlay that creates internal movement */}
          <div className="absolute inset-0 animate-[liquidRipple_25s_ease-in-out_infinite] bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/15 mix-blend-overlay"></div>
          <div className="absolute inset-0 animate-[liquidWave_35s_ease-in-out_infinite] bg-gradient-to-tr from-transparent via-cyan-900/10 to-transparent mix-blend-soft-light"></div>
          <div className="absolute inset-0 animate-[liquidFlow_40s_linear_infinite] bg-gradient-to-r from-transparent via-blue-800/8 to-transparent mix-blend-color-dodge"></div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/40 via-neutral-800/30 to-neutral-900/45 dark:from-neutral-950/50 dark:via-neutral-950/35 dark:to-neutral-950/55"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-white/8 to-white/5 dark:from-neutral-950/25 dark:via-neutral-950/15 dark:to-neutral-950/10"></div>

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
                className="block text-sky-600 dark:text-sky-400 drop-shadow-lg"
              >
                Hey! 👋
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                className="inline-block text-neutral-900 dark:text-white drop-shadow-lg"
              >
                {"I'm\u00A0"}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                className="text-sky-600 dark:text-sky-400 inline-block drop-shadow-lg"
              >
                Ben Brasso,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
                className="inline-block text-neutral-900 dark:text-white drop-shadow-lg"
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
        @keyframes liquidRipple {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            filter: hue-rotate(0deg) brightness(1);
          }
          33% { 
            transform: scale(1.05) rotate(2deg);
            filter: hue-rotate(30deg) brightness(1.1);
          }
          66% { 
            transform: scale(0.95) rotate(-1deg);
            filter: hue-rotate(-20deg) brightness(0.9);
          }
        }
        
        @keyframes liquidWave {
          0%, 100% { 
            transform: translateX(0%) skewX(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateX(-100%) skewX(5deg);
            opacity: 0.6;
          }
        }
        
        @keyframes liquidFlow {
          0% { 
            transform: translateX(-100%) scaleY(1);
          }
          100% { 
            transform: translateX(100%) scaleY(1.2);
          }
        }
      `}</style>
    </section>
  )
}
