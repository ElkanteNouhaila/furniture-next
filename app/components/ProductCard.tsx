import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/lib/products";

type ProductCardProps = {
  slug: string;
  product: Product;
};

export default function ProductCard({ slug, product }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`}>
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="rounded"
        />
        <h2 className="mt-3 text-xl font-semibold">{product.name}</h2>
      </div>
    </Link>
  );
}