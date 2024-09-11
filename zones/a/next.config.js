/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/a",
  experimental: {
    manualClientBasePath: true,
  },
};

module.exports = nextConfig;
