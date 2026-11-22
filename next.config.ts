import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  /**
   * Legacy URLs from the previous cleaning-only site. Permanent redirects
   * preserve any inbound links and search ranking rather than 404ing them.
   * These replace the stub pages that used to re-export another route —
   * those returned 200 on two URLs for the same content, which splits
   * ranking signals between duplicates.
   */
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/faqs", destination: "/faq", permanent: true },
      { source: "/free-quote", destination: "/quote", permanent: true },
      { source: "/service", destination: "/services", permanent: true },
      { source: "/service-single", destination: "/services", permanent: true },
      // The old consumer service ids no longer exist as pages.
      { source: "/services/house-cleaning", destination: "/services/commercial-cleaning", permanent: true },
      { source: "/services/deep-cleaning", destination: "/services/commercial-cleaning", permanent: true },
      { source: "/services/end-of-lease-cleaning", destination: "/services/commercial-cleaning", permanent: true },
      { source: "/services/carpet-cleaning", destination: "/services", permanent: true },
      { source: "/services/post-construction-cleaning", destination: "/services/industrial-cleaning", permanent: true },
    ];
  },
};

export default nextConfig;
