import { ReactNode } from "react"
import "./layout.css"

export function RootLayout(props: {
  children: ReactNode
}): ReactNode {
  const { children } = props

  return (
    <html lang="en">
      <body className="dark:bg-stone-800">
        <article
          className={[
            "prose prose-stone prose-lg",
            "prose-a:underline-offset-8 prose-a:decoration-wavy prose-a:decoration-2",
            "prose-a:decoration-rose-600 dark:prose-a:decoration-rose-400",
            "dark:prose-invert p-6",
          ].join(" ")}
        >
          {children}
        </article>
      </body>
    </html>
  );
}