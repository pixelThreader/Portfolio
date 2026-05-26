"use client";

import React from 'react';
import { ButtonGroup, Link as CustomLink } from "./Button";
import { BadgeGroup, Badge } from "./Badge";

export interface TimelineItem {
    company_name: string;
    role: string;
    start_time: string;
    end_time: string;
    certificate_url?: string;
    experience_url?: string;
    logo_url?: string;
}

export interface TimelineProps {
    data: TimelineItem[];
    className?: string;
}

export function Timeline({ data, className = "" }: TimelineProps) {
    if (!data || data.length === 0) return null;

    return (
        <div className={`w-full relative pl-10 pr-4 md:px-0 ${className}`}>
            {data.map((item, index) => {
                const isLast = index === data.length - 1;
                return (
                    <div 
                        key={index} 
                        className="relative flex md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-24 w-full items-center pb-6 last:pb-0 group"
                    >
                        {/* Dot column & Line connector */}
                        <div className="absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 flex flex-col items-center z-10 w-8">
                            {/* Upper connecting line */}
                            {index > 0 ? (
                                <div className="w-[2px] grow bg-linear-to-b from-[#a88b97]/30 via-white/10 to-[#a88b97]/30" />
                            ) : (
                                <div className="w-[2px] grow bg-transparent" />
                            )}
                            
                            {/* Static Glossy Timeline Dot */}
                            <div className="relative w-5 h-5 rounded-full bg-linear-to-br from-[#a88b97] via-[#6a4754]/40 to-[#a88b97] p-[1.5px] flex items-center justify-center z-10 shrink-0">
                                <div className="w-full h-full rounded-full bg-[#471824] flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-[#ffd4dc]" />
                                </div>
                            </div>
                            
                            {/* Lower connecting line + padding offset spacer */}
                            {!isLast ? (
                                <>
                                    <div className="w-[2px] grow bg-linear-to-b from-[#a88b97]/30 via-white/10 to-[#a88b97]/30" />
                                    <div className="w-[2px] h-6 shrink-0 bg-linear-to-b from-[#a88b97]/30 to-[#a88b97]/30" />
                                </>
                            ) : (
                                <div className="w-[2px] grow bg-transparent" />
                            )}
                        </div>

                        {/* Glossy Card Content for Timeline Item */}
                        <div 
                            className={`w-full rounded-[20px] border border-white/5 bg-[#411F27]/50 p-3 md:p-4 backdrop-blur-md shadow-lg flex flex-col justify-between transition-all duration-300 group-hover:bg-[#411F27]/75 group-hover:border-white/10 z-20 
                                ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}
                            `}
                        >
                            {/* Card Body */}
                            <div className="w-full flex flex-col text-left">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <h4 className="font-title text-[17px] md:text-[18px] text-white tracking-tight leading-snug font-bold">
                                        {item.role}
                                    </h4>
                                    <BadgeGroup>
                                        <Badge>{item.start_time} — {item.end_time}</Badge>
                                    </BadgeGroup>
                                </div>
                                
                                {/* Company Logo + Name Container */}
                                <div className="flex items-center gap-2 mt-2 select-none">
                                    {item.logo_url ? (
                                        <div className="w-6 h-6 rounded-full overflow-hidden border border-white/10 shrink-0 bg-[#3a141d] flex items-center justify-center">
                                            {(item.logo_url.startsWith('http') || item.logo_url.startsWith('/')) ? (
                                                <img src={item.logo_url} alt={item.company_name} className="w-full h-full object-cover" />
                                            ) : (
                                                <span className="text-[10px] font-title text-[#ffd4dc] font-bold leading-none">{item.logo_url}</span>
                                            )}
                                        </div>
                                    ) : (
                                        /* Default circular initial logo fallback */
                                        <div className="w-6 h-6 rounded-full border border-white/10 bg-[#3a141d] flex items-center justify-center shrink-0">
                                            <span className="text-[10px] font-title text-[#ffd4dc]/70 font-semibold leading-none">
                                                {item.company_name ? item.company_name.charAt(0).toUpperCase() : 'C'}
                                            </span>
                                        </div>
                                    )}
                                    <p className="font-serif text-[#ffd4dc]/95 text-[13px] md:text-[14px] tracking-wide font-normal">
                                        {item.company_name}
                                    </p>
                                </div>
                            </div>

                            {/* Premium Subtle Divider */}
                            <div className="h-px w-full bg-linear-to-r from-[#b998a5]/20 via-[#9a7383]/15 to-[#b998a5]/20 my-2.5 md:my-3" />

                            {/* Card Footer with CTAs in Bottom Right */}
                            <div className="flex justify-end w-full">
                                <ButtonGroup gap="gap-[8px]" size="sm" scaleOnHover={false}>
                                    {item.certificate_url && (
                                        <CustomLink href={item.certificate_url} target="_blank" rel="noopener noreferrer">
                                            Certificate
                                        </CustomLink>
                                    )}
                                    {item.experience_url && (
                                        <CustomLink href={item.experience_url} target="_blank" rel="noopener noreferrer">
                                            Details
                                        </CustomLink>
                                    )}
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Timeline;
