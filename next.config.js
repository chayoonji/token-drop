/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'gateway.ipfscdn.io',
      'b368c2891c4db9f21d11cffd414001fc.ipfscdn.io',
    ],
  },
};

module.exports = nextConfig;
