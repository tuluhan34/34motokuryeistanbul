/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_OUTPUT_MODE === 'export';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: isStaticExport,
  skipTrailingSlashRedirect: isStaticExport,
  compress: !isStaticExport,
  images: {
    unoptimized: true
  },
  output: isStaticExport ? 'export' : 'standalone'
};

module.exports = nextConfig;