import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonGroup, Link as CustomLink } from "@/components/widgets/Button";
import { GlassyHeroSection } from "@/components/widgets/GlassyHeroSection";
import {
    CarouselSection,
    CarouselSectionTitle,
    Highlight,
    CarouselContent,
    CarouselItem
} from "@/components/widgets/CarouselSection";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { getProjects, ProjectRow } from "@/utils/api";
import {
    JournalCard,
    JournalCardImage,
    JournalCardContent,
    JournalCardHeader,
    JournalCardTitle,
    JournalCardDescription,
    JournalCardFooter,
    JournalCardMeta
} from "@/components/widgets/JournalCard";
import { ToastError } from "@/components/widgets/ToastError";

export const metadata: Metadata = {
    title: "Projects • pixelThreader",
    description: "Explore the custom software engineering, AI agents, and web applications built by pixelThreader.",
};

export default async function Projects() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data: dbProjects, error: projectsError } = await getProjects(supabase);

    if (projectsError) {
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
                        <span className="text-white">Projects</span>
                        <span className="brand-gradient font-bold ml-[2px]">.</span>
                    </h1>
                </GlassyHeroSection>

                <div className="w-full flex flex-col justify-center items-center py-24 px-8 z-10 relative">
                    <ToastError message={`Failed to fetch projects: ${projectsError.message}`} />
                    <p className="font-serif text-[#ffd4dc]/40 text-center text-lg max-w-md" style={{ fontFamily: 'Merriweather, serif' }}>
                        Failed to fetch projects (status: {projectsError.code})
                    </p>
                </div>
            </div>
        );
    }

    const projectsList = dbProjects || [];

    const projects2026 = projectsList.filter((p: ProjectRow) => p.year === 2026);
    const projects2025 = projectsList.filter((p: ProjectRow) => p.year === 2025);
    const projects2024 = projectsList.filter((p: ProjectRow) => p.year === 2024);

    const mapProject = (p: ProjectRow) => ({
        id: p.id,
        title: p.title,
        description: p.description,
        image: p.banner_image_url,
        tag: p.tag,
        viewUrl: p.view_url,
        githubUrl: p.github_url
    });

    const mapped2026 = projects2026.map(mapProject);
    const mapped2025 = projects2025.map(mapProject);
    const mapped2024 = projects2024.map(mapProject);

    const hasAnyProjects = projectsList.length > 0;

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

            {!hasAnyProjects ? (
                <div className="w-full flex justify-center items-center py-24 px-8 z-10 relative">
                    <p className="font-serif text-[#ffd4dc]/40 text-center text-lg max-w-md" style={{ fontFamily: 'Merriweather, serif' }}>
                        No projects found.
                    </p>
                </div>
            ) : (
                <>
                    {/* 2026 Builds Section */}
                    {mapped2026.length > 0 && (
                        <CarouselSection gap="pt-12 pb-4 sm:pt-16 sm:pb-6">
                            <CarouselSectionTitle size="md" position="left">
                                Projects from <Highlight>2026</Highlight>
                            </CarouselSectionTitle>
                            <CarouselContent>
                                {mapped2026.map((project, idx) => (
                                    <CarouselItem key={idx} className="w-[230px] sm:w-[300px] h-full flex">
                                        <JournalCard className="w-full h-full">
                                            {/* Clickable Image Banner Link */}
                                            <Link href={`/projects/${project.id}`} className="block relative">
                                                <JournalCardImage className="h-[160px]! sm:h-[210px]!">
                                                    {project.image && (
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, 300px"
                                                            className="object-cover"
                                                        />
                                                    )}
                                                </JournalCardImage>
                                            </Link>

                                            <JournalCardContent className="pb-0!">
                                                {/* Clickable Title & Description Link */}
                                                <Link href={`/projects/${project.id}`} className="block group/link">
                                                    <JournalCardHeader>
                                                        <JournalCardTitle className="text-[18px]! sm:text-[20px]! transition-colors duration-300 group-hover/link:text-[#ffd4dc]">{project.title}</JournalCardTitle>
                                                    </JournalCardHeader>

                                                    <JournalCardDescription>
                                                        {project.description}
                                                    </JournalCardDescription>
                                                </Link>

                                                {/* Footer with Independent links */}
                                                <JournalCardFooter className="pt-4! flex flex-col items-stretch gap-3">
                                                    {project.tag && <JournalCardMeta className="text-left">{project.tag}</JournalCardMeta>}
                                                    <ButtonGroup size="sm" className="w-full justify-start!" gap="gap-2">
                                                        {project.viewUrl && (
                                                            <CustomLink
                                                                href={project.viewUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex-1 text-center"
                                                            >
                                                                View
                                                            </CustomLink>
                                                        )}
                                                        {project.githubUrl && (
                                                            <CustomLink
                                                                href={project.githubUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex-1 text-center"
                                                            >
                                                                GitHub
                                                            </CustomLink>
                                                        )}
                                                    </ButtonGroup>
                                                </JournalCardFooter>
                                            </JournalCardContent>
                                        </JournalCard>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </CarouselSection>
                    )}

                    {/* 2025 Builds Section */}
                    {mapped2025.length > 0 && (
                        <CarouselSection gap="pt-4 pb-4 sm:pt-6 sm:pb-6">
                            <CarouselSectionTitle size="md" position="left">
                                Projects from <Highlight>2025</Highlight>
                            </CarouselSectionTitle>
                            <CarouselContent>
                                {mapped2025.map((project, idx) => (
                                    <CarouselItem key={idx} className="w-[230px] sm:w-[300px] h-full flex">
                                        <JournalCard className="w-full h-full">
                                            {/* Clickable Image Banner Link */}
                                            <Link href={`/projects/${project.id}`} className="block relative">
                                                <JournalCardImage className="h-[160px]! sm:h-[210px]!">
                                                    {project.image && (
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, 300px"
                                                            className="object-cover"
                                                        />
                                                    )}
                                                </JournalCardImage>
                                            </Link>

                                            <JournalCardContent className="pb-0!">
                                                {/* Clickable Title & Description Link */}
                                                <Link href={`/projects/${project.id}`} className="block group/link">
                                                    <JournalCardHeader>
                                                        <JournalCardTitle className="text-[18px]! sm:text-[20px]! transition-colors duration-300 group-hover/link:text-[#ffd4dc]">{project.title}</JournalCardTitle>
                                                    </JournalCardHeader>

                                                    <JournalCardDescription>
                                                        {project.description}
                                                    </JournalCardDescription>
                                                </Link>

                                                {/* Footer with Independent links */}
                                                <JournalCardFooter className="pt-4! flex flex-col items-stretch gap-3">
                                                    {project.tag && <JournalCardMeta className="text-left">{project.tag}</JournalCardMeta>}
                                                    <ButtonGroup size="sm" className="w-full justify-start!" gap="gap-2">
                                                        {project.viewUrl && (
                                                            <CustomLink
                                                                href={project.viewUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex-1 text-center"
                                                            >
                                                                View
                                                            </CustomLink>
                                                        )}
                                                        {project.githubUrl && (
                                                            <CustomLink
                                                                href={project.githubUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex-1 text-center"
                                                            >
                                                                GitHub
                                                            </CustomLink>
                                                        )}
                                                    </ButtonGroup>
                                                </JournalCardFooter>
                                            </JournalCardContent>
                                        </JournalCard>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </CarouselSection>
                    )}

                    {/* 2024 Builds Section */}
                    {mapped2024.length > 0 && (
                        <CarouselSection gap="pt-4 pb-16 sm:pt-6 sm:pb-24">
                            <CarouselSectionTitle size="md" position="left">
                                Projects from <Highlight>2024</Highlight>
                            </CarouselSectionTitle>
                            <CarouselContent>
                                {mapped2024.map((project, idx) => (
                                    <CarouselItem key={idx} className="w-[230px] sm:w-[300px] h-full flex">
                                        <JournalCard className="w-full h-full">
                                            {/* Clickable Image Banner Link */}
                                            <Link href={`/projects/${project.id}`} className="block relative">
                                                <JournalCardImage className="h-[160px]! sm:h-[210px]!">
                                                    {project.image && (
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, 300px"
                                                            className="object-cover"
                                                        />
                                                    )}
                                                </JournalCardImage>
                                            </Link>

                                            <JournalCardContent className="pb-0!">
                                                {/* Clickable Title & Description Link */}
                                                <Link href={`/projects/${project.id}`} className="block group/link">
                                                    <JournalCardHeader>
                                                        <JournalCardTitle className="text-[18px]! sm:text-[20px]! transition-colors duration-300 group-hover/link:text-[#ffd4dc]">{project.title}</JournalCardTitle>
                                                    </JournalCardHeader>

                                                    <JournalCardDescription>
                                                        {project.description}
                                                    </JournalCardDescription>
                                                </Link>

                                                {/* Footer with Independent links */}
                                                <JournalCardFooter className="pt-4! flex flex-col items-stretch gap-3">
                                                    {project.tag && <JournalCardMeta className="text-left">{project.tag}</JournalCardMeta>}
                                                    <ButtonGroup size="sm" className="w-full justify-start!" gap="gap-2">
                                                        {project.viewUrl && (
                                                            <CustomLink
                                                                href={project.viewUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex-1 text-center"
                                                            >
                                                                View
                                                            </CustomLink>
                                                        )}
                                                        {project.githubUrl && (
                                                            <CustomLink
                                                                href={project.githubUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex-1 text-center"
                                                            >
                                                                GitHub
                                                            </CustomLink>
                                                        )}
                                                    </ButtonGroup>
                                                </JournalCardFooter>
                                            </JournalCardContent>
                                        </JournalCard>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </CarouselSection>
                    )}
                </>
            )}

        </div>
    );
}
