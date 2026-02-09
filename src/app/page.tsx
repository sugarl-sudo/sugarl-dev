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

        {/* Experience & Skills — side by side */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Experience experiences={experiences} />
            </div>
            <div className="lg:col-span-2">
              <About profile={profile} />
            </div>
          </div>
        </section>

        <Papers papers={papers} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </>
  );
}
