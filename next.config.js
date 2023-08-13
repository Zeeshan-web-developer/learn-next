/** @type {import("next").NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["cdn.pixabay.com", "i.dummyjson.com"],
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};
