import { ReactElement } from "react"
import { RELEASE_USER_MAP, ReleaseUser as ReleaseUserName } from "@/release/user/map"
import Link from "next/link"

export function ReleaseUser(props: {
  name: ReleaseUserName
}): ReactElement {
  const { name } = props

  // This should not happen type-wise,
  // but since this component is used in markdown,
  // we do need to handle this case.
  if (RELEASE_USER_MAP[name] === undefined)
    throw new Error(`Unknown user: ${name}`)

  return (
    <Link href={`/with/${name}`}>
      @{name}
    </Link>
  )
}
