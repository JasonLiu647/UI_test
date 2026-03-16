import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center relative z-10">
      <div className="text-6xl mb-6">🔮</div>
      <h1 className="font-display text-4xl font-bold text-parchment-100 mb-4">
        Page Not Found
      </h1>
      <p className="text-parchment-400 font-body mb-2">
        The page you seek appears to have been vanished — perhaps by a
        particularly enthusiastic Obliviator.
      </p>
      <p className="text-parchment-400/60 text-sm mb-8">
        Error 404: This content may be protected by a Fidelius Charm.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-magic-gold/20 border border-magic-gold/50 text-magic-gold font-display hover:bg-magic-gold/30 transition-colors rounded-sm"
      >
        Return to the Front Page
      </Link>
    </div>
  );
}
