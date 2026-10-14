import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://compileup.dev";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og-image.png",
  keywords = [],
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "CompileUp",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const defaultKeywords = [
  "software engineering apprenticeship",
  "learn software development",
  "coding mentorship program",
  "real world programming experience",
  "junior developer training",
  "remote software engineering",
];

export { siteUrl };
