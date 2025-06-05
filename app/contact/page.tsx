"use client"

import ContactForm from "./contact-form"
import ContactHeroSection from "./components/contact-hero-section"

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center text-center">
      <ContactHeroSection />
      <div className="w-full max-w-md mt-24">
        <ContactForm />
      </div>
    </div>
  )
}
