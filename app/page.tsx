// homepage
import Link from "next/link";

export default function HomePage() {
    return (
        <main className="p-6">
            <h1 className="text-4xl font-bold">Furniture Store</h1>
            <p>Welcome to our furniture collection</p>

            <Link href="./products" className="text-blue-500 underline">
                View Products
            </Link>
        </main>
    );
  }