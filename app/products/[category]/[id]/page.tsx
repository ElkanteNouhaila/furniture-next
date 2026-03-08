// import Image from "next/image";
// import { products } from "@/app/lib/products";

// export default function ProductPage({ params }: { params: { category: string; id: string } }) {
//   const product = products[params.id];

//   if (!product) return <p>Product not found</p>;

//   return (
//     <main className="p-6">
//       <h1 className="text-3xl font-bold">{product.name}</h1>
//       <Image src={product.image} alt={product.name} width={500} height={300} />
//       <p className="mt-4 text-gray-600">{product.price} MAD</p>
//       <p className="mt-4">{product.description}</p>
//     </main>
//   );
// }

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
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      <Image
        src={product.image}      
        alt={product.name}
        width={500}
        height={300}
        className="rounded mb-4"
      />

      <p>{product.description}</p>
      <p className="mt-2 text-gray-600">{product.price} MAD</p>
    </main>
  );
}