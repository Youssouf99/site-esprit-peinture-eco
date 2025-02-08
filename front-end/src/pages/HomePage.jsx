import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import RecentRealisations from "../components/RecentRealisations";
import ServicesSection from "../components/ServiceSection";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <ServicesSection />
      <RecentRealisations />
      <Contact />
    </>
  );
};

export default HomePage;
