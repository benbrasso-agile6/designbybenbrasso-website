import { ThemeToggle } from "@/app/components/theme-toggle"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">© 2025 Ben Brasso. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
