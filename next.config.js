/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.worldofupbringing.com", "mdbootstrap.com"],
  },
};

module.exports = nextConfig;
