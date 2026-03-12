"use client";

import { useParams } from "next/navigation";
import { products } from "@/app/lib/products";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = Array.isArray(params.category) ? params.category[0] : params.category; 

  // Filter products using lowercase for matching
  const categoryProducts = Object.values(products).filter(
    (p) => p.category.toLowerCase() === categorySlug?.toLowerCase()
  );

  if (!categoryProducts.length) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-500 mb-4">No products found in this category</p>
          <Link href="./id/page.tsx" className="text-[#b58742] hover:underline">
            ← Back to categories
          </Link>
        </div>
      </main>
    );
  }

  // Use the first product's category for proper display name
  const displayName = categoryProducts[0]?.category || categorySlug;
  const displayNameText = (displayName ?? "").toString();

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stone-700 to-stone-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{displayNameText}</h1>
          <p className="text-stone-200">Explore our premium collection of {displayNameText.toLowerCase()}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard 
              key={product.id}
              slug={`${categorySlug}/${product.id}`}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
