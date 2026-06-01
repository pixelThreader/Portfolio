import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonGroup, Link as CustomLink } from "@/components/widgets/Button";
import { BadgeGroup, Badge } from "@/components/widgets/Badge";
import { GlassyHeroSection } from "@/components/widgets/GlassyHeroSection";
import {
    CarouselSection,
    CarouselSectionTitle,
    Highlight,
    CarouselContent,
    CarouselItem
} from "@/components/widgets/CarouselSection";

export const metadata: Metadata = {
    title: "Projects • pixelThreader",
    description: "Explore the custom software engineering, AI agents, and web applications built by pixelThreader.",
};
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

const PROJECTS_2026 = [
    {
        id: "deep-researcher",
        title: "Deep Researcher v2",
        description: "An Open-Source agentic research harness for autonomous web research, reasoning, source analysis, multi-step planning, and structured AI-powered report generation.",
        image: "/projects/deep_researcher.png",
        badges: ["AI Agent"],
        tag: "Autonomous Agent",
        viewUrl: "https://deepresearcher.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/deep-researcher"
    },
    {
        id: "agentic-v2",
        title: "Agentic V2 Orchestrator",
        description: "A robust desktop frontend and backend orchestration leveraging MCP architectures and autonomous reasoning loops to solve complex software engineering tasks instantly.",
        image: "/projects/agentic_v2.png",
        badges: ["Desktop App"],
        tag: "AI Orchestration",
        viewUrl: "https://agentic.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/agentic-v2"
    },
    {
        id: "mcp-specs",
        title: "Model Context Protocol Specs",
        description: "Official implementation guide for Anthropic's Model Context Protocol (MCP). Configures clients, registers custom local tools, queries dynamic resources, and secures system execution.",
        image: "/projects/mcp_specs.png",
        badges: ["API Spec"],
        tag: "Documentation",
        viewUrl: "https://mcp-specs.pixelthreader.dev",
        githubUrl: "https://github.com/modelcontextprotocol"
    },
    {
        id: "aether-ui",
        title: "Aether Agent UI",
        description: "A high-performance cinematic layout showcasing multi-agent reasoning chains, active system execution graphs, and terminal outputs.",
        image: "/projects/wisefinance.png", // Round robin
        badges: ["Fidelity UX"],
        tag: "Interface Design",
        viewUrl: "https://aether.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/aether-ui"
    }
];

const PROJECTS_2025 = [
    {
        id: "wisefinance",
        title: "WiseFinance Analytics",
        description: "A cinematic financial analytics platform that provides interactive canvas rendering, smooth real-time charting, and predictive AI budget modeling.",
        image: "/projects/wisefinance.png",
        badges: ["Financial Tech"],
        tag: "Financial Tech",
        viewUrl: "https://wisefinance.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/wisefinance"
    },
    {
        id: "antigravity",
        title: "Antigravity UI System",
        description: "An asymmetric design token utility system implementing complex glassmorphic shaders, curated theme states, and customizable React animation modules.",
        image: "/projects/antigravity_ui.png",
        badges: ["Design System"],
        tag: "Design System",
        viewUrl: "https://antigravity.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/antigravity"
    },
    {
        id: "badgegroup",
        title: "BadgeGroup Layouts",
        description: "Comprehensive API documentation and asymmetric layout utility system for dynamic, senior-level outer rounded and inner sharp border joints.",
        image: "/projects/mcp_specs.png",
        badges: ["Layout Framework"],
        tag: "Layout Framework",
        viewUrl: "https://badgegroup.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/badgegroup"
    },
    {
        id: "neurostack",
        title: "NeuroStack Reasoning Loop",
        description: "An offline agentic search framework optimized for local large language models and persistent context budgets during complex executions.",
        image: "/projects/deep_researcher.png", // Round robin
        badges: ["Local AI"],
        tag: "Neural Stack",
        viewUrl: "https://neurostack.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/neurostack"
    },
    {
        id: "openagentx",
        title: "OpenAgentX Workspace",
        description: "A collaborative agent workspace integrating multi-agent debate protocols, context syncing, and terminal sandboxes.",
        image: "/projects/agentic_v2.png", // Round robin
        badges: ["Collaboration"],
        tag: "AI Workspace",
        viewUrl: "https://openagentx.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/openagentx"
    },
    {
        id: "chrysalis",
        title: "Chrysalis Logic Flow",
        description: "An interactive flowchart compiler translating node-based visual logic paths directly into executable Python agent schemas.",
        image: "/projects/wisefinance.png", // Round robin
        badges: ["Visual Coding"],
        tag: "Visual Logic",
        viewUrl: "https://chrysalis.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/chrysalis"
    },
    {
        id: "glassy-cards",
        title: "Glassy Card Widgets",
        description: "Premium UI modular toolkit offering high fidelity glassmorphism backing filters and liquid border glowing gradients.",
        image: "/projects/antigravity_ui.png", // Round robin
        badges: ["CSS Shaders"],
        tag: "UI Package",
        viewUrl: "https://glassy.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/glassy-cards"
    },
    {
        id: "canvas-predictive",
        title: "Canvas Predictive Charts",
        description: "High performance rendering engine tracking market indicators and forecasting budgeting limits via smart regression APIs.",
        image: "/projects/mcp_specs.png", // Round robin
        badges: ["Canvas API"],
        tag: "Data Viz",
        viewUrl: "https://canvas.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/canvas-charts"
    },
    {
        id: "asymmetric-borders",
        title: "Asymmetric Borders Spec",
        description: "A Tailwind configuration utility implementing mathematically precise sharp inner and smooth outer border shapes for premium cards.",
        image: "/projects/deep_researcher.png", // Round robin
        badges: ["Layout Token"],
        tag: "Design Spec",
        viewUrl: "https://borders.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/asymmetric-borders"
    },
    {
        id: "mcp-client",
        title: "MCP Client Registries",
        description: "Developer utility to register terminal commands and Node runtimes directly inside active Model Context Protocol structures.",
        image: "/projects/agentic_v2.png", // Round robin
        badges: ["Developer Tool"],
        tag: "CLI Utility",
        viewUrl: "https://mcpclient.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/mcp-client"
    }
];

const PROJECTS_2024 = [
    {
        id: "portfolio-v1",
        title: "Portfolio Builder v1",
        description: "Minimalist grid-based developer portfolio builder implementing static markdown compilation and responsive grids.",
        image: "/projects/wisefinance.png", // Round robin
        badges: ["Static Site"],
        tag: "Web App",
        viewUrl: "https://portfoliov1.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/portfolio-v1"
    },
    {
        id: "canvas-engine",
        title: "Financial Canvas Engine",
        description: "Lightweight canvas library providing visual charts and interactive pointer graphs.",
        image: "/projects/antigravity_ui.png", // Round robin
        badges: ["Data Visualizer"],
        tag: "Data Graphics",
        viewUrl: "https://canvasengine.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/canvas-engine"
    },
    {
        id: "reasoning-v1",
        title: "Early Reasoning Engine",
        description: "Minimal agent loop executing simple state transitions and parsing tool requests case-by-case.",
        image: "/projects/mcp_specs.png", // Round robin
        badges: ["AI Loop"],
        tag: "Core AI",
        viewUrl: "https://reasoningv1.pixelthreader.dev",
        githubUrl: "https://github.com/pixelthreader/reasoning-v1"
    }
];

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

            {/* 2026 Builds Section */}
            <CarouselSection gap="pt-12 pb-4 sm:pt-16 sm:pb-6">
                <CarouselSectionTitle size="md" position="left">
                    Projects from <Highlight>2026</Highlight>
                </CarouselSectionTitle>
                <CarouselContent>
                    {PROJECTS_2026.map((project, idx) => (
                        <CarouselItem key={idx} className="w-[230px] sm:w-[300px] h-full flex">
                            <JournalCard className="w-full h-full">
                                {/* Clickable Image Banner Link */}
                                <Link href={`/projects/${project.id}`} className="block relative">
                                    <JournalCardImage className="!h-[160px] sm:!h-[210px]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 300px"
                                            className="object-cover"
                                        />
                                    </JournalCardImage>
                                </Link>

                                <JournalCardContent className="!pb-0">
                                    {/* Clickable Title & Description Link */}
                                    <Link href={`/projects/${project.id}`} className="block group/link">
                                        <JournalCardHeader>
                                            <JournalCardTitle className="!text-[18px] sm:!text-[20px] transition-colors duration-300 group-hover/link:text-[#ffd4dc]">{project.title}</JournalCardTitle>
                                        </JournalCardHeader>

                                        <JournalCardDescription>
                                            {project.description}
                                        </JournalCardDescription>
                                    </Link>

                                    {/* Footer with Independent links */}
                                    <JournalCardFooter className="!pt-4 flex flex-col items-stretch gap-3">
                                        <JournalCardMeta className="text-left">{project.tag}</JournalCardMeta>
                                        <ButtonGroup size="sm" className="w-full !justify-start" gap="gap-2">
                                            <CustomLink 
                                                href={project.viewUrl} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center"
                                            >
                                                View
                                            </CustomLink>
                                            <CustomLink 
                                                href={project.githubUrl} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center"
                                            >
                                                GitHub
                                            </CustomLink>
                                        </ButtonGroup>
                                    </JournalCardFooter>
                                </JournalCardContent>
                            </JournalCard>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </CarouselSection>

            {/* 2025 Builds Section */}
            <CarouselSection gap="pt-4 pb-4 sm:pt-6 sm:pb-6">
                <CarouselSectionTitle size="md" position="left">
                    Projects from <Highlight>2025</Highlight>
                </CarouselSectionTitle>
                <CarouselContent>
                    {PROJECTS_2025.map((project, idx) => (
                        <CarouselItem key={idx} className="w-[230px] sm:w-[300px] h-full flex">
                            <JournalCard className="w-full h-full">
                                {/* Clickable Image Banner Link */}
                                <Link href={`/projects/${project.id}`} className="block relative">
                                    <JournalCardImage className="!h-[160px] sm:!h-[210px]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 300px"
                                            className="object-cover"
                                        />
                                    </JournalCardImage>
                                </Link>

                                <JournalCardContent className="!pb-0">
                                    {/* Clickable Title & Description Link */}
                                    <Link href={`/projects/${project.id}`} className="block group/link">
                                        <JournalCardHeader>
                                            <JournalCardTitle className="!text-[18px] sm:!text-[20px] transition-colors duration-300 group-hover/link:text-[#ffd4dc]">{project.title}</JournalCardTitle>
                                        </JournalCardHeader>

                                        <JournalCardDescription>
                                            {project.description}
                                        </JournalCardDescription>
                                    </Link>

                                    {/* Footer with Independent links */}
                                    <JournalCardFooter className="!pt-4 flex flex-col items-stretch gap-3">
                                        <JournalCardMeta className="text-left">{project.tag}</JournalCardMeta>
                                        <ButtonGroup size="sm" className="w-full !justify-start" gap="gap-2">
                                            <CustomLink 
                                                href={project.viewUrl} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center"
                                            >
                                                View
                                            </CustomLink>
                                            <CustomLink 
                                                href={project.githubUrl} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center"
                                            >
                                                GitHub
                                            </CustomLink>
                                        </ButtonGroup>
                                    </JournalCardFooter>
                                </JournalCardContent>
                            </JournalCard>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </CarouselSection>

            {/* 2024 Builds Section */}
            <CarouselSection gap="pt-4 pb-16 sm:pt-6 sm:pb-24">
                <CarouselSectionTitle size="md" position="left">
                    Projects from <Highlight>2024</Highlight>
                </CarouselSectionTitle>
                <CarouselContent>
                    {PROJECTS_2024.map((project, idx) => (
                        <CarouselItem key={idx} className="w-[230px] sm:w-[300px] h-full flex">
                            <JournalCard className="w-full h-full">
                                {/* Clickable Image Banner Link */}
                                <Link href={`/projects/${project.id}`} className="block relative">
                                    <JournalCardImage className="!h-[160px] sm:!h-[210px]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 300px"
                                            className="object-cover"
                                        />
                                    </JournalCardImage>
                                </Link>

                                <JournalCardContent className="!pb-0">
                                    {/* Clickable Title & Description Link */}
                                    <Link href={`/projects/${project.id}`} className="block group/link">
                                        <JournalCardHeader>
                                            <JournalCardTitle className="!text-[18px] sm:!text-[20px] transition-colors duration-300 group-hover/link:text-[#ffd4dc]">{project.title}</JournalCardTitle>
                                        </JournalCardHeader>

                                        <JournalCardDescription>
                                            {project.description}
                                        </JournalCardDescription>
                                    </Link>

                                    {/* Footer with Independent links */}
                                    <JournalCardFooter className="!pt-4 flex flex-col items-stretch gap-3">
                                        <JournalCardMeta className="text-left">{project.tag}</JournalCardMeta>
                                        <ButtonGroup size="sm" className="w-full !justify-start" gap="gap-2">
                                            <CustomLink 
                                                href={project.viewUrl} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center"
                                            >
                                                View
                                            </CustomLink>
                                            <CustomLink 
                                                href={project.githubUrl} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center"
                                            >
                                                GitHub
                                            </CustomLink>
                                        </ButtonGroup>
                                    </JournalCardFooter>
                                </JournalCardContent>
                            </JournalCard>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </CarouselSection>

        </div>
    );
}
