import Link from "next/link";
import Image from "next/image";
import { categories } from "@/app/lib/products";
import { FiArrowRight, FiGrid } from "react-icons/fi";

export default function CategoriesSection() {
  const categoryList = Object.entries(categories);

  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Page Header ────────────────────────────────────────────────── */}
          <div className="py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            <FiGrid size={12} />
            {categoryList.length} Collections Available
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-stone-900 tracking-tight mb-4">
            Shop by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">
              Category
            </span>
          </h1>
          <p className="text-stone-500 text-lg max-w-xl mx-auto leading-relaxed">
            Explore our curated collections of premium furniture, each crafted
            with exceptional quality and timeless design.
          </p>
        </div>

        {/* ── Category Grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-24">
          {categoryList.map(([slug, category], index) => (
            <Link key={slug} href={`/categories/${slug}`} className="group block">

              <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100">

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Category Number Badge */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Arrow Icon — appears on hover */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#b58742] flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <FiArrowRight size={16} />
                  </div>

                  {/* Bottom text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="text-xl font-extrabold text-white leading-tight drop-shadow-md">
                      {category.name}
                    </h2>
                    <p className="text-white/70 text-xs mt-1 font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Explore collection →
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-stone-800 capitalize">
                      {category.name}
                    </p>
                    <p className="text-xs text-stone-400 mt-0.5">
                      {category.count ?? 12}+ products
                    </p>

                  </div>
                  <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#b58742] flex items-center justify-center text-stone-500 group-hover:text-white transition-all duration-300">
                    <FiArrowRight size={14} />
                  </div>
                </div>

              </div>
            </Link>
          ))}

          {/* ── "View All" CTA Card ─────────────────────────────────────── */}
          <Link href="/categories" className="group block">
            <div className="relative h-full min-h-[320px] rounded-3xl overflow-hidden border-2 border-dashed border-stone-300 hover:border-[#b58742] bg-white hover:bg-amber-50 transition-all duration-300 flex flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-stone-100 group-hover:bg-[#b58742] flex items-center justify-center text-stone-400 group-hover:text-white transition-all duration-300 text-2xl">
                +
              </div>
              <div>
                <p className="font-bold text-stone-700 group-hover:text-[#b58742] transition-colors">
                  Browse All
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  Discover more collections
                </p>
              </div>
            </div>
          </Link>
          </div>
    </div>
  );
}
