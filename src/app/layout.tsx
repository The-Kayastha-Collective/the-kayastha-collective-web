import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Kayastha Collective | Connect, Support, Grow",
  description:
    "A community united by shared heritage, meaningful connections, and collective growth.",

  applicationName: "The Kayastha Collective",

  keywords: [
    "The Kayastha Collective",
    "Kayastha community",
    "Kayastha heritage",
    "Professional networking",
    "Community growth",
  ],

  openGraph: {
    title: "The Kayastha Collective",
    description:
      "One heritage. One community. Endless possibilities.",
    type: "website",
    siteName: "The Kayastha Collective",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Kayastha Collective",
    description:
      "A community built on shared heritage and collective growth.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0B09",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <body>{children}</body>
    </html>
  );
}