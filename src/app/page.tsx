import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Leadership } from "@/components/Leadership";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ResumePreview } from "@/components/ResumePreview";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <section id="projects" className="py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects built like products"
            description="A recruiter-friendly snapshot of the systems, data products, and AI workflows I have built, with direct paths to code, demos, and case studies."
          />
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>
      <Leadership />
      <ResumePreview />
    </>
  );
}
