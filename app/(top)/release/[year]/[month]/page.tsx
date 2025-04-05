import { ReactElement } from "react"
import { ReleasePageMonth } from "@/release/page/month"

interface Params {
  year: string
  month: string
}

export default async function Page(props: {
  params: Promise<Params>
}): Promise<ReactElement> {
  const { year, month } = await props.params

  return (
    <ReleasePageMonth
      year={parseInt(year, 10)}
      month={parseInt(month, 10)}
    />
  )
}

/**
 * @TODO scan src/release/note to generate
 */
export function generateStaticParams(): Params[] {
  return [
    { year: "2024", month: "05" },
    { year: "2024", month: "06" },
  ]
}
