import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ImageFrame } from "@/components/ImageFrame";
import { MotionDiv } from "@/components/Motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.48 }}
      className="glass-card flex h-full flex-col overflow-hidden"
    >
      <ImageFrame src={project.image} alt={`${project.title} thumbnail`} label={project.image} className="aspect-video rounded-none border-0" />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyanSoft">{project.type}</p>
        <Link href={`/projects/${project.slug}`} className="group mt-3 inline-flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-white transition group-hover:text-cyanSoft">{project.title}</h3>
          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyanSoft" />
        </Link>
        <p className="mt-3 text-sm leading-6 text-slate-300">{project.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <span key={tech} className="rounded-full border border-line bg-white/[0.05] px-3 py-1 text-xs text-slate-200">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-line bg-slate-950/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Key result</p>
          <p className="mt-2 text-sm font-medium text-slate-100">{project.metrics[0]}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <ButtonLink href={project.github} className="px-4">
            <Github className="h-4 w-4" />
            GitHub
          </ButtonLink>
          <ButtonLink href={project.demo} className="px-4">
            <ExternalLink className="h-4 w-4" />
            Demo
          </ButtonLink>
          <ButtonLink href={`/projects/${project.slug}`} variant="primary" className="px-4">
            Case Study
          </ButtonLink>
        </div>
      </div>
    </MotionDiv>
  );
}
