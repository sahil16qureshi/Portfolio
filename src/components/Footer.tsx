import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { externalLinks } from "@/lib/utils";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line py-12">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanSoft">Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Let&apos;s build something useful.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Open to software engineering, AI/ML, backend, and full-stack opportunities.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-slate-300">
            <a href={externalLinks.email} className="inline-flex items-center gap-3 hover:text-white">
              <Mail className="h-4 w-4 text-cyanSoft" />
              REPLACE_THIS_WITH_ACTUAL_EMAIL
            </a>
            <a href={externalLinks.github} className="inline-flex items-center gap-3 hover:text-white">
              <Github className="h-4 w-4 text-cyanSoft" />
              GitHub placeholder
            </a>
            <a href={externalLinks.linkedin} className="inline-flex items-center gap-3 hover:text-white">
              <Linkedin className="h-4 w-4 text-cyanSoft" />
              LinkedIn placeholder
            </a>
            <p className="inline-flex items-center gap-3">
              <MapPin className="h-4 w-4 text-cyanSoft" />
              REPLACE_THIS_WITH_ACTUAL_LOCATION
            </p>
          </div>
        </div>
        <p className="mt-10 text-xs text-slate-500">
          © 2026 Sahil Qureshi. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
