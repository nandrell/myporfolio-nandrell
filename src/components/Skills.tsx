import { skills } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { SkillIcon } from "@/components/icons";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 border-y border-white/5 bg-white/[0.015] py-24 sm:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="02 — Skills"
            title="Tools and skills I work with"
            description="The fundamentals I use to build for the web, plus the everyday tools that keep my work organized and well documented."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <Reveal
              key={skill.title}
              delay={index * 60}
              className={`${skill.span} h-full`}
            >
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b11] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_70px_-45px_rgba(139,92,246,0.9)]">
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${skill.accent} opacity-70`}
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-violet-200 transition-colors duration-300 group-hover:border-violet-400/30 group-hover:text-white">
                      <SkillIcon name={skill.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-lg font-semibold text-white">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {skill.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
