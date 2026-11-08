import { aboutProfile, siteConfig } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { GraduationCap, MapPin, Target, User } from "@/components/icons";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="01 — About"
            title="A little about me"
            description="A quick look at my background, my education, and the direction I want to take my career."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8">
          <div className="space-y-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-8">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-violet-500/10 text-violet-300">
                      <User className="h-4 w-4" />
                    </span>
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400">
                      Background
                    </h3>
                  </div>
                  <p className="mt-5 text-base leading-7 text-zinc-400 text-pretty">
                    {aboutProfile.background}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal delay={80} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-cyan-400/10 text-cyan-300">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <h3 className="mt-5 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400">
                    Education
                  </h3>
                  <p className="mt-3 text-sm font-medium text-white">
                    {aboutProfile.education.degree}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {aboutProfile.education.school}
                  </p>
                  <p className="mt-auto pt-4 font-mono text-[11px] text-zinc-600">
                    {aboutProfile.education.period}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-emerald-400/10 text-emerald-300">
                    <Target className="h-4 w-4" />
                  </span>
                  <h3 className="mt-5 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400">
                    Career goals
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400 text-pretty">
                    {aboutProfile.careerGoals}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={120} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7 sm:p-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-violet-300/90">
                  What I value
                </p>
                <ul className="mt-7 space-y-6">
                  {aboutProfile.values.map((value, index) => (
                    <li key={value.title} className="flex gap-4">
                      <span className="font-mono text-xs text-violet-300/60">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {value.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-zinc-400">
                          {value.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <MapPin className="h-4 w-4 text-violet-300" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    Based in
                  </p>
                  <p className="text-sm text-zinc-200">{siteConfig.location}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
