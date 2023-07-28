/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    externalDir: true,
  },
  rewrites: async () => [
    {
      source: '/',
      destination: '/cosmos-export/index.html',
    },
    {
      source: '/playground.bundle.js',
      destination: '/cosmos-export/playground.bundle.js',
    }
  ]
};

module.exports = nextConfig;
