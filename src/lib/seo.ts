import { site } from "./site";

export function getSeoMeta(title: string, description?: string, image?: string, path?: string) {
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const desc = description || site.description;
  const imgUrl = image || site.url + "/og-image.png";
  const ogDesc =
    description ||
    "Software Engineer building web applications, backend services, and content-driven platforms while exploring cloud technologies and modern software engineering practices.";

  const meta: any[] = [
    { title: fullTitle },
    { name: "description", content: desc },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: ogDesc },
    { property: "og:url", content: path ? `${site.url}${path}` : site.url },
    { property: "og:image", content: imgUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: ogDesc },
    { name: "twitter:image", content: imgUrl },
  ];

  if (path !== undefined) {
    // ensure leading slash
    const formattedPath = path.startsWith("/") ? path : `/${path}`;
    const canonicalUrl = formattedPath === "/" ? site.url : `${site.url}${formattedPath}`;

    // We handle canonical links in the Route definition's links array,
    // but returning it here allows us to easily use it where needed.
    // However, TanStack Router head only accepts meta tags here.
    // Canonical link must go to links array.
  }

  return meta;
}

export function getCanonicalLink(path: string) {
  const formattedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = formattedPath === "/" ? site.url : `${site.url}${formattedPath}`;
  return { rel: "canonical", href: canonicalUrl };
}

export function getGlobalJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jitu Sagar Mahato",
      alternateName: "JS Mahato",
      jobTitle: "Software Engineer",
      email: "jsmahato.official@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
      url: "https://jsmahato.vercel.app",
      sameAs: [site.social.github, site.social.linkedin, site.social.photography],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description: site.description,
    },
  ];
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getArticleJsonLd(article: {
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
  authorName?: string;
  slug: string;
}) {
  const articleUrl = `${site.url}/blog/${article.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      image: article.image ? [article.image] : [],
      datePublished: article.datePublished || new Date().toISOString(),
      author: [
        {
          "@type": "Person",
          name: article.authorName || site.name,
          url: site.url,
        },
      ],
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": articleUrl,
      },
    },
    getBreadcrumbJsonLd([
      { name: "Home", url: site.url },
      { name: "Blog", url: `${site.url}/blog` },
      { name: article.title, url: articleUrl },
    ]),
  ];
}

export function getFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
