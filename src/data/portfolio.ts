export type IconKey =
  | "code"
  | "layout"
  | "terminal"
  | "spreadsheet"
  | "document"
  | "github"
  | "linkedin"
  | "x"
  | "mail";

export type SocialKey = "github" | "linkedin" | "x" | "email";

export const siteConfig = {
  name: "Jan Nandrell P. Sabino",
  initials: "JNS",
  role: "Web Developer",
  tagline: "Web Developer & Documentation Enthusiast",
  intro:
    "I build clean, responsive web experiences with a focus on thoughtful design, readable code, and clear documentation. I am currently growing my skills one project at a time.",
  email: "nandrellsabino@gmail.com",
  location: "Bangued, Abra",
  github: "https://github.com/nandrell",
  linkedin: "https://linkedin.com/in/yourusername",
  x: "https://x.com/yourusername",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export const socials: {
  key: SocialKey;
  label: string;
  handle: string;
  href: string;
}[] = [
  {
    key: "github",
    label: "GitHub",
    handle: "github.com/nandrell",
    href: siteConfig.github,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "linkedin.com/in/yourusername",
    href: siteConfig.linkedin,
  },
  {
    key: "x",
    label: "X / Twitter",
    handle: "x.com/yourusername",
    href: siteConfig.x,
  },
  {
    key: "email",
    label: "Email",
    handle: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

export type Skill = {
  title: string;
  description: string;
  tags: string[];
  icon: IconKey;
  accent: string;
  span: string;
};

export const skills: Skill[] = [
  {
    title: "HTML, CSS & JavaScript",
    description:
      "Building accessible, responsive interfaces with modern, semantic web standards.",
    tags: ["Semantic HTML", "Modern CSS", "ES6+", "Responsive layouts"],
    icon: "code",
    accent: "from-violet-400/20 to-transparent",
    span: "lg:col-span-2",
  },
  {
    title: "Web Development",
    description:
      "Turning ideas into polished websites with attention to structure, usability, and performance.",
    tags: ["Responsive design", "Accessibility", "Performance", "Modern UI"],
    icon: "layout",
    accent: "from-cyan-400/20 to-transparent",
    span: "lg:col-span-2",
  },
  {
    title: "Programming",
    description:
      "Approaching problems with logic, breaking them down, and writing code that is easy to follow.",
    tags: ["Problem solving", "Debugging", "Logic", "Version control"],
    icon: "terminal",
    accent: "from-violet-400/20 to-transparent",
    span: "lg:col-span-2",
  },
  {
    title: "Microsoft Word & Excel",
    description:
      "Creating clear documents and organized spreadsheets for everyday productivity and reporting.",
    tags: ["Documents", "Spreadsheets", "Formulas", "Formatting"],
    icon: "spreadsheet",
    accent: "from-emerald-400/20 to-transparent",
    span: "lg:col-span-3",
  },
  {
    title: "Documentation",
    description:
      "Writing structured, readable documentation that helps people understand and use a project.",
    tags: ["Technical writing", "READMEs", "Clear structure", "Editing"],
    icon: "document",
    accent: "from-amber-400/20 to-transparent",
    span: "lg:col-span-3",
  },
];

export type ProjectLink = {
  label: string;
  href: string;
  type: "github" | "website" | "download";
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Online Floral Shop System",
    description:
      "A responsive online floral shop system for browsing arrangements, viewing product details, and placing orders through a simple, friendly interface.",
    tech: ["HTML", "CSS", "JavaScript", "Web Development"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/nandrell/Flower-Shop",
        type: "github",
      },
    ],
    image: "/projects/floral-shop.png",
    featured: true,
  },
  {
    title: "88-Minimart Point of Sale System",
    description:
      "A point-of-sale system for 88 Minimart with product selection, cart management, and a clear checkout flow for daily transactions.",
    tech: ["HTML", "CSS", "JavaScript", "Web Development"],
    links: [
      {
        label: "Visit live site",
        href: "https://88minimart.infinityfree.me/login",
        type: "website",
      },
    ],
    image: "/projects/minimart-pos.png",
  },
  {
    title: "My Apps",
    description:
      "A collection of apps I have built, including a student grade tracker and an attendance monitor for everyday use.",
    tech: ["Android Apps", "Student Tools", "Productivity"],
    links: [
      {
        label: "Student Grade Tracker (APK)",
        href: "https://www.mediafire.com/file/mxcvnzzwyu8wdzv/Student_Grade_Tracker.apk/file",
        type: "download",
      },
      {
        label: "Attendance Monitor (APK)",
        href: "https://www.mediafire.com/file/0q4yger0facjtor/Attendance_Monitor.apk/file",
        type: "download",
      },
    ],
    image: "/projects/my-apps.svg",
  },
];

export const aboutProfile = {
  background:
    "I am a web developer with a growing foundation in HTML, CSS, and JavaScript. I enjoy turning ideas into responsive, easy-to-use websites and paying attention to the small details that make an interface feel polished.",
  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "Data Center College of the Philippines",
    period: "Year - Year",
  },
  careerGoals:
    "I am working toward a career in web development, where I can keep building practical projects, strengthen my programming skills, and contribute to a team that values clean code and thoughtful design.",
  values: [
    {
      title: "Clarity first",
      description: "Readable code and interfaces that are easy to understand.",
    },
    {
      title: "Always learning",
      description:
        "Strengthening the fundamentals through consistent practice and projects.",
    },
    {
      title: "Detail oriented",
      description:
        "Small refinements that make the experience feel finished.",
    },
  ],
};
