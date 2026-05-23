import Image from "next/image";
import { ButtonGroup, Link as CustomLink } from "@/components/widgets/Button";
import { BadgeGroup, Badge } from "@/components/widgets/Badge";
import { 
  CarouselSection, 
  CarouselSectionTitle, 
  Highlight, 
  CarouselContent, 
  CarouselItem 
} from "@/components/widgets/CarouselSection";
import CardGlossy from "@/components/widgets/CardGlossy";

export default function Home() {
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
                {/* Main Content Grid */}
                <div className="w-full px-8 md:px-16 lg:px-[12%] xl:px-[15%] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 py-12">
                
                {/* Left Column: Hero Copy */}
                <div className="flex flex-col items-start text-left w-full max-w-2xl">
                    
                    {/* Big Heading */}
                    <h1 className="font-title text-[40px] min-[400px]:text-[48px] sm:text-[64px] md:text-[76px] lg:text-[92px] font-bold leading-none tracking-tight select-none flex flex-wrap">
                        <span className="text-white font-bold">pixel</span><span className="brand-gradient font-bold ml-[2px]">Threader</span><span className="text-white">.</span>
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
                <div className="flex w-full lg:w-1/2 justify-center items-center lg:justify-end mt-12 lg:mt-0 shrink-0">
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
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <CarouselItem key={item}>
                            <div className="w-full h-64 glass rounded-[2rem] flex flex-col p-6 items-center justify-center text-white/50 border-white/5 relative overflow-hidden group hover:border-magenta/30 transition-colors">
                                <span className="text-xl font-title">{item}</span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </CarouselSection>

            {/* Featured Articles Section (Second Carousel with 12 Glossy Cards) */}
            <CarouselSection>
                <CarouselSectionTitle>
                    Featured <Highlight>Writing</Highlight>
                </CarouselSectionTitle>
                <CarouselContent>
                    {[
                        {
                            title: "The AI Renaissance",
                            description: "Exploring how deep learning is reshaping modern software development tools and automated execution frameworks.",
                            date: "July 12, 2026",
                            badges: ["AI", "10 mins"]
                        },
                        {
                            title: "Turbopack vs Webpack",
                            description: "Why Next.js dev server memory problems exist and how Rust is fixing hot-module replacement speeds.",
                            date: "July 15, 2026",
                            badges: ["Next.js", "4 mins"]
                        },
                        {
                            title: "Glossy CSS Guide",
                            description: "How to design premium glassy borders and high fidelity translucent panels using pure modern Tailwind v4.",
                            date: "July 18, 2026",
                            badges: ["Design", "6 mins"]
                        },
                        {
                            title: "Recruiting in LLM Era",
                            description: "LLMs are changing tech screening. What junior developers actually need to build to stand out in recruitment.",
                            date: "July 20, 2026",
                            badges: ["Careers", "8 mins"]
                        },
                        {
                            title: "Bun: Speeding Up TS",
                             description: "Ditching Node for Bun in development environments: An honest speed and environment comparison.",
                            date: "July 22, 2026",
                            badges: ["Runtime", "5 mins"]
                        },
                        {
                            title: "Postgres Optimization",
                            description: "How to optimize complex queries and indexing strategies for heavy relational production workloads.",
                            date: "July 25, 2026",
                            badges: ["Database", "12 mins"]
                        },
                        {
                            title: "Framer Motion Physics",
                            description: "Adding realistic inertia and drag animations to horizontal snap scroll carousels for premium feel.",
                            date: "July 28, 2026",
                            badges: ["Frontend", "7 mins"]
                        },
                        {
                            title: "Agentic Loops",
                            description: "Building autonomous coding loops that actually solve issues without getting trapped in infinite runtime cycles.",
                            date: "Aug 02, 2026",
                            badges: ["AI", "15 mins"]
                        },
                        {
                            title: "Tailwind v4 Deep Dive",
                            description: "Testing the brand new linear-to-br utilities and CSS variables theme engine on production builds.",
                            date: "Aug 05, 2026",
                            badges: ["Tailwind", "5 mins"]
                        },
                        {
                            title: "Building in Public",
                            description: "Why shipping incomplete concepts yields better design feedback than launching extremely polished MVPs.",
                            date: "Aug 10, 2026",
                            badges: ["Mindset", "4 mins"]
                        },
                        {
                            title: "Next.js Server Actions",
                            description: "Securing backend endpoints directly inside React components without exposing extra routing controllers.",
                            date: "Aug 15, 2026",
                            badges: ["Security", "9 mins"]
                        },
                        {
                            title: "Cyberpunk Palette Design",
                            description: "The mathematical rules behind contrasting dark magenta gradients and deep ambient neon glow systems.",
                            date: "Aug 20, 2026",
                            badges: ["Art", "6 mins"]
                        }
                    ].map((card, idx) => (
                        <CarouselItem key={idx} className="w-[320px] sm:w-[465px] h-full flex">
                            <CardGlossy
                                title={card.title}
                                description={card.description}
                                date={card.date}
                                badges={card.badges}
                                gradientDivider={idx % 2 === 0}
                                className="w-full h-full"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </CarouselSection>

        </div>
    );
}