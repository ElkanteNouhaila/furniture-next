"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/lib/products";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = Array.isArray(params.category) ? params.category[0] : params.category; 

  // Filter products using lowercase for matching
  const categoryProducts = Object.values(products).filter(
    (p) => p.category.toLowerCase() === categorySlug?.toLowerCase()
  );

  if (!categoryProducts.length) return <p>No products in this category</p>;

  // Use the first product's category for proper display name
  const displayName = categoryProducts[0]?.category || categorySlug;

  return (
    <main className="p-6">
      {/* Display with proper capitalization */}
      <h1 className="text-3xl font-bold mb-6">{displayName}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <Link
            key={product.id}
            href={`/categories/${categorySlug}/${product.id}`}
          >
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer text-center">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="rounded"
              />
              <h2 className="mt-3 text-xl font-semibold">{product.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}