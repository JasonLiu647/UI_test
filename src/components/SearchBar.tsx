"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

interface SearchBarProps {
  initialQuery?: string;
  large?: boolean;
}

export default function SearchBar({
  initialQuery = "",
  large = false,
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <Search
        size={large ? 20 : 16}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-parchment-400"
      />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search enchantments, potions, creatures..."
        className={`w-full bg-magic-ink/80 border border-magic-gold/30 text-parchment-200 placeholder:text-parchment-400/50 focus:outline-none focus:border-magic-gold/60 focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all rounded-sm ${
          large ? "pl-12 pr-4 py-4 text-lg" : "pl-10 pr-4 py-2.5 text-sm"
        }`}
      />
      <button
        type="submit"
        className={`absolute right-2 top-1/2 -translate-y-1/2 px-4 bg-magic-gold/20 border border-magic-gold/50 text-magic-gold hover:bg-magic-gold/30 transition-colors rounded-sm ${
          large ? "py-2 text-sm" : "py-1 text-xs"
        }`}
      >
        Search
      </button>
    </form>
  );
}
