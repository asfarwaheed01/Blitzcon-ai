/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://blitzconai.com/api/:path*",
      },
    ];
  },
  env: {
    HEYGEN_API_KEY: process.env.HEYGENAPIKEY,
  },
};

module.exports = nextConfig;
