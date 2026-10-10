// import Link from "next/link";
// import Image from "next/image";
// import { categories } from "@/app/lib/products";
// import { FiArrowRight, FiGrid } from "react-icons/fi";
// import { products } from "@/app/lib/products";

// export default function ProductsPage() {
//   const categoryList = Object.entries(categories);

//   return (
//     <main className="min-h-screen bg-stone-50">

      

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* ── Page Header ────────────────────────────────────────────────── */}
//         <div className="py-16 text-center">
//           <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
//             <FiGrid size={12} />
//             {categoryList.length} Collections Available
//           </div>
//           <h1 className="text-5xl md:text-6xl font-black text-stone-900 tracking-tight mb-4">
//             Shop by{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">
//               Category
//             </span>
//           </h1>
//           <p className="text-stone-500 text-lg max-w-xl mx-auto leading-relaxed">
//             Explore our curated collections of premium furniture, each crafted
//             with exceptional quality and timeless design.
//           </p>
//         </div>

//         {/* ── Category Grid ──────────────────────────────────────────────── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-24">
//           {categoryList.map(([slug, category], index) => {
//             const productArray = Object.values(products); 
//             const productCount = productArray.filter(p => p.category === slug).length;
//             return(

//               <Link key={slug} href={`/categories/${slug}`} className="group block">

//                 <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100">

//                   {/* Image Container */}
//                   <div className="relative h-64 overflow-hidden">
//                     <Image
//                       src={category.image}
//                       alt={category.name}
//                       fill
//                       className="object-cover transition-transform duration-700 group-hover:scale-110"
//                     />

//                     {/* Gradient Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

//                     {/* Category Number Badge */}
//                     <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-xs font-bold">
//                       {String(index + 1).padStart(2, "0")}
//                     </div>

//                     {/* Arrow Icon — appears on hover */}
//                     <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#b58742] flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
//                       <FiArrowRight size={16} />
//                     </div>

//                     {/* Bottom text overlay */}
//                     <div className="absolute bottom-0 left-0 right-0 p-5">
//                       <h2 className="text-xl font-extrabold text-white leading-tight drop-shadow-md">
//                         {category.name}
//                       </h2>
//                       <p className="text-white/70 text-xs mt-1 font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
//                         Explore collection →
//                       </p>
//                     </div>
//                   </div>

//                   {/* Card Footer */}
//                   <div className="px-5 py-4 flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-bold text-stone-800 capitalize">
//                         {category.name}
//                       </p>
//                       <p className="text-xs text-stone-400 mt-0.5">
//                         {productCount} products
//                       </p>

//                     </div>
//                     <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#b58742] flex items-center justify-center text-stone-500 group-hover:text-white transition-all duration-300">
//                       <FiArrowRight size={14} />
//                     </div>
//                   </div>

//                 </div>
//               </Link>
//             );
//           })} 
//         </div>
//       </div>
//     </main>
//   );
// }




import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/app/lib/products";
import { FiArrowRight, FiGrid } from "react-icons/fi";

export default function ProductsPage() {
  const categoryList = Object.entries(categories);
  const productArray = Object.values(products);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <section className="py-16 text-center md:py-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b58742]/30 bg-[#b58742]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#9a7136] dark:text-amber-400">
            <FiGrid size={13} />
            {categoryList.length} Collections Available
          </div>

          <h1 className="mb-5 text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl md:text-6xl">
            Shop by{" "}
            <span className="bg-gradient-to-r from-[#b58742] to-amber-400 bg-clip-text text-transparent">
              Category
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-base leading-7 text-stone-500 dark:text-stone-400 sm:text-lg">
            Explore our curated collections of premium furniture,
            designed to bring timeless elegance and comfort to your home.
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-[#b58742]/70" />
        </section>

        {/* Category Grid */}
        <section
          aria-label="Furniture categories"
          className="grid grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {categoryList.map(([slug, category], index) => {
            const productCount = productArray.filter(
              (product) => product.category === slug
            ).length;

            return (
              <Link
                key={slug}
                href={`/categories/${slug}`}
                className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b58742] focus-visible:ring-offset-4 dark:focus-visible:ring-offset-stone-950"
              >
                <article className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#b58742]/40 group-hover:shadow-xl dark:border-stone-800 dark:bg-stone-900">
                  {/* Category Image */}
                  <div className="relative h-60 overflow-hidden sm:h-64">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />

                    {/* Category Number */}
                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xs font-semibold text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Arrow */}
                    <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-[#b58742] text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <FiArrowRight size={16} />
                    </div>

                    {/* Image Caption */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                        Luxury Touch Collection
                      </p>
                      <h2 className="text-xl font-semibold text-white drop-shadow-md">
                        {category.name}
                      </h2>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between px-5 py-4">
                    <div>
                      <h3 className="text-sm font-medium text-stone-800 dark:text-stone-100">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {productCount}{" "}
                        {productCount === 1 ? "product" : "products"}
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors duration-300 group-hover:bg-[#b58742] group-hover:text-white dark:bg-stone-800 dark:text-stone-300 dark:group-hover:bg-[#b58742] dark:group-hover:text-white">
                      <FiArrowRight size={15} />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}