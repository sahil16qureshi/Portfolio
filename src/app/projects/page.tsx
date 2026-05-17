import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Sahil Qureshi",
  description: "Engineering case studies and project portfolio for Sahil Qureshi.",
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Project library"
          title="All engineering projects"
          description="A deeper look at full-stack systems, AI automation, analytics pipelines, and machine learning work. Every card links to a case study structure designed for recruiters and technical reviewers."
        />
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
