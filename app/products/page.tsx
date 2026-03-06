import { products } from "@/app/lib/products";
import ProductCard from "@/app/ui/ProductCard";

export default function ProductsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.entries(products).map(([slug, product]) => (
          <ProductCard key={slug} slug={slug} product={product} />
        ))}
      </div>
    </main>
  );
}