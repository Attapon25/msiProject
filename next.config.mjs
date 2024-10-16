import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontendNav: true,
  aggressiveFrontendNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workBoxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "api.longdo.com"], // Add the external domain here
  },
};

export default withPWA(nextConfig);
