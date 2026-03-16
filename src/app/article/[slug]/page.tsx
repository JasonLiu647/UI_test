import { articles, getArticleBySlug } from "@/data/articles";
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
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const catName = article.category === "tech-industry" ? "科技產業" : article.category === "economy" ? "經濟民生" : article.category === "politics" ? "政策法規" : "社會觀察";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    articleSection: catName,
    keywords: article.tags.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="max-w-3xl mx-auto px-4 py-8 relative z-10">
        <nav className="flex items-center gap-2 text-[10px] text-parchment-400 mb-6">
          <Link href="/" className="hover:text-magic-gold transition-colors">首頁</Link>
          <span>/</span>
          <Link href={`/category/${article.category}`} className="hover:text-magic-gold transition-colors">{article.categoryIcon} {catName}</Link>
        </nav>

        <header className="mb-6 text-center">
          {article.breaking && (
            <span className="inline-block px-3 py-1 border-2 border-magic-deep-red text-magic-deep-red font-display font-bold text-[10px] tracking-widest uppercase -rotate-1 animate-glow mb-3">
              ⚡ Breaking News
            </span>
          )}
          <h1 className="font-display text-3xl md:text-4xl font-black text-parchment-100 leading-tight mb-3">{article.title}</h1>
          {article.subtitle && <p className="font-body text-base text-parchment-300 italic mb-4">{article.subtitle}</p>}
          <div className="text-xs text-parchment-400 border-y border-magic-gold/20 py-3">
            {article.date} · {article.readTime} · 讀者投票 {article.votes.toLocaleString()} 人次
            {article.heat >= 80 && <span className="text-magic-deep-red ml-2">● 熱議中</span>}
          </div>
        </header>

        <ArticleContent article={article} />

        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`} className="px-3 py-1 text-xs border border-magic-gold/30 text-parchment-300 hover:text-magic-gold hover:border-magic-gold/60 transition-colors rounded-sm">
              #{tag}
            </Link>
          ))}
        </div>
      </article>
    </>
  );
}
