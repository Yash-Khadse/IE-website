import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../sections/Footer";
import Preloader from "../components/ui/preloader";
import TanstackProvider from "@/providers/TanstackProvider";
import ScrollToTop from "@/components/ScrollToTop";

const onest = Onest({ 
  subsets: ["latin"], 
  variable: "--font-onest",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "InvisiEdge",
  description: "Next Generation Marketing",
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
            <Navigation />
            <main>{children}</main>
            <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
