import Image from "next/image";
import { siteConfig, socials } from "@/data/portfolio";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { ArrowDown, ArrowRight, Code, Sparkles, SocialIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pb-24 pt-32 sm:pt-36 lg:pb-32 lg:pt-40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-hero-grid absolute inset-0 opacity-80" />
        <div className="absolute -left-32 top-16 h-[30rem] w-[30rem] rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute -right-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#060608] to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-300 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-violet-300" />
              Hello, I&apos;m
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 font-display text-xl text-zinc-300 sm:text-2xl">
              <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                {siteConfig.role}
              </span>
              <span className="text-zinc-500"> & </span>
              <span className="text-zinc-300">Documentation Enthusiast</span>
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 text-pretty">
              {siteConfig.intro}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#projects">
                View projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Get in touch
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-white/15" />
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.key}
                    href={social.href}
                    target={social.key === "email" ? undefined : "_blank"}
                    rel={social.key === "email" ? undefined : "noopener noreferrer"}
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-white"
                  >
                    <SocialIcon name={social.key} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} className="relative mx-auto w-full max-w-[420px]">
          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-violet-600/20 via-transparent to-cyan-400/10 blur-2xl" />
            <div className="relative rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-2.5 shadow-[0_30px_120px_-40px_rgba(139,92,246,0.55)] backdrop-blur">
              <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/5 bg-[#0a0a10]">
                <Image
                  src="/avatar.jpg"
                  alt={`Portrait of ${siteConfig.name}`}
                  fill
                  preload
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="animate-float absolute -left-5 top-16 hidden items-center gap-2 rounded-2xl border border-white/10 bg-[#0c0c13]/90 px-3.5 py-2.5 text-xs text-zinc-300 shadow-2xl backdrop-blur sm:flex">
              <Code className="h-4 w-4 text-violet-300" />
              HTML · CSS · JS
            </div>

            <div className="animate-float-delayed absolute -right-4 bottom-20 hidden items-center gap-2 rounded-2xl border border-white/10 bg-[#0c0c13]/90 px-3.5 py-2.5 text-xs text-zinc-300 shadow-2xl backdrop-blur sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Building with care
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600 transition hover:text-zinc-300 lg:flex"
      >
        Scroll to explore
        <ArrowDown className="animate-nudge h-3.5 w-3.5" />
      </a>
    </section>
  );
}
