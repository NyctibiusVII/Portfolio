/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateEtags: false,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com', 'opengraph.githubassets.com', 'repository-images.githubusercontent.com'],
  }
}

module.exports = nextConfig
