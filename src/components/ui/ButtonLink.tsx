import type { AnchorHTMLAttributes } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-violet-500 text-white shadow-[0_10px_40px_-12px_rgba(139,92,246,0.8)] hover:bg-violet-400 hover:shadow-[0_14px_50px_-10px_rgba(139,92,246,0.9)]",
  secondary:
    "border border-white/10 bg-white/[0.04] text-zinc-100 hover:border-white/25 hover:bg-white/[0.07]",
  ghost: "text-zinc-300 hover:text-white",
};

export default function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
