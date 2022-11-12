/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["www.worldofupbringing.com", "mdbootstrap.com","*"],
  },
};

module.exports = nextConfig;
