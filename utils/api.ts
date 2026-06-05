import { SupabaseClient } from "@supabase/supabase-js";

export interface GitHubRepoMeta {
    license: string;
    last_commit: string;
    last_commit_message: string;
    stargazers_count: number;
}

export interface ProjectAssetRow {
    id: string;
    project_id: string;
    asset_url: string;
    asset_type: "image" | "video";
    caption: string | null;
}

export interface ProjectRow {
    id: string;
    title: string;
    description: string;
    banner_image_url: string | null;
    logo_url: string | null;
    github_url: string;
    view_url: string | null;
    year: number;
    license: string | null;
    features: unknown; // We keep features as 'unknown' for flexible schema mapping
    project_assets?: ProjectAssetRow[];
    tag?: string; // Optional field for page mappings
}

export interface ExperienceRow {
    company_name: string;
    role: string;
    start_time: string;
    end_time: string;
    certificate_url: string | null;
    company_url: string | null;
}

export interface EducationRow {
    degree: string;
    institute: string;
    specialization: string;
    duration: string;
    subjects: string[] | null;
    projects: string[] | null;
}

export interface LatestUpdateRow {
    title: string;
    description: string;
    created_at: string;
    badges: string[] | null;
    read_time: string | null;
    date?: string; // Optional field for layout mapping
}

export interface JournalPostRow {
    id: string;
    title: string;
    description: string;
    banner_image_url: string | null;
    created_at: string;
    read_time: string | null;
    category: string | null;
    date?: string; // Optional field for layout mapping
}

export interface FetchResult<T> {
    data: T | null;
    error: {
        code: string;
        message: string;
    } | null;
}

// Helper to fetch GitHub repo metadata (license, last commit, stargazers)
export async function getGitHubRepo(url?: string): Promise<GitHubRepoMeta | null> {
    if (!url) return null;
    const match = url.match(/github\.com\/([^\/]+)\/([^\/\?\s]+)/);
    if (!match) return null;
    const [, owner, repo] = match;
    try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });
        if (!res.ok) return null;
        const data = await res.json();
        return {
            license: data.license?.spdx_id || data.license?.name || "MIT License",
            last_commit: new Date(data.pushed_at).toLocaleDateString("en-US", {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }),
            last_commit_message: "Latest repository updates pushed to remote",
            stargazers_count: data.stargazers_count
        };
    } catch {
        return null;
    }
}

// 1. Fetch Latest Updates
export async function getLatestUpdates(supabase: SupabaseClient): Promise<FetchResult<LatestUpdateRow[]>> {
    try {
        const { data, error } = await supabase
            .from("latest_updates")
            .select("*")
            .order("created_at", { ascending: false });
        if (error) {
            return { data: null, error: { code: error.code || "DB_ERROR", message: error.message } };
        }
        return { data: data as LatestUpdateRow[], error: null };
    } catch (e: unknown) {
        return { data: null, error: { code: "UNKNOWN_ERROR", message: (e as Error).message || String(e) } };
    }
}

// 2. Fetch Journal/Blog Posts
export async function getJournalPosts(supabase: SupabaseClient): Promise<FetchResult<JournalPostRow[]>> {
    try {
        const { data, error } = await supabase
            .from("journal_posts")
            .select("*")
            .order("created_at", { ascending: false });
        if (error) {
            return { data: null, error: { code: error.code || "DB_ERROR", message: error.message } };
        }
        return { data: data as JournalPostRow[], error: null };
    } catch (e: unknown) {
        return { data: null, error: { code: "UNKNOWN_ERROR", message: (e as Error).message || String(e) } };
    }
}

// 3. Fetch Projects (along with their assets)
export async function getProjects(supabase: SupabaseClient, limit?: number): Promise<FetchResult<ProjectRow[]>> {
    try {
        let query = supabase
            .from("projects")
            .select("*, project_assets(*)")
            .order("year", { ascending: false });
        if (limit) {
            query = query.limit(limit);
        }
        const { data, error } = await query;
        if (error) {
            return { data: null, error: { code: error.code || "DB_ERROR", message: error.message } };
        }
        return { data: data as ProjectRow[], error: null };
    } catch (e: unknown) {
        return { data: null, error: { code: "UNKNOWN_ERROR", message: (e as Error).message || String(e) } };
    }
}

// 4. Fetch a specific Project by ID (along with assets)
export async function getProjectById(supabase: SupabaseClient, id: string): Promise<FetchResult<ProjectRow>> {
    try {
        const { data, error } = await supabase
            .from("projects")
            .select("*, project_assets(*)")
            .eq("id", id)
            .single();
        if (error) {
            return { data: null, error: { code: error.code || "DB_ERROR", message: error.message } };
        }
        return { data: data as ProjectRow, error: null };
    } catch (e: unknown) {
        return { data: null, error: { code: "UNKNOWN_ERROR", message: (e as Error).message || String(e) } };
    }
}

// 5. Fetch Professional Experiences
export async function getExperiences(supabase: SupabaseClient): Promise<FetchResult<ExperienceRow[]>> {
    try {
        const { data, error } = await supabase
            .from("experiences")
            .select("*")
            .order("created_at", { ascending: false });
        if (error) {
            return { data: null, error: { code: error.code || "DB_ERROR", message: error.message } };
        }
        return { data: data as ExperienceRow[], error: null };
    } catch (e: unknown) {
        return { data: null, error: { code: "UNKNOWN_ERROR", message: (e as Error).message || String(e) } };
    }
}

// 6. Fetch Education History
export async function getEducation(supabase: SupabaseClient): Promise<FetchResult<EducationRow[]>> {
    try {
        const { data, error } = await supabase
            .from("education")
            .select("*")
            .order("created_at", { ascending: false });
        if (error) {
            return { data: null, error: { code: error.code || "DB_ERROR", message: error.message } };
        }
        return { data: data as EducationRow[], error: null };
    } catch (e: unknown) {
        return { data: null, error: { code: "UNKNOWN_ERROR", message: (e as Error).message || String(e) } };
    }
}

// 7. Fetch Resumes
export async function getResumes(supabase: SupabaseClient): Promise<FetchResult<unknown[]>> {
    try {
        const { data, error } = await supabase
            .from("resumes")
            .select("*")
            .order("created_at", { ascending: false });
        if (error) {
            return { data: null, error: { code: error.code || "DB_ERROR", message: error.message } };
        }
        return { data: data, error: null };
    } catch (e: unknown) {
        return { data: null, error: { code: "UNKNOWN_ERROR", message: (e as Error).message || String(e) } };
    }
}

// 8. Fetch Skills
export async function getSkills(supabase: SupabaseClient): Promise<FetchResult<unknown[]>> {
    try {
        const { data, error } = await supabase
            .from("skills")
            .select("*")
            .order("created_at", { ascending: false });
        if (error) {
            return { data: null, error: { code: error.code || "DB_ERROR", message: error.message } };
        }
        return { data: data, error: null };
    } catch (e: unknown) {
        return { data: null, error: { code: "UNKNOWN_ERROR", message: (e as Error).message || String(e) } };
    }
}

// 9. Submit a Contact Form message
export async function submitContact(
    supabase: SupabaseClient, 
    contact: { name: string; email: string; message: string }
): Promise<void> {
    const { error } = await supabase
        .from("contacts")
        .insert([contact]);
    if (error) throw error;
}

export interface SkillsShowcaseRow {
    id: string;
    slug: string;
    label: string;
    title: string;
    description: string;
    type: "what_i_build" | "currently_exploring";
    display_order: number;
}

// 10. Fetch Skills Showcase dynamic tabs
export async function getSkillsShowcase(supabase: SupabaseClient): Promise<FetchResult<SkillsShowcaseRow[]>> {
    try {
        const { data, error } = await supabase
            .from("skills_showcase")
            .select("*")
            .order("display_order", { ascending: true });
        if (error) {
            return { data: null, error: { code: error.code || "DB_ERROR", message: error.message } };
        }
        return { data: data as SkillsShowcaseRow[], error: null };
    } catch (e: unknown) {
        return { data: null, error: { code: "UNKNOWN_ERROR", message: (e as Error).message || String(e) } };
    }
}

