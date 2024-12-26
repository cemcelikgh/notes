const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/notes/' : '',
  basePath: isProd ? '/notes' : '',
  output: 'export'
};

export default nextConfig;
