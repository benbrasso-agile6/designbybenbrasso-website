import { Figma, Palette, Users, Target, Lightbulb, Zap, Heart, Mic } from "lucide-react"

const tools = [
  { name: "Figma", icon: Figma },
  { name: "Adobe Creative Suite", icon: Palette },
  { name: "User Research", icon: Users },
  { name: "Agile", icon: Target },
  { name: "Web Content Accessibility Guidelines (WCAG)", icon: Mic },
  { name: "Design Thinking", icon: Lightbulb },
  { name: "Innovation", icon: Zap },
  { name: "Empathy", icon: Heart },
]

export default function ToolsIUse() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tools I Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <IconComponent className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">{tool.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
