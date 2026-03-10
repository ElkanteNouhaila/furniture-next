import Link from "next/link";

export default function Hero() {
    return (
      <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ 
          backgroundImage: "url('/hero.jpeg')",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Make your space truly yours
          </h1>
  
          <p className="mb-6 text-lg">
            Elegant sofas, beds and modern designs for your home
          </p>
  
          <button className="bg-[#b58742] px-6 py-3 rounded-lg hover:bg-[#9e7436]">
            <Link href="/categories">Shop Now</Link>
          </button>
        </div>
      </section>
    );
  }

//   {/* Hero Section */}
//   <section className="text-center py-16">
//   <h1 className="text-5xl font-bold mb-4">Make your space truly yours</h1>
//   <p className="text-gray-500 mb-6 italic">By El Kante</p>
//   <Link
//       href="/categories"
//       className="inline-block bg-stone-600 text-white px-6 py-3 rounded-lg hover:bg-stone-800 transition hover:scale-105 cursor-pointer"
//   >
//       View Products
//   </Link>
// </section>