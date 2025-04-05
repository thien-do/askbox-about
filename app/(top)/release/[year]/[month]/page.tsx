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
