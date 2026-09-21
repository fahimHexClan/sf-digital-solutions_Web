import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Computer Training Institute in Sri Lanka`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "SF Digital Solutions",
    "computer course Sri Lanka",
    "computer basics course",
    "MS Word Excel PowerPoint course",
    "web development course Sri Lanka",
    "digital marketing course Sri Lanka",
    "graphic design course Sri Lanka",
    "IT training Sri Lanka",
    "online computer classes Sri Lanka",
  ],
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/brand/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Computer Training Institute in Sri Lanka`,
    description: SITE_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 685, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Computer Training Institute in Sri Lanka`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/logo.png`,
  description: SITE_DESCRIPTION,
  email: "sfdigitalsolutions.lk@gmail.com",
  telephone: "+94785194631",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61588815615416",
    "https://www.instagram.com/sfdigitalsolutions_lk/",
    "https://www.youtube.com/@SfDigitalSolutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
