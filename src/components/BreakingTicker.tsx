"use client";

const headlines = [
  "⚡ BREAKING: Ancient Ward System Discovered Beneath London Bridge — Roman-era enchantments still active after 2,000 years",
  "✦ QUIDDITCH: Luxembourg stuns Brazil 280-260 in World Cup qualifier shock",
  "⚗ POTIONS: Self-Brewing Cauldrons spark heated debate — Guild demands ban",
  "🐉 CREATURES: Welsh Dragon Sanctuary expansion approved — £47M for endangered species",
  "⚖ MINISTRY: New invisibility cloak registration draws criticism from civil liberties groups",
  "✦ HEALING: Breakthrough synthetic phoenix tears could revolutionise magical medicine",
];

export default function BreakingTicker() {
  const doubled = [...headlines, ...headlines];

  return (
    <div className="ticker-wrap py-2 border-b border-magic-gold/20">
      <div className="flex items-center">
        <span className="shrink-0 px-4 py-1 bg-magic-gold text-magic-ink font-display font-bold text-xs uppercase tracking-wider z-10">
          Breaking News
        </span>
        <div className="overflow-hidden flex-1">
          <div className="animate-marquee whitespace-nowrap flex">
            {doubled.map((h, i) => (
              <span
                key={i}
                className="inline-block px-8 text-sm text-parchment-100 font-body"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
