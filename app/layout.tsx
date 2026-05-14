import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Piyush | pixelThreader — AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Piyush (pixelThreader) — AI Engineer, Full Stack Developer, and System Builder crafting intelligent digital experiences.",
  keywords: [
    "AI Engineer",
    "Full Stack Developer",
    "Deep Learning",
    "System Design",
    "Next.js",
    "Portfolio",
    "pixelThreader",
    "Piyush",
  ],
  authors: [{ name: "Piyush (pixelThreader)" }],
  openGraph: {
    title: "Piyush | pixelThreader — AI Engineer & Full Stack Developer",
    description: "Engineering ideas into reality. AI • Systems • Experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased min-h-screen`}
      >
        <SmoothScroll>
          <Preloader />
          <Navigation />
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
