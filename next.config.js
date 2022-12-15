/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // required to make Konva & react-konva work https://github.com/konvajs/konva/issues/1458#issuecomment-1336116164
    esmExternals: 'loose',
  },
  webpack: (config) => {
    // required to make Konva & react-konva work https://github.com/konvajs/konva/issues/1458#issuecomment-1336116164
    config.externals = [...config.externals, { canvas: 'canvas' }];
    return config;
  },
};

module.exports = nextConfig;
