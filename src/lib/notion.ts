import { Client } from "@notionhq/client";
import { unstable_cache } from "next/cache";
import type { Paper, Experience, Project } from "@/types";
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

function urlOf(page: PageObjectResponse, name: string): string | undefined {
  const p = page.properties[name];
  if (!p) return undefined;
  return p.type === "url" ? (p.url ?? undefined) : undefined;
}

function multiSelectOf(page: PageObjectResponse, name: string): string[] {
  const p = page.properties[name];
  if (!p) return [];
  return p.type === "multi_select"
    ? p.multi_select.map((o) => o.name)
    : [];
}

function selectOf(page: PageObjectResponse, name: string): string {
  const p = page.properties[name];
  if (!p) return "";
  return p.type === "select" ? (p.select?.name ?? "") : "";
}

function numberOf(page: PageObjectResponse, name: string): number {
  const p = page.properties[name];
  if (!p) return 0;
  return p.type === "number" ? (p.number ?? 0) : 0;
}

// ---------------------------------------------------------------------------
// Fetch functions
// ---------------------------------------------------------------------------
// Notion DB property names (Japanese) mapped to our TypeScript types.
//
// Papers DB:  タイトル(title), 著者名(rich_text), ジャーナル名・会議名(rich_text),
//             arxivリンク(url), その他URL(url)
//
// Experiences DB: 企業名(title), 期間(rich_text), 業種(select), 利用技術(multi_select)
//
// Projects DB: プロジェクト名(title), 概要(rich_text), githubリンク(url)
// ---------------------------------------------------------------------------

async function fetchPapersFromNotion(): Promise<Paper[]> {
  const dbId = process.env.NOTION_PAPERS_DB_ID!;
  const res = await notion.databases.query({
    database_id: dbId,
  });

  return (res.results as PageObjectResponse[]).map((page) => ({
    id: page.id,
    title: textOf(page, "タイトル"),
    authors: textOf(page, "著者名")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    venue: textOf(page, "ジャーナル名・会議名"),
    year: numberOf(page, "Year"),
    abstract: "", // Not in Notion DB
    tags: [],
    pdfUrl: urlOf(page, "arxivリンク"),
    doi: undefined,
  }));
}

async function fetchExperiencesFromNotion(): Promise<Experience[]> {
  const dbId = process.env.NOTION_EXPERIENCES_DB_ID!;
  const res = await notion.databases.query({
    database_id: dbId,
  });

  return (res.results as PageObjectResponse[]).map((page) => ({
    id: page.id,
    company: textOf(page, "企業名"),
    role: selectOf(page, "業種"),
    period: textOf(page, "期間"),
    description: "",
    achievements: [],
    technologies: multiSelectOf(page, "利用技術"),
  }));
}

async function fetchProjectsFromNotion(): Promise<Project[]> {
  const dbId = process.env.NOTION_PROJECTS_DB_ID!;
  const res = await notion.databases.query({
    database_id: dbId,
  });

  return (res.results as PageObjectResponse[]).map((page) => ({
    id: page.id,
    title: textOf(page, "プロジェクト名"),
    description: textOf(page, "概要"),
    technologies: [],
    githubUrl: urlOf(page, "githubリンク"),
    featured: false,
  }));
}

// ---------------------------------------------------------------------------
// Cached exports (revalidate every hour)
// ---------------------------------------------------------------------------

const REVALIDATE = 3600;

export const getPapers = unstable_cache(fetchPapersFromNotion, ["notion-papers"], {
  revalidate: REVALIDATE,
});

export const getExperiences = unstable_cache(fetchExperiencesFromNotion, ["notion-experiences"], {
  revalidate: REVALIDATE,
});

export const getProjects = unstable_cache(fetchProjectsFromNotion, ["notion-projects"], {
  revalidate: REVALIDATE,
});
