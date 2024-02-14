/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["my-proxy.com", "*.my-proxy.com"],
    },
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
