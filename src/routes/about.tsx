import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { getCanonicalLink, getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/seo";
import portraitFallback from "@/assets/portrait.jpg";
import { useQuery } from "@tanstack/react-query";
import { sanityClient, urlFor } from "@/lib/sanity";
import { Camera, MapPin, GraduationCap, Briefcase, Zap, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Who is Jitu Sagar Mahato?",
    answer: "I'm Jitu Sagar Mahato (JS Mahato), a software engineer based in Ranchi, Jharkhand. My journey started with a Diploma in Computer Science Engineering and later a B.Sc. in Information Technology. Rather than only learning through courses, I've spent most of my time building real-world projects, experimenting with deployment, solving technical problems, and continuously improving my engineering skills.\n\nBeyond software, photography is one of my biggest creative passions. I enjoy documenting stories, culture, people, and moments through my camera. Photography has taught me patience, observation, creativity, and attention to detail—the same qualities that influence how I approach software development.\n\nToday, I'm focused on growing as a Backend and Cloud Engineer while continuing to build meaningful products and pursue visual storytelling through photography."
  },
  {
    question: "What technologies does JS Mahato work with?",
    answer: "My core stack revolves around JavaScript and TypeScript. I have extensive experience building scalable user interfaces with React and Next.js, and crafting robust backend services using Node.js and Express. For data storage and management, I primarily rely on MongoDB and PostgreSQL. More recently, I've been expanding my expertise into Cloud infrastructure, specifically AWS, to deploy, manage, and scale applications more efficiently."
  },
  {
    question: "What projects has JS Mahato built?",
    answer: "I enjoy building full-stack applications that solve real-world problems and provide seamless user experiences. Some of my notable projects include an Event Management System that handles authentication, ticketing, and user management; a Photography Portfolio designed for high-quality, performant media delivery; and XR System, a scalable personal blogging and portfolio platform built to handle dynamic content publishing."
  },
  {
    question: "Is JS Mahato available for software engineering opportunities?",
    answer: "Yes, I am actively seeking full-time opportunities. While I have hands-on experience across the entire full stack, I am particularly interested in Backend Engineering and Cloud Engineering roles where I can design robust systems, optimize databases, and work with modern deployment pipelines and cloud infrastructure."
  },
  {
    question: "What is JS Mahato currently learning?",
    answer: "I believe in continuous engineering growth. Right now, my main focus is diving deeper into Cloud Computing (AWS) and System Design. I'm learning how to architect highly available systems, configure reliable CI/CD pipelines, and manage cloud infrastructure. Alongside this, I'm regularly practicing Data Structures and Algorithms to continuously sharpen my problem-solving and analytical skills."
  }
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About | ${site.name}` },
      {
        name: "description",
        content: `Learn more about Jitu Sagar Mahato, a Software Engineer and Backend Developer based in Ranchi, Jharkhand, India.`,
      },
      { property: "og:title", content: `About | ${site.name}` },
      {
        property: "og:description",
        content: `Background and software engineering journey of Jitu Sagar Mahato.`,
      },
      { property: "og:url", content: `${site.url}/about` },
      { property: "og:image", content: `${site.url}/og-image.png` },
    ],
    links: [getCanonicalLink("/about")],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getBreadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "About", url: `${site.url}/about` },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(getFaqJsonLd(faqs)),
      }
    ],
  }),
  component: AboutPage,
});

// Helper to render basic Sanity block text
const renderBlockText = (blocks: any[]) => {
  if (!blocks || !blocks.length) return null;
  return blocks.map((block: any, i: number) => {
    if (block._type !== "block" || !block.children) return null;
    const text = block.children.map((child: any) => child.text).join("");
    return (
      <p
        key={block._key || i}
        className={`leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300 ${text.length > 150 ? "text-justify hyphens-auto" : "text-left"}`}
      >
        {text}
      </p>
    );
  });
};

function FaqAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-6 divide-y divide-border/60 border-t border-b border-border/60">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="py-5">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between text-left focus:outline-none group"
              aria-expanded={isOpen}
            >
              <h3 className="text-[15px] sm:text-base font-medium text-foreground transition-colors group-hover:text-signal pr-4 leading-snug">
                {faq.question}
              </h3>
              <div className="flex-shrink-0 flex items-center justify-center size-7 rounded-full border border-border/60 bg-secondary/30 text-muted-foreground group-hover:bg-secondary group-hover:text-foreground transition-colors">
                {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
              </div>
            </button>
            <div 
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="text-muted-foreground/90 text-[14.5px] sm:text-sm leading-relaxed space-y-4 pb-2 max-w-[70ch] text-justify hyphens-auto">
                  {faq.answer.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AboutPage() {
  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["personalProfile"],
    queryFn: async () => {
      try {
        const result = await sanityClient.fetch(`*[_type == "personalProfile"][0]{
          fullName,
          headline,
          shortBio,
          longBio,
          profileImage,
          location,
          interests,
          languages,
          careerGoal,
          currentlyLearning,
          projectsSummary
        }`);
        return result;
      } catch (err) {
        console.error("SANITY ERROR", err);
        throw err;
      }
    },
  });

  if (isLoading) {
    return (
      <div className="container-prose py-32 text-center">
        <p className="text-muted-foreground animate-pulse">Loading profile...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container-prose py-32 text-center">
        <p className="text-muted-foreground">Failed to load profile.</p>
      </div>
    );
  }

  // --- Safe Fallbacks ---
  const headline = profile?.headline || "Learning, building, and exploring.";

  const shortBioFallback = (
    <>
      <p className="mb-4 text-left leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300">
        I'm JS Mahato, a software engineer from Ranchi. My interest in technology started with
        curiosity and gradually became a genuine passion for engineering and problem-solving.
      </p>
      <p className="mb-4 text-justify hyphens-auto leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300">
        Most of what I've learned has come from creating real projects, breaking things, fixing
        them, and continuously improving how I build software. Every project has been an opportunity
        to learn something new, from designing scalable architectures to writing cleaner code.
      </p>
      <p className="text-justify hyphens-auto leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300">
        Today, my focus is on building reliable applications, strengthening my backend knowledge,
        and exploring cloud technologies and APIs while continuing to grow as an engineer.
      </p>
    </>
  );

  const longBioFallback = (
    <>
      <p className="mb-4 text-justify hyphens-auto leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300">
        My journey into software development began with a simple curiosity about how things are
        built on the internet.
      </p>
      <p className="mb-4 text-justify hyphens-auto leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300">
        That curiosity led me to start building projects of my own. What began with small scripts
        gradually evolved into larger applications involving databases, authentication systems,
        complex APIs, and modern deployment workflows. Each project brought new challenges and
        taught me something different.
      </p>
      <p className="mb-4 text-justify hyphens-auto leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300">
        One of the things I enjoy most about software engineering is the problem-solving process.
        Every bug, architectural decision, and feature deployment is an opportunity to improve the
        system.
      </p>
      <p className="text-justify hyphens-auto leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300">
        Today, I continue building projects, exploring new technologies, and expanding my
        understanding of backend systems, cloud infrastructure, and modern software development
        practices.
      </p>
    </>
  );

  const projectsFallback = [
    {
      name: "Event Management System",
      description:
        "A complete event management platform featuring authentication, event creation, attendee management, and database integration.",
    },
    {
      name: "Photography Portfolio Website",
      description:
        "A portfolio platform designed to showcase photography work with responsive layouts and optimized media delivery.",
    },
    {
      name: "XR System",
      description:
        "A personal full-stack platform focused on portfolio management, blogging, and content publishing.",
    },
  ];

  const interestsFallback = ["Software Engineering", "Cloud Computing", "Photography"];
  const languagesFallback = ["English", "Hindi"];
  const learningFallback = [
    "Cloud Computing",
    "AWS Fundamentals",
    "DevOps Concepts",
    "Deployment & Infrastructure",
    "Modern Software Engineering Practices",
  ];

  const location = profile?.location || "Ranchi, Jharkhand, India";
  const careerGoal = profile?.careerGoal || "Software Engineer / Full Stack Developer";

  // Data Mappings
  const shortBioContent = profile?.shortBio ? (
    <div className="space-y-4">{renderBlockText(profile.shortBio)}</div>
  ) : (
    shortBioFallback
  );
  const longBioContent = profile?.longBio ? renderBlockText(profile.longBio) : longBioFallback;
  const projects = profile?.projectsSummary?.length ? profile.projectsSummary : projectsFallback;

  const interests = profile?.interests?.length ? profile.interests : interestsFallback;
  const languages = profile?.languages?.length ? profile.languages : languagesFallback;
  const learning = profile?.currentlyLearning?.length
    ? profile.currentlyLearning
    : learningFallback;

  const profileImageUrl = profile?.profileImage
    ? urlFor(profile.profileImage).width(700).height(900).auto("format").url()
    : portraitFallback;

  return (
    <PageShell eyebrow="About" title={headline} className="pb-0 sm:pb-0">
      <div className="grid gap-12 md:grid-cols-12 lg:gap-16">
        <section className="order-last md:order-none md:col-span-7 space-y-16">
          <Reveal>
            <div className="space-y-4 text-pretty">{shortBioContent}</div>
          </Reveal>

          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              The Journey
            </h2>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-foreground/90">
              {longBioContent}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              What I've Built
            </h2>
            <div className="mt-6 grid gap-4">
              {projects.map((p: any, i: number) => (
                <div
                  key={i}
                  className="group relative rounded-xl border border-border/60 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:shadow-[0_8px_30px_rgb(0,255,128,0.04)]"
                >
                  <h3 className="font-medium text-foreground">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Beyond Coding
            </h2>
            <div className="mt-6 rounded-xl border border-border/60 bg-card/50 p-6 flex gap-4 items-start">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary/80 text-foreground">
                <Camera className="size-4" />
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-medium leading-relaxed">
                  Photography helps me develop creativity, observation, and patience.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  These qualities directly influence how I approach building software. I also spend
                  time exploring new tools and reading about cloud computing.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Currently Learning
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {learning.map((item: string, i: number) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full border border-border/60 bg-secondary/30 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </section>

        <aside className="order-first md:order-none md:col-span-5 space-y-6">
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-border/60">
              <img
                src={profileImageUrl}
                alt="Portrait"
                width={700}
                height={700}
                loading="lazy"
                className="aspect-[4/4.5] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl border border-border/60 bg-card/50 overflow-hidden divide-y divide-border/60">
              <div className="p-4 flex gap-3.5 items-start">
                <MapPin className="size-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-1">
                    Location
                  </span>
                  <div className="text-sm text-foreground/90">{location}</div>
                </div>
              </div>

              <div className="p-4 flex gap-3.5 items-start">
                <Zap className="size-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-1">
                    Focus
                  </span>
                  <div className="text-sm text-foreground/90 flex flex-col gap-1.5">
                    <span>Cloud Computing</span>
                    <span>Backend Engineering</span>
                    <span>System Design</span>
                  </div>
                </div>
              </div>

              <div className="p-4 flex gap-3.5 items-start">
                <Briefcase className="size-4 text-signal mt-0.5 shrink-0" />
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-1">
                    Status
                  </span>
                  <div className="text-sm font-medium text-foreground/90">
                    Available for Opportunities
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </aside>
      </div>
    </PageShell>
  );
}

