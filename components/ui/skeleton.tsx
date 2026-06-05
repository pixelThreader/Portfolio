import { cn } from "@/lib/utils"
import React from "react"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-lg bg-white/5", className)}
      {...props}
    />
  )
}

// 1. CardGlossySkeleton - mirrors CardGlossy.tsx structure
export function CardGlossySkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={cn("relative w-full max-w-[465px] rounded-[28px] bg-linear-to-br from-[#a88b97]/40 via-[#6a4754]/20 to-[#a88b97]/40 p-[1.5px] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:rounded-[34px] flex flex-col", className)}>
      <div className="rounded-[26px] border border-white/5 bg-[#471824]/90 px-5 pb-5 pt-5 backdrop-blur-xl sm:rounded-[32px] sm:px-7 sm:pt-7 flex flex-col flex-1 h-full min-h-[220px]">
        <Skeleton className="h-7 w-3/4 bg-white/10 mb-4" />
        <Skeleton className="h-4 w-full bg-white/5 mb-2" />
        <Skeleton className="h-4 w-5/6 bg-white/5 mb-2" />
        <Skeleton className="h-4 w-2/3 bg-white/5" />
        
        {/* Footer */}
        <div className="mt-auto pt-6">
          <div className="h-px w-full bg-linear-to-r from-[#b998a5]/30 via-[#9a7383]/20 to-[#b998a5]/30" />
          <div className="mt-5 flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <Skeleton className="h-6 w-12 rounded-full bg-white/5" />
              <Skeleton className="h-6 w-16 rounded-full bg-white/5" />
            </div>
            <Skeleton className="h-5 w-20 bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  )
}

// 2. JournalCardSkeleton - mirrors JournalCard.tsx structure
export function JournalCardSkeleton({ className = "", imageClassName = "" }: { className?: string, imageClassName?: string }) {
  return (
    <div className={cn("relative w-full max-w-[390px] rounded-[30px] bg-linear-to-br from-[#A88A96]/50 via-[#714853]/25 to-[#B296A2]/50 p-[1.5px]", className)}>
      <div className="rounded-[28px] bg-[#4A1D28]/95 p-3 backdrop-blur-xl flex flex-col h-full">
        {/* Image Area */}
        <div className={cn("relative h-[285px] w-full shrink-0 overflow-hidden rounded-[22px] bg-linear-to-br from-[#004B72]/20 via-[#001F5C]/20 to-[#34114A]/20 flex items-center justify-center animate-pulse", imageClassName)}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,0,119,0.08),transparent_40%)] pointer-events-none" />
        </div>
        
        {/* Content */}
        <div className="px-2 pb-2 pt-4 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4">
            <Skeleton className="h-6 w-2/3 bg-white/10" />
            <Skeleton className="h-5 w-12 bg-white/5 shrink-0" />
          </div>
          
          <Skeleton className="h-4 w-full bg-white/5 mt-3" />
          <Skeleton className="h-4 w-4/5 bg-white/5 mt-2" />
          
          {/* Footer */}
          <div className="mt-auto pt-7 flex items-center justify-between gap-4">
            <Skeleton className="h-4 w-28 bg-white/5" />
            <Skeleton className="h-4 w-16 bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  )
}

// 3. ProjectCardSkeleton - mirrors Projects.tsx (Project structure)
export function ProjectCardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={cn("flex flex-col lg:flex-row lg:even:flex-row-reverse items-center gap-8 lg:gap-14 w-full", className)}>
      {/* LHS - Card wrapper containing ProjectDetail */}
      <div className="w-full lg:flex-[0_0_58%]">
        <div className="relative w-full rounded-[24px] sm:rounded-[34px] border border-white/5 bg-[#411F27]/80 overflow-hidden">
          <div className="px-4 sm:px-8 lg:px-10 py-5 sm:py-8 flex flex-col">
            {/* Header: Logo + Title + GitHub + Share */}
            <div className="flex items-center gap-2.5 sm:gap-4 mb-3.5 sm:mb-6">
              <Skeleton className="h-8 w-8 sm:h-12 sm:w-12 rounded-lg sm:rounded-2xl bg-white/5 shrink-0" />
              <Skeleton className="h-6 sm:h-8 w-1/3 bg-white/10 rounded" />
              <div className="ml-auto flex items-center gap-3.5 sm:gap-5">
                <Skeleton className="h-5 w-5 bg-white/5" />
                <Skeleton className="h-5 w-5 bg-white/5" />
              </div>
            </div>

            {/* Description */}
            <Skeleton className="h-4 w-full bg-white/5 mb-2" />
            <Skeleton className="h-4 w-11/12 bg-white/5 mb-2" />
            <Skeleton className="h-4 w-4/5 bg-white/5 mb-6" />

            {/* Meta Rows */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Row 1: Authors */}
              <div className="grid grid-cols-[auto_1fr] gap-x-3 sm:gap-x-4 items-center">
                <div className="w-[130px] sm:w-[170px] lg:w-[190px] flex items-center gap-2">
                  <Skeleton className="w-4 h-4 bg-white/5 shrink-0" />
                  <Skeleton className="h-4 w-16 bg-white/5" />
                </div>
                <Skeleton className="h-4 w-24 bg-white/10" />
              </div>
              {/* Row 2: Commit */}
              <div className="grid grid-cols-[auto_1fr] gap-x-3 sm:gap-x-4 items-center">
                <div className="w-[130px] sm:w-[170px] lg:w-[190px] flex items-center gap-2">
                  <Skeleton className="w-4 h-4 bg-white/5 shrink-0" />
                  <Skeleton className="h-4 w-16 bg-white/5" />
                </div>
                <Skeleton className="h-4 w-36 bg-white/5" />
              </div>
              {/* Row 3: License */}
              <div className="grid grid-cols-[auto_1fr] gap-x-3 sm:gap-x-4 items-center">
                <div className="w-[130px] sm:w-[170px] lg:w-[190px] flex items-center gap-2">
                  <Skeleton className="w-4 h-4 bg-white/5 shrink-0" />
                  <Skeleton className="h-4 w-16 bg-white/5" />
                </div>
                <Skeleton className="h-4 w-20 bg-white/5" />
              </div>
            </div>

            {/* Learn More Button */}
            <div className="mt-6 sm:mt-8 flex justify-end">
              <Skeleton className="h-8 w-24 bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* RHS - Centered preview logo glow (hidden on mobile/tablet) */}
      <div className="hidden lg:flex flex-1 items-center justify-center w-full">
        <div className="w-48 h-48 rounded-full bg-white/5 blur-xl animate-pulse shrink-0" />
      </div>
    </div>
  )
}

// 4. TimelineSkeleton - mirrors Timeline.tsx experience timeline
export function TimelineSkeleton({ className = "", count = 3 }: { className?: string, count?: number }) {
  return (
    <div className={cn("w-full relative pl-10 pr-4 md:px-0", className)}>
      {Array.from({ length: count }).map((_, index) => {
        const isLast = index === count - 1;
        return (
          <div key={index} className="relative flex md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-24 w-full items-center pb-6 last:pb-0">
            {/* Connector */}
            <div className="absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 flex flex-col items-center z-10 w-8">
              {index > 0 ? (
                <div className="w-[2px] grow bg-linear-to-b from-[#a88b97]/10 via-white/5 to-[#a88b97]/10" />
              ) : (
                <div className="w-[2px] grow bg-transparent" />
              )}
              <div className="relative w-5 h-5 rounded-full bg-linear-to-br from-[#a88b97]/50 via-[#6a4754]/20 to-[#a88b97]/50 p-[1.5px] flex items-center justify-center z-10 shrink-0">
                <div className="w-full h-full rounded-full bg-[#471824] flex items-center justify-center" />
              </div>
              {!isLast ? (
                <>
                  <div className="w-[2px] grow bg-linear-to-b from-[#a88b97]/10 via-white/5 to-[#a88b97]/10" />
                  <div className="w-[2px] h-6 shrink-0 bg-[#a88b97]/10" />
                </>
              ) : (
                <div className="w-[2px] grow bg-transparent" />
              )}
            </div>

            {/* Card Content */}
            <div className={cn(
              "w-full rounded-[20px] border border-white/5 bg-[#411F27]/30 p-3 md:p-4 backdrop-blur-md shadow-lg flex flex-col justify-between z-20",
              index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'
            )}>
              <div className="w-full flex flex-col text-left">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Skeleton className="h-5 w-1/3 bg-white/10 rounded" />
                  <Skeleton className="h-5 w-24 bg-white/5 rounded-full" />
                </div>
                
                {/* Logo & Company Name */}
                <div className="flex items-center gap-2 mt-2">
                  <Skeleton className="w-6 h-6 rounded-full bg-white/5 shrink-0" />
                  <Skeleton className="h-4 w-28 bg-white/5 rounded" />
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-linear-to-r from-[#b998a5]/10 via-[#9a7383]/10 to-[#b998a5]/10 my-2.5 md:my-3" />

              {/* Actions */}
              <div className="flex justify-end w-full">
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16 bg-white/5 rounded" />
                  <Skeleton className="h-6 w-16 bg-white/5 rounded" />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// 5. AccordionSkeleton - mirrors Accordion.tsx education timeline
export function AccordionSkeleton({ className = "", count = 2 }: { className?: string, count?: number }) {
  return (
    <div className={cn("w-full flex flex-col", className)}>
      {Array.from({ length: count }).map((_, index) => {
        const isLast = index === count - 1;
        return (
          <div key={index} className="w-full flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-start text-left pl-6 md:pl-8 relative pb-12 last:pb-0">
            {/* Connector */}
            <div className="absolute left-[-16px] top-0 bottom-0 flex flex-col items-center z-10 w-8">
              {index > 0 ? (
                <div className="w-[2px] h-3 shrink-0 bg-[#a88b97]/10" />
              ) : (
                <div className="w-[2px] h-3 shrink-0 bg-transparent" />
              )}
              <div className="relative w-5 h-5 rounded-full bg-linear-to-br from-[#a88b97]/50 via-[#6a4754]/20 to-[#a88b97]/50 p-[1.5px] flex items-center justify-center z-10 shrink-0">
                <div className="w-full h-full rounded-full bg-[#471824] flex items-center justify-center" />
              </div>
              {!isLast ? (
                <div className="w-[2px] grow bg-linear-to-b from-[#a88b97]/10 via-white/5 to-[#a88b97]/10" />
              ) : (
                <div className="w-[2px] grow bg-transparent" />
              )}
            </div>

            {/* Left side duration */}
            <div className="md:col-span-3 flex flex-col pt-1">
              <Skeleton className="h-6 w-20 bg-white/10 rounded" />
              <Skeleton className="h-3 w-20 bg-white/5 rounded mt-2" />
            </div>

            {/* Right side details */}
            <div className="md:col-span-9 flex flex-col gap-4 w-full">
              <div>
                <Skeleton className="h-6 sm:h-8 w-2/3 bg-white/10 rounded" />
                <Skeleton className="h-4 sm:h-5 w-1/3 bg-white/5 rounded mt-1.5" />
              </div>

              {/* Specialization */}
              <div className="flex flex-col gap-1.5">
                <Skeleton className="h-3 w-24 bg-white/5 rounded" />
                <Skeleton className="h-4 w-5/6 bg-white/5 rounded" />
              </div>

              {/* Electives */}
              <div className="flex flex-col gap-2 mt-1">
                <Skeleton className="h-3 w-24 bg-white/5 rounded" />
                <div className="flex flex-wrap gap-1.5">
                  <Skeleton className="h-5 w-16 bg-white/5 rounded-full" />
                  <Skeleton className="h-5 w-20 bg-white/5 rounded-full" />
                  <Skeleton className="h-5 w-14 bg-white/5 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// 6. ProjectDetailSkeleton - mirrors /projects/[id] detail layout
export function ProjectDetailSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={cn("w-full flex flex-col gap-6", className)}>
      {/* Header card skeleton */}
      <div className="relative w-full rounded-[24px] p-[1.2px] bg-linear-to-br from-white/10 via-transparent to-white/5">
        <div className="relative rounded-[22.8px] bg-[#411F27]/90 border border-white/5 backdrop-blur-xl px-4 py-3 sm:px-6 sm:py-3.5 flex items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
            <Skeleton className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-white/5 shrink-0" />
            <div className="flex flex-col min-w-0 flex-1">
              <Skeleton className="h-5 sm:h-6 w-48 bg-white/10 rounded" />
              <Skeleton className="h-3 sm:h-4 w-64 bg-white/5 rounded mt-1.5" />
            </div>
          </div>
          <div className="flex items-center gap-4.5 sm:gap-6 shrink-0">
            <Skeleton className="h-5 w-5 bg-white/5 rounded" />
            <Skeleton className="h-5 w-5 bg-white/5 rounded" />
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="sticky top-[96px] z-40 w-full py-4 bg-background/50 backdrop-blur-md flex gap-2 overflow-x-auto no-scrollbar">
        <Skeleton className="h-8 w-16 bg-white/5 rounded-lg shrink-0" />
        <Skeleton className="h-8 w-20 bg-white/5 rounded-lg shrink-0" />
        <Skeleton className="h-8 w-16 bg-white/5 rounded-lg shrink-0" />
        <Skeleton className="h-8 w-20 bg-white/5 rounded-lg shrink-0" />
        <Skeleton className="h-8 w-24 bg-white/5 rounded-lg shrink-0" />
      </div>

      {/* Description & metadata */}
      <div className="flex flex-col w-full mt-4">
        <Skeleton className="h-4 w-full bg-white/5 mb-2.5" />
        <Skeleton className="h-4 w-11/12 bg-white/5 mb-2.5" />
        <Skeleton className="h-4 w-4/5 bg-white/5 mb-2.5" />
        <Skeleton className="h-4 w-full bg-white/5 mb-6" />

        {/* Authors row */}
        <div className="flex items-center gap-2 text-[#b48a96]/80 mt-2">
          <Skeleton className="w-5 h-5 rounded-full bg-white/5 shrink-0" />
          <Skeleton className="h-4 w-32 bg-white/5" />
          <Skeleton className="h-4 w-24 bg-white/10 rounded ml-1" />
        </div>
      </div>

      {/* Previews Carousel */}
      <div className="w-full py-12 flex flex-col gap-6">
        <div className="flex flex-col items-start px-8 md:px-16 lg:px-[12%] xl:px-[15%]">
          <Skeleton className="h-8 w-44 bg-white/10 rounded" />
          <Skeleton className="h-1 w-24 bg-white/5 rounded mt-2.5" />
        </div>
        <div className="flex gap-6 pl-8 md:pl-16 lg:pl-[12%] xl:pl-[15%] overflow-x-auto no-scrollbar py-2">
          <Skeleton className="w-[260px] sm:w-[320px] aspect-video bg-white/5 rounded-2xl shrink-0" />
          <Skeleton className="w-[260px] sm:w-[320px] aspect-video bg-white/5 rounded-2xl shrink-0" />
          <Skeleton className="w-[260px] sm:w-[320px] aspect-video bg-white/5 rounded-2xl shrink-0" />
        </div>
      </div>
    </div>
  )
}

export { Skeleton }
