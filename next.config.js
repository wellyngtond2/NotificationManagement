/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    customKey: 'https://notificationmanagement.azurewebsites.net/api/v1',
  },
}

module.exports = nextConfig
