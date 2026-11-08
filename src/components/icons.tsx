import type { SVGProps } from "react";
import type { IconKey, SocialKey } from "@/data/portfolio";

type IconProps = SVGProps<SVGSVGElement>;

function StrokeIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </StrokeIcon>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </StrokeIcon>
  );
}

export function ArrowUp(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </StrokeIcon>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 5v14" />
      <path d="m18 13-6 6-6-6" />
    </StrokeIcon>
  );
}

export function Download(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </StrokeIcon>
  );
}

export function Eye(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M2.1 12a10.8 10.8 0 0 1 19.8 0 10.8 10.8 0 0 1-19.8 0Z" />
      <circle cx="12" cy="12" r="3" />
    </StrokeIcon>
  );
}

export function Menu(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </StrokeIcon>
  );
}

export function Close(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </StrokeIcon>
  );
}

export function Copy(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect width="13" height="13" x="8" y="8" rx="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </StrokeIcon>
  );
}

export function Check(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m4 12 5 5L20 6" />
    </StrokeIcon>
  );
}

export function Mail(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m2 7 8.9 5.9a2 2 0 0 0 2.2 0L22 7" />
    </StrokeIcon>
  );
}

export function Github(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function XSocial(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Code(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </StrokeIcon>
  );
}

export function Layout(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </StrokeIcon>
  );
}

export function Terminal(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m4 17 6-6-6-6" />
      <path d="M12 19h8" />
    </StrokeIcon>
  );
}

export function Spreadsheet(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </StrokeIcon>
  );
}

export function FileText(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </StrokeIcon>
  );
}

export function GraduationCap(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </StrokeIcon>
  );
}

export function Target(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </StrokeIcon>
  );
}

export function MapPin(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </StrokeIcon>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m12 3-1.9 5.1a2 2 0 0 1-1.2 1.2L4 11l4.9 1.7a2 2 0 0 1 1.2 1.2L12 19l1.9-5.1a2 2 0 0 1 1.2-1.2L20 11l-4.9-1.7a2 2 0 0 1-1.2-1.2Z" />
      <path d="M5 3v4" />
      <path d="M3 5h4" />
    </StrokeIcon>
  );
}

export function User(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </StrokeIcon>
  );
}

export function BookOpen(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </StrokeIcon>
  );
}

export function SocialIcon({ name, ...props }: { name: SocialKey } & IconProps) {
  switch (name) {
    case "github":
      return <Github {...props} />;
    case "linkedin":
      return <Linkedin {...props} />;
    case "x":
      return <XSocial {...props} />;
    case "email":
      return <Mail {...props} />;
  }
}

export function SkillIcon({ name, ...props }: { name: IconKey } & IconProps) {
  switch (name) {
    case "code":
      return <Code {...props} />;
    case "layout":
      return <Layout {...props} />;
    case "terminal":
      return <Terminal {...props} />;
    case "spreadsheet":
      return <Spreadsheet {...props} />;
    case "document":
      return <FileText {...props} />;
    case "github":
      return <Github {...props} />;
    case "linkedin":
      return <Linkedin {...props} />;
    case "x":
      return <XSocial {...props} />;
    case "mail":
      return <Mail {...props} />;
  }
}
