import Page from "@/pricing/page.mdx"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Pricing",
}

export default function PricingPage(): ReactNode {
  return <Page />
}
