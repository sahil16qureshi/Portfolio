import { BriefcaseBusiness, MapPin } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Professional work with data, backend systems, and reporting"
          description="Internship experience focused on useful backend workflows, data cleanup, and operational visibility."
        />
        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-line md:block" />
          {experience.map((item, index) => (
            <MotionDiv
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative md:pl-14"
            >
              <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-line bg-panel text-cyanSoft md:flex">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <article className="glass-card p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanSoft">
                      {item.company}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-white">{item.role}</h3>
                    <p className="mt-2 text-slate-300">{item.description}</p>
                  </div>
                  <div className="shrink-0 rounded-2xl border border-line bg-slate-950/40 px-4 py-3 text-sm text-slate-300">
                    <p>{item.duration}</p>
                    <p className="mt-1 flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyanSoft" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line bg-white/[0.05] px-3 py-1.5 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
