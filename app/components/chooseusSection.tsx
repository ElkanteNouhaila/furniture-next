import { MdLocalShipping, MdDesignServices } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { MdVerified } from "react-icons/md"; 
import Link from 'next/link' 

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: MdVerified ,
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

  return (
    <section className="w-full py-20 bg-gradient-to-br from-stone-50 via-white to-stone-50">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Why Choose Luxury Touch?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing you with the best furniture shopping experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-stone-100 hover:border-[#b58742]"
              >
                {/* Icon Container */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#b58742] to-stone-600 rounded-lg group-hover:shadow-lg transition-all duration-300">
                  <Icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-[#b58742] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div className="w-12 h-1 bg-gradient-to-r from-[#b58742] to-transparent rounded group-hover:w-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Experience the difference with our premium furniture collection
          </p>
          <Link href="/categories">
            <button className="bg-gradient-to-r from-stone-600 to-stone-700 hover:from-[#b58742] hover:to-stone-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
