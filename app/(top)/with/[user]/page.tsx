import { ReactElement } from "react"
import { ReleaseUserPage } from "@/release/user/page"
import { isReleaseUser, RELEASE_USER_MAP } from "@/release/user/map"

interface Params {
  user: string
}

export default async function Page(props: {
  params: Promise<Params>
}): Promise<ReactElement> {
  const { user: name } = await props.params

  if (!isReleaseUser(name))
    throw new Error(`Invalid user: ${name}`)

  return <ReleaseUserPage name={name} />
}

export async function generateStaticParams(): Promise<Params[]> {
  const names = Object.keys(RELEASE_USER_MAP)
  const params: Params[] = names.map((name) => ({ user: name }))
  return params
}
