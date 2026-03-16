"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { type Article } from "@/data/articles";

import BiasGauge from "@/components/BiasGauge";
import AiReport from "@/components/AiReport";
import MovingIllustration from "@/components/MovingIllustration";

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
  const [reportOpen, setReportOpen] = useState(false);

  const toggleReport = (e: React.MouseEvent) => {
    e.preventDefault();
    setReportOpen(!reportOpen);
  };

  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="cursor-pointer border-b-2 border-magic-gold pb-6 mb-2"
        onClick={toggleReport}
      >
        <div className="text-center">
          {article.breaking && (
            <span className="inline-block px-3 py-1 border-2 border-magic-deep-red text-magic-deep-red font-display font-bold text-[10px] tracking-widest uppercase -rotate-1 animate-glow mb-3">
              ⚡ Breaking News ⚡
            </span>
          )}
          <div className="text-[10px] font-bold tracking-widest text-magic-gold uppercase mb-1 font-display">
            〔{article.category === "tech-industry" ? "科技產業" : article.category === "economy" ? "經濟民生" : article.category === "politics" ? "政策法規" : "社會觀察"}〕
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_160px] gap-5 items-start">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-black text-magic-ink leading-tight mb-2">
              {article.title}
            </h2>
            <p className="font-body italic text-sm text-magic-sepia mb-2">
              {article.subtitle}
            </p>
            <div className="text-[10px] text-magic-sepia/70 mb-2">
              {article.date} · 讀者投票 <strong>{article.votes.toLocaleString()}</strong> 人次
              {article.heat >= 85 && <span className="text-magic-deep-red ml-2">● 熱議中</span>}
            </div>
            <BiasGauge bias={article.biasBreakdown} />
            <p className="font-body text-sm text-magic-dark-brown leading-relaxed mt-2">
              {article.excerpt}
            </p>
          </div>
          <div className="hidden md:block">
            <MovingIllustration type={article.illustration} size={150} />
          </div>
        </div>

        <AiReport aiVerdict={article.aiVerdict} sources={article.sources} isOpen={reportOpen} />

        <div className="text-center mt-2 text-[10px] text-magic-sepia/60 italic font-display">
          {reportOpen ? "— 收起鑑定報告 —" : "— 點擊展開 AI 鑑定報告 —"}
        </div>

        <Link href={`/article/${article.slug}`} className="block text-center mt-2 text-xs text-magic-gold hover:text-magic-deep-red transition-colors font-display" onClick={(e) => e.stopPropagation()}>
          閱讀完整報導 →
        </Link>
      </motion.article>
    );
  }

  if (variant === "compact") {
    return (
      <motion.article
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="py-3 border-b border-magic-gold/20 last:border-0 cursor-pointer"
        onClick={toggleReport}
      >
        <div className="text-[9px] font-bold tracking-widest text-magic-gold uppercase font-display">
          〔{article.categoryIcon} {article.category === "tech-industry" ? "科技產業" : article.category === "economy" ? "經濟民生" : article.category === "politics" ? "政策法規" : "社會觀察"}〕
        </div>
        <h3 className="font-display text-base font-bold text-magic-ink leading-tight mt-1 mb-1">
          {article.title}
        </h3>
        <div className="text-[9px] text-magic-sepia/70">
          投票 {article.votes.toLocaleString()} 人次
          {article.heat >= 80 && <span className="text-magic-deep-red ml-2">● 熱議</span>}
        </div>
        <BiasGauge bias={article.biasBreakdown} />
        <AiReport aiVerdict={article.aiVerdict} sources={article.sources} isOpen={reportOpen} />
        <div className="text-center text-[10px] text-magic-sepia/50 italic font-display">
          {reportOpen ? "— 收起 —" : "— 展開鑑定報告 —"}
        </div>
      </motion.article>
    );
  }

  // Default card
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="cursor-pointer mb-5 pb-5 border-b border-magic-gold/20"
      onClick={toggleReport}
    >
      <div className="grid grid-cols-[90px_1fr] gap-3 items-start">
        <MovingIllustration type={article.illustration} size={90} />
        <div>
          <div className="text-[9px] font-bold tracking-widest text-magic-gold uppercase font-display">
            〔{article.categoryIcon} {article.category === "tech-industry" ? "科技產業" : article.category === "economy" ? "經濟民生" : article.category === "politics" ? "政策法規" : "社會觀察"}〕
          </div>
          <h3 className="font-display text-lg font-bold text-magic-ink leading-tight mt-1 mb-1">
            {article.title}
          </h3>
          <p className="text-xs text-magic-sepia font-body mb-1">{article.subtitle}</p>
          <div className="text-[9px] text-magic-sepia/70">
            投票 {article.votes.toLocaleString()} 人次
            {article.heat >= 85 && <span className="text-magic-deep-red ml-2">● 熱議中</span>}
          </div>
          <BiasGauge bias={article.biasBreakdown} />
        </div>
      </div>

      <AiReport aiVerdict={article.aiVerdict} sources={article.sources} isOpen={reportOpen} />

      <div className="text-center mt-2 text-[10px] text-magic-sepia/50 italic font-display">
        {reportOpen ? "— 收起 —" : "— 展開鑑定報告 —"}
      </div>

      <Link href={`/article/${article.slug}`} className="block text-center text-xs text-magic-gold hover:text-magic-deep-red transition-colors font-display mt-1" onClick={(e) => e.stopPropagation()}>
        閱讀完整報導 →
      </Link>
    </motion.article>
  );
}
