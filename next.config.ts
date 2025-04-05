import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const base: NextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    // @ts-expect-error This is the right way to use with turbopack
    // https://nextjs.org/docs/app/building-your-application/configuring/mdx#using-plugins-with-turbopack
    remarkPlugins: [["remark-gfm"]],
  }
})(base)

export default withMDX
