import type { Metadata } from "next";
import { Section, SectionContent } from "@/components/widgets/Section"
import { 
    ProjectHeader, 
    ProjectNavigator, 
    ProjectDescription,
    ProjectPreview,
    ProjectPreviewTitle,
    ProjectPreviewGroup,
    ProjectAsset,
    ProjectVerticalStacks,
    ProjectHorizontalStacks
} from "@/components/widgets/ProjectComponent"

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

const page = () => {
    const navItems = {
        preview: "Preview",
        features: "Features",
        archive: "Archive",
        versions: "Versions",
        "github-stats": "GitHub Stats"
    };

    const projectData = {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis, eros sit amet consequat accumsan, dolor metus bibendum mi, sed aliquam nisi augue ac lacus. Vestibulum eu dictum arcu. Donec in pulvinar augue. Phasellus lacus lacus, semper nec condimentum aliquam, auctor vitae eros. Integer tristique odio id nibh posuere molestie. Nunc mattis dui a leo bibendum bibendum non at ligula. Mauris sit amet ultricies enim. Proin varius arcu eu elit sagittis tincidunt. Vivamus lobortis, velit at sodales sodales, orci orci vehicula leo, a ultricies ex quam vitae lectus. Donec facilisis condimentum molestie. Mauris et arcu quam. Nunc egestas rhoncus ligula, ac accumsan lacus gravida eget.",
        authors: [
            { name: "pixelThreader", github: "https://github.com/pixelThreader" }
        ]
    };

    const featureTabs = [
        {
            id: "reasoning",
            label: "AI Reasoning",
            content: (
                <div className="flex flex-col gap-4 text-left select-none">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">Autonomous Deep Reasoning Engine</h4>
                    <p className="text-[#ffd4dc]/70 text-sm sm:text-base leading-relaxed font-serif">
                        Operates a multi-agent orchestration layer that recursively spawns specialized research units. It parses contradictory documents, executes hypothesis verification loops, and maintains a strict system-level logical consensus.
                    </p>
                    <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/5 font-mono text-xs text-white/60">
                        {`[System] Starting deep reasoning tracer...
[Agent-1] Fetching index nodes for query context
[Agent-2] Confirmed 12 authoritative references
[Orchestrator] Resolving logical conflict between Doc-3 and Doc-9`}
                    </div>
                </div>
            )
        },
        {
            id: "graphing",
            label: "Semantic Graphing",
            content: (
                <div className="flex flex-col gap-4 text-left select-none">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">Real-Time Knowledge Mapping</h4>
                    <p className="text-[#ffd4dc]/70 text-sm sm:text-base leading-relaxed font-serif">
                        Visualizes highly complex multidimensional semantic relationships using dynamic force-directed node layouts. It groups clusters of matching theories, marks contradictory citations, and helps trace conceptual drift.
                    </p>
                    <div className="flex gap-3 mt-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-[#ffd4dc] bg-[#ffd4dc]/5 border border-white/5">Graph Visualization</span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-[#ffd4dc] bg-[#ffd4dc]/5 border border-white/5">Semantic Clustering</span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-[#ffd4dc] bg-[#ffd4dc]/5 border border-white/5">Force-Directed Layout</span>
                    </div>
                </div>
            )
        },
        {
            id: "synthesis",
            label: "Synthesis Engine",
            content: (
                <div className="flex flex-col gap-4 text-left select-none">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">Coherent Document Synthesis</h4>
                    <p className="text-[#ffd4dc]/70 text-sm sm:text-base leading-relaxed font-serif">
                        Integrates diverse multi-modal reference arrays into cohesive, publication-quality executive briefs. Fully automates Chicago-style inline citations, generates comprehensive bibliographies, and indexes secondary references.
                    </p>
                    <div className="flex items-center gap-2 text-white/50 text-xs font-serif mt-2">
                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
                        <span>Citations compiled: 147 | Processing time: 1.84s</span>
                    </div>
                </div>
            )
        },
        {
            id: "security",
            label: "Privacy & Sandboxing",
            content: (
                <div className="flex flex-col gap-4 text-left select-none">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">Air-Gapped Execution Environment</h4>
                    <p className="text-[#ffd4dc]/70 text-sm sm:text-base leading-relaxed font-serif">
                        Ensures all browser agents, query workers, and model calls run under strict, local container limits. Sanitizes secondary Javascript packages and prevents analytical telemetry leakage to remote servers.
                    </p>
                    <div className="mt-4 p-3 rounded-lg bg-green-950/20 border border-green-800/30 text-green-400 font-mono text-xs flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
                        Sandbox Secure: Telemetry Outflows Isolated (0.00 B/s)
                    </div>
                </div>
            )
        }
    ];

    const archiveTabs = [
        {
            id: "docs",
            label: "Docs",
            content: (
                <div className="flex flex-col gap-4 text-left select-none">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">System Architecture & API Specs</h4>
                    <p className="text-[#ffd4dc]/70 text-sm sm:text-base leading-relaxed font-serif">
                        Access our comprehensive developer portal containing full OpenAPI specifications, runtime environment variables, and visual pipeline diagrams. Explore how the autonomous research coordinators communicate with sub-agents over highly optimized IPC sockets.
                    </p>
                    <div className="flex gap-3 mt-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-[#ffd4dc] bg-[#ffd4dc]/5 border border-white/5">OpenAPI v3</span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-[#ffd4dc] bg-[#ffd4dc]/5 border border-white/5">IPC Protocol</span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-[#ffd4dc] bg-[#ffd4dc]/5 border border-white/5">Developer Portal</span>
                    </div>
                </div>
            )
        },
        {
            id: "readme",
            label: "README",
            content: (
                <div className="flex flex-col gap-4 text-left select-none">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">Quick Start & Local Setup</h4>
                    <p className="text-[#ffd4dc]/70 text-sm sm:text-base leading-relaxed font-serif">
                        Learn how to clone, configure, and initialize the deep-researcher core workspace on your local machine. Includes complete environment configuration templates, CLI commands, and telemetry sandbox verification steps.
                    </p>
                    <div className="mt-2 p-4 rounded-xl bg-white/5 border border-white/5 font-mono text-xs text-white/60">
                        {`$ git clone https://github.com/pixelthreader/deep-researcher.git
$ cd deep-researcher && pnpm install
$ pnpm dev --sandbox-only`}
                    </div>
                </div>
            )
        },
        {
            id: "license",
            label: "LICENSE",
            content: (
                <div className="flex flex-col gap-4 text-left select-none">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">MIT Open Source License</h4>
                    <p className="text-[#ffd4dc]/70 text-sm sm:text-base leading-relaxed font-serif">
                        Deep Researcher is licensed under the permissive MIT Open Source license. You are free to copy, modify, distribute, and run the software in both commercial and private settings with minimal restriction and maximum flexibility.
                    </p>
                    <div className="mt-2 p-3 rounded-lg bg-[#4e1c26]/20 border border-white/5 text-[#ffd4dc]/60 font-mono text-xs">
                        Copyright (c) 2026 pixelThreader. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files...
                    </div>
                </div>
            )
        },
        {
            id: "blogs",
            label: "Blogs",
            content: (
                <div className="flex flex-col gap-4 text-left select-none">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">Engineering Logs & Development Journals</h4>
                    <p className="text-[#ffd4dc]/70 text-sm sm:text-base leading-relaxed font-serif">
                        Read our published deep-dives detailing the major development milestones of Deep Researcher. Topics cover recursive model prompting strategies, force-directed canvas graphing, and minimizing telemetry leaking to remote servers.
                    </p>
                    <div className="flex gap-3 mt-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-[#ffd4dc] bg-[#ffd4dc]/5 border border-white/5">Research Logs</span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-[#ffd4dc] bg-[#ffd4dc]/5 border border-white/5">Prompt Engineering</span>
                    </div>
                </div>
            )
        },
        {
            id: "articles",
            label: "Articles",
            content: (
                <div className="flex flex-col gap-4 text-left select-none">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">Academic Publications & Whitepapers</h4>
                    <p className="text-[#ffd4dc]/70 text-sm sm:text-base leading-relaxed font-serif">
                        Explore peer-reviewed publications and technology brief drafts highlighting the scientific breakthroughs of agentic consensus architectures and deep semantic node mapping.
                    </p>
                    <div className="flex gap-3 mt-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-[#ffd4dc] bg-[#ffd4dc]/5 border border-white/5">Whitepapers</span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-[#ffd4dc] bg-[#ffd4dc]/5 border border-white/5">Consensus Architectures</span>
                    </div>
                </div>
            )
        }
    ];

    const versionsData = [
        {
            version: 'v2.1.0',
            title: 'Deep Reasoning & Graphing',
            duration: 'May 2026 — Present',
            description: 'Major updates to multi-agent reasoning, deep graph coordinate mapping, and caching performance.',
            features: ['Autonomous Deep Reasoning', 'Force-Directed Graphing', 'Unified Cache Layer'],
            changelog: [
                'Optimized query token overhead by 35% using local sandboxed discovery caching.',
                'Implemented smooth Canvas API semantic clustering rendering hundreds of nodes.'
            ]
        },
        {
            version: 'v2.0.0',
            title: 'Next.js 16 & Sandbox Security',
            duration: 'Mar 2026 — May 2026',
            description: 'Full stack redesign migrating core components to Next.js 16 and implementing complete telemetry sandboxing.',
            features: ['Next.js 16 Migration', 'Privacy Sandbox v2', 'Tailwind CSS v4'],
            changelog: [
                'Successfully isolated telemetry outflows to absolute zero (0.00 B/s).',
                'Completed full transition to React 19 and Tailwind CSS v4 design tokens.'
            ]
        },
        {
            version: 'v1.2.0',
            title: 'Semantic Graphing Core',
            duration: 'Nov 2025 — Feb 2026',
            description: 'Introduced initial recursive crawler coordinators, force layouts, and custom database indexers.',
            features: ['Recursive Crawler Coordinator', 'Semantic Node Mapping', 'Custom Indexer'],
            changelog: [
                'Built initial node crawler loop capable of discovering and indexing 50+ documents per minute.',
                'Designed responsive sidebar grid allowing users to filter tags instantly.'
            ]
        },
        {
            version: 'v1.0.0',
            title: 'Initial Release',
            duration: 'Jun 2025 — Oct 2025',
            description: 'Core release featuring stable crawler pipeline, document indexing, and Chicago citation synthesis.',
            features: ['Crawler Pipeline', 'Document Indexing', 'Chicago Citation Engine'],
            changelog: [
                'Released the first stable CLI release for automated desktop web discovery.',
                'Integrated robust multi-modal Chicago-style citation compilation.'
            ]
        }
    ];

    const githubStatsTabs = [
        {
            id: "authors",
            label: "Authors",
            content: (
                <div className="flex flex-col gap-4 text-left select-none">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">Repository Contributors</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        {/* Contributor 1 */}
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-white/10 bg-[#3a141d] flex items-center justify-center font-bold text-white">
                                PR
                            </div>
                            <div className="flex flex-col">
                                <span className="font-title text-[15px] font-bold text-white">pixelThreader (Piyush Rana)</span>
                                <span className="text-[11px] font-serif text-[#ffd4dc]/50 mt-0.5">142 commits | 48,210 ++ / 12,410 --</span>
                            </div>
                        </div>
                        {/* Contributor 2 */}
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-white/10 bg-black/40 flex items-center justify-center font-bold text-white/60">
                                GH
                            </div>
                            <div className="flex flex-col">
                                <span className="font-title text-[15px] font-bold text-white/80">github-actions [bot]</span>
                                <span className="text-[11px] font-serif text-[#ffd4dc]/50 mt-0.5">8 commits | 124 ++ / 82 --</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "commits",
            label: "Commits",
            content: (
                <div className="flex flex-col gap-4 text-left select-none">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">Recent Commit Activity</h4>
                    <div className="flex flex-col gap-3 mt-2 font-mono text-xs text-[#ffd4dc]/80">
                        <div className="flex items-start gap-3 border-b border-white/5 pb-2 last:border-b-0">
                            <span className="text-magenta font-bold">f8a29d1</span>
                            <div className="flex flex-col">
                                <span className="text-white">feat: integrate multi-agent deep reasoning coordinator loop</span>
                                <span className="text-[10px] text-[#ffd4dc]/40 mt-0.5">committed by pixelThreader 2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 border-b border-white/5 pb-2 last:border-b-0">
                            <span className="text-magenta font-bold">d4c3821</span>
                            <div className="flex flex-col">
                                <span className="text-white">perf: optimize canvas node rendering clustering algorithm</span>
                                <span className="text-[10px] text-[#ffd4dc]/40 mt-0.5">committed by pixelThreader 1 week ago</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 border-b border-white/5 pb-2 last:border-b-0">
                            <span className="text-magenta font-bold">a9b8c7d</span>
                            <div className="flex flex-col">
                                <span className="text-white">refactor: dry active tab button groups and format scrollbar</span>
                                <span className="text-[10px] text-[#ffd4dc]/40 mt-0.5">committed by pixelThreader 2 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "releases",
            label: "Releases",
            content: (
                <div className="flex flex-col gap-4 text-left select-none">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">Latest Release Assets</h4>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between gap-4">
                            <div className="flex flex-col">
                                <span className="font-title text-[15px] font-bold text-white">v2.1.0-stable (Latest)</span>
                                <span className="text-[11px] font-serif text-[#ffd4dc]/50 mt-0.5">Published May 30, 2026 • 24.8 MB</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="px-3 py-1.5 rounded-lg bg-[#4e1c26]/95 hover:bg-[#4e1c26]/85 text-white font-serif text-xs font-bold border border-white/10 cursor-pointer">
                                    Download (.dmg)
                                </span>
                                <span className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#ffd4dc]/80 font-serif text-xs border border-white/5 cursor-pointer">
                                    Release Notes
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "tech-stack",
            label: "tech-stack",
            content: (
                <div className="flex flex-col gap-4 text-left select-none">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white font-serif tracking-tight">Languages & Core Technologies</h4>
                    
                    {/* Language Breakdown Progress Bar */}
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="flex w-full h-3 rounded-full overflow-hidden bg-white/5">
                            <div className="h-full bg-blue-500 w-[94.2%]" title="TypeScript 94.2%" />
                            <div className="h-full bg-pink-500 w-[4.8%]" title="CSS 4.8%" />
                            <div className="h-full bg-orange-500 w-[1.0%]" title="HTML 1.0%" />
                        </div>
                        <div className="flex gap-4 text-[11px] font-serif text-[#ffd4dc]/60">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                                <span>TypeScript (94.2%)</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                                <span>CSS (4.8%)</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                                <span>HTML (1.0%)</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="w-full">
            <Section className="pb-8">
                <SectionContent className="flex flex-col gap-6">

                    <ProjectHeader
                        image="/projects/inner_logo_dr_light.png"
                        title="Deep Researcher v2"
                        description="Agentic research full-stack desktop application"
                        repoLink="https://github.com/pixelthreader/deep-researcher"
                    />

                    <ProjectNavigator items={navItems} />

                    <ProjectDescription 
                        description={projectData.description}
                        authors={projectData.authors}
                        className="mt-4"
                    />
                </SectionContent>
            </Section>

            {/* App Preview Section Showcase (Rendered full-bleed outside standard container padding) */}
            <div id="preview" className="scroll-mt-48 w-full py-12">
                <ProjectPreviewTitle>
                    App&apos;s <span className="brand-gradient ml-1.5 sm:ml-2">Preview</span>
                </ProjectPreviewTitle>
                
                <ProjectPreview snap={false}>
                    <ProjectPreviewGroup title="User Interface & Core Features">
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Intuitive and sleek dashboard workspace design" 
                        />
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Interactive analytics widgets & metrics grid" 
                        />
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Collaborative workspace & pipeline monitor" 
                        />
                    </ProjectPreviewGroup>

                    <ProjectPreviewGroup title="Interactive Analytics & Reporting">
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Real-time financial charts & telemetry feeds" 
                        />
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Intelligent insights generation and reporting" 
                        />
                    </ProjectPreviewGroup>

                    <ProjectPreviewGroup title="Deep Researcher Engine">
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Autonomous agent terminal logging interface" 
                        />
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Algorithmic pipeline tracing and diagnostics" 
                        />
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Futuristic semantic search node visualization" 
                        />
                    </ProjectPreviewGroup>
                </ProjectPreview>
            </div>

            <Section className="pt-8">
                <SectionContent className="flex flex-col gap-12">
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

                        <ProjectVerticalStacks tabs={featureTabs} className="mt-6" />
                    </div>

                    <div id="archive" className="scroll-mt-48 w-full flex flex-col gap-6">
                        <div className="flex flex-col items-start justify-start select-none">
                            <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-title text-white flex items-baseline tracking-tight pb-2 pt-1 leading-normal">
                                Project <span className="brand-gradient ml-1.5 sm:ml-2">Archives</span>
                                <span className="text-white">.</span>
                            </h2>
                            <div className="mt-2 flex w-full max-w-[160px] sm:max-w-[220px] items-center gap-1.5 h-[3.5px]">
                                <div className="h-full bg-white rounded-full w-[70%]" />
                                <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[15%]" />
                                <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[8%]" />
                                <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[7%]" />
                            </div>
                        </div>

                        <ProjectHorizontalStacks tabs={archiveTabs} align="left" className="mt-6" />
                    </div>

                    <div id="versions" className="scroll-mt-48 w-full flex flex-col gap-6">
                        <div className="flex flex-col items-start justify-start select-none">
                            <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-title text-white flex items-baseline tracking-tight pb-2 pt-1 leading-normal">
                                Version <span className="brand-gradient ml-1.5 sm:ml-2">History</span>
                                <span className="text-white">.</span>
                            </h2>
                            <div className="mt-2 flex w-full max-w-[160px] sm:max-w-[220px] items-center gap-1.5 h-[3.5px]">
                                <div className="h-full bg-white rounded-full w-[70%]" />
                                <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[15%]" />
                                <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[8%]" />
                                <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[7%]" />
                            </div>
                        </div>

                        {/* Left-aligned vertical line layout matching Accordion styling */}
                        <div className="w-full flex flex-col mt-8">
                            {versionsData.map((item, index) => {
                                const isLast = index === versionsData.length - 1;
                                return (
                                    <div 
                                        key={index}
                                        className="w-full flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-start text-left pl-6 md:pl-8 relative pb-12 last:pb-0"
                                    >
                                        {/* Dot column & Line connector */}
                                        <div className="absolute left-[-16px] top-0 bottom-0 flex flex-col items-center z-10 w-8">
                                            {/* Upper connecting line */}
                                            {index > 0 ? (
                                                <div className="w-[2px] h-3 shrink-0 bg-linear-to-b from-[#a88b97]/30 to-[#a88b97]/30" />
                                            ) : (
                                                <div className="w-[2px] h-3 shrink-0 bg-transparent" />
                                            )}
                                            
                                            {/* Static Glossy Timeline Dot */}
                                            <div className="relative w-5 h-5 rounded-full bg-linear-to-br from-[#a88b97] via-[#6a4754]/40 to-[#a88b97] p-[1.5px] flex items-center justify-center z-10 shrink-0">
                                                <div className="w-full h-full rounded-full bg-[#471824] flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-[#ffd4dc]" />
                                                </div>
                                            </div>
                                            
                                            {/* Lower connecting line */}
                                            {!isLast ? (
                                                <div className="w-[2px] grow bg-linear-to-b from-[#a88b97]/30 via-white/10 to-[#a88b97]/30" />
                                            ) : (
                                                <div className="w-[2px] grow bg-transparent" />
                                            )}
                                        </div>

                                        {/* Duration Column */}
                                        <div className="md:col-span-3 flex flex-col pt-1">
                                            <span className="font-title text-[20px] md:text-[22px] font-bold text-white tracking-tight leading-none">
                                                {item.duration}
                                            </span>
                                            <span className="text-[10px] font-title uppercase tracking-wider text-[#ffd4dc]/40 font-bold mt-2">
                                                Release Period
                                            </span>
                                        </div>

                                        {/* Details Column */}
                                        <div className="md:col-span-9 flex flex-col gap-4">
                                            <div>
                                                <h4 className="font-title text-[22px] sm:text-[26px] text-white font-extrabold leading-snug tracking-tight">
                                                    {item.version}
                                                </h4>
                                                <h5 className="font-serif text-[#ffd4dc] text-[16px] sm:text-[18px] font-medium mt-1 leading-normal italic">
                                                    {item.title}
                                                </h5>
                                            </div>

                                            {/* Description */}
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[10px] font-title uppercase tracking-wider text-[#ffd4dc]/40 font-bold">
                                                    Focus & Overview
                                                </span>
                                                <p className="font-serif text-white/90 text-[14px] sm:text-[15px] leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Key Features */}
                                            {item.features && item.features.length > 0 && (
                                                <div className="flex flex-col gap-2 mt-1">
                                                    <span className="text-[10px] font-title uppercase tracking-wider text-[#ffd4dc]/40 font-bold">
                                                        Key Features
                                                    </span>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {item.features.map((feat, fIdx) => (
                                                            <span 
                                                                key={fIdx}
                                                                className="px-2.5 py-0.5 rounded-full text-[11px] bg-white/5 text-[#ffd4dc]/80 border border-white/5 font-normal select-none"
                                                            >
                                                                {feat}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Changelog details */}
                                            {item.changelog && item.changelog.length > 0 && (
                                                <div className="flex flex-col gap-2 mt-2">
                                                    <span className="text-[10px] font-title uppercase tracking-wider text-[#ffd4dc]/40 font-bold">
                                                        Changelog & Updates
                                                    </span>
                                                    <ul className="space-y-3">
                                                        {item.changelog.map((change, cIdx) => (
                                                            <li key={cIdx} className="flex items-start gap-2.5 text-left">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd4dc]/30 mt-2 shrink-0" />
                                                                <p className="font-serif text-[#ffd4dc]/75 text-[14px] sm:text-[15px] leading-relaxed">
                                                                    {change}
                                                                </p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

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

                        <ProjectHorizontalStacks tabs={githubStatsTabs} align="left" className="mt-6" />
                    </div>
                </SectionContent>
            </Section>
        </div>
    )
}

export default page