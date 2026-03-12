import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/lib/products";

type ProductCardProps = {
  slug: string;
  product: Product;
};

export default function ProductCard({ slug, product }: ProductCardProps) {
  return (
    <Link href={`/categories/${slug}`}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col">
        
        {/* Image Container */}
        <div className="relative w-full h-64 overflow-hidden bg-stone-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          
          {/* Badge */}
          <div className="absolute top-4 right-4 bg-[#b58742] text-white px-3 py-1 rounded-full text-sm font-semibold">
            New
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          
          {/* Title */}
          <h2 className="text-xl font-bold text-stone-900 group-hover:text-[#b58742] transition-colors mb-2 line-clamp-2">
            {product.name}
          </h2>

          {/* Description if available */}
          {product.description && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
              {product.description}
            </p>
          )}

          
          {/* Button */}
          <button className="w-full bg-stone-600 text-white py-3 rounded-lg group-hover:bg-[#b58742] transition-colors font-semibold mt-auto">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
