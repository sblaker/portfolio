const nextConfig = {
  // This tells Next.js to create the 'out' folder for a static site.
  output: 'export',

  // ▼▼▼ ADD THIS MISSING LINE ▼▼▼
  basePath: '/portfolio',

  // This is required to make <Image> components work on GitHub Pages.
  images: {
    unoptimized: true,
  },

  // Your existing setting to ignore TypeScript errors during the build.
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;