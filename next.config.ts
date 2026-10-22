import type { NextConfig } from "next";

// If a form-submission service is configured, allow the browser to reach it.
let formEndpointOrigin = "";
try {
  const endpoint = process.env.NEXT_PUBLIC_QUOTE_FORM_ENDPOINT;
  if (endpoint) formEndpointOrigin = ` ${new URL(endpoint).origin}`;
} catch {
  // invalid URL: ignore, forms fall back to WhatsApp
}
// If Supabase accounts are configured, allow the browser to reach the project.
try {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (supabaseUrl) formEndpointOrigin += ` ${new URL(supabaseUrl).origin}`;
} catch {
  // invalid URL: accounts stay disabled in the browser
}

const csp = [
  "default-src 'self'",
  // 'unsafe-inline' is needed for the GA4/Meta Pixel bootstrap snippets and
  // Next.js's own inline runtime scripts; both only load from the domains below.
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://images.unsplash.com https://picsum.photos https://loremflickr.com https://www.facebook.com https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self' data:",
  `connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://www.facebook.com https://connect.facebook.net https://wa.me${formEndpointOrigin}`,
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://wa.me",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
      },
    ],
  },
  async redirects() {
    // Canonical host: https://sfdigitalsolutions.lk (no www)
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sfdigitalsolutions.lk" }],
        destination: "https://sfdigitalsolutions.lk/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;