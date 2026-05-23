import { ArrowDownToLine, Eye } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { MotionDiv } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { externalLinks } from "@/lib/utils";

type ResumePreviewProps = {
  standalone?: boolean;
};

export function ResumePreview({ standalone = false }: ResumePreviewProps) {
  return (
    <section id="resume" className={standalone ? "py-16" : "py-24"}>
      <div className="section-shell">
        <SectionHeading
          eyebrow="Resume"
          title="Professional resume overview"
          description="A concise summary of my experience, technical strengths, projects, and academic background, available for viewing or download."
        />
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <h3 className="text-2xl font-bold text-white">Sahil_Qureshi.pdf</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Open to software engineering, AI/ML, backend, and full-stack opportunities.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={externalLinks.resume} variant="primary" download>
                <ArrowDownToLine className="h-4 w-4" />
                Download Resume
              </ButtonLink>
              <ButtonLink href={externalLinks.resume}>
                <Eye className="h-4 w-4" />
                View Resume
              </ButtonLink>
            </div>
          </MotionDiv>
          <a
            href={externalLinks.resume}
            aria-label="Open full Sahil Qureshi resume"
            className="group relative block h-[28rem] overflow-hidden rounded-2xl border border-line bg-slate-950/70 p-4 shadow-2xl shadow-black/20"
          >
            <img
              src="/resume/Resume.jpg"
              alt="Sahil Qureshi resume preview"
              className="mx-auto h-auto w-full max-w-[28rem] rounded-lg shadow-xl shadow-black/30 transition duration-300 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent px-6 pb-6 pt-24">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Click to open full resume
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
