import { siteConfig } from "@/data/portfolio";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { Download, Eye, FileText } from "@/components/icons";

export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(120deg,#12111a_0%,#0b0b11_48%,#091115_100%)] p-8 sm:p-12 lg:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
            />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-violet-300/90">
                  04 — Resume
                </p>
                <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
                  Want the full picture?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 text-pretty">
                  View or download a copy of my resume for a concise overview of
                  my skills, education, and goals.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="h-4 w-4" />
                    View resume
                  </ButtonLink>
                  <ButtonLink
                    href={siteConfig.resumeUrl}
                    download="Your-Name-Resume.pdf"
                    variant="secondary"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </ButtonLink>
                </div>
              </div>

              <div aria-hidden="true" className="relative mx-auto w-44 sm:w-52 lg:w-56">
                <div className="absolute inset-0 rotate-6 rounded-2xl border border-white/10 bg-white/[0.04]" />
                <div className="relative -rotate-3 rounded-2xl border border-white/10 bg-[#0d0d14] p-5 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-[#07070b]">
                      <FileText className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                      PDF
                    </span>
                  </div>
                  <div className="mt-5 space-y-2">
                    <div className="h-2 w-2/3 rounded-full bg-white/25" />
                    <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-5 space-y-2">
                    <div className="h-1.5 w-full rounded-full bg-white/10" />
                    <div className="h-1.5 w-5/6 rounded-full bg-white/10" />
                    <div className="h-1.5 w-4/6 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-5 space-y-2">
                    <div className="h-1.5 w-full rounded-full bg-white/10" />
                    <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-5 flex gap-1.5">
                    <span className="h-4 w-10 rounded-full bg-violet-400/20" />
                    <span className="h-4 w-8 rounded-full bg-cyan-300/15" />
                    <span className="h-4 w-12 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
