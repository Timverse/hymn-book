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
  title: "Ka Kot Jingrwai | Balang U Khrist",
  description: "Ka kot jingrwai ba la pynkhreh pynjanai na bynta ka jingmane bad jingiaroh ia U Blei.",
  keywords: ["jingrwai", "balang u khrist", "khasi hymns", "kot jingrwai", "jingmane", "khasi christian hymns"],
  authors: [{ name: "Balang U Khrist" }],
  openGraph: {
    title: "Ka Kot Jingrwai | Balang U Khrist",
    description: "Ka kot jingrwai ba la pynkhreh pynjanai na bynta ka jingmane bad jingiaroh ia U Blei.",
    type: "website",
    locale: "en_US",
    siteName: "Ka Kot Jingrwai",
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
