//home page
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto p-8">

      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Make your space truly yours</h1>
        <p className="text-gray-500 mb-6 italic">By El Kante</p>
        <Link
          href="/categories"
          className="inline-block bg-stone-600 text-white px-6 py-3 rounded-lg hover:bg-stone-800 transition"
        >
          View Products
        </Link>
      </section>

      {/* Why Choose Us */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          <div>✔ High Quality Materials</div>
          <div>✔ Modern Designs</div>
          <div>✔ Affordable Prices</div>
          <div>✔ Fast Delivery</div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Link
            href="/categories/sofas"
            className="border rounded-lg p-4 hover:shadow-lg transition text-center"
          >
            Sofas
          </Link>
          <Link
            href="/categories/beds"
            className="border rounded-lg p-4 hover:shadow-lg transition text-center"
          >
            Beds
          </Link>
          <Link
            href="/categories/curtains"
            className="border rounded-lg p-4 hover:shadow-lg transition text-center"
          >
            Curtains
          </Link>
          <Link
            href="/categories/blinds"
            className="border rounded-lg p-4 hover:shadow-lg transition text-center"
          >
            Blinds
          </Link>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />
      
    </main>
  );
}

// About Section Component
export function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <Image
            src="/products/test.jpeg"
            alt="Luxury furniture"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
            Luxury Touch offers modern and elegant furniture designed to
            transform your home into a comfortable and stylish space.
          </p>
          <p className="text-gray-600 mb-6">
            From sofas and beds to curtains and decoration, we carefully
            select products that combine quality, beauty, and comfort.
          </p>
          <Link
            href="/about"
            className="bg-stone-600 text-white px-6 py-3 rounded hover:bg-stone-700 transition"
          >
            Read More
          </Link>
        </div>

      </div>
    </section>
  );
}