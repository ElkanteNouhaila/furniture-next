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
    <main className="p-8 flex justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">

        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>


          <p className="text-gray-600 mb-6">
            {product.description}
          </p>
      
        </div>


      </div>
    </main>
  );
}