import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Canticle | Professional Hymn & Worship Archive",
  description: "A beautifully curated, elegant, and modern digital hymnal featuring timeless Christian hymns, full lyrics, scripture references, and peaceful audio playback.",
  keywords: ["hymns", "worship", "christian lyrics", "digital hymnal", "sheet music", "gospel", "praise", "church music"],
  authors: [{ name: "Canticle Archive" }],
  openGraph: {
    title: "Canticle | Professional Hymn & Worship Archive",
    description: "Explore timeless Christian hymns with beautiful typography, full lyrics, and peaceful audio playback.",
    type: "website",
    locale: "en_US",
    siteName: "Canticle Hymnal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-stone-800 font-sans selection:bg-amber-100 selection:text-amber-900">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
