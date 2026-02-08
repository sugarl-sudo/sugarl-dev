import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Papers } from "@/components/sections/papers";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import {
  getProfile,
  getPapers,
  getExperiences,
  getProjects,
} from "@/lib/get-data";

export default async function Home() {
  const [profile, papers, experiences, projects] = await Promise.all([
    getProfile(),
    getPapers(),
    getExperiences(),
    getProjects(),
  ]);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero profile={profile} />
        <About profile={profile} />
        <Papers papers={papers} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </>
  );
}
