import { Fragment, ReactElement } from "react"
import nodeFile from "fs/promises"
import nodePath from "path"
import { RELEASE_USER_MAP, ReleaseUser as ReleaseUserName } from "./map"
import Link from "next/link"

type MdxComponent = (props: unknown) => ReactElement

type MdxImport = {
  default: MdxComponent
}

interface Props {
  name: ReleaseUserName
}

interface Note {
  // yyyy-mm-dd
  date: string
  Content: MdxComponent
}

async function getNotes(props: Props): Promise<Note[]> {
  const { name: userName } = props

  const dir = nodePath.join(process.cwd(), "src/release/note")
  const allNames = await nodeFile.readdir(dir)

  const allFilePromises = allNames.map(async (fileName) => {
    const path = nodePath.join(dir, fileName)
    const content = await nodeFile.readFile(path, "utf-8")
    return { name: fileName, content }
  })
  const allFiles = await Promise.all(allFilePromises)

  const userFiles = allFiles
    .filter((file) => file.content.includes(`name="${userName}"`))
    .sort((a, b) => b.name.localeCompare(a.name))

  const userNotePromises = userFiles.map(async (file): Promise<Note> => {
    const date = file.name.replace(".mdx", "")
    const mdx: MdxImport = await import(`@/release/note/${file.name}`)
    const Content = mdx.default
    return { date, Content }
  })
  const userNotes = await Promise.all(userNotePromises)

  return userNotes
}

const dateHeadingFormat = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  day: "numeric",
})

const notePluralRules = new Intl.PluralRules("en-US", {})

export async function ReleaseUserPage(props: Props): Promise<ReactElement> {
  const { name } = props

  const notes = await getNotes({ name })

  const dates = notes.map((note, index) => {
    const date = new Date(note.date)

    return (
      <Fragment key={index}>
        <h2 id={note.date}>
          <a href={`#${note.date}`}>#</a>
          {' '}
          {dateHeadingFormat.format(date)}
        </h2>
        <note.Content />
      </Fragment>
    )
  })

  const notePlural = notePluralRules.select(dates.length) !== "one"

  const url = RELEASE_USER_MAP[name]
  const host = new URL(url).host.replace("www.", "").replace(".com", "")
  const link = (
    <Link target="_blank" href={url}>
      {host}
    </Link>
  )

  return (
    <>
      <h1>
        Built with @{name}
      </h1>
      <p>
        <strong>@{name} ({link})</strong>
        {' '}has been helping us shape AskBox with their feedback.
        {` Here ${notePlural ? "are" : "is"} the `}
        {`${dates.length} ${notePlural ? "releases" : "release"}`}
        {' '}we have launched thanks to them.
      </p>
      {dates}
    </>
  )
}
