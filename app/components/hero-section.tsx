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
            src="/abstract-gas-smoke-atmospheric-background.jpg"
            alt=""
            fill
            className="object-cover opacity-60 dark:opacity-50 animate-[gasImageFlow_35s_ease-in-out_infinite]"
            priority
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-amber-25/40 to-yellow-50/45 dark:from-orange-950/30 dark:via-amber-950/25 dark:to-yellow-950/35"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-cream-50/35 via-peach-25/20 to-orange-25/15 dark:from-orange-950/25 dark:via-amber-950/15 dark:to-yellow-950/20"></div>

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
        @keyframes gasImageFlow {
          0%, 100% { 
            transform: scale(1.05) rotate(0deg);
            filter: hue-rotate(0deg) brightness(1) contrast(1);
          }
          20% { 
            transform: scale(1.08) rotate(0.5deg);
            filter: hue-rotate(8deg) brightness(1.02) contrast(1.05);
          }
          40% { 
            transform: scale(1.03) rotate(-0.3deg);
            filter: hue-rotate(-5deg) brightness(0.98) contrast(0.95);
          }
          60% { 
            transform: scale(1.07) rotate(0.4deg);
            filter: hue-rotate(12deg) brightness(1.01) contrast(1.02);
          }
          80% { 
            transform: scale(1.04) rotate(-0.2deg);
            filter: hue-rotate(-3deg) brightness(0.99) contrast(0.98);
          }
        }
      `}</style>
    </section>
  )
}
