import { ReactElement } from "react"
import { RELEASE_USER_MAP } from "@/release/user/map"

export function ReleaseUser(props: {
  name: keyof typeof RELEASE_USER_MAP
}): ReactElement {
  const { name } = props

  const url = RELEASE_USER_MAP[name]

  // This should not happen type-wise,
  // but since this component is used in markdown,
  // we do need to handle this case.
  if (url === undefined)
    throw new Error(`Unknown user: ${name}`)

  return <a target="_blank" href={url}>@{name}</a>
}
