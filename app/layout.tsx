import type { Metadata } from "next";
import { Merienda, Merriweather } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/widgets/Header";
import Footer from "@/components/widgets/Footer";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const merienda = Merienda({
    variable: "--font-merienda",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const merriweather = Merriweather({
    variable: "--font-merriweather",
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
    title: "pixelThreader: Full Stack Engineer",
    description:
        "Portfolio of pixelThreader: Full Stack Engineer crafting intelligent digital experiences.",
    keywords: [
        "Full Stack Engineer",
        "System Design",
        "Next.js",
        "Portfolio",
        "pixelThreader",
        "Piyush",
    ],
    authors: [{ name: "pixelThreader" }],
    openGraph: {
        title: "pixelThreader: Full Stack Engineer",
        description: "Engineering ideas into reality. Code • Systems • Experiences.",
        type: "website",
    },
    manifest: "/manifest.json",
    icons: {
        icon: [
            { url: "/favicon.ico", type: "image/x-icon" },
            { url: "/icons/pixelthreader-32.webp", sizes: "32x32", type: "image/webp" },
            { url: "/icons/pixelthreader-48.webp", sizes: "48x48", type: "image/webp" },
            { url: "/icons/pixelthreader-96x96.webp", sizes: "96x96", type: "image/webp" },
            { url: "/icons/pixelthreader-144x144.webp", sizes: "144x144", type: "image/webp" },
            { url: "/icons/pixelthreader-150x150.webp", sizes: "150x150", type: "image/webp" },
            { url: "/icons/android-chrome-192x192.webp", sizes: "192x192", type: "image/webp" },
            { url: "/icons/pixelthreader-310x310.webp", sizes: "310x310", type: "image/webp" },
            { url: "/icons/android-chrome-512x512.webp", sizes: "512x512", type: "image/webp" },
        ],
        apple: [
            { url: "/icons/apple-touch-icon.webp", sizes: "180x180", type: "image/webp" },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body
                className={`${merienda.variable} ${merriweather.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
            >
                <TooltipProvider>
                    <Header />
                    <main className="flex-1 w-full flex flex-col">
                        {children}
                    </main>
                    <Footer />
                    <Toaster />
                </TooltipProvider>
                <Analytics />
            </body>
        </html>
    );
}
