"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/lib/products";

export default function CategoryPage() {
  const { category } = useParams();
  const categoryProducts = Object.values(products).filter(
    (p) => p.category === category
  );

  if (!categoryProducts.length) return <p>No products in this category</p>;

  return (
    <main className="p-6 ">
      <h1 className="text-3xl font-bold mb-6">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${category}/${product.id}`}
          >
            <div className="border p-4 rounded cursor-pointer hover:shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
              />
              <h2 className="mt-2 font-semibold">{product.name}</h2>
              <p>{product.price} MAD</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}