import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/lib/products";

export default function FeaturedProductsSection() {
  const featuredProducts = Object.values(products).slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-stone-900 mb-3">
            Featured Products
          </h2>
          <p className="text-gray-600">
            Discover some of our most popular furniture pieces
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/categories/${product.category}/${product.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-stone-100">

                <div className="relative h-60">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg text-stone-900">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {product.category}
                  </p>

                
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="bg-[#b58742] text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-500 transition"
          >
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}