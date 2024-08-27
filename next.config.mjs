import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'another-domain.com'], // Add your allowed domains here
    // If using a custom image loader, you can specify it here
    // loader: 'custom',
    // path: '',
  },
};

// Use withPWA and export the configuration
export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  ...nextConfig, // Spread the nextConfig object to merge it with the PWA settings
});
