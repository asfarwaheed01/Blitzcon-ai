import React, { Suspense } from "react";
import LandingNavbar from "./components/landingNavbar/LandingNavbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import IntegrationSlider from "./components/Slider/IntegrationSlider";
import Testimonials from "./components/Testimonials/Testimonials";
import TeamSection from "./components/TeamSection/TeamSection";
const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <IntegrationSlider />
        <Testimonials />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
