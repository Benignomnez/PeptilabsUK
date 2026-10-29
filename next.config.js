/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    agentUpgrade: 'security',
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'znjjzernrorapgrfjsqt.supabase.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

export default nextConfig
