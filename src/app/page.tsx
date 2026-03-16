"use client";

import { articles, categories, getFeaturedArticles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import BreakingTicker from "@/components/BreakingTicker";
import MagicParticles from "@/components/magic/MagicParticles";
import ScrollReveal from "@/components/magic/ScrollReveal";
import TypewriterText from "@/components/magic/TypewriterText";
import Link from "next/link";

export default function Home() {
  const featured = getFeaturedArticles();
  const latestArticles = articles.slice(0, 8);
  const heroArticle = featured[0];
  const sideArticles = featured.slice(1, 4);
  const restArticles = latestArticles.filter(
    (a) => !featured.includes(a)
  );

  return (
    <>
      <MagicParticles />
      <BreakingTicker />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Hero section */}
        <section className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main featured article */}
            <div className="lg:col-span-2">
              <ArticleCard
                article={heroArticle}
                variant="featured"
                index={0}
              />
            </div>

            {/* Side articles */}
            <div className="space-y-0">
              <h3 className="font-display text-sm text-magic-gold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <span>✦</span> Latest Dispatches
              </h3>
              {sideArticles.map((article, i) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  variant="compact"
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Ornamental divider */}
        <div className="ornament-divider my-8">
          <span className="font-display text-sm tracking-[0.3em] uppercase">
            ✦ Today&apos;s Edition ✦
          </span>
        </div>

        {/* Typewriter headline */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-parchment-200">
              <TypewriterText
                text="All the News That Magic Permits to Print"
                speed={40}
              />
            </h2>
          </div>
        </ScrollReveal>

        {/* More articles grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {restArticles.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 100}>
              <ArticleCard article={article} index={i} />
            </ScrollReveal>
          ))}
        </section>

        {/* Category navigation */}
        <ScrollReveal>
          <section className="mb-12">
            <h3 className="ornament-divider mb-8">
              <span className="font-display text-sm tracking-[0.3em] uppercase">
                ✦ Explore Sections ✦
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="group magic-border rounded-sm p-4 text-center bg-magic-ink/50 hover:bg-magic-ink/80 transition-all"
                >
                  <div className="text-3xl mb-2 group-hover:animate-float">
                    {cat.icon}
                  </div>
                  <h4 className="font-display text-sm text-parchment-200 group-hover:text-magic-gold-light transition-colors">
                    {cat.name}
                  </h4>
                </Link>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Weather & Special Notice (newspaper feel) */}
        <ScrollReveal>
          <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="magic-border rounded-sm p-6 bg-magic-ink/50">
              <h3 className="font-display text-lg text-magic-gold mb-3 flex items-center gap-2">
                ☁ Magical Weather Forecast
              </h3>
              <div className="space-y-2 text-sm text-parchment-300 font-body">
                <p>
                  <strong className="text-parchment-200">London:</strong>{" "}
                  Partly cloudy with a 30% chance of enchanted rain. Muggle
                  umbrella charms recommended.
                </p>
                <p>
                  <strong className="text-parchment-200">Hogwarts:</strong>{" "}
                  Clear skies. The Whomping Willow reports mild irritation from
                  northerly winds.
                </p>
                <p>
                  <strong className="text-parchment-200">Hogsmeade:</strong>{" "}
                  Light snowfall expected. Butterbeer warming charms in full
                  effect at The Three Broomsticks.
                </p>
              </div>
            </div>
            <div className="magic-border rounded-sm p-6 bg-magic-ink/50">
              <h3 className="font-display text-lg text-magic-gold mb-3 flex items-center gap-2">
                📜 Notices & Classifieds
              </h3>
              <div className="space-y-2 text-sm text-parchment-300 font-body">
                <p className="border-b border-magic-gold/10 pb-2">
                  <span className="stamp text-magic-deep-red text-[10px]">
                    Wanted
                  </span>{" "}
                  Experienced dragon keeper for Welsh Sanctuary expansion.
                  Contact Dr. R. Pryce.
                </p>
                <p className="border-b border-magic-gold/10 pb-2">
                  <span className="text-magic-gold font-display text-xs">
                    FOR SALE:
                  </span>{" "}
                  Slightly used AutoBrew 3000. Previous owner returned to
                  traditional brewing. 8 Galleons ONO.
                </p>
                <p>
                  <span className="text-magic-gold font-display text-xs">
                    LOST:
                  </span>{" "}
                  One remembrall, last seen floating near Diagon Alley. If found,
                  please owl N. Longbottom.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </>
  );
}
