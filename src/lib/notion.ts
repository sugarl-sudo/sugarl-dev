import { Client } from "@notionhq/client";
import { unstable_cache } from "next/cache";
import type { Paper, Experience, Project } from "@/types";
import type {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type Properties = PageObjectResponse["properties"];
type PropertyValue = Properties[string];

function richTextToPlain(items: RichTextItemResponse[]): string {
  return items.map((t) => t.plain_text).join("");
}

function prop(page: PageObjectResponse, name: string): PropertyValue {
  return page.properties[name];
}

function textOf(page: PageObjectResponse, name: string): string {
  const p = prop(page, name);
  if (p.type === "title") return richTextToPlain(p.title);
  if (p.type === "rich_text") return richTextToPlain(p.rich_text);
  return "";
}

function numberOf(page: PageObjectResponse, name: string): number {
  const p = prop(page, name);
  return p.type === "number" ? (p.number ?? 0) : 0;
}

function urlOf(page: PageObjectResponse, name: string): string | undefined {
  const p = prop(page, name);
  return p.type === "url" ? (p.url ?? undefined) : undefined;
}

function checkboxOf(page: PageObjectResponse, name: string): boolean {
  const p = prop(page, name);
  return p.type === "checkbox" ? p.checkbox : false;
}

function multiSelectOf(page: PageObjectResponse, name: string): string[] {
  const p = prop(page, name);
  return p.type === "multi_select"
    ? p.multi_select.map((o) => o.name)
    : [];
}

// ---------------------------------------------------------------------------
// Fetch functions
// ---------------------------------------------------------------------------

async function fetchPapersFromNotion(): Promise<Paper[]> {
  const dbId = process.env.NOTION_PAPERS_DB_ID!;
  const res = await notion.dataSources.query({
    data_source_id: dbId,
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
  const res = await notion.dataSources.query({
    data_source_id: dbId,
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
  const res = await notion.dataSources.query({
    data_source_id: dbId,
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

const REVALIDATE = 3600; // 1 hour

export const getPapers = unstable_cache(fetchPapersFromNotion, ["notion-papers"], {
  revalidate: REVALIDATE,
});

export const getExperiences = unstable_cache(fetchExperiencesFromNotion, ["notion-experiences"], {
  revalidate: REVALIDATE,
});

export const getProjects = unstable_cache(fetchProjectsFromNotion, ["notion-projects"], {
  revalidate: REVALIDATE,
});
