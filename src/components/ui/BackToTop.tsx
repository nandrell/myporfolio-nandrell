"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@/components/icons";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-zinc-300 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </a>
  );
}
