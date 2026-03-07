// // homepage
// import Link from "next/link";

// export default function HomePage() {
//     return (
//         <main className="p-6 max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl font-bold">Make your space truly yours</h1>
//             <p className="text-gray-700 mb-6">By El Kante</p>
//             <Link href="./products" className="inline-block bg-stone-400 text-stone-900 px-6 py-3 rounded hover:bg-stone-500 transition">
//                 View Products
//             </Link>
//         </main>
//     );
//   }
// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="space-y-12">

      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gray-100 flex items-center justify-center">
        <Image
          src="/hero-desktop.jpeg" 
          alt="Furniture Hero"
          fill
          className="object-cover"
        />
        <div className="absolute text-center text-white bg-black bg-opacity-40 p-6 rounded">
          <h1 className="text-5xl font-bold mb-4">Make Your Space Truly Yours</h1>
          <p className="mb-6 text-lg">High-quality furniture for every home</p>
          <Link
            href="/products"
            className="px-6 py-3 bg-stone-600 hover:bg-stone-800 rounded text-white font-semibold"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="px-6">
        <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Link href="/products/sofa" className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <Image src="/products/test.jpeg" alt="Sofa" width={400} height={250} className="object-cover"/>
            <h3 className="p-4 text-xl font-semibold">Sofas</h3>
          </Link>
          <Link href="/products/bed" className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <Image src="/products/test.jpeg" alt="Bed" width={400} height={250} className="object-cover"/>
            <h3 className="p-4 text-xl font-semibold">Beds</h3>
          </Link>
          <Link href="/products/table" className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <Image src="/products/test.jpeg" alt="Table" width={400} height={250} className="object-cover"/>
            <h3 className="p-4 text-xl font-semibold">Tables</h3>
          </Link>
          <Link href="/products/chair" className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <Image src="/products/test.jpeg" alt="Chair" width={400} height={250} className="object-cover"/>
            <h3 className="p-4 text-xl font-semibold">Chairs</h3>
          </Link>
        </div>
      </section>

      {/* About / Intro */}
      <section className="px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We provide premium furniture designed for comfort, style, and durability.
          Our collection is curated to suit every home and lifestyle.
        </p>
      </section>

    </main>
  );
}