import React from "react";
import type { Metadata } from "next";
import { Section, SectionContent } from "@/components/widgets/Section";
import GlassyHeroSection from "@/components/widgets/GlassyHeroSection";
import {
    CarouselSection,
    CarouselContent,
    CarouselItem
} from "@/components/widgets/CarouselSection";
import CreditIcon from "@/components/ui/CreditIcon";
import creditsData from "./credits.json";

export const metadata: Metadata = {
    title: "Credits • pixelThreader",
    description: "Attributions, frameworks, packages, and design assets utilized in the pixelThreader portfolio website.",
};

interface CreditItem {
    name: string;
    desc: string;
    website?: string;
    github?: string;
    image?: string;
}

export default function Credits() {
    const renderCardItems = (items: CreditItem[]) => {
        return (
            <div className="flex flex-col gap-5">
                {items.map((item) => (
                    <div key={item.name} className="flex gap-4 items-start font-serif">
                        {/* Logo icon with clean letter fallback on error */}
                        <CreditIcon src={item.image} name={item.name} />

                        {/* Title & Description with clean links */}
                        <div className="flex flex-col flex-1 gap-1">
                            <div className="flex items-baseline justify-between gap-3">
                                <span className="text-[#f3f0ef] font-semibold text-[15px]">{item.name}</span>
                                
                                <div className="flex items-center gap-3 text-[11px] font-sans tracking-wide shrink-0">
                                    {item.website && (
                                        <a 
                                            href={item.website} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-[#ffd4dc]/40 hover:text-[#f3f0ef] transition-colors duration-200 underline decoration-white/10 hover:decoration-white underline-offset-4"
                                        >
                                            Web
                                        </a>
                                    )}
                                    {item.github && (
                                        <a 
                                            href={item.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-[#ffd4dc]/40 hover:text-[#f3f0ef] transition-colors duration-200 underline decoration-white/10 hover:decoration-white underline-offset-4"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                            <p className="text-[#ffd4dc]/60 text-xs leading-normal font-normal text-left">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

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

            {/* Introductory Description Section */}
            <Section className="z-10 !pt-0 !pb-4">
                <SectionContent>
                    <div className="w-full flex flex-col gap-6 text-left">
                        <p className="font-serif text-[#ffd4dc]/90 text-[16px] sm:text-[17px] leading-relaxed max-w-2xl text-left">
                            This website is a premium full-stack portfolio engineered to showcase AI solutions and interactive frontends. Below are the frameworks, libraries, tools, and design assets that made it possible.
                        </p>
                    </div>
                </SectionContent>
            </Section>

            {/* Horizontal Scrolling Carousel Section containing Category Panels */}
            <CarouselSection gap="pt-4 pb-8 sm:pt-6 sm:pb-12">
                <CarouselContent>
                    
                    {/* Core Tech Stack Panel */}
                    <CarouselItem className="w-[280px] sm:w-[360px] h-full flex">
                        <div className="relative w-full rounded-[28px] bg-linear-to-br from-[#a88b97]/80 via-[#6a4754]/40 to-[#a88b97]/80 p-[1.5px] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:rounded-[34px] flex flex-col h-full">
                            <div className="rounded-[26px] border border-white/5 bg-[#471824]/95 p-6 sm:p-7 backdrop-blur-xl sm:rounded-[32px] flex flex-col flex-1 h-full gap-6">
                                <h2 className="font-title text-xl text-[#f3f0ef] tracking-wide border-b border-white/10 pb-3 flex items-center justify-start select-none">
                                    Core Engine
                                </h2>
                                {renderCardItems(creditsData.engine)}
                            </div>
                        </div>
                    </CarouselItem>

                    {/* Libraries & Packages Panel */}
                    <CarouselItem className="w-[280px] sm:w-[360px] h-full flex">
                        <div className="relative w-full rounded-[28px] bg-linear-to-br from-[#a88b97]/80 via-[#6a4754]/40 to-[#a88b97]/80 p-[1.5px] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:rounded-[34px] flex flex-col h-full">
                            <div className="rounded-[26px] border border-white/5 bg-[#471824]/95 p-6 sm:p-7 backdrop-blur-xl sm:rounded-[32px] flex flex-col flex-1 h-full gap-6">
                                <h2 className="font-title text-xl text-[#f3f0ef] tracking-wide border-b border-white/10 pb-3 flex items-center justify-start select-none">
                                    Ecosystem
                                </h2>
                                {renderCardItems(creditsData.ecosystem)}
                            </div>
                        </div>
                    </CarouselItem>

                    {/* Design & Typography Panel */}
                    <CarouselItem className="w-[280px] sm:w-[360px] h-full flex">
                        <div className="relative w-full rounded-[28px] bg-linear-to-br from-[#a88b97]/80 via-[#6a4754]/40 to-[#a88b97]/80 p-[1.5px] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:rounded-[34px] flex flex-col h-full">
                            <div className="rounded-[26px] border border-white/5 bg-[#471824]/95 p-6 sm:p-7 backdrop-blur-xl sm:rounded-[32px] flex flex-col flex-1 h-full gap-6">
                                <h2 className="font-title text-xl text-[#f3f0ef] tracking-wide border-b border-white/10 pb-3 flex items-center justify-start select-none">
                                    Aesthetics
                                </h2>
                                {renderCardItems(creditsData.aesthetics)}
                            </div>
                        </div>
                    </CarouselItem>

                    {/* Tools Panel */}
                    <CarouselItem className="w-[280px] sm:w-[360px] h-full flex">
                        <div className="relative w-full rounded-[28px] bg-linear-to-br from-[#a88b97]/80 via-[#6a4754]/40 to-[#a88b97]/80 p-[1.5px] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:rounded-[34px] flex flex-col h-full">
                            <div className="rounded-[26px] border border-white/5 bg-[#471824]/95 p-6 sm:p-7 backdrop-blur-xl sm:rounded-[32px] flex flex-col flex-1 h-full gap-6">
                                <h2 className="font-title text-xl text-[#f3f0ef] tracking-wide border-b border-white/10 pb-3 flex items-center justify-start select-none">
                                    Tools
                                </h2>
                                {renderCardItems(creditsData.tools)}
                            </div>
                        </div>
                    </CarouselItem>

                </CarouselContent>
            </CarouselSection>

            {/* Special Appreciation Section */}
            <Section className="z-10 !pt-0">
                <SectionContent>
                    <div className="relative w-full rounded-[32px] bg-linear-to-br from-[#a88b97]/80 via-[#6a4754]/40 to-[#a88b97]/80 p-[1.5px] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:rounded-[38px] flex flex-col mt-4">
                        <div className="rounded-[30.5px] border border-white/5 bg-[#471824]/95 p-8 md:p-10 backdrop-blur-xl sm:rounded-[36.5px] flex flex-col flex-1 h-full text-left relative overflow-hidden font-serif">
                            <span className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
                            <h3 className="font-title text-xl sm:text-2xl text-[#f3f0ef] select-none">Special Thanks</h3>
                            <p className="text-[#ffd4dc]/80 text-[15px] sm:text-[16px] leading-relaxed max-w-3xl mt-4">
                                Deep appreciation to all open-source developers, contributors, and creative designers who release packages, design patterns, and assets to the community under permissive licenses. Your work accelerates software engineering and drives human innovation.
                            </p>
                        </div>
                    </div>
                </SectionContent>
            </Section>
        </div>
    );
}
