/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/repository' : '',
  assetPrefix: isProd ? '/repository/' : ''
}

module.exports = nextConfig
