import Link from "next/link";

export default function BannerCTA() {
  return (
        <div className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 to-stone-800 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#b58742] text-sm font-semibold uppercase tracking-widest mb-2">
              Premium Quality
            </p>
            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Crafted for your <br className="hidden md:block" />
              <span className="text-[#b58742]">lifestyle</span>
            </h3>
            <p className="text-stone-400 mt-3 text-sm max-w-md leading-relaxed">
              Every piece in our collection is thoughtfully designed to blend
              aesthetics with functionality — built to last a lifetime.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/categories"
              className="bg-[#b58742] hover:bg-amber-500 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-colors shadow-lg shadow-amber-900/30 whitespace-nowrap"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-colors border border-white/10 whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>
  );
}

