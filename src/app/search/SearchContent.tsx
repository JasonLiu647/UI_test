"use client";

import { useSearchParams } from "next/navigation";
import { searchArticles, articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import SearchBar from "@/components/SearchBar";
import { Suspense } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = query ? searchArticles(query) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-parchment-100 mb-3">
          🔍 Search the Archives
        </h1>
        <p className="text-parchment-400 font-body mb-6">
          Explore centuries of magical knowledge and news
        </p>
        <div className="max-w-2xl mx-auto">
          <SearchBar initialQuery={query} large />
        </div>
      </header>

      <div className="ornament-divider mb-8">
        <span className="font-display text-xs tracking-[0.3em] uppercase">
          {query
            ? `${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`
            : "Browse All Articles"}
        </span>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(query ? results : articles).map((article, i) => (
          <ArticleCard key={article.slug} article={article} index={i} />
        ))}
      </div>

      {query && results.length === 0 && (
        <div className="text-center py-16 magic-border rounded-sm bg-magic-ink/50">
          <p className="text-2xl mb-2">🔮</p>
          <p className="font-display text-lg text-parchment-300 mb-2">
            No articles found for &quot;{query}&quot;
          </p>
          <p className="text-sm text-parchment-400">
            Perhaps the information you seek has been placed under a Fidelius
            Charm. Try different search terms.
          </p>
        </div>
      )}
    </div>
  );
}

export default function SearchContent() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-parchment-400 animate-breathe">Searching the archives...</p>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
