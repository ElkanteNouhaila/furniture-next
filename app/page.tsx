//home page
import Link from "next/link";
import Image from "next/image";
import Hero from "./components/hero";


export default function HomePage() {
  return (
    <>
      <Hero/>

        {/* Why Choose Us */}
        <section className="w-full bg-stone-100 py-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
                <div>✔ High Quality Materials</div>
                <div>✔ Modern Designs</div>
                <div>✔ Affordable Prices</div>
                <div>✔ Fast Delivery</div>
            </div>
        </section>
      <main className="max-w-6xl mx-auto p-8">

        {/* Categories Section */}
        <section className="max-w-6xl mx-auto px-8 py-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <Link
                    href="/categories/sofas"
                    className="border rounded-lg p-4 bg-stone-600 text-white hover:shadow-lg hover:bg-stone-800 transition text-center hover:scale-105 cursor-pointer"
                >
                    Sofas
                </Link>
                <Link
                    href="/categories/beds"
                    className="border rounded-lg p-4 bg-stone-600 text-white hover:shadow-lg hover:bg-stone-800 transition text-center hover:scale-105 cursor-pointer"
                >
                    Beds
                </Link>
                <Link
                    href="/categories/tables"
                    className="border rounded-lg p-4 bg-stone-600 text-white hover:shadow-lg hover:bg-stone-800 transition text-center hover:scale-105 cursor-pointe"
                >
                    Tables
                </Link>
                <Link
                    href="/categories/chairs"
                    className="border rounded-lg p-4 bg-stone-600 text-white hover:shadow-lg hover:bg-stone-800 transition text-center hover:scale-105 cursor-pointe"
                >
                    Chairs
                </Link>
            </div>
        </section>

        {/* About Section */}
        <AboutSection />
      </main>
    </>
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
                    className="inline-block bg-stone-600 text-white px-6 py-3 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-stone-700 cursor-pointer"
                >
                    Read More
                </Link>
            </div>

        </div>
    </section>
  );
}
