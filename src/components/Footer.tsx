import { navLinks, siteConfig, socials } from "@/data/portfolio";
import { SocialIcon } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050507]">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a
            href="#home"
            className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-400 via-violet-500 to-cyan-400 font-mono text-xs font-bold text-[#07070b]">
              {siteConfig.initials}
            </span>
            <span className="font-display text-sm font-semibold tracking-wide text-white">
              {siteConfig.name}
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-zinc-500 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.key}
                href={social.href}
                target={social.key === "email" ? undefined : "_blank"}
                rel={social.key === "email" ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-zinc-500 transition-colors hover:border-white/25 hover:text-white"
              >
                <SocialIcon name={social.key} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center text-[11px] text-zinc-600 sm:flex-row sm:text-left">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
