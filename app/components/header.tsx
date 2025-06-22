import Link from "next/link"
import { BriefcaseIcon } from "lucide-react"

const Header = () => {
  const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/readme",
      label: "README",
    },
    {
      href: "/more-work",
      label: "More Work",
      icon: BriefcaseIcon,
    },
  ]

  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          My Portfolio
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gray-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
