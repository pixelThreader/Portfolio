import Image from "next/image";
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

export default function About() {
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
            <GlassyHeroSection />

            {/* Elegant Minimal Personal Profile Section */}
            <div className="w-full px-8 md:px-16 lg:px-[12%] xl:px-[15%] py-16 text-left z-10 relative">
                <p className="font-serif text-[#ffd4dc] text-[22px] sm:text-[30px] md:text-[36px] lg:text-[42px] leading-snug tracking-tight select-none">
                    Threading complex neural architectures with high-fidelity digital fabrics.
                </p>
                <p className="font-serif text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mt-8 max-w-3xl">
                    I am an AI Systems Engineer and Full-Stack Developer. I specialize in designing autonomous reasoning pipelines, robust backend environments, and premium user interfaces that feel alive, responsive, and beautiful.
                </p>
                <div className="mt-12 flex justify-start w-full">
                    <ButtonGroup gap="gap-[8px] sm:gap-[12px]" size="md">
                        <CustomLink href="/">
                            Back Home
                        </CustomLink>
                        <CustomLink href="/#projects">
                            Explore Projects
                        </CustomLink>
                    </ButtonGroup>
                </div>
            </div>

            {/* Core Philosophy Section */}
            <Section>
                <SectionTitle id="philosophy">
                    Core <span className="brand-gradient font-title">Philosophy</span>
                </SectionTitle>
                <SectionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
                        
                        <CardGlossy>
                            <CardGlossyContent>
                                <CardGlossyTitle>Speed & Agility</CardGlossyTitle>
                                <CardGlossyDescription>
                                    Shipping fast is a core product feature. I focus on optimizing developer velocity, reducing state management friction, and leveraging reliable runtimes like Bun to turn ideas into production-ready platforms immediately.
                                </CardGlossyDescription>
                            </CardGlossyContent>
                            <CardGlossyFooter gradientDivider={true}>
                                <BadgeGroup>
                                    <Badge>Bun</Badge>
                                    <Badge>Velocity</Badge>
                                </BadgeGroup>
                                <CardGlossyDate>01</CardGlossyDate>
                            </CardGlossyFooter>
                        </CardGlossy>

                        <CardGlossy>
                            <CardGlossyContent>
                                <CardGlossyTitle>Autonomous Agents</CardGlossyTitle>
                                <CardGlossyDescription>
                                    Deep learning shouldn't just summarize—it should act. I build complex multi-agent system orchestrations, tool-use harnesses (MCP), and background pipeline loops that automate research, systems work, and engineering.
                                </CardGlossyDescription>
                            </CardGlossyContent>
                            <CardGlossyFooter gradientDivider={false}>
                                <BadgeGroup>
                                    <Badge>AI Agents</Badge>
                                    <Badge>Reasoning</Badge>
                                </BadgeGroup>
                                <CardGlossyDate>02</CardGlossyDate>
                            </CardGlossyFooter>
                        </CardGlossy>

                        <CardGlossy>
                            <CardGlossyContent>
                                <CardGlossyTitle>High-Fidelity UX</CardGlossyTitle>
                                <CardGlossyDescription>
                                    Details are the product. Glassmorphic shaders, mathematical grid systems, curated HSL gradients, and responsive typography. The UX must stun at first glance and feel extremely premium under touch and scroll.
                                </CardGlossyDescription>
                            </CardGlossyContent>
                            <CardGlossyFooter gradientDivider={true}>
                                <BadgeGroup>
                                    <Badge>Tailwind v4</Badge>
                                    <Badge>Aesthetics</Badge>
                                </BadgeGroup>
                                <CardGlossyDate>03</CardGlossyDate>
                            </CardGlossyFooter>
                        </CardGlossy>

                    </div>
                </SectionContent>
            </Section>

            {/* Skills & Arsenal Section */}
            <Section>
                <SectionTitle id="arsenal">
                    Tech <span className="brand-gradient font-title">Arsenal</span>
                </SectionTitle>
                <SectionContent>
                    <div className="w-full max-w-4xl mx-auto rounded-[32px] border border-white/5 bg-[#3a141d]/40 p-8 sm:p-10 backdrop-blur-md shadow-xl flex flex-col gap-8">
                        <div>
                            <h4 className="font-title text-xl text-white mb-4">Frontend & Aesthetics</h4>
                            <BadgeGroup>
                                {["React", "Next.js", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vanilla CSS", "Responsive Design"].map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </BadgeGroup>
                        </div>

                        <div className="h-px w-full bg-white/5" />

                        <div>
                            <h4 className="font-title text-xl text-white mb-4">Backend & Architecture</h4>
                            <BadgeGroup>
                                {["Node.js", "Bun", "PostgreSQL", "Supabase", "Redis", "REST & GraphQL", "Distributed Systems"].map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </BadgeGroup>
                        </div>

                        <div className="h-px w-full bg-white/5" />

                        <div>
                            <h4 className="font-title text-xl text-white mb-4">AI & Agents</h4>
                            <BadgeGroup>
                                {["LLM Orchestration", "MCP Tools", "Autonomous Agent Loops", "RAG Systems", "Vector Databases", "Prompt Engineering"].map((item) => (
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
                    marqueeText="     ✦     Autonomous Reasoning     ✦     High Fidelity UI     ✦     System Architect     ✦     Pixel Perfect Design     ✦"
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
