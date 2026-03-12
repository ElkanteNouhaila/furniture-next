import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20  from-white to-stone-50">
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
