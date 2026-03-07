// homepage
import Link from "next/link";

export default function HomePage() {
    return (
        <main className="p-6 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold">Make your space truly yours</h1>
            <p className="text-gray-700 mb-6">By El Kante</p>
            <Link href="./products" className="inline-block bg-stone-200 text-stone-900 px-6 py-3 rounded hover:bg-stone-300 transition">
                View Products
            </Link>
        </main>
    );
  }