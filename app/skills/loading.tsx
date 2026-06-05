import React from "react"
import { GlassyHeroSection } from "@/components/widgets/GlassyHeroSection"
import {
    Section,
    SectionTitle,
    SectionContent
} from "@/components/widgets/Section"
import { AccordionSkeleton, Skeleton } from "@/components/ui/skeleton"

export default function SkillsLoading() {
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

            <GlassyHeroSection>
                <h1 className="font-title text-[56px] sm:text-[76px] md:text-[88px] font-bold tracking-tight select-none">
                    <span className="text-white">Skills</span>
                    <span className="brand-gradient font-bold ml-[2px]">.</span>
                </h1>
            </GlassyHeroSection>

            {/* Professional Experience Timeline Skeleton */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="experience">
                    Professional <span className="brand-gradient font-title ml-2">Experience</span>
                </SectionTitle>
                <SectionContent>
                    <AccordionSkeleton count={1} />
                </SectionContent>
            </Section>

            {/* Core Competencies */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="competencies">
                    Core <span className="brand-gradient font-title ml-2">Competencies</span>
                </SectionTitle>
                <SectionContent>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {[
                            { title: "Full-Stack Development", description: "Complete web applications from concept to deployment — frontend, backend, databases, and integrations." },
                            { title: "Frontend Engineering", description: "Responsive, accessible, high-performance interfaces across devices." }
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-[32px] border border-white/5 bg-[#3a141d]/40 p-8 sm:p-10 backdrop-blur-md shadow-xl flex flex-col gap-3"
                            >
                                <h4 className="font-title text-xl text-white">{item.title}</h4>
                                <p className="font-serif text-white/60 text-[14px] sm:text-[15px] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </SectionContent>
            </Section>

            {/* Technology Stack Skeletons */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="stack">
                    Technology <span className="brand-gradient font-title ml-2">Stack</span>
                </SectionTitle>
                <SectionContent>
                    <div className="w-full rounded-[32px] border border-white/5 bg-[#3a141d]/40 p-8 sm:p-10 backdrop-blur-md shadow-xl flex flex-col gap-8">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex flex-col gap-4">
                                <Skeleton className="h-6 w-24 bg-white/10 rounded" />
                                <div className="flex flex-wrap gap-2">
                                    <Skeleton className="h-6 w-16 bg-white/5 rounded-full" />
                                    <Skeleton className="h-6 w-24 bg-white/5 rounded-full" />
                                    <Skeleton className="h-6 w-20 bg-white/5 rounded-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionContent>
            </Section>

            {/* What I Build Skeleton */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="what-i-build">
                    What I <span className="brand-gradient font-title ml-2">Build</span>
                </SectionTitle>
                <SectionContent>
                    <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch animate-pulse">
                        {/* LHS Tabs List Panel Skeleton */}
                        <div className="w-full lg:w-[260px] xl:w-[280px] shrink-0 rounded-[24px] border border-white/5 bg-[#3a141d]/40 p-4 flex flex-col gap-3">
                            <Skeleton className="h-10 w-full bg-white/10 rounded-xl" />
                            <Skeleton className="h-10 w-4/5 bg-white/5 rounded-xl" />
                            <Skeleton className="h-10 w-5/6 bg-white/5 rounded-xl" />
                            <Skeleton className="h-10 w-3/4 bg-white/5 rounded-xl" />
                        </div>
                        {/* RHS Active Tab Content Panel Skeleton */}
                        <div className="flex-1 rounded-[32px] border border-white/5 bg-[#3a141d]/40 p-8 sm:p-10 backdrop-blur-md flex flex-col gap-4">
                            <Skeleton className="h-7 w-1/3 bg-white/10 rounded" />
                            <Skeleton className="h-4 w-full bg-white/5 rounded" />
                            <Skeleton className="h-4 w-11/12 bg-white/5 rounded" />
                            <Skeleton className="h-4 w-5/6 bg-white/5 rounded" />
                        </div>
                    </div>
                </SectionContent>
            </Section>

            {/* Currently Exploring Skeleton */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="exploring">
                    Currently <span className="brand-gradient font-title ml-2">Exploring</span>
                </SectionTitle>
                <SectionContent>
                    <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch animate-pulse">
                        {/* LHS Tabs List Panel Skeleton */}
                        <div className="w-full lg:w-[260px] xl:w-[280px] shrink-0 rounded-[24px] border border-white/5 bg-[#3a141d]/40 p-4 flex flex-col gap-3">
                            <Skeleton className="h-10 w-full bg-white/10 rounded-xl" />
                            <Skeleton className="h-10 w-4/5 bg-white/5 rounded-xl" />
                            <Skeleton className="h-10 w-5/6 bg-white/5 rounded-xl" />
                            <Skeleton className="h-10 w-3/4 bg-white/5 rounded-xl" />
                        </div>
                        {/* RHS Active Tab Content Panel Skeleton */}
                        <div className="flex-1 rounded-[32px] border border-white/5 bg-[#3a141d]/40 p-8 sm:p-10 backdrop-blur-md flex flex-col gap-4">
                            <Skeleton className="h-7 w-1/3 bg-white/10 rounded" />
                            <Skeleton className="h-4 w-full bg-white/5 rounded" />
                            <Skeleton className="h-4 w-11/12 bg-white/5 rounded" />
                            <Skeleton className="h-4 w-5/6 bg-white/5 rounded" />
                        </div>
                    </div>
                </SectionContent>
            </Section>
        </div>
    )
}
