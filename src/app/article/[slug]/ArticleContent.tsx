"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Article } from "@/data/articles";
import BiasGauge from "@/components/BiasGauge";
import AiReport from "@/components/AiReport";
import MovingIllustration from "@/components/MovingIllustration";

export default function ArticleContent({ article }: { article: Article }) {
  const [reportOpen, setReportOpen] = useState(true);
  const paragraphs = article.content.split("\n\n").filter(Boolean);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
      {/* Illustration */}
      <div className="flex justify-center mb-6">
        <MovingIllustration type={article.illustration} size={180} />
      </div>

      {/* Bias overview */}
      <div className="magic-border rounded-sm p-4 mb-6 bg-magic-ink/50">
        <div className="text-xs font-bold text-magic-gold tracking-widest font-display mb-2">📊 媒體立場光譜</div>
        <BiasGauge bias={article.biasBreakdown} />
      </div>

      {/* AI Report */}
      <div className="mb-6 cursor-pointer" onClick={() => setReportOpen(!reportOpen)}>
        <div className="text-center text-xs text-magic-gold font-display tracking-wider mb-1">
          {reportOpen ? "▼ AI 鑑定報告" : "▶ 點擊展開 AI 鑑定報告"}
        </div>
        <AiReport aiVerdict={article.aiVerdict} sources={article.sources} isOpen={reportOpen} />
      </div>

      {/* Article body */}
      <div className="parchment-bg rounded-sm p-6 md:p-8 magic-border">
        <p className="font-display text-base text-magic-sepia leading-relaxed mb-6 border-b border-magic-gold/20 pb-4">{article.excerpt}</p>
        <div className="article-body newspaper-columns">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="text-center mt-6 pt-4 border-t border-magic-gold/20">
          <span className="text-magic-gold text-lg tracking-[0.5em]">✦ ✦ ✦</span>
        </div>
      </div>
    </motion.div>
  );
}
