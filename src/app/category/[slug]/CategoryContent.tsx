"use client";

import { type Article } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { motion } from "framer-motion";

interface CategoryContentProps {
  articles: Article[];
  emptyCategory: boolean;
  categoryName: string;
}

export default function CategoryContent({
  articles,
  emptyCategory,
  categoryName,
}: CategoryContentProps) {
  return (
    <>
      {emptyCategory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8 p-4 magic-border rounded-sm bg-magic-ink/50"
        >
          <p className="text-parchment-400 font-body text-sm">
            目前「{categoryName}」尚無文章，以下為其他分類的議題：
          </p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <ArticleCard key={article.slug} article={article} index={i} />
        ))}
      </div>
    </>
  );
}
