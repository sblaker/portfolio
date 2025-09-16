/** @type {import('next').NextConfig} */

const repoName = 'portfolio'; // The name of your repository

const nextConfig = {
  // Tells Next.js to build a static site
  output: 'export',

  // The sub-path of the site on the domain (e.g., your-username.github.io/portfolio)
  basePath: `/${repoName}`,

  // The prefix for all static assets (CSS, JS, images)
  // This ensures they are loaded from the correct sub-folder
  assetPrefix: `/${repoName}`,

  // Required for Next.js <Image> component to work on a static site
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;