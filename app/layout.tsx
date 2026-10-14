import type { Metadata } from "next";
import { Inter, Sora, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://compileup.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CompileUp — Software Engineering Apprenticeship Platform",
    template: "%s | CompileUp",
  },
  description:
    "CompileUp is a remote software engineering apprenticeship where aspiring developers learn by contributing to real projects — guided by senior engineers with 6+ years of industry experience.",
  keywords: [
    "software engineering apprenticeship",
    "learn to code",
    "real-world programming experience",
    "software development training",
    "coding mentorship",
    "full stack development",
    "backend development",
    "frontend development",
    "git github pull requests",
    "code review learning",
    "junior developer program",
    "remote coding apprenticeship",
  ],
  authors: [{ name: "CompileUp", url: siteUrl }],
  creator: "CompileUp",
  publisher: "CompileUp",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CompileUp",
    title: "CompileUp — Learn Software Engineering the Professional Way",
    description:
      "Gain real-world software engineering experience through project contributions, code reviews, and mentorship from senior engineers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CompileUp — Software Engineering Apprenticeship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CompileUp — Software Engineering Apprenticeship",
    description:
      "Learn by contributing to real software projects. Guided by senior engineers with 6+ years of experience.",
    images: ["/og-image.png"],
    creator: "@compileup",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
