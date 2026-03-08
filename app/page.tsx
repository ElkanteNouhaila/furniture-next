// homepage
import Link from "next/link";

export default function HomePage() {
    return (
        <main className="max-w-4xl mx-auto p-8 text-center">
            <h1 className="text-5xl font-bold mb-4">Make your space truly yours</h1>
            <p className="text-gray-600 mb-6">By El Kante</p>
            <Link href="./products" className="inline-block bg-stone-400 text-white px-6 py-3 rounded-lg hover:bg-stone-500 transition">
                View Products
            </Link>
        </main>
    );
  }


