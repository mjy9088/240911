const { A_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/a",
        destination: `${A_URL}/a`,
      },
      {
        source: "/a/:path+",
        destination: `${A_URL}/a/:path+`,
      },
    ];
  },
};

module.exports = nextConfig;
