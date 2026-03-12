import Link from "next/link";
import Image from "next/image";
import { categories } from "@/app/lib/products";

export default function CategoriesSection() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">Shop by Category</h2>
        <p className="text-gray-600 text-lg">Explore our curated collection of premium furniture</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Object.values(categories).map((category) => (
          <Link 
            key={category.name} 
            href={`/categories/${category.name.toLowerCase()}`}
          >
            <div className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
              
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#b58742] transition-colors">
                  {category.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
