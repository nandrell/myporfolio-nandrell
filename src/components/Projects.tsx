import Image from "next/image";
import { projects, siteConfig, type Project } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight, Download, Github } from "@/components/icons";

function ProjectCard({ project }: { project: Project }) {
  const primaryLink = project.links[0];
  const isGithub = primaryLink.type === "github";
  const PrimaryIcon =
    primaryLink.type === "github"
      ? Github
      : primaryLink.type === "download"
        ? Download
        : ArrowUpRight;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b11] transition-all duration-500 hover:-translate-y-1.5 hover:border-violet-400/30 hover:shadow-[0_30px_90px_-45px_rgba(139,92,246,0.65)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#0d0d14]">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized={project.image.endsWith(".svg")}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70"
        />
        {project.featured ? (
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-violet-500/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur">
            Featured
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-white">
            {project.title}
          </h3>
          <a
            href={primaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              isGithub
                ? `View ${project.title} on GitHub`
                : `Open ${primaryLink.label}`
            }
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
          >
            <PrimaryIcon className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-3 text-sm leading-6 text-zinc-400 text-pretty">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-6">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
            >
              {link.type === "download" ? (
                <Download className="h-4 w-4 shrink-0" />
              ) : null}
              <span className="truncate">{link.label}</span>
              <ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="03 — Projects"
              title="Selected work"
              description="A few projects that show how I approach design, code, and documentation."
            />
          </Reveal>

          <Reveal delay={80}>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
            >
              More on GitHub
              <ArrowUpRight className="h-3.5 w-3.5 text-violet-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 90} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
