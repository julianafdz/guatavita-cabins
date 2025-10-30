import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.NEXT_PUBLIC_REPO_NAME;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // GitHub Pages does not support the default image optimizer
    unoptimized: true,
  },
  // When deploying to user.github.io/repo-name, set:
  //   GITHUB_PAGES=true and NEXT_PUBLIC_REPO_NAME=repo-name
  basePath: isGithubPages && repoName ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages && repoName ? `/${repoName}/` : undefined,
};

export default nextConfig;
