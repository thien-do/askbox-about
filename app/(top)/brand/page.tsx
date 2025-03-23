import Page from "@/brand/page.mdx"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Brand",
}

export default function BrandPage(): ReactNode {
  return <Page />
}
