import { ButtonGroup, Link as CustomLink } from "@/components/widgets/Button";
import { BadgeGroup, Badge } from "@/components/widgets/Badge";
import {
    Section,
    SectionTitle,
    SectionContent
} from "@/components/widgets/Section";
import { GlassyHeroSection } from "@/components/widgets/GlassyHeroSection";
import CurvedLoop from '@/components/external/CurvedLoop';

export default function Contact() {
    return (
        <div className="w-full relative overflow-x-hidden bg-background min-h-screen">

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

            {/* Elegant Minimal Personal Profile Section */}
            <div className="w-full px-8 md:px-16 lg:px-[12%] xl:px-[15%] py-12 text-left max-w-4xl mx-auto z-10 relative">
                <p className="font-serif text-[#ffd4dc] text-[20px] sm:text-[24px] md:text-[28px] leading-relaxed tracking-tight select-none">
                    Let's thread complex ideas into high-fidelity realties together.
                </p>
                <p className="font-serif text-white/70 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl">
                    I am always looking to collaborate on systems architecture, custom interface frameworks, or autonomous agent loop projects. Send me a signal and let's build something beautiful.
                </p>
                <div className="mt-10 flex justify-start w-full">
                    <ButtonGroup gap="gap-[8px] sm:gap-[12px]" size="md">
                        <CustomLink href="/">
                            Back Home
                        </CustomLink>
                        <CustomLink href="/projects">
                            See Builds
                        </CustomLink>
                    </ButtonGroup>
                </div>
            </div>

            {/* Contact Details Grid */}
            <Section>
                <SectionTitle id="collaborate">
                    Send <span className="brand-gradient font-title">Signal</span>
                </SectionTitle>
                <SectionContent>
                    <div className="w-full max-w-2xl mx-auto rounded-[32px] border border-white/5 bg-[#3a141d]/40 p-8 sm:p-10 backdrop-blur-md shadow-xl flex flex-col gap-6 text-center">
                        <div className="py-4">
                            <h4 className="font-serif text-white/40 text-sm tracking-widest uppercase mb-1">Direct Signal</h4>
                            <p className="font-title text-2xl sm:text-3xl text-white font-bold tracking-tight">
                                hello@pixelthreader.com
                            </p>
                        </div>

                        <div className="h-px w-full bg-white/5" />

                        <div className="py-4">
                            <h4 className="font-serif text-white/40 text-sm tracking-widest uppercase mb-1">Encrypted Channel</h4>
                            <p className="font-title text-xl sm:text-2xl text-[#ffd4dc] font-bold tracking-tight">
                                signal://pixelthreader.keys
                            </p>
                        </div>

                        <div className="h-px w-full bg-white/5" />

                        <div className="flex justify-center gap-4 py-2">
                            <BadgeGroup>
                                <Badge>GitHub</Badge>
                                <Badge>X / Twitter</Badge>
                                <Badge>LinkedIn</Badge>
                            </BadgeGroup>
                        </div>
                    </div>
                </SectionContent>
            </Section>

            {/* Bottom Marquee Loop */}
            <div className="py-12 md:py-16">
                <CurvedLoop
                    marqueeText="     ✦     Get in Touch     ✦     Available for Contracts     ✦     Secure Communication Channels     ✦"
                    speed={2.5}
                    curveAmount={80}
                    direction="right"
                    interactive
                    className="custom-text-style font-title"
                />
            </div>

        </div>
    );
}
