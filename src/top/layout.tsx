import { ReactNode } from "react"

export function TopLayout(props: {
  children: ReactNode
}): ReactNode {
  const { children } = props

  const nav = (
    <nav className="mb-6">
      <a href="/">← Back to Top</a>
    </nav>
  )

  return (
    <>
      {nav}
      {children}
    </>
  )
}