import Link from "next/link";
import Image from "next/image";
import { categories } from "@/app/lib/products";

export default function ProductsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Product Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.entries(categories).map(([slug, category]) => (
          <Link key={slug} href={`/products/${slug}`}>
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer text-center">
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={200}
                className="rounded"
              />
              <h2 className="mt-3 text-xl font-semibold">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}