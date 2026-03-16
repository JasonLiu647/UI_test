"use client";

import { motion } from "framer-motion";

interface ArticleContentProps {
  content: string;
  excerpt: string;
}

export default function ArticleContent({ content, excerpt }: ArticleContentProps) {
  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="parchment-bg rounded-sm p-6 md:p-10 magic-border"
    >
      {/* Lead paragraph */}
      <p className="font-display text-lg text-magic-sepia leading-relaxed mb-6 border-b border-magic-gold/20 pb-6">
        {excerpt}
      </p>

      {/* Body */}
      <div className="article-body newspaper-columns">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* End ornament */}
      <div className="text-center mt-8 pt-4 border-t border-magic-gold/20">
        <span className="text-magic-gold text-lg tracking-[0.5em]">✦ ✦ ✦</span>
      </div>
    </motion.div>
  );
}
