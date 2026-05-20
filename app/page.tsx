import Image from "next/image";
import NextLink from "next/link";
import { ButtonGroup, Link as CustomLink } from "@/components/widgets/Button";

export default function Home() {
    return (
        <main className="w-full grow relative overflow-hidden flex flex-col justify-center bg-background min-h-[calc(100vh-100px)]">
            
            {/* Massive Background Flowers */}
            <div className="fixed top-[30%] left-0 -translate-x-[55%] -translate-y-1/2 pointer-events-none z-0">
                <img
                    src="/flower_pattern.png"
                    alt=""
                />
            </div>

            <div className="fixed bottom-0 right-0 translate-x-[35%] translate-y-[25%] pointer-events-none z-0">
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
                        <span className="text-white font-normal">pixel</span>
                        <span className="gradient-text font-extrabold pl-1">Threader</span>
                        <span className="text-magenta font-black">.</span>
                    </h1>

                    {/* Capsule Tag Pills */}
                    <div className="flex flex-wrap gap-4 mt-8 mb-10">
                        {["Full-Stack", "UI / UX", "AI / ML"].map((tag) => (
                            <span
                                key={tag}
                                className="px-6 py-1.5 rounded-full border border-white/20 text-white/80 font-serif italic text-sm md:text-[15px] cursor-default select-none backdrop-blur-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Description Paragraph */}
                    <p className="font-serif text-white/70 text-base md:text-lg leading-relaxed max-w-[540px] mb-12">
                        AI systems, full-stack apps, and random ideas that turn into real products. 
                        Mostly working with deep learning, automation, and backend systems while shipping things fast.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-4">
                        <ButtonGroup gap="gap-[16px] sm:gap-[24px]">
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