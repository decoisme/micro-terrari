import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MicroTerrari — Handcrafted Miniature Terrariums",
  description:
    "Discover handcrafted miniature terrariums made with real moss and live plants. Designed to bring calm, beauty, and nature into your home or workspace. Shop premium terrariums from MicroTerrari.",
  keywords: [
    "terrarium",
    "miniature terrarium",
    "moss terrarium",
    "handcrafted",
    "living plants",
    "indoor garden",
    "desk plants",
    "gift ideas",
    "Indonesia",
  ],
  openGraph: {
    title: "MicroTerrari — Handcrafted Miniature Terrariums",
    description:
      "Bring a living ecosystem to your space. Premium handcrafted terrariums with real moss and live plants.",
    type: "website",
    siteName: "MicroTerrari",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#355E3B" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-bg text-text transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
