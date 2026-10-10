// import Image from "next/image";
// import Link from "next/link";
// import { FiAward, FiHeart, FiPackage, FiUsers } from "react-icons/fi";
// import { FiTool, FiClock, FiTarget } from "react-icons/fi";


// const stats = [
//   { icon: <FiUsers size={22} />,   value: "5,000+",  label: "Happy Clients"       },
//   { icon: <FiPackage size={22} />, value: "5,000+",  label: "Products Delivered"  },
//   { icon: <FiAward size={22} />,   value: "15+",      label: "Years of Excellence" },
//   { icon: <FiHeart size={22} />,   value: "100%",    label: "Satisfaction Rate"   },
// ];



// const values = [
//   {
//     title: "Premium Craftsmanship",
//     desc: "Every piece is built with meticulous attention to detail using only the finest materials.",
//     icon: <FiTool size={32} className="text-[#b58742]" />,
//   },
//   {
//     title: "Timeless Design",
//     desc: "We blend modern aesthetics with classic elegance to create furniture that never goes out of style.",
//     icon: <FiClock size={32} className="text-[#b58742]" />,
//   },
//   {
//     title: "Your Vision, Our Mission",
//     desc: "We work with you to transform your space into a reflection of your personality and lifestyle.",
//     icon: <FiTarget size={32} className="text-[#b58742]" />,
//   },
// ];
// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-stone-50">

//       {/* ── Hero Section ────────────────────────────────────────────────── */}
//       <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden">
//         {/* Decorative gold circle */}
//         <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#b58742]/10 blur-3xl pointer-events-none" />
//         <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#b58742]/5 blur-2xl pointer-events-none" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
//           <div className="max-w-2xl">
//             <span className="inline-block text-[#b58742] text-sm font-semibold uppercase tracking-widest mb-4">
//               Our Story
//             </span>
//             <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
//               Where Elegance{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">
//                 Meets Comfort
//               </span>
//             </h1>
//             <p className="text-stone-300 text-lg leading-relaxed">
//               Luxury Touch By El Kante — crafting exceptional living spaces
//               with premium furniture, blinds, and curtains since 1999.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── Stats Bar ───────────────────────────────────────────────────── */}
//       <section className="bg-white border-b border-stone-100 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-100">
//             {stats.map(({ icon, value, label }) => (
//               <div
//                 key={label}
//                 className="flex flex-col items-center justify-center gap-2 py-8 px-4 text-center hover:bg-amber-50 transition-colors group"
//               >
//                 <div className="w-11 h-11 rounded-full bg-amber-50 group-hover:bg-[#b58742] flex items-center justify-center text-[#b58742] group-hover:text-white transition-all duration-300">
//                   {icon}
//                 </div>
//                 <p className="text-3xl font-black text-stone-900">{value}</p>
//                 <p className="text-xs text-stone-400 font-medium">{label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Story Section ───────────────────────────────────────────────── */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid md:grid-cols-2 gap-16 items-center">

//           {/* Image */}
//           <div className="relative">
//             {/* Decorative frame */}
//             <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-[#b58742]/30 pointer-events-none" />
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
//               <Image
//                 src="/products/test.jpeg"
//                 alt="Luxury furniture showroom"
//                 fill
//                 className="object-cover"
//               />
//               {/* Gold badge */}
//               <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl">
//                 <p className="text-xs text-stone-400 font-medium">Est.</p>
//                 <p className="text-2xl font-black text-[#b58742]">1999</p>
//               </div>
//             </div>
//           </div>

//           {/* Text */}
//           <div className="flex flex-col gap-6">
//             <div>
//               <span className="text-[#b58742] text-xs font-bold uppercase tracking-widest">
//                 Who We Are
//               </span>
//               <h2 className="text-4xl font-black text-stone-900 mt-2 leading-tight">
//                 Redefining the Art of{" "}
//                 <span className="text-[#b58742]">Fine Living</span>
//               </h2>
//             </div>

//             <div className="space-y-4 text-stone-600 leading-relaxed">
//               <p>
//                 Welcome to <strong className="text-stone-800">Luxury Touch By El Kante</strong>,
//                 where elegance meets comfort. We specialize in premium sofas, beds,
//                 dining sets, furniture, blinds, and curtains — transforming living
//                 spaces into stylish and inviting homes.
//               </p>
//               <p>
//                 Our mission is to deliver exclusive designs that seamlessly blend
//                 quality, style, and functionality, ensuring your home reflects your
//                 personality with a touch of luxury.
//               </p>
//               <p>
//                 With superior craftsmanship, exquisite materials, and an unwavering
//                 commitment to excellence, we create timeless interiors tailored to
//                 your unique taste.
//               </p>
//             </div>

//             <Link
//               href="/categories"
//               className="inline-flex items-center gap-2 self-start bg-stone-900 hover:bg-[#b58742] text-white font-bold px-7 py-3.5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-[#b58742]/30 hover:shadow-xl text-sm"
//             >
//               Explore Our Collection →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── Values Section ──────────────────────────────────────────────── */}
//       <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-14">
//           <span className="text-[#b58742] text-xs font-bold uppercase tracking-widest">
//             What We Stand For
//           </span>
//           <h2 className="text-4xl font-black text-stone-900 mt-2">
//             Our Core Values
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {values.map(({ title, desc, icon }) => (
//             <div
//               key={title}
//               className="group bg-stone-50 hover:bg-gradient-to-br hover:from-stone-900 hover:to-stone-800 rounded-3xl p-10 transition-all duration-500 border border-stone-100 hover:border-transparent hover:shadow-2xl hover:-translate-y-1"
//             >
//               <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-amber-50  transition-all duration-300">
//                 {icon}
//               </div>
//               <h3 className="text-lg font-bold text-stone-900 group-hover:text-white mb-3 transition-colors">
//                 {title}
//               </h3>
//               <p className="text-stone-500 group-hover:text-stone-300 text-sm leading-relaxed transition-colors">
//                 {desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//       {/* ── CTA Banner ──────────────────────────────────────────────────── */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="relative bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl overflow-hidden px-10 py-16 text-center">
//           {/* Glow */}
//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//             <div className="w-96 h-96 bg-[#b58742]/20 rounded-full blur-3xl" />
//           </div>
//           <div className="relative z-10">
//             <p className="text-[#b58742] text-sm font-semibold uppercase tracking-widest mb-3">
//               Ready to Transform Your Space?
//             </p>
//             <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
//               Make Your Space Truly{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">
//                 Yours
//               </span>
//             </h2>
//             <p className="text-stone-400 max-w-xl mx-auto mb-8 leading-relaxed">
//               Browse our collections and find the perfect pieces that speak to
//               your style. Luxury is not a luxury — it's a lifestyle.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 href="/categories"
//                 className="bg-[#b58742] hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-amber-900/40"
//               >
//                 Shop the Collection
//               </Link>
//               <Link
//                 href="/contact"
//                 className="bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300"
//               >
//                 Get in Touch
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }



import Image from "next/image";
import Link from "next/link";
import {
  FiAward,
  FiHeart,
  FiPackage,
  FiUsers,
  FiTool,
  FiClock,
  FiTarget,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

const stats = [
  { icon: FiUsers, value: "5,000+", label: "Happy Clients" },
  { icon: FiPackage, value: "5,000+", label: "Products Delivered" },
  { icon: FiAward, value: "15+", label: "Years of Excellence" },
  { icon: FiHeart, value: "100%", label: "Satisfaction Rate" },
];

const values = [
  {
    title: "Premium Craftsmanship",
    desc: "We focus on thoughtful details, quality materials, and furniture designed to bring comfort and character to your home.",
    icon: FiTool,
    number: "01",
  },
  {
    title: "Timeless Design",
    desc: "We bring together contemporary style and classic elegance to help create interiors that feel beautiful for years to come.",
    icon: FiClock,
    number: "02",
  },
  {
    title: "Your Vision, Our Mission",
    desc: "Your home should reflect your personality. We help you discover pieces that complement your taste and lifestyle.",
    icon: FiTarget,
    number: "03",
  },
];

const specialties = [
  "Sofas and living room furniture",
  "Beds and bedroom furniture",
  "Dining sets and furniture",
  "Blinds and curtains",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-stone-950">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#b58742]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-[350px] w-[350px] rounded-full bg-[#b58742]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-12 lg:gap-16 lg:py-32">
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#b58742]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a267]">
                The Luxury Touch Story
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl font-medium leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Where elegance
              <br />
              meets{" "}
              <span className="italic text-[#c9a267]">comfort.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-stone-300 sm:text-base md:text-lg">
              Luxury Touch By El Kante brings together furniture, blinds, and
              curtains to help you create a home that feels personal,
              welcoming, and beautifully yours.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/categories"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b58742] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#c69a55] hover:shadow-lg hover:shadow-[#b58742]/20"
              >
                Explore our collection
                <FiArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#b58742] hover:bg-white/5"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="hidden lg:col-span-4 lg:block">
            <div className="relative mx-auto max-w-sm border-l border-t border-[#b58742]/40 p-7">
              <span className="font-serif text-7xl leading-none text-[#b58742]/50">
                “
              </span>
              <p className="mt-2 font-serif text-2xl leading-relaxed text-white">
                A beautiful home is more than a space. It is a feeling.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#b58742]" />
                <span className="text-xs uppercase tracking-[0.2em] text-stone-400">
                  The Luxury Touch philosophy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 md:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <div
              key={label}
              className={`group flex flex-col items-center justify-center px-3 py-8 text-center transition-colors duration-300 hover:bg-stone-50 sm:py-10 dark:hover:bg-stone-800/60 ${
                index % 2 === 0 ? "border-r border-stone-100 dark:border-stone-800 md:border-r-0" : ""
              } ${
                index < 2 ? "border-b border-stone-100 dark:border-stone-800 md:border-b-0" : ""
              } ${
                index !== stats.length - 1
                  ? "md:border-r md:border-stone-100 dark:md:border-stone-800"
                  : ""
              }`}
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#b58742]/10 text-[#b58742] transition-all duration-300 group-hover:bg-[#b58742] group-hover:text-white">
                <Icon size={21} />
              </span>
              <p className="font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
                {value}
              </p>
              <p className="mt-2 text-xs font-medium text-stone-500 dark:text-stone-400 sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our story */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-[#b58742]/40 sm:-left-5 sm:-top-5" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 shadow-xl dark:bg-stone-800 sm:aspect-[4/3]">
              <Image
                src="/products/test.jpeg"
                alt="Furniture and interior design at Luxury Touch"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />

              
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-stone-200 bg-white p-5 shadow-lg sm:bottom-7 sm:left-7 sm:right-7 dark:border-stone-700 dark:bg-stone-900">
                <p className="text-xs font-medium text-stone-600 dark:text-stone-400">
                  Our promise
                </p>
                <p className="mt-2 font-serif text-xl text-stone-900 dark:text-white sm:text-2xl">
                  Comfort in every detail.
                </p>
              </div>

            </div>

            <div className="absolute -bottom-5 -right-3 rounded-xl border border-stone-200 bg-white px-5 py-4 shadow-lg dark:border-stone-700 dark:bg-stone-900 sm:-right-5">
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Thoughtfully selected
              </p>
              <p className="mt-1 text-sm font-semibold text-[#b58742]">
                For your living space
              </p>
            </div>
          </div>

          {/* Story text */}
          <div className="pt-5 lg:pt-0">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#b58742]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b58742]">
                Who we are
              </span>
            </div>

            <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl md:text-5xl">
              Thoughtful pieces.
              <br />
              <span className="italic text-[#b58742]">
                Beautiful living.
              </span>
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-8 text-stone-600 dark:text-stone-400 sm:text-base">
              <p>
                Welcome to{" "}
                <strong className="font-semibold text-stone-900 dark:text-stone-100">
                  Luxury Touch By El Kante
                </strong>
                , where we bring together style, comfort, and practical design
                to help you create a space that feels like home.
              </p>

              <p>
                Our collection includes sofas, beds, dining furniture, blinds,
                and curtains. Whether you are refreshing a room or imagining a
                new look for your home, we want to help you find pieces that
                suit your space and personal taste.
              </p>

              <p>
                We believe that the right details can transform an everyday
                room into a place where you can relax, gather, and make
                memories. That is the inspiration behind the Luxury Touch
                experience.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {specialties.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#b58742]/10 text-[#b58742]">
                    <FiCheck size={14} />
                  </span>
                  <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/categories"
              className="mt-9 inline-flex items-center gap-3 border-b border-[#b58742] pb-2 text-sm font-semibold text-stone-900 transition-colors hover:text-[#b58742] dark:text-stone-100"
            >
              Discover the collection
              <FiArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-stone-200 bg-white py-20 dark:border-stone-800 dark:bg-stone-900 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#b58742]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b58742]">
                What matters to us
              </span>
              <span className="h-px w-7 bg-[#b58742]" />
            </div>

            <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl md:text-5xl">
              The values behind
              <br className="hidden sm:block" /> every detail.
            </h2>

            <p className="mt-5 text-sm leading-7 text-stone-600 dark:text-stone-400 sm:text-base">
              The principles that guide how we think about furniture, interiors,
              and the spaces you call home.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {values.map(({ title, desc, icon: Icon, number }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b58742]/40 hover:shadow-xl hover:shadow-stone-900/5 dark:border-stone-800 dark:bg-stone-950 dark:hover:border-[#b58742]/50 sm:p-9"
              >
                <span className="absolute right-6 top-5 font-serif text-5xl text-stone-200 transition-colors group-hover:text-[#b58742]/20 dark:text-stone-800">
                  {number}
                </span>

                <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#b58742]/10 text-[#b58742] transition-colors duration-300 group-hover:bg-[#b58742] group-hover:text-white">
                  <Icon size={26} />
                </span>

                <h3 className="mt-7 text-lg font-semibold text-stone-900 dark:text-stone-100">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-400">
                  {desc}
                </p>

                <div className="mt-7 h-px w-10 bg-[#b58742] transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-stone-950 px-6 py-16 text-center sm:px-12 md:py-20">
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#b58742]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#b58742]/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#b58742]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a267]">
                Your home, your style
              </span>
              <span className="h-px w-8 bg-[#b58742]" />
            </div>

            <h2 className="font-serif text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl">
              Let&apos;s make room for
              <span className="mt-2 block italic text-[#c9a267]">
                something beautiful.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
              Find pieces that feel right for your home, or get in touch if you
              need help choosing.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/categories"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b58742] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#c69a55]"
              >
                Shop the collection
                <FiArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-[#b58742] hover:bg-white/5"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
