import type { NextConfig } from "next";
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Configure pageExtensions to support MDX
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)