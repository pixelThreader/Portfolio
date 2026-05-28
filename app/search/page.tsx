import React, { Suspense } from "react";
import { Metadata } from "next";
import SearchPageClient from "./SearchPageClient";

// SEO Best Practices - Titles & Meta Descriptions
export const metadata: Metadata = {
  title: "Search Results | pixelThreader",
  description: "Search across pixelThreader's portfolio projects, blog updates, system architecture journals, and documentation guides instantly.",
  keywords: ["Search", "pixelThreader Portfolio", "AI Projects", "Tech Blog", "System Architecture"],
};

// Elegant theme-matching skeleton loader fallback during suspense resolution
function SearchSuspenseFallback() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12 flex flex-col z-10 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[250px] bg-radial-gradient(circle, rgba(188, 19, 254, 0.08) 0%, transparent 70%) blur-3xl pointer-events-none -z-10" />

      {/* Title skeleton */}
      <div className="mb-10 text-center sm:text-left select-none animate-pulse">
        <div className="h-12 bg-white/10 rounded-md w-48 sm:w-64" />
        <div className="h-4 bg-white/5 rounded-md w-72 sm:w-96 mt-4" />
      </div>

      {/* Glossy Search Bar skeleton */}
      <div className="w-full max-w-3xl mx-auto mb-12 relative z-20 animate-pulse">
        <div className="rounded-[24px] bg-[#471824]/90 border border-white/5 px-5 py-4 h-[60px]" />
      </div>

      {/* Tabs and Controls skeleton */}
      <div className="w-full border-b border-white/5 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-pulse">
        <div className="h-10 bg-white/10 rounded-xl w-80" />
        <div className="h-6 bg-white/5 rounded-md w-28" />
      </div>

      {/* Grid skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative w-full max-w-[465px] h-[220px] rounded-[34px] bg-white/2 border border-white/5 p-7 flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-3 w-full">
              <div className="h-5 bg-white/10 rounded-md w-1/3" />
              <div className="h-4 bg-white/5 rounded-md w-3/4" />
              <div className="h-4 bg-white/5 rounded-md w-1/2" />
            </div>
            <div className="flex items-end justify-between w-full mt-6">
              <div className="h-4 bg-white/10 rounded-md w-20" />
              <div className="h-4 bg-white/5 rounded-md w-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="w-full relative overflow-x-hidden bg-background min-h-screen">
      
      {/* Massive Background flower patterns matching other page layouts */}
      <div className="fixed top-0 left-0 -translate-x-[50%] -translate-y-1/2 pointer-events-none z-0 opacity-40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/flower_pattern.png"
          alt=""
        />
      </div>

      <div className="fixed bottom-0 right-0 translate-x-[50%] translate-y-[10%] pointer-events-none z-0 opacity-40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/flower_pattern.png"
          alt=""
        />
      </div>

      <Suspense fallback={<SearchSuspenseFallback />}>
        <SearchPageClient />
      </Suspense>
      
    </div>
  );
}
