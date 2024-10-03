import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  cacheMaxMemorySize: 0,
  images: {
    domains: ["github.com"]
  },
};

export default withNextIntl(nextConfig);
