import React from "react";
import type { Metadata } from "next";
import { Section, SectionContent } from "@/components/widgets/Section";
import GlassyHeroSection from "@/components/widgets/GlassyHeroSection";

export const metadata: Metadata = {
    title: "Terms of Service • pixelThreader",
    description: "Terms of service and usage conditions for pixelThreader's personal developer portfolio.",
};

export default function TermsOfService() {
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
                    <span className="text-white">Terms</span>
                    <span className="brand-gradient font-bold ml-[2px]">.</span>
                </h1>
            </GlassyHeroSection>

            {/* Main Section */}
            <Section className="z-10 !pt-0">
                <SectionContent>
                    <div className="w-full text-left flex flex-col gap-12 font-serif text-[#ffd4dc]/90 text-[15px] sm:text-[16px] leading-relaxed">
                        
                        <div className="flex flex-col gap-4">
                            <p className="text-[17px] text-[#ffd4dc]/75 italic">
                                Last Updated: June 1, 2026
                            </p>
                            <p>
                                Welcome to the personal developer portfolio of <span className="text-white font-semibold">pixelThreader (Piyush Rana)</span>. By browsing this website, you agree to these simple terms.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="flex flex-col gap-4">
                            <h2 className="font-title text-2xl text-white tracking-wide">
                                1. Site Purpose & Capabilities
                            </h2>
                            <p>
                                This website is operated as a static showcase of my professional experience, skills, and projects in AI engineering and full-stack development. It is purely informational and educational.
                            </p>
                            <p>
                                There are no commercial services, user logins, paid subscriptions, or transaction engines hosted on this site.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-white/5" />

                        {/* Section 2 */}
                        <div className="flex flex-col gap-4">
                            <h2 className="font-title text-2xl text-white tracking-wide">
                                2. Intellectual Property
                            </h2>
                            <p>
                                The layout, custom CSS styling, design systems, illustrations, and self-authored showcase descriptions are the intellectual property of <span className="text-white font-semibold">pixelThreader</span>. 
                            </p>
                            <p>
                                You are welcome to view, copy snippet concepts, or review open-source components linked to my public GitHub repositories under their respective open-source licenses. However, copying the full portfolio design and presentation layout to pass off as your own is prohibited.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-white/5" />

                        {/* Section 3 */}
                        <div className="flex flex-col gap-4">
                            <h2 className="font-title text-2xl text-white tracking-wide">
                                3. Outbound Integrations & Code Disclaimer
                            </h2>
                            <p>
                                Outbound links to external apps, demos, and source code repositories are provided solely for evaluation and showcase. These external items and linked systems are provided "as-is" and "as-available" without any direct commercial guarantees or operational liabilities.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-white/5" />

                        {/* Section 4 */}
                        <div className="flex flex-col gap-4">
                            <h2 className="font-title text-2xl text-white tracking-wide">
                                4. Revisions
                            </h2>
                            <p>
                                I reserve the right to alter, modify, or delete showcase items, descriptions, or the visual components of this portfolio at any time without notice to visitors.
                            </p>
                        </div>

                    </div>
                </SectionContent>
            </Section>
        </div>
    );
}
