/** @type {import('next').NextConfig} */

module.exports = {
  compiler: {
    styledComponents: true,
  },
  assetPrefix: '.',
  experimental: {
    forceSwcTransforms: true,
  },
};
