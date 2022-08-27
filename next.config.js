/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  env: {
    apiUrl: 'https://www.thegamblest.com/wp-json/wp/v2/'
  },
}

module.exports = nextConfig
