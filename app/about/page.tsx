import type { Metadata } from "next";
import { ButtonGroup, Link as CustomLink } from "@/components/widgets/Button";
import {
    Section,
    SectionTitle,
    SectionContent
} from "@/components/widgets/Section";
import { GlassyHeroSection } from "@/components/widgets/GlassyHeroSection";
import { Timeline } from "@/components/widgets/Timeline";
import { Accordion } from "@/components/widgets/Accordion";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { getExperiences, getEducation, getActiveResumeUrl, ExperienceRow, EducationRow } from "@/utils/api";
import ProfileCard from "@/components/external/ProfileCard";
import { ToastError } from "@/components/widgets/ToastError";

export const metadata: Metadata = {
    title: "About • pixelThreader",
    description: "About pixelThreader: Full Stack Engineer crafting premium digital systems.",
};

export default async function About() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data: dbExperiences, error: experiencesError } = await getExperiences(supabase);
    const { data: dbEducation, error: educationError } = await getEducation(supabase);
    const resumeUrl = await getActiveResumeUrl(supabase);

    const experiences = dbExperiences
        ? dbExperiences.map((exp: ExperienceRow) => ({
            company_name: exp.company_name,
            role: exp.role,
            start_time: exp.start_time,
            end_time: exp.end_time,
            certificate_url: exp.certificate_url || undefined,
            experience_url: exp.company_url || undefined
        }))
        : [];

    const education = dbEducation
        ? dbEducation.map((edu: EducationRow) => ({
            degree: edu.degree,
            institute: edu.institute,
            specialization: edu.specialization,
            duration: edu.duration,
            subjects: edu.subjects || [],
            projects: edu.projects || []
        }))
        : [];

    return (
        <div className="w-full relative overflow-x-hidden bg-background min-h-screen">

            {/* Massive Background Flowers */}
            <div className="fixed top-0 left-0 translate-x-[-50%] -translate-y-1/2 pointer-events-none z-0">
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
                        <CustomLink href={resumeUrl || "/resume.pdf"} download="Piyush_Rana_Resume.pdf" target="_blank" rel="noopener noreferrer">
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

            {/* Professional Journey / Experience Section */}
            <Section>
                <SectionTitle id="journey">
                    Professional <span className="brand-gradient font-title">Journey</span>
                </SectionTitle>
                <SectionContent>
                    {experiencesError ? (
                        <div className="w-full py-12 text-center">
                            <ToastError message={`Failed to fetch experiences: ${experiencesError.message}`} />
                            <p className="font-serif text-[#ffd4dc]/40" style={{ fontFamily: 'Merriweather, serif' }}>
                                Failed to fetch experiences (status: {experiencesError.code})
                            </p>
                        </div>
                    ) : experiences.length > 0 ? (
                        <Timeline data={experiences} />
                    ) : (
                        <div className="w-full py-12 text-center text-[#ffd4dc]/40 font-serif" style={{ fontFamily: 'Merriweather, serif' }}>
                            No professional experience found.
                        </div>
                    )}
                </SectionContent>
            </Section>

            {/* Qualifications / Education Section */}
            <Section>
                <SectionTitle id="education">
                    Qualifications & <span className="brand-gradient font-title">Education</span>
                </SectionTitle>
                <SectionContent>
                    {educationError ? (
                        <div className="w-full py-12 text-center">
                            <ToastError message={`Failed to fetch education: ${educationError.message}`} />
                            <p className="font-serif text-[#ffd4dc]/40" style={{ fontFamily: 'Merriweather, serif' }}>
                                Failed to fetch qualifications & education (status: {educationError.code})
                            </p>
                        </div>
                    ) : education.length > 0 ? (
                        <Accordion data={education} />
                    ) : (
                        <div className="w-full py-12 text-center text-[#ffd4dc]/40 font-serif" style={{ fontFamily: 'Merriweather, serif' }}>
                            No qualifications found.
                        </div>
                    )}
                </SectionContent>
            </Section>

        </div>
    );
}
