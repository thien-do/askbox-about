import { Fragment, ReactElement } from "react"
import nodeFile from "fs/promises"
import nodePath from "path"

type MdxComponent = (props: unknown) => ReactElement

type MdxImport = {
  default: MdxComponent
}

interface Props {
  year: number
  month: number
}

interface DayNote {
  day: number
  Note: MdxComponent
}

async function getNotes(props: Props): Promise<DayNote[]> {
  const { year, month } = props

  const dir = nodePath.join(process.cwd(), "src/release/note")
  const files = await nodeFile.readdir(dir)

  const prefix = [
    year.toString().padStart(4, "0"),
    month.toString().padStart(2, "0"),
    ""
  ].join("-")
  const names = files.filter((name) => name.startsWith(prefix))

  const promises = names.map(async (name): Promise<DayNote> => {
    const text = name.replaceAll(prefix, "").replace(".mdx", "");
    const day = parseInt(text, 10)
    const mdx: MdxImport = await import(`@/release/note/${name}`)
    const Note = mdx.default
    return { day, Note }
  })

  const days = await Promise.all(promises)
  return days
}

const monthHeading = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
})

const dayHeading = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
})

export async function ReleasePageMonth(props: Props): Promise<ReactElement> {
  const { year, month } = props

  const monthDate = new Date(year, month - 1, 1)

  const days = await getNotes({ year, month })

  const dayNodes = days.map(({ day, Note }, i) => {
    const dayDate = new Date(year, month - 1, day)

    return (
      <Fragment key={i}>
        <h2>{dayHeading.format(dayDate)}</h2>
        <Note />
      </Fragment>
    )
  })

  return (
    <>
      <h1>{monthHeading.format(monthDate)}</h1>
      {dayNodes}
    </>
  )
}
