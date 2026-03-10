import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16">

      <h1 className="text-4xl font-bold mb-8 text-center">
        About Luxury Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>
          <Image
            src="/products/test.jpeg"
            alt="Luxury furniture"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        <div>
            <p className="text-gray-600 mb-4">
                Welcome to Luxury Touch By El Kante, where elegance meets comfort. 
            </p>
  
            <p className="text-gray-600 mb-6">
                We specialize in premium sofas, beds, dining sets, furniture, blinds, and curtains, 
                transforming living spaces into stylish and inviting homes. 
            </p>

            <p className="text-gray-600 mb-6">
                Our mission is to deliver exclusive designs that seamlessly blend quality, style, and functionality, 
                ensuring your home reflects your personality with a touch of luxury.
            </p>

            <p className="text-gray-600 mb-6">
                At Luxury Touch By El Kante, we believe that every detail matters. With superior craftsmanship, 
                exquisite materials, and a commitment to excellence, we create timeless interiors tailored to your 
                unique taste.
            </p>

            <p className="text-gray-600 mb-6">
                Make your space truly yours—with Luxury Touch By El Kante.
            </p>
        </div>

      </div>

    </main>
  );
}