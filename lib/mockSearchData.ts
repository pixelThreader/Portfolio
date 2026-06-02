export interface SearchResult {
    title: string;
    type: 'page' | 'blog' | 'journal' | 'project' | 'docs';
    'pseudo-content': string;
    'search-keyword': string[];
    href: string;
    date: string;
    tags?: string[];
    readTime?: string;
}

export interface SearchResponse {
    page: {
        offset: number;
        index: number;
        'total-pages': number;
    };
    overview: {
        'total-results': number;
        'search-categories': string[];
        target: string;
    };
    filter: {
        category?: string;
        query?: string;
        density?: string;
    };
    data: SearchResult[];
}

interface RawDocument {
    title: string;
    type: 'page' | 'blog' | 'journal' | 'project' | 'docs';
    content: string;
    href: string;
    date: string;
    tags: string[];
    readTime?: string;
}

const RAW_DOCUMENTS: RawDocument[] = [
    {
        title: "About pixelThreader",
        type: "page",
        content: "Learn more about pixelThreader, an AI Engineer and Full Stack Developer crafting premium open-source software, agentic system orchestrations, and high-fidelity layouts. Specialized in React, Next.js, and PyTorch.",
        href: "/about",
        date: "May 2026",
        tags: ["Personal", "Profile"]
    },
    {
        title: "The AI Renaissance & Next-Gen IDEs",
        type: "blog",
        content: "Exploring how deep learning is reshaping modern software development tools, agentic workflows, and automated execution frameworks. Software engineering is transitioning from coding to orchestrating.",
        href: "/#blogs",
        date: "July 12, 2026",
        tags: ["AI", "IDEs", "Software Engineering"],
        readTime: "10 mins"
    },
    {
        title: "Agentic V2 Orchestrator",
        type: "project",
        content: "Agentic V2 is a robust desktop frontend and backend orchestration leveraging MCP architectures and autonomous reasoning loops to solve complex software engineering tasks instantly. Uses custom react interfaces.",
        href: "/projects#builds",
        date: "2026",
        tags: ["AI Orchestration", "Next.js", "MCP"]
    },
    {
        title: "Architectural Scaling & Resilient System Design",
        type: "journal",
        content: "Exploring modern resilient system design patterns. This research explores highly available infrastructure, horizontally scaling state, database clustering, and deep learning pipelines with smart fallbacks.",
        href: "/#blogs",
        date: "Sept 12, 2026",
        tags: ["System Design", "Resilience", "Infrastructure"]
    },
    {
        title: "MCP Model Context Protocol Specifications",
        type: "docs",
        content: "Official implementation guide for the Model Context Protocol (MCP) by Anthropic. Learn how to configure clients, register custom local tools, query dynamic resources, and secure system execution.",
        href: "/projects",
        date: "2026",
        tags: ["API", "AI Specs", "MCP"]
    },
    {
        title: "Glossy CSS: Crafting Premium Glassmorphism",
        type: "blog",
        content: "How to design premium glassy borders and high-fidelity translucent panels using pure modern Tailwind v4. We cover backing filters, subtle inset shadows, and gradient linear borders that feel liquid and alive.",
        href: "/#blogs",
        date: "July 18, 2026",
        tags: ["CSS v4", "Design", "Glassmorphism"],
        readTime: "6 mins"
    },
    {
        title: "Projects Showcase",
        type: "page",
        content: "Browse the complete catalog of projects built by pixelThreader, including agentic loops, high-fidelity user interfaces, custom design tokens, and real-time visualization frameworks with absolute pixel precision.",
        href: "/projects",
        date: "May 2026",
        tags: ["Works", "Portfolio"]
    },
    {
        title: "WiseFinance Analytics Platform",
        type: "project",
        content: "WiseFinance is a cinematic financial analytics platform that provides interactive canvas rendering, smooth real-time charting, and predictive AI budget modeling. Optimized for speed and design fidelity.",
        href: "/projects#builds",
        date: "2025",
        tags: ["Fidelity UX", "Canvas API", "Finance"]
    },
    {
        title: "Relational DB Schema Norms & Denormalization",
        type: "journal",
        content: "A study of database normalization forms (1NF to 5NF) vs realistic denormalization for write-heavy high-throughput analytical applications. When to sacrifice relational integrity for raw disk reads.",
        href: "/#blogs",
        date: "Sept 15, 2026",
        tags: ["Database", "Architecture", "Data Modelling"]
    },
    {
        title: "CardGlossy Widget API and Usage Guide",
        type: "docs",
        content: "Documentation for the `CardGlossy` premium widget. Learn how to nest `CardGlossyContent`, `CardGlossyTitle`, `CardGlossyDescription`, and `CardGlossyFooter` to construct stunning translucent elements.",
        href: "/projects",
        date: "2025",
        tags: ["API", "Components", "Design System"]
    },
    {
        title: "Turbopack vs Webpack: Performance Metrics",
        type: "blog",
        content: "Why Next.js dev server memory problems exist and how Rust is fixing hot-module replacement speeds. An in-depth analysis of bundle sizing, compiler passes, and HMR speed optimization.",
        href: "/#blogs",
        date: "July 15, 2026",
        tags: ["Next.js", "Rust", "Bundling"],
        readTime: "4 mins"
    },
    {
        title: "Technical Skills Matrix",
        type: "page",
        content: "Explore the complete skills and tech stack of pixelThreader. Deep expertise in React, Next.js, Node.js, Python, PyTorch, Postgres, Tailwind CSS, Framer Motion, LLM integrations, and robust system architectures.",
        href: "/skills",
        date: "May 2026",
        tags: ["Proficiency", "Tech Stack"]
    },
    {
        title: "Antigravity UI Design System",
        type: "project",
        content: "Antigravity UI is an asymmetric design token utility system implementing complex glassmorphic shaders, curated theme states, and customizable React animation modules using Tailwind CSS v4.",
        href: "/projects#builds",
        date: "2025",
        tags: ["Tailwind CSS v4", "Design Token", "Animations"]
    },
    {
        title: "HMR Hot Module Replacement Speed Bottlenecks",
        type: "journal",
        content: "Hot Module Replacement in massive Monorepos. Investigating file system watcher bottlenecks, incremental bundle graphs, and cache invalidation strategies under extremely large workspace contexts.",
        href: "/#blogs",
        date: "Sept 20, 2026",
        tags: ["Tooling", "Compiler", "Webpack"]
    },
    {
        title: "BadgeGroup Asymmetric Custom Borders Documentation",
        type: "docs",
        content: "Comprehensive API documentation for `BadgeGroup` and `Badge` components. Explains how the group dynamically computes border radius (rounded outer, sharp inner joints) for senior-level aesthetics.",
        href: "/projects",
        date: "2025",
        tags: ["API", "Components", "Badge"]
    },
    {
        title: "Technical Recruiting in the LLM Era",
        type: "blog",
        content: "LLMs are changing tech screenings forever. What junior developers actually need to build to stand out in recruitment: authentic product design, system architecture skills, and autonomous system builds.",
        href: "/#blogs",
        date: "July 20, 2026",
        tags: ["Careers", "Recruitment", "Advice"],
        readTime: "8 mins"
    },
    {
        title: "Contact & Collaboration",
        type: "page",
        content: "Get in touch with pixelThreader for partnerships, freelance work, custom high-fidelity design work, or AI integrations. Located in India, working globally with premium startups.",
        href: "/contact",
        date: "May 2026",
        tags: ["Let's Collaborate", "Hire Me"]
    },
    {
        title: "Deep Researcher v2 Suite",
        type: "project",
        content: "Deep Researcher v2 is an Open-Source agentic research harness for autonomous web research, source analysis, multi-step planning, and structured report generation. Features deep-diving LLM routines.",
        href: "/projects#builds",
        date: "2026",
        tags: ["Autonomous Agent", "Web Scraping", "Research"]
    },
    {
        title: "State Management in Agentic Systems",
        type: "journal",
        content: "An academic analysis of memory structures in agentic systems. We propose an elegant segmented context store that separates long-term episodic memory from short-term reasoning loops to reduce token waste.",
        href: "/#blogs",
        date: "Oct 02, 2026",
        tags: ["AI", "Research", "Memory"]
    },
    {
        title: "ButtonGroup Styling and Fluid Transition Props",
        type: "docs",
        content: "Configuration guide for the `ButtonGroup` and `Button` wrappers. Detailing the sizes (sm, md, lg, xxl), custom hover scales, active spring states, and simulated route links matching Next.js specifications.",
        href: "/projects",
        date: "2025",
        tags: ["API", "Components", "Buttons"]
    },
    {
        title: "Bun: Speeding Up TS Development Runtimes",
        type: "blog",
        content: "Ditching Node.js for Bun in local development environments. An honest speed, compatibility, and environment configuration comparison. We explore native testing speeds and TypeScript execution overheads.",
        href: "/#blogs",
        date: "July 22, 2026",
        tags: ["Bun", "TypeScript", "Node.js"],
        readTime: "5 mins"
    },
    {
        title: "OKLCH vs HSL: The Future of CSS Gradients",
        type: "journal",
        content: "An in-depth color science research examining OKLCH color spaces. Why HSL fails to represent uniform brightness, causing mudded transitions in gradients, and how OKLCH retains pristine visual contrast.",
        href: "/#blogs",
        date: "Oct 10, 2026",
        tags: ["Design System", "Color Science", "OKLCH"]
    },
    {
        title: "Supabase Postgres Row-Level Security Rules",
        type: "docs",
        content: "Developer reference guide for Postgres Row-Level Security (RLS) on Supabase. Practical examples of enabling RLS, creating SELECT policies, using auth.uid(), and checking user session states safely.",
        href: "/projects",
        date: "2026",
        tags: ["Database", "Security", "Supabase"]
    },
    {
        title: "Postgres Optimization: Query Indexing Strategies",
        type: "blog",
        content: "How to optimize complex queries and indexing strategies for heavy relational production database workloads. Learn how to use pg_stat_statements, analyze execution trees, and leverage partial indexes.",
        href: "/#blogs",
        date: "July 25, 2026",
        tags: ["Database", "Postgres", "SQL"],
        readTime: "12 mins"
    },
    {
        title: "CSS-in-JS vs Utility CSS Build Profiling",
        type: "journal",
        content: "A performance profiling study comparing runtime CSS-in-JS (Styled Components) with build-time utility CSS (Tailwind). We map rendering speeds, time-to-interactive (TTI), and browser layout shifts.",
        href: "/#blogs",
        date: "Nov 01, 2026",
        tags: ["CSS", "Performance", "Compilation"]
    },
    {
        title: "Next.js Static Export Config & Deployments",
        type: "docs",
        content: "Reference guide for configuring Next.js in static export mode `output: 'export'`. Details compatibility with dynamic routing, loading fallback components, and handling query string search params.",
        href: "/projects",
        date: "2026",
        tags: ["Next.js", "Deploy", "Static Site"]
    },
    {
        title: "Framer Motion Physics: Springs and Inertia",
        type: "blog",
        content: "Adding realistic inertia and drag animations to horizontal snap scroll carousels for premium user experience. Learn about spring stiffness, damping coefficients, and boundary collision physics.",
        href: "/#blogs",
        date: "July 28, 2026",
        tags: ["Frontend", "Framer Motion", "Animations"],
        readTime: "7 mins"
    },
    {
        title: "MCP Client tool registration reference",
        type: "docs",
        content: "Learn how to register custom terminal executables, node scripts, and python routines inside the MCP schema. Provide full parameter descriptors in JSON schema to enable agents to use them reliably.",
        href: "/projects",
        date: "2026",
        tags: ["API", "MCP", "AI Tools"]
    },
    {
        title: "Agentic Loops: Resilient Agent Frameworks",
        type: "blog",
        content: "Building autonomous coding loops that actually solve issues without getting trapped in infinite runtime cycles or recursive calls. We look at state persistence, context budgeting, and tool limits.",
        href: "/#blogs",
        date: "Aug 02, 2026",
        tags: ["AI Orchestrators", "Agents", "Robustness"],
        readTime: "15 mins"
    },
    {
        title: "Deep Learning Model Weights Compression Guide",
        type: "docs",
        content: "A developer guide to quantizing and compressing model weights. We explain float16, int8, and GPTQ methods, and how to execute quantized weights using ggml and llama.cpp on standard CPU runtimes.",
        href: "/projects",
        date: "2026",
        tags: ["Machine Learning", "Quantization", "Llama"]
    },
    {
        title: "Tailwind v4 Deep Dive: CSS Theme Engine",
        type: "blog",
        content: "Testing the brand new linear-to-br utilities and CSS variables theme engine on production builds. Discover how standard CSS variables simplify custom configurations without gigantic Tailwind config files.",
        href: "/#blogs",
        date: "Aug 05, 2026",
        tags: ["Tailwind", "CSS v4", "Design System"],
        readTime: "5 mins"
    },
    {
        title: "Vercel Web Analytics Hooks Integration",
        type: "docs",
        content: "Reference instructions for injecting Vercel Web Analytics tracking. Setting up script loaders, tracking page view triggers, measuring bounce metrics, and auditing interaction latency scores.",
        href: "/projects",
        date: "2026",
        tags: ["Analytics", "Vercel", "Monitoring"]
    },
    {
        title: "Building in Public: Design Feedback Loops",
        type: "blog",
        content: "Why shipping incomplete, transparent concepts yields better design feedback than launching extremely polished MVPs in secrecy. Involving your users early breeds engagement and accelerates polish.",
        href: "/#blogs",
        date: "Aug 10, 2026",
        tags: ["Mindset", "Open Source", "Product"],
        readTime: "4 mins"
    },
    {
        title: "Next.js Server Actions: Direct Backend Calls",
        type: "blog",
        content: "Securing backend endpoints directly inside React components without exposing extra routing controllers or REST endpoints. We address security, input schema validation, and optimistic state updates.",
        href: "/#blogs",
        date: "Aug 15, 2026",
        tags: ["Security", "Next.js", "Backend"],
        readTime: "9 mins"
    },
    {
        title: "Cyberpunk Palette Design: Kontrast Rules",
        type: "blog",
        content: "The mathematical rules behind contrasting dark magenta gradients and deep ambient neon glow systems. Learn to use OKLCH spaces for vibrant and reliable CSS colors in complex dark themes.",
        href: "/#blogs",
        date: "Aug 20, 2026",
        tags: ["Art", "Colors", "Design Systems"],
        readTime: "6 mins"
    }
];

/**
 * Perform a dynamic text search against our local mock database.
 * Matches keywords case-insensitively, clips a text window around
 * the first match, and wraps keywords inside `<hlgt>...</hlgt>` tags.
 */
export function queryMockSearch(
    query: string,
    category: string = "all",
    pageIndex: number = 1,
    pageSize: number = 6
): SearchResponse {
    const normalizedQuery = (query || "").trim().toLowerCase();

    // 1. Filter documents by query text and category
    let filtered = RAW_DOCUMENTS;

    if (category && category.toLowerCase() !== "all") {
        filtered = filtered.filter(doc => doc.type.toLowerCase() === category.toLowerCase());
    }

    // Get individual keywords to search for
    const keywords = normalizedQuery.split(/\s+/).filter(Boolean);

    if (keywords.length > 0) {
        filtered = filtered.filter(doc => {
            const matchInTitle = doc.title.toLowerCase();
            const matchInContent = doc.content.toLowerCase();

            // Document matches if title or content matches ANY of the keywords
            return keywords.some(kw => matchInTitle.includes(kw) || matchInContent.includes(kw));
        });
    }

    // 2. Format matching documents and construct pseudo-content snippets
    const results: SearchResult[] = filtered.map(doc => {
        const contentLower = doc.content.toLowerCase();

        // Find the first matching keyword index in content
        let matchIdx = -1;
        let matchedKeyword = "";

        for (const kw of keywords) {
            const idx = contentLower.indexOf(kw);
            if (idx !== -1 && (matchIdx === -1 || idx < matchIdx)) {
                matchIdx = idx;
                matchedKeyword = kw;
            }
        }

        // Generate contextual snippet
        let snippet = doc.content;
        const windowSize = 50; // Characters before and after

        if (matchIdx !== -1) {
            const start = Math.max(0, matchIdx - windowSize);
            const end = Math.min(doc.content.length, matchIdx + matchedKeyword.length + windowSize);

            snippet = doc.content.substring(start, end);

            // Add ellipsis if truncated
            if (start > 0) snippet = "..." + snippet;
            if (end < doc.content.length) snippet = snippet + "...";
        } else {
            // If no match in content (e.g. matched title), default to a substring of the start
            if (doc.content.length > 100) {
                snippet = doc.content.substring(0, 100) + "...";
            }
        }

        // Safely escape characters that might interfere and highlight keywords using regex
        let pseudoContent = snippet;
        const matchedKeywordsSet = new Set<string>();

        if (keywords.length > 0) {
            // Replace matching words with <hlgt>word</hlgt>
            // We sort keywords by length descending to prevent substring conflicts (e.g., highlighting "Next" inside "Next.js" twice)
            const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);

            for (const kw of sortedKeywords) {
                // Simple case-insensitive replacement using a capture group to preserve exact matching casing
                // Regex escaping to prevent syntax crashes
                const escapedKw = kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                const regex = new RegExp(`(${escapedKw})`, 'gi');

                pseudoContent = pseudoContent.replace(regex, (match) => {
                    matchedKeywordsSet.add(match.toLowerCase());
                    return `<hlgt>${match}</hlgt>`;
                });
            }
        }

        return {
            title: doc.title,
            type: doc.type,
            'pseudo-content': pseudoContent,
            'search-keyword': Array.from(matchedKeywordsSet),
            href: doc.href,
            date: doc.date,
            tags: doc.tags,
            readTime: doc.readTime
        };
    });

    // 3. Paginate results
    const totalResults = results.length;
    const totalPages = Math.max(1, Math.ceil(totalResults / pageSize));

    // Clamp page index
    const clampedPageIndex = Math.max(1, Math.min(totalPages, pageIndex));
    const startIndex = (clampedPageIndex - 1) * pageSize;
    const paginatedData = results.slice(startIndex, startIndex + pageSize);

    // Get active search categories for overview
    const matchedCategories = Array.from(new Set(results.map(r => r.type)));

    return {
        page: {
            offset: startIndex,
            index: clampedPageIndex,
            'total-pages': totalPages
        },
        overview: {
            'total-results': totalResults,
            'search-categories': matchedCategories.length > 0 ? matchedCategories : [category !== "all" ? category : "page"],
            target: "search_page"
        },
        filter: {
            category,
            query: query
        },
        data: paginatedData
    };
}
