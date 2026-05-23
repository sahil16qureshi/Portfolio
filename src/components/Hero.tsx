import { ArrowDownToLine, Github, Linkedin, Rocket } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ImageFrame } from "@/components/ImageFrame";
import { MotionDiv } from "@/components/Motion";
import { externalLinks } from "@/lib/utils";

export function Hero() {
  const highlights = ["GIKI", "Full-stack + AI", "Product-minded builds"];

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.03fr_0.97fr]">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.06] px-4 py-2 text-sm text-slate-300">
            <Rocket className="h-4 w-4 text-redSoft" />
            Software products, AI workflows, and data-driven systems
          </div>
          <h1 className="fancy-name max-w-4xl text-6xl text-white sm:text-7xl lg:text-8xl">
            Sahil <span className="gradient-text">Qureshi</span>
          </h1>
          <p className="mt-5 text-xl font-semibold text-slate-100 sm:text-2xl">
            Software Engineer | AI/ML Enthusiast | Full-Stack Developer
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Building intelligent, scalable, and user-focused software systems across AI, data, and
            full-stack development.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="w-fit rounded-full border border-line bg-white/[0.045] px-4 py-2 text-sm font-semibold text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/#projects" variant="primary">View Projects</ButtonLink>
            <ButtonLink href={externalLinks.resume} download>
              <ArrowDownToLine className="h-4 w-4" />
              Download Resume
            </ButtonLink>
            <ButtonLink href={externalLinks.github}>
              <Github className="h-4 w-4" />
              GitHub
            </ButtonLink>
            <ButtonLink href={externalLinks.linkedin}>
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </ButtonLink>
          </div>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-redSoft/20 via-transparent to-violetSoft/20 blur-2xl" />
          <ImageFrame
            src="/images/profile.png"
            alt="Sahil Qureshi profile"
            label="public/images/profile.png"
            className="relative aspect-[4/5] shadow-glow"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
