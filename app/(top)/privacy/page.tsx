import Page from "@/top/privacy.mdx"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Privacy Policy",
}

export default function PrivacyPage(): ReactNode {
  return <Page />
}