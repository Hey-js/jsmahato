export const site = {
  name: "Jitu Sagar Mahato",
  shortName: "JS Mahato",
  role: "Software Engineer",
  roles: ["Software Engineer", "Backend Developer", "Cloud Engineer", "System Architecture"],
  company: "Independent",
  location: "Ranchi, Jharkhand, India",
  email: "jsmahato.official@gmail.com",
  phone: "+91 00000 00000",
  description:
    "Software Engineer based in Ranchi, India. Building modern web applications, backend systems, and cloud-focused software solutions.",
  url: "https://jsmahato.vercel.app",
  social: {
    github: "https://github.com/Hey-js",
    linkedin: "https://www.linkedin.com/in/jsmahato",
    photography: "https://strangerjs.vercel.app",
    instagram: "https://www.instagram.com/stranger.js",
  },
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/photography", label: "Photography" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/photography", label: "Photography" },
  { to: "/services", label: "Services" },
  { to: "/resume", label: "Resume" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;
