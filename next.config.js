const withTM = require('next-transpile-modules')([]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['framer-motion', 'recharts'],
  },
};

module.exports = nextConfig;
