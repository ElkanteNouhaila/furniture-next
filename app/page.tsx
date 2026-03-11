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
        {/* <section className="max-w-6xl mx-auto px-8 py-16">
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
        </section> */}
        <section className="max-w-6xl mx-auto px-8 py-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-3">Shop by Category</h2>
    <p className="text-gray-600 text-lg">Explore our curated collection of premium furniture</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {/* Sofas */}
    <Link href="/categories/sofas">
      <div className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900 group-hover:from-stone-800 group-hover:to-black transition-all duration-300"></div>
        
        {/* Icon/Emoji */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl group-hover:scale-125 transition-transform duration-300">🛋️</span>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#b58742] transition-colors">Sofas</h3>
          <p className="text-stone-200 text-sm mt-1">12 Products</p>
        </div>
      </div>
    </Link>

    {/* Beds */}
    <Link href="/categories/beds">
      <div className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900 group-hover:from-stone-800 group-hover:to-black transition-all duration-300"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl group-hover:scale-125 transition-transform duration-300">🛏️</span>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#b58742] transition-colors">Beds</h3>
          <p className="text-stone-200 text-sm mt-1">8 Products</p>
        </div>
      </div>
    </Link>

    {/* Tables */}
    <Link href="/categories/tables">
        <div className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900 group-hover:from-stone-800 group-hover:to-black transition-all duration-300"></div>
    
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-125 transition-transform duration-300">🍽️</span>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#b58742] transition-colors">Tables</h3>
                    <p className="text-stone-200 text-sm mt-1">15 Products</p>
                </div>
        </div>
    </Link>


    {/* Chairs */}
    <Link href="/categories/chairs">
      <div className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900 group-hover:from-stone-800 group-hover:to-black transition-all duration-300"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl group-hover:scale-125 transition-transform duration-300">🪑</span>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#b58742] transition-colors">Chairs</h3>
          <p className="text-stone-200 text-sm mt-1">10 Products</p>
        </div>
      </div>
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
// export function AboutSection() {
//   return (
//     <section className="max-w-6xl mx-auto px-8 py-16">
//         <div className="grid md:grid-cols-2 gap-10 items-center">

//             {/* Image */}
//             <div>
//                 <Image
//                     src="/products/test.jpeg"
//                     alt="Luxury furniture"
//                     width={600}
//                     height={400}
//                     className="rounded-lg shadow-md"
//                 />
//             </div>

//             {/* Text */}
//             <div>
//                 <h2 className="text-3xl font-bold mb-4">About Us</h2>
//                 <p className="text-gray-600 mb-4">
//                     Luxury Touch offers modern and elegant furniture designed to
//                     transform your home into a comfortable and stylish space.
//                 </p>
//                 <p className="text-gray-600 mb-6">
//                     From sofas and beds to curtains and decoration, we carefully
//                     select products that combine quality, beauty, and comfort.
//                 </p>
//                 <Link
//                     href="/about"
//                     className="inline-block bg-stone-600 text-white px-6 py-3 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-stone-700 cursor-pointer"
//                 >
//                     Read More
//                 </Link>
//             </div>

//         </div>
//     </section>
//   );
// }
export function AboutSection() {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
  
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b58742] to-stone-700 rounded-2xl blur-2xl opacity-30"></div>
              <Image
                src="/products/test.jpeg"
                alt="Luxury furniture"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl object-cover hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
  
            {/* Text */}
            <div className="space-y-6">
              <div>
                <span className="text-[#b58742] text-sm font-semibold tracking-wider uppercase">About Our Brand</span>
                <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-2">
                  Luxury Touch
                </h2>
              </div>
  
              <p className="text-lg text-gray-700 leading-relaxed">
                Luxury Touch offers modern and elegant furniture designed to
                transform your home into a comfortable and stylish space. We believe
                that quality furniture is an investment in your lifestyle.
              </p>
  
              <p className="text-lg text-gray-700 leading-relaxed">
                From sofas and beds to curtains and decoration, we carefully
                select products that combine quality, beauty, and comfort. Every piece
                in our collection is handpicked to meet our high standards.
              </p>
  
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Premium Quality</h4>
                    <p className="text-sm text-gray-600">Best materials sourced</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Expert Design</h4>
                    <p className="text-sm text-gray-600">Modern aesthetics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Fast Delivery</h4>
                    <p className="text-sm text-gray-600">Quick & reliable</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-stone-900">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Always here to help</p>
                  </div>
                </div>
              </div>
  
              {/* Button */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-stone-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-[#b58742] hover:to-stone-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group mt-4"
              >
                Read More
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  