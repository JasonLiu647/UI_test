"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { categories } from "@/data/articles";
import { cn } from "@/lib/utils";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="border-b border-magic-gold/20 bg-magic-ink/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs text-parchment-300 font-body">
          <span>{today}</span>
          <span className="hidden sm:inline italic">
            &quot;Veritas per Magicam&quot; — Truth Through Magic
          </span>
          <span>Est. 1743</span>
        </div>
      </div>

      {/* Masthead */}
      <div className="border-b border-magic-gold/30 bg-magic-ink/95 backdrop-blur-sm py-6 text-center">
        <Link href="/" className="inline-block group">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-magic-gold text-2xl">✦</span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-magic-gold to-transparent" />
            <span className="text-magic-gold text-2xl">⚡</span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-magic-gold to-transparent" />
            <span className="text-magic-gold text-2xl">✦</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-shimmer">
            The Daily Chronicle
          </h1>
          <p className="font-display text-sm text-parchment-400 mt-1 tracking-[0.3em] uppercase">
            The Wizarding World&apos;s Most Trusted Source
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="border-b border-magic-gold/20 bg-magic-dark-brown/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="px-3 py-2 text-sm text-parchment-300 hover:text-magic-gold transition-colors font-body flex items-center gap-1.5"
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-parchment-300 hover:text-magic-gold transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Search */}
            <Link
              href="/search"
              className="flex items-center gap-2 text-sm text-parchment-300 hover:text-magic-gold transition-colors"
            >
              <Search size={16} />
              <span className="hidden sm:inline">Search</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 border-t border-magic-gold/10",
            menuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="px-4 py-2 space-y-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 text-sm text-parchment-300 hover:text-magic-gold transition-colors font-body"
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
