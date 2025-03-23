import Link from "next/link"
import { ReactNode } from "react"

export function TopLayout(props: {
  children: ReactNode
}): ReactNode {
  const { children } = props

  const nav = (
    <nav className="mb-6">
      <Link href="/">← Back to Top</Link>
    </nav>
  )

  return (
    <>
      {nav}
      {children}
    </>
  )
}