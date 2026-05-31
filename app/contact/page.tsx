"use client";

import React from "react";
import {
    Section,
    SectionContent
} from "@/components/widgets/Section";
import { GlassyHeroSection } from "@/components/widgets/GlassyHeroSection";

export default function Contact() {
    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/pixelthreader"
        },
        {
            name: "X / Twitter",
            url: "https://x.com/_pixelThreader"
        },
        {
            name: "GitHub",
            url: "https://github.com/pixelThreader"
        }
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
                    <span className="text-white">Contact</span>
                    <span className="brand-gradient font-bold ml-[2px]">.</span>
                </h1>
            </GlassyHeroSection>

            {/* Main Section utilizing standard global boundaries */}
            <Section className="z-10">
                <SectionContent>
                    <div className="w-full text-left flex flex-col gap-12" style={{ fontFamily: 'Merriweather, serif' }}>
                        
                        {/* Direct Signals / Email */}
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <span className="text-[#ffd4dc]/50 text-xs sm:text-sm tracking-widest uppercase select-none font-bold">
                                    Mail Me
                                </span>
                                <div>
                                    <a 
                                        href="mailto:hello@pixelthreader.com" 
                                        className="text-2xl sm:text-3xl text-white font-bold tracking-tight underline decoration-dashed hover:decoration-solid underline-offset-8 decoration-[1.5px] transition-all duration-300"
                                    >
                                        questerios@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="h-px w-full bg-white/10" />

                        {/* Social Ecosystem Links */}
                        <div className="flex flex-col gap-6">
                            <span className="text-[#ffd4dc]/50 text-xs sm:text-sm tracking-widest uppercase select-none font-bold">
                                Social Ecosystem
                            </span>
                            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-12 gap-y-6">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base sm:text-lg text-white hover:text-[#ffd4dc] transition-colors duration-300 underline decoration-dashed hover:decoration-solid underline-offset-6 decoration-[1.5px]"
                                    >
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </SectionContent>
            </Section>

        </div>
    );
}
