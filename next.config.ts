/** @type {import('next').NextConfig} */

// Define your repository name here
const repo = 'portfolio';

const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}`,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;