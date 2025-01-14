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

// Lazy load components
const ServicesSection = React.lazy(
  () => import("./components/ServicesSection/ServicesSection")
);
const KeyFeatures = React.lazy(
  () => import("./components/KeyFeatures/KeyFeatures")
);
const ScheduleDemo = React.lazy(
  () => import("./components/ScheduleDemo/ScheduleDemo")
);
const AboutSection = React.lazy(() => import("./components/AboutUs/Aboutus"));

// Loading fallback component
const LoadingFallback = () => (
  <div
    style={{
      minHeight: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* You can replace this with a custom loader or skeleton */}
    <div>Loading...</div>
  </div>
);

const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />
      <main>
        <HeroSection />
        <Suspense fallback={<LoadingFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <KeyFeatures />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ScheduleDemo />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <AboutSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
