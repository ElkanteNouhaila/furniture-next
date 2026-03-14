import Link from "next/link";
import Hero from "./components/hero";
import CategoriesSection from "./components/categoriesSection";
import AboutSection from "./components/aboutSection";
import WhyChooseUsSection from "./components/chooseusSection";
import BannerCTA from "./components/bannerCTA";

export default function HomePage() {
  return (
    <>
      <Hero/>
      
      <WhyChooseUsSection />

      <main className="max-w-6xl mx-auto p-8">
        <CategoriesSection />
        <BannerCTA/>
        <AboutSection />
      </main>
    </>
  );
}
