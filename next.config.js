/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  devIndicators: {
    appIsrStatus: false,
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  // Ensure the server knows it's on localhost to avoid WS issues in some environments
  serverExternalPackages: [],
  turbopack: {},
};

module.exports = nextConfig;
