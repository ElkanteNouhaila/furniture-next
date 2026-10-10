// import Image from "next/image";
// import Link from "next/link";
// import { products } from "@/app/lib/products";

// export default function FeaturedProductsSection() {
//   const featuredProducts = Object.values(products).slice(0, 4);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold text-stone-900 mb-3">
//             Featured Products
//           </h2>
//           <p className="text-gray-600">
//             Discover some of our most popular furniture pieces
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 gap-8">
//           {featuredProducts.map((product) => (
//             <Link
//               key={product.id}
//               href={`/categories/${product.category}/${product.id}`}
//               className="group"
//             >
//               <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-stone-100">

//                 <div className="relative h-60">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     className="object-cover group-hover:scale-105 transition duration-300"
//                   />
//                 </div>

//                 <div className="p-5">
//                   <h3 className="font-semibold text-lg text-stone-900">
//                     {product.name}
//                   </h3>

//                   <p className="text-sm text-gray-500 mt-1">
//                     {product.category}
//                   </p>

                
//                 </div>

//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Bottom Button */}
//         <div className="text-center mt-12">
//           <Link
//             href="/categories"
//             className="bg-[#b58742] text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-500 transition"
//           >
//             View All Products
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// }




import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { products } from "@/app/lib/products";

export default function FeaturedProductsSection() {
  const featuredProducts = Object.values(products).slice(0, 4);

  return (




<section className="bg-white py-20 transition-colors duration-300 dark:bg-stone-950 md:py-24">




      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#b58742]">
              Curated for your home
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 md:text-4xl">
              Featured Products
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-stone-600 dark:text-stone-400 md:text-base">
              Discover timeless pieces designed to bring comfort and elegance
              to your space.
            </p>
          </div>

          <Link
            href="/categories"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-stone-800 transition-colors hover:text-[#b58742] dark:text-stone-200 dark:hover:text-amber-400"
          >
            Explore all products
            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/categories/${product.category}/${product.id}`}
              className="group min-w-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b58742] focus-visible:ring-offset-4 dark:focus-visible:ring-offset-stone-950"
            >
              <article className="h-full overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#b58742]/50 group-hover:shadow-xl dark:border-stone-800 dark:bg-stone-900 dark:group-hover:border-amber-500/40">
                {/* Product image */}
                <div className="relative h-64 overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="absolute bottom-3 left-3 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-800 backdrop-blur-md dark:border-white/10 dark:bg-stone-950/80 dark:text-stone-100">
                    {product.category}
                  </span>

                  <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white/90 text-stone-800 opacity-0 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-stone-950/80 dark:text-stone-100">
                    <FiArrowUpRight size={17} aria-hidden="true" />
                  </span>
                </div>

                {/* Product details */}
                <div className="flex items-center justify-between gap-3 p-5">
                  <h3 className="min-w-0 truncate text-base font-semibold text-stone-900 transition-colors duration-300 group-hover:text-[#b58742] dark:text-stone-100 dark:group-hover:text-amber-400">
                    {product.name}
                  </h3>

                  <span
                    className="shrink-0 text-xs font-medium text-stone-400 dark:text-stone-500"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Bottom call to action */}
        <div className="mt-12 text-center sm:mt-14">
          <Link
            href="/categories"
            className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-transparent px-7 py-3.5 text-sm font-semibold text-stone-800 transition-all duration-300 hover:border-[#b58742] hover:bg-[#b58742] hover:text-white dark:border-stone-700 dark:text-stone-200 dark:hover:border-[#b58742] dark:hover:bg-[#b58742] dark:hover:text-white"
          >
            View All Products
            <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}