/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? '/world-of-upbringing.github.io/' : '',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
