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
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { getLatestUpdates, getJournalPosts, getProjects, getGitHubRepo } from "@/utils/api";
import { ToastError } from "@/components/widgets/ToastError";

export default async function Home() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: dbUpdates, error: updatesError } = await getLatestUpdates(supabase);
    const { data: dbJournal, error: journalError } = await getJournalPosts(supabase);
    const { data: dbProjects, error: projectsError } = await getProjects(supabase, 3);

    // Resolve github API stats for database projects
    const projectsWithGitHub = dbProjects ? await Promise.all(
        dbProjects.map(async (project) => {
            const gitHubData = await getGitHubRepo(project.github_url);

            // Format features list from JSONB schema
            let parsedFeatures: string[] = [];
            if (project.features) {
                try {
                    parsedFeatures = Array.isArray(project.features)
                        ? project.features.map((f: { label?: string; title?: string }) => f.label || f.title || (f as unknown as string))
                        : Object.values(project.features as Record<string, { label?: string; title?: string }>).map((f) => f.label || f.title || (f as unknown as string));
                } catch {
                    parsedFeatures = [];
                }
            }

            return {
                ...project,
                license: gitHubData?.license || "MIT License",
                last_commit_date: gitHubData?.last_commit || "Recent",
                last_commit_message: gitHubData?.last_commit_message || "Latest updates",
                features: parsedFeatures
            };
        })
    ) : null;

    const updates = dbUpdates || [];
    const journal = dbJournal || [];
    const projects = projectsWithGitHub || [];

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
                <div className="w-full px-8 md:px-16 lg:px-[12%] xl:px-[15%] flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-12 py-12">

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
                    {updatesError ? (
                        <CarouselItem className="w-full flex justify-center items-center py-12">
                            <ToastError message={`Failed to fetch updates: ${updatesError.message}`} />
                            <p className="font-serif text-[#ffd4dc]/40 text-center" style={{ fontFamily: 'Merriweather, serif' }}>
                                Failed to fetch updates (status: {updatesError.code})
                            </p>
                        </CarouselItem>
                    ) : updates.length > 0 ? (
                        updates.map((card, idx) => {
                            const badgesToRender = [...(card.badges || [])];
                            if (card.read_time) {
                                badgesToRender.push(card.read_time);
                            }
                            return (
                                <CarouselItem key={idx} className="w-[320px] sm:w-[465px] h-full flex">
                                    <CardGlossy className="w-full h-full">
                                        <CardGlossyContent>
                                            <CardGlossyTitle>{card.title}</CardGlossyTitle>
                                            <CardGlossyDescription>{card.description}</CardGlossyDescription>
                                        </CardGlossyContent>
                                        <CardGlossyFooter gradientDivider={idx % 2 === 0}>
                                            <BadgeGroup className="origin-left scale-[1]">
                                                {badgesToRender.map((badge, bIdx) => (
                                                    <Badge key={bIdx}>{badge}</Badge>
                                                ))}
                                            </BadgeGroup>
                                            <CardGlossyDate>{card.date}</CardGlossyDate>
                                        </CardGlossyFooter>
                                    </CardGlossy>
                                </CarouselItem>
                            );
                        })
                    ) : (
                        <CarouselItem className="w-full flex justify-center items-center py-12">
                            <p className="font-serif text-[#ffd4dc]/40 text-center" style={{ fontFamily: 'Merriweather, serif' }}>
                                No updates found.
                            </p>
                        </CarouselItem>
                    )}
                </CarouselContent>
            </CarouselSection>

            {/* Blogs & Journal Section */}
            <CarouselSection>
                <CarouselSectionTitle>
                    Blogs & <Highlight>Journal</Highlight>
                </CarouselSectionTitle>
                <CarouselContent>
                    {journalError ? (
                        <CarouselItem className="w-full flex justify-center items-center py-12">
                            <ToastError message={`Failed to fetch journal: ${journalError.message}`} />
                            <p className="font-serif text-[#ffd4dc]/40 text-center" style={{ fontFamily: 'Merriweather, serif' }}>
                                Failed to fetch journal posts (status: {journalError.code})
                            </p>
                        </CarouselItem>
                    ) : journal.length > 0 ? (
                        journal.map((post, idx) => (
                            <CarouselItem key={post.id || idx} className="w-[300px] sm:w-[390px] h-full flex">
                                <JournalCard className="w-full h-full">
                                    <JournalCardImage>
                                        {post.banner_image_url && (
                                            <Image
                                                src={post.banner_image_url}
                                                alt={post.title}
                                                fill
                                                sizes="300px"
                                                className="object-cover"
                                            />
                                        )}
                                    </JournalCardImage>
                                    <JournalCardContent>
                                        <JournalCardHeader>
                                            <JournalCardTitle>{post.title}</JournalCardTitle>
                                            {post.read_time && (
                                                <BadgeGroup className="shrink-0 pt-1">
                                                    <Badge>{post.read_time}</Badge>
                                                </BadgeGroup>
                                            )}
                                        </JournalCardHeader>

                                        <JournalCardDescription>
                                            {post.description}
                                        </JournalCardDescription>

                                        <JournalCardFooter>
                                            <JournalCardMeta>
                                                {post.date || ('created_at' in post && post.created_at ? new Date(post.created_at).toLocaleDateString() : "")}
                                                {post.category ? ` | ${post.category}` : ""}
                                            </JournalCardMeta>
                                            <JournalCardAction />
                                        </JournalCardFooter>
                                    </JournalCardContent>
                                </JournalCard>
                            </CarouselItem>
                        ))
                    ) : (
                        <CarouselItem className="w-full flex justify-center items-center py-12">
                            <p className="font-serif text-[#ffd4dc]/40 text-center" style={{ fontFamily: 'Merriweather, serif' }}>
                                No journal posts found.
                            </p>
                        </CarouselItem>
                    )}
                </CarouselContent>
            </CarouselSection>

            {/* Selected Projects Section */}
            <Section>
                <SectionTitle id="projects">
                    Latest <Highlight>Projects</Highlight>
                </SectionTitle>
                <SectionContent>
                    {projectsError ? (
                        <div className="w-full text-center py-12">
                            <ToastError message={`Failed to fetch projects: ${projectsError.message}`} />
                            <p className="font-serif text-[#ffd4dc]/40" style={{ fontFamily: 'Merriweather, serif' }}>
                                Failed to fetch projects (status: {projectsError.code})
                            </p>
                        </div>
                    ) : projects.length > 0 ? (
                        <Projects>
                            {projects.map((project, idx) => (
                                <Project key={project.id || idx}>
                                    <ProjectDetail>
                                        <ProjectHeader>
                                            {project.logo_url && (
                                                <ProjectDetailLogo>
                                                    <Image
                                                        src={project.logo_url}
                                                        alt={`${project.title} Logo`}
                                                        width={48}
                                                        height={48}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </ProjectDetailLogo>
                                            )}
                                            <ProjectTitle>{project.title}</ProjectTitle>
                                            {project.github_url && <ProjectGitHubLink href={project.github_url} />}
                                        </ProjectHeader>

                                        <ProjectDesc>
                                            {project.description}
                                        </ProjectDesc>

                                        <ProjectMeta>
                                            <ProjectAuthors>
                                                <ProjectAuthor>
                                                    <AuthorName href="https://github.com/pixelThreader">pixelThreader</AuthorName>
                                                </ProjectAuthor>
                                            </ProjectAuthors>

                                            <LastCommit>
                                                <LastCommitDate>{project.last_commit_date}</LastCommitDate>
                                                <LastCommitMessage>{project.last_commit_message}</LastCommitMessage>
                                            </LastCommit>

                                            <ProjectLicense>{project.license}</ProjectLicense>

                                            {project.features && project.features.length > 0 && (
                                                <ProjectFeatures>
                                                    {project.features.map((feat: string, fIdx: number) => (
                                                        <ProjectFeature key={fIdx}>{feat}</ProjectFeature>
                                                    ))}
                                                </ProjectFeatures>
                                            )}
                                        </ProjectMeta>

                                        {project.view_url && <ProjectUrl href={project.view_url} />}
                                    </ProjectDetail>

                                    {project.logo_url && (
                                        <ProjectLogo className="w-[220px] sm:w-[280px] lg:w-[340px]" topBlur={0} middleBlur={20} bottomBlur={40} blurOpacity={0.5}>
                                            <Image
                                                src={project.logo_url}
                                                alt={`${project.title} Preview`}
                                                width={520}
                                                height={520}
                                            />
                                        </ProjectLogo>
                                    )}
                                </Project>
                            ))}
                        </Projects>
                    ) : (
                        <div className="w-full text-center py-12 text-[#ffd4dc]/40 font-serif" style={{ fontFamily: 'Merriweather, serif' }}>
                            No projects found.
                        </div>
                    )}
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