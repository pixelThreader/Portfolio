import type { Metadata } from "next";
import React from "react";
import { BadgeGroup, Badge } from "@/components/widgets/Badge";
import {
    Section,
    SectionTitle,
    SectionContent
} from "@/components/widgets/Section";
import { GlassyHeroSection } from "@/components/widgets/GlassyHeroSection";
import { ProjectVerticalStacks } from "@/components/widgets/ProjectComponent";
import { Accordion } from "@/components/widgets/Accordion";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { getSkills, getEducation, getSkillsShowcase, EducationRow } from "@/utils/api";
import { ToastError } from "@/components/widgets/ToastError";

export const metadata: Metadata = {
    title: "Skills • pixelThreader",
    description: "Full-Stack Developer with experience building production-ready web applications, business platforms, and client-facing solutions.",
};

export default async function Skills() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    
    const { data: dbSkills, error: skillsError } = await getSkills(supabase);
    const { data: dbEducation, error: educationError } = await getEducation(supabase);
    const { data: dbShowcase, error: showcaseError } = await getSkillsShowcase(supabase);

    let frontendSkills: string[] = [];
    let backendSkills: string[] = [];
    let databaseSkills: string[] = [];
    let toolsSkills: string[] = [];

    if (dbSkills && dbSkills.length > 0) {
        const typedSkills = dbSkills as { category: string; name: string }[];
        
        frontendSkills = typedSkills.filter(s => s.category.toLowerCase() === 'frontend').map(s => s.name);
        backendSkills = typedSkills.filter(s => s.category.toLowerCase() === 'backend').map(s => s.name);
        databaseSkills = typedSkills.filter(s => s.category.toLowerCase() === 'databases' || s.category.toLowerCase() === 'database').map(s => s.name);
        toolsSkills = typedSkills.filter(s => s.category.toLowerCase() === 'tools' || s.category.toLowerCase() === 'tools & platforms').map(s => s.name);
    }

    const education = dbEducation
        ? dbEducation.map((edu: EducationRow) => ({
            degree: edu.degree,
            institute: edu.institute,
            specialization: edu.specialization || "",
            duration: edu.duration,
            subjects: edu.subjects || [],
            projects: edu.projects || []
        }))
        : [];

    const showcaseList = dbShowcase || [];

    const whatIBuildTabs = showcaseList
        .filter(tab => tab.type === 'what_i_build')
        .map(tab => ({
            id: tab.slug,
            label: tab.label,
            content: (
                <div className="flex flex-col gap-3">
                    <h4 className="font-title text-white text-[18px]">{tab.title}</h4>
                    <p className="font-serif text-white/60 text-[14px] leading-relaxed">
                        {tab.description}
                    </p>
                </div>
            )
        }));

    const currentlyExploringTabs = showcaseList
        .filter(tab => tab.type === 'currently_exploring')
        .map(tab => ({
            id: tab.slug,
            label: tab.label,
            content: (
                <div className="flex flex-col gap-3">
                    <h4 className="font-title text-white text-[18px]">{tab.title}</h4>
                    <p className="font-serif text-white/60 text-[14px] leading-relaxed">
                        {tab.description}
                    </p>
                </div>
            )
        }));

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

            {/* Professional Experience — first thing a recruiter sees */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="experience">
                    Professional <span className="brand-gradient font-title ml-2">Experience</span>
                </SectionTitle>
                <SectionContent className="[&_h4]:font-serif!">
                    {educationError ? (
                        <div className="w-full py-12 text-center">
                            <ToastError message={`Failed to fetch professional experience: ${educationError.message}`} />
                            <p className="font-serif text-[#ffd4dc]/40" style={{ fontFamily: 'Merriweather, serif' }}>
                                Failed to fetch professional experience (status: {educationError.code})
                            </p>
                        </div>
                    ) : education.length > 0 ? (
                        <Accordion data={education} />
                    ) : (
                        <div className="w-full py-12 text-center text-[#ffd4dc]/40 font-serif" style={{ fontFamily: 'Merriweather, serif' }}>
                            No professional experience found.
                        </div>
                    )}
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
                            { title: "Frontend Engineering", description: "Responsive, accessible, high-performance interfaces across devices." },
                            { title: "Backend Development", description: "Scalable APIs, business logic, authentication systems, and third-party integrations." },
                            { title: "Database Design", description: "Efficient structures, data relationships, and performance optimization through effective modeling." },
                            { title: "Auth & Access Control", description: "Secure authentication flows, RBAC, and permission management for enterprise applications." },
                            { title: "Deployment & Ops", description: "Production environments, performance monitoring, and software reliability." }
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

            {/* Technology Stack */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="stack">
                    Technology <span className="brand-gradient font-title ml-2">Stack</span>
                </SectionTitle>
                <SectionContent>
                    {skillsError ? (
                        <div className="w-full rounded-[32px] border border-white/5 bg-[#3a141d]/40 p-8 sm:p-10 backdrop-blur-md shadow-xl text-center">
                            <ToastError message={`Failed to fetch technology stack: ${skillsError.message}`} />
                            <p className="font-serif text-[#ffd4dc]/40" style={{ fontFamily: 'Merriweather, serif' }}>
                                Failed to fetch technology stack (status: {skillsError.code})
                            </p>
                        </div>
                    ) : (frontendSkills.length > 0 || backendSkills.length > 0 || databaseSkills.length > 0 || toolsSkills.length > 0) ? (
                        <div className="w-full rounded-[32px] border border-white/5 bg-[#3a141d]/40 p-8 sm:p-10 backdrop-blur-md shadow-xl flex flex-col gap-8">
                            {frontendSkills.length > 0 && (
                                <div>
                                    <h4 className="font-title text-xl text-white mb-4">Frontend</h4>
                                    <BadgeGroup>
                                        {frontendSkills.map((item) => (
                                            <Badge key={item}>{item}</Badge>
                                        ))}
                                    </BadgeGroup>
                                </div>
                            )}

                            {frontendSkills.length > 0 && backendSkills.length > 0 && <div className="h-px w-full bg-white/5" />}

                            {backendSkills.length > 0 && (
                                <div>
                                    <h4 className="font-title text-xl text-white mb-4">Backend</h4>
                                    <BadgeGroup>
                                        {backendSkills.map((item) => (
                                            <Badge key={item}>{item}</Badge>
                                        ))}
                                    </BadgeGroup>
                                </div>
                            )}

                            {backendSkills.length > 0 && databaseSkills.length > 0 && <div className="h-px w-full bg-white/5" />}

                            {databaseSkills.length > 0 && (
                                <div>
                                    <h4 className="font-title text-xl text-white mb-4">Databases</h4>
                                    <BadgeGroup>
                                        {databaseSkills.map((item) => (
                                            <Badge key={item}>{item}</Badge>
                                        ))}
                                    </BadgeGroup>
                                </div>
                            )}

                            {databaseSkills.length > 0 && toolsSkills.length > 0 && <div className="h-px w-full bg-white/5" />}

                            {toolsSkills.length > 0 && (
                                <div>
                                    <h4 className="font-title text-xl text-white mb-4">Tools & Platforms</h4>
                                    <BadgeGroup>
                                        {toolsSkills.map((item) => (
                                            <Badge key={item}>{item}</Badge>
                                        ))}
                                    </BadgeGroup>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="w-full rounded-[32px] border border-white/5 bg-[#3a141d]/40 p-8 sm:p-10 backdrop-blur-md shadow-xl text-center text-[#ffd4dc]/40 font-serif" style={{ fontFamily: 'Merriweather, serif' }}>
                            No technology stack records found.
                        </div>
                    )}
                </SectionContent>
            </Section>

            {/* What I Build — ProjectVerticalStacks */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="what-i-build">
                    What I <span className="brand-gradient font-title ml-2">Build</span>
                </SectionTitle>
                <SectionContent>
                    {showcaseError ? (
                        <div className="w-full py-12 text-center">
                            <ToastError message={`Failed to fetch what I build: ${showcaseError.message}`} />
                            <p className="font-serif text-[#ffd4dc]/40" style={{ fontFamily: 'Merriweather, serif' }}>
                                Failed to fetch what I build (status: {showcaseError.code})
                            </p>
                        </div>
                    ) : whatIBuildTabs.length > 0 ? (
                        <ProjectVerticalStacks tabs={whatIBuildTabs} />
                    ) : (
                        <div className="w-full py-12 text-center text-[#ffd4dc]/40 font-serif" style={{ fontFamily: 'Merriweather, serif' }}>
                            No entries found.
                        </div>
                    )}
                </SectionContent>
            </Section>

            {/* Currently Exploring — ProjectVerticalStacks */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="exploring">
                    Currently <span className="brand-gradient font-title ml-2">Exploring</span>
                </SectionTitle>
                <SectionContent>
                    {showcaseError ? (
                        <div className="w-full py-12 text-center">
                            <ToastError message={`Failed to fetch currently exploring: ${showcaseError.message}`} />
                            <p className="font-serif text-[#ffd4dc]/40" style={{ fontFamily: 'Merriweather, serif' }}>
                                Failed to fetch currently exploring (status: {showcaseError.code})
                            </p>
                        </div>
                    ) : currentlyExploringTabs.length > 0 ? (
                        <ProjectVerticalStacks tabs={currentlyExploringTabs} />
                    ) : (
                        <div className="w-full py-12 text-center text-[#ffd4dc]/40 font-serif" style={{ fontFamily: 'Merriweather, serif' }}>
                            No entries found.
                        </div>
                    )}
                </SectionContent>
            </Section>

        </div>
    );
}
