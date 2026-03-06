"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { products, Product } from "@/app/lib/products";

export default function ProductsPage() {
  const { slug } = useParams() as { slug: string };
  const product = products[slug];

  if (!product) return <p>Product not found</p>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        {product.name}
      </h1>

      <Image 
        src={product.image} 
        alt={product.name} 
        width={500} 
        height={300} 
      />
      
      <p className="mt-4 text-gray-600">{product.price} MAD</p>
    </main>
  );
}