"use client";

import { articles, categories, getFeaturedArticles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import BreakingTicker from "@/components/BreakingTicker";
import MagicParticles from "@/components/magic/MagicParticles";
import ScrollReveal from "@/components/magic/ScrollReveal";
import Link from "next/link";

export default function Home() {
  const featured = getFeaturedArticles();
  const heroArticle = featured[0];
  const restArticles = articles.filter((a) => a !== heroArticle);

  return (
    <>
      <MagicParticles />
      <BreakingTicker />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Quick Stats */}
        <div className="grid grid-cols-4 border-t border-b border-magic-gold/50 my-0">
          {[
            { n: String(articles.length), l: "今日議題" },
            { n: articles.reduce((s, a) => s + a.votes, 0).toLocaleString(), l: "讀者投票" },
            { n: "2,671", l: "參與讀者" },
            { n: "42", l: "偏見事件" },
          ].map((s, i) => (
            <div key={i} className="text-center py-3" style={{ borderRight: i < 3 ? "1px solid rgba(201,168,76,0.3)" : "none" }}>
              <div className="text-xl font-black text-parchment-100 font-display">{s.n}</div>
              <div className="text-[9px] text-parchment-400 tracking-widest">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Hero */}
        <section className="py-6">
          <ArticleCard article={heroArticle} variant="featured" index={0} />
        </section>

        {/* Ornamental divider */}
        <div className="ornament-divider my-4">
          <span className="font-display text-sm tracking-[0.3em] uppercase">
            ✦ 今日版面 ✦
          </span>
        </div>

        {/* Two-column layout */}
        <section className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-0 md:gap-5">
          {/* Left column */}
          <div>
            {restArticles.slice(0, Math.ceil(restArticles.length / 2)).map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 100}>
                <ArticleCard article={article} index={i} />
              </ScrollReveal>
            ))}
          </div>

          {/* Column divider */}
          <div className="hidden md:block bg-magic-gold/30" />

          {/* Right column */}
          <div>
            {restArticles.slice(Math.ceil(restArticles.length / 2)).map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 100}>
                <ArticleCard article={article} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Category navigation */}
        <ScrollReveal>
          <section className="my-8">
            <div className="ornament-divider mb-6">
              <span className="font-display text-sm tracking-[0.3em] uppercase">✦ 分類瀏覽 ✦</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/category/${cat.slug}`} className="group magic-border rounded-sm p-4 text-center bg-magic-ink/50 hover:bg-magic-ink/80 transition-all">
                  <div className="text-2xl mb-1 group-hover:animate-float">{cat.icon}</div>
                  <h4 className="font-display text-sm text-parchment-200 group-hover:text-magic-gold-light transition-colors">{cat.name}</h4>
                  <p className="text-[10px] text-parchment-400 mt-1">{cat.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>
    </>
  );
}
