import ContactHeroContent from "./contact-hero-content"
import ContactHeroImage from "./contact-hero-image"

interface ContactHeroSectionProps {
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  enableParallax?: boolean
}

export default function ContactHeroSection({
  title = "Let's Connect",
  description = "Have a project in mind, a question, or just want to vibe? I’d love to hear from you.",
  imageSrc = "https://res.cloudinary.com/dpl6apspp/image/upload/IMG_2251_at7pkn.jpg",
  imageAlt = "Ben Brasso",
  enableParallax = true,
}: ContactHeroSectionProps) {
  const styledTitle =
    title === "Let's Connect" ? (
      <>
        Let’s <span className="text-sky-600 dark:text-sky-500">Connect</span>
      </>
    ) : (
      title
    )

  return (
    <div className="flex flex-col items-center text-center gap-6">
      <ContactHeroContent title={styledTitle} description={description} />
      <ContactHeroImage src={imageSrc} alt={imageAlt} enableParallax={enableParallax} />
    </div>
  )
}
