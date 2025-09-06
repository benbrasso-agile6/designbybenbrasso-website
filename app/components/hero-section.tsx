"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import HeroSectionBioBlock from "./hero-section-bio-block"

export default function HeroSection() {
  return (
    <section className="relative w-full pt-20 md:pt-32 lg:pt-40 pb-10 md:pb-16 lg:pb-20 overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-neutral-50 to-slate-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-slate-900"></div>

        {/* Atmospheric gas/cloud effects */}
        <div className="absolute inset-0">
          {/* Large atmospheric clouds */}
          <div className="absolute top-1/4 left-1/6 w-96 h-64 bg-gradient-to-r from-sky-400/30 via-blue-400/20 to-transparent dark:from-sky-400/20 dark:via-blue-400/15 dark:to-transparent rounded-[100px] blur-3xl animate-[drift_25s_ease-in-out_infinite]"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-56 bg-gradient-to-l from-purple-400/25 via-blue-400/15 to-transparent dark:from-purple-400/15 dark:via-blue-400/10 dark:to-transparent rounded-[80px] blur-2xl animate-[driftSlow_30s_ease-in-out_infinite_reverse]"></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-72 h-48 bg-gradient-to-br from-emerald-400/20 via-teal-400/15 to-transparent dark:from-emerald-400/12 dark:via-teal-400/8 dark:to-transparent rounded-[90px] blur-3xl animate-[float_20s_ease-in-out_infinite]"
            style={{ animationDelay: "8s" }}
          ></div>

          {/* Medium gas wisps */}
          <div
            className="absolute top-1/2 right-1/6 w-64 h-40 bg-gradient-to-tr from-sky-300/15 via-cyan-300/10 to-transparent dark:from-sky-300/8 dark:via-cyan-300/5 dark:to-transparent rounded-[70px] blur-2xl animate-[wisp_18s_ease-in-out_infinite]"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-1/6 right-1/2 w-56 h-36 bg-gradient-to-bl from-blue-300/18 via-indigo-300/12 to-transparent dark:from-blue-300/10 dark:via-indigo-300/6 dark:to-transparent rounded-[60px] blur-xl animate-[wisp_22s_ease-in-out_infinite_reverse]"
            style={{ animationDelay: "12s" }}
          ></div>

          {/* Small atmospheric particles */}
          <div
            className="absolute top-2/3 left-1/5 w-40 h-28 bg-gradient-to-r from-teal-300/12 to-transparent dark:from-teal-300/6 dark:to-transparent rounded-[50px] blur-xl animate-[particle_15s_ease-in-out_infinite]"
            style={{ animationDelay: "6s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-48 h-32 bg-gradient-to-l from-purple-300/10 to-transparent dark:from-purple-300/5 dark:to-transparent rounded-[55px] blur-lg animate-[particle_19s_ease-in-out_infinite_reverse]"
            style={{ animationDelay: "14s" }}
          ></div>
        </div>

        {/* Flowing gas streams */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-32 h-80 bg-gradient-to-b from-sky-400/8 via-blue-400/12 to-transparent dark:from-sky-400/4 dark:via-blue-400/6 dark:to-transparent rounded-[40px] blur-lg animate-[stream_28s_ease-in-out_infinite] transform rotate-12"></div>
          <div
            className="absolute bottom-1/3 right-1/5 w-28 h-72 bg-gradient-to-t from-emerald-400/6 via-teal-400/10 to-transparent dark:from-emerald-400/3 dark:via-teal-400/5 dark:to-transparent rounded-[35px] blur-lg animate-[stream_24s_ease-in-out_infinite_reverse] transform -rotate-12"
            style={{ animationDelay: "10s" }}
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
        @keyframes drift {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1) rotate(0deg); }
          25% { transform: translateY(-30px) translateX(40px) scale(1.05) rotate(2deg); }
          50% { transform: translateY(-15px) translateX(-30px) scale(0.95) rotate(-1deg); }
          75% { transform: translateY(-45px) translateX(25px) scale(1.02) rotate(1deg); }
        }
        @keyframes driftSlow {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1) rotate(0deg); }
          33% { transform: translateY(-20px) translateX(-35px) scale(1.03) rotate(-1deg); }
          66% { transform: translateY(-35px) translateX(20px) scale(0.97) rotate(1deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-25px) translateX(15px) scale(1.02); }
        }
        @keyframes wisp {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-20px) translateX(30px) scale(1.1) rotate(1deg); opacity: 0.8; }
          50% { transform: translateY(-10px) translateX(-25px) scale(0.9) rotate(-0.5deg); opacity: 0.4; }
          75% { transform: translateY(-30px) translateX(15px) scale(1.05) rotate(0.5deg); opacity: 0.7; }
        }
        @keyframes particle {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-15px) translateX(20px) scale(1.1); opacity: 0.6; }
        }
        @keyframes stream {
          0%, 100% { transform: translateY(0px) translateX(0px) scaleY(1) rotate(12deg); opacity: 0.4; }
          33% { transform: translateY(-20px) translateX(10px) scaleY(1.1) rotate(14deg); opacity: 0.6; }
          66% { transform: translateY(-10px) translateX(-15px) scaleY(0.9) rotate(10deg); opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}
