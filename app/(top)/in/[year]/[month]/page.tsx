import { ReactElement } from "react"
import { ReleaseMonthPage } from "@/release/month/page"
import { listReleaseMonth } from "@/release/month/list"

interface Params {
  year: string
  month: string
}

export default async function Page(props: {
  params: Promise<Params>
}): Promise<ReactElement> {
  const { year, month } = await props.params

  return (
    <ReleaseMonthPage
      year={parseInt(year, 10)}
      month={parseInt(month, 10)}
    />
  )
}

export async function generateStaticParams(): Promise<Params[]> {
  const years = await listReleaseMonth()

  const params: Params[] = years.flatMap((year) => {
    return year.months.map((month) => ({
      year: year.year.toString(),
      month: month.toString().padStart(2, "0"),
    }))
  })

  return params
}
