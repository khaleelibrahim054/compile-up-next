const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://compileup.dev";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    name: "CompileUp",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "CompileUp is a remote software engineering apprenticeship platform where aspiring developers learn by contributing to real software projects, guided by senior engineers.",
    foundingDate: "2024",
    sameAs: [
      "https://twitter.com/compileup",
      "https://github.com/compileup",
      "https://linkedin.com/company/compileup",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@compileup.dev",
      contactType: "customer support",
      availableLanguage: "English",
    },
    knowsAbout: [
      "Software Engineering",
      "Web Development",
      "Backend Development",
      "Frontend Development",
      "Full Stack Development",
      "Agile Development",
      "Code Review",
      "Git Version Control",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CompileUp",
    url: siteUrl,
    description: "Software Engineering Apprenticeship Platform",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function courseSchema(course: {
  name: string;
  description: string;
  url: string;
  skills: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: course.url,
    provider: {
      "@type": "Organization",
      name: "CompileUp",
      url: siteUrl,
    },
    educationalLevel: "Beginner to Intermediate",
    teaches: course.skills,
    courseMode: "online",
    isAccessibleForFree: true,
    availableLanguage: "English",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT20H",
    },
  };
}

export function faqPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function personSchema(mentor: {
  name: string;
  jobTitle: string;
  company: string;
  url: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: mentor.name,
    jobTitle: mentor.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: mentor.company,
    },
    url: mentor.url,
    description: mentor.description,
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: article.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "CompileUp",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
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
