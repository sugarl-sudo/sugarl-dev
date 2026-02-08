import type { Paper, Experience, Project, Profile } from "@/types";
import {
  profile as staticProfile,
  papers as staticPapers,
  experiences as staticExperiences,
  projects as staticProjects,
} from "@/lib/data";

const useNotion = Boolean(process.env.NOTION_API_KEY);

async function fromNotion<T>(fetcher: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fetcher();
  } catch (e) {
    console.error("[get-data] Notion fetch failed, using fallback:", e);
    return fallback;
  }
}

export async function getProfile(): Promise<Profile> {
  if (!useNotion) return staticProfile;
  const { getProfile: fetch } = await import("@/lib/notion");
  return fromNotion(fetch, staticProfile);
}

export async function getPapers(): Promise<Paper[]> {
  if (!useNotion) return staticPapers;
  const { getPapers: fetch } = await import("@/lib/notion");
  return fromNotion(fetch, staticPapers);
}

export async function getExperiences(): Promise<Experience[]> {
  if (!useNotion) return staticExperiences;
  const { getExperiences: fetch } = await import("@/lib/notion");
  return fromNotion(fetch, staticExperiences);
}

export async function getProjects(): Promise<Project[]> {
  if (!useNotion) return staticProjects;
  const { getProjects: fetch } = await import("@/lib/notion");
  return fromNotion(fetch, staticProjects);
}
