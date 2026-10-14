import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionBadge } from "@/components/shared/section-badge";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/shared/motion-wrapper";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { cn } from "@/lib/utils";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://compileup.dev";

export const metadata = buildMetadata({
  title: "Blog — Software Engineering Insights & Career Advice",
  description:
    "In-depth articles on software engineering fundamentals, career growth, professional workflows, code reviews, Git, and the path from beginner to professional developer.",
  path: "/blog",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Blog", url: `${siteUrl}/blog` },
      ])) }} />

      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 grid-dot-pattern opacity-30" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-orange/8 blur-[100px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl text-center">
            <FadeUp><SectionBadge>The Blog</SectionBadge></FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Engineering insights,<br />
                written by{" "}
                <span className="text-orange">practitioners.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
                Articles on software engineering fundamentals, career growth, professional workflows, and what it actually takes to become a great developer.
              </p>
            </FadeUp>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Featured post */}
            <FadeUp>
              <Link href={`/blog/${featured.slug}`} className="group mb-10 flex flex-col overflow-hidden rounded-2xl border border-surface-700 bg-surface-900 transition-all hover:border-orange/30 hover:-translate-y-1 lg:flex-row">
                <div className={cn("flex min-h-[200px] flex-none items-center justify-center bg-gradient-to-br from-orange/10 to-surface-800 p-10 lg:w-80")}>
                  <div className="flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange to-orange-dim text-2xl font-bold text-white">
                    {featured.author.initials}
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-orange/20 bg-orange/5 px-3 py-1 text-xs font-medium text-orange">{featured.category}</span>
                    <span className="flex items-center gap-1.5 text-xs text-text-subtle"><Clock className="size-3" /> {featured.readTime}</span>
                    <span className="text-xs text-text-subtle">{formatDate(featured.publishedAt)}</span>
                  </div>
                  <h2 className="mb-3 font-display text-xl font-bold text-white transition-colors group-hover:text-orange sm:text-2xl">{featured.title}</h2>
                  <p className="mb-5 text-sm leading-relaxed text-text-muted line-clamp-2">{featured.description}</p>
                  <div className="flex items-center gap-3">
                    <div className={cn("flex size-7 items-center justify-center rounded-full text-xs font-bold text-white bg-gradient-to-br", featured.author.gradient)}>{featured.author.initials}</div>
                    <div>
                      <p className="text-xs font-medium text-white">{featured.author.name}</p>
                      <p className="text-xs text-text-subtle">{featured.author.title}</p>
                    </div>
                    <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-orange">Read <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </div>
              </Link>
            </FadeUp>

            {/* Post grid */}
            <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {rest.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col rounded-2xl border border-surface-700 bg-surface-900 p-7 transition-all hover:border-orange/30 hover:-translate-y-1">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-surface-700 bg-surface-800 px-3 py-1 text-xs text-text-muted">{post.category}</span>
                      <span className="flex items-center gap-1.5 text-xs text-text-subtle"><Clock className="size-3" /> {post.readTime}</span>
                    </div>
                    <h2 className="mb-3 flex-1 font-display text-lg font-semibold text-white transition-colors group-hover:text-orange">{post.title}</h2>
                    <p className="mb-5 text-sm leading-relaxed text-text-muted line-clamp-2">{post.description}</p>
                    <div className="flex items-center gap-3 border-t border-surface-700 pt-4">
                      <div className={cn("flex size-7 items-center justify-center rounded-full text-xs font-bold text-white bg-gradient-to-br", post.author.gradient)}>{post.author.initials}</div>
                      <p className="text-xs font-medium text-white">{post.author.name}</p>
                      <span className="ml-auto text-xs text-text-subtle">{formatDate(post.publishedAt)}</span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
