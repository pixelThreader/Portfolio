import type { Metadata } from "next";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { getProjectById, getGitHubRepo } from "@/utils/api";
import React from "react";
import { Section, SectionContent } from "@/components/widgets/Section";
import { ToastError } from "@/components/widgets/ToastError";

interface ProjectFeatureDetail {
    id?: string;
    title: string;
    description: string;
    code_snippet?: string;
    badges?: string[];
    label?: string;
}

import { 
    ProjectHeader, 
    ProjectNavigator, 
    ProjectDescription,
    ProjectPreview,
    ProjectPreviewTitle,
    ProjectPreviewGroup,
    ProjectAsset,
    ProjectVerticalStacks
} from "@/components/widgets/ProjectComponent";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const formattedId = resolvedParams.id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return {
        title: `${formattedId} • pixelThreader`,
        description: `Deep dive and engineering details of the ${formattedId} project by pixelThreader.`,
    };
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    
    const { data: dbProject, error: projectError } = await getProjectById(supabase, id);

    if (projectError) {
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

                <div className="w-full flex justify-center items-center py-32 px-8 z-10 relative">
                    <ToastError message={`Failed to fetch project details: ${projectError.message}`} />
                    <p className="font-serif text-[#ffd4dc]/40 text-center text-lg max-w-md" style={{ fontFamily: 'Merriweather, serif' }}>
                        Failed to fetch project details (status: {projectError.code})
                    </p>
                </div>
            </div>
        );
    }

    if (!dbProject) {
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

                <div className="w-full flex justify-center items-center py-32 px-8 z-10 relative">
                    <p className="font-serif text-[#ffd4dc]/40 text-center text-lg max-w-md" style={{ fontFamily: 'Merriweather, serif' }}>
                        Project not found.
                    </p>
                </div>
            </div>
        );
    }

    const gitHubData = await getGitHubRepo(dbProject.github_url);

    const projTitle = dbProject.title;
    const projLogo = dbProject.logo_url || "";
    const projTag = dbProject.tag || "";
    const projRepo = dbProject.github_url || "";
    const projDesc = dbProject.description;
    const projAuthors = [{ name: "pixelThreader", github: "https://github.com/pixelThreader" }];

    const dbAssets = dbProject.project_assets || [];

    const activeFeatureTabs = dbProject.features ? (dbProject.features as ProjectFeatureDetail[]).map((f) => ({
        id: f.id || f.title.toLowerCase().replace(/\s+/g, '-'),
        label: f.label || f.title,
        content: (
            <div className="flex flex-col gap-4 text-left select-none">
                <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">{f.title}</h4>
                <p className="text-[#ffd4dc]/70 text-sm sm:text-base leading-relaxed font-serif">
                    {f.description}
                </p>
                {f.code_snippet && (
                    <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/5 font-mono text-xs text-white/60 whitespace-pre-wrap">
                        {f.code_snippet}
                    </div>
                )}
                {f.badges && f.badges.length > 0 && (
                    <div className="flex gap-3 mt-2 flex-wrap">
                        {f.badges.map((b: string) => (
                            <span key={b} className="px-3 py-1 rounded-full text-xs font-bold text-[#ffd4dc] bg-[#ffd4dc]/5 border border-white/5">
                                {b}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        )
    })) : [];

    // Dynamically build navigation items based on real content availability
    const navItems: Record<string, string> = {};
    if (dbAssets.length > 0) {
        navItems.preview = "Preview";
    }
    if (activeFeatureTabs.length > 0) {
        navItems.features = "Features";
    }
    if (gitHubData) {
        navItems["github-stats"] = "GitHub Stats";
    }

    return (
        <div className="w-full">
            <Section className="pb-8">
                <SectionContent className="flex flex-col gap-6">

                    <ProjectHeader
                        image={projLogo}
                        title={projTitle}
                        description={projTag}
                        repoLink={projRepo}
                    />

                    {Object.keys(navItems).length > 0 && <ProjectNavigator items={navItems} />}

                    <ProjectDescription 
                        description={projDesc}
                        authors={projAuthors}
                        className="mt-4"
                    />
                </SectionContent>
            </Section>

            {/* App Preview Section Showcase */}
            {dbAssets.length > 0 && (
                <div id="preview" className="scroll-mt-48 w-full py-12">
                    <ProjectPreviewTitle>
                        App&apos;s <span className="brand-gradient ml-1.5 sm:ml-2">Preview</span>
                    </ProjectPreviewTitle>
                    
                    <ProjectPreview snap={false}>
                        <ProjectPreviewGroup title="Project Assets & Previews">
                            {dbAssets.map((asset) => (
                                <ProjectAsset 
                                    key={asset.id}
                                    type={asset.asset_type || "image"} 
                                    src={asset.asset_url} 
                                    caption={asset.caption || undefined} 
                                />
                            ))}
                        </ProjectPreviewGroup>
                    </ProjectPreview>
                </div>
            )}

            <Section className="pt-8">
                <SectionContent className="flex flex-col gap-12">
                    {/* Features Section */}
                    {activeFeatureTabs.length > 0 && (
                        <div id="features" className="scroll-mt-48 w-full flex flex-col gap-6">
                            <div className="flex flex-col items-start justify-start select-none">
                                <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-title text-white flex items-baseline tracking-tight pb-2 pt-1 leading-normal">
                                    App <span className="brand-gradient ml-1.5 sm:ml-2">Features</span>
                                    <span className="text-white">.</span>
                                </h2>
                                <div className="mt-2 flex w-full max-w-[160px] sm:max-w-[220px] items-center gap-1.5 h-[3.5px]">
                                    <div className="h-full bg-white rounded-full w-[70%]" />
                                    <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[15%]" />
                                    <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[8%]" />
                                    <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[7%]" />
                                </div>
                            </div>

                            <ProjectVerticalStacks tabs={activeFeatureTabs} className="mt-6" />
                        </div>
                    )}

                    {/* GitHub Statistics Section */}
                    {gitHubData && (
                        <div id="github-stats" className="scroll-mt-48 w-full flex flex-col gap-6">
                            <div className="flex flex-col items-start justify-start select-none">
                                <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-title text-white flex items-baseline tracking-tight pb-2 pt-1 leading-normal">
                                    GitHub <span className="brand-gradient ml-1.5 sm:ml-2">Statistics</span>
                                    <span className="text-white">.</span>
                                </h2>
                                <div className="mt-2 flex w-full max-w-[160px] sm:max-w-[220px] items-center gap-1.5 h-[3.5px]">
                                    <div className="h-full bg-white rounded-full w-[70%]" />
                                    <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[15%]" />
                                    <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[8%]" />
                                    <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[7%]" />
                                </div>
                            </div>

                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                                <div className="rounded-[24px] border border-white/5 bg-[#3a141d]/40 p-6 backdrop-blur-md shadow-xl flex flex-col justify-between">
                                    <span className="text-white/60 text-xs font-serif">Stars</span>
                                    <span className="text-3xl font-title font-bold text-white mt-2">{gitHubData.stargazers_count}</span>
                                </div>
                                <div className="rounded-[24px] border border-white/5 bg-[#3a141d]/40 p-6 backdrop-blur-md shadow-xl flex flex-col justify-between">
                                    <span className="text-white/60 text-xs font-serif">License</span>
                                    <span className="text-lg font-title font-bold text-white mt-2 truncate">{gitHubData.license}</span>
                                </div>
                                <div className="rounded-[24px] border border-white/5 bg-[#3a141d]/40 p-6 backdrop-blur-md shadow-xl flex flex-col justify-between">
                                    <span className="text-white/60 text-xs font-serif">Last Activity</span>
                                    <span className="text-lg font-title font-bold text-white mt-2">{gitHubData.last_commit}</span>
                                </div>
                                <div className="rounded-[24px] border border-white/5 bg-[#3a141d]/40 p-6 backdrop-blur-md shadow-xl flex flex-col justify-between">
                                    <span className="text-white/60 text-xs font-serif">Latest Commit</span>
                                    <span className="text-sm font-serif text-[#ffd4dc]/95 mt-2 line-clamp-2 leading-relaxed">{gitHubData.last_commit_message}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </SectionContent>
            </Section>
        </div>
    );
};

export default page;