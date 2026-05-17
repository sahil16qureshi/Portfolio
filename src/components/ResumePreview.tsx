import { ArrowDownToLine, Eye } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ImageFrame } from "@/components/ImageFrame";
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
          title="Downloadable resume for recruiters"
          description="A dedicated resume preview and direct PDF download. Replace the placeholder PDF and preview image with your latest resume before sharing."
        />
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <h3 className="text-2xl font-bold text-white">Sahil_Qureshi_Resume.pdf</h3>
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
          <ImageFrame
            src={externalLinks.resumePreview}
            alt="Resume preview"
            label="public/resume/resume-preview.png"
            className="min-h-[34rem]"
          />
        </div>
      </div>
    </section>
  );
}
