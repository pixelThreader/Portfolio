import { ButtonGroup, Link as CustomLink } from "@/components/widgets/Button";
import { BadgeGroup, Badge } from "@/components/widgets/Badge";
import {
    Section,
    SectionTitle,
    SectionContent
} from "@/components/widgets/Section";
import { GlassyHeroSection } from "@/components/widgets/GlassyHeroSection";
import CurvedLoop from '@/components/external/CurvedLoop';

export default function Skills() {
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
                    <span className="text-white">Skills</span>
                    <span className="brand-gradient font-bold ml-[2px]">.</span>
                </h1>
            </GlassyHeroSection>

            {/* Elegant Minimal Personal Profile Section */}
            <div className="w-full px-8 md:px-16 lg:px-[12%] xl:px-[15%] py-12 text-left max-w-4xl mx-auto z-10 relative">
                <p className="font-serif text-[#ffd4dc] text-[20px] sm:text-[24px] md:text-[28px] leading-relaxed tracking-tight select-none">
                    A multi-disciplinary stack threading backend systems, AI agents, and frontend excellence.
                </p>
                <p className="font-serif text-white/70 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl">
                    I believe in engineering that is mathematically structured and visually breathtaking. My skills bridge high-performance data architectures, autonomous logic layers, and custom-tailored interface systems.
                </p>
                <div className="mt-10 flex justify-start w-full">
                    <ButtonGroup gap="gap-[8px] sm:gap-[12px]" size="md">
                        <CustomLink href="/">
                            Back Home
                        </CustomLink>
                        <CustomLink href="/projects">
                            See My Builds
                        </CustomLink>
                    </ButtonGroup>
                </div>
            </div>

            {/* Detailed Skills Section */}
            <Section>
                <SectionTitle id="arsenal">
                    Tech <span className="brand-gradient font-title">Arsenal</span>
                </SectionTitle>
                <SectionContent>
                    <div className="w-full max-w-4xl mx-auto rounded-[32px] border border-white/5 bg-[#3a141d]/40 p-8 sm:p-10 backdrop-blur-md shadow-xl flex flex-col gap-8">
                        <div>
                            <h4 className="font-title text-xl text-white mb-4">Frontend & Aesthetics</h4>
                            <BadgeGroup>
                                {["React", "Next.js", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vanilla CSS", "Responsive Design", "Shader Art", "Figma Design"].map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </BadgeGroup>
                        </div>

                        <div className="h-px w-full bg-white/5" />

                        <div>
                            <h4 className="font-title text-xl text-white mb-4">Backend & Architecture</h4>
                            <BadgeGroup>
                                {["Node.js", "Bun", "PostgreSQL", "Supabase", "Redis", "REST & GraphQL", "Distributed Systems", "Schema Optimization", "Bunny CDN"].map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </BadgeGroup>
                        </div>

                        <div className="h-px w-full bg-white/5" />

                        <div>
                            <h4 className="font-title text-xl text-white mb-4">AI & Agents</h4>
                            <BadgeGroup>
                                {["LLM Orchestration", "MCP Tools", "Autonomous Agent Loops", "RAG Systems", "Vector Databases", "Prompt Engineering", "Semantic Search", "OpenAI & Anthropic APIs"].map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </BadgeGroup>
                        </div>
                    </div>
                </SectionContent>
            </Section>

            {/* Bottom Marquee Loop */}
            <div className="py-12 md:py-16">
                <CurvedLoop
                    marqueeText="     ✦     Bun Runtime     ✦     Next.js 16     ✦     Agentic Orchestrator     ✦     Tailwind CSS v4     ✦"
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
