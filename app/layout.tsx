import type { Metadata } from "next";
import { Merienda, Merriweather } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/widgets/Header";
import "./globals.css";

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
    title: "pixelThreader: AI Engineer & Full Stack Developer",
    description:
        "Portfolio of pixelThreader: AI Engineer, Full Stack Developer, and System Builder crafting intelligent digital experiences.",
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
    authors: [{ name: "pixelThreader" }],
    openGraph: {
        title: "pixelThreader: AI Engineer & Full Stack Developer",
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
        <html lang="en" className="dark scroll-smooth">
            <body
                className={`${merienda.variable} ${merriweather.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
            >
                <Header />
                <main className="flex-1 w-full flex flex-col">
                    {children}
                </main>
                <Analytics />
            </body>
        </html>
    );
}
