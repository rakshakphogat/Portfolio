/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better performance
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable experimental features
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
