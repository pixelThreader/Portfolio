import type { Metadata } from "next";
import { BadgeGroup, Badge } from "@/components/widgets/Badge";
import {
    Section,
    SectionTitle,
    SectionContent
} from "@/components/widgets/Section";
import { GlassyHeroSection } from "@/components/widgets/GlassyHeroSection";
import { ProjectVerticalStacks } from "@/components/widgets/ProjectComponent";
import { Accordion } from "@/components/widgets/Accordion";

export const metadata: Metadata = {
    title: "Skills • pixelThreader",
    description: "Full-Stack Developer with experience building production-ready web applications, business platforms, and client-facing solutions.",
};

const WHAT_I_BUILD_TABS = [
    {
        id: "fullstack",
        label: "Full-Stack Web Apps",
        content: (
            <div className="flex flex-col gap-3">
                <h4 className="font-title text-white text-[18px]">Full-Stack Web Applications</h4>
                <p className="font-serif text-white/60 text-[14px] leading-relaxed">
                    End-to-end applications covering UI, API, database, and deployment — built for real users and real traffic. I handle the entire lifecycle from schema design to the final deployed product.
                </p>
            </div>
        )
    },
    {
        id: "erp",
        label: "ERP & Business Platforms",
        content: (
            <div className="flex flex-col gap-3">
                <h4 className="font-title text-white text-[18px]">ERP & Business Platforms</h4>
                <p className="font-serif text-white/60 text-[14px] leading-relaxed">
                    Internal tools and ERP systems built to handle complex workflows, multi-user roles, and business logic at scale. During my internship at AYCreation, I contributed directly to a commercial ERP platform used across operations.
                </p>
            </div>
        )
    },
    {
        id: "admin",
        label: "Admin Dashboards",
        content: (
            <div className="flex flex-col gap-3">
                <h4 className="font-title text-white text-[18px]">Admin Dashboards</h4>
                <p className="font-serif text-white/60 text-[14px] leading-relaxed">
                    Management interfaces with access control, data views, and operational controls for business teams. These are tightly coupled with RBAC systems so each role only sees what it should.
                </p>
            </div>
        )
    },
    {
        id: "saas",
        label: "SaaS Applications",
        content: (
            <div className="flex flex-col gap-3">
                <h4 className="font-title text-white text-[18px]">SaaS Applications</h4>
                <p className="font-serif text-white/60 text-[14px] leading-relaxed">
                    Subscription-based platforms with auth, billing hooks, user management, and modular feature sets. Designed to scale without breaking the core architecture.
                </p>
            </div>
        )
    },
    {
        id: "api",
        label: "REST API Services",
        content: (
            <div className="flex flex-col gap-3">
                <h4 className="font-title text-white text-[18px]">REST API Services</h4>
                <p className="font-serif text-white/60 text-[14px] leading-relaxed">
                    Clean, well-structured backend APIs with proper routing, validation, error handling, and documentation. I&apos;ve built and integrated APIs using Node.js, Express, and Drizzle ORM.
                </p>
            </div>
        )
    },
    {
        id: "auth",
        label: "Auth & Permission Systems",
        content: (
            <div className="flex flex-col gap-3">
                <h4 className="font-title text-white text-[18px]">Auth & Permission Systems</h4>
                <p className="font-serif text-white/60 text-[14px] leading-relaxed">
                    Secure login flows, RBAC, session management, and permission-gated access across application modules. Designed and implemented full RBAC at AYCreation — it&apos;s one of my strongest practical areas.
                </p>
            </div>
        )
    },
];

const CURRENTLY_EXPLORING_TABS = [
    {
        id: "backend-arch",
        label: "Backend Architecture",
        content: (
            <div className="flex flex-col gap-3">
                <h4 className="font-title text-white text-[18px]">Advanced Backend Architecture</h4>
                <p className="font-serif text-white/60 text-[14px] leading-relaxed">
                    Going deeper into service design patterns, event-driven architectures, and clean API boundaries. Focused on building systems that are easy to reason about even as they grow.
                </p>
            </div>
        )
    },
    {
        id: "distributed",
        label: "Distributed Systems",
        content: (
            <div className="flex flex-col gap-3">
                <h4 className="font-title text-white text-[18px]">Distributed Systems</h4>
                <p className="font-serif text-white/60 text-[14px] leading-relaxed">
                    Understanding how systems stay consistent and available at scale — replication strategies, consensus algorithms, and failure handling. Still early but genuinely fascinated by the problem space.
                </p>
            </div>
        )
    },
    {
        id: "rust",
        label: "Rust",
        content: (
            <div className="flex flex-col gap-3">
                <h4 className="font-title text-white text-[18px]">Rust</h4>
                <p className="font-serif text-white/60 text-[14px] leading-relaxed">
                    Systems programming with memory safety without a garbage collector. Learning the ownership model and the borrow checker. Building small CLI tools as practice projects to get comfortable before tackling anything serious.
                </p>
            </div>
        )
    },
    {
        id: "devops",
        label: "Modern DevOps",
        content: (
            <div className="flex flex-col gap-3">
                <h4 className="font-title text-white text-[18px]">Modern DevOps</h4>
                <p className="font-serif text-white/60 text-[14px] leading-relaxed">
                    CI/CD pipelines, containerization with Docker, and infrastructure-as-code for reliable and reproducible deployments. Goal is to own the full path from code to production confidently.
                </p>
            </div>
        )
    },
    {
        id: "perf",
        label: "Scalability & Performance",
        content: (
            <div className="flex flex-col gap-3">
                <h4 className="font-title text-white text-[18px]">Scalability & Performance</h4>
                <p className="font-serif text-white/60 text-[14px] leading-relaxed">
                    Database query optimization, caching strategies (in-memory, CDN, HTTP), and profiling bottlenecks in production systems. Performance isn&apos;t an afterthought — it&apos;s architecture.
                </p>
            </div>
        )
    },
];

const customExperienceData = [
    {
        degree: "Full-Stack Developer Intern",
        institute: (
            <a 
                href="https://aycreation.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white underline decoration-white/30 transition-colors"
            >
                AYCreation IT Services
            </a>
        ) as unknown as string,
        specialization: "End-to-end full-stack development, database schema design, and implementation of secure business systems.",
        duration: "2024 — Present",
        subjects: [
            "React", "Next.js", "TypeScript", "Node.js", "Express.js", "Drizzle ORM", "PostgreSQL", "RBAC", "ERP Platforms"
        ],
        projects: [
            "Contributed to the development and maintenance of a commercial enterprise ERP platform, building backend systems and responsive frontends.",
            "Designed and implemented a modular Role-Based Access Control (RBAC) authorization system to handle multi-tenant user access.",
            "Collaborated on designing database schemas, API routes, and frontend views to support business operational workflows.",
            (
                <span key="cert">
                    View official internship{" "}
                    <a 
                        href="/aycreation_certificate.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white underline font-semibold hover:text-[#ffd4dc] transition-colors"
                    >
                        Experience Certificate
                    </a>.
                </span>
            ) as unknown as string
        ]
    }
];

export default function Skills() {
    return (
        <div className="w-full relative overflow-x-hidden bg-background min-h-screen">

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

            {/* Premium Modular Glassy Hero Header */}
            <GlassyHeroSection>
                <h1 className="font-title text-[56px] sm:text-[76px] md:text-[88px] font-bold tracking-tight select-none">
                    <span className="text-white">Skills</span>
                    <span className="brand-gradient font-bold ml-[2px]">.</span>
                </h1>
            </GlassyHeroSection>

            {/* Professional Experience — first thing a recruiter sees */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="experience">
                    Professional <span className="brand-gradient font-title ml-2">Experience</span>
                </SectionTitle>
                <SectionContent className="[&_h4]:font-serif!">
                    <Accordion data={customExperienceData} />
                </SectionContent>
            </Section>

            {/* Core Competencies */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="competencies">
                    Core <span className="brand-gradient font-title ml-2">Competencies</span>
                </SectionTitle>
                <SectionContent>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {[
                            { title: "Full-Stack Development", description: "Complete web applications from concept to deployment — frontend, backend, databases, and integrations." },
                            { title: "Frontend Engineering", description: "Responsive, accessible, high-performance interfaces across devices." },
                            { title: "Backend Development", description: "Scalable APIs, business logic, authentication systems, and third-party integrations." },
                            { title: "Database Design", description: "Efficient structures, data relationships, and performance optimization through effective modeling." },
                            { title: "Auth & Access Control", description: "Secure authentication flows, RBAC, and permission management for enterprise applications." },
                            { title: "Deployment & Ops", description: "Production environments, performance monitoring, and software reliability." }
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-[32px] border border-white/5 bg-[#3a141d]/40 p-8 sm:p-10 backdrop-blur-md shadow-xl flex flex-col gap-3"
                            >
                                <h4 className="font-title text-xl text-white">{item.title}</h4>
                                <p className="font-serif text-white/60 text-[14px] sm:text-[15px] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </SectionContent>
            </Section>

            {/* Technology Stack */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="stack">
                    Technology <span className="brand-gradient font-title ml-2">Stack</span>
                </SectionTitle>
                <SectionContent>
                    <div className="w-full rounded-[32px] border border-white/5 bg-[#3a141d]/40 p-8 sm:p-10 backdrop-blur-md shadow-xl flex flex-col gap-8">
                        <div>
                            <h4 className="font-title text-xl text-white mb-4">Frontend</h4>
                            <BadgeGroup>
                                {["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"].map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </BadgeGroup>
                        </div>

                        <div className="h-px w-full bg-white/5" />

                        <div>
                            <h4 className="font-title text-xl text-white mb-4">Backend</h4>
                            <BadgeGroup>
                                {["Node.js", "Express.js", "Drizzle ORM", "Python"].map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </BadgeGroup>
                        </div>

                        <div className="h-px w-full bg-white/5" />

                        <div>
                            <h4 className="font-title text-xl text-white mb-4">Databases</h4>
                            <BadgeGroup>
                                {["PostgreSQL", "MySQL", "MongoDB", "SQLite"].map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </BadgeGroup>
                        </div>

                        <div className="h-px w-full bg-white/5" />

                        <div>
                            <h4 className="font-title text-xl text-white mb-4">Tools & Platforms</h4>
                            <BadgeGroup>
                                {["Git", "GitHub", "Docker", "Linux", "Nginx", "Vercel"].map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </BadgeGroup>
                        </div>
                    </div>
                </SectionContent>
            </Section>

            {/* What I Build — ProjectVerticalStacks */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="what-i-build">
                    What I <span className="brand-gradient font-title ml-2">Build</span>
                </SectionTitle>
                <SectionContent>
                    <ProjectVerticalStacks tabs={WHAT_I_BUILD_TABS} />
                </SectionContent>
            </Section>

            {/* Currently Exploring — ProjectVerticalStacks */}
            <Section className="py-8! md:py-12!">
                <SectionTitle id="exploring">
                    Currently <span className="brand-gradient font-title ml-2">Exploring</span>
                </SectionTitle>
                <SectionContent>
                    <ProjectVerticalStacks tabs={CURRENTLY_EXPLORING_TABS} />
                </SectionContent>
            </Section>

        </div>
    );
}
