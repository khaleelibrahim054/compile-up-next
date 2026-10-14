import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ApplyCTA } from "@/components/sections/apply-cta";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Clock, ArrowLeft, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { buildMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";
import { cn } from "@/lib/utils";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://compileup.dev";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    keywords: post.tags,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function renderContent(content: string) {
  return content.trim().split("\n").map((line, i) => {
    if (line.startsWith("## ")) return <h2 key={i} className="mt-10 mb-4 font-display text-2xl font-bold text-white">{line.slice(3)}</h2>;
    if (line.startsWith("### ")) return <h3 key={i} className="mt-8 mb-3 font-display text-xl font-semibold text-white">{line.slice(4)}</h3>;
    if (line.startsWith("- **")) {
      const match = line.match(/- \*\*(.+?)\*\*(.+)/);
      if (match) return <li key={i} className="mb-2 text-text-muted"><strong className="text-white">{match[1]}</strong>{match[2]}</li>;
    }
    if (line.startsWith("- ")) return <li key={i} className="mb-1.5 text-text-muted">{line.slice(2)}</li>;
    if (line.startsWith("```")) return null;
    if (line.startsWith("1. ") || line.match(/^\d+\./)) {
      return <li key={i} className="mb-1.5 text-text-muted">{line.replace(/^\d+\.\s/, "")}</li>;
    }
    if (line.trim() === "") return <div key={i} className="h-4" />;
    const rendered = line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>').replace(/`(.+?)`/g, '<code class="rounded bg-surface-800 px-1.5 py-0.5 font-mono text-sm text-orange">$1</code>');
    return <p key={i} className="mb-3 text-text-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: rendered }} />;
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: post.title,
        description: post.description,
        url: `${siteUrl}/blog/${slug}`,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        authorName: post.author.name,
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Blog", url: `${siteUrl}/blog` },
        { name: post.title, url: `${siteUrl}/blog/${slug}` },
      ])) }} />

      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 grid-dot-pattern opacity-20" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-orange/6 blur-[100px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl">
            <FadeUp>
              <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-white">
                <ArrowLeft className="size-4" /> All Articles
              </Link>
            </FadeUp>
            <FadeUp delay={0.05}>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-orange/20 bg-orange/5 px-3 py-1 text-xs font-medium text-orange">{post.category}</span>
                <span className="flex items-center gap-1.5 text-xs text-text-subtle"><Clock className="size-3" /> {post.readTime}</span>
                <time dateTime={post.publishedAt} className="text-xs text-text-subtle">{formatDate(post.publishedAt)}</time>
              </div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{post.title}</h1>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">{post.description}</p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="mt-6 flex items-center gap-3 border-t border-surface-700 pt-5">
                <div className={cn("flex size-10 items-center justify-center rounded-xl text-sm font-bold text-white bg-gradient-to-br", post.author.gradient)}>
                  {post.author.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{post.author.name}</p>
                  <p className="text-xs text-text-muted">{post.author.title}</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {post.content ? (
              <FadeUp>
                <article className="prose-invert prose-sm max-w-none">
                  {renderContent(post.content)}
                </article>
              </FadeUp>
            ) : (
              <FadeUp>
                <div className="rounded-2xl border border-surface-700 bg-surface-900 p-10 text-center">
                  <p className="text-text-muted">Full article coming soon. Subscribe to be notified when it's published.</p>
                </div>
              </FadeUp>
            )}

            {/* Tags */}
            <FadeUp delay={0.1}>
              <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-surface-700 pt-8">
                <Tag className="size-4 text-text-subtle" />
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-surface-700 bg-surface-800 px-3 py-1 text-xs text-text-muted">{tag}</span>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* More posts */}
        {otherPosts.length > 0 && (
          <section className="bg-surface-900/30 px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 font-display text-xl font-bold text-white">More articles</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {otherPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col rounded-xl border border-surface-700 bg-surface-900 p-6 transition-all hover:border-orange/30 hover:-translate-y-1">
                    <p className="mb-2 text-xs text-text-subtle">{p.category}</p>
                    <h3 className="flex-1 font-display text-base font-semibold text-white transition-colors group-hover:text-orange">{p.title}</h3>
                    <span className="mt-4 flex items-center gap-1 text-xs text-orange font-medium">Read <ArrowLeft className="size-3 rotate-180 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <ApplyCTA />
      </main>
      <Footer />
    </>
  );
}
