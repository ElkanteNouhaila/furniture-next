// import Link from "next/link";
// import Image from "next/image";

// export default function AboutSection() {
//   return (
//     <section className="py-20 from-white to-stone-50 dark:from-stone-950 dark:to-stone-900">
//       <div className="max-w-6xl mx-auto px-8">
//         <div className="grid md:grid-cols-2 gap-12 items-center">

//           {/* Image */}
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#b58742] to-stone-700 rounded-2xl blur-2xl opacity-30"></div>
//             <Image
//               src="/products/test.jpeg"
//               alt="Luxury furniture"
//               width={600}
//               height={400}
//               className="relative rounded-2xl shadow-2xl object-cover hover:shadow-3xl transition-shadow duration-300"
//             />
//           </div>

//           {/* Text */}
//           <div className="space-y-6">
//             <div>
//               <span className="text-[#b58742] text-sm font-semibold tracking-wider uppercase">About Our Brand</span>
//               <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mt-2">
//               Luxury<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">Touch</span>
//               </h2>
//             </div>

//             <p className="text-lg text-gray-700 dark:text-stone-300 leading-relaxed">
//               Luxury Touch offers modern and elegant furniture designed to
//               transform your home into a comfortable and stylish space. We believe
//               that quality furniture is an investment in your lifestyle.
//             </p>

//             <p className="text-lg text-gray-700 dark:text-stone-300 leading-relaxed">
//               From sofas and beds to curtains and decoration, we carefully
//               select products that combine quality, beauty, and comfort. Every piece
//               in our collection is handpicked to meet our high standards.
//             </p>

//             {/* Features */}
//             <div className="grid grid-cols-2 gap-4 pt-4">
//               <div className="flex items-start gap-3">
//                 <div className="text-2xl text-[#b58742] dark:text-amber-400">✓</div>
//                 <div>
//                   <h4 className="font-semibold text-stone-900 dark:text-stone-100">Premium Quality</h4>
//                   <p className="text-sm text-gray-600 dark:text-stone-400">Best materials sourced</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="text-2xl text-[#b58742] dark:text-amber-400">✓</div>
//                 <div>
//                   <h4 className="font-semibold text-stone-900 dark:text-stone-100">Expert Design</h4>
//                   <p className="text-sm text-gray-600 dark:text-stone-400">Modern aesthetics</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="text-2xl text-[#b58742] dark:text-amber-400">✓</div>
//                 <div>
//                   <h4 className="font-semibold text-stone-900 dark:text-stone-100">Fast Delivery</h4>
//                   <p className="text-sm text-gray-600 dark:text-stone-400">Quick & reliable</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="text-2xl text-[#b58742] dark:text-amber-400">✓</div>
//                 <div>
//                   <h4 className="font-semibold text-stone-900 dark:text-stone-100">24/7 Support</h4>
//                   <p className="text-sm text-gray-600 dark:text-stone-400">Always here to help</p>
//                 </div>
//               </div>
//             </div>

//             {/* Button */}
//             <Link
//               href="/about"
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-stone-700 dark:from-stone-700 dark:to-stone-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-[#b58742] hover:to-stone-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group mt-4"
//             >
//               Read More
//               <span className="group-hover:translate-x-2 transition-transform">→</span>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }





import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const features = [
  {
    title: "Premium Quality",
    description: "Carefully selected materials",
  },
  {
    title: "Expert Design",
    description: "Timeless modern aesthetics",
  },
  {
    title: "Fast Delivery",
    description: "Reliable doorstep delivery",
  },
  {
    title: "Customer Support",
    description: "Here whenever you need us",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-white to-stone-50 py-20 transition-colors duration-300 dark:from-stone-950 dark:to-stone-900 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-xl md:mx-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#b58742]/25 to-stone-700/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-stone-200/70 bg-stone-100 shadow-xl dark:border-stone-800 dark:bg-stone-900">
              <Image
                src="/products/test.jpeg"
                alt="Elegant furniture from the Luxury Touch collection"
                width={600}
                height={400}
                sizes="(max-width: 767px) 100vw, 50vw"
                className="aspect-[3/2] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="absolute -bottom-5 right-4 rounded-xl border border-stone-200/70 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-md dark:border-stone-700 dark:bg-stone-900/95 sm:right-7">
              <p className="font-serif text-xl text-[#b58742]">
                Luxury in every detail
              </p>
              <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
                Designed for your lifestyle
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="pt-3 md:pt-0">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#b58742]">
              About Our Brand
            </span>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl lg:text-5xl">
              Thoughtful Design.
              <span className="mt-1 block font-serif font-normal italic text-[#b58742]">
                Beautiful Living.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-stone-600 dark:text-stone-300">
              Luxury Touch offers modern and elegant furniture designed to
              transform your home into a comfortable and stylish space. We
              believe that quality furniture is an investment in your lifestyle.
            </p>

            <p className="mt-4 text-base leading-8 text-stone-600 dark:text-stone-300">
              From sofas and beds to curtains and decoration, we carefully
              select pieces that bring together quality, beauty, and comfort.
              Every detail matters when creating a home that feels like yours.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#b58742]/10 text-[#b58742] dark:bg-amber-400/10 dark:text-amber-400">
                    <FiCheck size={14} aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-stone-500 dark:text-stone-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#b58742] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9e7436] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b58742] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950"
            >
              Discover Our Story
              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 