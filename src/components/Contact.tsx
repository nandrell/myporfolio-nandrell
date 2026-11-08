import { siteConfig, socials } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CopyEmailButton from "@/components/ui/CopyEmailButton";
import { ArrowUpRight, Mail, SocialIcon } from "@/components/icons";

export default function Contact() {
  const socialLinks = socials.filter((social) => social.key !== "email");

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="05 — Contact"
            title="Let's connect"
            description="Have a project in mind, a question, or just want to connect? My inbox is always open."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 sm:p-8">
              <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-500/10 text-violet-300 ring-1 ring-violet-400/20">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 block break-all text-base font-medium text-white transition-colors hover:text-violet-200 sm:text-lg"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <CopyEmailButton email={siteConfig.email} />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {socialLinks.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors group-hover:text-white">
                      <SocialIcon name={social.key} className="h-4 w-4" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white">
                      {social.label}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-zinc-500">
                      {social.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
