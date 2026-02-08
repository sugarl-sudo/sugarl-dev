import { Client } from "@notionhq/client";
import { unstable_cache } from "next/cache";
import type { Paper, Experience, Project, Profile, SkillCategory } from "@/types";
import type {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// ---------------------------------------------------------------------------
// Helpers — extract typed values from Notion page properties
// ---------------------------------------------------------------------------

function richTextToPlain(items: RichTextItemResponse[]): string {
  return items.map((t) => t.plain_text).join("");
}

function textOf(page: PageObjectResponse, name: string): string {
  const p = page.properties[name];
  if (!p) return "";
  if (p.type === "title") return richTextToPlain(p.title);
  if (p.type === "rich_text") return richTextToPlain(p.rich_text);
  return "";
}

function numberOf(page: PageObjectResponse, name: string): number {
  const p = page.properties[name];
  if (!p) return 0;
  return p.type === "number" ? (p.number ?? 0) : 0;
}

function urlOf(page: PageObjectResponse, name: string): string | undefined {
  const p = page.properties[name];
  if (!p) return undefined;
  return p.type === "url" ? (p.url ?? undefined) : undefined;
}

function checkboxOf(page: PageObjectResponse, name: string): boolean {
  const p = page.properties[name];
  if (!p) return false;
  return p.type === "checkbox" ? p.checkbox : false;
}

function multiSelectOf(page: PageObjectResponse, name: string): string[] {
  const p = page.properties[name];
  if (!p) return [];
  return p.type === "multi_select"
    ? p.multi_select.map((o) => o.name)
    : [];
}

function emailOf(page: PageObjectResponse, name: string): string {
  const p = page.properties[name];
  if (!p) return "";
  return p.type === "email" ? (p.email ?? "") : "";
}

// ---------------------------------------------------------------------------
// Fetch functions — using databases.query (SDK v2)
// ---------------------------------------------------------------------------

async function fetchProfileFromNotion(): Promise<Profile> {
  const dbId = process.env.NOTION_PROFILE_DB_ID!;
  const res = await notion.databases.query({
    database_id: dbId,
    page_size: 1,
  });

  const page = res.results[0] as PageObjectResponse;

  let skills: SkillCategory[] = [];
  const skillsJson = textOf(page, "Skills");
  if (skillsJson) {
    try {
      skills = JSON.parse(skillsJson);
    } catch {
      skills = [];
    }
  }

  return {
    name: textOf(page, "Name"),
    nameEn: textOf(page, "NameEn"),
    title: textOf(page, "Title"),
    bio: textOf(page, "Bio"),
    university: textOf(page, "University"),
    department: textOf(page, "Department"),
    email: emailOf(page, "Email"),
    github: urlOf(page, "GitHub")?.replace(/^https?:\/\/(www\.)?github\.com\//, "") || undefined,
    twitter: urlOf(page, "Twitter")?.replace(/^https?:\/\/(www\.)?(twitter|x)\.com\//, "") || undefined,
    linkedin: urlOf(page, "LinkedIn")?.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, "") || undefined,
    skills,
  };
}

async function fetchPapersFromNotion(): Promise<Paper[]> {
  const dbId = process.env.NOTION_PAPERS_DB_ID!;
  const res = await notion.databases.query({
    database_id: dbId,
    sorts: [{ property: "Year", direction: "descending" }],
  });

  return (res.results as PageObjectResponse[]).map((page) => ({
    id: page.id,
    title: textOf(page, "Title"),
    titleEn: textOf(page, "TitleEn") || undefined,
    authors: textOf(page, "Authors")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    venue: textOf(page, "Venue"),
    year: numberOf(page, "Year"),
    abstract: textOf(page, "Abstract"),
    tags: multiSelectOf(page, "Tags"),
    pdfUrl: urlOf(page, "PdfUrl"),
    doi: textOf(page, "DOI") || undefined,
  }));
}

async function fetchExperiencesFromNotion(): Promise<Experience[]> {
  const dbId = process.env.NOTION_EXPERIENCES_DB_ID!;
  const res = await notion.databases.query({
    database_id: dbId,
    sorts: [{ property: "Order", direction: "ascending" }],
  });

  return (res.results as PageObjectResponse[]).map((page) => ({
    id: page.id,
    company: textOf(page, "Company"),
    role: textOf(page, "Role"),
    period: textOf(page, "Period"),
    description: textOf(page, "Description"),
    achievements: textOf(page, "Achievements")
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean),
    technologies: multiSelectOf(page, "Technologies"),
  }));
}

async function fetchProjectsFromNotion(): Promise<Project[]> {
  const dbId = process.env.NOTION_PROJECTS_DB_ID!;
  const res = await notion.databases.query({
    database_id: dbId,
    sorts: [{ property: "Order", direction: "ascending" }],
  });

  return (res.results as PageObjectResponse[]).map((page) => ({
    id: page.id,
    title: textOf(page, "Title"),
    description: textOf(page, "Description"),
    longDescription: textOf(page, "LongDescription") || undefined,
    technologies: multiSelectOf(page, "Technologies"),
    githubUrl: urlOf(page, "GitHubUrl"),
    demoUrl: urlOf(page, "DemoUrl"),
    featured: checkboxOf(page, "Featured"),
  }));
}

// ---------------------------------------------------------------------------
// Cached exports (revalidate every hour)
// ---------------------------------------------------------------------------

const REVALIDATE = 3600;

export const getProfile = unstable_cache(fetchProfileFromNotion, ["notion-profile"], {
  revalidate: REVALIDATE,
});

export const getPapers = unstable_cache(fetchPapersFromNotion, ["notion-papers"], {
  revalidate: REVALIDATE,
});

export const getExperiences = unstable_cache(fetchExperiencesFromNotion, ["notion-experiences"], {
  revalidate: REVALIDATE,
});

export const getProjects = unstable_cache(fetchProjectsFromNotion, ["notion-projects"], {
  revalidate: REVALIDATE,
});
