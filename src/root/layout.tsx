import { ReactNode } from "react"
import "./layout.css"

export function RootLayout(props: {
  children: ReactNode
}): ReactNode {
  const { children } = props


  const article = (
    <article
      className={[
        "mx-auto p-6",
        "prose prose-stone prose-lg dark:prose-invert",
        // a tag
        "prose-a:underline-offset-8 prose-a:decoration-wavy prose-a:decoration-2",
        "prose-a:decoration-rose-600 dark:prose-a:decoration-rose-400",
      ].join(" ")}
    >
      {children}
    </article>
  )

  return (
    <html lang="en">
      <body
        className={[
          "bg-stone-100 dark:bg-stone-800",
          // text color is set at "prose"
        ].join(" ")}
      >
        {article}
      </body>
    </html>
  );
}