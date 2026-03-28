import Hero from "./components/hero";
import CategoriesSection from "./components/categoriesSection";
import AboutSection from "./components/aboutSection";
import WhyChooseUsSection from "./components/chooseusSection";
import BannerCTA from "./components/bannerCTA";
import FeaturedProductsSection from "./components/FeaturedProductsSection";

export default function HomePage() {
  return (
    <>
      <Hero/>
      <main className="max-w-6xl mx-auto p-8">
        <AboutSection />
        <CategoriesSection />
        <FeaturedProductsSection/>
        <WhyChooseUsSection />
        <BannerCTA/>
      </main>
    </>
  );
}
