/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/work/ai-scribe-kpi-dashboard",
        destination: "/case-studies/ai-scribe-kpi-dashboard",
        permanent: true,
      },
      {
        source: "/work/patient-check-in",
        destination: "/case-studies/patient-check-in",
        permanent: true,
      },
      {
        source: "/work/provider-online-scheduling",
        destination: "/case-studies/provider-online-scheduling",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
