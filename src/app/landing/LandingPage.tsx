// import React from "react";
// import LandingNavbar from "./components/landingNavbar/LandingNavbar";
// import HeroSection from "./components/HeroSection/HeroSection";
// import Footer from "./components/Footer/Footer";
// import ServicesSection from "./components/ServicesSection/ServicesSection";
// import ScheduleDemo from "./components/ScheduleDemo/ScheduleDemo";
// import AboutSection from "./components/AboutUs/Aboutus";
// import KeyFeatures from "./components/KeyFeatures/KeyFeatures";

// const LandingPage = () => {
//   return (
//     <div>
//       <LandingNavbar />
//       <main>
//         <HeroSection />
//         <ServicesSection />
//         <KeyFeatures />
//         <ScheduleDemo />
//         <AboutSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;

import React, { Suspense } from "react";
import LandingNavbar from "./components/landingNavbar/LandingNavbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import IntegrationSlider from "./components/Slider/IntegrationSlider";
import Testimonials from "./components/Testimonials/Testimonials";
const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <IntegrationSlider />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
