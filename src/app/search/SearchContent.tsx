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
          🔍 搜尋議題庫
        </h1>
        <p className="text-parchment-400 font-body mb-6">
          搜尋所有新聞議題、標籤與多方觀點分析
        </p>
        <div className="max-w-2xl mx-auto">
          <SearchBar initialQuery={query} large />
        </div>
      </header>

      <div className="ornament-divider mb-8">
        <span className="font-display text-xs tracking-[0.3em] uppercase">
          {query
            ? `搜尋「${query}」找到 ${results.length} 則結果`
            : "瀏覽所有議題"}
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
            找不到「{query}」相關的議題
          </p>
          <p className="text-sm text-parchment-400">
            試試其他關鍵字，或瀏覽分類頁面尋找感興趣的議題。
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
          <p className="text-parchment-400 animate-breathe">搜尋中...</p>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
