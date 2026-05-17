import type { NextConfig } from "next";
import path from "node:path";

const repoName = "sahil16qureshi.github.io";
const isProjectPage = process.env.GITHUB_PAGES === "true" && repoName !== "sahil16qureshi.github.io";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProjectPage ? `/${repoName}` : "",
  assetPrefix: isProjectPage ? `/${repoName}/` : "",
};

export default nextConfig;
