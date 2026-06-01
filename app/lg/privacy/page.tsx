import React from "react";
import type { Metadata } from "next";
import { Section, SectionContent } from "@/components/widgets/Section";
import GlassyHeroSection from "@/components/widgets/GlassyHeroSection";

export const metadata: Metadata = {
    title: "Privacy Policy • pixelThreader",
    description: "Privacy policy for pixelThreader's personal developer portfolio, confirming zero personal data collection.",
};

export default function PrivacyPolicy() {
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
                    <span className="text-white">Privacy</span>
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
                                Welcome to the personal portfolio of <span className="text-white font-semibold">pixelThreader (Piyush Rana)</span>. Your privacy is paramount, and this document outlines our zero-data collection policy.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="flex flex-col gap-4">
                            <h2 className="font-title text-2xl text-white tracking-wide">
                                1. Zero Data Collection
                            </h2>
                            <p>
                                This website is a personal developer portfolio built solely to showcase software engineering skills, architectural layouts, and active projects.
                            </p>
                            <p>
                                While the website utilizes a secure database connected internally to power a Content Management System (CMS) for serving dynamic portfolio content (such as project details and technical skills), this database is strictly read-only for public visitors. It is not configured to collect, log, capture, or store any personal data or credentials of visitors who access the site.
                            </p>
                            <p className="text-white font-semibold">
                                We do not collect, capture, log, store, process, share, or sell any personal data of any visitor who accesses this site.
                            </p>
                            <p>
                                There are no user sign-ups, newsletter subscriptions, account creations, or databases connected to this portfolio designed to track or harvest your identity. You can browse all showcase elements with complete anonymity.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-white/5" />

                        {/* Section 2 */}
                        <div className="flex flex-col gap-4">
                            <h2 className="font-title text-2xl text-white tracking-wide">
                                2. Cookies & Tracking
                            </h2>
                            <p>
                                We do not use advertising tracking cookies, marketing pixels, or user-profiling session databases to trace your online activities across the web. Your browsing session remains private and secure.
                            </p>
                            <p>
                                To help monitor the responsiveness and popularity of this portfolio, we utilize **Vercel Analytics** to track general website traffic. This service compiles basic, non-personally identifiable traffic metrics (such as page views, approximate geographic region at a country level, and system types) in a completely aggregated form. No personal identification data, accounts, or persistent tracing cookies are captured or stored by this tool.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-white/5" />

                        {/* Section 3 */}
                        <div className="flex flex-col gap-4">
                            <h2 className="font-title text-2xl text-white tracking-wide">
                                3. External Links
                            </h2>
                            <p>
                                This portfolio links to external web resources, project repositories (like GitHub), and social networks (such as LinkedIn or X). When you click these links, you leave this portfolio. We have no authority over external websites and recommend reviewing their privacy policies upon arrival.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-white/5" />

                        {/* Section 4 */}
                        <div className="flex flex-col gap-4">
                            <h2 className="font-title text-2xl text-white tracking-wide">
                                4. Inquiries
                            </h2>
                            <p>
                                If you wish to reach out directly with questions regarding my projects, capabilities, or this statement, please feel free to send an email to:
                            </p>
                            <div>
                                <a 
                                    href="mailto:questerios@gmail.com" 
                                    className="text-white hover:text-[#ffd4dc] font-bold tracking-tight underline decoration-dashed hover:decoration-solid underline-offset-6 transition-all duration-300"
                                >
                                    questerios@gmail.com
                                </a>
                            </div>
                        </div>

                    </div>
                </SectionContent>
            </Section>
        </div>
    );
}
