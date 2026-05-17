import { Award, BookOpen, GraduationCap } from "lucide-react";
import { ImageFrame } from "@/components/ImageFrame";
import { MotionDiv } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";

const coursework = [
  "Data Structures and Algorithms",
  "Database Systems",
  "Software Engineering",
  "Artificial Intelligence",
  "Computer Networks",
  "Cybersecurity",
  "Parallel Processing",
];

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education"
          title="GIKI journey"
          description="A four-year Computer Science foundation shaped by software engineering, systems thinking, AI, and project-driven learning."
        />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-cyanSoft/12 p-3 text-cyanSoft">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Ghulam Ishaq Khan Institute of Engineering Sciences and Technology, GIKI
                </h3>
                <p className="mt-2 text-slate-300">B.S. Computer Science | 2022 to 2026</p>
                <p className="mt-1 text-slate-400">CGPA: 3.1/4.0</p>
              </div>
            </div>
            <div className="mt-8 grid gap-5">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyanSoft">
                  <BookOpen className="h-4 w-4" />
                  Relevant coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-white/[0.05] px-3 py-1.5 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-slate-950/40 p-5">
                <p className="text-sm font-semibold text-white">Final Year Project</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Horizon UI, Gesture and Voice Controlled Desktop Interface
                </p>
              </div>
              <div className="rounded-2xl border border-emeraldSoft/25 bg-emeraldSoft/8 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-emeraldSoft">
                  <Award className="h-4 w-4" />
                  Achievement
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  3rd Place at Industrial Open House 2026
                </p>
              </div>
            </div>
          </MotionDiv>
          <div className="grid gap-4 sm:grid-cols-2">
            <ImageFrame
              src="/images/giki-campus-1.jpg"
              alt="GIKI campus placeholder"
              label="public/images/giki-campus-1.jpg"
              className="min-h-64"
            />
            <ImageFrame
              src="/images/giki-campus-2.jpg"
              alt="GIKI campus second placeholder"
              label="public/images/giki-campus-2.jpg"
              className="min-h-64 sm:translate-y-8"
            />
            <ImageFrame
              src="/images/giki-project.jpg"
              alt="Horizon UI project placeholder"
              label="public/images/giki-project.jpg"
              className="min-h-64 sm:col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
