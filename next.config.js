/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const repo = 'medafford.github.io'

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : ''
}

module.exports = nextConfig
