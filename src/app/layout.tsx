import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { connection } from "next/server";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MaintenancePage from "@/components/maintenance/MaintenancePage";
import ScrollToTop from "@/components/layout/ScrollToTop";
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
  metadataBase: new URL("https://sampreshan.com"),

  title: {
    default: "Sampreshan Media",
    template: "%s | Sampreshan Media",
  },

  description:
    "Sampreshan Media provides modern digital media, branding, communication, and creative solutions for businesses.",

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

  openGraph: {
    title: "Sampreshan Media",
    description: "Modern media and creative communication solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Sampreshan Media",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sampreshan Media",
    description: "Modern media and creative communication solutions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export async function generateMetadata(): Promise<Metadata> {
  await connection();

  if (!isMaintenanceMode()) {
    return siteMetadata;
  }

  return {
    ...siteMetadata,
    title: "We’ll be back soon | Sampreshan Media",
    description:
      "Sampreshan Media is currently undergoing scheduled maintenance.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  await connection();
  const maintenanceMode = isMaintenanceMode();

  return (
    <html
      lang="en"
      suppressHydrationWarning
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
