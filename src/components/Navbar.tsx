"use client";

import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/portfolio";
import { ArrowUpRight, Close, Menu } from "@/components/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(window.scrollY / height, 1) : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#07070b]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-violet-400 via-violet-300 to-cyan-300 transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />

      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-400 via-violet-500 to-cyan-400 font-mono text-xs font-bold text-[#07070b] shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105">
            {siteConfig.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-white sm:block">
            {siteConfig.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`block rounded-full px-3.5 py-2 text-sm transition-colors lg:px-4 ${
                  active === link.href
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-100 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5 text-violet-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-200 transition hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400 lg:hidden"
        >
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`overflow-hidden border-t border-white/10 bg-[#07070b]/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[26rem] opacity-100" : "invisible max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="px-6 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm transition ${
                    active === link.href
                      ? "bg-white/10 text-white"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 text-zinc-600" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 py-3 text-sm font-medium text-white transition hover:bg-violet-400"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
