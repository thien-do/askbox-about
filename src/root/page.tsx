import Page from "@/root/page.mdx"
import { ReactNode } from "react"

export function RootPage(): ReactNode {
  const nav = (
    <nav className="mb-6">
      <a href="https://ask.box">Go to App →</a>
    </nav>
  )

  return (
    <>
      {nav}
      <Page />
    </>
  )
}
