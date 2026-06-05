import React from "react"
import { GlassyHeroSection } from "@/components/widgets/GlassyHeroSection"
import { ButtonGroup, Link as CustomLink } from "@/components/widgets/Button"
import { Section, SectionTitle, SectionContent } from "@/components/widgets/Section"
import ProfileCard from "@/components/external/ProfileCard"
import MagicBento from "@/components/external/MagicBento"
import { TimelineSkeleton, AccordionSkeleton } from "@/components/ui/skeleton"

const customBentoCards = [
    {
        color: '#411F27',
        title: 'AI Engineering',
        description: 'Fine-tuning open-source models, building advanced RAG architectures, and deploying custom inference solutions at scale.',
        label: 'Intelligence'
    },
    {
        color: '#411F27',
        title: 'Full-stack Development',
        description: 'Developing robust Next.js frontends and lightning-fast APIs using modern architectures like React 19 and Bun.',
        label: 'Ecosystem'
    },
    {
        color: '#411F27',
        title: 'Agentic Systems',
        description: 'Orchestrating multi-agent systems, background loop execution engines, and Model Context Protocol (MCP) tool integrations.',
        label: 'Autonomy'
    },
    {
        color: '#411F27',
        title: 'SaaS Architecture',
        description: 'Designing highly reliable distributed systems, Redis caching topologies, and serverless background pipelines.',
        label: 'Scale'
    },
    {
        color: '#411F27',
        title: 'UI/UX Engineering',
        description: 'Crafting liquid-glass interfaces with mathematical grid systems, responsive typography, and micro-animations.',
        label: 'Aesthetics'
    },
    {
        color: '#411F27',
        title: 'Performance Optimization',
        description: 'Achieving sub-millisecond edge render speeds, bundling optimizations, and millisecond database lookups.',
        label: 'Velocity'
    }
]

export default function AboutLoading() {
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

            <GlassyHeroSection />

            <div className="w-full relative px-8 md:px-16 lg:px-[12%] xl:px-[15%] flex flex-col md:grid md:grid-cols-10 gap-12 md:gap-16 pt-12 z-10">
                <div className="md:col-span-6 flex flex-col justify-center items-start text-left w-full">
                    <div className="font-serif text-[#ffd4dc]/90 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-6 font-normal tracking-wide flex flex-col gap-4">
                        <p>
                            I’m Piyush Rana, building under the name <span className="text-white font-semibold">pixelThreader</span>, an AI-focused full-stack developer passionate about building scalable systems, AI-driven applications, and modern web experiences.
                        </p>
                        <p>
                            My work combines AI engineering, full-stack development, and product-focused thinking. I enjoy building end-to-end solutions ranging from agentic workflows and deep learning experiments to complete SaaS platforms.
                        </p>
                        <p>
                            During my full-stack internship at <span className="text-white font-semibold">AYCreation IT Services</span>, I worked across the development pipeline from planning and architecture to production-ready implementation using multiple technologies.
                        </p>
                        <p>
                            I’m driven by solving real-world problems through clean, efficient, and practical systems while continuously exploring AI, software architecture, and performance-focused development.
                        </p>
                    </div>
                    <ButtonGroup>
                        <CustomLink href="/projects">View Projects</CustomLink>
                        <CustomLink href="/resume.pdf" download="Piyush_Rana_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <svg
                                className="w-5 h-5 mr-2 shrink-0 stroke-[2.25]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Resume
                        </CustomLink>
                    </ButtonGroup>
                </div>

                <div className="md:col-span-4 flex justify-center items-center w-full">
                    <ProfileCard
                        avatarUrl="/Profile.png"
                        miniAvatarUrl="/brand/icons/pixelthreader-150x150.webp"
                        name="pixelThreader"
                        title="Full-Stack Engineer"
                        handle="pixelThreader"
                        status="Piyush Rana"
                        behindGlowColor="rgba(208, 25, 126, 0.4)"
                        innerGradient="linear-gradient(145deg, #411f27bf 0%, #d0197e33 100%)"
                        contactText="Let's Connect"
                        showUserInfo={true}
                    />
                </div>
            </div>

            {/* What I Actually Do Section */}
            <Section>
                <SectionTitle id="what-i-do">
                    What I <span className="brand-gradient font-title">Actually Do</span>
                </SectionTitle>
                <SectionContent>
                    <div className="w-full">
                        <MagicBento
                            cards={customBentoCards}
                            textAutoHide={true}
                            enableStars={true}
                            enableSpotlight={true}
                            enableBorderGlow={true}
                            enableTilt={false}
                            enableMagnetism={false}
                            clickEffect={true}
                            spotlightRadius={400}
                            particleCount={12}
                            glowColor="65, 31, 39"
                            disableAnimations={false}
                        />
                    </div>
                </SectionContent>
            </Section>

            {/* Professional Journey / Experience Section */}
            <Section>
                <SectionTitle id="journey">
                    Professional <span className="brand-gradient font-title">Journey</span>
                </SectionTitle>
                <SectionContent>
                    <TimelineSkeleton count={3} />
                </SectionContent>
            </Section>

            {/* Qualifications / Education Section */}
            <Section>
                <SectionTitle id="education">
                    Qualifications & <span className="brand-gradient font-title">Education</span>
                </SectionTitle>
                <SectionContent>
                    <AccordionSkeleton count={2} />
                </SectionContent>
            </Section>
        </div>
    )
}
