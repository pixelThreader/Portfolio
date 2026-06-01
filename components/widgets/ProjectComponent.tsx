"use client";

import React from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ButtonGroup, Button, Link as CustomLink } from "@/components/widgets/Button";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface ProjectHeaderProps {
    image: string;
    title: string;
    description: string;
    repoLink: string;
}

export function ProjectHeader({ image, title, description, repoLink }: ProjectHeaderProps) {
    const handleShare = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            if (typeof window !== "undefined") {
                await navigator.clipboard.writeText(window.location.href);
                toast("Sharable link is copied");
            }
        } catch (err) {
            console.error("Failed to copy link: ", err);
        }
    };

    return (
        <div className="relative w-full rounded-[24px] p-[1.2px] group">
            {/* Outer Gradient Border Layer matching button/badge styling */}
            <span className="absolute inset-0 bg-linear-to-br from-white/40 via-transparent to-white/25 rounded-[24px]" />

            {/* Glossy Inner Container */}
            <div className="relative rounded-[22.8px] bg-[#411F27]/95 border border-white/5 backdrop-blur-xl px-4 py-3 sm:px-6 sm:py-3.5 flex items-center justify-between gap-4 w-full h-full">

                {/* Left Side: Logo & Text details */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    {/* Clean borderless, hoverless app icon container */}
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl overflow-hidden shrink-0 relative flex items-center justify-center">
                        <Image
                            src={image}
                            alt={`${title} Logo`}
                            width={52}
                            height={52}
                            className="object-cover w-full h-full rounded-xl"
                            priority
                        />
                    </div>

                    {/* Title & description container */}
                    <div className="flex flex-col min-w-0 flex-1">
                        <h2
                            className="text-[15px] sm:text-[18px] md:text-[20px] font-semibold text-white tracking-tight leading-tight truncate font-serif"
                        >
                            {title}
                        </h2>
                        <p
                            className="text-[#ffd4dc]/50 text-[11px] sm:text-[13px] md:text-[14px] tracking-normal leading-tight truncate mt-0.5 sm:mt-1 font-serif"
                        >
                            {description}
                        </p>
                    </div>
                </div>

                {/* Right Side: GitHub & Share action controls */}
                <div className="flex items-center gap-4.5 sm:gap-6 shrink-0 pl-2">
                    {/* GitHub Repo Link */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href={repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white cursor-pointer flex items-center justify-center"
                                aria-label="GitHub Repository"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-5 h-5 sm:w-5.5 sm:h-5.5"
                                    fill="white"
                                >
                                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                </svg>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent
                            side="top"
                            align="center"
                            className="bg-[#411F27] text-[#ffd4dc] border border-white/10 px-3 py-1.5 rounded-xl font-serif text-[11px] tracking-wide shadow-xl select-none"
                        >
                            View GitHub Repository
                        </TooltipContent>
                    </Tooltip>

                    {/* Share Button (Click to Copy Link) */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button
                                onClick={handleShare}
                                className="text-white cursor-pointer relative flex items-center justify-center"
                                aria-label="Share project URL"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-5 h-5 sm:w-5.5 sm:h-5.5"
                                    stroke="white"
                                    fill="none"
                                >
                                    <circle cx="128" cy="256" r="48" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                    <circle cx="384" cy="112" r="48" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                    <circle cx="384" cy="400" r="48" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                    <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94" />
                                </svg>
                            </button>
                        </TooltipTrigger>
                        <TooltipContent
                            side="top"
                            align="center"
                            className="bg-[#411F27] text-[#ffd4dc] border border-white/10 px-3 py-1.5 rounded-xl font-serif text-[11px] tracking-wide shadow-xl select-none"
                        >
                            Copy Sharable Project Link
                        </TooltipContent>
                    </Tooltip>
                </div>

            </div>
        </div>
    );
}

export function ProjectNavigator({ items }: { items: Record<string, string> }) {
    return (
        <div className="sticky top-[96px] z-40 w-full py-4 backdrop-blur-md">
            <ButtonGroup size="sm" gap="gap-[6px] sm:gap-[12px]" fullBrightness={true} className="justify-start! w-full">
                {Object.entries(items).map(([id, label]) => (
                    <CustomLink key={id} href={`#${id}`}>
                        {label}
                    </CustomLink>
                ))}
            </ButtonGroup>
        </div>
    );
}

interface Author {
    name: string;
    github?: string;
}

interface ProjectDescriptionProps {
    description: string | string[];
    authors: Author[];
    className?: string;
}

export function ProjectDescription({ description, authors, className = "" }: ProjectDescriptionProps) {
    const paragraphs = Array.isArray(description) ? description : [description];

    return (
        <div className={`flex flex-col w-full ${className}`}>
            {/* Description Text */}
            <div className="flex flex-col gap-4">
                {paragraphs.map((p, idx) => (
                    <p
                        key={idx}
                        className="text-[14px] sm:text-[15.5px] lg:text-[17px] leading-relaxed text-[#b48a96] tracking-tight font-serif text-left"
                    >
                        {p}
                    </p>
                ))}
            </div>

            {/* Authors List with inline author.svg symbol */}
            <div className="flex items-center gap-0.5 mt-6 sm:mt-8 text-[13px] sm:text-[15px] text-[#b48a96]/80 font-serif select-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-current shrink-0"
                    fill="none"
                >
                    <path
                        d="M320 254.27c-4.5 51-40.12 80-80.55 80s-67.34-35.82-63.45-80 37.12-80 77.55-80 70.33 36 66.45 80z"
                        strokeWidth="32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M319.77 415.77c-28.56 12-47.28 14.5-79.28 14.5-97.2 0-169-78.8-160.49-176s94.31-176 191.51-176C381 78.27 441.19 150 432.73 246c-6.31 71.67-52.11 92.32-76.09 88.07-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25"
                        strokeWidth="32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span className="font-serif">Original Author{authors.length > 1 ? "s" : ""}:</span>
                <div className="flex items-center gap-2 flex-wrap font-serif ms-1.5">
                    {authors.map((author, idx) => {
                        const isLast = idx === authors.length - 1;
                        const nameEl = author.github ? (
                            <a
                                key={author.name}
                                href={author.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#f3d6df] underline underline-offset-[5px] decoration-dashed hover:decoration-solid decoration-[1.5px] decoration-white/70 transition-all duration-300 font-semibold"
                            >
                                {author.name}
                            </a>
                        ) : (
                            <span key={author.name} className="text-white underline underline-offset-[5px] decoration-dashed decoration-[1.5px] decoration-white/70 font-semibold">
                                {author.name}
                            </span>
                        );

                        return (
                            <span key={author.name} className="inline-flex items-center">
                                {nameEl}
                                {!isLast && <span className="text-[#b48a96]/80 ml-1.5 mr-0.5">,</span>}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export function ProjectPreview({ children, className = "", snap = true }: { children: React.ReactNode; className?: string; snap?: boolean }) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [showLeft, setShowLeft] = React.useState(false);
    const [showRight, setShowRight] = React.useState(false);

    const checkScroll = React.useCallback(() => {
        const c = containerRef.current;
        if (!c) return;
        const hasOverflow = c.scrollWidth > c.clientWidth;
        if (hasOverflow) {
            setShowLeft(c.scrollLeft > 10);
            setShowRight(c.scrollLeft + c.clientWidth < c.scrollWidth - 10);
        } else {
            setShowLeft(false);
            setShowRight(false);
        }
    }, []);

    React.useEffect(() => {
        const c = containerRef.current;
        if (!c) return;
        checkScroll();
        c.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);
        const obs = new MutationObserver(checkScroll);
        obs.observe(c, { childList: true, subtree: true });
        return () => {
            c.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
            obs.disconnect();
        };
    }, [checkScroll]);

    const handleScrollClick = (dir: "left" | "right") => {
        const c = containerRef.current;
        if (!c) return;
        const amount = c.clientWidth * 0.75;
        c.scrollTo({ left: c.scrollLeft + (dir === "left" ? -amount : amount), behavior: "smooth" });
    };

    return (
        <div className={`relative w-full group/preview ${className}`}>
            {/* Left chevron */}
            <button
                onClick={() => handleScrollClick("left")}
                aria-label="Scroll left"
                className={`absolute left-4 md:left-[8%] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white hover:bg-black/60 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl cursor-pointer ${showLeft ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
                    }`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Right chevron */}
            <button
                onClick={() => handleScrollClick("right")}
                aria-label="Scroll right"
                className={`absolute right-4 md:right-[8%] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white hover:bg-black/60 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl cursor-pointer ${showRight ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
                    }`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Scroll track */}
            <div
                ref={containerRef}
                className={`w-full overflow-x-auto no-scrollbar pb-8 scroll-smooth ${snap ? 'snap-x snap-proximity' : ''}`}
            >
                <div className="flex items-stretch gap-6 pl-8 md:pl-16 lg:pl-[12%] xl:pl-[15%] pr-8 md:pr-16 lg:pr-[12%] xl:pr-[15%] w-max">
                    {React.Children.map(children, (child) => {
                        if (!child) return null;
                        return (
                            <div className={`flex-none ${snap ? 'snap-center' : ''}`}>
                                {child}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export function ProjectPreviewTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-start justify-start mb-8 w-full select-none px-8 md:px-16 lg:px-[12%] xl:px-[15%]">
            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-title text-white flex items-baseline tracking-tight pb-2 pt-1 leading-normal">
                {children}
            </h2>
            {/* Visual bottom indicator scaled to match smaller title size */}
            <div className="mt-1.5 flex w-full max-w-[130px] sm:max-w-[170px] items-center gap-1.5 h-[3px]">
                <div className="h-full bg-white rounded-full w-[70%]" />
                <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[15%]" />
                <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[8%]" />
                <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[7%]" />
            </div>
        </div>
    );
}

export function ProjectPreviewGroup({
    title,
    children,
    className = ""
}: {
    title: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`flex flex-col gap-2 shrink-0 ${className}`}>
            {/* Group Title */}
            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-white/90 font-serif text-left pl-1 select-none tracking-tight">
                {title}
            </h3>

            {/* Gradient Border Carousel Container Wrapper */}
            <div className="relative rounded-[24px] p-[2px] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.65)] group/border shrink-0">
                {/* Outer Glowing Gradient Border */}
                <span className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-white/10 group-hover/border:from-white/35 group-hover/border:to-white/20 rounded-[24px] transition-all duration-500" />

                {/* Inner Glassmorphic Container (Transparent background) */}
                <div className="relative rounded-[22.8px] bg-background border border-white/5 backdrop-blur-xl p-2 sm:p-2 flex items-center h-full overflow-hidden">
                    <div className="flex items-stretch gap-2 sm:gap-2 shrink-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProjectAsset({
    type,
    src,
    caption,
    className = "w-[260px] sm:w-[320px] md:w-[380px]"
}: {
    type: "image" | "video";
    src: string;
    caption?: string;
    className?: string;
}) {
    return (
        <div className={`flex-none aspect-video rounded-2xl overflow-hidden relative shadow-[0_6px_20px_rgba(0,0,0,0.5)] border border-white/5 bg-black/30 group/asset ${className}`}>
            {type === "video" ? (
                <video
                    src={src}
                    controls
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-2xl"
                />
            ) : (
                <Image
                    src={src}
                    alt={caption || "Project preview asset"}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover rounded-2xl group-hover/asset:scale-[1.01] transition-transform duration-500"
                    priority
                />
            )}

            {/* Floating caption badge at bottom-left */}
            {caption && (
                <div
                    className="absolute bottom-4 left-4 z-10 bg-black/75 border border-white/10 backdrop-blur-md px-3 py-1 text-[10px] sm:text-[11px] font-serif text-white/90 rounded-full select-none shadow-lg tracking-wide"
                >
                    Fig: {caption}
                </div>
            )}
        </div>
    );
}

export interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
}

export interface ProjectVerticalStacksProps {
    tabs: TabItem[];
    className?: string;
}

export function ProjectVerticalStacks({ tabs, className = "" }: ProjectVerticalStacksProps) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [prevIndex, setPrevIndex] = React.useState(0);

    const handleTabClick = (index: number) => {
        if (index === activeIndex) return;
        setPrevIndex(activeIndex);
        setActiveIndex(index);
    };

    // Calculate direction:
    // "up" (index decreases, slide up) vs "down" (index increases, slide down)
    const direction = activeIndex > prevIndex ? "down" : "up";
    const activeTab = tabs[activeIndex];

    const slideVariants: Variants = {
        enter: (dir: "up" | "down") => ({
            y: dir === "up" ? 40 : -40,
            opacity: 0
        }),
        center: {
            y: 0,
            opacity: 1,
            transition: {
                y: { type: "spring" as const, stiffness: 350, damping: 30 },
                opacity: { duration: 0.25 }
            }
        },
        exit: (dir: "up" | "down") => ({
            y: dir === "up" ? -40 : 40,
            opacity: 0,
            transition: {
                y: { type: "spring" as const, stiffness: 350, damping: 30 },
                opacity: { duration: 0.2 }
            }
        })
    };

    return (
        <div className={`flex flex-col lg:flex-row gap-6 items-stretch w-full ${className}`}>
            {/* LHS Tabs List Panel */}
            <div className="relative rounded-[24px] p-[1.2px] group w-full lg:w-[260px] xl:w-[280px] shrink-0">
                {/* Outer Glowing Gradient Border */}
                <span className="absolute inset-0 bg-background rounded-[24px]" />

                {/* Inner glass panel */}
                <div className="relative rounded-[22.8px] bg-[#411F27]/60 border border-white/5 backdrop-blur-xl p-3 flex flex-col gap-1.5 w-full h-full min-h-[220px] lg:min-h-[340px]">
                    {tabs.map((tab, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabClick(idx)}
                                className={`relative block p-[1.5px] transition-all duration-300 group rounded-xl cursor-pointer w-full text-left outline-none ${isActive
                                        ? "bg-linear-to-br from-white/70 via-transparent to-white/40 shadow-lg opacity-100"
                                        : "bg-linear-to-br from-white/10 via-transparent to-white/5 hover:from-white/35 hover:to-white/20 opacity-50 hover:opacity-80"
                                    }`}
                            >
                                <span
                                    className={`relative flex items-center justify-between px-5 py-3 font-serif text-[14px] font-medium transition-all duration-300 select-none rounded-[11px] ${isActive
                                            ? "bg-[#4e1c26]/95 text-white font-bold"
                                            : "bg-transparent text-[#ffd4dc]/50 group-hover:text-white"
                                        }`}
                                >
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* RHS Active Content Container */}
            <div className="relative flex-1 rounded-[24px] p-[1.2px] group min-h-[300px] lg:min-h-[380px]">
                {/* Outer Glowing Gradient Border */}
                <span className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-white/10 rounded-[24px]" />

                {/* Inner glass panel with fixed height and scrollable content */}
                <div className="relative rounded-[22.8px] bg-[#411F27]/35 border border-white/5 backdrop-blur-xl p-4 sm:p-5 w-full h-[50vh] overflow-y-auto pr-2 flex flex-col justify-start">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeTab.id}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="w-full min-h-full flex flex-col gap-4"
                        >
                            {activeTab.content}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export interface ProjectHorizontalStacksProps {
    tabs: TabItem[];
    className?: string;
    align?: "left" | "center" | "right";
}

export function ProjectHorizontalStacks({ 
    tabs, 
    className = "", 
    align = "left" 
}: ProjectHorizontalStacksProps) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [prevIndex, setPrevIndex] = React.useState(0);

    const handleTabClick = (index: number) => {
        if (index === activeIndex) return;
        setPrevIndex(activeIndex);
        setActiveIndex(index);
    };

    const direction = activeIndex > prevIndex ? "right" : "left";
    const activeTab = tabs[activeIndex];

    const slideVariants: Variants = {
        enter: (dir: "left" | "right") => ({
            x: dir === "right" ? 40 : -40,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring" as const, stiffness: 350, damping: 30 },
                opacity: { duration: 0.25 }
            }
        },
        exit: (dir: "left" | "right") => ({
            x: dir === "right" ? -40 : 40,
            opacity: 0,
            transition: {
                x: { type: "spring" as const, stiffness: 350, damping: 30 },
                opacity: { duration: 0.2 }
            }
        })
    };

    const alignClasses = {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end"
    };

    return (
        <div className={`relative w-full rounded-[24px] p-[1.2px] group ${className}`}>
            {/* Outer Glowing Gradient Border */}
            <span className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-white/10 rounded-[24px]" />
            
            {/* Inner glass panel containing both tabs and content */}
            <div className="relative rounded-[22.8px] bg-[#411F27]/35 border border-white/5 backdrop-blur-xl p-4 sm:p-5 w-full flex flex-col gap-4">
                
                {/* Horizontal Tabs Header using ButtonGroup and Button widgets */}
                <div className={`flex items-center w-full ${alignClasses[align]}`}>
                    <ButtonGroup
                        selected={activeTab.id}
                        onSelect={(val) => {
                            const newIdx = tabs.findIndex(t => t.id === val);
                            if (newIdx !== -1) handleTabClick(newIdx);
                        }}
                        scaleOnHover={false}
                        size="sm"
                    >
                        {tabs.map((tab, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                                <Button 
                                    key={tab.id} 
                                    value={tab.id}
                                    className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                                >
                                    {tab.label}
                                </Button>
                            );
                        })}
                    </ButtonGroup>
                </div>

                {/* Content Area with smooth horizontal slide animation and fixed height scrollable content */}
                <div className="relative w-full h-[50vh] overflow-y-auto pr-2">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeTab.id}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="w-full min-h-full flex flex-col gap-4"
                        >
                            {activeTab.content}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
}
