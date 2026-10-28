import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://irondistrict.in"),
  title: {
    default: "Iron District Fitness | Premium Gym in Bengaluru",
    template: "%s | Iron District Fitness",
  },
  description:
    "Iron District Fitness is a premium strength training, personal training, and group fitness gym in Bengaluru. Built by discipline. Defined by progress.",
  keywords: [
    "gym Bengaluru",
    "strength training Bengaluru",
    "personal training Bengaluru",
    "fitness centre Koramangala",
    "Iron District Fitness",
    "gym membership Bengaluru",
  ],
  openGraph: {
    title: "Iron District Fitness | Premium Gym in Bengaluru",
    description:
      "Premium strength training, personal training, and group fitness in Bengaluru. Built by discipline. Defined by progress.",
    url: "https://irondistrict.in",
    siteName: "Iron District Fitness",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron District Fitness | Premium Gym in Bengaluru",
    description:
      "Premium strength training, personal training, and group fitness in Bengaluru.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — loaded at runtime by the browser */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AnnouncementBar />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
