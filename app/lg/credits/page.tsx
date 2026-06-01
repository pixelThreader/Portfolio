import React from "react";
import type { Metadata } from "next";
import { Section, SectionContent } from "@/components/widgets/Section";
import GlassyHeroSection from "@/components/widgets/GlassyHeroSection";

export const metadata: Metadata = {
    title: "Credits • pixelThreader",
    description: "Attributions, frameworks, packages, and design assets utilized in the pixelThreader portfolio website.",
};

export default function Credits() {
    const techStack = [
        { name: "Next.js", role: "React Framework & Server Side Rendering" },
        { name: "React 19", role: "Reactive UI Components & Hook Orchestration" },
        { name: "TypeScript", role: "Type-safe robust compilation" },
        { name: "Tailwind CSS", role: "Responsive utility styling & custom design tokens" },
        { name: "Vercel", role: "Lightning-fast edge hosting & serverless analytics" }
    ];

    const libraries = [
        { name: "Framer Motion", role: "Fluid interactive micro-animations & layout transitions" },
        { name: "Lucide React", role: "Clean, consistent geometric vector iconography" },
        { name: "Lenis", role: "Butter-smooth inertial scrolling experience" },
        { name: "Sonner", role: "Premium toast alerts & real-time notices" }
    ];

    const designCredits = [
        { name: "Merienda (Google Fonts)", role: "Elegant cursive branding & headings typography" },
        { name: "Merriweather (Google Fonts)", role: "Highly readable body text & serif typography" },
        { name: "Floral Vector Artworks", role: "Atmospheric, vintage-styled floral overlay patterns" },
        { name: "Liquid Glass & Bento Grids", role: "Mathematical layouts with reflection highlights" }
    ];

    return (
        <div className="w-full relative overflow-x-hidden bg-background min-h-screen flex flex-col">
            {/* Massive Background Flowers */}
            <div className="fixed top-0 left-0 -translate-x-[50%] -translate-y-1/2 pointer-events-none z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/flower_pattern.png"
                    alt=""
                />
            </div>

            <div className="fixed bottom-0 right-0 translate-x-[50%] translate-y-[10%] pointer-events-none z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/flower_pattern.png"
                    alt=""
                />
            </div>

            {/* Premium Modular Glassy Hero Header */}
            <GlassyHeroSection>
                <h1 className="font-title text-[56px] sm:text-[76px] md:text-[88px] font-bold tracking-tight select-none">
                    <span className="text-white">Credits</span>
                    <span className="brand-gradient font-bold ml-[2px]">.</span>
                </h1>
            </GlassyHeroSection>

            {/* Main Content */}
            <Section className="z-10 !pt-0">
                <SectionContent>
                    <div className="w-full flex flex-col gap-12 text-left">
                        
                        <p className="font-serif text-[#ffd4dc]/90 text-[16px] sm:text-[17px] leading-relaxed max-w-2xl text-left">
                            This website is a premium full-stack portfolio engineered to showcase AI solutions and interactive frontends. Below are the frameworks, libraries, tools, and design assets that made it possible.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            
                            {/* Core Tech Stack Panel */}
                            <div className="glass rounded-[24px] p-6 border border-white/5 bg-[#411F27]/25 flex flex-col gap-6 backdrop-blur-xl">
                                <h2 className="font-title text-xl text-white tracking-wide border-b border-white/10 pb-3 flex items-center gap-2">
                                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-magenta shadow-[0_0_8px_#e040fb]" />
                                    Core Engine
                                </h2>
                                <div className="flex flex-col gap-4 font-serif">
                                    {techStack.map((tech) => (
                                        <div key={tech.name} className="flex flex-col gap-0.5">
                                            <span className="text-white font-semibold text-[15px]">{tech.name}</span>
                                            <span className="text-[#ffd4dc]/60 text-xs leading-normal">{tech.role}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Libraries & Packages Panel */}
                            <div className="glass rounded-[24px] p-6 border border-white/5 bg-[#411F27]/25 flex flex-col gap-6 backdrop-blur-xl">
                                <h2 className="font-title text-xl text-white tracking-wide border-b border-white/10 pb-3 flex items-center gap-2">
                                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-neon shadow-[0_0_8px_#bc13fe]" />
                                    Ecosystem
                                </h2>
                                <div className="flex flex-col gap-4 font-serif">
                                    {libraries.map((lib) => (
                                        <div key={lib.name} className="flex flex-col gap-0.5">
                                            <span className="text-white font-semibold text-[15px]">{lib.name}</span>
                                            <span className="text-[#ffd4dc]/60 text-xs leading-normal">{lib.role}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Design & Typography Panel */}
                            <div className="glass rounded-[24px] p-6 border border-white/5 bg-[#411F27]/25 flex flex-col gap-6 backdrop-blur-xl">
                                <h2 className="font-title text-xl text-white tracking-wide border-b border-white/10 pb-3 flex items-center gap-2">
                                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-pink shadow-[0_0_8px_#f472b6]" />
                                    Aesthetics
                                </h2>
                                <div className="flex flex-col gap-4 font-serif">
                                    {designCredits.map((design) => (
                                        <div key={design.name} className="flex flex-col gap-0.5">
                                            <span className="text-white font-semibold text-[15px]">{design.name}</span>
                                            <span className="text-[#ffd4dc]/60 text-xs leading-normal">{design.role}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Special Appreciation */}
                        <div className="glass rounded-[32px] p-8 md:p-10 border border-white/5 bg-linear-to-br from-white/5 to-transparent text-left relative overflow-hidden backdrop-blur-xl flex flex-col gap-4 mt-4 font-serif">
                            <span className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
                            <h3 className="font-title text-xl sm:text-2xl text-white">Special Thanks</h3>
                            <p className="text-[#ffd4dc]/80 text-[15px] sm:text-[16px] leading-relaxed max-w-3xl">
                                Deep appreciation to all open-source developers, contributors, and creative designers who release packages, design patterns, and assets to the community under permissive licenses. Your work accelerates software engineering and drives human innovation.
                            </p>
                        </div>

                    </div>
                </SectionContent>
            </Section>
        </div>
    );
}
