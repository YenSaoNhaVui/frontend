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
  largePageDataBytes: 128 * 10000,
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
