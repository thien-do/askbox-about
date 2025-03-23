import { ReactNode } from "react"

export function TopLayout(props: {
  children: ReactNode
}): ReactNode {
  const { children } = props

  const nav = (
    <div className="mb-6 flex gap-3">
      <a href="/">← Back to Top</a>
    </div>
  )

  return (
    <>
      {nav}
      {children}
    </>
  )
}