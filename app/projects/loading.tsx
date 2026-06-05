import React from "react"
import { GlassyHeroSection } from "@/components/widgets/GlassyHeroSection"
import {
    CarouselSection,
    CarouselSectionTitle,
    Highlight,
    CarouselContent,
    CarouselItem
} from "@/components/widgets/CarouselSection"
import { JournalCardSkeleton } from "@/components/ui/skeleton"

export default function ProjectsLoading() {
    return (
        <div className="w-full relative overflow-x-hidden bg-background">
            <GlassyHeroSection>
                <h1 className="font-title text-[56px] sm:text-[76px] md:text-[88px] font-bold tracking-tight select-none">
                    <span className="text-white">Projects</span>
                    <span className="brand-gradient font-bold ml-[2px]">.</span>
                </h1>
            </GlassyHeroSection>

            {/* Featured Builds Section */}
            <CarouselSection gap="pt-8 pb-4 sm:pt-12 sm:pb-6">
                <CarouselSectionTitle size="md" position="left">
                    Featured <Highlight>Builds</Highlight>
                </CarouselSectionTitle>
                <CarouselContent>
                    {[1, 2, 3].map((_, idx) => (
                        <CarouselItem key={idx} className="w-[230px] sm:w-[300px] h-full flex">
                            <JournalCardSkeleton 
                                className="w-full h-full" 
                                imageClassName="h-[160px]! sm:h-[210px]!"
                            />
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
                    {[1, 2, 3].map((_, idx) => (
                        <CarouselItem key={idx} className="w-[230px] sm:w-[300px] h-full flex">
                            <JournalCardSkeleton 
                                className="w-full h-full" 
                                imageClassName="h-[160px]! sm:h-[210px]!"
                            />
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
                    {[1, 2, 3].map((_, idx) => (
                        <CarouselItem key={idx} className="w-[230px] sm:w-[300px] h-full flex">
                            <JournalCardSkeleton 
                                className="w-full h-full" 
                                imageClassName="h-[160px]! sm:h-[210px]!"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </CarouselSection>
        </div>
    )
}
