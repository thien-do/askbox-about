import type { NextConfig } from "next";
import createMDX from '@next/mdx'
 
const base: NextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({})(base)
 
export default withMDX
