/** @type {import('next').NextConfig} */

const execSync = require('child_process').execSync;

const lastCommitCommand = 'git rev-parse HEAD';

module.exports = {
  async generateBuildId() {
    return execSync(lastCommitCommand).toString().trim();
  },
  compiler: {
    styledComponents: true,
  },
  assetPrefix: '.',
  experimental: {
    forceSwcTransforms: true,
  },
};
