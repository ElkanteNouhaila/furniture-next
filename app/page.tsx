// homepage
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/app/lib/products";

// export default function HomePage() {
//     return (
//         <main className="max-w-4xl mx-auto p-8 text-center">
//             <h1 className="text-5xl font-bold mb-4">Make your space truly yours</h1>
//             <p className="text-gray-500 mb-6 italic">By El Kante</p>
//             <Link href="/products" className="inline-block bg-stone-600 text-white px-6 py-3 rounded-lg hover:bg-stone-800 transition">
//                 View Products
//             </Link>
//         </main>
//     );
//   }

export default function HomePage() {
    return (
        <main className="max-w-4xl mx-auto p-8 text-center">

            <h1 className="text-5xl font-bold mb-4">Make your space truly yours</h1>

            <p className="text-gray-500 mb-6 italic">By El Kante</p>


            <h2 className="text-2xl font-semibold mb-6">
                Shop by Category
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Object.entries(categories).map(([slug, category]) => (
                    <Link key={slug} href={`/products/${slug}`}>
                        <div className="border rounded-lg p-4 hover:shadow-lg">
                            <Image
                                src={category.image}
                                alt={category.name}
                                width={300}
                                height={200}
                                className="rounded"
                            />

                            <h3 className="mt-3 text-lg font-semibold">
                                {category.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>

        </main>
    )
}
