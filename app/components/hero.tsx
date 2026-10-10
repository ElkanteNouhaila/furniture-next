import Link from "next/link";

export default function Hero() {
  return (
    <section
    className="relative flex min-h-[100svh] w-full items-center justify-center bg-cover bg-center bg-no-repeat text-white md:min-h-screen"
    style={{
      backgroundImage: "url('/hero.jpeg')",
      backgroundAttachment: "scroll",
    }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#d6b477] sm:text-sm">
          Luxury Touch By El Kante
        </p>

        <h1 className="mb-6 font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Make Your Space
          <span className="mt-2 block text-[#d6b477]">
            Truly Yours
          </span>
        </h1>

        <p className="mx-auto mb-9 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
          Discover elegant sofas, comfortable beds, and timeless furniture
          designed to make your home feel exceptional.
        </p>

        <Link
          href="/categories"
          className="inline-flex items-center justify-center rounded-md border border-[#b58742] bg-[#b58742] px-8 py-3.5 text-sm font-medium tracking-wide text-white transition duration-300 hover:border-[#9e7436] hover:bg-[#9e7436] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Explore Our Collection
        </Link>
      </div>
    </section>
  );
}