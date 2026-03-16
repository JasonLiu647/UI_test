"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { categories } from "@/data/articles";
import { cn } from "@/lib/utils";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="border-b border-magic-gold/20 bg-magic-ink/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-2 flex justify-between items-center text-[9px] text-parchment-300 tracking-widest">
          <span>THE WIZARDING WORLD · EST. 1743</span>
          <span className="hidden sm:inline">AI 鑑定版　第 0001 號</span>
          <span>售價：免費</span>
        </div>
      </div>

      {/* Masthead */}
      <div className="border-b border-magic-gold/30 bg-magic-ink/95 backdrop-blur-sm py-6 text-center">
        <div className="border-t-2 border-b border-magic-dark-brown max-w-4xl mx-auto mb-2" style={{ borderTopColor: "#5C4033", borderBottomColor: "#5C4033" }}>
          <div className="h-0.5 bg-magic-dark-brown mt-0.5" />
        </div>
        <Link href="/" className="inline-block group">
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="text-magic-gold text-lg">✦</span>
            <span className="text-magic-gold text-lg">⚡</span>
            <span className="text-magic-gold text-lg">✦</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-wider text-shimmer leading-none">
            The Daily Chronicle
          </h1>
          <p className="font-display text-sm text-parchment-400 mt-1 tracking-[0.3em]">
            每 日 魔 法 紀 事 報
          </p>
          <p className="text-[11px] italic text-magic-gold mt-1 font-body">
            &quot;Veritas per Magicam&quot; — 以魔法求真理・看穿每則新聞背後的立場
          </p>
        </Link>
        <div className="border-t-2 border-b border-magic-dark-brown max-w-4xl mx-auto mt-2" style={{ borderTopColor: "#5C4033", borderBottomColor: "#5C4033" }}>
          <div className="h-0.5 bg-magic-dark-brown mt-0.5" />
        </div>
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center text-[9px] text-parchment-400 tracking-wider mt-2">
          <span>民國一一五年三月十六日（星期一）</span>
          <span>突破同溫層・多方觀點並呈</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-magic-gold/20 bg-magic-dark-brown/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-10">
            <div className="hidden md:flex items-center gap-1">
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/category/${cat.slug}`} className="px-3 py-1.5 text-xs text-parchment-300 hover:text-magic-gold transition-colors font-display tracking-wider">
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-parchment-300 hover:text-magic-gold" aria-label="Toggle menu">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <Link href="/search" className="flex items-center gap-1.5 text-xs text-parchment-300 hover:text-magic-gold transition-colors">
              <Search size={14} />
              <span className="hidden sm:inline">搜尋</span>
            </Link>
          </div>
        </div>
        <div className={cn("md:hidden overflow-hidden transition-all duration-300 border-t border-magic-gold/10", menuOpen ? "max-h-60" : "max-h-0")}>
          <div className="px-4 py-2 space-y-1">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`} onClick={() => setMenuOpen(false)} className="block px-3 py-1.5 text-xs text-parchment-300 hover:text-magic-gold font-display">
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
