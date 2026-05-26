"use client";

import React, { ReactNode } from "react";

export function GlassyHeroSection({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <section className={`w-full px-8 md:px-16 lg:px-[12%] xl:px-[15%] pt-12 pb-16 relative z-10 ${className}`}>
      {/* Background soft glowing spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[300px] bg-radial-gradient(circle, rgba(188, 19, 254, 0.1) 0%, transparent 70%) blur-3xl pointer-events-none -z-10" />

      {/* Elegant, high-fidelity liquid-glass hero container */}
      <div className="relative w-full mx-auto rounded-[32px] sm:rounded-[48px] bg-linear-to-br from-white/20 via-transparent to-white/10 p-[1px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="rounded-[30.5px] border border-white/5 bg-white/[0.02] py-16 sm:py-24 md:py-28 px-12 sm:px-20 md:px-24 backdrop-blur-xl sm:rounded-[46.5px] flex flex-col items-center justify-center text-center relative overflow-hidden">
          
          {/* Subtle reflection overlay */}
          <span className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          
          {children || (
            <h1 className="font-title text-[56px] sm:text-[76px] md:text-[88px] font-bold tracking-tight select-none">
              <span className="text-white">About</span>
              <span className="brand-gradient font-bold ml-[2px]">.</span>
            </h1>
          )}
        </div>
      </div>
    </section>
  );
}

export default GlassyHeroSection;
