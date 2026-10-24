import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true"; 

const basePath = isGitHubActions ? "/web" : "";

const nextConfig: NextConfig = {
  // Generate a static website for GitHub Pages.
  output: "export",

  // GitHub Pages project repositories require a URL prefix.
  basePath,

  // Use relative asset paths that work with static hosting.
  // This is useful when deploying under a repository subpath.
  assetPrefix: basePath || undefined,

  // GitHub Pages does not provide Next.js image optimization.
  images: {
    unoptimized: true,
  },

  // GitHub Pages serves static files and does not run a Next.js server.
  trailingSlash: true,

  // Keep the build strict enough to catch configuration mistakes.
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;