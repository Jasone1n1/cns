import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Removed 'appDir' as it is not a valid property of 'ExperimentalConfig'
    serverActions: {
      bodySizeLimit: '1mb',
      allowedOrigins: ['*'],
    },
  },
};

export default nextConfig;
