import Link from "next/link";
import { categories } from "@/data/articles";

export default function Footer() {
  return (
    <footer className="border-t border-magic-gold/20 bg-magic-ink/95 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Ornamental top */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-magic-gold/30 to-transparent" />
          <span className="text-magic-gold text-lg">✦</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-magic-gold/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl text-magic-gold mb-3">
              The Daily Chronicle
            </h3>
            <p className="text-sm text-parchment-400 leading-relaxed">
              Delivering magical news since 1743. The most trusted source in the
              wizarding world for enchantments, potions, creature reports, and
              Ministry affairs.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h4 className="font-display text-sm text-magic-gold-light uppercase tracking-wider mb-3">
              Sections
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="text-sm text-parchment-400 hover:text-magic-gold transition-colors"
                >
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-display text-sm text-magic-gold-light uppercase tracking-wider mb-3">
              Subscribe by Owl Post
            </h4>
            <p className="text-sm text-parchment-400 mb-3">
              Receive the morning edition delivered directly to your window.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@owl-mail.wiz"
                className="flex-1 px-3 py-2 bg-magic-ink border border-magic-gold/30 rounded-sm text-sm text-parchment-200 placeholder:text-parchment-400/50 focus:outline-none focus:border-magic-gold/60"
              />
              <button className="px-4 py-2 bg-magic-gold/20 border border-magic-gold/50 text-magic-gold text-sm hover:bg-magic-gold/30 transition-colors rounded-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-magic-gold/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-parchment-400/60">
          <p>&copy; 2026 The Daily Chronicle. All rights reserved.</p>
          <p>
            Enchanted with ✦ using Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
