console.log("✅ Custom Webpack config loaded");
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mosaik-cms-production.up.railway.app",
        // Optional: Restrict to specific paths
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "strapidigitasjavascriptmoe-production.up.railway.app",
        // Optional: Restrict to specific paths
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        // Optional: Restrict to specific paths
        pathname: "/uploads/**",
      },
    ],
  },
  experimental: {
    // Force Webpack instead of Turbopack
    turbo: {

    },
  },
  webpack(config, options) {
    // Remove existing svg handling
    config.module.rules.forEach((rule) => {
      if (rule?.test?.toString().includes('svg')) {
        rule.exclude = /\.svg$/i;
      }
    });

    // Add SVGR loader for svg imports in JS/TS files
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
        },
      ],
    });

    return config;
  }
};

module.exports = nextConfig;
