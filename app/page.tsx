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
import {
    Section,
    SectionTitle,
    SectionContent
} from "@/components/widgets/Section";
import {
    CardGlossy,
    CardGlossyContent,
    CardGlossyTitle,
    CardGlossyDescription,
    CardGlossyFooter,
    CardGlossyDate
} from "@/components/widgets/CardGlossy";
import {
    JournalCard,
    JournalCardImage,
    JournalCardContent,
    JournalCardHeader,
    JournalCardTitle,
    JournalCardDescription,
    JournalCardFooter,
    JournalCardMeta,
    JournalCardAction
} from "@/components/widgets/JournalCard";
import {
    Projects,
    Project,
    ProjectDetail,
    ProjectHeader,
    ProjectDetailLogo,
    ProjectTitle,
    ProjectDesc,
    ProjectGitHubLink,
    ProjectMeta,
    ProjectAuthors,
    ProjectAuthor,
    AuthorName,
    AuthorGitHubLink,
    LastCommit,
    LastCommitDate,
    LastCommitMessage,
    ProjectLicense,
    ProjectFeatures,
    ProjectFeature,
    ProjectUrl,
    ProjectLogo
} from "@/components/widgets/Projects";
import CurvedLoop from '@/components/external/CurvedLoop';

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
                    {/* Left Column: Hero Copy */}
                    <div className="flex flex-col items-start md:items-center lg:items-start text-left md:text-center lg:text-left w-full max-w-2xl md:mx-auto lg:mx-0">

                        {/* Big Heading */}
                        <h1 className="font-title text-[40px] min-[400px]:text-[48px] sm:text-[64px] md:text-[76px] lg:text-[72px] xl:text-[80px] font-bold leading-none tracking-tight select-none flex md:justify-center lg:justify-start whitespace-nowrap">
                            <span className="text-white font-bold">pixel</span><span className="brand-gradient font-bold ml-[2px]">Threader</span><span className="text-white">.</span>
                        </h1>

                        {/* Capsule Tag Pills */}
                        <div className="mt-8 mb-10 flex md:justify-center lg:justify-start w-full">
                            <BadgeGroup>
                                {["Full-Stack", "UI / UX", "AI / ML"].map((tag) => (
                                    <Badge key={tag}>
                                        {tag}
                                    </Badge>
                                ))}
                            </BadgeGroup>
                        </div>

                        {/* Description Paragraph */}
                        <p className="font-serif text-white/70 text-base md:text-lg leading-relaxed max-w-[540px] mb-12 md:mx-auto lg:mx-0">
                            AI systems, full-stack apps, and random ideas that turn into real products.
                            Mostly working with deep learning, automation, and backend systems while shipping things fast.
                        </p>

                        {/* Action Buttons */}
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
                            <CardGlossy className="w-full h-full">
                                <CardGlossyContent>
                                    <CardGlossyTitle>{card.title}</CardGlossyTitle>
                                    <CardGlossyDescription>{card.description}</CardGlossyDescription>
                                </CardGlossyContent>
                                <CardGlossyFooter gradientDivider={idx % 2 === 0}>
                                    <BadgeGroup className="origin-left scale-[1]">
                                        {card.badges.map((badge, bIdx) => (
                                            <Badge key={bIdx}>{badge}</Badge>
                                        ))}
                                    </BadgeGroup>
                                    <CardGlossyDate>{card.date}</CardGlossyDate>
                                </CardGlossyFooter>
                            </CardGlossy>
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
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((idx) => (
                        <CarouselItem key={idx} className="w-[300px] sm:w-[390px] h-full flex">
                            <JournalCard className="w-full h-full">
                                <JournalCardImage />
                                <JournalCardContent>
                                    <JournalCardHeader>
                                        <JournalCardTitle>Architectural Scaling #{idx}</JournalCardTitle>
                                        <BadgeGroup className="shrink-0 pt-1">
                                            <Badge>5 mins</Badge>
                                        </BadgeGroup>
                                    </JournalCardHeader>

                                    <JournalCardDescription>
                                        Exploring modern resilient system design patterns. This is a placeholder insight focusing on highly available infrastructure and deep learning pipelines.
                                    </JournalCardDescription>

                                    <JournalCardFooter>
                                        <JournalCardMeta>Sept 12, 2026 | System Design</JournalCardMeta>
                                        <JournalCardAction />
                                    </JournalCardFooter>
                                </JournalCardContent>
                            </JournalCard>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </CarouselSection>

            {/* Sample Section */}
            <Section>
                <SectionTitle>
                    Sample <Highlight>Section</Highlight>
                </SectionTitle>
                <SectionContent className="text-white/70 text-lg leading-relaxed text-center">
                    This is a sample of the new Section component. It stretches out vertically to fit its content without adding horizontal scrollbars. It obeys the marginal spacing defined by the platform's layout constraints, ensuring a consistent design aesthetic across all pages.
                </SectionContent>
            </Section>

            {/* Selected Projects Section */}
            <Section>
                <SectionTitle id="projects">
                    Selected <Highlight>Projects</Highlight>
                </SectionTitle>
                <SectionContent>
                    <Projects>
                        <Project>
                            <ProjectDetail>
                                <ProjectHeader>
                                    <ProjectDetailLogo>
                                        <Image
                                            src="/brand/inner_logo_dr_light.png"
                                            alt="Deep Researcher Logo"
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-contain"
                                        />
                                    </ProjectDetailLogo>
                                    <ProjectTitle>Deep Researcher v2</ProjectTitle>
                                    <ProjectGitHubLink href="https://github.com/pixelthreader/deep-researcher" />
                                </ProjectHeader>

                                <ProjectDesc>
                                    Deep Researcher V2 is the successor to the previous version, an Open-Source agentic research harness for autonomous web research, reasoning, source analysis, multi-step planning, and structured AI-powered report generation.
                                </ProjectDesc>

                                <ProjectMeta>
                                    <ProjectAuthors>
                                        <ProjectAuthor>
                                            <AuthorName href="https://github.com/pixelThreader">pixelThreader</AuthorName>
                                        </ProjectAuthor>
                                        <ProjectAuthor>
                                            <AuthorName href="https://github.com/openagentx">OpenAgentX</AuthorName>
                                        </ProjectAuthor>
                                        <ProjectAuthor>
                                            <AuthorName href="https://github.com/neurostack">NeuroStack</AuthorName>
                                        </ProjectAuthor>
                                    </ProjectAuthors>

                                    <LastCommit>
                                        <LastCommitDate>May 20, 2026</LastCommitDate>
                                        <LastCommitMessage>commit #315: This Feature includes this th...</LastCommitMessage>
                                    </LastCommit>

                                    <ProjectLicense>MIT License</ProjectLicense>

                                    <ProjectFeatures>
                                        <ProjectFeature>Multi Agent System</ProjectFeature>
                                        <ProjectFeature>MCP Tools</ProjectFeature>
                                        <ProjectFeature>Multi-Step Reasoning</ProjectFeature>
                                    </ProjectFeatures>
                                </ProjectMeta>

                                <ProjectUrl href="https://github.com/pixelthreader/deep-researcher" />
                            </ProjectDetail>

                            <ProjectLogo className="w-[220px] sm:w-[280px] lg:w-[340px]" topBlur={0} middleBlur={20} bottomBlur={40} blurOpacity={0.5}>
                                <Image
                                    src="/projects/deep_researcher.png"
                                    alt="Deep Researcher v2 Preview"
                                    width={520}
                                    height={520}
                                />
                            </ProjectLogo>
                        </Project>

                        {/* Replica 2 */}
                        <Project>
                            <ProjectDetail>
                                <ProjectHeader>
                                    <ProjectDetailLogo>
                                        <Image
                                            src="/brand/inner_logo_dr_light.png"
                                            alt="Deep Researcher Logo"
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-contain"
                                        />
                                    </ProjectDetailLogo>
                                    <ProjectTitle>Deep Researcher v2 (Replica)</ProjectTitle>
                                    <ProjectGitHubLink href="https://github.com/pixelthreader/deep-researcher" />
                                </ProjectHeader>

                                <ProjectDesc>
                                    Deep Researcher V2 is the successor to the previous version, an Open-Source agentic research harness for autonomous web research, reasoning, source analysis, multi-step planning, and structured AI-powered report generation.
                                </ProjectDesc>

                                <ProjectMeta>
                                    <ProjectAuthors>
                                        <ProjectAuthor>
                                            <AuthorName href="https://github.com/pixelThreader">pixelThreader</AuthorName>
                                        </ProjectAuthor>
                                        <ProjectAuthor>
                                            <AuthorName href="https://github.com/openagentx">OpenAgentX</AuthorName>
                                        </ProjectAuthor>
                                        <ProjectAuthor>
                                            <AuthorName href="https://github.com/neurostack">NeuroStack</AuthorName>
                                        </ProjectAuthor>
                                    </ProjectAuthors>

                                    <LastCommit>
                                        <LastCommitDate>May 20, 2026</LastCommitDate>
                                        <LastCommitMessage>commit #315: This Feature includes this th...</LastCommitMessage>
                                    </LastCommit>

                                    <ProjectLicense>MIT License</ProjectLicense>

                                    <ProjectFeatures>
                                        <ProjectFeature>Multi Agent System</ProjectFeature>
                                        <ProjectFeature>MCP Tools</ProjectFeature>
                                        <ProjectFeature>Multi-Step Reasoning</ProjectFeature>
                                    </ProjectFeatures>
                                </ProjectMeta>

                                <ProjectUrl href="https://github.com/pixelthreader/deep-researcher" />
                            </ProjectDetail>

                            <ProjectLogo className="w-[220px] sm:w-[280px] lg:w-[340px]" topBlur={0} middleBlur={20} bottomBlur={40} blurOpacity={0.5}>
                                <Image
                                    src="/projects/deep_researcher.png"
                                    alt="Deep Researcher v2 Preview"
                                    width={520}
                                    height={520}
                                />
                            </ProjectLogo>
                        </Project>

                        {/* Replica 3 */}
                        <Project>
                            <ProjectDetail>
                                <ProjectHeader>
                                    <ProjectDetailLogo>
                                        <Image
                                            src="/brand/inner_logo_dr_light.png"
                                            alt="Deep Researcher Logo"
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-contain"
                                        />
                                    </ProjectDetailLogo>
                                    <ProjectTitle>Deep Researcher v2 (Replica 2)</ProjectTitle>
                                    <ProjectGitHubLink href="https://github.com/pixelthreader/deep-researcher" />
                                </ProjectHeader>

                                <ProjectDesc>
                                    Deep Researcher V2 is the successor to the previous version, an Open-Source agentic research harness for autonomous web research, reasoning, source analysis, multi-step planning, and structured AI-powered report generation.
                                </ProjectDesc>

                                <ProjectMeta>
                                    <ProjectAuthors>
                                        <ProjectAuthor>
                                            <AuthorName href="https://github.com/pixelThreader">pixelThreader</AuthorName>
                                        </ProjectAuthor>
                                        <ProjectAuthor>
                                            <AuthorName href="https://github.com/openagentx">OpenAgentX</AuthorName>
                                        </ProjectAuthor>
                                        <ProjectAuthor>
                                            <AuthorName href="https://github.com/neurostack">NeuroStack</AuthorName>
                                        </ProjectAuthor>
                                    </ProjectAuthors>

                                    <LastCommit>
                                        <LastCommitDate>May 20, 2026</LastCommitDate>
                                        <LastCommitMessage>commit #315: This Feature includes this th...</LastCommitMessage>
                                    </LastCommit>

                                    <ProjectLicense>MIT License</ProjectLicense>

                                    <ProjectFeatures>
                                        <ProjectFeature>Multi Agent System</ProjectFeature>
                                        <ProjectFeature>MCP Tools</ProjectFeature>
                                        <ProjectFeature>Multi-Step Reasoning</ProjectFeature>
                                    </ProjectFeatures>
                                </ProjectMeta>

                                <ProjectUrl href="https://github.com/pixelthreader/deep-researcher" />
                            </ProjectDetail>

                            <ProjectLogo className="w-[220px] sm:w-[280px] lg:w-[340px]" topBlur={0} middleBlur={20} bottomBlur={40} blurOpacity={0.5}>
                                <Image
                                    src="/projects/deep_researcher.png"
                                    alt="Deep Researcher v2 Preview"
                                    width={520}
                                    height={520}
                                />
                            </ProjectLogo>
                        </Project>
                    </Projects>
                </SectionContent>
            </Section>

            <CurvedLoop
                marqueeText="     I Enjoy...     ✦     I Think...     ✦     I Plan...     ✦     I Code...     ✦"
                speed={2}
                curveAmount={100}
                direction="right"
                interactive
                className="custom-text-style font-title"
            />

        </div>
    );
}