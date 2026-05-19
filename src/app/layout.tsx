import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import TopAppBar from "@/components/TopAppBar";
import BottomTabBar from "@/components/BottomTabBar";
import CapacitorAppController from "@/components/CapacitorAppController";
import { NetworkProvider } from "@/context/NetworkContext";

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
  title: "The Hymn Book | Church of Christ",
  description: "The digital hymn book designed for worship and praise to God.",
  keywords: ["hymn book", "church of christ", "khasi hymns", "worship", "praise", "christian hymns"],
  authors: [{ name: "Church of Christ" }],
  openGraph: {
    title: "The Hymn Book | Church of Christ",
    description: "The digital hymn book designed for worship and praise to God.",
    type: "website",
    locale: "en_US",
    siteName: "The Hymn Book",
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
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-stone-800 font-sans selection:bg-amber-100 selection:text-amber-900 pb-16">
        <NetworkProvider>
          <CapacitorAppController />
          <TopAppBar />
          <main className="flex-1 flex flex-col pb-6">{children}</main>
          <BottomTabBar />
        </NetworkProvider>
      </body>
    </html>
  );
}
