import Image from "next/image";
import { products } from "@/app/lib/products";

export default async function ProductPage({
  params,
}: {
  params: { category: string; id: string };
}) {
  const { id } = await params;
  const product = products[id];

  if (!product) return <p>Product not found</p>;

  return (
    <main className="p-6 flex justify-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={300}
          className="rounded mb-4 mx-auto"
        />

        <p className="text-gray-600">{product.description}</p>
      </div>
    </main>
  );
}