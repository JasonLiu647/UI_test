import { categories, getArticlesByCategory, articles } from "@/data/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import CategoryContent from "./CategoryContent";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return {};

  return {
    title: `${category.name} — The Daily Chronicle`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) notFound();

  const categoryArticles = getArticlesByCategory(params.slug);

  // If no articles in this category, show all as "related"
  const displayArticles =
    categoryArticles.length > 0 ? categoryArticles : articles.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-parchment-400 mb-6">
        <Link href="/" className="hover:text-magic-gold transition-colors">
          首頁
        </Link>
        <span>/</span>
        <span className="text-parchment-300">
          {category.icon} {category.name}
        </span>
      </nav>

      {/* Category header */}
      <header className="text-center mb-12">
        <span className="text-5xl mb-4 block">{category.icon}</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-parchment-100 mb-3">
          {category.name}
        </h1>
        <p className="text-parchment-400 font-body max-w-lg mx-auto">
          {category.description}
        </p>
        <div className="ornament-divider mt-6">
          <span className="text-xs tracking-[0.3em] uppercase">✦</span>
        </div>
      </header>

      <CategoryContent
        articles={displayArticles}
        emptyCategory={categoryArticles.length === 0}
        categoryName={category.name}
      />
    </div>
  );
}
