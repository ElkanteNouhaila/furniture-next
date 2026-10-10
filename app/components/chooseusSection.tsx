// import { MdLocalShipping, MdDesignServices } from "react-icons/md";
// import { BiSolidOffer } from "react-icons/bi";
// import { MdVerified } from "react-icons/md"; 
// import Link from 'next/link' 

// export default function WhyChooseUsSection() {
//   const features = [
//     {
//       icon: MdVerified ,
//       title: "Premium Quality",
//       description: "Carefully selected products made from the finest materials",
//     },
//     {
//       icon: MdDesignServices,
//       title: "Modern Designs",
//       description: "Contemporary furniture that matches your style and space",
//     },
//     {
//       icon: BiSolidOffer,
//       title: "Affordable Prices",
//       description: "Luxury furniture at competitive and fair prices",
//     },
//     {
//       icon: MdLocalShipping,
//       title: "Fast Delivery",
//       description: "Quick and reliable shipping to your doorstep",
//     },
//   ];

//   return (
//     <section className="w-full py-20 bg-gradient-to-br from-stone-50 via-white to-stone-50 dark:from-stone-900 dark:via-stone-950 dark:to-stone-900">
//       <div className="max-w-6xl mx-auto px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
//             Why Choose Luxury<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">Touch</span>?
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             We're committed to providing you with the best furniture shopping experience
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <div
//                 key={index}
//                 className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-stone-100 hover:border-[#b58742]"
//               >
//                 {/* Icon Container */}
//                 <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#b58742] to-stone-600 rounded-lg group-hover:shadow-lg transition-all duration-300">
//                   <Icon size={32} className="text-white" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-[#b58742] transition-colors">
//                   {feature.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 leading-relaxed mb-4">
//                   {feature.description}
//                 </p>

//                 {/* Bottom accent */}
//                 <div className="w-12 h-1 bg-gradient-to-r from-[#b58742] to-transparent rounded group-hover:w-full transition-all duration-300"></div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center">
//           <p className="text-gray-600 text-lg mb-6">
//             Experience the difference with our premium furniture collection
//           </p>
//           <Link href="/categories">
//             <button className="bg-gradient-to-r from-stone-600 to-stone-700 hover:from-[#b58742] hover:to-stone-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer">
//               Start Shopping
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }




import { MdLocalShipping, MdDesignServices, MdVerified } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import Link from "next/link";

const features = [
  {
    icon: MdVerified,
    title: "Premium Quality",
    description: "Carefully selected products made from the finest materials",
  },
  {
    icon: MdDesignServices,
    title: "Modern Designs",
    description: "Contemporary furniture that matches your style and space",
  },
  {
    icon: BiSolidOffer,
    title: "Affordable Prices",
    description: "Luxury furniture at competitive and fair prices",
  },
  {
    icon: MdLocalShipping,
    title: "Fast Delivery",
    description: "Quick and reliable shipping to your doorstep",
  },
];

export default function WhyChooseUsSection() {
  return (

<section className="bg-stone-50/70 py-20 transition-colors duration-300 dark:bg-stone-950 md:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#b58742]">
            The Luxury Touch Difference
          </span>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 md:text-5xl">
            Why Choose Luxury
            <span className="text-[#b58742]">Touch</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-stone-600 dark:text-stone-400 md:text-lg">
            We’re committed to providing you with the best furniture shopping
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-stone-200/80 bg-white/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b58742]/50 hover:shadow-lg dark:border-stone-700/70 dark:bg-stone-900/70 dark:hover:border-amber-500/40"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#b58742]/10 text-[#a47735] transition-colors duration-300 group-hover:bg-[#b58742] group-hover:text-white dark:text-amber-400 dark:group-hover:text-white">
                <Icon size={25} aria-hidden="true" />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-stone-900 dark:text-stone-100">
                {title}
              </h3>

              <p className="text-sm leading-7 text-stone-600 dark:text-stone-400">
                {description}
              </p>

              <div className="mt-6 h-px w-10 bg-[#b58742]/70 transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-6 text-sm text-stone-600 dark:text-stone-400 md:text-base">
            Experience the difference with our premium furniture collection.
          </p>
          <Link
            href="/categories"
            className="inline-flex items-center justify-center rounded-xl bg-[#b58742] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9e7436] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b58742] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950"
          >
            Explore Collection
            <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
