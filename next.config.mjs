/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: 'portal.vr.com.br' }]
      },
      swcMinify: false
};

export default nextConfig;
