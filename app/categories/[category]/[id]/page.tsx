import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/lib/products";
import { FiShoppingCart, FiHeart, FiShare2 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

export default async function ProductPage({
  params,
}: {
  params: { category: string; id: string };
}) {
  const { id } = await params;
  const product = products[id];

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-500 mb-4">Product not found</p>
          <Link href="/categories" className="text-[#b58742] hover:underline">
            ← Back to categories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/categories" className="text-[#b58742] hover:underline">
            Categories
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href={`/categories/${params.category}`} className="text-[#b58742] hover:underline">
            {params.category}
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Image Section */}
          <div className="flex flex-col gap-4">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg h-96 md:h-[500px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Thumbnail Gallery (if you want to add more images) */}
            <div className="flex gap-2">
              <div className="w-20 h-20 bg-stone-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col gap-6">
            
           
            {/* Description */}
            <div className="bg-stone-50 p-6 rounded-xl">
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-semibold text-stone-900 text-lg">Why you'll love this:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-gray-700">
                  <FaCheck className="text-[#b58742]" />
                  Premium quality materials
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <FaCheck className="text-[#b58742]" />
                  Modern & elegant design
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <FaCheck className="text-[#b58742]" />
                  Fast & reliable delivery
                </li>
              </ul>
            </div>

            {/* Quantity Selector & Buttons */}
            <div className="flex flex-col gap-4 pt-4">
              
              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-semibold">Quantity:</span>
                <div className="flex items-center border border-stone-300 rounded-lg">
                  <button className="px-4 py-2 hover:bg-stone-100 transition">−</button>
                  <input 
                    type="number" 
                    defaultValue="1" 
                    className="w-16 text-center border-l border-r border-stone-300 py-2 focus:outline-none"
                  />
                  <button className="px-4 py-2 hover:bg-stone-100 transition">+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-stone-600 to-stone-700 hover:from-[#b58742] hover:to-stone-800 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg">
                  <FiShoppingCart size={24} />
                  Add to Cart
                </button>
                <button className="px-6 py-4 border-2 border-stone-300 rounded-xl hover:border-[#b58742] hover:text-[#b58742] transition-colors duration-300">
                  <FiHeart size={24} />
                </button>
                <button className="px-6 py-4 border-2 border-stone-300 rounded-xl hover:border-[#b58742] hover:text-[#b58742] transition-colors duration-300">
                  <FiShare2 size={24} />
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#b58742]">🚚</p>
                <p className="text-sm text-gray-600 mt-1">Free Shipping</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#b58742]">↩️</p>
                <p className="text-sm text-gray-600 mt-1">Easy Returns</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#b58742]">🛡️</p>
                <p className="text-sm text-gray-600 mt-1">Secure Payment</p>
              </div>
            </div>

          </div>

        </div>

        {/* Related Products Section (Optional) */}
        <div className="mt-20 pt-12 border-t border-stone-200">
          <h2 className="text-3xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Add related products here */}
          </div>
        </div>

      </div>
    </main>
  );
}
<>
</>