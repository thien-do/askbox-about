import Content from "@/root/content.mdx"
import { ReactNode } from "react"

export function RootPage(): ReactNode {
  const nav = (
    <nav className="mb-6">
      <a href="https://ask.box" target="_blank">
        Go to App →
      </a>
    </nav>
  )

  return (
    <>
      {nav}
      <Content />
    </>
  )
}
