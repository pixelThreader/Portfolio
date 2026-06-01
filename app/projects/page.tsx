import { ButtonGroup, Link as CustomLink } from "@/components/widgets/Button";
import { BadgeGroup, Badge } from "@/components/widgets/Badge";
import {
    Section,
    SectionTitle,
    SectionContent
} from "@/components/widgets/Section";
import {
    CardGlossy,
    CardGlossyContent,
    CardGlossyTitle,
    CardGlossyDescription,
    CardGlossyFooter,
    CardGlossyDate
} from "@/components/widgets/CardGlossy";
import { GlassyHeroSection } from "@/components/widgets/GlassyHeroSection";
import CurvedLoop from '@/components/external/CurvedLoop';

export default function Projects() {
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
                    <span className="text-white">Projects</span>
                    <span className="brand-gradient font-bold ml-[2px]">.</span>
                </h1>
            </GlassyHeroSection>

            {/* Elegant Minimal Personal Profile Section */}
            <div className="w-full px-8 md:px-16 lg:px-[12%] xl:px-[15%] py-12 text-left max-w-4xl mx-auto z-10 relative">
                <p className="font-serif text-[#ffd4dc] text-[20px] sm:text-[24px] md:text-[28px] leading-relaxed tracking-tight select-none">
                    Crafting premium open-source software, agentic system orchestrations, and high-fidelity layouts.
                </p>
                <p className="font-serif text-white/70 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl">
                    Welcome to the showcase of my selected builds. Each project here is designed with absolute pixel precision, clean mathematical grid structures, and responsive layouts to ensure a breathtaking user experience.
                </p>
                <div className="mt-10 flex justify-start w-full">
                    <ButtonGroup gap="gap-[8px] sm:gap-[12px]" size="md">
                        <CustomLink href="/">
                            Back Home
                        </CustomLink>
                        <CustomLink href="/contact">
                            Let&apos;s Collaborate
                        </CustomLink>
                    </ButtonGroup>
                </div>
            </div>

            {/* Selected Projects Section */}
            <Section>
                <SectionTitle id="builds">
                    Selected <span className="brand-gradient font-title">Builds</span>
                </SectionTitle>
                <SectionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
                        
                        <CardGlossy>
                            <CardGlossyContent>
                                <CardGlossyTitle>Agentic V2</CardGlossyTitle>
                                <CardGlossyDescription>
                                    A robust desktop frontend and backend orchestration leveraging MCP architectures and autonomous reasoning loops to solve complex software engineering tasks instantly.
                                </CardGlossyDescription>
                            </CardGlossyContent>
                            <CardGlossyFooter gradientDivider={true}>
                                <BadgeGroup>
                                    <Badge>AI Orchestration</Badge>
                                    <Badge>Next.js</Badge>
                                </BadgeGroup>
                                <CardGlossyDate>2026</CardGlossyDate>
                            </CardGlossyFooter>
                        </CardGlossy>

                        <CardGlossy>
                            <CardGlossyContent>
                                <CardGlossyTitle>WiseFinance</CardGlossyTitle>
                                <CardGlossyDescription>
                                    A cinematic financial analytics platform that provides interactive canvas rendering, smooth real-time charting, and predictive AI budget modeling.
                                </CardGlossyDescription>
                            </CardGlossyContent>
                            <CardGlossyFooter gradientDivider={false}>
                                <BadgeGroup>
                                    <Badge>Fidelity UX</Badge>
                                    <Badge>Canvas API</Badge>
                                </BadgeGroup>
                                <CardGlossyDate>2025</CardGlossyDate>
                            </CardGlossyFooter>
                        </CardGlossy>

                        <CardGlossy>
                            <CardGlossyContent>
                                <CardGlossyTitle>Antigravity UI</CardGlossyTitle>
                                <CardGlossyDescription>
                                    An asymmetric design token utility system implementing complex glassmorphic shaders, curated theme states, and customizable React animation modules.
                                </CardGlossyDescription>
                            </CardGlossyContent>
                            <CardGlossyFooter gradientDivider={true}>
                                <BadgeGroup>
                                    <Badge>Tailwind CSS v4</Badge>
                                    <Badge>Design Token</Badge>
                                </BadgeGroup>
                                <CardGlossyDate>2025</CardGlossyDate>
                            </CardGlossyFooter>
                        </CardGlossy>

                    </div>
                </SectionContent>
            </Section>

        </div>
    );
}
