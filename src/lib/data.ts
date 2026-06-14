import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";

export interface Skill {
  name: string;
  level: number; // 0-100
  group: "Frontend" | "Backend" | "Tools" | "Other";
}

export const skills: Skill[] = [
  { name: "TypeScript", level: 95, group: "Frontend" },
  { name: "React", level: 95, group: "Frontend" },
  { name: "Next.js", level: 90, group: "Frontend" },
  { name: "Tailwind CSS", level: 92, group: "Frontend" },
  { name: "Redux / Zustand", level: 85, group: "Frontend" },
  { name: "Framer Motion", level: 80, group: "Frontend" },

  { name: "Node.js", level: 92, group: "Backend" },
  { name: "Express", level: 90, group: "Backend" },
  { name: "MongoDB", level: 90, group: "Backend" },
  { name: "PostgreSQL", level: 82, group: "Backend" },
  { name: "Prisma", level: 80, group: "Backend" },
  { name: "REST & GraphQL", level: 85, group: "Backend" },

  { name: "Git & GitHub", level: 95, group: "Tools" },
  { name: "Docker", level: 75, group: "Tools" },
  { name: "Vercel / Netlify", level: 90, group: "Tools" },
  { name: "Figma", level: 78, group: "Tools" },
  { name: "Photoshop / Lightroom", level: 82, group: "Tools" },
  { name: "Testing (Vitest/Jest)", level: 80, group: "Tools" },
];

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: "2023 - 2024",
    role: "Lead Developer",
    company: "XR System",
    location: "Personal Project",
    description:
      "Built a full-stack web platform combining portfolio management, content publishing, photography showcases, and service pages.",
    achievements: [
      "Designed and implemented REST APIs using Node.js and Express",
      "Integrated Sanity CMS and Cloudinary for content delivery",
      "Deployed to production using modern CI/CD workflows",
    ],
  },
  {
    period: "2022 - 2023",
    role: "Full Stack Developer",
    company: "Event Management System",
    location: "Personal Project",
    description:
      "Developed a complete event management platform to solve practical scheduling and registration problems.",
    achievements: [
      "Built authentication and user management",
      "Created event creation and attendee tracking flows",
      "Connected React frontend to MongoDB via REST APIs",
    ],
  },
];

export interface Project {
  title: string;
  year: string;
  role: string;
  summary: string;
  stack: string[];
  category: "Web App" | "SaaS" | "Mobile" | "Tooling" | "E-commerce";
  href?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "XR Commerce",
    year: "2025",
    role: "Lead engineer",
    summary:
      "Headless e-commerce platform for Indian D2C brands. Multi-vendor, multi-currency, and CDN-backed media pipeline.",
    stack: ["Next.js", "Node.js", "MongoDB", "Stripe", "Cloudflare"],
    category: "E-commerce",
    featured: true,
  },
  {
    title: "Ledgerly",
    year: "2025",
    role: "Lead engineer",
    summary:
      "Multi-tenant double-entry accounting platform with realtime ledgers and full audit trails.",
    stack: ["TypeScript", "PostgreSQL", "tRPC", "Stripe"],
    category: "SaaS",
    featured: true,
  },
  {
    title: "FieldOps CRM",
    year: "2024",
    role: "Full-stack",
    summary:
      "Mobile-first CRM for field teams. Offline capture, route planning, and supervisor analytics.",
    stack: ["React Native", "Node.js", "MongoDB", "Redis"],
    category: "Mobile",
    featured: true,
  },
  {
    title: "Northwind Analytics",
    year: "2024",
    role: "Full-stack",
    summary:
      "Self-serve product analytics dashboard with a safe SQL builder and saved exploration trees.",
    stack: ["React", "ClickHouse", "Vite"],
    category: "SaaS",
  },
  {
    title: "Field/Notes",
    year: "2024",
    role: "Solo build",
    summary:
      "Offline-first editorial CMS for travel writers. Capture in the field, sync on a hotspot, publish anywhere.",
    stack: ["Next.js", "SQLite", "PWA", "MDX"],
    category: "Web App",
  },
  {
    title: "Polaris UI",
    year: "2023",
    role: "Design systems",
    summary:
      "Accessible React component library with 70+ primitives, full keyboard support, zero CSS-in-JS runtime cost.",
    stack: ["React", "Radix", "Tailwind", "Storybook"],
    category: "Tooling",
  },
];

export interface Photo {
  src: string;
  title: string;
  location: string;
  year: string;
  span?: "wide" | "tall";
}

export const photos: Photo[] = [
  {
    src: photo2,
    title: "Hills at first light",
    location: "Netarhat, Jharkhand",
    year: "2024",
    span: "wide",
  },
  { src: photo1, title: "Alley fog", location: "Ranchi, Jharkhand", year: "2024" },
  { src: photo3, title: "The craftsman", location: "Khunti", year: "2023", span: "tall" },
  { src: photo4, title: "Concrete & light", location: "Delhi", year: "2024" },
  { src: photo5, title: "Platform 10", location: "Ranchi Junction", year: "2023" },
  { src: photo6, title: "Dewdrop", location: "Hundru Falls", year: "2024", span: "wide" },
];

export interface Service {
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  startingAt?: string;
}

export const services: Service[] = [
  {
    title: "Web Application Development",
    tagline: "React, Node.js, MERN stack",
    description:
      "End-to-end web application development from database schema to UI. I focus on building reliable and maintainable software.",
    deliverables: ["Frontend Development", "Backend APIs", "Database Design", "Deployment"],
  },
  {
    title: "Backend Engineering",
    tagline: "APIs, Databases, Cloud",
    description:
      "Building secure server-side applications. Managing data flow, authentication, and external service integrations.",
    deliverables: [
      "RESTful APIs",
      "Authentication Systems",
      "Database Optimization",
      "Cloud Deployment",
    ],
  },
  {
    title: "System Maintenance",
    tagline: "Refactoring, Bug Fixing",
    description:
      "Improving existing codebases. Fixing performance issues, updating dependencies, and writing cleaner code.",
    deliverables: [
      "Code Refactoring",
      "Performance Audits",
      "Accessibility Improvements",
      "Bug Fixing",
    ],
  },
  {
    title: "Photography",
    tagline: "Portraits · Landscape · Street",
    description:
      "Selective creative work. I enjoy taking my camera out to document people and places around Jharkhand.",
    deliverables: ["Portrait Photography", "Street Photography", "Event Coverage", "Photo Editing"],
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jitu shipped our MVP in five weeks. Three months in, it's still the cleanest codebase I've ever inherited.",
    name: "Aarav Mehta",
    role: "Founder, NorthLane",
  },
  {
    quote:
      "Calm, exacting, and honest about trade-offs. Rare combination. He raised the bar for our entire team.",
    name: "Priya Subramanian",
    role: "CTO, Helios Labs",
  },
  {
    quote:
      "From figma to production in record time, without a single rushed corner. We'll work with XR System again.",
    name: "Daniel Okafor",
    role: "Product Lead, Bluebird",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "shipping-mern-in-2026",
    title: "Shipping a MERN product in 2026 - what changed",
    excerpt:
      "Five years in, the M, E, R, and N are all different. Here's the modern stack I reach for, and why.",
    date: "2026-05-12",
    readTime: "8 min",
    tag: "Engineering",
  },
  {
    slug: "designing-for-the-second-press",
    title: "Designing for the second press",
    excerpt:
      "Most UI fails on the second tap, not the first. A field-tested checklist from a year of mobile-first builds.",
    date: "2026-03-30",
    readTime: "6 min",
    tag: "Design",
  },
  {
    slug: "shipping-a-solo-project",
    title: "Shipping full-stack applications from Ranchi",
    excerpt:
      "Lessons from building complex React projects: pricing, scope, focus, and saying no to good work.",
    date: "2026-02-08",
    readTime: "10 min",
    tag: "Engineering",
  },
  {
    slug: "photography-as-a-debugging-tool",
    title: "Photography as a debugging tool",
    excerpt: "How walking with a camera taught me to see UI bugs faster than any linter.",
    date: "2026-01-04",
    readTime: "5 min",
    tag: "Photography",
  },
];
