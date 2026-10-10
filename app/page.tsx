// import Hero from "./components/hero";
// import CategoriesSection from "./components/categoriesSection";
// import AboutSection from "./components/aboutSection";
// import WhyChooseUsSection from "./components/chooseusSection";
// // import BannerCTA from "./components/bannerCTA";
// import FeaturedProductsSection from "./components/FeaturedProductsSection";

// export default function HomePage() {
//   return (
//     <>
//       <Hero/>
//       <main className="max-w-6xl mx-auto p-8">
//         <AboutSection />
//         <CategoriesSection />
//         <FeaturedProductsSection/>
//         <WhyChooseUsSection />
//         {/* <BannerCTA/> */}
//       </main>
//     </>
//   );
// }



import Hero from "./components/hero";
import AboutSection from "./components/aboutSection";
import CategoriesSection from "./components/categoriesSection";
import FeaturedProductsSection from "./components/FeaturedProductsSection";
import WhyChooseUsSection from "./components/chooseusSection";

export default function HomePage() {
  return (
    <>
      <Hero />

      <AboutSection />

      <CategoriesSection />

      <FeaturedProductsSection />

      <WhyChooseUsSection />
      
    </>
  );
}