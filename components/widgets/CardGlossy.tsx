"use client";

import React from "react";
import { BadgeGroup, Badge } from "./Badge";

interface CardGlossyProps {
  title: string;
  description: string;
  date: string;
  badges: string[];
  gradientDivider?: boolean;
  className?: string;
}

export default function CardGlossy({
  title,
  description,
  date,
  badges,
  gradientDivider = true,
  className = "",
}: CardGlossyProps) {
  return (
    <div className={`relative w-full max-w-[465px] rounded-[28px] bg-gradient-to-br from-[#a88b97]/80 via-[#6a4754]/40 to-[#a88b97]/80 p-[1.5px] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:rounded-[34px] flex flex-col ${className}`}>
      <div className="rounded-[26px] border border-white/5 bg-[#471824]/95 px-5 pb-5 pt-5 backdrop-blur-xl sm:rounded-[32px] sm:px-7 sm:pt-7 flex flex-col flex-1 h-full">
        
        {/* Top Content (Title + Description) */}
        <div>
          <h3 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-[#f3f0ef] sm:text-[28px] font-title truncate">
            {title}
          </h3>

          <p className="mt-4 text-left text-[14px] font-normal leading-relaxed tracking-[-0.01em] text-[#d7d0d2] sm:text-[15px] font-serif line-clamp-2">
            {description}
          </p>
        </div>

        {/* Bottom Content (Pushed to bottom) */}
        <div className="mt-auto pt-6">
          {/* Divider */}
          {gradientDivider ? (
            <div className="h-px w-full bg-gradient-to-r from-[#b998a5]/50 via-[#9a7383]/40 to-[#b998a5]/50" />
          ) : (
            <div className="h-px w-full bg-white/10" />
          )}

          {/* Footer */}
          <div className="mt-5 flex items-end justify-between gap-3">
            <BadgeGroup className="origin-left scale-[1]">
              {badges.map((badge, index) => (
                <Badge key={index}>{badge}</Badge>
              ))}
            </BadgeGroup>

            <div className="shrink-0 pb-[2px] text-[12px] font-normal tracking-[-0.01em] text-[#d7d0d2] sm:text-[13px] font-serif">
              {date}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
