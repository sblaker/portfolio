/** @type {import('next').NextConfig} */

// Define your repository name here
const repo = "sblaker.github.io";

const nextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}`,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
