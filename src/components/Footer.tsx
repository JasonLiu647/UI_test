import Link from "next/link";
import { categories } from "@/data/articles";

export default function Footer() {
  return (
    <footer className="border-t-2 border-magic-gold/30 bg-magic-ink/95 mt-12">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-magic-gold/30 to-transparent" />
          <span className="text-magic-gold text-lg">✦ ⚡ ✦</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-magic-gold/30 to-transparent" />
        </div>

        <div className="text-center">
          <h3 className="font-display text-lg text-magic-gold mb-1">The Daily Chronicle · 每日魔法紀事報</h3>
          <p className="text-xs text-parchment-400 mb-4">
            「以魔法求真理，不被任何一方帶風向」
          </p>

          <div className="flex justify-center gap-4 mb-4">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`} className="text-xs text-parchment-400 hover:text-magic-gold transition-colors">
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-magic-gold/10 pt-4 text-[10px] text-parchment-400/50 tracking-wider">
            Crafted with ✦ · Next.js + Tailwind CSS + Framer Motion · © 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
