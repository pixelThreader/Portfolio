import Image from "next/image";
import { ButtonGroup, Link as CustomLink } from "@/components/widgets/Button";
import { BadgeGroup, Badge } from "@/components/widgets/Badge";

export default function Home() {
    return (
        <main className="w-full grow relative overflow-hidden flex flex-col justify-center bg-background min-h-[calc(100vh-100px)]">
            
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

            {/* Main Content Grid */}
            <div className="w-full px-8 md:px-16 lg:px-[12%] xl:px-[15%] flex flex-col lg:flex-row items-center justify-between gap-12 z-10 py-12 relative">
                
                {/* Left Column: Hero Copy */}
                <div className="flex flex-col items-start text-left max-w-2xl">
                    
                    {/* Big Heading */}
                    <h1 className="font-title text-[56px] sm:text-[76px] lg:text-[92px] font-bold leading-none tracking-tight select-none whitespace-nowrap">
                        <span className="text-white font-bold">pixel</span>
                        <span className="brand-gradient font-bold px-1">Threader</span>
                        <span className="text-white">.</span>
                    </h1>

                    {/* Capsule Tag Pills */}
                    <div className="mt-8 mb-10">
                        <BadgeGroup>
                            {["Full-Stack", "UI / UX", "AI / ML"].map((tag) => (
                                <Badge key={tag}>
                                    {tag}
                                </Badge>
                            ))}
                        </BadgeGroup>
                    </div>

                    {/* Description Paragraph */}
                    <p className="font-serif text-white/70 text-base md:text-lg leading-relaxed max-w-[540px] mb-12">
                        AI systems, full-stack apps, and random ideas that turn into real products. 
                        Mostly working with deep learning, automation, and backend systems while shipping things fast.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-4">
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
                <div className="flex justify-center items-center lg:justify-end">
                    <div className="relative w-[620px] h-[620px]">
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
        </main>
    );
}