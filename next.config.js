/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com', 'dev.carconnections.online'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev.carconnections.online',
        port: '',
        pathname: '/images',
      },
    ],
    deviceSizes: [400, 600, 828, 1080, 1200, 1920, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig
