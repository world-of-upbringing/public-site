/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.worldofupbringing.com"],
  },
};

module.exports = nextConfig;
