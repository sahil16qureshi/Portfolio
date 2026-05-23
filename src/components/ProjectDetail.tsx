import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ImageFrame } from "@/components/ImageFrame";
import { MotionDiv } from "@/components/Motion";
import type { Project } from "@/data/projects";

type ProjectDetailProps = {
  project: Project;
};

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="glass-card p-6">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-slate-300">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-redSoft" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="min-h-screen py-28">
      <div className="section-shell">
        <Link
          href="/projects"
          className="focus-ring mb-8 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-slate-300 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-redSoft">{project.type}</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{project.longDescription}</p>
            {project.achievement ? (
              <p className="mt-5 inline-flex rounded-full border border-emeraldSoft/25 bg-emeraldSoft/10 px-4 py-2 text-sm font-semibold text-emeraldSoft">
                {project.achievement}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={project.github} variant="primary">
                <Github className="h-4 w-4" />
                GitHub
              </ButtonLink>
              <ButtonLink href={project.demo}>
                <ExternalLink className="h-4 w-4" />
                Demo/tutorial
              </ButtonLink>
              {project.extraLink ? (
                <ButtonLink href={project.extraLink.href}>{project.extraLink.label}</ButtonLink>
              ) : null}
            </div>
          </div>
          <ImageFrame
            src={project.image}
            alt={`${project.title} project thumbnail`}
            label={project.image}
            className="aspect-[4/3] shadow-glow"
          />
        </MotionDiv>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.7fr_0.3fr]">
          <div className="grid gap-5">
            <DetailBlock title="What I built">
              <p>{project.longDescription}</p>
            </DetailBlock>
            <DetailBlock title="Why I built it">
              <p>{project.problem}</p>
            </DetailBlock>
            <DetailBlock title="My role">
              <p>{project.role}</p>
            </DetailBlock>
            <DetailBlock title="How it works">
              <BulletList items={project.architecture} />
            </DetailBlock>
            <DetailBlock title="System architecture">
              <div className="rounded-2xl border border-line bg-slate-950/50 p-5">
                <BulletList items={project.architecture} />
              </div>
            </DetailBlock>
            <DetailBlock title="Screenshots and demo">
              <ImageFrame
                src={project.demoImage ?? project.image}
                alt={`${project.title} demo preview`}
                label={project.demoImage ?? project.image}
                className="min-h-80"
              />
            </DetailBlock>
            <DetailBlock title="Technical challenges">
              <BulletList items={project.challenges} />
            </DetailBlock>
            <DetailBlock title="Results">
              <BulletList items={project.metrics} />
            </DetailBlock>
            <DetailBlock title="What I learned">
              <BulletList items={project.learnings} />
            </DetailBlock>
            <section className="glass-card p-6">
              <h2 className="text-2xl font-bold text-white">Explore the code</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Explore the code, setup instructions, and technical documentation on GitHub.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={project.github} variant="primary">
                  <Github className="h-4 w-4" />
                  Open GitHub
                </ButtonLink>
                <ButtonLink href={project.demo}>
                  <ExternalLink className="h-4 w-4" />
                  Open demo/tutorial
                </ButtonLink>
              </div>
            </section>
          </div>
          <aside className="h-fit rounded-2xl border border-line bg-white/[0.045] p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-bold text-white">Tech stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-line bg-white/[0.06] px-3 py-1.5 text-xs text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
            <h2 className="mt-8 text-lg font-bold text-white">Key features</h2>
            <div className="mt-4 text-sm leading-6 text-slate-300">
              <BulletList items={project.features} />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
