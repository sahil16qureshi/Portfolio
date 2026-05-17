import { Trophy, UsersRound } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { leadership } from "@/data/leadership";

export function Leadership() {
  return (
    <section id="leadership" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Leadership"
          title="Team leadership beyond code"
          description="Recruiters do not just hire code output. These activities show ownership, communication, planning, and the ability to lead people through real pressure."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {leadership.map((item, index) => (
            <MotionDiv
              key={item.organization}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.48, delay: index * 0.08 }}
              className="glass-card p-6"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-violetSoft/12 text-violetSoft">
                {index === 0 ? <UsersRound className="h-6 w-6" /> : <Trophy className="h-6 w-6" />}
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violetSoft">{item.role}</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{item.organization}</h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violetSoft" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
