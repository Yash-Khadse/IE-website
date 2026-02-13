import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../sections/Footer";
import Preloader from "../components/ui/preloader";
import TanstackProvider from "@/providers/TanstackProvider";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";

const onest = Onest({ 
  subsets: ["latin"], 
  variable: "--font-onest",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.invisiedge.com'),
  title: {
    default: "InvisiEdge | Next Generation Marketing",
    template: "%s | InvisiEdge",
  },
  description: "InvisiEdge Marketing LLC - Data-driven strategies, automation, and brand systems for the digital age.",
  keywords: ["Marketing", "Automation", "Branding", "Digital Strategy", "InvisiEdge", "Growth Hacking", "SEO", "Web Development"],
  authors: [{ name: "InvisiEdge Team", url: "https://www.invisiedge.com" }],
  creator: "InvisiEdge Marketing LLC",
  publisher: "InvisiEdge Marketing LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.invisiedge.com",
    siteName: "InvisiEdge Marketing",
    title: "InvisiEdge | Next Generation Marketing",
    description: "Data-driven strategies, automation, and brand systems for the digital age.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InvisiEdge Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InvisiEdge | Next Generation Marketing",
    description: "Data-driven strategies, automation, and brand systems for the digital age.",
    images: ["/og-image.png"],
    creator: "@InvisiEdge",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden relative min-h-screen`}>
        <TanstackProvider>
            <ScrollToTop />
            <Preloader />
            <JsonLd />
            <Navigation />
            <main>{children}</main>
            <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
