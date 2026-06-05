import Image from "next/image"
import React from "react"
import { ButtonGroup, Link as CustomLink } from "@/components/widgets/Button"
import { BadgeGroup, Badge } from "@/components/widgets/Badge"
import {
    CarouselSection,
    CarouselSectionTitle,
    Highlight,
    CarouselContent,
    CarouselItem
} from "@/components/widgets/CarouselSection"
import {
    Section,
    SectionTitle,
    SectionContent
} from "@/components/widgets/Section"
import { CardGlossySkeleton, JournalCardSkeleton, ProjectCardSkeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
    return (
        <div className="w-full relative overflow-x-hidden bg-background">
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

            {/* Hero Section */}
            <section className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center relative z-10">
                <div className="w-full px-8 md:px-16 lg:px-[12%] xl:px-[15%] flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-12 py-12">
                    
                    {/* Left Column: Hero Copy */}
                    <div className="flex flex-col items-start md:items-center lg:items-start text-left md:text-center lg:text-left w-full max-w-2xl md:mx-auto lg:mx-0">
                        <h1 className="font-title text-[40px] min-[400px]:text-[48px] sm:text-[64px] md:text-[76px] lg:text-[72px] xl:text-[80px] font-bold leading-none tracking-tight select-none flex md:justify-center lg:justify-start whitespace-nowrap">
                            <span className="text-white font-bold">pixel</span><span className="brand-gradient font-bold ml-[2px]">Threader</span><span className="text-white">.</span>
                        </h1>

                        <div className="mt-8 mb-10 flex md:justify-center lg:justify-start w-full">
                            <BadgeGroup>
                                {["Full-Stack", "UI / UX", "AI / ML"].map((tag) => (
                                    <Badge key={tag}>{tag}</Badge>
                                ))}
                            </BadgeGroup>
                        </div>

                        <p className="font-serif text-white/70 text-base md:text-lg leading-relaxed max-w-[540px] mb-12 md:mx-auto lg:mx-0">
                            AI systems, full-stack apps, and random ideas that turn into real products.
                            Mostly working with deep learning, automation, and backend systems while shipping things fast.
                        </p>

                        <div className="mt-4 flex md:justify-center lg:justify-start w-full">
                            <ButtonGroup gap="gap-[8px] sm:gap-[12px]">
                                {["Explore", "Blogs", "Projects"].map((btn) => (
                                    <CustomLink key={btn} href={`#${btn.toLowerCase()}`}>
                                        {btn}
                                    </CustomLink>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>

                    {/* Right Column: Profile Image */}
                    <div className="flex w-full lg:w-1/2 justify-center items-center lg:justify-end lg:mt-0 shrink-0">
                        <div className="relative w-full max-w-[320px] md:max-w-[480px] lg:max-w-[620px] aspect-square">
                            <Image
                                src="/Profile.png"
                                alt="pixelThreader Profile"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Updates Section */}
            <CarouselSection>
                <CarouselSectionTitle>
                    Latest <Highlight>Updates</Highlight>
                </CarouselSectionTitle>
                <CarouselContent>
                    {[1, 2, 3].map((_, idx) => (
                        <CarouselItem key={idx} className="w-[320px] sm:w-[465px] h-full flex">
                            <CardGlossySkeleton className="w-full h-full" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </CarouselSection>

            {/* Blogs & Journal Section */}
            <CarouselSection>
                <CarouselSectionTitle>
                    Blogs & <Highlight>Journal</Highlight>
                </CarouselSectionTitle>
                <CarouselContent>
                    {[1, 2, 3].map((_, idx) => (
                        <CarouselItem key={idx} className="w-[300px] sm:w-[390px] h-full flex">
                            <JournalCardSkeleton className="w-full h-full" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </CarouselSection>

            {/* Selected Projects Section */}
            <Section>
                <SectionTitle id="projects">
                    Latest <Highlight>Projects</Highlight>
                </SectionTitle>
                <SectionContent>
                    <div className="flex flex-col gap-6 sm:gap-20 w-full">
                        {[1, 2].map((_, idx) => (
                            <ProjectCardSkeleton key={idx} />
                        ))}
                    </div>
                </SectionContent>
            </Section>
        </div>
    )
}
