"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type Article } from "@/data/articles";
import { timeAgo } from "@/lib/utils";
import MagicCard from "@/components/magic/MagicCard";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "compact" | "featured";
  index?: number;
}

export default function ArticleCard({
  article,
  variant = "default",
  index = 0,
}: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Link href={`/article/${article.slug}`} className="block group">
          <MagicCard className="overflow-hidden">
            <div className="relative">
              <div className="living-photo aspect-[16/9] bg-magic-dark-brown">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-magic-ink via-magic-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {article.breaking && (
                  <span className="inline-block px-2 py-0.5 bg-magic-deep-red text-parchment-100 text-xs font-display uppercase tracking-wider mb-3 animate-glow">
                    Breaking
                  </span>
                )}
                <h2 className="font-display text-2xl md:text-3xl font-bold text-parchment-100 leading-tight mb-2 group-hover:text-magic-gold-light transition-colors">
                  {article.title}
                </h2>
                {article.subtitle && (
                  <p className="text-sm text-parchment-300 font-body mb-3">
                    {article.subtitle}
                  </p>
                )}
                <div className="flex items-center gap-3 text-xs text-parchment-400">
                  <span className="text-magic-gold">{article.author}</span>
                  <span>·</span>
                  <span>{timeAgo(article.date)}</span>
                  <span>·</span>
                  <span>{article.readTime} read</span>
                </div>
              </div>
            </div>
          </MagicCard>
        </Link>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
      >
        <Link href={`/article/${article.slug}`} className="block group">
          <div className="flex gap-4 py-4 border-b border-magic-gold/10 last:border-0">
            <div className="flex-1 min-w-0">
              <span className="text-xs text-magic-gold font-display uppercase tracking-wider">
                {article.category}
              </span>
              <h3 className="font-display text-base font-semibold text-parchment-200 mt-1 line-clamp-2 group-hover:text-magic-gold-light transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-parchment-400 mt-2">
                <span>{article.author}</span>
                <span>·</span>
                <span>{timeAgo(article.date)}</span>
              </div>
            </div>
            <div className="living-photo w-20 h-20 rounded-sm overflow-hidden shrink-0 bg-magic-dark-brown">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.image}
                alt=""
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/article/${article.slug}`} className="block group">
        <MagicCard>
          <div className="living-photo aspect-[4/3] bg-magic-dark-brown">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          <div className="p-4">
            <span className="text-xs text-magic-gold font-display uppercase tracking-wider">
              {article.category}
            </span>
            <h3 className="font-display text-lg font-semibold text-parchment-200 mt-1 mb-2 line-clamp-2 group-hover:text-magic-gold-light transition-colors">
              {article.title}
            </h3>
            <p className="text-sm text-parchment-400 line-clamp-2 font-body">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-2 text-xs text-parchment-400/70 mt-3">
              <span>{article.author}</span>
              <span>·</span>
              <span>{timeAgo(article.date)}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </MagicCard>
      </Link>
    </motion.div>
  );
}
