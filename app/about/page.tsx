import Image from "next/image";
import Link from "next/link";
import { FiAward, FiHeart, FiPackage, FiUsers } from "react-icons/fi";
import { FiCoffee, FiStar, FiTarget } from "react-icons/fi";


const stats = [
  { icon: <FiUsers size={22} />,   value: "5,000+",  label: "Happy Clients"       },
  { icon: <FiPackage size={22} />, value: "5,000+",  label: "Products Delivered"  },
  { icon: <FiAward size={22} />,   value: "15+",      label: "Years of Excellence" },
  { icon: <FiHeart size={22} />,   value: "100%",    label: "Satisfaction Rate"   },
];

const values = [
  {
    title: "Premium Craftsmanship",
    desc: "Every piece is built with meticulous attention to detail using only the finest materials.",
    icon: <FiCoffee size={32} className="text-[#b58742]" />,
  },
  {
    title: "Timeless Design",
    desc: "We blend modern aesthetics with classic elegance to create furniture that never goes out of style.",
    icon: <FiStar size={32} className="text-[#b58742]" />,
  },
  {
    title: "Your Vision, Our Mission",
    desc: "We work with you to transform your space into a reflection of your personality and lifestyle.",
    icon: <FiTarget size={32} className="text-[#b58742]" />,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-50">

      {/* ── Hero Section ────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden">
        {/* Decorative gold circle */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#b58742]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#b58742]/5 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block text-[#b58742] text-sm font-semibold uppercase tracking-widest mb-4">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Where Elegance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">
                Meets Comfort
              </span>
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed">
              Luxury Touch By El Kante — crafting exceptional living spaces
              with premium furniture, blinds, and curtains since 1999.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-100">
            {stats.map(({ icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-2 py-8 px-4 text-center hover:bg-amber-50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-amber-50 group-hover:bg-[#b58742] flex items-center justify-center text-[#b58742] group-hover:text-white transition-all duration-300">
                  {icon}
                </div>
                <p className="text-3xl font-black text-stone-900">{value}</p>
                <p className="text-xs text-stone-400 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story Section ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-[#b58742]/30 pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/products/test.jpeg"
                alt="Luxury furniture showroom"
                fill
                className="object-cover"
              />
              {/* Gold badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-xs text-stone-400 font-medium">Est.</p>
                <p className="text-2xl font-black text-[#b58742]">1999</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-[#b58742] text-xs font-bold uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="text-4xl font-black text-stone-900 mt-2 leading-tight">
                Redefining the Art of{" "}
                <span className="text-[#b58742]">Fine Living</span>
              </h2>
            </div>

            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Welcome to <strong className="text-stone-800">Luxury Touch By El Kante</strong>,
                where elegance meets comfort. We specialize in premium sofas, beds,
                dining sets, furniture, blinds, and curtains — transforming living
                spaces into stylish and inviting homes.
              </p>
              <p>
                Our mission is to deliver exclusive designs that seamlessly blend
                quality, style, and functionality, ensuring your home reflects your
                personality with a touch of luxury.
              </p>
              <p>
                With superior craftsmanship, exquisite materials, and an unwavering
                commitment to excellence, we create timeless interiors tailored to
                your unique taste.
              </p>
            </div>

            <Link
              href="/categories"
              className="inline-flex items-center gap-2 self-start bg-stone-900 hover:bg-[#b58742] text-white font-bold px-7 py-3.5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-[#b58742]/30 hover:shadow-xl text-sm"
            >
              Explore Our Collection →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Values Section ──────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#b58742] text-xs font-bold uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="text-4xl font-black text-stone-900 mt-2">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="group bg-stone-50 hover:bg-gradient-to-br hover:from-stone-900 hover:to-stone-800 rounded-3xl p-8 transition-all duration-500 border border-stone-100 hover:border-transparent hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="text-4xl mb-5">{icon}</div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-white mb-3 transition-colors">
                  {title}
                </h3>
                <p className="text-stone-500 group-hover:text-stone-300 text-sm leading-relaxed transition-colors">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl overflow-hidden px-10 py-16 text-center">
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-[#b58742]/20 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <p className="text-[#b58742] text-sm font-semibold uppercase tracking-widest mb-3">
              Ready to Transform Your Space?
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Make Your Space Truly{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">
                Yours
              </span>
            </h2>
            <p className="text-stone-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Browse our collections and find the perfect pieces that speak to
              your style. Luxury is not a luxury — it's a lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/categories"
                className="bg-[#b58742] hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-amber-900/40"
              >
                Shop the Collection
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
