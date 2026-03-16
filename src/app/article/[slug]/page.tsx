import { articles, getArticleBySlug, categories } from "@/data/articles";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ArticleContent from "./ArticleContent";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: article.image, width: 800, height: 450 }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const category = categories.find((c) => c.slug === article.category);

  // JSON-LD for AEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorTitle,
    },
    publisher: {
      "@type": "Organization",
      name: "The Daily Chronicle",
    },
    articleSection: category?.name,
    keywords: article.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-parchment-400 mb-6">
          <Link href="/" className="hover:text-magic-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          {category && (
            <>
              <Link
                href={`/category/${category.slug}`}
                className="hover:text-magic-gold transition-colors"
              >
                {category.icon} {category.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-parchment-300 truncate">{article.title}</span>
        </nav>

        {/* Article header */}
        <header className="mb-8">
          {article.breaking && (
            <span className="inline-block px-3 py-1 bg-magic-deep-red text-parchment-100 text-xs font-display uppercase tracking-wider mb-4 animate-glow">
              ⚡ Breaking News
            </span>
          )}

          <h1 className="font-display text-3xl md:text-5xl font-bold text-parchment-100 leading-tight mb-4">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="font-display text-lg md:text-xl text-parchment-300 italic mb-6">
              {article.subtitle}
            </p>
          )}

          <div className="flex items-center gap-4 text-sm text-parchment-400 border-y border-magic-gold/20 py-4">
            <div>
              <span className="text-magic-gold font-display">
                {article.author}
              </span>
              {article.authorTitle && (
                <span className="text-parchment-400/60 ml-1">
                  — {article.authorTitle}
                </span>
              )}
            </div>
            <span>·</span>
            <span>{formatDate(article.date)}</span>
            <span>·</span>
            <span>{article.readTime} read</span>
          </div>
        </header>

        {/* Hero image */}
        <div className="living-photo rounded-sm overflow-hidden mb-8 magic-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image}
            alt={article.title}
            className="w-full aspect-[16/9] object-cover"
          />
        </div>

        {/* Article body */}
        <ArticleContent content={article.content} excerpt={article.excerpt} />

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-magic-gold/20">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="px-3 py-1 text-xs border border-magic-gold/30 text-parchment-300 hover:text-magic-gold hover:border-magic-gold/60 transition-colors rounded-sm"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
