import { BrainCircuit, Code2, Users } from "lucide-react";
import { MotionDiv, MotionSection } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";

const cards = [
  {
    title: "Software Engineering",
    description: "Backend systems, APIs, Databases, and Full-Stack platforms.",
    icon: Code2,
  },
  {
    title: "AI & Data",
    description: "Machine learning workflows, Data pipelines, Analytics, and Intelligent Automation.",
    icon: BrainCircuit,
  },
  {
    title: "Product & Leadership",
    description: "Project ownership, Team Leadership, Event Management, and Technical Communication.",
    icon: Users,
  },
];

export function About() {
  return (
    <MotionSection
      id="about"
      className="py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-shell">
        <SectionHeading
          eyebrow="About me"
          title="Software engineer focused on practical, intelligent systems"
          description="I am a Computer Science graduate from Ghulam Ishaq Khan Institute with experience building full-stack applications, AI-powered workflows, backend systems, and data-driven projects. My work includes AI support-ticket automation, gesture and voice-based desktop control, large-scale chess data analysis, and energy analytics systems. I enjoy turning rough ideas into complete, usable, and demo-ready products."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <MotionDiv
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card p-6"
              >
                <Icon className="mb-5 h-8 w-8 text-redSoft" />
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{card.description}</p>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
