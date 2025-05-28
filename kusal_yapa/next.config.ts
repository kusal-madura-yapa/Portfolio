import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Vercel uses serverless functions (default behavior, no static export)
  output: undefined, // Explicitly unset any static export (optional, can be omitted)

  // Add trailing slashes to URLs (optional, helps with routing consistency)
  trailingSlash: false,

  // Enable React Strict Mode for better error catching during development
  reactStrictMode: true,

  // Ensure images and assets are handled correctly
  images: {
    unoptimized: false, // Vercel can optimize images by default
  },

  // Optional: If you face issues with asset paths, set a base path (uncomment if needed)
  // basePath: '/kusal_yapa', // Use if your app is in a subdirectory, adjust as needed

  // Optional: Enable TypeScript and ESLint error reporting during builds
  typescript: {
    ignoreBuildErrors: false, // Ensure TypeScript errors fail the build
  },
  eslint: {
    ignoreDuringBuilds: false, // Ensure ESLint errors fail the build
  },
};

export default nextConfig;