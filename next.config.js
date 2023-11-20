/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
      },
    ],
  },
  reactStrictMode: true,
  trailingSlash: false,
  compiler: {
    styledComponents: true,
  },
  output: "standalone",
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NEXT_PUBLIC_IS_PRODUCT != "devnet",
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
