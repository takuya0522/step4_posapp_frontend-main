/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: false
  },
  reactStrictMode: true,
  // pagesディレクトリの代わりにsrcディレクトリを使用することを明示
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;