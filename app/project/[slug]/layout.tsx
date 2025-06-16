// app/project/[slug]/layout.tsx

import type React from "react"

interface Props {
  children: React.ReactNode
}

export default function ProjectLayout({ children }: Props) {
  return <div>{children}</div>
}
