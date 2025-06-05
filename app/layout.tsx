import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "./components/scroll-to-top"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ben Brasso | Full-Stack UX Product Design Portfolio",
  description:
    "Design Portfolio for Ben Brasso, Full-Stack UX Product Design Lead, showcasing projects and expertise in user experience, product strategy, AI, and delivery. Specializing in health care design, research, accessibility, content design, and human-centered design methodologies.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ben Brasso | Full-Stack UX Product Design Lead", // This will be the og:title
    description:
      "Design Portfolio for Ben Brasso, Full-Stack UX Product Design Lead, showcasing projects and expertise in user experience, product strategy, AI, and delivery. Specializing in health care design, research, accessibility, content design, and human-centered design methodologies.",
    images: [
      {
        url: "https://res.cloudinary.com/dpl6apspp/image/upload/IMG_7897_tmmfga.jpg",
        width: 1200,
        height: 630,
        alt: "Ben Brasso - Full-Stack UX Product Design Portfolio",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${plusJakartaSans.className} bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
