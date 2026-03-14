// import Image from "next/image";
// import Link from "next/link";
// import { products } from "@/app/lib/products";
// import { FiShoppingCart, FiHeart, FiShare2 } from "react-icons/fi";
// import { FaCheck } from "react-icons/fa";

// export default async function ProductPage({
//   params,
// }: {
//   params: { category: string; id: string };
// }) {
//   const { id } = await params;
//   const product = products[id];

//   if (!product) {
//     return (
//       <main className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-2xl text-gray-500 mb-4">Product not found</p>
//           <Link href="/categories" className="text-[#b58742] hover:underline">
//             ← Back to categories
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-12">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Breadcrumb */}
//         <div className="mb-8">
//           <Link href="/categories" className="text-[#b58742] hover:underline">
//             Categories
//           </Link>
//           <span className="mx-2 text-gray-500">/</span>
//           <Link href={`/categories/${params.category}`} className="text-[#b58742] hover:underline">
//             {params.category}
//           </Link>
//           <span className="mx-2 text-gray-500">/</span>
//           <span className="text-gray-700">{product.name}</span>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* Image Section */}
//           <div className="flex flex-col gap-4">
//             <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg h-96 md:h-[500px]">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>
            
//             {/* Thumbnail Gallery (if you want to add more images) */}
//             <div className="flex gap-2">
//               <div className="w-20 h-20 bg-stone-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={80}
//                   height={80}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Product Info Section */}
//           <div className="flex flex-col gap-6">
            
           
//             {/* Description */}
//             <div className="bg-stone-50 p-6 rounded-xl">
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 {product.description}
//               </p>
//             </div>

//             {/* Features */}
//             <div className="space-y-3">
//               <h3 className="font-semibold text-stone-900 text-lg">Why you'll love this:</h3>
//               <ul className="space-y-2">
//                 <li className="flex items-center gap-3 text-gray-700">
//                   <FaCheck className="text-[#b58742]" />
//                   Premium quality materials
//                 </li>
//                 <li className="flex items-center gap-3 text-gray-700">
//                   <FaCheck className="text-[#b58742]" />
//                   Modern & elegant design
//                 </li>
//                 <li className="flex items-center gap-3 text-gray-700">
//                   <FaCheck className="text-[#b58742]" />
//                   Fast & reliable delivery
//                 </li>
//               </ul>
//             </div>

//             {/* Quantity Selector & Buttons */}
//             <div className="flex flex-col gap-4 pt-4">
              
//               {/* Quantity */}
//               <div className="flex items-center gap-4">
//                 <span className="text-gray-700 font-semibold">Quantity:</span>
//                 <div className="flex items-center border border-stone-300 rounded-lg">
//                   <button className="px-4 py-2 hover:bg-stone-100 transition">−</button>
//                   <input 
//                     type="number" 
//                     defaultValue="1" 
//                     className="w-16 text-center border-l border-r border-stone-300 py-2 focus:outline-none"
//                   />
//                   <button className="px-4 py-2 hover:bg-stone-100 transition">+</button>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-4">
//                 <button className="flex-1 bg-gradient-to-r from-stone-600 to-stone-700 hover:from-[#b58742] hover:to-stone-800 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg">
//                   <FiShoppingCart size={24} />
//                   Add to Cart
//                 </button>
//                 <button className="px-6 py-4 border-2 border-stone-300 rounded-xl hover:border-[#b58742] hover:text-[#b58742] transition-colors duration-300">
//                   <FiHeart size={24} />
//                 </button>
//                 <button className="px-6 py-4 border-2 border-stone-300 rounded-xl hover:border-[#b58742] hover:text-[#b58742] transition-colors duration-300">
//                   <FiShare2 size={24} />
//                 </button>
//               </div>
//             </div>

//             {/* Additional Info */}
//             <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200">
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-[#b58742]">🚚</p>
//                 <p className="text-sm text-gray-600 mt-1">Free Shipping</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-[#b58742]">↩️</p>
//                 <p className="text-sm text-gray-600 mt-1">Easy Returns</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-[#b58742]">🛡️</p>
//                 <p className="text-sm text-gray-600 mt-1">Secure Payment</p>
//               </div>
//             </div>

//           </div>

//         </div>

//         {/* Related Products Section (Optional) */}
//         <div className="mt-20 pt-12 border-t border-stone-200">
//           <h2 className="text-3xl font-bold mb-8">You Might Also Like</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Add related products here */}
//           </div>
//         </div>

//       </div>
//     </main>
//   );
// }
// <>
// </>


// app/[category]/[id]/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/app/lib/products";
import {
  FiShoppingCart,
  FiHeart,
  FiShare2,
  FiChevronRight,
  FiTruck,
  FiRefreshCw,
  FiShield,
  FiStar,
  FiMinus,
  FiPlus,
  FiZap,
} from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// ─── Star Renderer ───────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star)
          return <FaStar key={star} className="text-amber-400 text-sm" />;
        if (rating >= star - 0.5)
          return <FaStarHalfAlt key={star} className="text-amber-400 text-sm" />;
        return <FaRegStar key={star} className="text-amber-400 text-sm" />;
      })}
    </div>
  );
}

// ─── Badge ───────────────────────────────────────────────────────────────────
function Badge({ label, variant }: { label: string; variant: "gold" | "red" | "green" }) {
  const styles = {
    gold: "bg-amber-50 text-amber-700 border border-amber-200",
    red: "bg-red-50 text-red-600 border border-red-200",
    green: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };
  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${styles[variant]}`}>
      {label}
    </span>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function ProductPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { id, category } = React.use(params);
  const product = products[id];

  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">(
    "description"
  );
  const [activeImage, setActiveImage] = useState(0);

  // Simulate multiple gallery images using the same src (replace with real extras)
  const gallery = [product?.image, product?.image, product?.image].filter(Boolean);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center space-y-4">
          <div className="text-8xl mb-6">🔍</div>
          <h2 className="text-2xl font-bold text-stone-800">Product Not Found</h2>
          <p className="text-stone-500">
            The item you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 mt-4 bg-[#b58742] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#9e7235] transition-colors"
          >
            ← Back to Categories
          </Link>
        </div>
      </main>
    );
  }

  

  return (
    <main className="min-h-screen bg-stone-50">

      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ── Breadcrumb ───────────────────────────────────────────────────── */}
        <nav className="flex items-center gap-1.5 text-sm text-stone-500 mb-10">
          <Link href="/" className="hover:text-[#b58742] transition-colors">
            Home
          </Link>
          <FiChevronRight className="text-stone-400 text-xs" />
          <Link href="/categories" className="hover:text-[#b58742] transition-colors">
            Categories
          </Link>
          <FiChevronRight className="text-stone-400 text-xs" />
          <Link
            href={`/categories/${category}`}
            className="hover:text-[#b58742] transition-colors capitalize"
          >
            {category}
          </Link>
          <FiChevronRight className="text-stone-400 text-xs" />
          <span className="text-stone-800 font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* ── Main Grid ────────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ── Left: Image Gallery ──────────────────────────────────────── */}
        <div className="flex gap-4">

          {/* Thumbnails */}
          <div className="hidden sm:flex flex-col gap-3">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-[72px] h-[72px] rounded-xl overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                  activeImage === i ? "border-[#b58742] shadow-md scale-105" : "border-transparent hover:border-stone-300"}`
                }
              >
                <Image
                  src={src!}
                  alt={`${product.name} view ${i + 1}`}
                  width={72}
                  height={72}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="flex-1 relative">

            {/* Wishlist Button */}
            <button
              onClick={() => setWishlisted(!wishlisted)}
              className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
                wishlisted
                ? "bg-red-500 text-white scale-110"
                : "bg-white text-stone-500 hover:text-red-500"
              }`}
            >
              <FiHeart size={18} className={wishlisted ? "fill-white" : ""} />
            </button>

            {/* Main Image */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl aspect-square">
              <Image
                src={gallery[activeImage]!}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Mobile dot indicators */}
            <div className="flex sm:hidden justify-center gap-2 mt-3">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeImage === i ? "bg-[#b58742] w-6" : "bg-stone-300"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>


        {/* ── Right: Product Info ──────────────────────────────────────── */}
          <div className="flex flex-col gap-7 lg:sticky lg:top-8">

            {/* Title & Rating */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge label="In Stock" variant="green" />
                <Badge label="New Arrival" variant="gold" />
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight mb-4">
                {product.name}
              </h1>

              {product.rating && (
                <div className="flex items-center gap-3">
                  <StarRating rating={product.rating} />
                  <span className="text-sm font-semibold text-stone-700">
                    {product.rating}
                  </span>
                  <span className="text-sm text-stone-400">
                    (128 verified reviews)
                  </span>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-stone-200" />

            

            {/* Tab Switcher */}
            <div>
              <div className="flex border-b border-stone-200 gap-6">
                {(["description", "specs", "reviews"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-semibold capitalize transition-colors relative ${
                      activeTab === tab
                        ? "text-[#b58742]"
                        : "text-stone-500 hover:text-stone-700"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b58742] rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-4 text-stone-600 text-[15px] leading-relaxed min-h-[80px]">
                {activeTab === "description" && (
                  <p>{product.description}</p>
                )}
                {activeTab === "specs" && (
                  <ul className="space-y-2">
                    {[
                      ["Material", "Premium Grade"],
                      ["Weight", "1.2 kg"],
                      ["Dimensions", "30 × 20 × 10 cm"],
                      ["Warranty", "2 Years"],
                    ].map(([k, v]) => (
                      <li key={k} className="flex gap-3">
                        <span className="text-stone-400 w-28 flex-shrink-0">{k}</span>
                        <span className="font-medium text-stone-700">{v}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === "reviews" && (
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-5xl font-black text-stone-800">
                        {product.rating ?? "5.0"}
                      </p>
                      <StarRating rating={product.rating ?? 5} />
                      <p className="text-xs text-stone-400 mt-1">128 reviews</p>
                    </div>
                    <div className="flex-1 space-y-1.5">
                      {[5, 4, 3, 2, 1].map((s) => (
                        <div key={s} className="flex items-center gap-2 text-xs">
                          <span className="text-stone-500 w-3">{s}</span>
                          <FiStar className="text-amber-400 text-xs" />
                          <div className="flex-1 bg-stone-200 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="h-full bg-amber-400 rounded-full"
                              style={{ width: `${[72, 18, 6, 3, 1][5 - s]}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-stone-700">Quantity</span>
                <div className="flex items-center bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-4 py-3 hover:bg-stone-50 text-stone-600 transition-colors"
                  >
                    <FiMinus size={14} />
                  </button>
                  <span className="w-12 text-center font-bold text-stone-800 text-sm">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="px-4 py-3 hover:bg-stone-50 text-stone-600 transition-colors"
                  >
                    <FiPlus size={14} />
                  </button>
                </div>
                <span className="text-xs text-stone-400">Only 12 left</span>
              </div>

              <div className="flex gap-3">
                {/* Primary CTA */}
                <button className="group flex-1 relative overflow-hidden bg-stone-900 hover:bg-[#b58742] text-white py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg hover:shadow-[#b58742]/30 hover:shadow-xl">
                  <FiShoppingCart size={20} className="transition-transform group-hover:rotate-12" />
                  Add to Cart
                </button>

                {/* Buy Now */}
                <button className="flex-1 bg-gradient-to-r from-[#b58742] to-amber-500 hover:from-amber-600 hover:to-[#b58742] text-white py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg hover:shadow-amber-400/30 hover:shadow-xl">
                  <FiZap size={20} />
                  Buy Now
                </button>

                {/* Share */}
                <button className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-stone-200 hover:border-[#b58742] hover:text-[#b58742] text-stone-500 transition-all duration-200 bg-white shadow-sm">
                  <FiShare2 size={18} />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  icon: <FiTruck size={20} />,
                  title: "Free Delivery",
                  sub: "Orders over $75",
                },
                {
                  icon: <FiRefreshCw size={20} />,
                  title: "30-Day Returns",
                  sub: "Hassle-free policy",
                },
                {
                  icon: <FiShield size={20} />,
                  title: "Secure Pay",
                  sub: "256-bit encryption",
                },
              ].map(({ icon, title, sub }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-4 text-center border border-stone-100 shadow-sm hover:shadow-md hover:border-[#b58742]/30 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center text-[#b58742] mx-auto mb-2">
                    {icon}
                  </div>
                  <p className="text-xs font-bold text-stone-800">{title}</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">{sub}</p>
                </div>
              ))}
            </div>

          </div>
          {/* ── End Right ─────────────────────────────────────────────────── */}
        </div>

        {/* ── You Might Also Like ──────────────────────────────────────────── */}
        <section className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b58742] mb-1">
                Curated For You
              </p>
              <h2 className="text-3xl font-extrabold text-stone-900">
                You Might Also Like
              </h2>
            </div>
            <Link
              href="/categories"
              className="text-sm font-semibold text-[#b58742] hover:underline hidden sm:block"
            >
              View All →
            </Link>
          </div>

          {/* Placeholder cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-stone-100 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-stone-300 text-5xl">
                    🛍️
                  </div>
                </div>
                <div className="p-4">
                  <div className="h-3 bg-stone-100 rounded-full w-3/4 mb-2 animate-pulse" />
                  <div className="h-3 bg-stone-100 rounded-full w-1/2 animate-pulse" />
                  <div className="mt-3 flex items-center justify-between">
                    <div className="h-4 bg-amber-100 rounded-full w-16 animate-pulse" />
                    <button className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <FiPlus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
