import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MaintenancePage from "@/components/maintenance/MaintenancePage";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { siteConfig } from "@/config/siteConfig";
import { isMaintenanceMode } from "@/lib/maintenance";
import { QueryProvider } from "@/providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  applicationName: siteConfig.name,

  title: {
    default: "Sampreshan Media",
    template: "%s | Sampreshan Media",
  },

  description: siteConfig.description,

  keywords: [
    "Sampreshan",
    "Sampreshan Media",
    "Media",
    "Digital Media",
    "Branding",
    "Marketing",
    "Creative Agency",
  ],

  authors: [
    {
      name: "Sampreshan Media",
    },
  ],

  creator: "Sampreshan Media",

  publisher: "Sampreshan Media",

  category: "Creative and technology services",

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Sampreshan Media",
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    locale: "en_NP",
    siteName: "Sampreshan Media",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sampreshan Media",
    description: siteConfig.description,
  },

  alternates: {
    canonical: siteConfig.url,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const maintenanceMode = isMaintenanceMode();

export const metadata: Metadata = maintenanceMode
  ? {
    ...siteMetadata,
    title: "We’ll be back soon | Sampreshan Media",
    description:
      "Sampreshan Media is currently undergoing scheduled maintenance.",
    robots: {
      index: false,
      follow: false,
    },
  }
  : siteMetadata;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-bg-page font-sans text-text-body antialiased"
      >
        {maintenanceMode ? (
          <MaintenancePage />
        ) : (
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <main id="main-content" className="flex-1">
              <QueryProvider>{children}</QueryProvider>
            </main>

            <Footer />
            <ScrollToTop />
          </div>
        )}
      </body>
    </html>
  );
}
