import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ben Brasso Portfolio",
  description: "UX Design Portfolio for Ben Brasso",
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Ben Brasso Portfolio</h1>
      <p className="text-xl mb-8">Coming soon...</p>
      <p className="text-gray-500">Full portfolio website under construction. Check back soon!</p>
    </main>
  )
}
