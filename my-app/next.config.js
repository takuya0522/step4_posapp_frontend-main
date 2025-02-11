/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: 'https://tech0-gen8-step4-pos-app-85.azurewebsites.net',
    NEXT_PUBLIC_API_URL: 'https://tech0-gen8-step4-pos-app-86.azurewebsites.net/api'  // ここを確認
  },
  output: 'standalone',
  experimental: {
    outputStandalone: true
  }
}