/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Next.js to create the 'out' folder for a static site.
  output: 'export',

  // This is required to make <Image> components work on GitHub Pages.
  images: {
    unoptimized: true,
  },
  
  // Your existing setting to ignore TypeScript errors during the build.
  // ATTENTION: This is a temporary fix. It's better to solve the type
  // errors and then remove this block.
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;