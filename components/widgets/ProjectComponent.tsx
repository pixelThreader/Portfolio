"use client";

import React from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ButtonGroup, Link as CustomLink } from "@/components/widgets/Button";

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
